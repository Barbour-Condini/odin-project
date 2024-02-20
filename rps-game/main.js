const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random()*3);
    return (randomNumber === 0) ? 'rock' :
        (randomNumber === 1) ? 'paper' : 
        'scissors';
};

const getPlayerChoice = () => {
    let validInput = false;
    while (!validInput) {
        userInput = prompt("rock, paper, or scissors? ").toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
            validInput = true
        }
    }
    return userInput;
};

const playRound = () => {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}`);

    console.log((computerSelection === playerSelection) ? "Draw!" :
    (computerSelection === 'rock' && playerSelection === 'scissors'
    || computerSelection === 'scissors' && playerSelection === 'paper'
    || computerSelection === 'paper' && playerSelection === 'rock') ? "Computer wins!":
    'Player wins!');
}

const playGame = () => {
    for (i=1; i<=5; i++) {
        console.log(`round ${i}`);
        playRound();
    }
}

playGame();


