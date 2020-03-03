import api from './api';

//ES6+ Criação de Classe
class App {
  constructor (){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.inputEl = document.querySelector('input[name=repository]');
    this.registerHandlers();
  }

  
  registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event);    
  }

  //ES6+ Valor Padrão loading true
  setLoading(loading = true){
    if(loading === true){
      let loadingEl = document.createElement('div');
      loadingEl.appendChild(document.createTextNode("Carregando"));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl)
    } else {
      document.getElementById('loading').remove();
    }

  }

  //ES6+ Async e Await
  async addRepository(event){
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.lenght === 0) {return;}

    this.setLoading();
   
    try{
    //ES6+ Template Literals
    const response = await api.get(`/repos/${repoInput}`);

    //ES6+ Desestruturação
    const {name, description, html_url, owner: {avatar_url}} = response.data;

    this.repositories.push({
      //ES6+ Object Short Syntax
      name,
      description,
      avatar_url,
      html_url,
    });

    this.inputEl.value = '';

    this.render();
  } catch(err){
    alert("Repositório Inexistente")
  }

  this.setLoading(false);
  }

  render(){
  this.listEl.innerHTML= "";
  //ES6+  Map Array
  this.repositories.map(repo => {
    let imgEl = document.createElement("img");
    imgEl.setAttribute('src', repo.avatar_url);

    let titleEl = document.createElement("strong");
    titleEl.appendChild(document.createTextNode(repo.name));

    let descriptionEl = document.createElement("p");
    descriptionEl.appendChild(document.createTextNode(repo.description))

    let linkEl = document.createElement("a");
    linkEl.setAttribute('target', '_blank');
    linkEl.setAttribute('href', repo.html_url);
    linkEl.appendChild(document.createTextNode("Acessar"));

    let listItemEl = document.createElement("li");
    listItemEl.appendChild(imgEl);
    listItemEl.appendChild(titleEl);
    listItemEl.appendChild(descriptionEl);
    listItemEl.appendChild(linkEl);

    this.listEl.appendChild(listItemEl)
  }
  );
}

}

new App();