import Link from 'next/link';
import DispatchChart from '@/components/DispatchChart';
import { ArrowDownIcon, ArrowRightIcon } from '@/components/Icons';
import ProjectRow from '@/components/ProjectRow';
import { homeProjects, statusLabels, statusOrder } from '@/content/projects';
import { aboutBlurb, now, site, subLine, tagline } from '@/content/site';

export default function Home() {
  return (
    <main id="main">
      <section className="row hero" aria-labelledby="intro">
        <h1 id="intro" className="span-hero display">
          <strong>{site.name}.</strong> {tagline}
        </h1>
        <p className="span-sub hero-sub">{subLine}</p>
        <p className="span-sub hero-cta">
          <a href="#work" className="link-strong">
            See the work
            <ArrowDownIcon />
          </a>
        </p>
        <DispatchChart />
      </section>

      <section className="row section" aria-labelledby="about-title">
        <h2 id="about-title" className="span-label section-title">
          About
        </h2>
        <div className="span-body">
          <p className="lead">{aboutBlurb}</p>
          <p className="section-more">
            <Link href="/about" className="link-strong">
              More about me
              <ArrowRightIcon />
            </Link>
          </p>
        </div>
      </section>

      <section
        id="work"
        className="row section scroll-mt-4"
        aria-labelledby="work-title"
      >
        <h2 id="work-title" className="span-label section-title work-title">
          Selected work
        </h2>
        <div className="projects">
          <div className="projects-key" aria-hidden="true">
            {statusOrder.map((status) => (
              <span key={status}>{statusLabels[status]}</span>
            ))}
          </div>
          <ul className="projects-list">
            {homeProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </ul>
        </div>
        <p className="projects-more">
          <Link href="/projects" className="link-strong">
            All projects
            <ArrowRightIcon />
          </Link>
        </p>
      </section>

      <section className="row section now" aria-labelledby="now-title">
        <span className="now-marker" aria-hidden="true" />
        <h2 id="now-title" className="span-label section-title">
          Now
        </h2>
        <div className="now-body">
          <p className="now-stamp">
            <time dateTime={now.date}>{now.label}</time>
          </p>
          <p className="now-text lead">{now.text}</p>
        </div>
      </section>
    </main>
  );
}
