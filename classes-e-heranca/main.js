class List {
  constructor(){
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data)
  }
}

class Tarefas extends List {
constructor(){
  super();
  this.descricao = "Coisas a fazer";
}
  mostradescricao(){
    console.log(this.descricao)
  }

}

var MinhaLista = new Tarefas();
document.getElementById('novotodo').onclick = function () {
  MinhaLista.add("Novo todo");
}

MinhaLista.mostradescricao();