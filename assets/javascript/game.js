// Variables

// Creating an object storing our crystals with their names and values
var crystals = {
	blue: {
		name: "Blue",
		value: 0
	}, 
	purple: {
		name: "Purple",
		value: 0
	},
	green: {
		name: "Green",
		value: 0
	},
	pink: {
		name: "Pink",
		value: 0
	}
};

var wins = 0;
var losses = 0;

var currentScore = 0;
var scoreToGuess = 0;

// Functions

// Getting random values for our crystals and our scoreToGuess value
var randomValues = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Will start the game once called and set the new values for the number to guess and each crystal
var startGame = function() {

	// This will help us reset the score when starting a new game
	currentScore = 0;

	// Each game will have a new random scoreToGuess
	scoreToGuess = randomValues(15, 90);

	// Each game will have a new set of values for each crystal
	crystals.blue.value = randomValues(1, 13);
	crystals.purple.value = randomValues(1, 13);
	crystals.green.value = randomValues(1, 13);
	crystals.pink.value = randomValues(1, 13);

	// Allowing us to update the HTML
	$("#guess-number").text(scoreToGuess);
	$("#your-score").text(currentScore);
};

// Scores
var checkScore = function() {

	// Check if you lose
	if (currentScore > scoreToGuess) {
		alert("Sorry- you lost!");
		losses ++;
		$("#losses").text(losses);
		// Have to start game over
		startGame();
	}
	// Check if you win
	else if (currentScore === scoreToGuess) {
		alert("Yay! You win!");
		wins++;
		$("#wins").text(wins);
		// Have to start game over
		startGame();
	}
};

// Function after clicking each crystals
var crystalValues = function(crystal) {
	// Changes your current score to add the value of the current crystal clicked
	currentScore += crystal.value;
	// Updating HTML of your current score
	$("#your-score").text(currentScore);
	// Need to be checking when you win/lose
	checkScore();
}

// Getting the game started by calling the startGame function
startGame();

// Clicking the crystals
$("#blue").on("click", function() {
	crystalValues(crystals.blue)
});
$("#purple").on("click", function() {
	crystalValues(crystals.purple)
});
$("#green").on("click", function() {
	crystalValues(crystals.green)
});
$("#pink").on("click", function() {
	crystalValues(crystals.pink)
});


