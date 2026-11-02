'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="site-nav-list">
      {pages.map((page) => (
        <li key={page.href}>
          <Link
            href={page.href}
            className="nav-link"
            aria-current={pathname === page.href ? 'page' : undefined}
          >
            {page.label}
          </Link>
        </li>
      ))}
      {/* Contact closes every page in the site footer, so this stays in-page. */}
      <li>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}
