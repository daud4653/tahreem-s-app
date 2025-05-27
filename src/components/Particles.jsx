import React from 'react';
import { Sparkles } from 'lucide-react';

const Particles = ({ particles }) => (
  <>
    {particles.map(particle => (
      <div
        key={particle.id}
        className="fixed pointer-events-none z-50 animate-sparkle"
        style={{
          left: particle.x,
          top: particle.y,
          animationDelay: `${particle.delay}s`
        }}
      >
        <Sparkles className="text-pink-400" size={16} />
      </div>
    ))}
  </>
);

export default Particles;