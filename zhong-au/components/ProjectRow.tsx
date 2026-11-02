import {
  statusLabels,
  statusOrder,
  type Project,
} from '@/content/projects';
import ProjectMeta from './ProjectMeta';

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="project">
      <h3 className="project-title">{project.title}</h3>
      <div className="project-stations">
        <span className="sr-only">Status: {statusLabels[project.status]}</span>
        {statusOrder.map((status) => (
          <span
            key={status}
            aria-hidden="true"
            className={status === project.status ? 'station station--on' : 'station'}
          >
            {status === project.status ? statusLabels[status] : null}
          </span>
        ))}
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-meta">
        <ProjectMeta project={project} />
      </div>
    </li>
  );
}
