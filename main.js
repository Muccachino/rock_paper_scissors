"use strict";

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
    //console.log(zahl, pick);
    return pick;
}

function playRound() {
    let ergebnis;
    let pickComputer = computerPlay();
    let auswahl = prompt("Rock, Paper, Scissors? ")
    let hand = auswahl.toLowerCase();
    console.log(pickComputer, typeof(pickComputer), hand, typeof(hand));
    if (pickComputer === hand) {
        //console.log("It is a Draw!");
        ergebnis = 0;
        return ergebnis
    } else if (pickComputer === "rock" && hand === "paper") {
        //console.log("You win!\nPaper beats Rock.");
        ergebnis = 1;
        return ergebnis
    } else if (pickComputer === "rock" && hand === "scissors") {
        //console.log("You lose!\nRock beats Scissors.");
        ergebnis = 2;
        return ergebnis
    } else if (pickComputer === "paper" && hand === "scissors") {
        //console.log("You win!\nScissors beats Paper.");
        ergebnis = 1;
        return ergebnis
    } else if (pickComputer === "paper" && hand === "rock") {
        //console.log("You lose!\nPaper beats Rock.");
        ergebnis = 2;
        return ergebnis
    } else if (pickComputer === "scissors" && hand === "rock") {
        //console.log("You win!\nRock beats Scissors.");
        ergebnis = 1;
        return ergebnis
    } else if (pickComputer === "scissors" && hand === "paper") {
        //console.log("You lose!\nScissors beats Paper.");
        ergebnis = 2;
        return ergebnis
    } 
}
