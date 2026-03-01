import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

export const Partners: React.FC = () => {
  return (
    <div className="relative w-full bg-background-dark py-24 px-6 md:px-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">
        <div className="text-center">
             <Reveal>
                 <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">Qualification Criteria</span>
             </Reveal>
             <Reveal delay={0.1}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">WHO WE PARTNER WITH</h2>
             </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* NOT FOR YOU */}
            <Reveal delay={0.2} width="100%">
                <div className="h-full p-8 md:p-12 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-6 opacity-70 hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-xl font-bold text-gray-400 flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-500">do_not_disturb_on</span>
                        NOT FOR YOU IF
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "You are looking for a 'get rich quick' scheme",
                            "You are not willing to restructure operations",
                            "You view consulting as a cost, not an investment",
                            "You are generating less than £5k/month"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-500">
                                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-600 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>

            {/* FOR YOU */}
            <Reveal delay={0.3} width="100%">
                <div className="relative h-full p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#111] to-black border border-primary/20 flex flex-col gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        PERFECT MATCH IF
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "You have a proven offer and case studies",
                            "You are ready to remove yourself from fulfillment",
                            "You can handle an influx of 10+ leads/week",
                            "You are doing £10k-£50k/mo and want £100k+"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">check</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </div>
      </div>
    </div>
  );
};