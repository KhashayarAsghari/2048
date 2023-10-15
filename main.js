
// DOM NODES
let score = document.querySelector(".scoreboard__score__number");



// FUNCTIONS
function setColors() {

    for (let i = 0; i < boxes.length; i++) {
        let prevStyle = boxes[i].firstChild.getAttribute('style');

        if (boxes[i].firstChild.textContent == "") {
            boxes[i].firstChild.style = prevStyle + "background-color: #00000000";
        } else if (+boxes[i].firstChild.textContent <= 4096) {
            let temp = boxes[i].firstChild.textContent;
            let foundColor = COLORS.find(item => item.number == temp);
            boxes[i].firstChild.style = prevStyle + `background-color: ${foundColor.color}`
        } else {
            boxes[i].firstChild.style = prevStyle + `background-color: #7c7a7d`
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
        // check all boxes except first line
        if (i > 4) {
            debugger

            // if a box number was equal to upper box number
            if (boxes[i - 1].firstChild.textContent == boxes[i - 4 - 1].firstChild.textContent &&
                boxes[i - 1].firstChild.textContent != "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)






            }

            // if a box number was equal to two upper box
            if (i > 8 &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i - 4 - 4 - 1].firstChild.textContent) &&
                boxes[i - 4 - 1].firstChild.textContent == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-200% - 40px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 4 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)


            }

            // if a box number was equal to three upper box
            if (i > 12 &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 4 - 1].firstChild.textContent == "" &&
                    boxes[i - 4 - 4 - 1].firstChild.textContent == "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i - 4 - 4 - 4 - 1].firstChild.textContent)) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-300% - 60px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 4 - 4 - 4 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

            }

        }

        
        let j = i;
        if (j > 4) {

            if (j > 4 &&
                j < 9 &&
                boxes[j - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 1].firstChild.textContent == "") {

                let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .2s"

                setTimeout(() => {
                    boxes[j - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                    boxes[j - 1].firstChild.style = prevStyle;
                    boxes[j - 1].firstChild.textContent = "";
                }, 200);
            }


            if (j > 8 &&
                j < 13 &&
                boxes[j - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 1].firstChild.textContent == "" &&
                boxes[j - 4 - 4 - 1].firstChild.textContent == "") {

                let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(-200% - 40px)); transition: .2s"

                setTimeout(() => {
                    boxes[j - 4 - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                    boxes[j - 1].firstChild.style = prevStyle;
                    boxes[j - 1].firstChild.textContent = "";
                }, 200);
            }

            if (j > 8 &&
                j < 13 &&
                boxes[j - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 1].firstChild.textContent == "" &&
                boxes[j - 4 - 4 - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 4 - 1].firstChild.textContent != boxes[j - 1].firstChild.textContent) {

                let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .2s"

                setTimeout(() => {
                    boxes[j - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                    boxes[j - 1].firstChild.style = prevStyle;
                    boxes[j - 1].firstChild.textContent = "";
                }, 200);
            }


            if (j > 12 &&
                boxes[j - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 1].firstChild.textContent == "" &&
                boxes[j - 4 - 4 - 1].firstChild.textContent == "" &&
                boxes[j - 4 - 4 - 4 - 1].firstChild.textContent == "") {

                let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(-300% - 60px)); transition: .2s"

                setTimeout(() => {
                    boxes[j - 4 - 4 - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                    boxes[j - 1].firstChild.style = prevStyle;
                    boxes[j - 1].firstChild.textContent = "";
                }, 200);
            };

            if (j > 12 &&
                boxes[j - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 1].firstChild.textContent == "" &&
                boxes[j - 4 - 4 - 1].firstChild.textContent == "" &&
                boxes[j - 4 - 4 - 4 - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 4 - 4 - 1].firstChild.textContent != boxes[j - 1].firstChild.textContent) {

                let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(-200% - 40px)); transition: .2s"

                setTimeout(() => {
                    boxes[j - 4 - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                    boxes[j - 1].firstChild.style = prevStyle;
                    boxes[j - 1].firstChild.textContent = "";
                }, 200);
            };

            if (j > 12 &&
                boxes[j - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 1].firstChild.textContent == "" &&
                boxes[j - 4 - 4 - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 4 - 1].firstChild.textContent != boxes[j - 1].firstChild.textContent) {

                let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .2s"

                setTimeout(() => {
                    boxes[j - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                    boxes[j - 1].firstChild.style = prevStyle;
                    boxes[j - 1].firstChild.textContent = "";
                }, 200);
            };

            if (j > 12 &&
                boxes[j - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 1].firstChild.textContent == "" &&
                boxes[j - 4 - 1].firstChild.textContent != "" &&
                boxes[j - 4 - 1].firstChild.textContent != boxes[j - 1].firstChild.textContent) {

                let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .2s"

                setTimeout(() => {
                    boxes[j - 4 - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                    boxes[j - 1].firstChild.style = prevStyle;
                    boxes[j - 1].firstChild.textContent = "";
                }, 200);
            };
        }


    }


    setTimeout(() => {
        setColors();
        addNumber()
    }, 200)

}


function goDown() {
    for (let i = 1; i <= boxes.length; i++) {
        if (i < 13) {
            if (boxes[i - 1].firstChild.textContent == boxes[i + 4 - 1].firstChild.textContent && boxes[i - 1].firstChild.textContent != "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(100% + 20px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

            }

            if (i < 9 &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i + 4 + 4 - 1].firstChild.textContent) &&
                boxes[i + 4 - 1].firstChild.textContent == "") {


                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(200% + 40px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 + 4 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

            }

            if (i < 5 &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i + 4 - 1].firstChild.textContent == "" &&
                    boxes[i + 4 + 4 - 1].firstChild.textContent == "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i + 4 + 4 + 4 - 1].firstChild.textContent)) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(300% + 60px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 4 + 4 + 4 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

            }

            
            let j = i;
            if (j < 13) {

                if (j < 5 &&
                    boxes[j - 1].firstChild.textContent != "" &&
                    boxes[j + 4 - 1].firstChild.textContent == "" &&
                    boxes[j+4+4-1].firstChild.textContent =="" && 
                    boxes[j+4+4+4-1].firstChild.textContent == "") {

                    let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                    boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(+300% + 60px)); transition: .2s"

                    setTimeout(() => {
                        boxes[j + 4 + 4 + 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.style = prevStyle;
                        boxes[j - 1].firstChild.textContent = "";
                    }, 200);
                }


                if (j < 5 &&
                    boxes[j - 1].firstChild.textContent != "" &&
                    boxes[j + 4 - 1].firstChild.textContent == "" &&
                    boxes[j + 4 + 4 - 1].firstChild.textContent == "" &&
                    boxes[j + 4 + 4 + 4 -1].firstChild.textContent != "" &&
                    boxes[j + 4 + 4 + 4 -1].firstChild.textContent != boxes[j-1].firstChild.textContent) {

                    let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                    boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(+200% + 40px)); transition: .2s"

                    setTimeout(() => {
                        boxes[j + 4 + 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.style = prevStyle;
                        boxes[j - 1].firstChild.textContent = "";
                    }, 200);
                }

                if (j < 5 &&
                    boxes[j - 1].firstChild.textContent != "" &&
                    boxes[j + 4 - 1].firstChild.textContent == "" &&
                    boxes[j + 4 + 4 - 1].firstChild.textContent != "" &&
                    boxes[j + 4 + 4 - 1].firstChild.textContent != boxes[j - 1].firstChild.textContent) {

                    let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                    boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .2s"

                    setTimeout(() => {
                        boxes[j + 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.style = prevStyle;
                        boxes[j - 1].firstChild.textContent = "";
                    }, 200);
                }


                if (j > 4 &&
                    j < 9 &&
                    boxes[j - 1].firstChild.textContent != "" &&
                    boxes[j + 4 - 1].firstChild.textContent == "" &&
                    boxes[j + 4 + 4 - 1].firstChild.textContent == "") {

                    let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                    boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(+200% + 40px)); transition: .2s"

                    setTimeout(() => {
                        boxes[j + 4 + 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.style = prevStyle;
                        boxes[j - 1].firstChild.textContent = "";
                    }, 200);
                };

                if (j > 4 &&
                    j < 9 &&
                    boxes[j - 1].firstChild.textContent != "" &&
                    boxes[j + 4 - 1].firstChild.textContent == "" &&
                    boxes[j + 4 + 4 -1].firstChild.textContent != "" &&
                    boxes[j + 4 + 4 -1].firstChild.textContent != boxes[j-1].firstChild.textContent) {

                    let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                    boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .2s"

                    setTimeout(() => {
                        boxes[j + 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.style = prevStyle;
                        boxes[j - 1].firstChild.textContent = "";
                    }, 200);
                };

                if (j > 8 &&
                    j < 13 &&
                    boxes[j - 1].firstChild.textContent != "" &&
                    boxes[j + 4 - 1].firstChild.textContent == "") {

                    let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                    boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(+100% + 20px)); transition: .2s"

                    setTimeout(() => {
                        boxes[j + 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.style = prevStyle;
                        boxes[j - 1].firstChild.textContent = "";
                    }, 200);
                };

                if (j > 12 &&
                    boxes[j - 1].firstChild.textContent != "" &&
                    boxes[j - 4 - 1].firstChild.textContent == "" &&
                    boxes[j - 4 - 1].firstChild.textContent != "" &&
                    boxes[j - 4 - 1].firstChild.textContent != boxes[j - 1].firstChild.textContent) {

                    let prevStyle = boxes[j - 1].firstChild.getAttribute("style");

                    boxes[j - 1].firstChild.style = prevStyle + "transform: translateY(calc(-100% - 20px)); transition: .2s"

                    setTimeout(() => {
                        boxes[j - 4 - 4 - 1].firstChild.textContent = boxes[j - 1].firstChild.textContent;
                        boxes[j - 1].firstChild.style = prevStyle;
                        boxes[j - 1].firstChild.textContent = "";
                    }, 200);
                };
            }

        }
    }
    setTimeout(() => {
        setColors();

    }, 200)
    // addNumber()
}


function goRight() {
    for (let i = 1; i <= boxes.length; i++) {
        if (i != 4 && i != 8 && i != 12 && i != 16) {
            if (boxes[i - 1].firstChild.textContent == boxes[i + 1 - 1].firstChild.textContent && boxes[i - 1].firstChild.textContent != "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(100% + 20px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

            }

            if ((i == 1 || i == 2 || i == 5 || i == 6 || i == 9 || i == 10 || i == 13 || i == 14) &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i + 1 + 1 - 1].firstChild.textContent) &&
                boxes[i + 1 - 1].firstChild.textContent == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(200% + 40px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 + 1 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

            }

            if ((i == 1 || i == 5 || i == 9 || i == 13) &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i + 1 - 1].firstChild.textContent == "" &&
                    boxes[i + 1 + 1 - 1].firstChild.textContent == "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i + 1 + 1 + 1 - 1].firstChild.textContent)) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(300% + 60px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i + 1 + 1 + 1 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

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
                        if (j == 4 || j == 8 || j == 12 || j == 16) {
                            check = false;
                        }
                    } else {
                        check = false
                    }
                }
            }

        }
    }
    setTimeout(() => {
        setColors();

    }, 200)
    addNumber()
}

function goLeft() {
    for (let i = 1; i <= boxes.length; i++) {
        if (i != 1 && i != 5 && i != 9 && i != 13) {
            if (boxes[i - 1].firstChild.textContent == boxes[i - 1 - 1].firstChild.textContent && boxes[i - 1].firstChild.textContent != "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateX(calc(-100% - 20px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

            }

            if ((i == 3 || i == 4 || i == 7 || i == 8 || i == 11 || i == 12 || i == 15 || i == 16) &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i - 1 - 1 - 1].firstChild.textContent) &&
                boxes[i - 1 - 1] == "") {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-200% - 40px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

            }

            if ((i == 4 || i == 8 || i == 12 || i == 16) &&
                (boxes[i - 1].firstChild.textContent != "" &&
                    boxes[i - 1 - 1].firstChild.textContent == "" &&
                    boxes[i - 1 - 1 - 1].firstChild.textContent == "" &&
                    boxes[i - 1].firstChild.textContent == boxes[i - 1 - 1 - 1 - 1].firstChild.textContent)) {

                let prevStyle = boxes[i - 1].firstChild.getAttribute('style');
                boxes[i - 1].firstChild.style = prevStyle + "transform: translateY(calc(-300% - 60px)); transition: .2s"


                setTimeout(() => {
                    // merge boxes

                    boxes[i - 1 - 1 - 1 - 1].firstChild.textContent *= 2;
                    boxes[i - 1].firstChild.textContent = "";
                    boxes[i - 1].firstChild.style = prevStyle;
                }, 200)

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
                        if (j == 1 || j == 5 || j == 9 || j == 13) {
                            check = false;
                        }
                    } else {
                        check = false
                    }
                }
            }
        }
    }

    setTimeout(() => {
        setColors();

    }, 200)
    addNumber()
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

// boxes[6].firstChild.style = "transform: translateY(calc(-100% - 20px)); transition: 1s"


// EVENTS
window.addEventListener("keydown", keyCheck)