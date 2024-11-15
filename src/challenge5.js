/*

Estás atrapado en Silent Hill, en una habitación cuadrada de tamaño n x n y 
el temido Pyramid Head (▲) está en algún lugar de la habitación, moviéndose hacia ti (T).

Tú no puedes moverte, y Pyramid Head se mueve una celda por turno, en cualquiera de las cuatro direcciones 
cardinales (arriba, abajo, izquierda, derecha), pero siempre elige el camino más corto hacia tu posición. 
Tu objetivo es determinar si Pyramid Head puede alcanzarte.

La habitación está representada por una matriz n x n:

T: tu posición (donde te encuentras atrapado).
▲: la posición inicial de Pyramid Head.
.: espacios vacíos donde Pyramid Head puede moverse.
#: paredes que Pyramid Head no puede atravesar.
Escribe una función que determine si Pyramid Head podrá alcanzarte. 
Si Pyramid Head puede alcanzarte, devuelve el número de pasos con lo que lo puede lograr, 
si no puede alcanzarte entonces devuelve -1.

*/


function escapePyramidHead(room) {
    let n = room.length;
    let start, target;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (room[i][j] === '▲') start = [i, j];
            if (room[i][j] === 'T') target = [i, j];
        }
    }
    let q = [start];
    let d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dist = Array(n).fill().map(() => Array(n).fill(-1));
    dist[start[0]][start[1]] = 0;
    while (q.length) {
        let [x, y] = q.shift();
        for (let [dx, dy] of d) {
            let nx = x + dx;
            let ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && dist[nx][ny] === -1 && room[nx][ny] !== '#') {
                dist[nx][ny] = dist[x][y] + 1;
                if (nx === target[0] && ny === target[1]) {
                    return dist[nx][ny];
                }
                q.push([nx, ny]);
            }
        }
    }
    return -1;
}

const room = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
  ]
  
  console.log(escapePyramidHead(room)) // -> 8