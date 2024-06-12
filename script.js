let randomNumber = 0;
let attemptCount = 0;
const maxAttempts = 5;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    attemptCount = 0;
    document.getElementById('message').innerHTML = "";
    document.getElementById('attemptCount').innerHTML = attemptCount;
    document.getElementById('guessInput').value = "";
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessButton').disabled = false;
}

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    attemptCount++;
    document.getElementById('attemptCount').innerHTML = attemptCount;

    if (userGuess === randomNumber) {
        document.getElementById('message').innerHTML = `<span style="color: green;">Congratulations!👏 You guessed the correct number ${randomNumber} in ${attemptCount} attempts.</span>`;
        endGame();
    } else if (attemptCount === maxAttempts) {
        document.getElementById('message').innerHTML = `<span style="color:red;">Sorry😢, you've reached the maximum number of attempts. The correct number was ${randomNumber}.</span>`;
        endGame();
    } else if (userGuess < randomNumber) {
        document.getElementById('message').innerHTML = "Too low! Try again.";
    } else {
        document.getElementById('message').innerHTML = "Too high! Try again.";
    }

    // Clear guess input after checking
    document.getElementById('guessInput').value = "";
}

function endGame() {
    document.getElementById('guessInput').disabled = true;
    document.getElementById('guessButton').disabled = true;
}

