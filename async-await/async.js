// Função delay de 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

//Inicia função assincrona
async function umPorSegundo() {

//define await para função delay()  
 const response = await delay();
 console.log('1s');

//Apenas apos as linhas acima serem executadas as de baixo serão.
 const response2 = await delay();
 console.log('2s');
 const response3 = await delay();
 console.log('3s');
 };

umPorSegundo();