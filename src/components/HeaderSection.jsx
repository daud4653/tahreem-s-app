import React from 'react';
import { Star } from 'lucide-react';

const HeaderSection = ({ discoveredCount, totalStars }) => (
  <div className="text-center mb-16 animate-fade-in">
    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
      You Are the Sun, the Moon and the Stars
    </h1>
    <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
      Click on the glowing stars to discover why you're absolutely incredible
    </p>
    <div className="flex items-center justify-center gap-3 text-pink-300 mb-4">
      <Star size={20} fill="currentColor" />
      <span className="text-sm text-purple-200">
        {discoveredCount} of {totalStars} stars discovered
      </span>
      <Star size={20} fill="currentColor" />
    </div>
  </div>
);

export default HeaderSection;