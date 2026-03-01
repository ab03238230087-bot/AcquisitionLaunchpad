import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const NumberTicker: React.FC<{ value: number, prefix?: string, suffix?: string }> = ({ value, prefix = "", suffix = "" }) => {
    const motionValue = useSpring(0, { damping: 40, stiffness: 50 });
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    
    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);
    
    const displayValue = useTransform(motionValue, (latest) => 
        `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`
    );
    
    return <motion.span ref={ref} className="tabular-nums">{displayValue}</motion.span>;
}

interface FloatingElementProps {
    children: React.ReactNode;
    className?: string; // Positioning (absolute top/left)
    depth?: 1 | 2 | 3; // 1 = Back (slow, small), 2 = Mid, 3 = Front (fast, big)
    delay?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, className, depth = 1, delay = 0 }) => {
    const { scrollY } = useScroll();
    
    // Parallax logic: Elements "closer" (depth 3) move faster than elements "farther" (depth 1)
    const yRange = depth === 1 ? -50 : depth === 2 ? -100 : -200;
    const yParallax = useTransform(scrollY, [0, 1000], [0, yRange]);

    // Idle Animation Configuration
    // Longer durations for heavier/larger elements (depth 3), shorter for small ones (depth 1)
    // Add randomness via delay prop
    const durationY = 6 + (depth * 0.5) + (delay % 2); 
    const durationX = 7 + (depth * 0.5) + (delay % 3);

    // Movement range - slightly larger for visual feedback as requested
    const moveY = depth === 3 ? 15 : 10;
    const moveX = depth === 3 ? 10 : 6;

    return (
        <motion.div
            style={{ y: yParallax, zIndex: depth * 10 }}
            className={`absolute pointer-events-auto ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -moveY, 0],
                    x: [0, moveX, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: delay * 0.1 },
                    scale: { duration: 1, delay: delay * 0.1 },
                    y: { 
                        duration: durationY, 
                        repeat: Infinity, 
                        repeatType: "mirror", 
                        ease: "easeInOut", 
                        delay: delay 
                    },
                    x: { 
                        duration: durationX, 
                        repeat: Infinity, 
                        repeatType: "mirror", 
                        ease: "easeInOut", 
                        delay: delay + 2 
                    }
                }}
                whileHover={{ 
                    scale: 1.05, 
                    filter: "brightness(1.1)",
                    borderColor: "rgba(178,131,10,0.3)", // slight gold hint on hover
                    boxShadow: "0 0 30px rgba(178,131,10,0.1)"
                }}
                className={`
                    flex flex-col justify-center
                    rounded-2xl border backdrop-blur-xl shadow-2xl transition-colors duration-300
                    ${depth === 1 ? 'bg-surface-dark/20 border-white/5 p-3 opacity-50 hover:opacity-90' : ''}
                    ${depth === 2 ? 'bg-surface-dark/40 border-white/10 p-4 opacity-70 hover:opacity-100' : ''}
                    ${depth === 3 ? 'bg-[#0a0a0a]/90 border-white/15 p-6 opacity-100 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : ''}
                `}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export const Hero: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      
      {/* FLOATING PROOF ELEMENTS (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
          
          {/* --- LAYER 1: BACK (Background Context, Low Opacity) --- */}
          
          {/* Top Left: Pipeline */}
          <FloatingElement className="top-[10%] left-[8%]" depth={1} delay={0}>
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-medium text-gray-500 tracking-wide">Pipeline Active</span>
             </div>
          </FloatingElement>

          {/* Top Center-Right: Retention */}
          <FloatingElement className="top-[8%] right-[28%]" depth={1} delay={1}>
             <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-gray-600 text-xs">group</span>
                 <div>
                    <span className="block text-[9px] uppercase tracking-widest text-gray-600">Retention</span>
                    <span className="text-xs font-bold text-gray-400">98%</span>
                 </div>
             </div>
          </FloatingElement>

          {/* Far Left: Leads */}
          <FloatingElement className="bottom-[35%] left-[3%]" depth={1} delay={2}>
             <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary/40 text-sm">inbox</span>
                 <span className="text-xs font-medium text-gray-500">12 Qualified Leads</span>
             </div>
          </FloatingElement>

          {/* Low Left: Timeline */}
          <FloatingElement className="bottom-[12%] left-[12%]" depth={1} delay={3}>
             <div className="flex items-center gap-3">
                 <div className="flex flex-col items-center gap-0.5">
                     <div className="w-1 h-1 rounded-full bg-primary/60"></div>
                     <div className="w-[1px] h-3 bg-white/5"></div>
                 </div>
                 <div>
                    <span className="block text-[9px] uppercase tracking-widest text-gray-600">Week 6</span>
                    <span className="text-xs font-medium text-gray-400">Offer Rebuilt</span>
                 </div>
             </div>
          </FloatingElement>

          {/* Top Far Right: CAC (NEW) */}
           <FloatingElement className="top-[15%] right-[5%]" depth={1} delay={4}>
             <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-emerald-500/50 text-xs">trending_down</span>
                 <span className="text-xs font-medium text-gray-500">CAC -40%</span>
             </div>
          </FloatingElement>
          
          {/* Bottom Center Right: Churn (NEW) */}
           <FloatingElement className="bottom-[10%] right-[30%]" depth={1} delay={2.5}>
             <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                 <span className="text-xs font-medium text-gray-500">Churn &lt; 1%</span>
             </div>
          </FloatingElement>


          {/* --- LAYER 2: MID (Operational Metrics) --- */}

          {/* Top Right: Growth */}
          <FloatingElement className="top-[22%] right-[12%]" depth={2} delay={0.5}>
             <div className="flex flex-col gap-1 min-w-[120px]">
                 <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                    <span className="text-[9px] uppercase tracking-widest text-gray-400">30 Day Delta</span>
                 </div>
                 <div className="text-xl font-bold text-white tracking-tight">
                    <NumberTicker value={38200} prefix="+£" />
                 </div>
             </div>
          </FloatingElement>

          {/* Mid Left: Deal Value */}
          <FloatingElement className="bottom-[28%] left-[20%]" depth={2} delay={1.5}>
             <div className="flex items-center gap-3">
                 <div className="p-1.5 rounded-md bg-white/5 border border-white/5">
                    <span className="material-symbols-outlined text-gray-300 text-base">sell</span>
                 </div>
                 <div>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-0.5">Avg Deal Value</p>
                    <div className="text-lg font-bold text-white tracking-tight">
                        <NumberTicker value={5200} prefix="£" />
                    </div>
                 </div>
             </div>
          </FloatingElement>

          {/* Low Right: ROI */}
          <FloatingElement className="bottom-[25%] right-[10%]" depth={2} delay={3.5}>
             <div className="flex flex-col items-center min-w-[90px]">
                 <span className="text-2xl font-bold text-white"><NumberTicker value={847} suffix="%" /></span>
                 <span className="text-[9px] uppercase tracking-widest text-primary/80">Avg Growth</span>
             </div>
          </FloatingElement>

           {/* Top Left Mid: Active Campaigns (NEW) */}
           <FloatingElement className="top-[25%] left-[15%]" depth={2} delay={2.2}>
             <div className="flex items-center gap-2">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                 </span>
                 <span className="text-sm font-bold text-gray-300">8 Active Campaigns</span>
             </div>
          </FloatingElement>


          {/* --- LAYER 3: FRONT (Heroic / Large) --- */}

          {/* Mid Left: Revenue (BIGGEST) */}
          <FloatingElement className="top-[42%] left-[4%]" depth={3} delay={0.2}>
             <div className="flex items-center gap-5 min-w-[240px]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                    <span className="material-symbols-outlined text-emerald-400 text-3xl">payments</span>
                </div>
                <div>
                    <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1">Monthly Revenue</p>
                    <div className="text-4xl font-bold text-white tracking-tight">
                        <NumberTicker value={124000} prefix="£" />
                    </div>
                </div>
             </div>
          </FloatingElement>

          {/* Mid Right: System Badge (LARGE) */}
          <FloatingElement className="top-[50%] right-[3%]" depth={3} delay={1.2}>
             <div className="flex items-center gap-4 pr-2">
                 <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
                     <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xl font-bold text-white tracking-tight">Acquisition OS</span>
                    <div className="flex items-center gap-2 mt-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
                         <span className="text-[10px] text-green-400/80 uppercase tracking-wider font-semibold">System Active</span>
                    </div>
                 </div>
             </div>
          </FloatingElement>

          {/* Bottom Right: Net Margin (NEW LARGE) */}
          <FloatingElement className="bottom-[18%] right-[22%]" depth={3} delay={2.8}>
             <div className="flex flex-col gap-2 p-1 min-w-[160px]">
                 <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">Net Margin</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-900/30 px-1.5 py-0.5 rounded border border-emerald-500/20">+12%</span>
                 </div>
                 <div className="text-3xl font-bold text-white">
                    <NumberTicker value={68} suffix="%" />
                 </div>
             </div>
          </FloatingElement>

      </div>

      {/* Main Content Centered */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full px-6 pt-32 pb-12 pointer-events-none">
        <div className="relative z-10 max-w-[900px] flex flex-col items-center text-center gap-8 pointer-events-auto">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">Limited Availability for 2026</span>
            </div>
          </Reveal>
          
          <div className="flex flex-col items-center">
            <Reveal delay={0.2} width="100%">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-[-0.03em] text-white">
                SCALING £1K–£10K
              </h1>
            </Reveal>
            <Reveal delay={0.4} width="100%">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-[-0.03em] text-gradient-gold pb-2">
                INTO £100K+ SYSTEMS
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.6}>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Bespoke growth consulting for operators who want precision, not noise. We transition you from hustler to shareholder.
            </p>
          </Reveal>

          <Reveal delay={0.8}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a 
                href="https://calendly.com/abdullahymg/meeting"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(178,131,10,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="flex h-14 px-8 items-center justify-center rounded-full bg-primary text-white font-bold tracking-wide transition-all shadow-[0_0_25px_rgba(178,131,10,0.4)] w-full sm:w-auto cursor-none"
              >
                APPLY FOR CONSULTING
              </motion.a>
              <motion.a 
                href="#our-process"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="flex h-14 px-8 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium tracking-wide transition-all w-full sm:w-auto cursor-none"
              >
                SEE HOW IT WORKS
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Trusted By Strip */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
        className="w-full border-t border-white/5 bg-background-dark/80 backdrop-blur-sm relative z-10 pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
           <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 whitespace-nowrap">Trusted By Founders</p>
           
           <div className="flex-1 flex justify-center md:justify-end items-center gap-8 md:gap-12 flex-wrap">
              {/* Text Logos - Simple, clean, expensive look */}
              <span className="text-lg font-bold font-display tracking-tight text-white/40 hover:text-white transition-colors duration-500">VANGUARD<span className="text-primary/40 hover:text-primary transition-colors duration-500">MEDIA</span></span>
              <span className="text-lg font-bold font-display tracking-tight text-white/40 hover:text-white transition-colors duration-500">NEXUS<span className="text-primary/40 hover:text-primary transition-colors duration-500">GROWTH</span></span>
              <span className="text-lg font-bold font-display tracking-tight text-white/40 hover:text-white transition-colors duration-500">APEX<span className="text-primary/40 hover:text-primary transition-colors duration-500">DIGITAL</span></span>
              <span className="text-lg font-bold font-display tracking-tight text-white/40 hover:text-white transition-colors duration-500">CAPITAL<span className="text-primary/40 hover:text-primary transition-colors duration-500">FLOW</span></span>
              <span className="text-lg font-bold font-display tracking-tight text-white/40 hover:text-white transition-colors duration-500">IRON<span className="text-primary/40 hover:text-primary transition-colors duration-500">CLAD</span></span>
           </div>
        </div>
      </motion.div>
    </div>
  );
};