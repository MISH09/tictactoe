import React, { useState } from "react";
import Board from "./components/Board";
import Status from "./components/Status";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningSquares, setWinningSquares] = useState([]);

  // Calculate the winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], winningLine: [a, b, c] };
      }
    }
    return null;
  };

  // Handle click event when a square is clicked
  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return; // Prevent further clicks if game over

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);

    const result = calculateWinner(nextSquares);
    if (result) {
      setWinningSquares(result.winningLine); // Set winning line when we get a winner
    }
  };

  // Reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinningSquares([]); // Clear the winning squares
  };

  const winnerInfo = calculateWinner(squares);
  const isTie = !winnerInfo && squares.every(square => square !== null); // Check for tie

  const status = winnerInfo
    ? `Winner: ${winnerInfo.winner}`
    : isTie
    ? "It's a Tie!"
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl text-center font-bold mb-4 text-black">Tic Tac Toe</h1>

        {/* Status Component */}
        <Status status={status} />

        {/* Game Board */}
        <Board squares={squares} onClick={handleClick} winningSquares={winningSquares} />

        <button
          className="mt-6 w-full py-2 px-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
