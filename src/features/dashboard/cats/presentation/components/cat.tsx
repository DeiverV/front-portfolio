import { useGetCatDetails } from '../hooks/use-get-cat-details'
import type { IGetCatsResponse } from '../../core/domain/cats.types'

export const Cat = ({ cat }: { cat: IGetCatsResponse[number] }) => {
  const catImageQuery = useGetCatDetails(cat.id)

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
        <p className="text-lg font-bold">Tags:</p>
        <div className="flex gap-2">
          {cat.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary text-white rounded-default text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {cat.tags.length === 0 && (
          <span className="italic text-gray-500">No tags</span>
        )}
      </div>
    </article>
  )
}
