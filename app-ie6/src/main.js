class App {
  constructor (){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.registerHandlers();
  }

  
  registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event);    
  }

  addRepository(event){
    event.preventDefault();

    this.repositories.push({
      name: 'Nome do Repositorio Dinamico',
      description: 'Descrição Dinamica',
      avatar_url:'https://avatars0.githubusercontent.com/u/28296274?v=4',
      html_url: 'https://github.com/TTamosauskas/javascript-para-minha-avo/tree/master/semana-5', 
    });

    console.log(this.repositories)
  }
}

new App();