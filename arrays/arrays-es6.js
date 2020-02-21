
var array = [0,1,2,3,4,5,6,7,8,9,10]

// Todos os metodos aqui usam arrow function por serem ES6+


// .map serve para percorrer um array e modificar seus itens:

arrayNovo = array.map((item, index) => item + index);

console.log("Resultado do .map: " + arrayNovo)

// .reduce serve para tratar todos os itens em uma unica operação

const soma = array.reduce((total, next) => total + next)

console.log("Resultado do .reduce: " + soma);

// .filter retorna novo array com itens que passarem pela condição

const pares = array.filter(item => item %2 !== 0)

console.log("Resultado do .filter: " + pares)

// .find retorna o primeiro item que satisfaça a condição
const find = array.find(item => item %2 !== 0)

console.log("Resultado do .find: " + find)

// .findIndex é semelhante ao anterior mas retorna o indice e não o valor

const findIndex = array.findIndex((item) => item === 7)

console.log("Resultado do .findIndex: " + findIndex)