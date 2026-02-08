import React from 'react';
import { motion } from 'framer-motion';

export const GradientBackground = ({ children }) =>{
  return (
    <div className="fixed inset-0 overflow-hidden bg-(--colour-blue)">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-(--colour-blue) via-[#30254d] to-(--colour-purple)" />

      {/* Animation*/}
      <div className="absolute inset-0 filter blur-[120px]">
        <motion.div
          animate={{ y: [600, -200, 600], scale: [1, 1.4, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-(--colour-purple) opacity-40 mix-blend-multiply"
        />
        <motion.div
          animate={{ y: [700, 100, 700], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-(--colour-purple) opacity-30 mix-blend-multiply"
        />
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 100%)' }} />

      {/* Subtle Noise */}
      <div className="absolute inset-0 noise-bg opacity-[0.08] pointer-events-none z-[2] mix-blend-overlay" />

      {/* Main Content */}
      <div id="scroll-root" className="relative z-10 w-full h-full p-8 md:p-5 lg:p-10 overflow-auto no-scrollbar">
        <div className="max-w-7xl mx-auto min-h-full">
          {children}
        </div>
      </div>
    </div>
  );
};