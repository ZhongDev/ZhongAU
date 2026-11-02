import { contactIntro, site } from '@/content/site';
import { ArrowUpRightIcon, GitHubMark } from './Icons';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <section
        id="contact"
        className="row section"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="span-label section-title">
          Contact
        </h2>
        <div className="span-wide">
          <p className="lead">{contactIntro}</p>
          <p className="contact-email">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="contact-github">
            <a href={site.github} className="link-strong">
              <GitHubMark width={18} height={18} />
              github.com/ZhongDev
            </a>
          </p>
        </div>
      </section>
      <div className="row colophon">
        <p className="footer-id">
          {site.name} · {site.location}
        </p>
        <p className="footer-source">
          <a href={site.sourceRepo} className="link-quiet">
            Site source
            <ArrowUpRightIcon width={14} height={14} />
          </a>
        </p>
      </div>
    </footer>
  );
}
