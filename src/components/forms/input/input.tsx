import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface IFieldInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  id: string
  name: string
}

export const FieldInput = ({ label, id, name, ...rest }: IFieldInput) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        {...rest}
        className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  )
}
