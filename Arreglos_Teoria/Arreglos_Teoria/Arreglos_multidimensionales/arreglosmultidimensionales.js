let arreglo1 = [
  ["a", "z", "t"],
  [789, 887, 451],
  [true, false, 0],
];
//imprimir el elemento z//
console.log(arreglo1[0][1]);
//imprimir 789//
console.log(arreglo1[1][0]);
//imprimir 0//
console.log(arreglo1[2][2]);
//imprimir false//
console.log(arreglo1[2][1]);

let arreglo2 = [
  [["%", 7, true, "#"]],
  [[false, 0, 99, "?"]],
  [[44, 55, 66, 77]],
];

//imprimir ?//
console.log(arreglo2[1][0][3]);
//imprimir 66//
console.log(arreglo2[2][0][2]);
//imprimir true//
console.log(arreglo2[0][0][2]);
//imptimir %//
console.log(arreglo2[0][0][0]);

//parte usando js solo para verificar//
console.log(arreglo2[0][0][2]); //devuelve true//
console.log(arreglo2[2][0][0]); //devuelve 44//
console.log(arreglo2[1][0][3]); //devuelve ?//
/*console.log(arreglo2[0][1][1]);// devuelve error ya que dentro del arreglo 0 solo hay un arreglo interno, la posicion 1 no existe//*/

let arreglo3 = [[[0], [2, 77]], [["&", true, "!!"], [[88]]], [[[[1]]]], "¿"];
//imprimir true//
console.log(arreglo3[1][0][1]);
//imprimir 1//
console.log(arreglo3[2][0][0][0]);
//imprimir 77//
console.log(arreglo3[0][1][1]);
//imprimir 88//
console.log(arreglo3[1][1][0]);
//imprimir ¿//
console.log(arreglo3[3]);

let arreglo4 = [
  [50, 60, 70],
  ["q", "%", "$"],
  ["?", ">", "<"],
  [1, -8, -2],
];
//cambiar % por ?//
arreglo4[1][1] = "?";
console.log(arreglo4[1][1]);
//cambiar -8 por 9
arreglo4[3][1] = 9;
console.log(arreglo4[3][1]);
//cambiar 50 por ¡//
arreglo4[0][0] = "¡";
console.log(arreglo4[0][0]);
//eliminar el elemento $//
arreglo4[1].splice(2, 1);
console.log(arreglo4[1]);
//eliminar el elemento 70//
arreglo4[0].splice(2, 1);
console.log(arreglo4[0]);
//eliminar el elemento -2//
arreglo4[3].splice(2, 1);
console.log(arreglo4[3]);
