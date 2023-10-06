function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3);
    if (choice === 1){ return 'Rock' }
    else if (choice === 2){ return 'Paper' }
    else { return 'Scissors'}
}

function playRound(playerSelection){
    let results = [];
    let winner = false; message = '';
    let computerSelection = getComputerChoice();
    //cheating the switch function a little by using true for our cases. But a lot less code + we can fit the tie condition.
    switch(true){
        case(playerSelection === computerSelection):
            return results = ["It's a Tie! Computer chose "+computerSelection, -1];
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

document.addEventListener("click", function(e){
    div.innerText = '';
    switch (e.target.innerText){
        case ('Rock'):
            console.log(e.target.innerText);
            roundResults = playRound('Rock');
            break;
        case ('Paper'):
            console.log(e.target.innerText);
            roundResults = playRound('Paper');
            break;
        case ('Scissors'):
            console.log(e.target.innerText);
            roundResults = playRound('Scissors');
            break;
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
        win = 0; loss = 0;
    }
    else if (loss === 5){
        div.innerText += "\n Game over... You lost"
        win = 0; loss = 0;
    }
    
})


//when win = 5 -> game over - win
//when loss = 5 -> game over - lose