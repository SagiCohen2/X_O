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

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]) {
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer
    
    currentPlayer = currentPlayer == X_Text ? O_Text : X_Text
    }
    // console.log(e.target)
}

startGame()