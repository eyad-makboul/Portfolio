<div align="center">

# 🚀 Eyad Makboul — Developer Portfolio

**A modern, fully responsive personal portfolio built with React, TypeScript, and Tailwind CSS.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Website-6366f1?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-woad-three-36.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev)

---

*A clean, animated, dark/light mode portfolio showcasing projects, skills, and experience — built with AI-assisted development workflows.*

</div>

---

## ✨ Features

- 🌗 **Dark / Light Mode** — Persistent theme toggle powered by React Context API and `localStorage`
- 🎬 **Smooth Animations** — Scroll-triggered entrance animations using Framer Motion and a custom `useInView` hook
- 📱 **Fully Responsive** — Mobile-first design with a collapsible hamburger menu on small screens
- 🧭 **Scroll-Aware Navbar** — Transparent on top, frosted-glass blur effect on scroll
- 🗂️ **8 Sections** — Home, About, Skills, Experience, Education, Projects, Tools, Contact
- 🛡️ **Graceful Image Fallback** — Custom `ImageWithFallback` component prevents broken image states
- ⚡ **Vite-Powered** — Lightning-fast dev server and optimized production builds

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Core Library | React 18 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Build Tool | Vite |
| Icons | Lucide React |
| Deployment | Vercel |
| AI Assistance | Built with the help of AI tools to accelerate development and apply best practices |

---

## 📁 Project Structure

```
src/
├── app/
│   └── components/
│       ├── Hero.tsx            # Landing section with animated profile image
│       ├── Navbar.tsx          # Fixed nav with scroll detection & mobile menu
│       ├── About.tsx           # Personal intro section
│       ├── Skills.tsx          # Technical skills display
│       ├── Experience.tsx      # Work experience timeline
│       ├── Education.tsx       # Academic background
│       ├── Projects.tsx        # Project cards with links
│       ├── Tools.tsx           # Developer tools & technologies grid
│       ├── Contact.tsx         # Contact form / links
│       ├── ThemeProvider.tsx   # Dark/light mode context & toggle logic
│       ├── hooks/
│       │   └── useInView.ts    # Custom scroll intersection observer hook
│       └── figma/
│           └── ImageWithFallback.tsx  # Image component with error fallback
├── App.tsx                     # Root layout — composes all sections
└── main.tsx                    # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/eyad-makboul/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🌍 Sections Overview

| Section | Description |
|---|---|
| **Hero** | Animated intro with profile photo, name, title, and CTA buttons |
| **About** | Brief personal background and developer story |
| **Skills** | Categorized technical skill cards |
| **Experience** | Work timeline — Air Force Software Engineer role |
| **Education** | University degree and certifications |
| **Projects** | Highlighted projects with live demo and GitHub links |
| **Tools** | Grid of developer tools (VS Code, Git, Docker, Postman…) |
| **Contact** | Ways to reach out |

---

## 🤖 AI-Assisted Development

This project was built with the assistance of AI tools throughout the development process — from scaffolding components and writing TypeScript types to refining animations and UI structure. This reflects a modern development workflow where knowing how to effectively use AI is itself a core skill.

---

## 📄 License

This project is open for viewing and inspiration.
Not licensed for redistribution or resale.

---

<div align="center">

*Built with ❤️ by Eyad Makboul — 2026*

</div>
