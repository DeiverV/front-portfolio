import type { IFieldInput } from '@/components/forms/input/input'
import type { IFieldSelect } from '@/components/forms/select/select'

export interface ICreateCatFormField {
  text: IFieldInput
  fontSize: IFieldInput
  fontColor: IFieldInput
  filter: IFieldSelect
  brightness: IFieldInput
  lightness: IFieldInput
  saturation: IFieldInput
  tags: IFieldSelect
}
