const usuario = {
  nome: "Roberto Carlos",
  idade: 80,
  endereco: {
    cidade: "Rio de Janeiro",
    Estado: "RJ",
  }
}

const {nome, endereco:{cidade} } = usuario;

console.log(nome)
console.log(cidade)

// pode ser usado como parametro de funções:

mostraNome = ({idade}) => {
  console.log(idade)
}
mostraNome(usuario);