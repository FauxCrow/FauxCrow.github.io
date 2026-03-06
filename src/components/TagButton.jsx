import React from 'react';
import { motion } from 'framer-motion';

export const TagButton = ({ tag, onTagClick, isActive, className, style }) => {
    return (
        <motion.button
            onClick={() => onTagClick(tag)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                backgroundColor: isActive ? "var(--colour-yellow)" : "rgba(255, 255, 255, 0.1)",
                color: isActive ? "var(--colour-purple)" : "var(--colour-white)",
                ...style
            }}
            className={`px-8 py-1 border border-white/20 rounded-full font-(--font-body) text-xs backdrop-blur-sm transition-colors duration-200 ${className}`}
        >
            {tag}
        </motion.button>
    );
};