/*

Estás atrapado en una pesadilla en la que Freddy Krueger te persigue 😭. 
El sueño está representado por un laberinto de celdas, donde cada celda tiene un valor numérico que indica el nivel de peligro de esa parte del sueño.

Debes encontrar el camino más seguro (es decir, el que tenga el menor valor total de peligro) desde 
la esquina superior izquierda hasta la esquina inferior derecha de la matriz.

En este desafío, solo puedes moverte hacia la derecha o hacia abajo (no puedes retroceder ni moverte en diagonal) 
y debes calcular el nivel total de peligro del camino más seguro.

La pesadilla está representada por una matriz dream de tamaño n x m donde cada celda es un número positivo 
que representa el nivel de peligro de esa celda en el sueño.

Y tienes que devolver el valor total de peligro del camino más seguro de la esquina superior izquierda (posición [0][0])
a la esquina inferior derecha (posición [n-1][m-1]).

*/

function findSafestPath(dream) {
    const rows = dream.length;
    const columns = dream[0].length;
    const dpTable = new Array(rows).fill(0).map(() => new Array(columns).fill(0));

    dpTable[0][0] = dream[0][0];

    for (let i = 1; i < rows; i++) {
        dpTable[i][0] = dpTable[i - 1][0] + dream[i][0];
    }

    for (let j = 1; j < columns; j++) {
        dpTable[0][j] = dpTable[0][j - 1] + dream[0][j];
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            dpTable[i][j] = Math.min(dpTable[i - 1][j], dpTable[i][j - 1]) + dream[i][j];
        }
    }

    return dpTable[rows - 1][columns - 1];
  }

 module.exports = findSafestPath;

 const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]

console.log(findSafestPath(dream)); // 7