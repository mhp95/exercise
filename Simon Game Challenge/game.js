
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];
var level = 0;
var status = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function nextSequence(){
var randomChosenColour = buttonColours[getRandomInt(3)];
gamePattern.push(randomChosenColour);
playSound(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn();
level ++ ;
if (status == 1){
    $("h1").text("Level "+level);
}
}

function playSound(name){
    var audio = new Audio("sounds/"+name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed").delay(100).queue(function(next){
        $(this).removeClass("pressed");
        next();
    });
}

function checkAnswer(currentLevel) {
    console.log(userClickedPattern[currentLevel]);
    console.log(gamePattern[currentLevel]);
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(nextSequence,1000);
            userClickedPattern = [];
        }
    } else{
        console.log("wrongggg");
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        $("body").addClass("game-over").delay(200).queue(function(next){
            $(this).removeClass("game-over");
            next();
        });
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function startOver() {
    level = 0;
    gamePattern = [];
    status=0;
}

$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    console.log(userChosenColour);
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern.length);
    console.log(userClickedPattern);
});

if (status == 0) {
    
$(document).on('keypress',function(){
    status = 1;
    nextSequence();
});
}
