import { useState } from 'react'
import { useCreateCat } from '../../../hooks/use-create-cat'
import type { ICreateCatPayload } from '@/features/dashboard/cats/core/domain/cats.types'

const FORM_KEYS: Array<keyof ICreateCatPayload> = [
  'text',
  'fontSize',
  'fontColor',
  'filter',
  'brightness',
  'lightness',
  'saturation',
  'tags',
]

const NUMBER_FIELDS: Array<keyof ICreateCatPayload> = [
  'fontSize',
  'brightness',
  'lightness',
  'saturation',
]

export const useCreateCatForm = () => {
  const [filter, setFilter] = useState<ICreateCatPayload['filter']>('')
  const [text, setText] = useState('')

  const createCatMutation = useCreateCat()

  const parseFormValue = (
    key: keyof ICreateCatPayload,
    raw: FormDataEntryValue | null | Array<FormDataEntryValue>,
  ) => {
    if (raw === null || raw === '') return null
    if (key === 'tags') return Array.isArray(raw) ? raw : [String(raw)]

    if (NUMBER_FIELDS.includes(key)) {
      const num = Number(raw)
      return Number.isNaN(num) ? null : num
    }

    return String(raw)
  }

  const buildPayload = (formData: FormData): ICreateCatPayload => {
    const payload: Partial<ICreateCatPayload> = {
      filter: filter,
    }

    for (const key of FORM_KEYS) {
      const rawValue = key === 'tags' ? formData.getAll(key) : formData.get(key)
      payload[key] = parseFormValue(key, rawValue) as never
    }

    return payload as ICreateCatPayload
  }

  const onSubmit = async (formData: FormData) => {
    const payload = buildPayload(formData)

    setText('')
    setFilter('')

    await createCatMutation.mutateAsync(payload)
  }

  return {
    filter,
    setFilter,
    text,
    setText,
    onSubmit,
  }
}
