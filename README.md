# ZhongAU Personal Website

Welcome to the repository for my personal website hosted at [zhong.au](https://zhong.au). This website showcases my programming projects, experience, and provides a way to contact me.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Building for Docker](#building-for-docker)
  - [Running on Docker without building](#running-on-docker-without-building)
  - [Publishing an update to Docker Hub](#publishing-an-update-to-docker-hub)
  - [Updating the server](#updating-the-server)
- [License](#license)
- [Contact](#contact)

## Features

- Responsive design for all devices
- Project showcase with links to GitHub repositories
- Dark mode support
- Contact page with email link
- SEO optimization with Next.js metadata
- Integration with GitHub API to display latest repositories

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZhongDev/ZhongAU.git
   cd ZhongAU/zhong-au
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to view the website.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm start
# or
yarn start
```

### Building for Docker

Create an optimized production build:

```bash
docker build -t zhong-au .
```

Start the production server:

```bash
docker run -p 127.0.0.1:<port>:3000 zhong-au
```

The `127.0.0.1:` prefix keeps the server reachable only from the host machine. Without it, Docker publishes the port on every network interface, and on Linux its iptables rules bypass firewalls such as `ufw`. Only drop the prefix if you deliberately want the server exposed directly.

### Running on Docker without building

This docker image is hosted on the Docker Hub, and can be deployed directly.

Firstly install docker on the target machine, following the [offical docker documentation](https://docs.docker.com/engine/install/)

Then to download the server, run

```bash
docker pull zhongau/zhong-au:latest
```

And to start the server on port 3000, run

```bash
docker run -p 127.0.0.1:3000:3000 zhongau/zhong-au:latest
```

To start the server detatched and automatically restarting:

```bash
docker run -d --restart unless-stopped --name zhong-au -p 127.0.0.1:3000:3000 zhongau/zhong-au
```

To check docker containers status:

```bash
docker ps
```

To stop detached server:

```bash
docker stop zhong-au
```

(If the container was started without `--name`, use its ID from `docker ps` instead.)

It is recommended to run this behind a reverse proxy such as nginx to enable https, pointing it at the local port:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

### Publishing an update to Docker Hub

The image lives at [`zhongau/zhong-au`](https://hub.docker.com/r/zhongau/zhong-au) on Docker Hub. There is no CI, so updates are built and pushed by hand. Run these from the `zhong-au` directory (the one containing the `Dockerfile`).

1. **Log in** with a Docker Hub account that can push to `zhongau` (once per machine). Use a personal access token from Docker Hub → Account settings → Personal access tokens as the password:

   ```bash
   docker login
   ```

2. **Build and push** for both x86 and ARM servers:

   ```bash
   docker buildx build --platform linux/amd64,linux/arm64 -t zhongau/zhong-au:latest --push .
   ```

   Don't use plain `docker build` + `docker push` on an Apple Silicon Mac. That produces an arm64-only image, and an x86 server will fail to run it with `exec format error`.

   If buildx reports that multi-platform builds aren't supported, run `docker buildx create --use` once, then retry.

3. **Check** that both platforms were published:

   ```bash
   docker buildx imagetools inspect zhongau/zhong-au:latest
   ```

### Updating the server

On the server, pull the new image and replace the running container:

```bash
docker pull zhongau/zhong-au:latest
docker stop zhong-au && docker rm zhong-au
docker run -d --restart unless-stopped --name zhong-au -p 127.0.0.1:3000:3000 zhongau/zhong-au
```

If the old container was started without `--name`, stop and remove it by its ID from `docker ps` instead. Afterwards, `docker image prune` deletes the previous image.

## License

This project is open source and available under the [GPL-3.0 License](https://github.com/ZhongDev/ZhongAU/blob/main/LICENSE).
