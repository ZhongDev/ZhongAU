import type { Metadata } from 'next';
import { ArrowUpRightIcon } from '@/components/Icons';
import ProjectMeta from '@/components/ProjectMeta';
import {
  archivedProjects,
  featuredProjects,
  projectsDescription,
  statusLabels,
  statusOrder,
} from '@/content/projects';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: projectsDescription,
};

// Shows the bare count; screen readers hear "Ongoing, 2 projects".
function BoardCount({ count }: { count: number }) {
  return (
    <span className="board-count">
      <span className="sr-only">, </span>
      {count}
      <span className="sr-only"> {count === 1 ? 'project' : 'projects'}</span>
    </span>
  );
}

// Each station owns a quarter of the sheet, with the archive in the last.
// Entries carry their slug as an id so About's skill links can land on them.
export default function Projects() {
  return (
    <main id="main">
      <div className="row projects-head">
        <h1 className="page-title projects-title">Projects</h1>
      </div>

      <div className="row board">
        {statusOrder.map((status) => {
          const projects = featuredProjects.filter((p) => p.status === status);
          return (
            <section key={status} className="board-col" aria-labelledby={`${status}-title`}>
              <h2 id={`${status}-title`} className="board-head">
                {statusLabels[status]}
                <BoardCount count={projects.length} />
              </h2>
              {projects.length > 0 && (
                <ul>
                  {projects.map((project) => (
                    <li key={project.slug} id={project.slug} className="entry">
                      <h3 className="entry-title">{project.title}</h3>
                      <p className="entry-desc">{project.description}</p>
                      <div className="entry-meta">
                        <ProjectMeta project={project} />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        <section className="board-col" aria-labelledby="archive-title">
          <h2 id="archive-title" className="board-head board-head--archive">
            Archive
            <BoardCount count={archivedProjects.length} />
          </h2>
          <ul className="archive-list">
            {archivedProjects.map((project) => (
              <li key={project.slug} id={project.slug} className="archive-entry">
                <a href={project.href} className="link-strong archive-link">
                  {project.title}
                  <ArrowUpRightIcon width={14} height={14} />
                </a>
                <p className="archive-desc">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
