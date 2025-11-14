import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { IconContext } from 'react-icons'
import { internalLinks } from '../-shared.data'

export const Header = () => {
  const [scrollY, setScrollY] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight

      setScrollY(currentScroll)
      setProgress((currentScroll / maxScroll) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrolled = scrollY > 300 && progress < 100

  return (
    <header
      className={`fixed w-full top-0 z-50 flex items-center justify-between px-[5%] h-16 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? ' bg-black/5  backdrop-blur-2xl' : ' bg-transparent'
      }`}
    >
      <figure className="font-semibold text-4xl transition-colors duration-300 text-white">
        .d
      </figure>

      <nav className="flex gap-8">
        <IconContext.Provider
          value={{
            size: '20',
            style: {
              fill: 'white',
            },
          }}
        >
          {internalLinks.map((link) => (
            <Link
              {...link}
              key={link.to}
              disabled
              className="flex gap-1 items-center font-bold text-shadow-2xs transition-colors duration-300 text-lg text-white text-shadow-black/20"
            >
              {link.label}
            </Link>
          ))}
        </IconContext.Provider>
      </nav>

      <div
        className="absolute top-0 left-0 h-1 bg-primary transition-[width] duration-100 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </header>
  )
}
