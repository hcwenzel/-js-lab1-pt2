"use strict";

let userWins = null;
let userHP = 40;
let grantHP = 10;
let userName = null;
let userChoice = null;

function startGame() {
  let play = prompt("Do you want to play?");
  if (play === "Yes") {
    userName = prompt("Please enter a name.");
    startCombat();
  }
  else {
    console.log("OK, we won't play.");
  }
}

function startCombat() {
  userChoice = prompt("Do you want to attack or quit?");
  while (userChoice === "attack") {
    getDamage();
    console.log(`The Almighty Grant has ${grantHP} HP and ${userName} has ${userHP} HP.`);

    if (grantHP <= 0) {
      userWins++;
      grantHP = 10;
      console.log(`${userName} defeated the Almighty Grant!`);
    }

    if (userWins === 3) {
      console.log(`${userName} wins the game!`);
      break;
    }

    if (userHP <= 0) {
      console.log(`The Almighty Grant defeated ${userName}!`);
      break;
    }
  }
  console.log("Lame. Quitters never win.");
  return;
}

function getDamage() {
  userHP -= Math.floor(Math.random() * 5) + 1;
  grantHP -= Math.floor(Math.random() * 5) + 1;
}

startGame();