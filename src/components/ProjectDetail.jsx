import { useEffect } from 'react'
import { motion } from "framer-motion";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';

export function ProjectDetail({ projects }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>Project not found or has been removed.</div>;

  const handleGoBack = () => {
    const previousPath = location.state?.from;

    if (previousPath === '/projects') {
      navigate('/projects');
    } else {
      navigate('/', { state: { scrollTo: 'works' } });
    }
  };

  useEffect(() => {
    const element = document.getElementById('return');
    if (element) {
      element.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto pt-20 px-4">
      { /* Return */}
      <div id="return" className="flex-grow flex flex-col space-y-3">
        {/* Title */}
        <div className="flex flex-nowrap gap-2 justify-between">
          <div className="flex flex-row gap-2">
            <motion.div
              animate={{
                x: [0, -5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ fontSize: "2rem", display: "inline-block", color: "var(--colour-yellow)" }}
              onClick={handleGoBack}
              className="flex-shrink-0"
            >
              <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" strokeWidth={1} />
            </motion.div>
            <h1 id="title" className="text-xl md:text-4xl font-bold font-heading text-(--colour-yellow) truncate">{project.name}</h1>

          </div>


          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex items-center gap-2 px-2 md:px-4 py-2 border border-white/10 rounded-full tracking-wider bg-white/5 text-white/60 font-body text-sm transition-colors hover:text-white hover:border-white/30 w-fit"
          >
            <span className="hidden md:inline">View Project</span>
            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
          </motion.a>
        </div>


        {/* Project Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tag?.map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider bg-white/5 text-white/60"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Media Carousel */}
        <img src={project.image} className="w-full rounded-2xl mt-3" />

        {/* Project Description */}
        <div className="flex flex-col space-y-3 mt-5">
          <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-2xl">Description</h1>
          <p className="text-sm md:text-md leading-relaxed font-body text-(--colour-yellow) whitespace-pre-line text-justify">{project.description}</p>
        </div>

        {/* Challenges */}
        <div className="flex flex-col space-y-3 mt-5">
          <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-2xl">Process</h1>
          <p className="text-sm md:text-md leading-relaxed font-body text-(--colour-yellow) whitespace-pre-line text-justify">{project.process}</p>
        </div>

        {/* Tools & Technology Used */}
        <div className="flex flex-col space-y-3 mt-5">
          <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-2xl">Tools & Technology</h1>

          { /* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                style={{ backgroundColor: "rgba(224, 186, 170, 0.28)" }}
                className="px-3 md:px-5 py-1 md:py-2 border border-white/10 rounded-2xl text-xs md:text-md font-body tracking-wider text-white/60"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}