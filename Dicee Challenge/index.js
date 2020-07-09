function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var randomNumber1 = getRandomInt(6)+1;
var randomNumber2= getRandomInt(6)+1;
var images = document.querySelectorAll('img');
images[0].setAttribute("src","images/dice"+randomNumber1+".png");
images[1].setAttribute("src","images/dice"+randomNumber2+".png");
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 Wins!";
} else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
} else{
    document.querySelector("h1").innerHTML="player 2 Wins!";

}