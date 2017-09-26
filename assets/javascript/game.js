// Hangman JS

// GLOBAL VARIABLES FIRST

// Choose a theme, Theme = Summer Olympics

// Within that theme, create an array of possible hangman words
var wordsList = ["swimming", "diving", "gymnastics"];

// computer selected solution will be held here
var chosenWord = "";

// store individual letters of the solution in an array
var lettersInChosenWord = [];

// based on the solution, show a specified number of blanks
var numBlanks = 0;

// create a variable to hold the mix of blanks and solved letters
var blanksAndSuccesses = [];

// create a variable to hold all the wrong guesses
var wrongGuesses = [];

// create a variable to hold all the letters guessed
var letterGuessed = [];

// game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// ==========================================================================
// startGame() will start and restart the game

function startGame() {

	// reset guesses back to zero
	numGuesses = 9;

	// solution chosen randomly from wordList
	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

	// break the chosen word into individual letters
	lettersInChosenWord = chosenWord.split("");

	// count the number of letters in the word
	numBlanks = lettersInChosenWord.length;

	// test
	console.log(chosenWord);

	// reset the guess and success array
	blanksAndSuccesses = [];

	// reset the wrong guesses from the previous round
	wrongGuesses = [];

	// put the correct number of blanks on the page
	for (var i = 0; i<numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	// test
	console.log(blanksAndSuccesses);

	// reprint GuessesLeft back to 9
	document.getElementById("guesses-left").innerHTML = numGuesses;

	// print the blanks at the beginning of each round
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

	// clear the wrong guesses from the previous round
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

// checkLetters() function will do comparisons for matches

function checkLetters(letter) {

	// boolean based on whether or not a letter is found anywhere in the word
	var letterInWord = false;

	// check if a letter exists inside the array at all
	for (var i = 0; i < numBlanks; i++) {
		if (chosenWord[i] === letter) {
			letterInWord = true;
		}
	}
	// if the letter is in the word, find where exactly it is
	if (letterInWord) {
		for (var j = 0; j < numBlanks; j++) {
			if (chosenWord[j] === letter) {
				blanksAndSuccesses[j] = letter;
			}
		}
		// test
		console.log(blanksAndSuccesses);
	}
	else {
		// add letter to the list of wrong letters
		wrongGuesses.push(letter);
		// subtract a guess
		numGuesses--;
	}
}

// roundComplete() function will run after each guess is made

function roundComplete() {

	// log initial status update in console
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

	// update HTML
	document.getElementById("guesses-left").innerHTML = numGuesses;
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	// if hangman string equals solution, win
	if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		winCounter ++;
		alert("you win!");
		document.getElementById("win-counter").innerHTML = winCounter;
		startGame();
	}
	else if (numGuesses === 0) {
		lossCounter++;
		alert("you lose!")
		document.getElementById("loss-counter").innerHTML = lossCounter;
		startGame();
	}
}

// =====================================================================

startGame();

// initiate the function for capturing key clicks
document.onkeyup = function(event) {
	// convert all key clicks into lowercase letters
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	// call the function to check for any correct guesses
	checkLetters(letterGuessed);

	// call the function that ends each round
	roundComplete();
};








