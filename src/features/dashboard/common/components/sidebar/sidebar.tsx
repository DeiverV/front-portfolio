import { Link, linkOptions } from '@tanstack/react-router'
import { IconContext } from 'react-icons'
import {
  PiCatLight,
  PiCurrencyDollar,
  PiGithubLogo,
  PiLinkedinLogo,
} from 'react-icons/pi'

import { useSidebarStore } from '../../store/sidebar-store'

const moduleLinks = linkOptions([
  {
    to: '/dashboard/linkedin',
    label: 'Linkedin',
    icon: <PiLinkedinLogo />,
  },
  {
    to: '/dashboard/github',
    label: 'Github',
    icon: <PiGithubLogo />,
  },
  {
    to: '/dashboard/cats',
    label: 'Cats',
    icon: <PiCatLight />,
  },
  {
    to: '/dashboard/exchanges',
    label: 'Exchanges',
    icon: <PiCurrencyDollar />,
  },
])

export const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <aside className="min-h-full sticky top-0 left-0 bg-neutral border-r border-text z-50">
      <nav
        className={`flex flex-col gap-2 duration-300 ${isOpen ? 'w-[200px]' : 'w-[65px]'}`}
        aria-expanded={isOpen}
      >
        <IconContext.Provider
          value={{
            size: '24',
            style: {
              fill: 'var(--color-text)',
            },
          }}
        >
          <Link
            to="/"
            viewTransition
            className="text-4xl font-bold mt-2 text-center mb-4"
          >
            .d
          </Link>
          {moduleLinks.map((link) => (
            <Link
              {...link}
              key={link.to}
              viewTransition
              className={`flex gap-1 items-center font-bold duration-300 text-sm ${isOpen ? 'w-[180px] px-4 ml-2' : 'w-[60px] ml-1 justify-center px-2'} hover:bg-text/10 py-2 rounded-default`}
              aria-label={link.label}
            >
              {link.icon}
              {isOpen && link.label}
            </Link>
          ))}
        </IconContext.Provider>
      </nav>
    </aside>
  )
}
