
// o AddeventListener pode ser usado no documento ou em qualquer elemento em particular.
// Confira aqui uma lista completa de eventos possiveis https://www.w3schools.com/jsref/dom_obj_event.asp


//adiciona o EvenListener para quando a janela for redimensionada
window.addEventListener("mousemove", function(){
  document.getElementById("demo").innerHTML = Math.random();
});

//Adiciona Event Listener quando qualquer tecla for apertada
window.addEventListener("keydown", alertaTecla);

function alertaTecla(){

  alert("tecla apertada")

  //em seguida remove para que funciona apena uma vez
  window.removeEventListener("keydown", alertaTecla);
  ;}


document.getElementById('hora').addEventListener("click", function(){
  this.innerHTML=Date()
});