const idadeMinina = 18;
const idadeCliente = 19;

// comparação simples 

/*if (idadeCliente >=idadeMinina){
    console.log("Pode bebe uma Cerverjinha");
} else{
    console.log("Tomo um suco ou agua");
}*/

//comparacao usando Tenario (beneficio de fazer condiçoes em apenas 1 linha, OBS: Caso a 
// condição for grande , é uma boa pratica continuar usando o IF/else)
            //condição                   // true                        //false
            
console.log(idadeCliente >=idadeMinina ? "Pode bebe uma Cerverjinha" : "Tomo um suco ou agua");

