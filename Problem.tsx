import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from './ui/Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.3]);
  const paddingY = useTransform(scrollY, [0, 100], [24, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Process', href: '#our-process' },
    { label: 'About', href: '#about' },
  ];

  return (
    <motion.div 
      style={{ 
        backgroundColor: `rgba(5, 5, 5, ${bgOpacity.get()})`,
        borderBottomColor: `rgba(57, 52, 40, ${borderOpacity.get()})`,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent backdrop-blur-md px-6 lg:px-20 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center gap-3 text-white">
          <Logo className="h-10 w-10 md:h-12 md:w-12" />
          <h2 className="text-white text-lg md:text-xl font-bold leading-tight tracking-wide hidden sm:block">ACQUISITION LAUNCHPAD</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end items-center gap-10">
          <nav className="flex gap-8">
            {navLinks.map((item) => (
              <a key={item.label} className="text-gray-300 hover:text-primary text-sm font-medium transition-colors cursor-none" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <motion.a 
              href="https://calendly.com/abdullahymg/meeting"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(178,131,10,0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="flex cursor-none items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(178,131,10,0.3)]"
            >
              <span className="truncate">Apply for Access</span>
            </motion.a>
          </div>
        </div>
        <div className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </motion.div>
  );
};