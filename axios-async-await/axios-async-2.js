class Github {
  static async getRepositories(repo) {
  try {
  const response = await axios.get(`https://api.github.com/repos/${repo}`)
  console.log(response.data);
 }catch(err){
   console.log("Respositório Não Existe")
 }
}
 }
 Github.getRepositories('TTamosauskas/learning-projects-javascript');
 Github.getRepositories('TTamosauskas/learning-projects-black-magic');