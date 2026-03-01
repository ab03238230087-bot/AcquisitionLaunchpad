import React from 'react';
import { Cursor } from './components/ui/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Partners } from './components/Partners';
import { Results } from './components/Results';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-background-dark text-white selection:bg-primary selection:text-white">
      <Cursor />
      
      {/* GLOBAL BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,20,20,1),rgba(5,5,5,1)_80%)]" />
        
        {/* Subtle Gold Haze - Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] opacity-40 animate-pulse-slow" />
        
        {/* Subtle Gold Haze - Right Bottom */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[150px] opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Diagonal Light Streaks */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(45deg, transparent 45%, #b2830a 50%, transparent 55%)',
               backgroundSize: '200% 200%',
               backgroundPosition: '0% 0%'
             }}>
        </div>
        
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Partners />
        <Results />
        <FinalCTA />
      </main>
    </div>
  );
}