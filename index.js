alert("🎲Welcome to the dice game.🎲\nThe higher number on the dice represents the winner")
var player1 = "Player 1";      
var player2 = "Player 2";

//Function to change the player name!
function editNames() {
    player1 = prompt("Change player 1 name");
    player2 = prompt("Change player 2 name");
    document.querySelector("#name1").innerHTML = player1;
    document.querySelector("#name2").innerHTML = player2;
}

//Function to check the  conditions to change the h1 attribute.
function rollFunction() {
    var randomImage = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png",)
    var randomImage1 = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png",)

    var randomNumber = randomImage[Math.floor(Math.random() * (randomImage.length))];  //To generate  a random image from the array.
    var randomNumber1 = randomImage1[Math.floor(Math.random() * (randomImage1.length))];
    document.querySelectorAll("img")[0].setAttribute("src", randomNumber);             //Assigning random image to image tag in html 
    document.querySelectorAll("img")[1].setAttribute("src", randomNumber1);
    if (randomNumber > randomNumber1) {
        document.querySelector("h1").innerHTML = "🥳🎉" + player1 + " wins";
    }
    else if (randomNumber < randomNumber1) {
        document.querySelector("h1").innerHTML = player2 + " wins🥳🎊";
    }
    else {
        document.querySelector("h1").innerHTML = "🤝It's a draw🤝"
    }
}
