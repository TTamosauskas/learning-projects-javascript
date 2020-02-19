
// Define variaveis de seleção do HTML que serão usadas abaixo
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

// Define que todos deve ser pego do item list_todos do local storage ou ser um array vazio 
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//cria função de renderização
renderTodos = () => {
  //Apaga conteudo atual
  listElement.innerHTML="";

  //Passa por cada item do array todos
  for (todo of todos){

    //Monta elemento com li, texto e link excluir
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    linkElement.setAttribute('href', '#')
    
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
    
    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);

}

}

//Chama função de renderização
renderTodos();

//cria função inclusão
addTodo = () => {
  // puxa value do input
  var todoText = inputElement.value;

  //Adiciona todoTex no array todos
  todos.push(todoText);

  //Esvazia input
  inputElement.value = "";
  
  //Chama função de renderização
  renderTodos();

  //Chama função de salvar
  saveToStorage();

}

// Define que ao ser apertado o buttonElement chamará a função addTodo
buttonElement.onclick = addTodo;

//Define função de exclusão usando a posição pos

deleteTodo = (pos) => {

  //apaga o array da posição e apenas ele (1)
  todos.splice(pos, 1);

  //chama função de renderização
  renderTodos();

  // Chama função de salvar
  saveToStorage();
}

// Cria função de salvar

saveToStorage = () => {

  //Transforma array todos em uma string dentro de um JSON e define item no localStorage chamado list_todos e tra
  localStorage.setItem('list_todos', JSON.stringify(todos));

}