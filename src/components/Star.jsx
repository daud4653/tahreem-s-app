import React from 'react';

const Star = ({ message, size = 'medium', twinkleDelay = 0, onClick, isDiscovered }) => {
  if (!message) return null;

  const sizeClasses = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-6 h-6'
  };

  return (
    <div
      className={`absolute cursor-pointer group transition-all duration-700 ${
        isDiscovered ? 'scale-150' : 'hover:scale-125'
      }`}
      style={message.position}
      onClick={onClick}
    >
      <div
        className={`${sizeClasses[size]} ${
          isDiscovered
            ? 'bg-gradient-to-r from-pink-400 to-purple-400'
            : 'bg-gradient-to-r from-blue-200 to-purple-200 group-hover:from-yellow-300 group-hover:to-pink-300'
        } rounded-full shadow-lg transition-all duration-500 animate-twinkle`}
        style={{ animationDelay: `${twinkleDelay}s` }}
      >
        <div className="absolute inset-0 rounded-full bg-white/40 animate-pulse"></div>
      </div>

      {isDiscovered && (
        <div className="absolute inset-0 animate-ping">
          <div className={`${sizeClasses[size]} bg-pink-400 rounded-full opacity-75`}></div>
        </div>
      )}
    </div>
  );
};

export default Star;