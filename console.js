/* Log  => Registro*/

const minhaVar = true;

console.log(minhaVar);
console.log(456);
console.log("Meu console.log");

/* Tratamento de erro*/

console.error("Deu Erro");

/*Entre os outros métodos, existem:

console.error() para exibir mensagens de erro;

console.table() para visualizar de forma mais organizada informações tabulares;

console.time() e console.timeEnd() para temporizar período que uma operação de código 
leva para ser iniciada e concluída;

console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados)
 por onde o código executado passou durante a execução.*/


 console.log("deu erro");
 console.error(new Error("deu erro"));