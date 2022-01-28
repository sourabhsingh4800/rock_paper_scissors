let userscore=0;
let computerscore=0;
let userscore_span=document.getElementById("user-score");
let computerscore_span=document.getElementById("computer-score");
let scoreboard_div=document.querySelector(".score-board");
let result_p=document.querySelector(".result > p");
let result_you=document.querySelector(".result > you");
let result_computer=document.querySelector(".result > computer");
let paper_div=document.getElementById(".p");
let rock_div=document.getElementById(".r");
let scissors_div=document.getElementById(".s");
function getcomputerchoice(){
    const choices =['r','p','s'];
    const randomnumber=Math.floor(Math.random()*3);
    return choices[randomnumber];
}
function converttoword(letter){
    if(letter=== "r"){
        return "ROCK";
    }
    if(letter=== "p"){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}
function win(userchoice,computerchoice){
   userscore++;
   userscore_span.innerHTML =userscore;
   computerscore_span.innerHTML =computerscore;
   result_you=converttoword(userchoice);
   result_computer=converttoword(computerchoice);
   result_p.innerHTML= converttoword(userchoice)+" beats "+converttoword(computerchoice)+" . you win!!";
   document.getElementById(userchoice).classList.add('green-glow');
   setTimeout(function(){ document.getElementById(userchoice).classList.remove('greenglow')},500);
}
function loss(userchoice,computerchoice){
   computerscore++;
   computerscore_span.innerHTML =computerscore;
   userscore_span.innerHTML = userscore;
   result_you=converttoword(userchoice);
   result_computer=converttoword(computerchoice);
   result_p.innerHTML= converttoword(computerchoice)+" beats " +converttoword(userchoice)+" you loss!!"
   document.getElementById(userchoice).classList.add('red-glow');
   setTimeout(function(){ document.getElementById(userchoice).classList.remove('red-glow')},500);
}
function draw(userchoice,computerchoice){
    result_you=converttoword(userchoice);
    result_computer=converttoword(computerchoice);
    result_p.innerHTML = "YOUR CHOICE IS SIMILAR TO COMPUTER CHOICE HENCE MATCH IS DRAW!!"
    document.getElementById(userchoice).classList.add('grey-glow');
    setTimeout(function(){ document.getElementById(userchoice).classList.remove('grey-glow')},500);
}
function game(userchoice){
   const computerchoice=getcomputerchoice();
   switch (userchoice + computerchoice) {
       case "rs":
       case "pr":
       case "sp":
           win(userchoice,computerchoice);
           break;
       case "pr":
       case "sr":
       case "ps":
           loss(userchoice,computerchoice);
           break;
       case "rr":
       case "pp":
       case "ss":
           draw(userchoice,computerchoice);
           break;
   } 
}
function main(){
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () =>game("s"));
}
main();
