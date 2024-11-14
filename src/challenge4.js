/*

Una persona ha sido asesinada en la noche de Halloween 🔪. 
Usando un hechizo 🧙‍♀️, hemos conseguido escuchar su último susurro pero es muy debíl 
y no nos permite identificar quién pudo ser el asesino.

La información que nos proporciona:

whisper: cadena de texto que representa lo que la víctima intentó decir antes de morir

suspects: lista de cadenas que representa los nombres de todos los sospechosos.

Hay que tener que el susurro whisper tiene algunas reglas:

Cada ~ representa una letra incierta en el susurro.
Cada posición del susurro es una posición del nombre del asesino.
La longitud del whisper no siempre representa la longitud completa del nombre, ya que la víctima 
pudo haber muerto antes de terminar de decirlo.
Pero si el último carácter del susurro es una $, entonces el nombre del asesino terminaba ahí.
¡Tu objetivo es descubrir quién pudo ser el asesino! Debes devolver:

Si solo un nombre encaja con el patrón del susurro, retorna ese nombre.
Si hay varios nombres que encajan, retorna todos los nombres separados por comas.
Si ningún nombre encaja, retorna una cadena vacía ("").
Las mayúsculas y minúsculas de las letras no importan.

*/

function findTheKiller(whisper, suspects) {
    let killer = [];
    for (let i = 0; i < suspects.length; i++) {
        let suspect = suspects[i];

        if ((whisper.length <= suspect.length && (whisper[whisper.length - 1] !== '$' || whisper.length - 1 === suspect.length)) 
            || (whisper[whisper.length - 1] === '$' && whisper.length == suspect.length +1 ) ) {
            let match = true;
            for (let j = 0; j < whisper.length; j++) {
            if(whisper[j] !== '$') break;
            if (whisper[j] !== '~' && whisper[j].toLowerCase() !== suspect[j].toLowerCase() && whisper[j] !== '$') {
                match = false;
                break;
            }
            }
            if (match) {
            killer.push(suspect);
            }
        }
    }
    return killer.join(',');
}

const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

console.log(findTheKiller(whisper, suspects)); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

console.log(findTheKiller(whisper2, suspects2)); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

console.log(findTheKiller(whisper3, suspects3)); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

console.log(findTheKiller(whisper4, suspects4));

console.log(findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha']))   // -> 'Agatha'