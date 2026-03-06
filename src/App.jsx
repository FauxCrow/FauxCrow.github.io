import { Routes, Route, Navigate  } from 'react-router-dom';
import { GradientBackground } from './components/GradientBackground.jsx';
import { NavigationBar } from './components/NavigationBar.jsx';
import { Home } from './pages/Home.jsx';
import { Projects } from './pages/Projects.jsx';

import data from './db/projects.json';

const roles = [
  { title: "Pixel Art", top: "7%", left: "0%" },
  { title: "3D Modelling", top: "12%", left: "55%" },
  { title: "UI/UX", top: "27%", left: "30%" },
  { title: "Software Engineering", top: "52%", left: "5%" },
  { title: "Game Development", top: "47%", left: "70%" },
  { title: "AR/VR", top: "67%", left: "55%" },
  { title: "Prototyping", top: "82%", left: "24%" },
];

function App() {
  return (
    <GradientBackground>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home roles={roles} projects={data} />} />
        <Route path="/projects" element={<Projects projects={data} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </GradientBackground>
  );
}

export default App;