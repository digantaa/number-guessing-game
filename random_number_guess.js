const prompt = require("prompt-sync")();
console.log("Welcome to the Random Number Guessing Game!");

const target = Math.floor(Math.random() * 11); // Ensures 0-10 range
let guesses = 0;

while (true) {
    guesses++;
    const input = prompt("Guess the number (0-10): ");
    const guess = Number(input);

    if (isNaN(guess) || guess < 0 || guess > 10) {
        console.log("Invalid input! Please enter a number between 0 and 10.");
        continue;
    }

    if (guess > target) {
        console.log("Your guess is too high.");
    } else if (guess < target) {
        console.log("Your guess is too low.");
    } else {
        console.log("Wow, you guessed the correct number!");
        break;
    }
}

console.log("You guessed the number in", guesses, "tries!");
