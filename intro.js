
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);

    return choices[i];
}

function update_output(player, computer, result) {

    player = player.toUpperCase();
    computer = computer.toUpperCase();

    const playerChoice = document.querySelector("#player_choice_display");
    playerChoice.textContent = "YOUR CHOICE: " + player;

    const computerChoice = document.querySelector("#computer_choice_display");
    computerChoice.textContent = "COMPUTER CHOICE: " + computer;

    const outcome = document.querySelector("#outcome");
    outcome.textContent = "WINNER: " + result;
}

function playRound(playerChoice) {

    let computerChoice = getComputerChoice();

    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors")
    {
        alert("INVALID CHOICE");
    }

    if (playerChoice == computerChoice) {
        update_output(playerChoice, computerChoice, "DRAW");
    }
    else if ((playerChoice == "rock" && computerChoice == "paper") ||
             (playerChoice == "paper" && computerChoice == "scissors") ||
             (playerChoice == "scissors" && computerChoice == "rock"))
    {
        update_output(playerChoice, computerChoice, "COMPUTER");
    }
    else
    {
        update_output(playerChoice, computerChoice, "YOU");
    }
}

const rock_btn = document.querySelector("#rock");
rock_btn.addEventListener('click', function (e) {
    e.target.style.background = "pink";
    playRound("rock");
});

const paper_btn = document.querySelector("#paper");
paper_btn.addEventListener('click', function (e) {
    e.target.style.background = "pink";
    playRound("paper");
});

const scissors_btn = document.querySelector("#scissors");
scissors_btn.addEventListener('click', function (e) {
    e.target.style.background = "pink";
    playRound("scissors");
});
