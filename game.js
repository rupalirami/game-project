// import gridArray  from "./data/grid.js";
// console.log(gridArray);
//step 2 - get values
const playerGridColor = "#669bbc";
const playerSideColor = "#12364d";
const computerGridColor = "#d58881";
const computerSideColor = "#901904";
const player1Name = "Rupali"
let currentPlayer = player1Name;
const sideValue = document.getElementsByClassName("side");
const gridValue = document.getElementsByClassName("grid");

// TESTING 
// console.log(sideValue);
// console.log(sideValue[0].id);
// console.log(sideValue.length);
// console.log(gridValue[0].id);
// console.log(gridValue.length);
// gridValue[0].style.backgroundColor="pink";
// gridValue[0].style.backgroundColor="lightblue";

// Set event listener for sides
for (let i = 0; i < sideValue.length; i++) {
    sideValue[i].addEventListener("click", () => {
        // console.log(`id=${sideValue[i].id}`);
        if (currentPlayer !== "Computer"){
            sideValue[i].style.borderColor = "red";
            // call switch current player function
            currentPlayer = "Computer";
        } else {
            sideValue[i].style.borderColor = "blue";
            currentPlayer = player1Name;
        }
    });
};
