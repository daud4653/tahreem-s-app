import React from 'react';
import { Moon } from 'lucide-react';

const MoonIcon = () => (
  <div className="absolute top-8 right-8 animate-float">
    <Moon className="text-yellow-100" size={48} fill="currentColor" />
  </div>
);

export default MoonIcon;