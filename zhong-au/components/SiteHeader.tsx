import Link from 'next/link';
import { site } from '@/content/site';
import { GitHubMark } from './Icons';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

export default function SiteHeader() {
  return (
    <header className="row site-header">
      <Link href="/" className="site-name">
        {site.name}
      </Link>
      <nav className="site-nav" aria-label="Main">
        <NavLinks />
      </nav>
      <div className="site-utils">
        <a href={site.github} className="icon-button utils-github">
          <GitHubMark width={18} height={18} />
          <span className="max-lg:sr-only">GitHub</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
