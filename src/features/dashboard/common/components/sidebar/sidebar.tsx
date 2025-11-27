import { Link, linkOptions } from '@tanstack/react-router'
import {
  PiCatLight,
  PiCurrencyDollar,
  PiGithubLogo,
  PiLinkedinLogo,
} from 'react-icons/pi'
import { TbX } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { useShallow } from 'zustand/react/shallow'

import { useSidebarStore } from '../../store/sidebar-store'

const moduleLinks = linkOptions([
  {
    to: '/dashboard/linkedin',
    labelKey: 'sidebar.links.linkedin',
    icon: PiLinkedinLogo,
  },
  {
    to: '/dashboard/github',
    labelKey: 'sidebar.links.github',
    icon: PiGithubLogo,
  },
  {
    to: '/dashboard/exchanges',
    labelKey: 'sidebar.links.exchanges',
    icon: PiCurrencyDollar,
  },
  {
    to: '/dashboard/cats',
    labelKey: 'sidebar.links.cats',
    icon: PiCatLight,
  },
])

export const Sidebar = () => {
  const { t } = useTranslation('dashboard')
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
          aria-label='Close sidebar'
          className="sm:hidden"
        >
          <TbX size={24} className="absolute right-5 top-4" />
        </button>
        {moduleLinks.map((link) => {
          const { labelKey, ...linkProps } = link as any
          return (
            <Link
              {...linkProps}
              key={link.to}
              viewTransition
              onClick={close}
              className={`flex gap-1 items-center font-bold duration-300 text-sm ${isOpen ? 'w-[180px] px-4 ml-2' : 'w-[50px] ml-1 justify-center '} hover:bg-text/10 py-2 rounded-default`}
              aria-label={t(labelKey || (link as any).label)}
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
                  {isOpen && t(labelKey || (link as any).label)}
                </>
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
