import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal';

const services = [
  { icon: 'track_changes', title: 'Customer Acquisition', desc: 'Building predictable outbound and inbound systems that generate qualified appointments on autopilot.' },
  { icon: 'filter_alt', title: 'Funnels & Conversion', desc: 'Optimizing conversion rates and funnel architecture to turn cold traffic into warm leads.' },
  { icon: 'diamond', title: 'Offer Positioning', desc: 'Structuring high-ticket offers for maximum market resonance and premium pricing power.' },
  { icon: 'monetization_on', title: 'Pricing & Monetisation', desc: 'Maximizing Lifetime Value (LTV) and optimizing pricing elasticity for higher margins.' },
  { icon: 'settings_suggest', title: 'Systems & Operations', desc: 'Implementing Standard Operating Procedures (SOPs) and delegation frameworks to remove you from the day-to-day.' },
  { icon: 'trending_up', title: 'Scaling Bottlenecks', desc: 'Identifying and ruthlessly eliminating the critical constraints preventing 10x growth.' }
];

export const Services: React.FC = () => {
  return (
    <div id="about" className="relative w-full bg-background-dark py-24 px-6 md:px-20 border-t border-white/5 scroll-mt-32">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4">
          <Reveal>
             <span className="text-primary text-sm font-bold tracking-widest uppercase">Our Expertise</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">PRECISION ENGINEERING<br/><span className="text-gray-500">FOR YOUR BUSINESS</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-400 max-w-2xl mt-2 text-lg">We don't just give advice. We install enterprise-grade infrastructure into your growing agency.</p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <RevealItem key={idx}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-surface-dark p-8 transition-all duration-300 hover:border-primary/50 hover:bg-[#161616] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] h-full"
              >
                <div className="absolute inset-0 bg-luxury-sheen opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <div className="flex flex-col gap-2 z-10">
                  <h3 className="text-white text-lg font-bold leading-tight">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
};