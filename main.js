
// DOM NODES
let score = document.querySelector(".scoreboard__score__number");



// FUNCTIONS
function setColors() {

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].firstChild.textContent == "") {
            boxes[i].firstChild.style = "background-color: #00000000";
        } else if(+boxes[i].firstChild.textContent <= 4096 ){
            let temp = boxes[i].firstChild.textContent;
            let foundColor = COLORS.find(item => item.number == temp);
            boxes[i].firstChild.style = `background-color: ${foundColor.color}`
        }else {
            boxes[i].firstChild.style = `background-color: #7c7a7d`
        }
    }
}

function keyCheck(evt) {
    switch (evt.key) {
        case "ArrowUp":
            goUp();
            break;
        case "ArrowRight":
            goRight();
            break;
        case "ArrowDown":
            goDown();
            break;
        case "ArrowLeft":
            goLeft();
            break;
        default:
            console.log("default");
    }
}

function goUp() {
    for (let i = 1; i <= boxes.length; i++) {
        if (i > 4) {

            if (boxes[i - 1].firstChild.textContent == boxes[i - 4 - 1].firstChild.textContent &&
                boxes[i - 1].firstChild.textContent != "") {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i - 4 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            if (i > 8 &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i - 4 - 4 - 1].firstChild.textContent) && 
                    boxes[i-4-1].firstChild.textContent == "") {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i - 4 - 4 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            if (i > 12 &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 4 - 1].firstChild.textContent == "" &&
                    boxes[i - 4 - 4 - 1].firstChild.textContent == "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i - 4 - 4 - 4 - 1].firstChild.textContent)) {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i - 4 - 4 - 4 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }
            let check = true;
            let j = i;
            if (j > 4) {
                while (check) {
                    
                    if (boxes[j - 1].firstChild.textContent == "") {
                        check = false;
                    }

                    if (boxes[j - 1].firstChild.textContent != "" &&
                        boxes[j - 4 - 1].firstChild.textContent == "") {
                        boxes[j - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.textContent = "";
                        j = j - 4;
                        if(j < 5){
                            check = false;
                        }
                    }else {
                        check = false
                    }
                }
            }
        }


    }


    setColors();
    addNumber()
}

function goDown() {
    for (let i = 1; i <= boxes.length; i++) {
        if (i < 13) {
            if (boxes[i - 1].firstChild.textContent == boxes[i + 4 - 1].firstChild.textContent && boxes[i - 1].firstChild.textContent != "") {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i + 4 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            if (i < 9 &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i + 4 + 4 - 1].firstChild.textContent) &&
                    boxes[i+4-1].firstChild.textContent == "") {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i + 4 + 4 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            if (i < 5 &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i + 4 - 1].firstChild.textContent == "" &&
                    boxes[i + 4 + 4 - 1].firstChild.textContent == "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i + 4 + 4 + 4 - 1].firstChild.textContent)) {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i + 4 + 4 + 4 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            let check = true;
            let j = i;
            if (j < 13) {
                while (check) {
                    
                    if (boxes[j - 1].firstChild.textContent == "") {
                        check = false;
                    }

                    if (boxes[j - 1].firstChild.textContent != "" &&
                        boxes[j + 4 - 1].firstChild.textContent == "") {
                        boxes[j + 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.textContent = "";
                        j = j + 4;
                        if(j > 12){
                            check = false;
                        }
                    }else {
                        check = false
                    }
                }
            }

        }
    }
    setColors();
    addNumber()
}


function goRight() {
    for (let i = 1; i <= boxes.length; i++) {
        if (i != 4 && i != 8 && i != 12 && i != 16) {
            if (boxes[i - 1].firstChild.textContent == boxes[i + 1 - 1].firstChild.textContent && boxes[i - 1].firstChild.textContent != "") {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i + 1 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            if ((i == 1 || i == 2 || i == 5 || i == 6 || i == 9 || i == 10 || i == 13 || i == 14) &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i + 1 + 1 - 1].firstChild.textContent) &&
                    boxes[i+1-1].firstChild.textContent == "") {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i + 1 + 1 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            if ((i == 1 || i == 5 || i == 9 || i == 13) &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i + 1 - 1].firstChild.textContent == "" &&
                    boxes[i + 1 + 1 - 1].firstChild.textContent == "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i + 1 + 1 + 1 - 1].firstChild.textContent)) {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i + 1 + 1 + 1 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            let check = true;
            let j = i;
            if (j != 4 && j != 8 && j != 12 && j != 16) {
                while (check) {
                    
                    if (boxes[j - 1].firstChild.textContent == "") {
                        check = false;
                    }

                    if (boxes[j - 1].firstChild.textContent != "" &&
                        boxes[j + 1 - 1].firstChild.textContent == "") {
                        boxes[j + 1 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.textContent = "";
                        j = j + 1;
                        if(j == 4 || j == 8 || j == 12 || j == 16){
                            check = false;
                        }
                    }else {
                        check = false
                    }
                }
            }

        }
    }
    setColors();
    addNumber()
}

function goLeft() {
    for (let i = 1; i <= boxes.length; i++) {
        if (i != 1 && i != 5 && i != 9 && i != 13) {
            if (boxes[i - 1].firstChild.textContent == boxes[i - 1 - 1].firstChild.textContent && boxes[i - 1].firstChild.textContent != "") {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i - 1 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            if ((i == 3 || i == 4 || i == 7 || i == 8 || i == 11 || i == 12 || i == 15 || i == 16) &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i - 1 - 1 - 1].firstChild.textContent) &&
                    boxes[i-1-1] == "") {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i - 1 - 1 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            if ((i == 4 || i == 8 || i == 12 || i == 16) &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1 - 1].firstChild.textContent == "" &&
                    boxes[i - 1 - 1 - 1].firstChild.textContent == "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i - 1 - 1 - 1 - 1].firstChild.textContent)) {
                let temp = +boxes[i - 1].firstChild.textContent;
                boxes[i - 1 - 1 - 1 - 1].firstChild.textContent = temp * 2;
                boxes[i - 1].firstChild.textContent = "";

            }

            let check = true;
            let j = i;
            if (j != 1 || j != 5 || j != 9 || j != 13) {
                while (check) {
                    
                    if (boxes[j - 1].firstChild.textContent == "") {
                        check = false;
                    }

                    if (boxes[j - 1].firstChild.textContent != "" &&
                        boxes[j - 1 - 1].firstChild.textContent == "") {
                        boxes[j - 1 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.textContent = "";
                        j = j - 1;
                        if(j == 1 || j == 5 || j == 9 || j == 13){
                            check = false;
                        }
                    }else {
                        check = false
                    }
                }
            }
        }
    }
    
    addNumber();
}

function addNumber() {
    let randomNum = Math.floor(Math.random() * 100);
    let number;
    let emptyBoxes = [];
    if (randomNum < 65) {
        number = 2;
    } else {
        number = 4;
    }

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].firstChild.textContent == "") {
            emptyBoxes.push(boxes[i]);
        }
    }

    randomNum = Math.floor(Math.random() * emptyBoxes.length);

    emptyBoxes[randomNum].firstChild.textContent = number;

    setColors();

}






setColors();



// EVENTS
window.addEventListener("keydown", keyCheck)