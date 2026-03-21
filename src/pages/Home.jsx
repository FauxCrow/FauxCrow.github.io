import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RoleMap } from '../components/RoleMap.jsx'
import { ProjectPreview } from '../components/ProjectPreview.jsx'
import { TagButton } from '../components/TagButton.jsx';
import { DownArrow } from '../components/DownArrow.jsx';
import { ContactForm } from '../components/EmailService.jsx';
import { Timeline } from '../components/ExperienceTimeline.jsx';
import { Helmet } from 'react-helmet-async';

export function Home({ roles, projects, experience }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const location = useLocation();
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

    // return to works if coming from projects
    useEffect(() => {
        if (location.state?.scrollTo === 'works') {
            const element = document.getElementById('works');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                    navigate(location.pathname, { replace: true, state: {} });
                }, 100);
            }
        }
        if (location.state?.scrollTo === 'experience') {
            const element = document.getElementById('experience');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                    navigate(location.pathname, { replace: true, state: {} });
                }, 100);
            }
        }
        if (location.state?.scrollTo === 'contact') {
            const element = document.getElementById('contact');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                    navigate(location.pathname, { replace: true, state: {} });
                }, 100);
            }
        }
    }, [location, navigate]);

    return (
        <>
            <Helmet>
                <title>FauxCrow | Software Engineer & Game Developer</title>
                <link rel="canonical" href="https://fauxcrow.github.io/" />
                <meta name="description" content="Portfolio of FauxCrow, specializing in Game Dev and UI/UX." />
            </Helmet>
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
                                    <motion.button whileHover={{ scale: 1.05 }} className="px-12 md:px-20 py-2 bg-(--colour-yellow) text-(--colour-purple) rounded-full text-[0.625rem] md:text-lg font-bold font-body shadow-xl">Resume</motion.button>
                                </a>
                                <DownArrow></DownArrow>
                            </div>
                        </div>
                    </div>

                    { /* Right Section */}
                    <RoleMap roles={roles} selectedTags={selectedTags} onTagClick={handleTagClick} />
                </main>

                { /* Works Section */}
                <section id="works" className="max-w-7xl mx-auto pt-10 px-4 scroll-mt-24">
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
                                <ProjectPreview project={project} selectedTags={selectedTags} />
                            </motion.div>
                        ))}
                    </div>

                    {/* See All Button */}
                    <div className="flex justify-center mt-12">
                        <Link to="/projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-12 md:px-20 py-3 border border-(--colour-yellow) text-[0.625rem] md:text-lg text-(--colour-yellow) rounded-full font-bold font-body hover:bg-(--colour-yellow) hover:text-(--colour-purple) transition-all"
                            >
                                See All Projects
                            </motion.button>
                        </Link>
                    </div>
                </section>

                { /* Experience */}
                <section id="experience" className="max-w-7xl mx-auto pt-10 px-4 scroll-mt-24">
                    <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-3xl">Experience</h1>

                    { /* Interactive Timeline */}
                    <Timeline experience={experience}></Timeline>
                </section>

                { /* Contact */}
                <section id="contact" className="max-w-7xl mx-auto pt-10 px-4 pb-10 scroll-mt-24">
                    <h1 className="font-heading font-bold text-(--colour-yellow) text-xl md:text-3xl mb-5 lg:mb-10">Want To Chat?</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch font-body">
                        {/* Left Section */}
                        <div className="flex flex-col text-left items-start lg:justify-center space-y-4">
                            <p className="text-(--colour-white) max-w-md leading-relaxed">
                                I’m always open to discussing potential collaborations or general enquiries.
                                Feel free to drop me a message and I'll get back to you as soon as possible!
                            </p>
                        </div>

                        {/* Right Section - Email Form*/}
                        <ContactForm></ContactForm>
                    </div>
                </section>
            </div>
        </>
    )
}