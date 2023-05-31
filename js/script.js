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

//FUNZIONE CHE PERMETTE INSIERMENTO DEI NUMNERI DELL'UTENTE
function getUserNumbers(){
    let userNumbers = [];

    while(userNumbers.length < 5){
        let number = parseInt(prompt('Inserisci un numero'));
        if(!userNumbers.includes(number)){
            userNumbers.push(number);
        }
    }
    return userNumbers;
}

//array vuoto che contiene numeri generati
let randomNumbers = [];

//ESEGUIRE CICLO FOR PER POPOLARE ARRAY DEI NUMERI CASUALI
for(let i=0; i<5; i++){
    let number = generateRandomNumber(1,50);
    if(uniqueRandomNumber(randomNumbers, number)){
        randomNumbers.push(number);
    }
}

document.getElementById('random-numbers').innerHTML = randomNumbers;

setTimeout(function(){
    document.getElementById('random-numbers').innerHTML = '';
    document.getElementById('message').innerHTML = 'Inserire i numeri che ti ricordi';
}, 30000);

setTimeout(function(){
    //RICHIAMO LA FUNZIONE CHE PERMETTE L'INSERIMENTO DEI NUMERI DA PARTE DELL'UTENTE
    let userNumbers = getUserNumbers();
    let guessedNumbers = []
    let score = 0;
    for(let i=0; i < userNumbers.length; i++){
        if(randomNumbers.includes(userNumbers[i])){
            guessedNumbers.push(userNumbers[i]);
            score++;
        }
    }
    document.getElementById('message').innerHTML = `Hai indovinato ${score} numeri. I numeri corretti sono ${guessedNumbers}`;
}, 31000);