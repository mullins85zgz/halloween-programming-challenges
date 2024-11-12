/*
En una lucha épica entre muertos vivientes 🧟 y humanos 👮‍♂️, ambos bandos tienen una lista de combatientes 
con poderes de ataque específicos.

La batalla se desarrolla en rondas, y cada ronda enfrenta a cada combatiente de su bando.

El bando con mayor poder de ataque gana la ronda, y su poder se suma al siguiente combatiente de su equipo.

En caso de empate, ambos combatientes caen y no afectan a la próxima ronda.

Dadas dos cadenas de texto zombies y humans, donde cada dígito (del 1 al 9) representa el poder de ataque de un combatiente, 
determina quién queda al final y con cuánto poder de ataque.

Importante: Las dos cadenas siempre tendrán la misma longitud.

La salida es una cadena de texto que representa el resultado final de la batalla.

Si queda un zombie, devuelve su poder seguido de "z", por ejemplo "3z".
Si queda un humano, devuelve su poder seguido de "h", por ejemplo "2h".
Si hay un empate y ninguno queda con poder al final, devuelve "x".

*/

function battleHorde(zombies, humans) {
    let z = 0
    let h = 0
    for (let i = 0; i < zombies.length; i++) {
        if (z+parseInt(zombies[i], 10) > h+parseInt(humans[i],10)) {
            z = (z+parseInt(zombies[i], 10)) - (h+parseInt(humans[i], 10))
            h=0
        } else if (z+parseInt(zombies[i],10) < h+parseInt(humans[i],10)) {
            h = (h+parseInt(humans[i], 10)) - (z+parseInt(zombies[i], 10))
            z=0
        }else{
            z = 0
            h = 0
        }
    }
    if (z > h) {
        return z + 'z'
    } else if (z < h) {
        return h + 'h'
    } else {
        return 'x'
    }
  }

  let zombies = '242'
  let humans = '334'
  console.log( battleHorde(zombies, humans) )   // 20h