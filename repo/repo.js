var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

Repo = () => {
  // puxa value do input
  var usuario = inputElement.value;
  var repositorios = "https://api.github.com/users/" + usuario + "/repos";

  axios.get(repositorios)
  .then(function(response) {
    console.log(response.data);  

    for(repo in response.data) {
       
      for (repoitem in repo) {
        console.log(repoitem.name)
      }

      var repoElement = document.createElement("li");
      var repoText = document.createTextNode(repo.name);
  
  
      repoElement.appendChild(repoText);
      listElement.appendChild(repoElement);
  
  

    }
    
    
    
    })
  .catch(function(error) {console.warn(error)})






}

// Define que ao ser apertado o buttonElement chamará a função addTodo
buttonElement.onclick = Repo;

