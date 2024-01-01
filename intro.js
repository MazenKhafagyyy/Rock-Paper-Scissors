
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);

    return choices[i];
}

function main() {
    let computerChoice;
    let playerChoice;

    computerChoice = getComputerChoice();
    playerChoice = prompt("Choose Rock-Paper-Scissors: ");
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);

    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors")
    {
        alert("INVALID CHOICE");
    }

    if (playerChoice == computerChoice) {
        console.log("Player Choice: " + playerChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log("DRAW");
    }
    else if ((playerChoice == "rock" && computerChoice == "paper") ||
             (playerChoice == "paper" && computerChoice == "scissors") ||
             (playerChoice == "scissors" && computerChoice == "rock"))
    {
        console.log("Player Choice: " + playerChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log("YOU LOSE");
    }
    else
    {
        console.log("Player Choice: " + playerChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log("YOU WIN");
    }
}