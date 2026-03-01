import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const phases = [
  { icon: 'search', id: '01', title: 'Deep Business Audit', desc: 'We dismantle your current operations to understand exactly what is working and what is broken. No stone left unturned.' },
  { icon: 'warning', id: '02', title: 'Bottleneck Identification', desc: 'Identifying the single biggest constraint holding back revenue. We focus all resources on breaking this bottleneck first.' },
  { icon: 'grid_view', id: '03', title: 'Custom Growth Plan', desc: 'A bespoke roadmap designed specifically for your agency model. No cookie-cutter courses; this is engineering.' },
  { icon: 'diamond', id: '04', title: 'Implementation & Mentorship', desc: 'We don\'t leave you to figure it out. We work alongside your team to implement systems and ensure adoption.' },
  { icon: 'rocket_launch', id: '05', title: 'Scale to £100k+/Month', desc: 'The final phase where systems are stabilized, and we aggressively scale traffic and team capacity.' }
];

export const Process: React.FC = () => {
  return (
    <div className="relative w-full bg-surface-dark py-24 px-6 md:px-20 overflow-hidden scroll-mt-32" id="our-process">
      {/* Background aesthetic line */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Header */}
          <div className="relative h-full">
            <div className="lg:sticky lg:top-32 flex flex-col items-start gap-6">
               <Reveal>
                 <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Process</span>
                 </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white uppercase">
                  The Launchpad <br/> Trajectory
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                  A structured, 5-phase evolution taking your agency from chaos to a well-oiled machine generating consistent cash flow.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative flex flex-col gap-12 lg:gap-16 pl-2 lg:pl-0">
             {/* Vertical Timeline Line */}
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-[20px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" 
            />

            {phases.map((phase, idx) => {
                const isLast = idx === phases.length - 1;
                return (
                    <div key={idx} className="relative flex gap-8 items-center">
                         {/* Icon Node */}
                        <div className="relative z-10 flex-shrink-0">
                             <Reveal delay={idx * 0.15}>
                                <motion.div 
                                    className={`relative rounded-full flex items-center justify-center border-2 transition-all duration-500
                                        ${isLast 
                                            ? 'w-20 h-20 bg-primary border-primary text-white shadow-[0_0_40px_rgba(178,131,10,0.6)] -ml-5' 
                                            : 'w-10 h-10 bg-background-dark border-white/10 text-gray-500 hover:border-primary hover:text-primary hover:bg-[#111]'
                                        }`}
                                    initial={isLast ? { scale: 0.5, opacity: 0 } : {}}
                                    animate={isLast ? {
                                        scale: [0.5, 1.2, 1],
                                        opacity: 1,
                                        boxShadow: ["0 0 0px rgba(178,131,10,0)", "0 0 60px rgba(178,131,10,0.8)", "0 0 30px rgba(178,131,10,0.5)"]
                                    } : {}}
                                    transition={isLast ? {
                                        duration: 0.8,
                                        ease: "backOut",
                                        delay: (idx * 0.15) + 0.4, // Wait for reveal then pop
                                        times: [0, 0.6, 1]
                                    } : {}}
                                >
                                    {/* Pulsating Ring for the last item */}
                                    {isLast && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full border border-primary/50"
                                            animate={{ scale: [1, 1.6], opacity: [0.8, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                                        />
                                    )}
                                    <span className={`material-symbols-outlined ${isLast ? 'text-4xl' : 'text-xl'}`}>{phase.icon}</span>
                                </motion.div>
                             </Reveal>
                        </div>

                        {/* Text Content */}
                        <Reveal delay={idx * 0.15 + 0.1} width="100%">
                            <div className="flex flex-col gap-2">
                                <span className={`text-xs font-bold tracking-widest uppercase mb-1 ${isLast ? 'text-primary' : 'text-gray-600'}`}>Phase {phase.id}</span>
                                <h3 className={`text-xl md:text-2xl font-bold ${isLast ? 'text-white' : 'text-white'}`}>{phase.title}</h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-lg">{phase.desc}</p>
                            </div>
                        </Reveal>
                    </div>
                );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};