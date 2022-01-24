let netsTie = [98]
let knicksTie = [98]

let netsWin = [980,1,2]
let knicksLose = [98,1,2]

let netsLose = [98,1,2]
let knicksWin = [958,12,23]

function calAvg(scores){
    let sum = 0
    let avg = 0
    for(let i = 0; i<scores.length; i++){
        sum += scores[i]
    }
    return avg = sum/scores.length

}

function checkWinner(team1,scores1,team2,scores2){
    let team1Avg = calAvg(scores1)
    let team2Avg = calAvg(scores2)
    if(team1Avg > team2Avg){
        return (`${team1} are the winner with an average score of ${team1Avg}!`)
    }
    else if(team2Avg > team1Avg){
        return (`${team2} are the winner with an average score of ${team2Avg}!`)
    }
    else{
        return(`${team1} and ${team2} have tied with an average score of ${team2Avg}!`)
    }
}

console.log(checkWinner("Nets", netsWin, "Knicks", knicksLose));
console.log(checkWinner("Nets", netsLose, "Knicks", knicksWin));
console.log(checkWinner("Nets", netsTie, "Knicks", knicksTie));

function tipCalc(billValue){
    return(billValue < 100 && billValue > 30 ? `The bill was ${billValue}, the tip was ${billValue*.15},
    and the total value is ${billValue+ (billValue*.15)}`
    : `The bill was ${billValue}, the tip was ${billValue*.2}, and the total value is ${billValue+ (billValue*.2)}`) 
}

console.log(tipCalc(275));

let ConvertCelciusToFahrenheit = celcius => (celcius*9/5)+ 32;
let ConvertFahrenheitToCelcius = fahrenheit => (fahrenheit-32)*(5/9);

console.log(ConvertCelciusToFahrenheit(0));
console.log(ConvertFahrenheitToCelcius(32)); 
