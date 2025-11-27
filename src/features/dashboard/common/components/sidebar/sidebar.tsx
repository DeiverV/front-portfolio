import { Link, linkOptions } from '@tanstack/react-router'
import {
  PiCatLight,
  PiCurrencyDollar,
  PiGithubLogo,
  PiLinkedinLogo,
} from 'react-icons/pi'
import { TbX } from 'react-icons/tb'
import { useShallow } from 'zustand/react/shallow'

import { useSidebarStore } from '../../store/sidebar-store'

const moduleLinks = linkOptions([
  {
    to: '/dashboard/linkedin',
    label: 'LinkedIn',
    icon: PiLinkedinLogo,
  },
  {
    to: '/dashboard/github',
    label: 'Github',
    icon: PiGithubLogo,
  },
  {
    to: '/dashboard/exchanges',
    label: 'Exchanges',
    icon: PiCurrencyDollar,
  },
  {
    to: '/dashboard/cats',
    label: 'Cats',
    icon: PiCatLight,
  },
])

export const Sidebar = () => {
  const { toggle, isOpen, close } = useSidebarStore(
    useShallow((state) => state),
  )

  return (
    <aside
      className={`h-screen top-0 left-0 bg-neutral border-r border-text z-100 duration-200  ${isOpen ? 'fixed block w-full sm:w-[200px] sm:sticky' : 'hidden sm:block sm:sticky'} `}
      aria-expanded={isOpen}
    >
      <nav
        className={`relative flex flex-col items-center gap-2 duration-300 ${isOpen ? 'w-full sm:w-[200px] pr-2' : 'w-[65px]'}`}
      >
        <Link
          to="/"
          viewTransition
          className="text-4xl font-bold mt-2 text-center mb-4"
        >
          .d
        </Link>
        <button
          onClick={toggle}
          aria-label="Close Sidebar"
          className="sm:hidden"
        >
          <TbX size={24} className="absolute right-5 top-4" />
        </button>
        {moduleLinks.map((link) => (
          <Link
            {...link}
            key={link.to}
            viewTransition
            onClick={close}
            className={`flex gap-1 items-center font-bold duration-300 text-sm ${isOpen ? 'w-[180px] px-4 ml-2' : 'w-[50px] ml-1 justify-center '} hover:bg-text/10 py-2 rounded-default`}
            aria-label={link.label}
            activeProps={{
              style: {
                background: 'var(--color-primary)',
                color: 'white',
              },
            }}
          >
            {({ isActive }) => (
              <>
                {link.icon.call(null, {
                  className: isActive ? 'fill-white' : 'fill-text',
                  size: 24,
                })}
                {isOpen && link.label}
              </>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
