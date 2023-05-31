"use strict";

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
let computerRoundChoice = document.getElementById("computerRoundChoice");
let playerRoundChoice = document.getElementById("playerRoundChoice");
let miniRock = '<i class="fa-regular fa-hand-back-fist"></i>';
let miniPaper = '<i class="fa-regular fa-hand"></i>';
let miniScissors = '<i class="fa-regular fa-hand-scissors"></i>';
let reset = document.getElementById("resetButton");
reset.addEventListener("click", newGame);

function computerPlay() {
  let pick;
  let zahl = Math.floor(Math.random() * 3);

  if (zahl === 0) {
    pick = "rock";
    computerRoundChoice.innerHTML = miniRock;
  } else if (zahl === 1) {
    pick = "paper";
    computerRoundChoice.innerHTML = miniPaper;
  } else if (zahl === 2) {
    pick = "scissors";
    computerRoundChoice.innerHTML = miniScissors;
  }
  return pick;
}

function playRound(playerChoice) {
  if (playerChoice === "rock") {
    playerRoundChoice.innerHTML = miniRock;
  } else if (playerChoice === "paper") {
    playerRoundChoice.innerHTML = miniPaper;
  } else if (playerChoice === "scissors") {
    playerRoundChoice.innerHTML = miniScissors;
  }
  let ergebnis;
  let pickComputer = computerPlay();

  if (pickComputer === playerChoice) {
    ergebnis = 0;
    roundText.innerHTML = "It's a Draw!";
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

  ergebnis = playRound(playerChoice);
  if (ergebnis === 1) {
    self++;
    playerCounter.innerHTML = self;
    roundText.style.backgroundColor = "green";
  } else if (ergebnis === 2) {
    computer++;
    computerCounter.innerHTML = computer;
    roundText.style.backgroundColor = "red";
  } else if (ergebnis === 0) {
    roundText.style.backgroundColor = "skyblue";
  }

  if (self === 5) {
    roundText.innerHTML = "You win! <br>" + self + " to " + computer;
    roundText.style.backgroundColor = "gold";
  } else if (computer === 5) {
    roundText.innerHTML = "You lose! <br>" + self + " to " + computer;
    roundText.style.backgroundColor = "gray";
  }
}

function newGame() {
  self = 0;
  playerCounter.innerHTML = self;
  computer = 0;
  computerCounter.innerHTML = computer;
  playerRoundChoice.innerHTML = "";
  computerRoundChoice.innerHTML = "";
  roundText.innerHTML = "Welcome";
  roundText.style.backgroundColor = "skyblue";
}
