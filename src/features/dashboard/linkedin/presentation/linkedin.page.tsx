import { getRouteApi } from '@tanstack/react-router'
import { TbExternalLink } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { LinkedInCard } from './components/linkedin-card'

export const LinkedInPage = () => {
  const route = getRouteApi('/dashboard/linkedin')
  const data = route.useLoaderData()
  const { t } = useTranslation('dashboard')

  return (
    <>
      <div className="flex items-center gap-2">
        <a
          href=""
          target="_blank"
          referrerPolicy="no-referrer"
          aria-label='Deiber Verano LinkedIn Link'
        >
          <TbExternalLink size={28} />
        </a>
        <h1 className="font-bold text-2xl">{t('linkedin.recommendationsTitle')}</h1>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6 z-10 relative">
        {data.map((recom) => (
          <LinkedInCard key={recom.author.name} {...recom} />
        ))}
      </section>
    </>
  )
}
