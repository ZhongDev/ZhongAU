import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ground: 'var(--ground)',
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
          3: 'var(--ink-3)',
        },
        rule: 'var(--rule)',
        hair: 'var(--hair)',
        accent: {
          DEFAULT: 'var(--accent)',
          ink: 'var(--accent-ink)',
        },
      },
      fontFamily: {
        // Latin from Archivo; Chinese and Japanese fall back to system CJK faces.
        sans: [
          'var(--font-archivo)',
          'PingFang SC',
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'Noto Sans CJK SC',
          'Noto Sans JP',
          'Microsoft YaHei',
          'Yu Gothic',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
