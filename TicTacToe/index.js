const Gameboard = () => {
  let board = Array(9).fill(null);
  let currentPlayer;
  let player2Symbol;

  const checkWin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const checkTie = () => board.every((cell) => cell !== null) && !checkWin();

  const renderBoard = () => {
    console.log(`
      ${board[0] || " "} | ${board[1] || " "} | ${board[2] || " "}
      ---------
      ${board[3] || " "} | ${board[4] || " "} | ${board[5] || " "}
      ---------
      ${board[6] || " "} | ${board[7] || " "} | ${board[8] || " "}
    `);
  };

  const playGame = () => {
    let gameOver = false;
    let player1Symbol = prompt("Choose your symbol (X or O):").toUpperCase();

    while (!["X", "O"].includes(player1Symbol)) {
      alert("Invalid symbol! Please choose X or O.");
      player1Symbol = prompt("Choose your symbol (X or O):").toUpperCase();
    }

    player2Symbol = player1Symbol === "X" ? "O" : "X";
    currentPlayer = player1Symbol;

    while (!gameOver) {
      renderBoard();

      let position;
      if (currentPlayer === player1Symbol) {
        position = parseInt(
          prompt(`Player ${currentPlayer}, choose a position (0-8):`)
        );
      } else {
        position = Math.floor(Math.random() * 9);
        while (board[position] !== null) {
          position = Math.floor(Math.random() * 9);
        }
        console.log(`Player ${currentPlayer} chooses position ${position}`);
      }

      if (
        Number.isInteger(position) &&
        position >= 0 &&
        position <= 8 &&
        board[position] === null
      ) {
        board[position] = currentPlayer;

        if (checkWin()) {
          renderBoard();
          console.log(`Player ${currentPlayer} wins!`);
          gameOver = true;
        } else if (checkTie()) {
          renderBoard();
          console.log("It's a tie!");
          gameOver = true;
        } else {
          currentPlayer =
            currentPlayer === player1Symbol ? player2Symbol : player1Symbol;
        }
      } else {
        console.log("Invalid move, try again.");
      }
    }
  };

  return { playGame };
};

const game = Gameboard();
game.playGame();
