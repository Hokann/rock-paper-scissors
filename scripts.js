//to get a random number, either 1,2 or 3, each associated to a rps move
function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3);
    if (choice === 1){ return 'Rock' }
    else if (choice === 2){ return 'Paper' }
    else { return 'Scissors'}
}

function playRound(playerSelection){
    //array to store results [message, winner]
    let results = [];
    let winner = false; message = '';
    let computerSelection = getComputerChoice();
    //cheating the switch function a little by using true for our cases. But a lot less code + we can fit the tie condition.
    switch(true){
        //case : tie -> no winner, we use -1 as a placeholder
        case(playerSelection === computerSelection):
            return results = ["It's a Tie! Computer chose "+computerSelection, -1];
        //the 3 cases in which we win
        case(playerSelection === 'Rock' && computerSelection === 'Scissors'):
            winner = true;
            break;
        case(playerSelection === 'Paper' && computerSelection === 'Rock'):
            winner = true;
            break;
        case(playerSelection === 'Scissors' && computerSelection === 'Paper'):
            winner=true;
            break;
    }
    if (winner){
        message = "You Win! Computer chose "+computerSelection;
    }
    else{
        message = "You Lose! Computer chose "+computerSelection;
    }
    return results = [message, winner] 

    }

let win = 0;
let loss = 0;
let roundResults = [];
//setting up the ui
const container = document.querySelector('body');
const btnContainer = document.createElement('div');
const btn1 = document.createElement('button');
btn1.innerText = 'Rock';
const btn2 = document.createElement('button');
btn2.innerText = 'Paper';
const btn3 = document.createElement('button');
btn3.innerText = 'Scissors';
btnContainer.appendChild(btn1);
btnContainer.appendChild(btn2);
btnContainer.appendChild(btn3);
container.appendChild(btnContainer);
const div = document.createElement('div');
container.appendChild(div);

//event listener for the whole document, but we only do something when buttons are pressed
document.addEventListener("click", function(e){
    //for each new click, we erase the (past) results
    div.innerText = '';
    //switch-case for the 3 buttons. Once button is clicked we play a round with the chosen move
    //e.target -> the HTML element in its entirety, e.g. <button>Rock</button>. .innerText to get 'Rock'
    switch (e.target.innerText){
        case ('Rock'):
            roundResults = playRound('Rock');
            break;
        case ('Paper'):
            roundResults = playRound('Paper');
            break;
        case ('Scissors'):
            roundResults = playRound('Scissors');
            break;
        //in all other cases, we do nothing
        default:
        break;
    }

    let roundMessage = roundResults[0]; let roundWin = roundResults[1];

    div.innerText += roundMessage;

    if (roundWin === true){
        win += 1;
    }
    else if (roundWin === false){
        loss += 1;
    }
    div.innerText += "\n The score is "+win+" - "+loss+".";

    if (win === 5){ 
        div.innerText += "\n Congratulations! You beat the computer!";
        //reinitialize the score
        win = 0; loss = 0;
    }
    else if (loss === 5){
        div.innerText += "\n Game over... You lost"
        win = 0; loss = 0;
    }
    
})