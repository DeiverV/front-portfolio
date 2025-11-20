import { useQuery } from '@tanstack/react-query'

import { CATS_QUERY_KEYS } from '../../core/domain/cats.repository'
import { catsUseCases } from '../../core'

export const useGetTags = () => {
  return useQuery({
    queryKey: [CATS_QUERY_KEYS.getTags],
    queryFn: () => catsUseCases.getTags(),
  })
}
