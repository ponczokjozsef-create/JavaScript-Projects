// Tic Tac Toe

// Array representing the 9 cells of the board (starts empty)
let board = ["", "", "", "", "", "", "", "", ""];

// Tracks whose turn it is - starts with player X
let currentPlayer = "X";

// Becomes true once someone wins or the board is full, to stop further clicks
let gameOver = false;

// All possible winning combinations (rows, columns, diagonals)
// Each inner array holds the board indexes that must match
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

// Runs when a cell button is clicked
function handleCellClick(index) {
  // Ignore the click if the game already ended or the cell is taken
  if (gameOver || board[index] !== "") {
    return;
  }

  // Place the current player's mark in the array and on the button
  board[index] = currentPlayer;
  let cells = document.getElementsByClassName("cell");
  cells[index].innerHTML = currentPlayer;

  // Check if this move won the game
  if (checkWinner()) {
    document.getElementById("status").innerHTML = "Player " + currentPlayer + " wins!";
    gameOver = true;
    return;
  }

  // Check if the board is full with no winner (a tie)
  if (!board.includes("")) {
    document.getElementById("status").innerHTML = "It's a tie!";
    gameOver = true;
    return;
  }

  // Switch to the other player using a ternary operator
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
  document.getElementById("status").innerHTML = "Player " + currentPlayer + "'s turn";
}

// Checks all winning combinations to see if the current player has won
function checkWinner() {
  // Loop through each possible winning combination
  for (let i = 0; i < winningCombinations.length; i++) {
    let combo = winningCombinations[i];
    let a = combo[0];
    let b = combo[1];
    let c = combo[2];

    // If all three cells in this combination match and are not empty, it's a win
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  // No winning combination found
  return false;
}

// Resets the board back to its starting state
function resetGame() {
  // Empty out the board array again
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;

  // Clear the text on every button
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }

  document.getElementById("status").innerHTML = "Player X's turn";
}