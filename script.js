'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const body = document.getElementById('bg-color');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let guessInput = document.querySelector('.guess');
let guessMessage = document.querySelector('.message');
let scoreLabel = document.querySelector('.label-score');
let highScore = document.querySelector('.label-highscore');
let qmark = document.querySelector('.number');
let score = 20;

checkBtn.addEventListener('click', e => {
  let newInput = Number(guessInput.value);

  //   no input
  if (!newInput) {
    guessMessage.textContent = 'No number!';
  }
  //   player wins
  else if (newInput === secretNumber) {
    guessMessage.textContent = 'Correct';
    body.style.backgroundColor = 'green';
    qmark.textContent = secretNumber;
    qmark.style.width = '24rem';
    // score.textContent = Number(score.textContent) + 2;
  }
  //   guess is too low
  else if (newInput < secretNumber) {
    if (score > 1) {
      guessMessage.textContent = 'Too low';
      body.style.backgroundColor = 'red';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
      body.style.backgroundColor = 'red';
    }
  }
  //   guess is too high
  else if (newInput > secretNumber) {
    if (score > 1) {
      guessMessage.textContent = 'Too high';
      body.style.backgroundColor = 'orange';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', e => {
  body.style.backgroundColor = '#222';
  guessMessage.textContent = '...Start guessing';
  guessInput.value = '';
  qmark.textContent = '?';
  qmark.style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  score = 20;
});
