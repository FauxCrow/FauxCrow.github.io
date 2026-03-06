import React from 'react';
import { motion } from 'framer-motion';

export const NavigationBar = () =>{
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const scrollRoot = document.getElementById('scroll-root');
    const targetElement = document.getElementById(id);
    
    if (scrollRoot && targetElement) {
      const targetPosition = targetElement.offsetTop;
      scrollRoot.scrollTo({
        top: targetPosition - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 md:px-16 text-(--colour-yellow) backdrop-blur-md bg-(--colour-black)/30">
      <a href="/" className="brand font-heading font-bold">
        { /* future logo insert */}
        FC
      </a>
      <div className="nav-links space-x-8 flex items-center">
        { /* Disappear on mobile view */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="#works" onClick={(e) => scrollToSection(e, 'works')}>Works</a>
          { /* <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a> */ }
          { /* <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>  */ }
        </div>
        <a href="https://www.linkedin.com/in/faustina-anne-francisco/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-logo.svg" alt="LinkedIn Link" className="w-5 h-5 md:w-7 md:h-7 object-cover" />
        </a>
        <a href="https://fauxcrow.itch.io/" target="_blank" rel="noopener noreferrer">
          <img src="/itchio-logo.svg" alt="Itch.io Link" className="w-5 h-5 md:w-8 md:h-8 object-cover" />
        </a>
      </div>
    </nav>
  );
};