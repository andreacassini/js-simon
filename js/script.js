//FUNZIONE CHE GENERA N7UMERI CASUALI
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//FUNZIONE CHE VERIFICA SE IL NUMERO E' GIA' PRESENTE NELL'ARRAY SE NON E' PRESENTE LO AGFGIUNGE
function uniqueRandomNumber(array, number){
    let check = false
    while(check === false){
        if(!array.includes(number)){
            check = true;
    }
    
    }
    return true;
}

//array vuoto che contiene numeri generati e uno conterra` i numeri inseriti dall'utente
let randomNumbers = [];
let userNumbers = [];

//ESEGUIRE CICLO FOR PER POPOLARE ARRAY DEI NUMERI CASUALI
for(let i=0; i<5; i++){
    let number = generateRandomNumber(1,50);
    if(uniqueRandomNumber(randomNumbers, number)){
        randomNumbers.push(number);
    }
}
console.log(randomNumbers)