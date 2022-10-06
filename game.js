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
// Set up game variables
let horSides = [];
let verSides = [];
let gridCells = [];

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
    // Change grid color for testing
    gridValue[0].style.backgroundColor=`${player1GridColor}`;
    gridValue[0].textContent = player1.charAt(0);
    gridValue[8].style.backgroundColor=`${player2GridColor}`;
    // test for updating grid text to Comp, doesn't work as font doesn't change
    // gridValue[8].textContent = player2.substring(1,4);
    gridValue[8].textContent = player2.charAt(0);
    // create arrays for updating
    createSides();
    // console.log(allSides);
    createGridCells();
    console.log(gridCells);
    // change side color on clicks according to current player value
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
        sideValue[i].addEventListener("click", () => {
        console.log(`i=${i}`);
        console.log(`in changeside id=${sideValue[i].id}`);
        console.log(`player1=${player1}, player2=${player2}`);
        console.log(`curr player=${currentPlayer}`);
        if (currentPlayer === player1) {
            sideValue[i].style.border = `2px solid ${player1SideColor}`;
            sideValue[i].style.backgroundColor = `${player1SideColor}`;
            currentPlayer = player2;
            console.log(`in if curr player=${currentPlayer}`);
        } else { // remove this when using random for computer
            sideValue[i].style.border = `2px solid ${player2SideColor}`;
            sideValue[i].style.backgroundColor = `${player2SideColor}`;
            currentPlayer = player1;
            console.log(`in else curr player=${currentPlayer}`);
        }
        console.log(`after if curr player=${currentPlayer}`);
        console.log(`sidevalue=${sideValue[i].id}`);
        // update side to isClicked in sideArray
        updateSide(sideArray,sideValue[i].id);


// update grid to increment sideClickedCount
// if sideClickedCount = 3 then switch player, get id of side not clicked and change side color, update capturedBy to player name, change grid color to player grid color and grid text to player initial


        return;
        // console.log(`in side click allSide=${allSides}`)
        });
    };
}

// Function to create sides array with object having sideId and isClicked = false when play game is clicked
const createSides = () => {
    console.log("in create sides");
    verSides, horSides = [];
    // horSides = [];   
    for (let i = 0; i < 72; i++) {
        horSides[i] = [{sideId:`side-hor-${i+1}`,isClicked: false}];
        verSides[i] = [{sideId:`side-ver-${i+1}`,isClicked: false}];
    }
    return allSides = horSides.concat(verSides);
};
// Function to create gridCells object with 4 side values and sideClickedCount = 0 false when play game is clicked
const createGridCells = () => {
    console.log("in create grids");
    for (let i = 0; i < 64; i++) {
        gridCells[i] = [{gridId:`grid-${i+1}`,top:`side-hor-${i+1}`,right:`side-ver-${i+2}`,bottom:`side-hor-${i+9}`,left:`side-ver-${i+1}`,sideClickedCount:0,capturedBy:""}];
    }
    return gridCells;
};
// Function to update side isClicked = true in allSides array when a side is clicked
const updateSide = (array, side) => {
    console.log(`in updateside side=${side}`);
    // console.log(array);
    console.log(`array length= ${array.length}`);
    array.forEach((element) => {
        console.log(`element length= ${element.length}`);
        for (let i = 0; i < element.length; i++) {
            if (element[i].sideId === side) {
                element[i].isClicked = true;
                console.log(`i=${i}`);
                console.log(element[i].sideId);
                console.log(element[i].isClicked);
                return;
            }
        }
    });
};
// Function to update grid side values when side is updated and update sideClickedCount return sideClickedCount

// Function to capture grid cell and update grid values and display updated score
