'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
  const stored = document.documentElement.dataset.theme;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

// Follows the system theme until the visitor picks one; the pick persists.
// The pre-paint script in app/layout.tsx applies a stored pick before render.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(currentTheme());
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => setTheme(currentTheme());
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const toggle = () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable (private mode); the switch still applies.
    }
    setTheme(next);
  };

  const label =
    theme === 'dark'
      ? 'Switch to light theme'
      : theme === 'light'
        ? 'Switch to dark theme'
        : 'Switch colour theme';

  return (
    <button
      type="button"
      className="icon-button"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <MoonIcon className="theme-icon-moon" width={18} height={18} />
      <SunIcon className="theme-icon-sun" width={18} height={18} />
    </button>
  );
}
