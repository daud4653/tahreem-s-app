import React from 'react';

const MessageDisplay = ({ message }) => (
  <div className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 z-40 animate-message-appear">
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto text-center shadow-2xl border border-pink-200">
      <div className="text-4xl mb-3">✨</div>
      <p className="text-gray-800 text-lg leading-relaxed font-medium">
        {message.text}
      </p>
    </div>
  </div>
);

export default MessageDisplay;