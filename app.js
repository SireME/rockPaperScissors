
function computerPlay(){
    let computerChoice=Math.floor(Math.random()*3);
    const compVal=["rock","paper","scissors"];
    return compVal[computerChoice];
}
function playerSelecct(){
    let plInput=prompt("Your Selection? \n rock paper or Scissors").toLowerCase();
    return plInput
}

function playRound(){
    const playerInput=playerSelecct()
    const computerPl=computerPlay();
    let winState="Wow You won"
    if (playerInput==="rock" && computerPl==="scissors"){
        winState;
    }else if(playerInput==="paper" && computerPl==="rock"){
        winState;
    }else if(playerInput==="scissors" && computerPl==="paper"){
        winState;
    }else if(playerInput===computerPl){
        winState="it's a tie";
    }else{
        winState="You loose";
    }
    console.log(`You played ${playerInput} and the computer played ${computerPl}  \n RESULTS \n ${winState}`)
    return winState
 
}

function game(){
    for (let index = 1; index < 6; index++) {
        playRound();     
    }    
}

game();
