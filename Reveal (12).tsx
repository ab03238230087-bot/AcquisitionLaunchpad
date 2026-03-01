import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const Counter: React.FC<{ value: number, prefix?: string, suffix?: string }> = ({ value, prefix = "", suffix = "" }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, { damping: 30, stiffness: 60, duration: 2 }); // Smooth, luxury feel
    
    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    const displayValue = useTransform(springValue, (latest) => 
        `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`
    );

    return (
        <motion.span ref={ref} className="tabular-nums">
            {displayValue}
        </motion.span>
    );
};

export const Results: React.FC = () => {
  return (
    <div id="case-studies" className="w-full bg-surface-dark py-32 px-6 md:px-20 border-t border-white/5 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="flex flex-col items-center gap-2 p-4">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    <Counter value={42} suffix="M+" prefix="£" />
                </div>
                <Reveal delay={0.5}>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">Client Revenue Added</p>
                </Reveal>
            </div>

            <div className="flex flex-col items-center gap-2 p-4">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    <Counter value={180} suffix="+" />
                </div>
                 <Reveal delay={0.6}>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">Agencies Scaled</p>
                </Reveal>
            </div>

            <div className="flex flex-col items-center gap-2 p-4">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    <Counter value={12} suffix="x" />
                </div>
                 <Reveal delay={0.7}>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">Average ROI</p>
                </Reveal>
            </div>

        </div>
      </div>
    </div>
  );
};