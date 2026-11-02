// Site-wide copy. Source of truth: docs/content-brief.md.

export const site = {
  name: 'Jason Zhong',
  title: 'Jason Zhong — Engineer, Sydney',
  description:
    'Sydney-based engineer working across infrastructure, networking, native Apple apps, homelabs and local-first AI.',
  url: 'https://zhong.au',
  location: 'Sydney, Australia',
  email: 'jason@zhong.au',
  github: 'https://github.com/ZhongDev',
  sourceRepo: 'https://github.com/ZhongDev/ZhongAU',
};

// The first tagline is the default; the others are kept as alternatives.
export const taglines = [
  'I build fast, private software that runs on hardware I own.',
  'Engineer, tinkerer, self-hoster.',
  'I build things that run close to the metal: networks, homelabs, native apps and local AI.',
] as const;

export const tagline = taglines[0];

export const subLine =
  'Sydney-based engineer and UNSW Computer Science graduate, working across infrastructure, networking and software.';

export const aboutBlurb =
  "I'm Jason, a Sydney-based engineer who started writing code as a kid and never really stopped. I've worked across systems administration, full-stack web development and building internal tools from scratch, and these days I'm most interested in infrastructure and networking. Outside work I run a homelab that's grown well beyond what's reasonable, I experiment with local LLMs, and I build tools that keep my data on my own machines.";

// Update occasionally. `date` is ISO year-month; `label` is how it displays.
export const now = {
  date: '2026-11',
  label: 'Nov 2026',
  text: 'Moving deeper into infrastructure and networking, building native macOS/iOS apps in SwiftUI, and trying to decide whether the homelab needs a dedicated inference box. It does.',
};

export const contactIntro =
  "Email is the best way to reach me. I'm also on GitHub.";
