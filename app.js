function computerPlay(){
    let computerVal=Math.floor(Math.random()*3);
    if (computerVal===0){
        return "rock"
    }else if(computerVal===1){
        return "paper"
    }else if (computerVal===2){
        return "scissors"
    }
}
