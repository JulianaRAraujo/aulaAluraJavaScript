/* Tipos de variaveis =  String */ 


/* teste de caracteres especiais */ 
const text3 = '\u0041'
console.log (text3)

/* teste de concatenação de string */ 
const text1 = "Olá "
const text2 = "Juliana"

console.log (text1 + text2)

/* teste de comparativo de string */ 

const teste1 = "Estudar"
const teste2 = "Estudar"

console.log (teste1 ===teste2)


/* teste de comparativo de string com o método toLowerCase() 
retorna o valor da string que foi chamada convertido para minúsculo.*/ 


const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

/*propriedade length - verificar o tamanho da string (Quantidade de caracteres.*/

const senha = "Juliana"
console.log(senha.length) // 13 caracteres
