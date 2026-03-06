import React from 'react';
import { motion } from 'framer-motion';
import { TagButton } from './TagButton';

export const RoleMap = ({ roles, selectedTags, onTagClick }) => {
  return (
    <div className="relative w-full h-[500px] hidden lg:block">
      {/* Visual Lines */}
      <motion.svg className="absolute inset-0 w-full h-full opacity-20" style={{ stroke: 'var(--colour-white)', strokeWidth: 1 }}>
        <motion.line id="PA to UI" x1="17%" y1="10%" x2="30%" y2="30%" />
        <motion.line id="UI to 3D" x1="46%" y1="30%" x2="55%" y2="15%" />
        <motion.line id="UI to SD" x1="40%" y1="28%" x2="20%" y2="52%" />
        <motion.line id="UI to GD" x1="46%" y1="30%" x2="70%" y2="50%" />
        <motion.line id="AR to GD" x1="85%" y1="52%" x2="68%" y2="70%" />
        <motion.line id="SD to AR" x1="35%" y1="54%" x2="58%" y2="72%" />
        <motion.line id="PT to AR" x1="45%" y1="85%" x2="55%" y2="70%" />
      </motion.svg>

      {roles.map((role, i) => (
        <TagButton
          key={i}
          tag={role.title}
          isActive={selectedTags.includes(role.title)}
          onTagClick={onTagClick}
          className="absolute" 
          style={{ top: role.top, left: role.left }}
        />
      ))}
    </div>
  );
};