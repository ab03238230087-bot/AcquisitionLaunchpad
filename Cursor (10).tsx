import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal';

export const Problem: React.FC = () => {
  return (
    <div className="relative w-full bg-surface-dark py-24 px-6 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="text-primary text-sm font-bold tracking-widest uppercase">The Plateau</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">WHY YOU ARE STUCK AT <span className="text-gray-500">£10K/MONTH</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>Most agencies hit a glass ceiling. You’ve relied on brute force, referrals, and manual labor to get here. But the tactics that got you to £10k are the exact things preventing you from reaching £100k.</p>
                <p>You are trapped in the "Operator's Dilemma": too busy delivering to sell, and too busy selling to deliver.</p>
              </div>
            </Reveal>
            
            <RevealGroup className="space-y-4 mt-4">
              {[
                "Unpredictable client acquisition (feasts & famines)",
                "Low leverage offers tied to your personal time",
                "No operational standardisation"
              ].map((item, idx) => (
                <RevealItem key={idx}>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-500 mt-1">cancel</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          
          <Reveal delay={0.4} width="100%">
            <div className="relative h-full min-h-[400px] w-full rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#050505] border border-white/5 p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%]"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl md:text-8xl font-bold text-white/5 select-none">CHAOS</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm max-w-xs"
                  >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: 1, delay: 0.5 }}
                    >
                         <span className="material-symbols-outlined text-red-500 text-4xl mb-2">warning</span>
                    </motion.div>
                    <h3 className="text-white font-bold text-xl mb-1">System Failure</h3>
                    <p className="text-xs text-gray-400">Revenue cap reached. Manual intervention required.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};