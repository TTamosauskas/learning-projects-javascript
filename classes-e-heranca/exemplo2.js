class Usuario {
  constructor(){
    this.email = "nome"
    this.senha = ""

  }

  isAdmin() {
    if(this.admin == true)
       {
       return "É Administrador"
       }
       else
       {
       return "não é administrador"
      }
  }

}

class Admin extends Usuario {
  constructor(){
    super();
    this.admin = true
  }
}

const User1 = new Usuario("thiago.gt@gmail.com", "senha123");
const User2 = new Admin("zeze.gt@gmail.com", "senha123");

console.log(User1.isAdmin())
console.log(User2.isAdmin())
