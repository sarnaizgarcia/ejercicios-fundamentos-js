
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]
// bucle for x 3
 // Pinto una fila(i)
for (var j = 0; j < 3; j++) {
    for (var i = 0; i < 3; i++) {
        matriz[j].push(''+ j + i);
    }
}


console.log(matriz);