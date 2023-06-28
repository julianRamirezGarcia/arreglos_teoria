let array = [
  ["a", "z", "t"],
  [789, 887, 451],
  [true, false, 0],
];
//recorrerlo mostrando sus elementos mas internos con ciclo for//
for (let index = 0; index < array.length; index++) {
  for (let index2 = 0; index2 < array[index].length; index2++) {
    console.log(array[index][index2]);
  }
}

//con ciclo forEach//
array.forEach((i) => {
  i.forEach((j) => {
    console.log(j);
  });
});

//segundo ejercicio//
let array2 = [
  [
    ["%", 7, true, "#"],
    ["&", 55, false, "="],
  ],
  [
    [false, 0, 99, "?"],
    [true, 1000, "@", "¡"],
  ],
  [
    [44, 55, 66, 77],
    [1, 2, 3, 4],
  ],
];
//recorrerlo con ciclo for//
for (let index = 0; index < array2.length; index++) {
  for (let index2 = 0; index2 < array2[index].length; index2++) {
    for (let index3 = 0; index3 < array2[index][index2].length; index3++) {
      console.log(array2[index][index2][index3]);
    }
  }
}
//recorrer con ciclo forEach//
array2.forEach((i) => {
  i.forEach((j) => {
    j.forEach((m) => {
      console.log(m);
    });
  });
});
//tercer ejercicio//
let array3 = [
  [2, 8, 9],
  [30, 71, 77],
  [11, 990, 41],
];
let suma = 0;
//mostrar solo los elementos que sean numeros impares usando ciclo for para recorrer//
for (let index5 = 0; index5 < array3.length; index5++) {
  for (let index6 = 0; index6 < array3.length; index6++) {
    if (array3[index5][index6] % 2 !== 0) {
      console.log(array3[index5][index6]);
    }
  }
}
//mostrar la suma de los elementos usando ciclo for//
for (let index5 = 0; index5 < array3.length; index5++) {
  for (let index6 = 0; index6 < array3.length; index6++) {
    suma += array3[index5][index6];
  }
}
console.log(suma);
