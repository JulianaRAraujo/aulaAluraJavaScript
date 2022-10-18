/*PARAMENTROS -  SÃO INFOMAÇOES DADAS PARA QUE A FUNÇÃO
SEJA EXECUTADA CORRETAMENTE */




/*console.log(soma(5,6));
console.log(soma(100,6));
console.log(soma(10,10));*/

/*Ordem dos paramentros é importante na hora de preencher os paramentros.*/

/*function nomeIdade (nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(38,"Juliana"));
//saida(Meu nome é 38 e minha idade é Juliana)*/

function soma (numero1,numero2){
    return numero1 + numero2;
}
function multiplicacao(numero1,numero2){
    return numero1 * numero2;
}

console.log(multiplicacao(soma(4,5),soma(3,3)))

// Passar valor padrão para o paramentro 
/*function multiplicacao(numero1 = 1,numero2 = 1){
    return numero1 * numero2;
}*/


function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Juliana') // “Oi gente! Meu nome é Paula”


   function comParametro(param) {
    console.log(param)
}
      comParametro()
