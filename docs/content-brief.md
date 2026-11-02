# zhong.au — Content Brief

Source of truth for all site copy. Where a section offers options, the first one is the default.

---

## Site meta

- **Title:** Jason Zhong — Engineer, Sydney
- **Description:** Sydney-based engineer working across infrastructure, networking, native Apple apps, homelabs and local-first AI.
- **GitHub:** https://github.com/ZhongDev
- **Location (as displayed):** Sydney, Australia

---

## Home

### Tagline (pick one)

1. I build fast, private software that runs on hardware I own.
2. Engineer, tinkerer, self-hoster.
3. I build things that run close to the metal: networks, homelabs, native apps and local AI.

### Sub-line

Sydney-based engineer and UNSW Computer Science graduate, working across infrastructure, networking and software.

### Short about blurb

> I'm Jason, a Sydney-based engineer who started writing code as a kid and never really stopped. I've worked across systems administration, full-stack web development and building internal tools from scratch, and these days I'm most interested in infrastructure and networking. Outside work I run a homelab that's grown well beyond what's reasonable, I experiment with local LLMs, and I build tools that keep my data on my own machines.

### Now (date-stamped, update occasionally)

> **Now (Nov 2026):** Moving deeper into infrastructure and networking, building native macOS/iOS apps in SwiftUI, and trying to decide whether the homelab needs a dedicated inference box. It does.

---

## About

### Bio

> I studied Computer Science at UNSW, graduating with Distinction in 2024. I've spent the years since working across the stack: running networks and Windows fleets on-site, building web apps, and leading the build of an in-house work health and safety app used on real construction sites, from idea to production.
>
> Shipping software end to end on my own taught me a lot about what it takes to get something real into people's hands. It also made me appreciate how much faster you grow alongside experienced engineers, and I'm especially drawn to infrastructure, networking and latency, where the systems underneath *are* the product.
>
> In my own time I'm drawn to local-first, privacy-respecting software. I run a Proxmox homelab handling home automation, solar and battery optimisation, document processing and media. I also experiment with running LLMs locally, and I'm learning Swift and SwiftUI to build native apps for macOS and iOS. I care about detail, and I'd always rather read the primary source than trust a summary of it.
>
> I speak English, Mandarin and Japanese. Away from the keyboard I cook, detail cars, and occasionally 3D print something I probably should have just bought.

### Education

- **UNSW Sydney** — BSc Computer Science (Distinction), 2021–2024

### Experience (general, no employers)

- IT and systems administration: on-site networking, Windows fleet upgrades, tech support
- Full-stack web development: Node.js/TypeScript backends, React frontends
- Internal tools: led an in-house work site safety app from idea to production

### Skills

- **Languages:** TypeScript/JavaScript, Swift, Python, C/C++, SQL, Java
- **Web & backend:** Node.js, Fastify, React, Next.js, Vite, PostgreSQL (incl. pgvector), Electron
- **Apple platforms:** SwiftUI, SwiftData/Core Data, CloudKit, MLX Swift
- **Infrastructure:** Linux, Proxmox VE, Docker/Compose, Tailscale, UniFi networking, TrueNAS, Home Assistant
- **AI / ML:** Local LLM inference (MLX, Ollama, LM Studio), embeddings, LLM classification pipelines
- **Hardware:** Arduino, Raspberry Pi, electronics, 3D printing

### Languages spoken

English, Mandarin Chinese (中文), Japanese (日本語)

---

## Projects

### Featured

| # | Project | Status | Links |
|---|---------|--------|-------|
| 1 | Homelab & home energy optimisation | Ongoing | No public repo |
| 2 | Local document pipeline | Ongoing | No public repo |
| 3 | YouTube Karaoke App | In progress | https://github.com/ZhongDev/Youtube-Karaoke-App |
| 4 | E-ink home dashboards | In progress | No public repo |
| 5 | webcon-sdvx / maimai-webcon | Shipped | https://github.com/ZhongDev/webcon-sdvx, https://github.com/ZhongDev/maimai-webcon |
| 6 | Ardducky | Shipped | https://github.com/ZhongDev/Ardducky |

**1. Homelab & home energy optimisation**
A Proxmox host running Home Assistant and a stack of self-hosted services. The centrepiece is a linear-programming optimiser that schedules a home solar and battery system and EV charging against live wholesale electricity prices. It bridges the optimiser's output to inverter control over Modbus, using setpoints that avoid wearing out the inverter's storage. All of it sits on a UniFi network with 2.5GbE where it matters.
*Tags:* Proxmox, Home Assistant, Modbus, Linear programming, UniFi

**2. Local document pipeline**
Self-hosted paperless-ngx with vision-model OCR and automatic metadata classification. It's powered by a local LLM reached over Tailscale, so documents never leave the network.
*Tags:* paperless-ngx, Ollama, Vision OCR, Tailscale

**3. YouTube Karaoke App**
A desktop karaoke app with a YouTube player, a synced-lyrics overlay and a song queue, supporting English, Japanese and Korean lyrics. It fetches existing synced lyrics first and falls back to local forced alignment. Successor to Youtube-Karaoke-Together.
*Tags:* Electron, TypeScript, Lyrics alignment

**4. E-ink home dashboards**
Multi-panel e-ink displays showing electricity prices, schedules, network stats and weather. Each panel is rendered on a server and pushed to the display.
*Tags:* E-ink, Server-side rendering, Home Assistant

**5. webcon-sdvx / maimai-webcon**
Turns a phone or iPad into a controller for the rhythm games Sound Voltex and maimai.
*Tags:* JavaScript, Python, WebSockets

**6. Ardducky**
An Arduino-based "BadUSB" device (a USB stick that types like a keyboard) for authorised penetration testing.
*Tags:* Arduino, C++, Security

### Archive (compact list, link to GitHub)

- Youtube-Karaoke-Together: YouTube queueing for group karaoke sessions
- Redux-Music-Bot: Discord music bot
- d20-bot: Discord dice bot for D&D
- discord-sandwich-scheduler-bot: Discord bot that orders a sandwich every day
- Oxygen-Ordering-System: restaurant order management system
- node-rpi-garage-ui: Raspberry Pi Zero W garage door opener UI
- http-locked-image: password-protected image host in Node.js
- Modular-Web-Utilities: extensible web utilities toolbox in React
- Dine-and-Discover-checker: eligibility checker for the NSW Dine & Discover vouchers
- webcon-sdvx-python: Python server for webcon-sdvx

### Do not list

Forks (argon-design-system, MagiskOnWSA, MaiSense.API), ZhongDev.github.io, the university capstone repo.

---

## Contact

> Email is the best way to reach me. I'm also on GitHub.

- **Email:** jason@zhong.au
- **GitHub:** https://github.com/ZhongDev
