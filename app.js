let playerName = "";
let validRound = 0;

function playerIntroduction() {
    playerName = prompt("Please enter your name!");
    if((playerName == null ) || (playerName.trim() == "")) {
        alert("Oops...Please enter your name to continue!");
        validRound = 5;
        gameOver(2);
    } else {
        playerName = playerName.trim();
        let firstLetter = playerName.charAt(0).toUpperCase();
        playerName = firstLetter + playerName.slice(1);
        alert(`Let's get started, ${playerName}!`);
    }
}

playerIntroduction();

const options = ["rock", "paper", "scissors"];

function computerPlay() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        return `You Win!  ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    }

}

function playerPlay() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if(choice == null) {
            while(true) {
                    let endGame = prompt("Are u sure you're leaving? Type in (Y or N)");
                    if (endGame == null || endGame == 'Y' || endGame == 'y') {
                        location.reload();
                    } else if (endGame == 'n' || endGame == 'N'){
                        break;
                    } else {
                        console.log("Please write Y/y to end the game or N/n to continue playing")
                    }
                }
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scorecomputer = 0;
    console.log("Welcome!")
    for (let i=0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("------");
        if(checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer") {
            scorecomputer++;
        }

    }
    console.log("Game Over");
    if(scorePlayer > scorecomputer) {
        console.log("Player was the winner");
    }
    else if(scorePlayer < scorecomputer) {
        console.log("Computer was the winner");
    }
    else{
        console.log("We have a tie");
    }
}

game()
