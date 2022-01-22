"use strict;"
var score = 10;
document.getElementById("score").innerHTML=score;
var highscore = 0;
document.getElementById("highscore").innerHTML=highscore;
var inputfrompage = document.querySelector('input');
const btn = document.querySelector('button');
btn.addEventListener('click',func(inputfrompage.value));
//input is string
function func(input){
    if (score!==0){
        const randnum = Math.floor(Math.random()*100 + 1);
        if (input==="")
            alert("no input");
        else if (!isNaN(parseInt(input)))
            alert("invalid value");
        else{
            var innum = parseInt(input);
            if (innum > randnum){
                alert("Too high");
                score--;
            }
            else if (innum <randnum){
                alert("Too low");
                score--;
            }
            else{
                document.body.style.backgroundColor = "red";
                //Still need to add the showing of secret number
                //Need to change background color/dimensions of box of secret number
                if (score>highscore)
                    highscore=score;
                    document.getElementById("highscore").innerHTML(highscore);
            }
        }
    }
    document.getElementById("score").innerHTML=score;
    if(score===0)
        prompt("Sorry, the game is over");
}