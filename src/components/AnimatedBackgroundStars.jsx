import React from 'react';

const AnimatedBackgroundStars = () => (
  <div className="absolute inset-0">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-60"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      ></div>
    ))}
  </div>
);

export default AnimatedBackgroundStars;