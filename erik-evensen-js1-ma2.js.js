// Question 1

const myFunctionExpression = function() {
  console.log("Erik");
};

// Question 2

const button1 = document.querySelector(".btn");

function buttonClick() {
  console.log("I was clicked");
}

button1.addEventListener("click", buttonClick);

// Question 3

const textInput = document.querySelector("#firstName");

function keyIsPressed(event) {
  console.dir(event.key);
}
textInput.addEventListener("keydown", keyIsPressed);

// Question 4

const button2 = document.querySelector("button");

function hoverMouse() {
  console.log("The cursor moved over the button");
}

button2.addEventListener("mouseover", hoverMouse);

button2.classList.add("hover");

// Question 5

const button3 = document.querySelector("[data-animal='dog']");
function noMouse() {
  console.log("The cursor moved away from the button");
}
button3.addEventListener("mouseout", noMouse);

button3.classList.remove("hover");

// Question 6

const listOfItems = document.querySelectorAll("ul > li");
console.log(listOfItems);

for (let i = 0; i < listOfItems.length; i++) {
  listOfItems[i].addEventListener("mouseover", loadValues);
}
function loadValues(event) {
  console.log(event.target.dataset.animal);
}

// Question 7

const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

// Question 8

const sheep = ["Malcolm", "Anders", "Marie"];

function handleNames(sheepName) {
  console.log(sheepName);
}
sheep.forEach(handleNames);

// Question 9

function logTime() {
  console.log(new Date());

  if (counter === 5) {
    clearInterval(intervalId);
  }

  counter++;
}

let counter = 0;

const intervalId = setInterval(logTime, 500);

// Question 10

const timeoutContainer = document.querySelector(".container");

function updateDiv() {
  timeoutContainer.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);
