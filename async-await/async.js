const minhaPromise = () => new Promise((resolve, reject) => {
setTimeout(() => { resolve("OK") }, 2000);
});

// A função executaPromise será executada assim que...
async function executaPromise() {
// a função minhaPromise enviar um retorno..
const response = await minhaPromise();
console.log(response);

console.log(await minhaPromise())

// depois que a primeira await for executada as demais seguem...
const response2 = await minhaPromise();
console.log(response2);
}

// Mesma coisa usando arrow function
// const executaPromise = async () =>{
//   const response = await minhaPromise();
//   console.log(response);
//   }
  

executaPromise();