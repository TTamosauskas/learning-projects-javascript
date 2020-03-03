var idade = 26;

//Operador Ternario:
// condição ? resposta positiva : resposta negativa
var bebida = (idade >= 21) ? "Cerveja" : "Refrigerante";

console.log(bebida);

//Outro exemplo
// Neste caso se não houver um valor para pessoa será usado a string "estranho"

function saudacao(pessoa) {
  var name = pessoa ? pessoa.nome : "estranho";
  return "Olá, " + name;
}

console.log(saudacao({nome: 'Alice'}));  
console.log(saudacao());          