let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("cards-el");
let Cards = [];

const player = {
  Name: "Praiz",
  tips: 145,
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.Name + ": $" + player.tips;

function getRandomCard() {
  let mathRandom = Math.floor(Math.random() * 14) + 1;
  if (mathRandom === 1) {
    return (mathRandom = 11);
  } else if (mathRandom >= 11) {
    return (mathRandom = 10);
  }
  return mathRandom;
}

//THE START GAME FUNCTION
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  Cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

// THE RENDER GAME FUNCTION
function renderGame() {
  let message = "";
  // ADDING THE CARD VALUES OF THE CARDS TO A P ELEMENT
  cardEl.textContent = "Cards: ";
  for (let index = 0; index < Cards.length; index++) {
    cardEl.textContent += " " + Cards[index];
  }
  // MY CONDITIONAL STATEMENT
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = " You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = " " + "sum: " + sum;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCards = getRandomCard();
    sum += newCards;
    Cards.push(newCards);
    renderGame();
  }
}

// 4:00;

const person = {
  name: "Lightbringer",
  age: 19,
  country: "Nigeria",
};

function logData() {
  return `${person.name} is ${person.age} years old and lives in ${person.country}`;
}

console.log(logData());

const age = Math.floor(Math.random() * 90) + 1;
console.log(age);
if (age < 6) {
  console.log("Free");
  // return;
} else if (age === 7 || age <= 17) {
  console.log("Child discount");
  // return;
} else if (age === 18 || age <= 26) {
  console.log("Student Discount");
  // return;
} else if (age === 27 || age <= 66) {
  console.log("Full Price");
  // return;
} else console.log("Senior Citizen discount");

const largestCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largestCountries.shift();
largestCountries.pop();
largestCountries.unshift("China");
largestCountries.push("Pakistan");

console.log(largestCountries);

/*

4:25:50*/
