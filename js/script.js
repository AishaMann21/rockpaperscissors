var userChoice = "" ;
var computerChoice = "" ;
var winner = "" ;
var randomNumber= 0 ;

$("#shoot").click(function() {
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    randomNumber = Math.random();
    if(randomNumber <.333) {
        computerChoice= "rock";
        $("#computerChoice").html("rock"); 
    } else if (randomNumber < 0.666) {
        computerChoice= "paper";
        $("#computerChoice").html("paper"); 
     } else {
        computerChoice= "scissors";
        $("#computerChoice").html ("scissors");
     }
     
     if (userChoice=== "rock" && computerChoice === "rock" ){
         winner = "Uh-oh, its a tie!";
     } else if (userChoice=== "rock" && computerChoice === "paper"){
         winner="Computer Wins!";
     } else if (userChoice=== "rock" && computerChoice === "scissors"){
        winner="User Wins!";
    }
     
     if (userChoice=== "paper" && computerChoice === "rock" ){
         winner = "User Wins!";
     } else if (userChoice=== "paper" && computerChoice === "paper"){
         winner="Uh-oh, its a tie!";
     } else if (userChoice=== "paper" && computerChoice === "scissors"){
        winner="Computer Wins!";
        }
        
        
    if (userChoice=== "scissors" && computerChoice === "rock" ){
         winner = "Computer Wins!";
     } else if (userChoice=== "scissors" && computerChoice === "paper"){
         winner="User Wins!";
     } else if (userChoice=== "scissors" && computerChoice === "scissors"){
        winner="Uh-oh, its a tie!";
        }
        
        
     
     $("#result").html(winner);
});

