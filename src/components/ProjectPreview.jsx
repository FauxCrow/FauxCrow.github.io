import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

export const ProjectPreview = ({ project, selectedTags }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ backgroundColor: "rgba(224, 186, 170, 0.28)" }} className="flex flex-col space-y-3 w-full h-full rounded-2xl border border-white/20 p-5 backdrop-blur-sm">
      { /* Image */}
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/20">
        <img src={project.media[0].url} alt={project.name} className="h-full w-full object-cover" />
      </div>

      { /* Project Info */}
      <div className="flex-grow flex flex-col space-y-3 overflow-hidden">
        {/* Project Title */}
        <h3 className="font(--font-heading) font-bold text-(--colour-yellow) text-xl">
          {project.name}
        </h3>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tag?.map((t, i) => {
            const isHighlighted = selectedTags.includes(t);

            return (
              <span
                key={i}
                className={`px-2 py-0.5 border rounded-full text-[10px] uppercase tracking-wider transition-all duration-300 ${isHighlighted ? "bg-(--colour-yellow) text-(--colour-purple) border-(--colour-yellow) font-bold shadow-lg" : "bg-white/5 text-white/60 border-white/10"}`}
              >
                {t}
              </span>
            );
          })}
        </div>

        {/* Description*/}
        <p className="font-body text-sm text-white/80 line-clamp-5 leading-relaxed">
          {project.synopsis}
        </p>
      </div>

      { /* Footer */}
      <div className="mt-auto pt-5">
        <Link to={`/projects/${project.id}`} state={{ from: location.pathname }} className="block w-full text-center py-2 bg-(--colour-yellow) text-(--colour-purple) rounded-lg font-bold font-body text-sm hover:brightness-110 transition-all">
          See More
        </Link>
      </div>
    </motion.div>
  );
};