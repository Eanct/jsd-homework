// The World Translator
// let language = prompt("Hello world in other languages.\nPlease enter a language (English/French/Malay/German/Danish).");

// if (language.toUpperCase() == "ENGLISH") {
//     console.log("Hello World");
// } else if (language.toUpperCase() == "FRENCH") {
//     console.log("Bonjour le monde");
// } else if (language.toUpperCase() == "MALAY") {
//     console.log("Hai dunia");
// } else if (language.toUpperCase() == "GERMAN") {
//     console.log("Hallo Welt");
// } else if (language.toUpperCase() == "DANISH") {
//     console.log("Hej Verden");
// }



// The Grade Assigner
// let testScore = prompt("Please enter your test score.");

// if (testScore >= 90) {
//     console.log("A");
// } else if (testScore >= 80) {
//     console.log("B");
// } else if (testScore >= 70) {
//     console.log("C");
// } else if (testScore >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }



// Air Conditioning
// let conditioning = prompt("Is the A/C is functional? (Y/N): ");
// let temperature = prompt("Please enter the current temperature.");
// let desiredTemp = prompt("Please enter the desired temperature.");

// if (conditioning == "Y" && temperature > desiredTemp) {
//     console.log("Turn on the A/C Please");
// } else if (conditioning == "N" && temperature > desiredTemp) {
//     console.log("Fix the A/C now! It's hot!");
// } else if (conditioning == "N" && temperature < desiredTemp) {
//     console.log("Fix the A/C whenever you have the chance... It's cool...");
// }



// You and Your Government
// let age = prompt("Please enter your age.");

// if (age >= 35) {
//     console.log("You can vote AND hold any place in government!");
// } else if (age >= 25) {
//     console.log("You can vote AND run for the Senate!");
// } else if (age >= 18) {
//     console.log("You can vote!");
// } else {
//     console.log("You can't vote yet");
// }



// Golf
// let score = prompt("Please enter the score.");
// let par = prompt("Please enter the par.");

// if (score == 1) {
//     console.log("Hole in one");
// } else if (score <= (par - 2)) {
//     console.log("Eagle");
// } else if (score == (par - 1)) {
//     console.log("Birdie");
// } else if (score == par) {
//     console.log("Par");
// } else if (score == (par + 1)) {
//     console.log("Bogey");
// } else if (score == (par + 2)) {
//     console.log("Double Bogey");
// } else if (score >= (par + 3)) {
//     console.log("Not sure");
// }



// Serge Says
// let message = prompt("Please enter a message.");

// if (message == "" || message.trim() == "") {
//     console.log("Fine. Be that way!");
// } else if (message.endsWith("?")) {
//     console.log("Sure.");
// } else if (message == message.toUpperCase()) {
//     console.log("Woah, chill out!");
// } else {
//     console.log("Whatever.");
// }



// The Pluralizer
// let noun = prompt("Please enter a noun. (example: apple)");
// let numOfNoun = prompt("Please enter a number for " + noun + ".");

// if (numOfNoun > 1) {
//     console.log(numOfNoun + " " + noun + "s");
// } else {
//     console.log(numOfNoun + " " + noun);
// }



// The Rest
// Implement a Rock, Paper, Scissors single game
let player1 = prompt("Player 1, please choose (Rock, Paper, Scissors) : ");
let player2 = prompt("Player 2, please choose (Rock, Paper, Scissors) : ");

player1 = player1.toUpperCase();
player2 = player2.toUpperCase();

if (player1 === "ROCK" && player2 === "ROCK") {
    console.log("It is a tie.");
} else if (player1 === "ROCK" && player2 === "PAPER") {
    console.log("Player 2 wins!");
} else if (player1 === "ROCK" && player2 === "SCISSORS") {
    console.log("Player 1 wins!");
} else if (player1 === "PAPER" && player2 === "ROCK") {
    console.log("Player 1 wins!");
} else if (player1 === "PAPER" && player2 === "PAPER") {
    console.log("It is a tie.");
} else if (player1 === "PAPER" && player2 === "SCISSORS") {
    console.log("Player 2 wins!");
} else if (player1 === "SCISSORS" && player2 === "ROCK") {
    console.log("Player 2 wins!");
} else if (player1 === "SCISSORS" && player2 === "PAPER") {
    console.log("Player 1 wins!");
} else if (player1 === "SCISSORS" && player2 === "SCISSORS") {
    console.log("It is a tie.");
}