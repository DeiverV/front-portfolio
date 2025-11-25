export interface IGetCatsPayload {
  limit?: number
  skip?: number
  tags?: string
}

export type IGetCatsResponse = Array<{
  id: string
  tags: Array<string>
  mimetype: string
  createdAt: string
}>

export interface ICatDetails {
  id: string
  tags: Array<string>
  mimetype: string
  created_at: string
  url: string
}

export interface ICreateCatPayload {
  text?: string
  fontSize?: number
  fontColor?: string
  filter: '' | 'mono' | 'negate' | 'custom'
  brightness?: number
  lightness?: number
  saturation?: number
  tags?: Array<string>
}
