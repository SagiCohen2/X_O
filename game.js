// Logic for X O Game

let playerTxt = document.getElementById("playerTxt")
let restBtn = document.getElementById("restBtn")
let boxes = Array.from(document.getElementsByClassName('box'))

// console.log(boxes)

let winningIndicator = getComputedStyle(document.body).getPropertyValue('--winning')

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

    if (playerWon() !==false) {
        playerTxt = `${currentPlayer} HAS WON!`
        let winnig_blocks = playerWon()

        // console.log(winnig_blocks)

        winnig_blocks.map(box => boxes[box].style.backgroundColor = winningIndicator)
        return

    }
    
    currentPlayer = currentPlayer == X_Text ? O_Text : X_Text
    }
    // console.log(e.target)
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerWon() {
    for (const condition of winningCombos) {
        let [a,b,c] = condition

        if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
            return [a,b,c]
        }
    }

    return false

}

// THE RESTART BUTTON

restBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    playerTxt = 'X_O Game :)'

    currentPlayer = X_Text
}


startGame()