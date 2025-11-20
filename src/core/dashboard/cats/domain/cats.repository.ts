import type { IGetCatsPayload, IGetCatsResponse } from './cats.types'

export interface ICatsRepository {
  getCats: (payload: IGetCatsPayload) => Promise<IGetCatsResponse>
  getTags: () => Promise<Array<string>>
  getCatImage: (id: string) => Promise<Blob>
}
