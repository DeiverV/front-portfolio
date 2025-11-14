# DeiberV — Front Portfolio

<!-- Badges -->
[![Last commit](https://img.shields.io/github/last-commit/DeiverV/front-portfolio)](https://github.com/DeiverV/front-portfolio)
[![Stars](https://img.shields.io/github/stars/DeiverV/front-portfolio?style=social)](https://github.com/DeiverV/front-portfolio)
[![Issues](https://img.shields.io/github/issues/DeiverV/front-portfolio)](https://github.com/DeiverV/front-portfolio/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-FFCB2B?logo=vite&logoColor=black)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)

**Description:** My personal front-end portfolio showcasing projects, experience, and contact information.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, TanStack Router, TanStack Query

**Getting Started**

- **Install dependencies:** `pnpm install`
- **Run dev server:** `pnpm dev`
- **Build production:** `pnpm build`
- **Preview production build:** `pnpm serve`
- **Run tests:** `pnpm test`
- **Lint:** `pnpm lint` **Format:** `pnpm format` **Check:** `pnpm check`

**Project layout**

- **`src/`**: application source
- **`public/`**: static assets (icons, `manifest.json`, fonts)
- **`src/routes/`**: file-based routes (see `src/routes/__root.tsx`)
- **`src/styles.css`**: project CSS + font-face declarations

**Fonts**

- Custom fonts are included under `public/fonts/` and referenced in `src/styles.css`.

**Development Notes**

- Dev server runs on port 3000 by default: `pnpm dev`
- Vite + TypeScript build: `pnpm build` (also runs `tsc`)
- Add new routes in `src/routes/` — file-based routing will pick them up

**Deployment**

- Output from `pnpm build` is in `dist/`. Serve with static hosting (Netlify, Vercel, GitHub Pages, or any static file server).


**Contact**

- Author: DeiberV
- Project: `front-portfolio`


## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Linting & Formatting

This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
pnpm lint
pnpm format
pnpm check
```

## Routing

This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.
