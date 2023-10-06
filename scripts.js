function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3);
    if (choice === 1){ return 'Rock' }
    else if (choice === 2){ return 'Paper' }
    else { return 'Scissors'}
}

function playRound(playerSelection, computerSelection){
    //formatting playerSelection first letter capital, the rest lowercase
    playerSelection = playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1,playerSelection.length).toLowerCase();
    let winner = false;
    //cheating the switch function a little by using true for our cases. But a lot less code + we can fit the tie condition.
    switch(true){
        case(playerSelection === computerSelection):
            return ["It's a Tie. Computer chose "+computerSelection, -1];
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
    //Decision Win/Lose
    //array used to keep track if it's a win or loss (used for score later on) + a win/loss message
    if (winner === true){
        let message = "You Win! "+"Computer chose "+computerSelection;
        return [message, winner];
    }
    else{
        let message = "You Lose! "+"Computer chose "+computerSelection;
        return [message, winner];
    }
    }
    
function game(){
    let i=0;
    let win = 0;
    let loss = 0;
    while (i<5){
        let playerSelection = prompt("Rock, Paper or Scissors ?"); //ideally, catch any prompts which give something other than rock, paper, scissors.
        let computerSelection = getComputerChoice();
        
        let results = playRound(playerSelection,computerSelection);
        //false == 0 & true == 1, to keep track of score
        if (results[1] == 0){
            loss += 1;
        }
        else if (results[1] == 1){
            win += 1;
        }
        //results of a single round
        console.log(results[0]+". The score is "+win+" - "+loss);
        i += 1;
    }

    //results of the game of 5 rounds
    if (win>loss){
        console.log("Congratulations! You won!")
    }
    else if (win === loss){
        console.log("It's a Tie!")
    }
    else{
        console.log("You lost..")
    }
}
game();







/* USING SWITCH WITH THE VALUES OF PLAYERSELECTION, BUT REQUIRES ADDITIONAL IF STATEMENT TO EVALUATE COMPUTERSELECTION
    if (computerSelection === playerSelection){
        return "It's a Tie!"
    }
    switch(playerSelection){

        case ('Rock'):
            if (computerSelection === 'Scissors'){
                winner = true;
            }
            break;

        case('Paper'):
            if (computerSelection === 'Rock'){
                winner = true;
            }
            break;

        case('Scissors'):
            if (computerSelection === 'Paper'){
                winner = true;
            }
            break;
    } */
