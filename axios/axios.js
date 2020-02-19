axios.get('https://api.github.com/users/TTamosauskas')
  .then(function(response) {console.log(response)})
  .catch(function(error) {console.warn(error)})

  // além go get os métodos delete, post, put também podem ser usados, 
  // https://github.com/axios/axios