//Define variaveis para elementos do HTML

var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//Cria função Repo

Repo = () => {
  // puxa value do input
  var usuario = inputElement.value;
  //Constroi URL a ser usada
  var repositorios = "https://api.github.com/users/" + usuario + "/repos";

  //Cria mensagem de carregamento
  var loading = document.createTextNode("Carregando"); 
  listElement.appendChild(loading);

  //Usa o axios para enviar um get da url criada acima
  axios.get(repositorios)

  //Em caso de resposta
  .then(function(response) {

    //Limpa lista previa
    listElement.innerHTML = '';
  

    // mapeia Array data dentro do Object response
    response.data.map((item) => {

      //cria elementos HTML li
      var repoElement = document.createElement("li");

      //cria texto com item.name
      var repoText = document.createTextNode(item.name); 

      //cria elemementp html de link
      var repoLink = document.createElement("a");    

      //define atributo para a variavel link com o item.svn_url
      repoLink.setAttribute('href', item.svn_url)

      //Constroi HTML da iteração
      repoLink.appendChild(repoText);
      repoElement.appendChild(repoLink);      
      listElement.appendChild(repoElement);
      })
    })

   //Em caso de Falha 
  .catch(function(error) {console.error("Usuário não existe")})
}

// Define que ao ser apertado o buttonElement chamará a função Repo
buttonElement.onclick = Repo;