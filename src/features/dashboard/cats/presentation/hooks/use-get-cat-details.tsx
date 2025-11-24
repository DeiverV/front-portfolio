import { useQuery } from '@tanstack/react-query'

import { CATS_QUERY_KEYS } from '../../core/domain/cats.repository'
import { catsUseCases } from '../../core'

export const useGetCatDetails = (id: string) => {
  return useQuery({
    queryKey: [CATS_QUERY_KEYS.getCatImage, id],
    queryFn: () => catsUseCases.getCatDetails(id),
    staleTime: 1000 * 60 * 10, // 5 minutes
  })
}
