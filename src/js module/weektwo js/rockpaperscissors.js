
"use strict";

const Rock = 0;
const Paper = 1;
const Scissors = 2;
const Outcomes = {
    Draw: 0,
    Iwin: 1,
    BudgetClaudeWins: 2
};
let playerScore = 0
let budgetClaudeScore = 0
const rpsChoices = ['Rock', 'Paper', 'Scissors'];

function getBudgetClaudeChoice() {
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}
function playRound(playerSelection, computerSelection) {
    console.log(`You chose: ${playerSelection}`);
    console.log(`Budget Claude chose: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return console.log("Tie!");
    } else if (
        (computerSelection === `Rock` && playerSelection === `Scissors`) ||
        (computerSelection === `Scissors` && playerSelection === `Paper`) ||
        (computerSelection === `Paper` && playerSelection === `Rock`)
    ) {
        console.log("BudgetClaude Wins!");
        budgetClaudeScore++;
    } else {
        console.log("You Win!");
        playerScore ++;
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Budget Claude Score: ${budgetClaudeScore}`);
}


const allButtonsArray = Array.from(document.getElementsByTagName("button"));

allButtonsArray.forEach(button => {
    button.addEventListener("click", function() {
        const playerSelection = this.textContent;
        const computerSelection = getBudgetClaudeChoice();
        playRound(playerSelection, computerSelection);
    });
});

console.log(allButtonsArray);

