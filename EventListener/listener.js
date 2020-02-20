
// o AddeventListener pode ser usado no documento ou em qualquer elemento em particular.
// Confira aqui uma lista completa de eventos possiveis 


//adiciona o EvenListener para quando a janela for redimensionada
window.addEventListener("mousemove", function(){
  document.getElementById("demo").innerHTML = Math.random();
});

document.getElementById('hora').addEventListener("click", function(){
  this.innerHTML=Date()
});


//Adiciona Event Listener quando qualquer tecla for apertada
window.addEventListener("keydown", alertaTecla);

function alertaTecla(){

  alert("tecla apertada")

  //em seguida remove EventListener para que funcione apena uma vez
  window.removeEventListener("keydown", alertaTecla);
  ;}


