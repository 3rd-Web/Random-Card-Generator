/* eslint-disable */
import "bootstrap";
import "./style.css";

function randomNumber() {
  let arrNum = [
    "ꋫ",
    "𝟚",
    "𝟛",
    "𝟜",
    "𝟝",
    "𝟞",
    "𝟟",
    "𝟠",
    "𝟡",
    "𝟙𝟘",
    "ꀭ",
    "ℚ",
    "ꀗ"
  ];
  let randomIndex = Math.floor(Math.random() * arrNum.length);
  return arrNum[randomIndex];
}

function randomSuit() {
  let arrSuit = ["&#9830", "&#9829", "&#9824", "&#9827"];
  let randomSuit = Math.floor(Math.random() * arrSuit.length);
  if (randomSuit == 0 || randomSuit == 1) {
    document.querySelector(".card-container").classList.add("red");
  } else {
    document.querySelector(".card-container").classList.add("black");
  }
  return arrSuit[randomSuit];
}

let suitValue = randomSuit();

window.onload = () => {
  document.querySelector("#generate").innerHTML = randomNumber();
  document.querySelector(".top").innerHTML = suitValue;
  document.querySelector(".bottom").innerHTML = suitValue;
};
