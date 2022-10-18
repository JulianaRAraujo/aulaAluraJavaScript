/*Declarativa*/

function nomevariavel (param){
    return param;
}

/*Expressao de função- geralmente não é atribuido nome a função.*/

const soma = function (num1, num2){return num1 + num2}


console.log(soma(2,2))

/*PRINCIPAL DIFERENÇA*/
//no caso como voce esta usando uma variavel const , não poderá chamar a variavel 
//antes de inicializa-la { no caso podera usar var pois o comportamento do javascript
// e de ler primeiro buscando pelas var e depois executa. Isso de chama HOISTING}

console.log(apresentacao());

function apresentacao (){
    return "Olá"
}


console.log(apresentar);

const apresentar= function (){return "Olá Expressao"}