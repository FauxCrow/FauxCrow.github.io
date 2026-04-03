import { Routes, Route, Navigate } from 'react-router-dom';
import { GradientBackground } from './components/GradientBackground.jsx';
import { NavigationBar } from './components/NavigationBar.jsx';
import { Home } from './pages/Home.jsx';
import { Projects } from './pages/Projects.jsx';
import { ProjectDetail } from './components/ProjectDetail.jsx';

import projectData from './db/projects.json';
import experienceData from './db/experience.json'

const roles = [
  { title: "Digital Art", top: "7%", left: "0%" },
  { title: "3D Modelling", top: "12%", left: "55%" },
  { title: "UI/UX", top: "27%", left: "30%" },
  { title: "Software Engineering", top: "52%", left: "5%" },
  { title: "Game Development", top: "47%", left: "70%" },
  { title: "Mixed Reality", top: "67%", left: "55%" },
  { title: "Prototyping", top: "82%", left: "24%" },
];

function App() {
  return (
    <GradientBackground>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home roles={roles} projects={projectData} experience={experienceData} />} />
        <Route path="/projects" element={<Projects roles={roles} projects={projectData} />} />
        <Route path="/projects/:projectId" element={<ProjectDetail projects={projectData} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <footer className="pt-10 text-center text-(--colour-yellow)/30">
        © {new Date().getFullYear()} FauxCrow
      </footer>
    </GradientBackground>
  );
}

export default App;