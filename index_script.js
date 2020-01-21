//window.addEventListener('load', init);  

// Globals

// Available Levels


const levels = {
    easy: 8,
    medium: 6,
    hard: 4
};

var time;
let score = 0;
let isPlaying;
var highestScore = 0;

// To change level
var currentLevel;

function easyMode() {
    debugger;
    currentLevel = levels.easy;
    addmainPage();
    init();
    return true;
}

function mediumMode() {
    debugger;
    currentLevel = levels.medium;
    addmainPage();
    init();
    return true;
}

function hardMode() {
    debugger;
    currentLevel = levels.hard;
    addmainPage();
    init();
    return true;
}




function addmainPage() {
    debugger;
    var element = document.getElementById("main-row");
    element.classList.remove("main");
    time = currentLevel;
    //element.removeAttribute('');
}

function removemainPage() {
    debugger;
    var element = document.getElementById("main-row");
    element.classList.add("main");
    //time = currentLevel;
    //element.removeAttribute('');
}





// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highestScorer = document.querySelector("#maxscore");

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize Game
function init() {
    debugger;
        message.innerHTML = '';
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    debugger;
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    debugger;
    if (message.innerHTML === 'Game Over!!!') {
        score = -1;
    }
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick & show random word
function showWord(words) {
    debugger;
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    debugger;
    // Make sure time is not run out
    if (time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    debugger;
    if (message.innerHTML === 'Game Over!!!') {
        return;
    }
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        if (score > highestScore) {
            highestScore = score;
            highestScorer.innerHTML = highestScore;
        }
    }
}
