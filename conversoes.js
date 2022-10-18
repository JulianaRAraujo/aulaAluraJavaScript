/*Conversões de Tipo*/

/*IMPLICÍTA */

//Permite que convertamos tipo de dados. Ex:  converter numero em string

const numero = 456;
const numeroString = "456";

// na hora de converter uma string em numero, garanta que não haverá outros caracter sem ser numero. 

console.log(numero == numeroString);//true
console.log(numero === numeroString);//false
console.log(numero + numeroString);//concatenou em string saindo 456456
//Lembrando que o == faz comparação somente do dado.Então a saida será True.

/*EXPLICÍTA */

//Number
//String

console.log(numero + Number(numeroString));//converteu em numero e somou
//ou voce pode chamar o metodo na declaração da variavel  Exe:  const numeroString = Number("456");