// components/ProjectCard.tsx
interface Project {
    id: number;
    title: string;
    description: string;
    githubLink: string;
  }
  
  interface ProjectCardProps {
    project: Project;
  }
  
  export default function ProjectCard({ project }: ProjectCardProps) {
    return (
      <div className="border p-4 rounded shadow">
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="mt-2">{project.description}</p>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-4 inline-block"
        >
          View on GitHub
        </a>
      </div>
    );
  }
  