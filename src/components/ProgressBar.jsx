import React from 'react';

const ProgressBar = ({ progress }) => (
  <div className="w-64 bg-purple-800/30 rounded-full h-2 mx-auto">
    <div
      className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full transition-all duration-700"
      style={{ width: `${progress * 100}%` }}
    ></div>
  </div>
);

export default ProgressBar;