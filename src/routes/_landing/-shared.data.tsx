import { linkOptions } from '@tanstack/react-router'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { PiPaintBrushDuotone } from 'react-icons/pi'

export const internalLinks = linkOptions([
  {
    to: '/dashboard',
    from: '/',
    label: (
      <>
        <MdOutlineSpaceDashboard />
        Dashboard
      </>
    ),
  },
  {
    to: '/design-system',
    from: '/',
    label: (
      <>
        <PiPaintBrushDuotone />
        Design
      </>
    ),
  },
])

export const technologies = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    label: 'TypeScript',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    label: 'JavaScript',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg',
    label: 'Astro',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    label: 'React',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    label: 'Tailwind',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg',
    label: 'Zustand',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    label: 'Vite',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    label: 'Express',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
    label: 'NestJS',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
    label: 'Jest',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    label: 'Postman',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    label: 'Figma',
  },
]

export const experiences = [
  {
    company: 'Bpo Labs',
    role: 'Frontend Developer',
    period: 'Nov 2022 - Present',
    technologies: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        label: 'TypeScript',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg',
        label: 'Astro',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        label: 'React',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        label: 'Tailwind',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
        label: 'NestJS',
      },
    ],
  },
  {
    company: 'Bpo Labs',
    role: 'Programmer',
    period: 'Aug 2022 - Nov 2022',
    technologies: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        label: 'JavaScript',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        label: 'React',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        label: 'CSS3',
      },
    ],
  },
  {
    company: 'Naser LTDA',
    role: 'Software Developer',
    period: 'Jan 2022 - Jul 2022',
    technologies: [
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        label: 'JavaScript',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
        label: 'PHP',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        label: 'MySQL',
      },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        label: 'CSS3',
      },
    ],
  },
]
