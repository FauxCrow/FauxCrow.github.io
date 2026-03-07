import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { TagButton } from '../components/TagButton.jsx';

export function Projects({ roles, projects }) {
    const navigate = useNavigate();

    useEffect(() => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    }, []);

    const handleGoBack = () => {
        navigate('/', { state: { scrollTo: 'works' } });
    };

    const [selectedTags, setSelectedTags] = useState([]);

    const sortedRoles = [...roles].sort((a, b) => a.title.localeCompare(b.title));

    const handleTagClick = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const filteredProjects = projects
        .filter(project =>
            selectedTags.length === 0 ||
            project.tag.some(t => selectedTags.includes(t))
        )
        .sort((a, b) => {
            if (selectedTags.length === 0) return 0;

            const countA = a.tag.filter(t => selectedTags.includes(t)).length;
            const countB = b.tag.filter(t => selectedTags.includes(t)).length;
            return countB - countA;
        });

    return (
        <div className="space-y-5">
            <section id="projects" className="max-w-7xl mx-auto pt-10 px-4 scroll-mt-24">
                <div className="flex items-center gap-x-2">
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
                    >
                        <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" strokeWidth={1} />
                    </motion.div>
                    <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-3xl">All Projects</h1>
                </div>

                { /* Project Screen */}
                <div className="flex flex-wrap gap-2 mb-8 mt-4">
                    {sortedRoles.map((role, index) => (
                        <TagButton
                            key={index}
                            tag={role.title}
                            isActive={selectedTags.includes(role.title)}
                            onTagClick={handleTagClick}
                        />
                    ))}
                    {selectedTags.length > 0 && (
                        <button onClick={() => setSelectedTags([])} className="text-xs text-(--colour-white)/50 hover:text-(--colour-white) transition-colors ml-2">clear tags</button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div layout key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <ProjectPreview project={project} selectedTags={selectedTags}/>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}