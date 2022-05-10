let randomnum=Math.floor(Math.random()*6)+1;
let diceimg="images/dice"+randomnum+".png";
document.querySelectorAll("img")[0].setAttribute("src",diceimg);

let randomnum2=Math.floor(Math.random()*6)+1;
let diceimg2="images/dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",diceimg2);


if(randomnum>randomnum2){
	document.querySelector("h1").innerHTML="😁 player 1 won"
}
else if(randomnum2>randomnum){
	document.querySelector("h1").innerHTML="😀 player2 won"
}
else{
	document.querySelector("h1").innerHTML="😉 drawn"
}

document.getElementById("btn").addEventListener("click",function(event){
event.preventDefault();
});