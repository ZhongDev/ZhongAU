import type { Project } from '@/content/projects';
import { ArrowUpRightIcon } from './Icons';

// Tags, then the project's links or a note that it has none. Shared by
// Home's project rows and the Projects board so the two never drift.
export default function ProjectMeta({ project }: { project: Project }) {
  return (
    <>
      <ul className="project-tags" aria-label="Built with">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {project.links.length > 0 ? (
        <ul className="project-links">
          {project.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="link-strong">
                {link.label}
                <ArrowUpRightIcon width={14} height={14} />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="project-nolink">No public repo</p>
      )}
    </>
  );
}
