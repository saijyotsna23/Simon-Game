


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
//var level=0;


$(document).keypress(function() {
    var hasKeyPressed=false;
    if (!hasKeyPressed) {
        //$("h1").html("Level 0");
        nextSequence();    // Call nextSequence on the first keypress
        
        hasKeyPressed = true; // Set the flag to true after the first keypress
    }
});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  
  playSound(userChosenColour);

  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});
var i=0;
function nextSequence() {

$("h1").html("Level "+i++);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}




function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
console.log("success");
if (userClickedPattern.length === gamePattern.length){

    //5. Call nextSequence() after a 1000 millisecond delay.
    setTimeout(function () {
      nextSequence();
    }, 1000);

  }
    }
    else{
        console.log("wrong");
        $("body" ).addClass("game-over");

        //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
        setTimeout(function () {
          $("body" ).removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
    }

}
function startOver(){
    i=0;
    gamePattern=[];
    userClickedPattern=[];

}