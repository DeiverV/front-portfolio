import { useTranslation } from 'react-i18next'
import { experiences } from '../data/shared.data'

export const Experience = () => {
  const { t } = useTranslation('landing')
  return (
    <article
      className="flex flex-col justify-center items-center "
      aria-description="Professional Experience"
    >
      <section className="rounded-t-default bg-primary w-full flex flex-col justify-center items-center py-10 px-4 md:px-[50px] 2xl:px-[200px]">
        <header className="flex items-center flex-col md:flex-row gap-4">
          <figure className="h-[100px] rounded-full aspect-square p-2 bg-white/10 animate-[bounce_1.5s_ease-in-out_infinite]">
            <img
              src="/deiber.webp"
              alt="Deiber Verano"
              className="rounded-full"
            />
          </figure>
          <div className="grid">
            <h3 className="text-white font-bold">{t('experience.title')}</h3>
            <hr className="border-white" />
            <p className="text-white md:text-lg">{t('experience.subtitle')}</p>
          </div>
        </header>

        <section className="mt-10 grid gap-4 w-full pb-34">
          {experiences.map((experience) => (
            <section key={experience.company} className="select-none">
              <p className="text-white font-bold text-lg">
                {experience.company}
              </p>
              <p className="text-white">{experience.role}</p>
              <p className="text-white">{experience.period}</p>
              <div className="flex items-center gap-2 flex-wrap my-2">
                {experience.technologies.map((tech) => (
                  <figure
                    key={tech.label}
                    className="flex items-center gap-2 text-white rounded-default border border-white p-2 text-xs"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.label}
                      className="w-4 h-4"
                    />
                    {tech.label}
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </section>
      </section>
    </article>
  )
}
