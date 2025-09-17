const choices = ["Rock", "Paper", "Scissors"];
function botChoice() {
  let number = Math.floor(Math.random() * choices.length);
  return choices[number];
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function hasWon(user, bot) {
  if (user === "Rock" && bot === "Scissors") {
    return true;
  } else if (user === "Paper" && bot === "Rock") {
    return true;
  } else if (user === "Scissors" && bot === "Paper") {
    return true;
  } else if (user === bot) {
    return "draw";
  } else {
    return false;
  }
}

let userScoreBtn = document.querySelector("#user-score");
let botScoreBtn = document.querySelector("#bot-score");

let userChoice = "";
let bot = "";
let result;
let userScore = 0;
let botScore = 0;

let playerChoiceMsg = document.querySelector(".player-choice-msg");
let roundResult = document.querySelector(".round-result");
let computerChoiceMsg = document.querySelector(".computer-choice-msg");

rock.addEventListener("click", () => {
  userChoice = "Rock";
  bot = botChoice();
  result = hasWon(userChoice, bot);
  playerChoiceMsg.innerText = "Your Choice: Rock";
  computerChoiceMsg.innerText = `Computer's choice: ${bot}`;
  if (result === true) {
    roundResult.innerText = "You won";
    userScoreBtn.innerText = userScore += 1;
  } else if (!result) {
    roundResult.innerText = "You lose";
    botScoreBtn.innerText = botScore += 1;
  } else if (result === "draw") {
    roundResult.innerText = "Draw";
  }
});
paper.addEventListener("click", () => {
  userChoice = "Paper";
  bot = botChoice();
  result = hasWon(userChoice, bot);
  playerChoiceMsg.innerText = "Your Choice: Paper";
  computerChoiceMsg.innerText = `Computer's choice: ${bot}`;
  if (result === true) {
    roundResult.innerText = "You won";
    userScoreBtn.innerText = userScore += 1;
  } else if (!result) {
    roundResult.innerText = "You lose";
    botScoreBtn.innerText = botScore += 1;
  } else if (result === "draw") {
    roundResult.innerText = "Draw";
  }
});
scissors.addEventListener("click", () => {
  userChoice = "Scissors";
  bot = botChoice();
  result = hasWon(userChoice, bot);
  playerChoiceMsg.innerText = "Your Choice: Scissors";
  computerChoiceMsg.innerText = `Computer's choice: ${bot}`;
  if (result === true) {
    roundResult.innerText = "You won";
    userScoreBtn.innerText = userScore += 1;
  } else if (!result) {
    roundResult.innerText = "You lose";
    botScoreBtn.innerText = botScore += 1;
  } else if (result === "draw") {
    roundResult.innerText = "Draw";
  }
});
