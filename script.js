'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--0');
const newDice = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
let scores, currentScore, currentPlayer, isPlaying;




function switchPlayer() {
    currentPlayerQuery(currentPlayer).classList.toggle('player--active')
    currentScoreQuery(currentPlayer).
    textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer == '0' ? '1' : '0';
    currentPlayerQuery(currentPlayer).classList.toggle('player--active')
}


function currentPlayerQuery(currentPlayer) {
    return document.querySelector(`.player--${currentPlayer}`);
}


function currentScoreQuery(currentPlayer) {
    return document.querySelector(`#current--${currentPlayer}`);
}


function init() {
    scores = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    currentPlayerQuery(0).classList.remove('player--winner');
    currentPlayerQuery(1).classList.remove('player--winner');
    currentPlayerQuery(0).classList.add('player--active');
    currentPlayerQuery(1).classList.remove('player--active');
    isPlaying = true;
}
init();


rollDice.addEventListener('click', function () {
    if (isPlaying) {
        const randomNumber = Math.trunc(Math.random() * 5) + 1;
        dice.classList.remove('hidden');
        document.querySelector('.dice').
        setAttribute('src', `dice-${randomNumber}.png`);
        if (randomNumber !== 1) {
            currentScore += randomNumber;
            currentScoreQuery(currentPlayer).
            textContent = currentScore;

        } else {
            switchPlayer();

        }
    }
})




holdDice.addEventListener('click', function () {
    if (isPlaying) {

        scores[currentPlayer] += currentScore;
        document.querySelector(`#score--${currentPlayer}`).
        textContent = scores[currentPlayer];
        if (scores[currentPlayer] > 10) {
            isPlaying = false;
            dice.classList.add('hidden');
            currentPlayerQuery(currentPlayer).classList.add('player--winner')
            currentPlayerQuery(currentPlayer).classList.remove('player--active')

        } else {
            switchPlayer();
        }
    }
})

newDice.addEventListener('click', function () {
    init();
})