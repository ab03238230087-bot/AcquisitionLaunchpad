import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a01f" />
        <stop offset="40%" stopColor="#fceda4" />
        <stop offset="60%" stopColor="#b2830a" />
        <stop offset="100%" stopColor="#8a6305" />
      </linearGradient>
      <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
         <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.5)"/>
      </filter>
    </defs>
    
    {/* Right Leg (Dominant) */}
    <path 
        d="M60 5 L90 95 L70 95 L40 5 Z" 
        fill="url(#logo-gradient)" 
        filter="url(#dropShadow)"
    />
    
    {/* Left Leg (Support) */}
    <path 
        d="M20 95 L45 35 L58 35 L33 95 Z" 
        fill="url(#logo-gradient)" 
        filter="url(#dropShadow)"
        opacity="0.9"
    />
  </svg>
);