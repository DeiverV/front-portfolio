import { useGetCatDetails } from '../hooks/use-get-cat-details'
import { useTranslation } from 'react-i18next'
import type { IGetCatsResponse } from '../../core/domain/cats.types'

export const Cat = ({ cat }: { cat: IGetCatsResponse[number] }) => {
  const catImageQuery = useGetCatDetails(cat.id)
  const { t } = useTranslation('dashboard')

  if (catImageQuery.isFetching || !catImageQuery.data)
    return (
      <div className="w-full h-full animate-pulse rounded-default bg-gray-200" />
    )

  return (
    <article className="px-2 py-2 sm:p-4 rounded-default overflow-hidden w-full bg-neutral shadow-text/20 shadow-md grid gap-2 place-items-center max-h-[550px]">
      <img
        src={catImageQuery.data.url}
        alt={cat.id}
        loading="eager"
        className="h-[350px] w-full md:max-w-[400px] lg:max-w-[450px] object-cover rounded-default"
      />

      <div className="flex gap-2 items-center justify-between w-full mt-2">
        <p className="text-lg font-bold">{t('cats.tagsLabel')}</p>
        <div className="flex gap-2 items-center flex-wrap">
          {cat.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary text-white rounded-default text-sm"
            >
              {tag}
            </span>
          ))}
          {cat.tags.length > 2 && (
            <span className="px-2 py-1 bg-primary text-white rounded-default text-sm">+{cat.tags.length - 2}</span>
          )}
        </div>

        {cat.tags.length === 0 && (
          <span className="italic text-gray-500">{t('cats.noTags')}</span>
        )}
      </div>
    </article>
  )
}
