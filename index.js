var playerName = prompt("Enter your name to play the game:");    
var firstCharacterSlice = playerName.slice(0,1).toUpperCase();       //Capitalizing the first character in the input.
var capitalizeWord= (firstCharacterSlice)+(playerName.slice(1));
document.getElementById("name").innerHTML = capitalizeWord;         //Using capitalizeWord in HTML

var randomImage = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",)
var randomImage1 = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",)

var randomNumber = randomImage[Math.floor(Math.random()*(randomImage.length))];  //To generate  a random image from the array.
var randomNumber1 = randomImage1[Math.floor(Math.random()*(randomImage1.length))];
document.querySelectorAll("img")[0].setAttribute("src",randomNumber);             //Assigning random image to image tag in html 
document.querySelectorAll("img")[1].setAttribute("src",randomNumber1);

//Checking conditions to change the h1 attribute.
if ( randomNumber > randomNumber1){    
    document.querySelector("h1").innerHTML = "🚩"+capitalizeWord+" wins";
}
else if ( randomNumber < randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML= "Oops, It's a draw."
}