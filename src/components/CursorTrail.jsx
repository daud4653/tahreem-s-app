import React from 'react';

const CursorTrail = ({ mousePos }) => (
  <div
    className="fixed pointer-events-none w-6 h-6 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full transition-all duration-300 ease-out z-10 animate-pulse"
    style={{
      left: mousePos.x - 12,
      top: mousePos.y - 12,
    }}
  ></div>
);

export default CursorTrail;