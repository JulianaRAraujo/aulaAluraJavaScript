// boolean 

const usuarioLogado = true;

const contaPaga = false;


// truthy e faly não são booleano, mais se comportam como, exemplo: 

// 0 => false;

// 1 =>true

// "" strings vazias tambem é comparado como false.  

// == compara somente valor
// === compara o valor e o tipo. 

console.log(0 == false);

console.log("" == false);

let minhaVar;

let varNull = null;

console.log (minhaVar, varNull);

let numero = 3;
let texto = 'alura';

console.log(typeof numero);

console.log(typeof varNull);