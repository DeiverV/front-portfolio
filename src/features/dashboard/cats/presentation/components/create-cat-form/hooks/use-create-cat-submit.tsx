import { useCreateCat } from '../../../hooks/use-create-cat'
import type { ICreateCatPayload } from '@/features/dashboard/cats/core/domain/cats.types'
import type { AxiosError } from 'axios'

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

export const useCreateCatSubmit = ({
  resetForm,
}: {
  resetForm: VoidFunction
}) => {
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
    const payload: Partial<ICreateCatPayload> = {}

    for (const key of FORM_KEYS) {
      const rawValue = key === 'tags' ? formData.getAll(key) : formData.get(key)
      payload[key] = parseFormValue(key, rawValue) as never
    }

    return payload as ICreateCatPayload
  }

  const onSubmit = async (formData: FormData) => {
    const payload = buildPayload(formData)
    const newTab = window.open('', '_blank')
    try {
      const res = await createCatMutation.mutateAsync(payload)
      resetForm()
      if (newTab) newTab.location.href = res.url
    } catch (error) {
      if (newTab) newTab.close()
    }
  }

  return {
    onSubmit,
    error: createCatMutation.error as AxiosError<string> | undefined,
    isLoading: createCatMutation.isPending,
  }
}
