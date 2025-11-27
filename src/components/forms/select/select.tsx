import type { DetailedHTMLProps, SelectHTMLAttributes } from 'react'

export interface IFieldSelect
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string
  id: string
  name: string
  options: Array<{
    value: string
    label: string
  }>
  helperText?: string
}

export const FieldSelect = ({
  label,
  id,
  name,
  options,
  helperText,
  ...rest
}: IFieldSelect) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <select
        id={id}
        name={name}
        {...rest}
        className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="text-xs text-neutral-500">{helperText}</span>
    </div>
  )
}
