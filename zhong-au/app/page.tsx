import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Hi, I&apos;m Jason!</h1>
      <p className="mt-2">
        A passionate programmer specializing in NodeJS.
      </p>
      <div className="mt-4">
        <Link href="/projects" className="text-blue-500">
          View My Projects
        </Link>
      </div>
    </main>
  );
}