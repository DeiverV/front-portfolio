import { useEffect, useState } from 'react'
import { LuPaintbrushVertical } from 'react-icons/lu'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { i18nSetLang } from '@/i18n/i18n'

const color = ['blue', 'green', 'purple']

const rounded: Record<string, number> = {
  square: 0,
  light: 5,
  mid: 10,
  heavy: 20,
}

type Theme = 'light' | 'dark'

export const CustomizeStylesMenu = () => {
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
    <div
      className="fixed bottom-12 right-12 z-50"
      aria-description="Customize styles"
    >
      <button
        className="h-10 w-10 p-2 rounded-full bg-neutral flex items-center justify-center animate-[shake_1.5s_ease-in-out_infinite]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LuPaintbrushVertical size={28} />
      </button>

      {isOpen && (
        <div className="absolute bottom-10 right-10 bg-neutral rounded-default p-4">
          <p className="font-bold">{t('theme')}</p>
          <div className="flex gap-2">
            <button
              className="bg-primary rounded-default p-1"
              onClick={() => setTheme('light')}
            >
              <MdLightMode size={24} className="fill-white" />
            </button>
            <button
              className="bg-primary rounded-default p-1"
              onClick={() => setTheme('dark')}
            >
              <MdDarkMode size={24} className="fill-white" />
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
                className="h-8 w-8 rounded-full border-2 border-primary"
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
