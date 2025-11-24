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
