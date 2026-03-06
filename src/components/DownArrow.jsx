import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const DownArrow = () => {
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
    <motion.div
      animate={{
        y: [0, 5, 0]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ fontSize: "2rem", display: "inline-block", color: "var(--colour-yellow)"}}
    >
      <a href="#works" onClick={(e) => scrollToSection(e, 'works')}>
        <ChevronDown 
        className="w-6 h-6 md:w-10 md:h-10" 
        strokeWidth={1} 
      />
      </a>
    </motion.div>
  );
};
