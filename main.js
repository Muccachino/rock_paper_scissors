"use strict";

const howMany = function () {
    let choice = parseInt(prompt("How often shoulb either you or the computer win for it to be over?"))
    return choice
} 

function computerPlay() {
    let pick;
    let zahl = Math.floor(Math.random() * 3); 
    
    if (zahl === 0) {
        pick = "rock";
    } else if (zahl === 1) {
        pick = "paper";
    } else if (zahl === 2) {
        pick = "scissors";
    }
    return pick;
}

function playRound() {
    let ergebnis;
    let pickComputer = computerPlay();
    let auswahl = prompt("Rock, Paper, Scissors? ")
    let hand = auswahl.toLowerCase();

    if (pickComputer === hand) {
        ergebnis = 0;
        return ergebnis
    } else if (pickComputer === "rock" && hand === "paper") {
        ergebnis = 1;
        return ergebnis
    } else if (pickComputer === "rock" && hand === "scissors") {
        ergebnis = 2;
        return ergebnis
    } else if (pickComputer === "paper" && hand === "scissors") {
        ergebnis = 1;
        return ergebnis
    } else if (pickComputer === "paper" && hand === "rock") {
        ergebnis = 2;
        return ergebnis
    } else if (pickComputer === "scissors" && hand === "rock") {
        ergebnis = 1;
        return ergebnis
    } else if (pickComputer === "scissors" && hand === "paper") {
        ergebnis = 2;
        return ergebnis
    } 
}

function game() {
    let self = 0;
    let computer = 0;
    let ergebnis;
    const choice = howMany();

    while (self < choice && computer < choice) {
        ergebnis = playRound();
        if (ergebnis === 1){
            self++;
            console.log("You win this time!");
        } else if (ergebnis === 2) {
            computer++;
            console.log("This time the computer wins!");
        } else if (ergebnis === 0){
            console.log("It's a Draw!\nPlay again.");
        } else  {
        console.log("Wrong input. Please choose between rock, paper or scissors!");
        }
    }

    if (self === choice) {
        console.log("You won with " + String(self) + " points. The game is over!");
    } else if (computer === choice) {
        console.log("You lost! The computer won with " + String(computer) + " points. The game is over!");
    }  
}