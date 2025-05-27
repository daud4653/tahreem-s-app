import React, { useState, useEffect } from 'react';
import Star from './components/Star';
import AnimatedBackgroundStars from './components/AnimatedBackgroundStars';
import MoonIcon from './components/MoonIcon';
import Particles from './components/Particles';
import CursorTrail from './components/CursorTrail';
import ProgressBar from './components/ProgressBar';
import HeaderSection from './components/HeaderSection';
import MessageDisplay from './components/MessageDisplay';
import FinalMessageModal from './components/FinalMessageModal';

const YouAreTheMoon = () => {
  const [discoveredStars, setDiscoveredStars] = useState(new Set());
  const [currentMessage, setCurrentMessage] = useState(null);
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const messages = [
    { id: 1, text: "Your smile is so pretty i hope you always keep on smiling ✨", position: { top: '20%', left: '15%' } },
    { id: 2, text: "You have the kindest heart and soul you really are the most beautiful person inside out 💕", position: { top: '35%', right: '20%' } },
    { id: 3, text: "You are the strongest girl well actually the person i know and btw you're not draining at all come on 🌟", position: { top: '60%', left: '25%' } },
    { id: 4, text: "I remember i called you a horse :P but in reality your beauty can't be defined by these earthly beings because ure an angel 🦋", position: { top: '45%', left: '50%' } },
    { id: 5, text: "Your voice is actually my fav sound in the universe 🎵", position: { top: '25%', right: '15%' } },
    { id: 6, text: "You make me want to be a better person just by being yourself 💖", position: { top: '70%', right: '30%' } },
    { id: 7, text: "You are so smart like wow i'm sometimes thinking how did God make u so perfect even 🎨", position: { top: '15%', left: '45%' } },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (discoveredStars.size === messages.length) {
      setTimeout(() => setShowFinalMessage(true), 1000);
    }
  }, [discoveredStars.size, messages.length]);

  const createParticles = (x, y) => {
    const newParticles = [];
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        delay: i * 0.1
      });
    }
    setParticles(prev => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 2000);
  };

  const handleStarClick = (message, event) => {
    if (!message || discoveredStars.has(message.id)) return;

    setDiscoveredStars(prev => new Set([...prev, message.id]));
    setCurrentMessage(message);
    createParticles(event.clientX, event.clientY);

    setTimeout(() => setCurrentMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <AnimatedBackgroundStars />
      <MoonIcon />
      <Particles particles={particles} />
      <CursorTrail mousePos={mousePos} />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-8">
        <HeaderSection discoveredCount={discoveredStars.size} totalStars={messages.length} />
        <ProgressBar progress={discoveredStars.size / messages.length} />

        {currentMessage && <MessageDisplay message={currentMessage} />}

        {/* Interactive stars */}
        <div className="absolute inset-0">
          {messages.map((message, index) => (
            <Star
              key={message.id}
              message={message}
              size={index % 3 === 0 ? 'large' : 'medium'}
              twinkleDelay={index * 0.3}
              onClick={(e) => handleStarClick(message, e)}
              isDiscovered={discoveredStars.has(message.id)}
            />
          ))}
        </div>
      </div>

      {showFinalMessage && <FinalMessageModal onClose={() => setShowFinalMessage(false)} />}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes message-appear {
          from { opacity: 0; transform: translateY(-50%) scale(0.9); }
          to { opacity: 1; transform: translateY(-50%) scale(1); }
        }

        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 1.5s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1.5s ease-out; }
        .animate-scale-in { animation: scale-in 0.4s ease-out; }
        .animate-message-appear { animation: message-appear 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default YouAreTheMoon;
