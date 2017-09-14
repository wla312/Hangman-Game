// Hangman JS

// Choose a theme

// Theme = Summer Olympics

// Within that theme, create an array of possible hangman words
var hangmanWords = ["swimming", "diving", "gymnastics"]
// Set the scoreboard
var wins = 0;
var guessesLeft = 15;

// Have the computer randomly select on of the words from the array
var computerWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

// console.log(computerWord);

// Have the computer display the number of letters the word has
var wordLength = computerWord.length

// console.log(wordLength);

var wordDisplay = [];
	for (i=0; i<wordLength; i++) {
		wordDisplay.push(" _ ");
	}

console.log(wordDisplay);

// separate the computer selected word into an array of all of its' characters
var computerWordSplit = Array.from(computerWord);
console.log(computerWordSplit);

// create variable to store user guessed letters
var guessedLetters = [];

// start game on user keyup
document.onkeyup = function(event) {
	// user guesses a letter
	var userGuess = event.key;
	// guessed letter is entered into an array of user guessed letters
    guessedLetters.push(userGuess);
	
	console.log(userGuess);
	// console.log(guessedLetters);

// if guessed letter = letter in the computer word, display that letter
	if (userGuess === computerWordSplit[0]) {
		wordDisplay.splice([0], 1, userGuess);
		
	}  
	console.log(wordDisplay);


		/*else if (userGuess !== computerWordSplit[i]) {
		// number of remaining guesses decrements
		guessesLeft = guessesLeft -1;
		// if guesses run out before guessing the word, lose
	}  

		if (guesses === 0) {
		// computer picks a new word
		var computerWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
		// reset guesses to fifteen
		guessesLeft = 15;
		// reset the guessed letters
		guessedLetters = [];
	}*/


// dynamic updates to innerHMTL
var html = 
	"<p>Wins: " + "</p>" +
	"<p>Current Word: " + wordDisplay + "</p>" +
	"<p>Number of Guesses Remaining: " + guessesLeft + "</p>" +
	"<p>Letters Already Guessed: " + guessedLetters + "</p>";

	document.querySelector("#game").innerHTML = html;
}