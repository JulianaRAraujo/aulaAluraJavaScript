// função declarativa

function apresentacao (){
    return "teste"
}


// Arrow Function (Com 1 linha)

const apresentar = nome => `Olá ${nome} bom dia"!`;

const soma = (numero1,numero2) => numero1+ numero2;

console.log(apresentar("Juliana"));


// Arrow Function (Com mais de 1 ou varias linha)

const somaNumerosPequenos = (num1,num2) =>{
    if(num1 > 10 || num2 > 10){
        return "Somente numeros de 1 a 9"
    } else {
        return num1+num2
    }
}

console.log(somaNumerosPequenos(5,5));

// Hoisting : arrow function se comporta com a expressão.