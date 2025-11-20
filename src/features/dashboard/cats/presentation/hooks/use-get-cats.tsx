import { useQuery } from '@tanstack/react-query'

import { CATS_QUERY_KEYS } from '../../core/domain/cats.repository'
import { catsUseCases } from '../../core'
import type { IGetCatsPayload } from '../../core/domain/cats.types'

export const useGetCats = (params: IGetCatsPayload) => {
  return useQuery({
    queryKey: [CATS_QUERY_KEYS.getCats, params],
    queryFn: () => catsUseCases.getCats(params),
  })
}
