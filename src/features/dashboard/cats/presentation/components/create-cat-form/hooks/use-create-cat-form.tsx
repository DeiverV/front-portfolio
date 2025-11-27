import { useState } from 'react'
import type { ICreateCatPayload } from '@/features/dashboard/cats/core/domain/cats.types'

export const useCreateCatForm = () => {
  const [filter, setFilter] = useState<ICreateCatPayload['filter']>('')
  const [text, setText] = useState('')

  return {
    filter,
    setFilter,
    text,
    setText,
  }
}
