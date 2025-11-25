import { useMutation } from '@tanstack/react-query'

import { CATS_QUERY_KEYS } from '../../core/domain/cats.repository'
import { catsUseCases } from '../../core'

export const useCreateCat = () => {
  return useMutation({
    mutationKey: [CATS_QUERY_KEYS.createCat],
    mutationFn: catsUseCases.createCat,
  })
}
