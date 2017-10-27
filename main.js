var Word = require("./word.js");
var hiddenWords = ["goat", "monkey", "cat", "dog", "goose", "duck", "bird", "octopus"]
var inquirer = require("inquirer");


function genarateRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min) + min);
    return random

}



function genarateRandomWord(array) {
    var randomWord = genarateRandom(0, array.length);
    var returnRand = array[randomWord];
    return returnRand
}
var display = new Word(genarateRandomWord(hiddenWords));


misses = 8;

function handleDisplay() {
    toDisplay = " ";

    for (var i = 0; i < display.word.length; i++) {
        var char = display.letters[i].shouldDisplay();
        toDisplay += char;
    }
    console.log(toDisplay);

}

function handleGameStart(display) {
    handleDisplay();
    var userInput = undefined;
    var promise = inquirer.prompt({
        name: "userInput",
        message: "guess a character"
    })

    promise
        .then(function(answer) {

            var guessed = false;
            var allCharactersGuessed = true;

            for (var i = 0; i < display.letters.length; i++) {

                

                if (answer.userInput === display.letters[i].character) {
                    display.letters[i].guessed = true;
                    guessed = true;
                }

                allCharactersGuessed = allCharactersGuessed && display.letters[i].guessed
            }


            if (guessed === false) {
                misses--;

                if(misses ===0){
                    console.log("You Losse!")
                }
                else{
                      handleGameStart(display)
                }
            }
            else {
                if (allCharactersGuessed === true){
                    console.log("You Win!")
                }
                else{
                    handleGameStart(display)
                }
            }
        


        })
        .catch(function(error) {

        });

}


handleGameStart(display)
console.log(display)