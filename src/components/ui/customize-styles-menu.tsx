import { useEffect, useState } from 'react'
import { LuPaintbrushVertical } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { i18nSetLang } from '@/i18n/i18n'

const color = ['blue', 'green', 'purple']

const rounded: Record<string, number> = {
  square: 0,
  light: 5,
  mid: 10,
  heavy: 20,
}

type Theme = 'light' | 'dark'

interface Props {
  alignment?: 'top' | 'bottom'
}

export const CustomizeStylesMenu = ({ alignment = 'top' }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('common')

  const [theme, setTheme] = useState<Theme>(() => {
    return (
      (localStorage.getItem('theme') as Theme | undefined) ||
      (document.body.getAttribute('data-theme') as Theme | undefined) ||
      'light'
    )
  })

  const [primary, setPrimary] = useState(() => {
    return (
      localStorage.getItem('primary') ||
      document.body.getAttribute('data-theme-primary') ||
      'blue'
    )
  })

  const [roundedValue, setRoundedValue] = useState(() => {
    return (
      localStorage.getItem('rounded') ||
      document.body.getAttribute('data-theme-rounded') ||
      'square'
    )
  })

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.setAttribute('data-theme-primary', primary)
    localStorage.setItem('primary', primary)
  }, [primary])

  useEffect(() => {
    document.body.setAttribute('data-theme-rounded', roundedValue)
    localStorage.setItem('rounded', roundedValue)
  }, [roundedValue])

  return (
    <div aria-description="Customize styles">
      <button
        className="h-8 w-8 rounded-full bg-primary border border-white flex items-center justify-center animate-[shake_1.5s_ease-in-out_infinite]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Customize styles"
      >
        <LuPaintbrushVertical size={22} className='stroke-white' />
      </button>

      {isOpen && (
        <div className={`absolute ${alignment === 'top' ? 'bottom-10' : 'top-10'} right-10 bg-neutral rounded-default p-4 border border-text`}>
          <p className="font-bold">{t('theme')}</p>
          <div className="flex gap-2">
            <button
              className="bg-neutral border border-text rounded-default p-1"
              onClick={() => setTheme('light')}
            >
              <MdLightMode size={24} className="fill-text" />
            </button>
            <button
              className="bg-neutral border border-text rounded-default p-1"
              onClick={() => setTheme('dark')}
            >
              <MdDarkMode size={24} className="fill-text" />
            </button>
          </div>

          <p className="font-bold mt-2">{t('language')}</p>
          <div className="flex gap-2">
            <button
              className="h-8 w-8 rounded-full border font-bold"
              onClick={() => i18nSetLang('en')}
            >
              En
            </button>
            <button
              className="h-8 w-8 rounded-full border font-bold"
              onClick={() => i18nSetLang('es')}
            >
              Es
            </button>
          </div>

          <p className="font-bold mt-2">{t('primaryColor')}</p>
          <div className="flex gap-2">
            {color.map((item) => (
              <button
                key={item}
                className="h-8 w-8 rounded-full"
                style={{ backgroundColor: item }}
                onClick={() => setPrimary(item)}
              />
            ))}
          </div>

          <p className="font-bold mt-2">{t('borderRadius')}</p>
          <div className="flex gap-2">
            {Object.keys(rounded).map((item) => (
              <button
                key={item}
                className="h-8 w-8 rounded-full border-2 border-text"
                style={{ borderRadius: `${rounded[item]}px` }}
                onClick={() => setRoundedValue(item)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
