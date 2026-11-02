// About page copy. Source of truth: docs/content-brief.md.
// Experience stays general: never name employers.

// A paragraph is a run of plain text and emphasised words.
export type Inline = string | { em: string };

export const bio: Inline[][] = [
  [
    "I studied Computer Science at UNSW, graduating with Distinction in 2024. I've spent the years since working across the stack: running networks and Windows fleets on-site, building web apps, and leading the build of an in-house work health and safety app used on real construction sites, from idea to production.",
  ],
  [
    "Shipping software end to end on my own taught me a lot about what it takes to get something real into people's hands. It also made me appreciate how much faster you grow alongside experienced engineers, and I'm especially drawn to infrastructure, networking and latency, where the systems underneath ",
    { em: 'are' },
    ' the product.',
  ],
  [
    "In my own time I'm drawn to local-first, privacy-respecting software. I run a Proxmox homelab handling home automation, solar and battery optimisation, document processing and media. I also experiment with running LLMs locally, and I'm learning Swift and SwiftUI to build native apps for macOS and iOS. I care about detail, and I'd always rather read the primary source than trust a summary of it.",
  ],
  [
    'I speak English, Mandarin and Japanese. Away from the keyboard I cook, detail cars, and occasionally 3D print something I probably should have just bought.',
  ],
];

export const education = {
  institution: 'UNSW Sydney',
  degree: 'BSc Computer Science (Distinction)',
  from: '2021',
  to: '2024',
};

export const experience = [
  {
    area: 'IT and systems administration',
    detail: 'on-site networking, Windows fleet upgrades, tech support',
  },
  {
    area: 'Full-stack web development',
    detail: 'Node.js/TypeScript backends, React frontends',
  },
  {
    area: 'Internal tools',
    detail: 'led an in-house work site safety app from idea to production',
  },
];

// `lang` marks the native script so CJK glyphs render in the right form.
export const languages: { name: string; native?: { text: string; lang: string } }[] = [
  { name: 'English' },
  { name: 'Mandarin Chinese', native: { text: '中文', lang: 'zh' } },
  { name: 'Japanese', native: { text: '日本語', lang: 'ja' } },
];

export interface Skill {
  name: string;
  // Other names the skill goes by in project tags or archive descriptions.
  // Defaults to the skill's own name.
  matches?: string[];
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript/JavaScript', matches: ['TypeScript', 'JavaScript'] },
      { name: 'Swift' },
      { name: 'Python' },
      { name: 'C/C++', matches: ['C++'] },
      { name: 'SQL' },
      { name: 'Java' },
    ],
  },
  {
    name: 'Web & backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Fastify' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Vite' },
      { name: 'PostgreSQL (incl. pgvector)', matches: ['PostgreSQL', 'pgvector'] },
      { name: 'Electron' },
    ],
  },
  {
    name: 'Apple platforms',
    skills: [
      { name: 'SwiftUI' },
      { name: 'SwiftData/Core Data', matches: ['SwiftData', 'Core Data'] },
      { name: 'CloudKit' },
      { name: 'MLX Swift' },
    ],
  },
  {
    name: 'Infrastructure',
    skills: [
      { name: 'Linux' },
      { name: 'Proxmox VE', matches: ['Proxmox'] },
      { name: 'Docker/Compose', matches: ['Docker'] },
      { name: 'Tailscale' },
      { name: 'UniFi networking', matches: ['UniFi'] },
      { name: 'TrueNAS' },
      { name: 'Home Assistant' },
    ],
  },
  {
    name: 'AI / ML',
    skills: [
      {
        name: 'Local LLM inference (MLX, Ollama, LM Studio)',
        matches: ['MLX', 'Ollama', 'LM Studio'],
      },
      { name: 'Embeddings' },
      { name: 'LLM classification pipelines' },
    ],
  },
  {
    name: 'Hardware',
    skills: [
      { name: 'Arduino' },
      { name: 'Raspberry Pi' },
      { name: 'Electronics' },
      { name: '3D printing' },
    ],
  },
];
