// Links a skill to the projects that show it in use, so the About page can
// point from a claim to its proof. Featured projects match on their tags;
// archive projects match when their one-line description names the tech.
import type { Skill } from './about';
import { archivedProjects, featuredProjects } from './projects';

export interface SkillRef {
  label: string;
  href: string;
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Whole-word match that also respects names like "Node.js" and "C++".
const mentions = (text: string, term: string) =>
  new RegExp(`(?<![\\w.+])${escape(term)}(?![\\w+])`, 'i').test(text);

export function skillRefs(skill: Skill): SkillRef[] {
  const terms = (skill.matches ?? [skill.name]).map((t) => t.toLowerCase());
  const featured = featuredProjects
    .filter((p) => p.tags.some((tag) => terms.includes(tag.toLowerCase())))
    .map((p) => ({ label: p.shortTitle, href: `/projects#${p.slug}` }));
  const archived = archivedProjects
    .filter((p) => terms.some((term) => mentions(p.description, term)))
    .map((p) => ({ label: p.title, href: `/projects#${p.slug}` }));
  return [...featured, ...archived];
}
