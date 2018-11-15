var userChoice = "" ;
var computerChoice = "" ;
var winner = "" ;
var randomNumber= 0 ;

$("#shoot").click(function() {
    $("#userChoice").text($("#input").val());
    randomNumber = Math.random();
    if(randomNumber >.60) {
        $("#computerChoice").html("rock"); 
    } else if (randomNumber < 0.40) {
        $("#computerChoice").html("paper"); 
     } else {
        $("#computerChoice").html ("scissors");
     }
});

