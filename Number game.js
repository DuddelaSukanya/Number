const secretNumber = Math.floor(Math.random() * 100) + 1;


let attempts = 0;
function playGame() {
    attempts++;
    const guess = parseInt(prompt("Guess the secret number (between 1 and 100):"));
    if (guess === secretNumber) {
        alert(`Congratulations! You've guessed the number in ${attempts} attempts!`);
    } else {
        if (guess > secretNumber) {
            alert("The number is high.");
        } else {
            alert("The number is low.");
        }

        if (attempts === 5) {
            alert(`Game over! The correct number was ${secretNumber}.`);
        } else {
            playGame();
        }
    }
}
playGame();
