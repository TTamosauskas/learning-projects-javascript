//Exemplo de spread em desestruturação
const usuario = {
  nome: "Roberto Carlos",
  idade: 80,
  endereco: "Santos"
}

const {nome, ...resto } = usuario;
console.log(resto);

// Copiando "quase tudo"

const usuario2 = { ...usuario, nome:"Gabriel"};
console.log(usuario2)



// Exemplo em array

array = [1,2,3,4,5,6,7,8,9]

const [a,b, ...c ] = array;

console.log(a)
console.log(b)
console.log(c)

///Exemplo de rest em parametros de função

function soma(a, b, ...c) {
  return c
}

console.log(soma(2,3,4,5,6,7,8))

/// Juntando arrays

const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = [10,12,13,14,15,16,17,18,19]

const arr3 =[...arr1, ...arr2]

console.log(arr3)

