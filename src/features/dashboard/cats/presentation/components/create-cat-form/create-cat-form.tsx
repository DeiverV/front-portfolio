import { Activity } from 'react'
import {
  useCreateCatFields,
  useCreateCatForm,
  useCreateCatSubmit,
} from './hooks'

import type { ICreateCatPayload } from '../../../core/domain/cats.types'
import { FieldInput } from '@/components/forms/input/input'
import { FieldSelect } from '@/components/forms/select/select'
import { AlertError } from '@/components/ui/alert/error'
import { useTranslation } from 'react-i18next'

export const CreateCatForm = () => {
  const fields = useCreateCatFields()

  const { filter, setFilter, setText, text } = useCreateCatForm()
  const { onSubmit, error, isLoading } = useCreateCatSubmit({
    resetForm: () => {
      setText('')
      setFilter('')
    },
  })

  const { t } = useTranslation('dashboard')

  return (
    <div className="w-full mx-auto p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-center">{t('cats.createTitle')}</h3>

      <form
        action={onSubmit}
        aria-describedby="create-cat-description"
        className="space-y-5"
      >
        <p
          id="create-cat-description"
          className="text-sm text-neutral-600 dark:text-neutral-400"
        >
          {t('cats.createDescription')}
        </p>

        <div className="h-[350px] max-h-[350px] pl-2 pr-4 overflow-y-auto space-y-5">
          <FieldInput
            {...fields.text}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <FieldSelect {...fields.tags} />
          <FieldSelect
            {...fields.filter}
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as ICreateCatPayload['filter'])
            }
          />

          <Activity mode={text.length > 0 ? 'visible' : 'hidden'}>
            <fieldset className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4">
              <legend className="px-1 text-sm font-semibold">
                {t('cats.fontOptions')}
              </legend>
              <FieldInput {...fields.fontSize} />
              <FieldInput {...fields.fontColor} />
            </fieldset>
          </Activity>

          <Activity mode={filter === 'custom' ? 'visible' : 'hidden'}>
            <fieldset className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4">
              <legend className="px-1 text-sm font-semibold">
                {t('cats.customFilterSettings')}
              </legend>

              <FieldInput {...fields.brightness} />
              <FieldInput {...fields.lightness} />
              <FieldInput {...fields.saturation} />
            </fieldset>
          </Activity>
        </div>

        {error?.name && (
          <AlertError error={error.response?.data || t('cats.errorGeneric')} />
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isLoading ? t('cats.creating') : t('cats.createButton')}
        </button>
      </form>
    </div>
  )
}
