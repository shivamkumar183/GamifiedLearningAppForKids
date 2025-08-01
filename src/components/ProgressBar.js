import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div className="w-64 bg-gray-700 h-3 rounded-full overflow-hidden">
      <div
        className="bg-blue-500 h-3 transition-all duration-500 ease-in-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
