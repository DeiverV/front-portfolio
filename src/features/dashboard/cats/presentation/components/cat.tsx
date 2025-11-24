import { useGetCatDetails } from '../hooks/use-get-cat-details'
import type { IGetCatsResponse } from '../../core/domain/cats.types'

export const Cat = ({ cat }: { cat: IGetCatsResponse[number] }) => {
  const catImageQuery = useGetCatDetails(cat.id)

  if (catImageQuery.isFetching || !catImageQuery.data)
    return (
      <div className="w-full h-full animate-pulse rounded-default bg-gray-200" />
    )

  return (
    <article className="p-6 rounded-default overflow-hidden w-full bg-neutral shadow-text/20 shadow-lg grid gap-4 place-items-center max-h-[550px]">
      <figure className="w-full bg-primary/10 flex justify-center py-6 rounded-default">
        <img
          src={catImageQuery.data.url}
          alt={cat.id}
          loading="eager"
          className="h-[350px] max-w-[450px] object-cover rounded-default"
        />
      </figure>

      <p className="text-lg font-bold">Tags:</p>
      <div className="flex gap-2">
        {cat.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-primary text-white rounded-default"
          >
            {tag}
          </span>
        ))}

        {cat.tags.length === 0 && (
          <span className="italic text-gray-500">No tags</span>
        )}
      </div>
    </article>
  )
}
