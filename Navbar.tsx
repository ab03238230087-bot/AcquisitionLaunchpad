import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Logo } from './ui/Logo';

export const FinalCTA: React.FC = () => {
  return (
    <div className="relative w-full py-40 px-6 md:px-20 flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle background gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-8">
            <Reveal>
                <div className="flex justify-center mb-6">
                    <Logo className="h-24 w-24 md:h-32 md:w-32 drop-shadow-[0_0_25px_rgba(178,131,10,0.4)]" />
                </div>
            </Reveal>
            <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-white">
                    READY TO <span className="text-gradient-gold">LAUNCH?</span>
                </h2>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl">
                    We only work with 5 new partners per month to ensure quality. If you are serious about scaling, let's talk.
                </p>
            </Reveal>

            <Reveal delay={0.4}>
                <motion.a 
                  href="https://calendly.com/abdullahymg/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(178,131,10,0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 flex h-16 px-10 items-center justify-center rounded-full bg-primary text-white text-lg font-bold tracking-widest transition-all shadow-[0_0_20px_rgba(178,131,10,0.3)] cursor-none"
                >
                  APPLY NOW
                </motion.a>
            </Reveal>

            <div className="mt-16 text-gray-600 text-xs uppercase tracking-widest">
                Acquisition Launchpad © 2024
            </div>
        </div>
    </div>
  );
};