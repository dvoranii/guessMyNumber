'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const body = document.getElementById('bg-color');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const resetBtn = document.querySelector('.reset');

let guessInput = document.querySelector('.guess');
let guessMessage = document.querySelector('.message');
let scoreMsg = document.querySelector('.score');
let highScoreMsg = document.querySelector('.highscore');
let qmark = document.querySelector('.number');
let score = 20;
let highScore = 0;

const displayMsg = function (message) {
  guessMessage.textContent = message;
};

const displayScore = function (num) {
  scoreMsg.textContent = num;
};

const displayHighScore = function (num) {
  highScoreMsg.textContent = num;
};

checkBtn.addEventListener('click', e => {
  let newInput = Number(guessInput.value);

  //   no input
  if (!newInput) {
    displayMsg('No number!');
  }
  //   player wins
  else if (newInput === secretNumber) {
    displayMsg('Correct');
    body.style.backgroundColor = 'green';
    qmark.textContent = secretNumber;
    qmark.style.width = '24rem';
    highScore = score;
    displayHighScore(highScore);

    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  }

  // when guess is wrong
  // use ternary operator for number too low and number too high
  else if (newInput !== secretNumber) {
    if (score > 1) {
      // guessMessage.textContent =
      //   newInput > secretNumber ? 'Too high' : 'Too low';
      displayMsg(newInput > secretNumber ? 'Too high' : 'Too low');
      body.style.backgroundColor = newInput > secretNumber ? 'red' : 'orange';
      score--;
      displayScore(score);
    } else {
      displayMsg('You lost the game.');
      displayScore(0);
    }
  }
});

// play again click button even
againBtn.addEventListener('click', e => {
  playAgain();
});

// implement play again functionality
function playAgain() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  displayMsg('...Start guessing');
  guessInput.value = '';
  qmark.textContent = '?';
  qmark.style.width = '15rem';
  displayScore(20);
  score = 20;
}

// reset the entire game
resetBtn.addEventListener('click', e => {
  playAgain();
  highScore = 0;
  displayHighScore(highScore);
});
