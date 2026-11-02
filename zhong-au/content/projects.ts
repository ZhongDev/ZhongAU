// Curated project list. Source of truth: docs/content-brief.md.
// Forks, ZhongDev.github.io and the university capstone repo are
// deliberately excluded.

export type ProjectStatus = 'in-progress' | 'shipped' | 'ongoing';

// Fixed display order: every status keeps the same position everywhere.
export const statusOrder: ProjectStatus[] = ['ongoing', 'in-progress', 'shipped'];

export const statusLabels: Record<ProjectStatus, string> = {
  'in-progress': 'In progress',
  shipped: 'Shipped',
  ongoing: 'Ongoing',
};

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  // Short name used where the project is referenced, e.g. from a skill.
  shortTitle: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  links: ProjectLink[];
  onHome: boolean;
}

export const featuredProjects: Project[] = [
  {
    slug: 'homelab-energy',
    title: 'Homelab & home energy optimisation',
    shortTitle: 'Homelab',
    status: 'ongoing',
    description:
      "A Proxmox host running Home Assistant and a stack of self-hosted services. The centrepiece is a linear-programming optimiser that schedules a home solar and battery system and EV charging against live wholesale electricity prices. It bridges the optimiser's output to inverter control over Modbus, using setpoints that avoid wearing out the inverter's storage. All of it sits on a UniFi network with 2.5GbE where it matters.",
    tags: ['Proxmox', 'Home Assistant', 'Modbus', 'Linear programming', 'UniFi'],
    links: [],
    onHome: true,
  },
  {
    slug: 'document-pipeline',
    title: 'Local document pipeline',
    shortTitle: 'Document pipeline',
    status: 'ongoing',
    description:
      "Self-hosted paperless-ngx with vision-model OCR and automatic metadata classification. It's powered by a local LLM reached over Tailscale, so documents never leave the network.",
    tags: ['paperless-ngx', 'Ollama', 'Vision OCR', 'Tailscale'],
    links: [],
    onHome: true,
  },
  {
    slug: 'youtube-karaoke-app',
    title: 'YouTube Karaoke App',
    shortTitle: 'Karaoke app',
    status: 'in-progress',
    description:
      'A desktop karaoke app with a YouTube player, a synced-lyrics overlay and a song queue, supporting English, Japanese and Korean lyrics. It fetches existing synced lyrics first and falls back to local forced alignment. Successor to Youtube-Karaoke-Together.',
    tags: ['Electron', 'TypeScript', 'Lyrics alignment'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ZhongDev/Youtube-Karaoke-App' },
    ],
    onHome: true,
  },
  {
    slug: 'e-ink-dashboards',
    title: 'E-ink home dashboards',
    shortTitle: 'E-ink dashboards',
    status: 'in-progress',
    description:
      'Multi-panel e-ink displays showing electricity prices, schedules, network stats and weather. Each panel is rendered on a server and pushed to the display.',
    tags: ['E-ink', 'Server-side rendering', 'Home Assistant'],
    links: [],
    onHome: false,
  },
  {
    slug: 'webcon',
    title: 'webcon-sdvx / maimai-webcon',
    shortTitle: 'webcon',
    status: 'shipped',
    description:
      'Turns a phone or iPad into a controller for the rhythm games Sound Voltex and maimai.',
    tags: ['JavaScript', 'Python', 'WebSockets'],
    links: [
      { label: 'webcon-sdvx', href: 'https://github.com/ZhongDev/webcon-sdvx' },
      { label: 'maimai-webcon', href: 'https://github.com/ZhongDev/maimai-webcon' },
    ],
    onHome: true,
  },
  {
    slug: 'ardducky',
    title: 'Ardducky',
    shortTitle: 'Ardducky',
    status: 'shipped',
    description:
      'An Arduino-based "BadUSB" device (a USB stick that types like a keyboard) for authorised penetration testing.',
    tags: ['Arduino', 'C++', 'Security'],
    links: [{ label: 'GitHub', href: 'https://github.com/ZhongDev/Ardducky' }],
    onHome: false,
  },
];

export const homeProjects = featuredProjects.filter((p) => p.onHome);

// Meta description for /projects.
export const projectsDescription =
  'Projects by Jason Zhong, from a homelab energy optimiser and a local document pipeline to desktop apps, e-ink dashboards and an archive of older repos.';

export interface ArchivedProject {
  slug: string;
  title: string;
  description: string;
  href: string;
}

const repo = (name: string) => `https://github.com/ZhongDev/${name}`;
const archived = (name: string, description: string): ArchivedProject => ({
  slug: name.toLowerCase(),
  title: name,
  description,
  href: repo(name),
});

export const archivedProjects: ArchivedProject[] = [
  archived('Youtube-Karaoke-Together', 'YouTube queueing for group karaoke sessions'),
  archived('Redux-Music-Bot', 'Discord music bot'),
  archived('d20-bot', 'Discord dice bot for D&D'),
  archived('discord-sandwich-scheduler-bot', 'Discord bot that orders a sandwich every day'),
  archived('Oxygen-Ordering-System', 'Restaurant order management system'),
  archived('node-rpi-garage-ui', 'Raspberry Pi Zero W garage door opener UI'),
  archived('http-locked-image', 'Password-protected image host in Node.js'),
  archived('Modular-Web-Utilities', 'Extensible web utilities toolbox in React'),
  archived('Dine-and-Discover-checker', 'Eligibility checker for the NSW Dine & Discover vouchers'),
  archived('webcon-sdvx-python', 'Python server for webcon-sdvx'),
];
