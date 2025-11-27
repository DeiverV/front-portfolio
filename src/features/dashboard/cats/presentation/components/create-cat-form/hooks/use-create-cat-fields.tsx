import { useGetTags } from '../../../hooks/use-get-tags'
import type { ICreateCatFormField } from '../create-cat-form.types'
import { useTranslation } from 'react-i18next'

export const useCreateCatFields = () => {
  const tagsQuery = useGetTags()
  const { t } = useTranslation('dashboard')

  const fields: ICreateCatFormField = {
    text: {
      id: 'cat-text',
      label: t('cats.fields.text.label'),
      name: 'text',
      placeholder: t('cats.fields.text.placeholder'),
    },
    fontSize: {
      id: 'cat-font-size',
      label: t('cats.fields.fontSize.label'),
      name: 'fontSize',
      placeholder: t('cats.fields.fontSize.placeholder'),
      type: 'number',
      min: 1,
    },
    fontColor: {
      id: 'cat-font-color',
      label: t('cats.fields.fontColor.label'),
      name: 'fontColor',
      placeholder: t('cats.fields.fontColor.placeholder'),
    },
    filter: {
      id: 'cat-filter-select',
      label: t('cats.fields.filter.label'),
      name: 'filter',
      options: [
        { value: '', label: t('cats.fields.filter.options.none') },
        { value: 'mono', label: t('cats.fields.filter.options.mono') },
        { value: 'negate', label: t('cats.fields.filter.options.negate') },
        { value: 'custom', label: t('cats.fields.filter.options.custom') },
      ],
    },
    brightness: {
      id: 'cat-brightness',
      label: t('cats.fields.brightness.label'),
      name: 'brightness',
      placeholder: t('cats.fields.brightness.placeholder'),
      type: 'number',
      min: 0,
      max: 100,
    },
    lightness: {
      id: 'cat-lightness',
      label: t('cats.fields.lightness.label'),
      name: 'lightness',
      placeholder: t('cats.fields.lightness.placeholder'),
      type: 'number',
      min: 0,
      max: 100,
    },
    saturation: {
      id: 'cat-saturation',
      label: t('cats.fields.saturation.label'),
      name: 'saturation',
      placeholder: t('cats.fields.saturation.placeholder'),
      type: 'number',
      min: 0,
      max: 100,
    },
    tags: {
      id: 'cat-tags-select',
      label: t('cats.fields.tags.label'),
      name: 'tags',
      helperText: t('cats.fields.tags.helperText'),
      options: tagsQuery.data?.map((tag) => ({ value: tag, label: tag })) || [],
      multiple: true,
      className:
        'h-32 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary',
    },
  }

  return fields
}
