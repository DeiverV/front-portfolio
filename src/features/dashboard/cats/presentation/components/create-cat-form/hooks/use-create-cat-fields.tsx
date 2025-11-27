import { useGetTags } from '../../../hooks/use-get-tags'
import type { ICreateCatFormField } from '../create-cat-form.types'

export const useCreateCatFields = () => {
  const tagsQuery = useGetTags()

  const fields: ICreateCatFormField = {
    text: {
      id: 'cat-text',
      label: 'Cat Text',
      name: 'text',
      placeholder: 'Say something...',
    },
    fontSize: {
      id: 'cat-font-size',
      label: 'Font Size',
      name: 'fontSize',
      placeholder: '12',
      type: 'number',
      min: 1,
    },
    fontColor: {
      id: 'cat-font-color',
      label: 'Font Color',
      name: 'fontColor',
      placeholder: 'e.g. #ff9900 or red',
    },
    filter: {
      id: 'cat-filter-select',
      label: 'Filter',
      name: 'filter',
      options: [
        { value: '', label: 'None' },
        { value: 'mono', label: 'Mono' },
        { value: 'negate', label: 'Negate' },
        { value: 'custom', label: 'Custom' },
      ],
    },
    brightness: {
      id: 'cat-brightness',
      label: 'Brightness',
      name: 'brightness',
      placeholder: '0-100',
      type: 'number',
      min: 0,
      max: 100,
    },
    lightness: {
      id: 'cat-lightness',
      label: 'Lightness',
      name: 'lightness',
      placeholder: '0-100',
      type: 'number',
      min: 0,
      max: 100,
    },
    saturation: {
      id: 'cat-saturation',
      label: 'Saturation',
      name: 'saturation',
      placeholder: '0-100',
      type: 'number',
      min: 0,
      max: 100,
    },
    tags: {
      id: 'cat-tags-select',
      label: 'Tags',
      name: 'tags',
      helperText: 'Hold Ctrl/Command to select multiple',
      options: tagsQuery.data?.map((tag) => ({ value: tag, label: tag })) || [],
      multiple: true,
      className:
        'h-32 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary',
    },
  }

  return fields
}
