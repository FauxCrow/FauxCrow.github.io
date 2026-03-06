import { useState } from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { RoleMap } from '../components/RoleMap.jsx'
import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { TagButton } from '../components/TagButton.jsx';
import { DownArrow } from '../components/DownArrow.jsx';

export function Home({ roles, projects }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const navigate = useNavigate();

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
            { /* Hero Section */}
            <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] max-w-7xl mx-auto pt-20 px-4">
                { /* Left Section */}
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="relative flex flex-col items-center lg:items-start">
                        <span className="absolute -top-2 font-heading font-bold text-3xl md:text-6xl text-transparent opacity-70 select-none z-0" style={{ WebkitTextStroke: '1px var(--colour-white)' }} aria-hidden="true">FauxCrow</span>
                        <h1 className="translate-x-1 md:translate-x-2 font-bold font-heading text-3xl md:text-6xl text-(--colour-yellow) z-10 leading-none">FauxCrow</h1>
                        <h2 className="mt-0 translate-x-5 md:translate-x-10 lg:translate-x-20 font-body text-[0.625rem] md:text-xl text-(--colour-yellow) whitespace-nowrap">Faustina Anne Francisco</h2>
                        <div className="mt-8 md:mt-12 lg:translate-x-12 flex flex-col gap-y-5 items-center">
                            <a href="/Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
                                <motion.button whileHover={{ scale: 1.05 }} className="px-12 md:px-20 py-2 bg-(--colour-yellow) text-(--colour-purple) rounded-full text-[0.625rem] md:text-lg font-bold shadow-xl">Resume</motion.button>
                            </a>
                            <DownArrow></DownArrow>
                        </div>
                    </div>
                </div>

                { /* Right Section */}
                <RoleMap roles={roles} selectedTags={selectedTags} onTagClick={handleTagClick} />
            </main>

            { /* Works Section */}
            <section id="works" className="max-w-7xl mx-auto pt-10 px-4">
                <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-3xl">Works</h1>

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
                    {filteredProjects.slice(0, 6).map((project, index) => (
                        <motion.div layout key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={index >= 3 ? "hidden md:block" : "block"}> 
                            <ProjectPreview project={project} />
                        </motion.div>
                    ))}
                </div>

                {/* See All Button 
                <div className="flex justify-center mt-12 pb-20">
                    <Link to="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-12 py-3 border border-(--colour-yellow) text-(--colour-yellow) rounded-full font-bold hover:bg-(--colour-yellow) hover:text-(--colour-purple) transition-all"
                        >
                            See All Projects
                        </motion.button>
                    </Link>
                </div> */}
            </section>

            { /* Experience 
            <section id="experience" className="max-w-7xl mx-auto pt-10">
                <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-3xl">Experience</h1>
            </section>
            */}

            { /* Contact 
            <section id="contact" className="max-w-7xl mx-auto pt-10 px-4 pb-10">
                <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-3xl">Want To Chat?</h1>
            </section>
            */}

            <footer className="pt-10 text-center text-(--colour-yellow)/30">
                © {new Date().getFullYear()} FauxCrow
            </footer>
        </div>
    )
}