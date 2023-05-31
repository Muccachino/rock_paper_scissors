"use strict";

/*const howMany = function () {
    let choice = parseInt(prompt("How often should either you or the computer win for it to be over?"))
    return choice
} */
let self = 0;
let computer = 0;
let rock = document.getElementById("rockSymbol");
rock.addEventListener("click", game.bind(null, "rock"));
let paper = document.getElementById("paperSymbol");
paper.addEventListener("click", game.bind(null, "paper"));
let scissors = document.getElementById("scissorsSymbol");
scissors.addEventListener("click", game.bind(null, "scissors"));
let roundText = document.getElementById("roundText");
let playerCounter = document.getElementById("playerCounter");
let computerCounter = document.getElementById("computerCounter");

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

function playRound(playerChoice) {
  let ergebnis;
  let pickComputer = computerPlay();
  console.log(pickComputer);

  if (pickComputer === playerChoice) {
    ergebnis = 0;
    roundText.innerHTML = "It's a Draw! <br> Play again.";
    return ergebnis;
  } else if (pickComputer === "rock" && playerChoice === "paper") {
    ergebnis = 1;
    roundText.innerHTML = "You win this time! <br> Paper beats Rock";
    return ergebnis;
  } else if (pickComputer === "rock" && playerChoice === "scissors") {
    ergebnis = 2;
    roundText.innerHTML = "You lose this time! <br> Rock beats Scissors";
    return ergebnis;
  } else if (pickComputer === "paper" && playerChoice === "scissors") {
    ergebnis = 1;
    roundText.innerHTML = "You win this time! <br> Scissors beat Paper";
    return ergebnis;
  } else if (pickComputer === "paper" && playerChoice === "rock") {
    ergebnis = 2;
    roundText.innerHTML = "You lose this time! <br> Paper beats Rock";
    return ergebnis;
  } else if (pickComputer === "scissors" && playerChoice === "rock") {
    ergebnis = 1;
    roundText.innerHTML = "You win this time! <br> Rock beats Scissors";
    return ergebnis;
  } else if (pickComputer === "scissors" && playerChoice === "paper") {
    ergebnis = 2;
    roundText.innerHTML = "You lose this time! <br> Scissors beat Paper";
    return ergebnis;
  }
}

function game(playerChoice) {
  let ergebnis;
  /*const choice = howMany();*/

  ergebnis = playRound(playerChoice);
  if (ergebnis === 1) {
    self++;
    playerCounter.innerHTML = self;
    console.log("You win this time!");
  } else if (ergebnis === 2) {
    computer++;
    computerCounter.innerHTML = computer;
    console.log("This time the computer wins!");
  } else if (ergebnis === 0) {
    console.log("It's a Draw!\nPlay again.");
  }

  if (self === 5) {
    console.log("You won with " + String(self) + " points. The game is over!");
    roundText.innerHTML = "You win! <br>" + self + " to " + computer;
  } else if (computer === 5) {
    console.log(
      "You lost! The computer won with " +
        String(computer) +
        " points. The game is over!"
    );
    roundText.innerHTML = "You lose! <br>" + computer + " to " + self;
  }
}
