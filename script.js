console.log('script running');

let previousGuesses = document.getElementById('previous-container')
let userGuess = document.getElementById('user-guess');
let correctAnswer = "budapest";
let guessButton = document.getElementById('guess-button');

function basicFunction() {
    console.log('basic function is working');
};

// Event listener for the submit button, handles all guess info
guessButton.addEventListener("click", () => {
    checkUserGuess(userGuess.value.toLowerCase());
    appendPrevious(userGuess.value);
});

// Function Checks the user guess against the correct city
function checkUserGuess(guess) {
    if (guess == correctAnswer) {
        console.log('Well done!');
    } else {
        console.log('nope');
    };
};

// Function adds the most recent guess to previous answers
function appendPrevious(answer) {
    const newNode = document.createElement('p');
    previousGuesses.appendChild(newNode);
    newNode.textContent = answer;
}
