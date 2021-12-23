var randomVariable1=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","dice"+randomVariable1+".png");
var randomVariable2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","dice"+randomVariable2+".png");
if(randomVariable1>randomVariable2)
document.querySelector("h1").innerHTML="⭐⭐⭐&#11088 player 1 win";
else if(randomVariable1<randomVariable2)
document.querySelector("h1").innerHTML="player 2 win⭐⭐⭐"
else
document.querySelector("h1").innerHTML="⭐draw⭐";

