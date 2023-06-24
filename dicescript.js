function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage = "dice" + randomNumber1 + ".jpg";
    var randomImageSource = "diceimages/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage2 = "dice" + randomNumber2 + ".jpg";
    var randomImageSource2 = "diceimages/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    var rollButton = document.getElementById("roll-button");
    if (randomNumber1 > randomNumber2) {
      rollButton.textContent = "Player One Wins!";
    } else if (randomNumber2 > randomNumber1) {
      rollButton.textContent = "Player Two Wins!";
    } else {
      rollButton.textContent = "It's a Tie!";
    }
  }



    

