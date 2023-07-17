const gameCell = document.querySelectorAll(".cell"); 
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restart = document.querySelector(".restartBtn");

//  making variable
let playerX = "X";
let playerO = "O";
let playerTurn = playerX;

// Function  to start your game

const startGame = () => {
    gameCell.forEach((cell) => {
        cell.addEventListener("click", (e) => {
            if (e.target.textContent === "") {
                e.target.textContent = playerTurn;
                checkWin();
                changePlayerTurns();
            }
        })
    })
}

//  Function change player's turn
const changePlayerTurns = () => {
    // if (playerTurn === playerX) playerTurn = playerO;
    // else playerTurn = playerX;
    playerTurn = playerTurn === playerX ? playerO : playerX;
}
// Function to check win;
const checkWin = () => {
    const winningCondtion = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCondtion.length; i++){
        const [stand1, stand2, stand3] = winningCondtion[i];

    }
}
startGame();