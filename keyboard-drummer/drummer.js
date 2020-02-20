//Cria função de remoção de transição
playSound = (e) => {
    // Pega div com data-key igual a keycode de e
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    // Pega  tag audio com data-key igual keycode de e
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // se audio não existir encerra iteração
    if (!audio) return;

    //Adiciona classe playing a div
    key.classList.add('playing');

    //Volta o play para zero.. caso já tenha tocado pode tocar de novo
    audio.currentTime = 0;

    //Toca audio
    audio.play();

    
  }

  //Função que remove classe playing
  limpaClasse = (e) => {
    e.target.classList.remove('playing');
  }

  //Cria uma constante do tipo array com todas as .keys
  const keys = document.querySelectorAll('.key');

  //EventListener que disparafuncao limpaClasse quando transação de key acaba
  keys.forEach(key => key.addEventListener('transitionend', limpaClasse));

  //EventListener que dispara playSound se alguma tecla for apertada
  window.addEventListener('keydown', playSound);