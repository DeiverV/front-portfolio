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
