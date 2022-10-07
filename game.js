// Import grid array
import gridArray from "./data/grid.js";
// Set up DOM variables
const playerName = document.querySelector(".get-player-name");
const player1Name = document.querySelector("#username");
const startGame = document.querySelector("#start-game");
const sideValue = document.getElementsByClassName("side");
const gridValue = document.getElementsByClassName("grid");
const displayScore = document.querySelector(".display");
const player1Score = document.querySelector("#player1-score");
const player2Score = document.querySelector("#player2-score");
// Set up color variables
// const player1GridColor = "#669bbc";
// const player1SideColor = "#12364d";
// const player2GridColor = "#d58881";
// const player2SideColor = "#901904";
const player1GridColor = "#c2e7ff";
const player1SideColor = "#103e8f";
const player2GridColor = "#efa8b8";
const player2SideColor = "#c9184a";
// Set up player variables
let player1 = player1Name.value;
let player2 = "Comp";
let currentPlayer = player1Name.value;
let player1ScoreCount = 0;
let player2ScoreCount = 0;
let playerSideColor = "";
let playerGridColor = "";
// Set up game variables
let horSides = [];
let verSides = [];
let allSides = [];
let clickedSides = [];
let gridResults = [];

// Set up start game event listener and initialize variables on click
startGame.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("in start game click");
    // get player details and display scores
        player1 = player1Name.value;
        player2 = "Comp";
        currentPlayer = player1Name.value;
        playerName.style.display = "none";
        displayScore.style.display = "flex";
        player1Score.innerHTML = `${player1Name.value}: ${player1ScoreCount} `;
        player1Score.style.color = player1SideColor;
        // player1Score.style.font = "bold 20px";
        player2Score.innerHTML = `vs. Computer: ${player2ScoreCount}`;
        player2Score.style.color = player2SideColor;
        // player2Score.style.font = "bold 20px";
        console.log(`${player1Name}: ${player1ScoreCount} vs. Computer: ${player1ScoreCount}`);
        console.log(`player1=${player1.charAt(0)}, player2=${player2}`);

    // create arrays for updating
        createSides();
    // console.log(allSides);
    // createGridCells(); --- DOESN'T WORK
        // // console.log(gridCells);
    // // change side color on clicks according to current player value
        changeSideColor(allSides);
});

// TESTING
// console.log(sideValue);
// console.log(sideValue[0].id);
// console.log(sideValue[8].id);
// console.log(sideValue[9].id);
// console.log(sideValue.length);
// console.log(gridValue[0].id);
// console.log(gridValue[1].id);
// console.log(gridValue.length);

// Function to switch players for random generation of side click by computer
// const switchPlayer = ()

// Function to create event listener for sides, change color and update isClicked in sides array on clicking of side
const changeSideColor = (sideArray) => {
    for (let i = 0; i < sideValue.length; i++) {
        //add listener
        sideValue[i].addEventListener("click", () => {

        console.log(`i=${i}`);
        console.log(`in changeside id=${sideValue[i].id}`);
        console.log(`player1=${player1}, player2=${player2}`);
        console.log(`curr player=${currentPlayer}`)
        if (currentPlayer === player1) {
            playerSideColor = player1SideColor;
            playerGridColor = player1GridColor;
            currentPlayer = player2;

            console.log(`in if curr player=${currentPlayer}`);
        } else { // remove this when using random for computer
            playerSideColor = player2SideColor;
            playerGridColor = player2GridColor;
            currentPlayer = player1;

            console.log(`in else curr player=${currentPlayer}`);
        }

        sideValue[i].style.border = `2px solid ${playerSideColor}`;
        // sideValue[i].style.backgroundColor = `${playerSideColor}`;
        // update side to isClicked in sideArray
        updateSide(sideArray,sideValue[i].id);

        // console.log(`in changeSide clickedSides=${clickedSides}`);
        // console.log(`in changeSide allsides = ${allSides}`);

        // update grid to increment sideClickedCount
        updateGrid(gridArray,sideValue[i].id);
        
// if sideClickedCount = 3 then switch player, get id of side not clicked and change side color, update capturedBy to player name, change grid color to player grid color and grid text to player initial
    //     if (gridcount === 4) {
    // // Change grid color for testing
    // gridValue[0].style.backgroundColor=`${playerGridColor}`;
    // gridValue[0].textContent = player1.charAt(0);
    // gridValue[8].style.backgroundColor=`${player2GridColor}`;
    //// test for updating grid text to Comp, doesn't work as font doesn't change
    //// gridValue[8].textContent = player2.substring(1,4);
    // gridValue[8].textContent = player2.charAt(0);
    //     };
       
        return;
        // console.log(`in side click allSide=${allSides}`)
        });
    };
}

// Function to create sides array with object having sideId and isClicked = false when play game is clicked
const createSides = () => {
    console.log("in create sides");
    allSides, verSides, horSides = [];
    // horSides = [];   
    for (let i = 0; i < 72; i++) {
        horSides[i] = [`side-hor-${i+1}`];
        verSides[i] = [`side-ver-${i+1}`];
    }
    return allSides = horSides.concat(verSides);
};
// Function to create gridCells object with 4 side values and sideClickedCount = 0 false when play game is clicked
// const createGridCells = () => {
//     console.log("in create grids");
//     for (let i = 0; i < 64; i++) {
//         gridCells[i] = [{gridId:`grid-${i+1}`,top:`side-hor-${i+1}`,right:`side-ver-${i+2}`,bottom:`side-hor-${i+9}`,left:`side-ver-${i+1}`,sideClickedCount:0,capturedBy:""}];
//     }
//     return gridCells;
// };
// MODIFIED to another way
// COMMENTED CreateGridCells as it doesn't work when called in function!!! Imported from grid.js
// const createGridCells = () => {
//         console.log("in create grids");
//         for (let i = 0; i < 64; i++) {
//             gridCells[i] = [
//                 {
//                     gridId: `grid-${i+1}`,
//                     sides: [`side-hor-${i+1}`, `side-ver-${i+2}`, `side-hor-${i+9}`, `side-ver-${i+1}`],
//                     sideClickedCount: 0,
//                     capturedBy: ""
//                 }
//             ];
//             console.log(gridCells[i])
//         }
//         return gridCells;
//     };

// Function to update side isClicked = true in allSides array when a side is clicked 
// modified to create new clicked array and remove the clicked side from allSides array

const updateSide = (array, side) => {
    // console.log(`in updateside side=${side}`);
    // console.log(`array[0]=${array[0]}`);
    // console.log(`typeof array[i]=${typeof array[0]}`);
    let found = false;
    for (let i = 0; i < array.length && !found; i++) {
        if (array[i] == side) {
            // console.log(`in if i=${i}`);
            found = true;
            console.log(`array[i]=${array[i]}`);
            clickedSides.push(array.splice(i,1));
            console.log(`in updateside found=${found} clickedside=${clickedSides}`);
            break
        }
    }
    return;
};

// Function to update grid side values when side is updated and update sideClickedCount return sideClickedCount

const updateGrid = (array, side) => {
    console.log(`in updateGrid`);
console.log(`side=${side}`);
    array.forEach(element => {
        // console.log(`gridId=${element.gridId}`);
        // console.log(`sides=${element.sides}`);
        // console.log(`sideClickedCount=${element.sideClickedCount}`);
        // console.log(`len=${element.sides.length}`);
        for (let i = 0; i < element.sides.length; ++i) {
            if (element.sides[i] === side) {
                ++element.sideClickedCount;
                console.log(`in if gridID=${element.gridId};sideClickedCount=${element.sideClickedCount}`);
            }
        }
    });
    return;
};

// Function to capture grid cell and update grid values and display updated score
const changeGridCell = (grid, sides, player) => {
//
};
