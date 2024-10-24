import React from "react";

const Status = ({ status }) => {
  return (
    <div className="text-center text-xl sm:text-2xl md:text-3xl mb-4 text-black">
      {status}
    </div>
  );
};

export default Status;
