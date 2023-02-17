let newValue;

// default mode
let mode = "easy";
let randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber, "new num");
// generate random number for mode
function getNewRandomNumber() {
	if (mode === "easy") {
		console.log(mode);
		return Math.floor(Math.random() * 5 + 1);
	} else if (mode === "medium") {
		return Math.floor(Math.random() * 10 + 1);
	} else {
		return Math.floor(Math.random() * 15 + 1);
	}
}

const submitButton = document.querySelector("#submitButton");
const easyButton = document.querySelector("#levelOne");
const mediumButton = document.querySelector("#levelTwo");
const hardButton = document.querySelector("#levelThree");

submitButton.addEventListener("click", submitAnswer);
easyButton.addEventListener("click", easyLevel);
mediumButton.addEventListener("click", mediumLevel);
hardButton.addEventListener("click", hardLevel);

//score functionality
let humanScore = 0;
let computerScore = 0;
const humanScoreArea = document.getElementById("humanScoreArea");
const computerScoreArea = document.getElementById("computerScoreArea");
humanScoreArea.innerHTML = humanScore;
computerScoreArea.innerHTML = computerScore;

// result functionality
let guessTotalArea = document.getElementById("guessTotalArea");

// game mode area
const gameModeArea = document.querySelector("#gameModeArea");
gameModeArea.innerHTML = mode;

// get a new random number
let userPreviousGuesses = [];

function submitAnswer() {
	// checks to make sure event listener is working
	alert("Checking Your Guess");

	// var for userinput
	let userInput = document.getElementById("userInput").value;
	// change input val to  a num
	let userInputNumber = parseInt(userInput);

	newValue = userInputNumber;

	// winning and loosing statement
	//previous guesses
	console.log("userPreviousGuesses", userPreviousGuesses);
	const previousGuessesArea = document.querySelector("#previousGuessesArea");

	const winningStatement = "Yay, you guessed correctly";
	const losingStatement = "Sorry, try again";
	// defining message Area
	const messageArea = document.querySelector("#messageArea");
	// console.log(messageArea);
	let guessCount = humanScore + computerScore;
	//compare random number to input val
	if (randomNumber === userInputNumber) {
		messageArea.innerHTML = winningStatement;
		humanScore++;
		// update the scores on the page
		humanScoreArea.innerHTML = humanScore;
		computerScoreArea.innerHTML = computerScore;
		guessTotalArea.innerHTML = guessCount;
		guessCount++;
		userPreviousGuesses.push(userInputNumber);
		console.log("userPreviousGuesses", userPreviousGuesses);
		//     for(let i = 0; i < userPreviousGuessess.length; i++){
		//       console.log(previousGuesses)
		//previousGuessesArea.innerHTML = i ;

		//     }

		// console.log(userPreviousGuesses);
		//generate a new num
		randomNumber = getNewRandomNumber();
		// console.log(randomNumber, "after");
	} else if (randomNumber != userInputNumber) {
		messageArea.innerHTML = losingStatement;
		computerScore++;
		// update the scores on the page
		guessTotalArea.innerHTML = guessCount;
		guessCount++;
		humanScoreArea.innerHTML = humanScore;
		computerScoreArea.innerHTML = computerScore;
		userPreviousGuesses.push(userInputNumber);
		console.log("userPreviousGuesses", userPreviousGuesses);
		// console.log(userPreviousGuesses);
		previousGuessesArea.innerHTML = userPreviousGuesses;
	}
}

function easyLevel() {
	// between 0 & 4
	mode = "easy";
	randomNumber = getNewRandomNumber();
	console.log(randomNumber);
}

function mediumLevel() {
	mode = "medium";
	gameModeArea.innerHTML = mode;

	randomNumber = getNewRandomNumber();
	console.log(randomNumber);
}

function hardLevel() {
	mode = "hard";
	gameModeArea.innerHTML = mode;

	randomNumber = getNewRandomNumber();

	console.log(randomNumber);
}


// For each guess, the game should display whether the answer is higher, lower, or correct.
// Hint

let hint = document.querySelector("#hintArea");
let hintButton = document.querySelector("#hintButton");

hintButton.addEventListener("click", toggleView);

function toggleView() {
  // console.log("event added for hint");
  if (newValue > randomNumber) {
    hint.innerHTML = "you are over";
  } else if (newValue < randomNumber) {
    hint.innerHTML = "you are under";
  } else {
    hint.innerHTML = "";
  }
}

// hintArea.style.display = "block";
