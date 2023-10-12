// DOM NODES
let board = document.getElementById("board");
let body = document.querySelector("body");
let boxes = document.querySelectorAll(".board__item")
let scoreBoard = document.querySelector(".scoreboard")


// INITIALIZE

// DEFINE COLORS
const COLORS = [
    {
        number: "2",
        color: "#f0e4d8"
    },
    {
        number: "4",
        color: "#e9e1c9"
    },
    {
        number: "8",
        color: "#efb279"
    },
    {
        number: "16",
        color: "#ec8d54"
    },
    {
        number: "32",
        color: "#f87a63"
    },
    {
        number: "64",
        color: "#e65a37"
    },
    {
        number: "128",
        color: "#f8cd74"
    },
    {
        number: "256",
        color: "#e9cc5e"
    },
    {
        number: "512",
        color: "#f3c942"
    },
    {
        number: "1024",
        color: "#f5c339"
    },
    {
        number: "2048",
        color: "#f5c02f"
    },
    {
        number: "4096",
        color: "#7c7a7d"
    }
    
]




// force board to be square
if (body.offsetHeight < body.offsetWidth) {
    let boardHeight = board.offsetHeight;
    board.style = `width: ${boardHeight}px; height: ${boardHeight}px`;

    // set scoreboard width equal to board size
    scoreBoard.style = `width: ${boardHeight}px`
} else {
    let boardWidth = board.offsetWidth;
    board.style = `height: ${boardWidth}px; width: ${boardWidth}px`

    // set scoreboard width equal to board size
    scoreBoard.style = `width: ${boardWidth}px`
}

let boxWidth = boxes[0].offsetWidth;
// force board items to be square
for (const box of boxes) {
   
    box.style = `height: ${boxWidth}px; width: ${boxWidth}px`
}





