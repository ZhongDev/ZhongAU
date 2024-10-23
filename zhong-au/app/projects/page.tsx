// app/projects/page.tsx
import ProjectCard from '../../components/ProjectCard';

export const metadata = {
    title: 'Projects - Jason Zhong',
    description: 'Jason Zhong\'s Coding Projects',
};

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
}

export default async function Projects() {
  const res = await fetch('https://api.github.com/users/ZhongDev/repos', {
    // Configure caching
    next: { revalidate: 3600 },
  });
  const repos: Repo[] = await res.json();

  const sortedRepos = repos.sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });

  const projects = sortedRepos.map((repo) => ({
    id: repo.id,
    title: repo.name,
    description: repo.description || 'No description provided.',
    githubLink: repo.html_url,
  }));

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
