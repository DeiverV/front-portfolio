import { useTranslation } from 'react-i18next'
import { technologies } from '../-shared.data'

export const About = () => {
  const { t } = useTranslation('landing')
  return (
    <article
      className="bg-secondary min-h-screen flex flex-col justify-around gap-12 pt-20 pb-12"
      aria-label="Tech Stack"
    >
      <section className="flex flex-col gap-2 p-8 border-primary border-b-3 border-dashed pl-4">
        <h3 className="font-bold text-2xl sm:text-4xl text-white text-shadow-xs text-shadow-black">
          {t('about.greeting')}
        </h3>
        <p className="text-md sm:text-lg text-white text-shadow-xs text-shadow-black font-semibold">
          {t('about.description')}
        </p>
      </section>
      <section className="relative h-[50%] flex items-center justify-center w-full">
        <h4 className="text-shadow-black break-all text-shadow-lg font-bold font-styled text-7xl sm:text-9xl lg:text-[230px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-10 w-full text-center">
          {t('about.tools')}
        </h4>
        <div className="flex justify-center h-full w-full flex-wrap py-8 rounded-2xl">
          {technologies.map((item, index) => (
            <figure
              key={index}
              className={`flex flex-col items-center justify-center w-[45%] sm:w-[25%] text-white text-shadow-xs text-shadow-black py-4`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 sm:w-[50px] sm:h-[50px] "
              />
              <p className="text-lg sm:text-xl font-semibold text-white text-shadow-xs text-shadow-black">
                {item.label}
              </p>
            </figure>
          ))}
        </div>
      </section>
    </article>
  )
}
