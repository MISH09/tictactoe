import React from "react";

const Squares = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white text-black border border-black text-2xl sm:text-3xl md:text-4xl font-bold flex items-center justify-center rounded-lg shadow-md transition-colors duration-300 ${
        isWinningSquare ? "border-t-4 border-black" : ""
      } hover:bg-gray-300`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Squares;
