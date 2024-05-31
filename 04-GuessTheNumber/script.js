//generet a random numner from 1 to 100

const randomNumber = Math.round(Math.random() * 100 + 1) 
console.log(randomNumber);

const submit =document.querySelector('subt');
const userInput =document.querySelector('#guessField');
const guessSlot =document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const lowOrHi =document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGames = true;

if(playGames){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
       console.log(guess);
       validateGuess(guess);
    })
}
 
function validateGuess(guess){
    //validate if the user entered valid number
    //non-negative,less than 100, number type only
    
}
function checkGuess(guess){
    //check if the guess is correct
}

function displayMessage(message){
    //display the message using DOM manipulation
}

function displayGuess(guess){

}
function newGame(){
    //start a new game
}
function endGame(){

}


