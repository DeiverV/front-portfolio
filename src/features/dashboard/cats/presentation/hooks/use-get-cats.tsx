import { useInfiniteQuery } from '@tanstack/react-query'

import { CATS_QUERY_KEYS } from '../../core/domain/cats.repository'
import { catsUseCases } from '../../core'
import type { IGetCatsPayload } from '../../core/domain/cats.types'

export const useGetInfiniteCats = (params: IGetCatsPayload) => {
  const limit = 5

  return useInfiniteQuery({
    queryKey: [CATS_QUERY_KEYS.getCats, params],
    queryFn: ({ pageParam }) =>
      catsUseCases.getCats({ limit, skip: pageParam, tags: params.tags }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined
      return allPages.length * limit + limit
    },
    getPreviousPageParam: (firstPage, allPages) => {
      if (firstPage.length === 0) return undefined
      return allPages.length * limit - limit
    },
  })
}
