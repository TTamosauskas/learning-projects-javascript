
class Api {

   // dentro do async podemos usar o await
  static async getUserInfo(username){
    //try e catch é usado para filtrar erros
    try {
    // response será criado assim que o axios retornar a consulta a API
    const response = await axios.get(`https://api.github.com/users/${username}`)
    console.log(response);  
    } catch(err) {
      console.warning("Erro na Api")
    }
  }
}

Api.getUserInfo('TTamosauskas');