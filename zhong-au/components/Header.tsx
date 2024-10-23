// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Jason Zhong
      </Link>
      <nav>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/projects" className="mx-2">
          Projects
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <a
          href="https://github.com/ZhongDev"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 inline-block"
        >
            <Image src="/images/github-mark.svg" alt="GitHub" width={24} height={24} className="h-6 w-6 inline dark:hidden" />
            <Image src="/images/github-mark-white.svg" alt="GitHub" width={24} height={24} className="h-6 w-6 hidden dark:inline" />
        </a>
      </nav>
    </header>
  );
}
