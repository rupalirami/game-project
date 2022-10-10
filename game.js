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
let player2 = "Computer";
let currentPlayer = player1;
let player1ScoreCount = 0;
let player2ScoreCount = 0;
let playerSideColor = "";
let playerGridColor = "";
// Set up game variables
let horSides = [];
let verSides = [];
let allSides = [];
let clickedSides = [];
let isExtraTurn = false;

// Set up start game event listener and initialize variables on click
startGame.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("in start game click");
    // get player details and display scores
        player1 = player1Name.value;
        player2 = "Computer";
        currentPlayer = player1Name.value;
        playerName.style.display = "none";
        displayScore.style.display = "flex";
        player1Score.innerHTML = `${player1Name.value}: ${player1ScoreCount} `;
        player1Score.style.color = player1SideColor;
        // player1Score.style.font = "bold 20px";
        player2Score.innerHTML = `vs."Computer: ${player2ScoreCount}`;
        player2Score.style.color = player2SideColor;
        // player2Score.style.font = "bold 20px";
console.log(`in play game extra turn=${isExtraTurn}`);
        // console.log(`${player1Name}: ${player1ScoreCount} vs."Computer: ${player1ScoreCount}`);
        // console.log(`player1=${player1.charAt(0)}, player2=${player2}`);

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

// Function to switch players for random generation of side click by"Computer
// const switchPlayer = ()

// Function to create event listener for sides, change color and update isClicked in sides array on clicking of side
const changeSideColor = (sideArray) => {
    for (let i = 0; i < sideValue.length; i++) {
        //add listener
        sideValue[i].addEventListener("click", () => {

        // console.log(`i=${i}`);
        console.log(`in changeside id=${sideValue[i].id}`);
        console.log(`curr player=${currentPlayer}`);
        console.log(`in changeside1 extra turn=${isExtraTurn}`);

        getPlayerSideColor(currentPlayer);
        sideValue[i].style.border = `2px solid ${playerSideColor}`;
        updateSide(sideArray, sideValue[i].id);
        updateGrid(gridArray, sideValue[i].id, currentPlayer);
        console.log(`in changeside2 extra turn=${isExtraTurn}`);
        if (!isExtraTurn) {
            changePlayer(currentPlayer);
        }
        return;
        // console.log(`in side click allSide=${allSides}`)
        });
    };
}

// Functions to get player colors and switch players
const getPlayerSideColor = (player) => {    
    console.log(`in get player side=${player}`);
    if (player === player1) {
        playerSideColor = player1SideColor;
    } else { // remove this when using random for"Computer
        playerSideColor = player2SideColor;
    }
    console.log(`playerSideColor=${player1SideColor}`);
    return;
};
const getPlayerGridColor = (player) => {    
    console.log(`in get player grid=${player}`);
    if (player === player1) {
        playerGridColor = player1GridColor;
    } else { // remove this when using random for"Computer
        playerGridColor = player2GridColor;
    }
    console.log(`playerGridColor=${playerGridColor}`);
    return;
};
const changePlayer = (player) => {    
    console.log(`in change player=${player}`);
    console.log(`in change player extra turn=${isExtraTurn}`);
    if (player === player1) {
        currentPlayer = player2;
    } else { // remove this when using random for"Computer
        currentPlayer = player1;
    }
    console.log(`in change player after if= ${player}, current player=${currentPlayer}`);
    return;
};

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
            // console.log(`in updateside found=${found}clickedside=${clickedSides}`);
            break
        }
    }
    return;
};

// Function to update grid side values when side is updated and update sideClickedCount return sideClickedCount

const updateGrid = (array, side, player) => {
    console.log(`in updateGrid`);
console.log(`side=${side}`);
    array.forEach((element, index) => {
        // console.log(`gridId=${element.gridId}`);
        // console.log(`sides=${element.sides}`);
        // console.log(`sideClickedCount=${element.sideClickedCount}`);
        // console.log(`len=${element.sides.length}`);
        for (let i = 0; i < element.sides.length; ++i) {
            if (element.sides[i] === side) {
                ++element.sideClickedCount;
                console.log(`in if gridID=${element.gridId};sideClickedCount=${element.sideClickedCount}`);
                if (element.sideClickedCount === 4) {
                    getPlayerGridColor(player);
                    // console.log(`element=${element}`);
                    console.log(`gridID when count is 4=${element.gridId}`);
                    console.log(`index=${index}`);
                    gridValue[index].style.backgroundColor=`${playerGridColor}`;
                    gridValue[index].textContent = currentPlayer.charAt(0).toUpperCase();
                    console.log(`bef curr player=${currentPlayer}`);
                    if (player === player1) {
                        currentPlayer = player1;
                    } else { // remove this when using random for"Computer
                        currentPlayer = player2;
                    }
                    isExtraTurn = true;
                    console.log(`in upd grid aft curr player=${currentPlayer}, extraturn=${isExtraTurn}`);
                } else {
                    isExtraTurn = false;
                }
            }
        }
    });
    return;
};

// Function to capture grid cell and update grid values and display updated score
const changeGridCell = (grid, sides, player) => {
//
};
