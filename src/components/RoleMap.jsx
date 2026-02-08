import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  { title: "Pixel Art", top: "7%", left: "0%" },
  { title: "3D Modelling", top: "12%", left: "55%" },
  { title: "UI/UX", top: "27%", left: "30%" },
  { title: "Software Development", top: "52%", left: "5%" },
  { title: "Game Development", top: "47%", left: "70%" },
  { title: "AR", top: "67%", left: "55%" },
  { title: "Prototyping", top: "82%", left: "24%" },
];

export const RoleMap = () => {
  return (
    <div className="relative w-full h-[500px] hidden lg:block">
      {/* Visual Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ stroke: 'var(--colour-white)', strokeWidth: 1 }}>
        <line id="PA to UI" x1="18%" y1="10%" x2="30%" y2="30%" />
        <line id="UI to 3D" x1="46%" y1="30%" x2="55%" y2="15%" />
        <line id="UI to SD" x1="40%" y1="28%" x2="20%" y2="52%" />
        <line id="UI to GD" x1="46%" y1="30%" x2="70%" y2="50%" />
        <line id="AR to GD" x1="85%" y1="52%" x2="68%" y2="70%" />
        <line id="SD to AR" x1="35%" y1="54%" x2="58%" y2="72%" />
        <line id="PT to AR" x1="45%" y1="85%" x2="55%" y2="70%" />
      </svg>

      {roles.map((role, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(224, 186, 170, 0.2)" }}
          style={{ top: role.top, left: role.left }}
          className="absolute px-8 py-1 border border-(--colour-white)/40 rounded-full font-(--font-body) text-(--colour-white) text-xs backdrop-blur-sm transition-all"
        >
          {role.title}
        </motion.button>
      ))}
    </div>
  );
};