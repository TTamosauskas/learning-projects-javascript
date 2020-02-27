var lista = ["0", [0,1,2,3,null,4],[5,[6,7,8,9,[10,11,12]]],"John"];
var listalimpa = [0];
listaFlat =[]


const sumAllEven = (list) => {

listaFlat = list.flat(2); 
console.log(listaFlat)
listaFlat.map(item => {
  if(Number.isInteger(item) && item % 2 === 0){
  listalimpa.push(item)
}

})
const soma = listalimpa.reduce((total, next) => total + next)
//console.log(soma)
}
sumAllEven(lista)
