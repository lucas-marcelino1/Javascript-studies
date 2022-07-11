let a = 3, b = 4, c = 5;

console.log(a+b+c)

/*
Comentário
*/
// Comentário

// var = escopo de função
// let e const(n variável) = escopo de bloco

var variável = 10;

let variable; // undefined
variable = 10;
variable = 'string'
variable = ['Uno', 'Deux']
console.log(variable)

variable.forEach(element => {
  console.log(element)
});

let myNumber = 10;
let myString = 'string';
let myBoolean = true;
let myNull = null; // não é objeto, erro do JS
let myUndefined = undefined;

console.log("O tipo é:", typeof myNumber)
console.log("O tipo é:", typeof myString)
console.log("O tipo é:", typeof myBoolean)
console.log("O tipo é:", typeof myNull)
console.log("O tipo é:", typeof myUndefined)

parseInt(1.5) // transforma em inteiro
parseFloat('2')

console.log(myString.length)