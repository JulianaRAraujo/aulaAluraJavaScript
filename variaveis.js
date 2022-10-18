
/*TIPO VAR*/

/*Importante:Posso declarar a var depois de usa-la,  o javaScript ler todas o programa achando todas do tipo var e carregar ela primeiro)
Importante: utilizar o tipo var(tipo solto - sem muitas regras), pode haver complicaçoes de voce declarar o mesmo nome de variavel em duas partes, 
Para resolver utilizamos o Tipo let . */

/*var altura = 5;
var comprimento = 7;

calcularArea = altura*comprimento;

console.log(calcularArea);

var calcularArea; */



/*TIPO LET*/
/* Usar quando o valor da variável pode mudar*/

/*let forma = 'retangulo';
let altura = 5;
let comprimento = 7;
let calcularArea;

if(forma ==='retangulo'){
    calcularArea = altura * comprimento
} else{
    calcularArea = (altura * comprimento) /2 
}

console.log(calcularArea);*/

/*TIPO CONST*/
/* Usar quando o valor da variável NÃO pode mudar*/

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let calcularArea;

if(forma ==='quadrado'){
    calcularArea = altura * comprimento
} else{
    calcularArea = (altura * comprimento) /2 
}

console.log(calcularArea);








