# ZhongAU Personal Website

Welcome to the repository for my personal website hosted at [zhong.au](https://zhong.au). This website showcases my programming projects, experience, and provides a way to contact me.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
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
docker run -p <port>:3000 zhong-au
```

## License

This project is open source and available under the [MIT License](https://github.com/ZhongDev/ZhongAU/blob/main/LICENSE).
