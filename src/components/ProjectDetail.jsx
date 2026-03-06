import { useParams } from 'react-router-dom';

export function ProjectDetail({ projects }) {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto pt-20 px-4">
      <h1 className="text-4xl font-bold text-(--colour-yellow)">{project.name}</h1>
      <div className="mt-8">
        <img src={project.image} className="w-full rounded-2xl" />
        <p className="mt-10 text-lg leading-relaxed">{project.content}</p>
      </div>
    </div>
  );
}