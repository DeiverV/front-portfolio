import { useQueries, useQuery } from '@tanstack/react-query'

import { CATS_QUERY_KEYS } from '../../core/domain/cats.repository'
import { catsUseCases } from '../../core'

export const useGetCatImage = (id: string) => {
  return useQuery({
    queryKey: [CATS_QUERY_KEYS.getCatImage, id],
    queryFn: () => catsUseCases.getCatImage(id),
  })
}

export const useGetCatImages = (ids: Array<string>) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: [CATS_QUERY_KEYS.getCatImage, id],
      queryFn: () => catsUseCases.getCatImage(id),
    })),
  })
}
