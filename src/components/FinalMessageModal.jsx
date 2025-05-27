import React from 'react';
import { Heart } from 'lucide-react';

const FinalMessageModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 max-w-lg mx-4 text-center shadow-2xl animate-scale-in border-2 border-pink-200">
      <div className="text-6xl mb-6">💖</div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
        You have lit up my universe!!
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Never forget how amazing, cherished and loved you are. I hope this makes you feel a little better cause
        you genuinely make my day so much better and i had no idea what to do to make u feel better. You are
        truly the most gorgoeus, beautiful and the smartest person i know. So grateful for you even!! 🌟
      </p>
      <div className="flex justify-center gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <Heart key={i} className="text-pink-500 animate-pulse" size={20} fill="currentColor"
                style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
      <button
        onClick={onClose}
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
      >
        You made my day! 💕
      </button>
    </div>
  </div>
);

export default FinalMessageModal;