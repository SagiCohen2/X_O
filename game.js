// Logic for X O Game

let playerTxt = document.getElementById("playerTxt")
let restBtn = document.getElementById("restBtn")
let boxes = Array.from(document.getElementsByClassName('box'))

// console.log(boxes)

const O_Text = "O"
const X_Text = "X"
let currentPlayer = X_Text
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

// IT'S YOUR TURN!
// FUNCTION WHEN IT'S THE USER TURN, FIRST TIME X SECOND TIME O

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]) {
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer
    
    currentPlayer = currentPlayer == X_Text ? O_Text : X_Text
    }
    // console.log(e.target)
}

// THE RESTART BUTTON

restBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
    })

    currentPlayer = X_Text
}


startGame()