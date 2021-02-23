// // Closures
// function makeFunc() {
//   let message = "Closures are cool!";
//   function displayMessage() {
//     console.log(message);
//   }
//   return displayMessage;
// }

// const newFunc = makeFunc();
// newFunc();

// //Closures Emulating Private methods
// const counter = (function () {
//   let privateCounter = 0;
//   function changeVal(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function () {
//       changeVal(1);
//     },
//     decrement: function () {
//       changeVal(-1);
//     },
//     value: function () {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter.value());
// console.log(counter.increment());
// console.log(counter.value());

// node.getElementById

// node.getElementsByClassName()

// node.querySelector()

// node.querySelectorAll()

// document.createElement()

function changeHeader(newTitle) {
  const title = document.querySelector("#title");
  title.innerText = newTitle;
  //   title.style.backgroundColor = color;
}

// changeHeader("This is a new header");

function getAllNames() {
  let allNames = document.querySelectorAll(".pokemon");
  console.log(allNames);
  allNames.forEach(logName);
}

function logName(pokeHeader) {
  pokeHeader.innerText = "Hey Adam love JS";
}

// getAllNames();
// changeHeader("red");

function createRow(name, type, weight) {
  let newRow = document.createElement("tr");

  let newRowHead = document.createElement("th");
  newRowHead.innerText = name;

  let newType = document.createElement("td");
  newType.innerText = type;

  let newWeight = document.createElement("td");
  newWeight.innerText = weight;

  newRow.append(newRowHead, newType, newWeight);

  document.getElementById("table").appendChild(newRow);
}

createRow("Adam", "Cool", "100bs");
createRow("Zed", "Supercool", "10bs");
createRow("Femi", "Fire", "1,000,000bs");

// function deleteRow() {
//   document.getElementById;
// }
