//Importa default de functions e renomeia para ClasseUsuario
import ClasseUsuario from './functions'

//Importa idade de functions e renomeia para idadeUsuario
import {idade as IdadeUsuario} from './functions'

ClasseUsuario.info();

alert(IdadeUsuario);


// Para exportacoes usando export default
// import novoNome from './function'

// Para todas as funcoes dentro do arquivo
// import * as funcoes from './functions'

// Para varias funcoes dentro de um mesmo arquivo
// import {soma, subtracao} from './functions'

// Renomeando uma funcao
// import {soma as Somar} from './functions'
//console.log(soma(1,2));
