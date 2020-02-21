//var array = [100,1,2,3,4,5,6,7,8,9,10]

// .split: transforma string em array

var string = '1,2,3,4,5,6,7,8,9,10';
var array = string.split(',');

console.log(array)

// .join transforma array em string

join = array.join("--")

console.log("Resultado do .join " + join)

// .lenght retorna qquantidade de itens no array

length = array.length

console.log("Resultado do .length " + length)


// Remove o último elemento do Array

pop = array.pop()

console.log("Resultado do .pop " + array)


// Adiciona no último elemento do Array

push = array.push(666)

console.log("Resultado do .push " + array)


// Adiciona um item no inicio do array

unshift = array.unshift(0.5)

console.log("Resultado do .unshifth " + array)


// Inverte Array

reverse = array.reverse()

console.log("Resultado do .reverse " + array)


// Splice
// .splice pode ser usado para apagar um item ([Indice],quandos a partir dele)

splice = array.splice(0,1)

console.log("Resultado do .splice removendo " + array)

// .splice pode ser usado para incluir um item

splice = array.splice(3,1, "morango")
console.log("Resultado do .splice adiconando " + array)
