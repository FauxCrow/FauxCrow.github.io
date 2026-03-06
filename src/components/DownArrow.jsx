import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const DownArrow = () => {
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
      <ChevronDown 
        className="w-6 h-6 md:w-10 md:h-10" 
        strokeWidth={1} 
      />
    </motion.div>
  );
};
