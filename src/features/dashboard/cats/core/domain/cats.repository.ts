import type { IGetCatsPayload, IGetCatsResponse } from './cats.types'

export const CATS_QUERY_KEYS = {
  getCats: 'cats',
  getTags: 'cat-tags',
  getCatImage: 'cat-image',
}

export interface ICatsRepository {
  getCats: (payload: IGetCatsPayload) => Promise<IGetCatsResponse>
  getTags: () => Promise<Array<string>>
  getCatImage: (id: string) => Promise<Blob>
}
