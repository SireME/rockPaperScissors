function computerPlay(){
    let computerChoice=Math.floor(Math.random()*3);
    const compVal=["rock","paper","scissors"]
    return compVal[computerChoice]
}
console.log(computerPlay())
