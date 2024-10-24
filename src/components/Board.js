import React from "react";
import Squares from "./Squares";

const Board = ({ squares, onClick, winningSquares }) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      {squares.map((value, index) => (
        <Squares
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinningSquare={winningSquares.includes(index)} // Check if square is part of the winning line
        />
      ))}
    </div>
  );
};

export default Board;
