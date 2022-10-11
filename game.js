// Import grid array
import gridArray from "./data/grid.js";
// Set up DOM variables
const playerName = document.querySelector(".get-player-name");
const player1Name = document.querySelector("#username");
const startGame = document.querySelector("#start-game");
const sideValue = document.getElementsByClassName("side");
const gridValue = document.getElementsByClassName("grid");
const displayScore = document.querySelector(".score");
const player1Score = document.querySelector("#player1-score");
const player2Score = document.querySelector("#player2-score");
// Set up color variables
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
let unclickedSides = [];
let clickedSides = [];
let isExtraTurn, isGridCaptured = false;

// Set up start game event listener and initialize variables on click
startGame.addEventListener("click", (event) => {
    event.preventDefault();
    if (player1Name.value != "") {
        console.log("in start game click");
    // get player details and display scores
        player1 = player1Name.value;
        // make player1 proper case
        console.log(player1);
        player1 = player1.charAt(0).toUpperCase() + player1.slice(1);
        console.log(`propercase player1=${player1}`);
        player2 = "Computer";
        isExtraTurn = false;
        currentPlayer = player1Name.value;
        // remove player name input display
        playerName.style.display = "none";
        // display scores
        displayScoreValues();
        console.log(`in play game extra turn=${isExtraTurn}`);
        // create arrays for updating
        createSides();

        // create grid cells as array of objects
        //createGridCells(); //--- DOESN'T WORK
        // console.log(gridCells);

        // change side color on clicks according to current player value
        changeSideColor(unclickedSides);
    }

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
        console.log(`curr player=${currentPlayer}, extra turn=${isExtraTurn}`);
        // get current player side color
        getPlayerSideColor(currentPlayer);
        // change the side color
        sideValue[i].style.border = `2px solid ${playerSideColor}`;
        // update sides as clicked
        updateSide(sideArray, sideValue[i].id);
        // update side in grid and increase sideClickedCounter
        updateGrid(gridArray, sideValue[i].id, currentPlayer);
        // check for extra turn
        console.log(`in changeside2 extra turn=${isExtraTurn}`);
        if (!isExtraTurn) {
            switchPlayer(currentPlayer);
        }
        return;
        // console.log(`in side click allSide=${unclickedSides}`)
        });
    };
}

// Functions to get/display player colors and switch players
const getPlayerSideColor = (player) => {    
    // console.log(`in getplayersidecolor=${player}`);
    if (player === player1) {
        playerSideColor = player1SideColor;
    } else { // remove this when using random for"Computer
        playerSideColor = player2SideColor;
    }
    // console.log(`playerSideColor=${player1SideColor}`);
    return;
};
const getPlayerGridColor = (player) => {    
    // console.log(`in get playergridcolor=${player}`);
    if (player === player1) {
        playerGridColor = player1GridColor;
    } else { // remove this when using random for"Computer
        playerGridColor = player2GridColor;
    }
    // console.log(`playerGridColor=${playerGridColor}`);
    return;
};
const switchPlayer = (player) => {    
    console.log(`in switchplayer before if player=${player}, p1=${player1}, p2=${player2}, currplayer=${currentPlayer}, extra turn=${isExtraTurn}`);
    if (player === player1) {
        currentPlayer = player2;
    } else { // remove this when using random for"Computer
        currentPlayer = player1;
    }
    console.log(`in switchplayer after if player=${player}, p1=${player1}, p2=${player2}, currplayer=${currentPlayer}, extra turn=${isExtraTurn}`);
    return;
};
const displayScoreValues = () => {
    displayScore.style.display = "flex";
    player1Score.innerHTML = `${player1}: ${player1ScoreCount} `;
    player1Score.style.color = player1SideColor;
    player2Score.innerHTML = `vs. Computer: ${player2ScoreCount}`;
    player2Score.style.color = player2SideColor;
    const complete = checkGridCaptured(gridArray);
    console.log(`in displayscore complete=${complete}`);
    return;
};

// Function to create sides array with object having sideId and isClicked = false when play game is clicked
const createSides = () => {
    console.log("in create sides");
    unclickedSides, verSides, horSides = []; 
    for (let i = 0; i < 72; i++) {
        horSides[i] = [`side-hor-${i+1}`];
        verSides[i] = [`side-ver-${i+1}`];
    };
    return unclickedSides = horSides.concat(verSides);
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

// Function to update side isClicked = true in unclickedSides array when a side is clicked 
// modified to create new clicked array and remove the clicked side from unclickedSides array

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
    console.log(`in updateGrid side=${side}`);
    isGridCaptured = false;
    console.log(`in updategrid beginning isExtraTurn=${isExtraTurn}, isGridCap=${isGridCaptured}`);
    array.forEach((element, index) => {
        console.log(`in updategrid foreach loop isExtraTurn=${isExtraTurn}, isGridCap=${isGridCaptured}`);
        // console.log(`gridId=${element.gridId}`);
        // console.log(`sides=${element.sides}`);
        // console.log(`sideClickedCount=${element.sideClickedCount}`);
        // console.log(`len=${element.sides.length}`);
        for (let i = 0; i < element.sides.length; ++i) {
            if (element.sides[i] === side) {
                console.log(`in updategrid if side matches isExtraTurn=${isExtraTurn}, isGridCap=${isGridCaptured}`);
                ++element.sideClickedCount;
                console.log(`in if gridID=${element.gridId};sideClickedCount=${element.sideClickedCount}`);
                if (element.sideClickedCount === 4) {
                    getPlayerGridColor(player);
                    // console.log(`element=${element}`);
                    console.log(`gridID when count is 4=${element.gridId}, index=${index}`);
                    gridValue[index].style.backgroundColor=`${playerGridColor}`;
                    gridValue[index].textContent = currentPlayer.charAt(0).toUpperCase();
                    element.capturedBy = currentPlayer;
                    isGridCaptured = true;
                    if (player === player1) {
                        player1ScoreCount = player1ScoreCount + 1;
                    } else { // remove this when using random for"Computer
                        player2ScoreCount = player2ScoreCount + 1;
                    } ;
                    console.log(`capturedby=${element.capturedBy}, player=${currentPlayer}, isExtraTurn=${isExtraTurn}, isGridCap=${isGridCaptured}`);
                    console.log(`p1 score=${player1ScoreCount}; p2 score=${player2ScoreCount}`);
                    displayScoreValues();
                    console.log(`in upd grid aft curr player=${currentPlayer}`);
                };
            };
        };
    });
    if (isGridCaptured) {
        isExtraTurn = true;
    } else {
        isExtraTurn = false;
    };
    console.log(`in updategrid after foreach isExtraTurn=${isExtraTurn}, isGridCap=${isGridCaptured}`)
    return;
};

// Function to check final score and display message
const checkGridCaptured = (array) => {
//
    array.forEach(item => {
        if (item.capturedBy != ""){
            console.log(`in checkGridCaptured ${item.gridId}`);
            return "full"
        } else {
            console.log("in checkGridCaptured some cells still empty");
            return "empty"
        };
    });
};
