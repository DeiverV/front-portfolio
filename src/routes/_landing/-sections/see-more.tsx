import { IconContext } from 'react-icons'
import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { internalLinks } from '../-shared.data'

export const SeeMore = () => {
  const { t } = useTranslation('landing')

  return (
    <article
      className="h-screen flex flex-col justify-center items-center bg-primary shadow-[0px_0px_40px_40px_var(--color-primary)] gap-5"
      aria-description="See More"
    >
      <h3 className="text-6xl md:text-9xl font-bold text-secondary font-styled text-center">
        👀
        <br />
        {t('seeMore.title')}
      </h3>

      <p className="text-white font-bold md:text-lg text-center">
        {t('seeMore.description')}
      </p>

      <nav className="flex gap-2">
        <IconContext.Provider
          value={{
            size: '20',
            style: {
              fill: 'var(--color-secondary)',
            },
          }}
        >
          {internalLinks.map((link) => (
            <Link
              {...link}
              key={link.to}
              className="flex gap-1 text-white border-white border rounded-default w-[150px] py-1 items-center justify-center font-semibold transition-colors text-lg"
            >
              {link.label}
            </Link>
          ))}
        </IconContext.Provider>
      </nav>
    </article>
  )
}
