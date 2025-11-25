import type {
  ICatDetails,
  ICreateCatPayload,
  IGetCatsPayload,
  IGetCatsResponse,
} from './cats.types'

export const CATS_QUERY_KEYS = {
  getCats: 'cats',
  getTags: 'cat-tags',
  getCatImage: 'cat-image',
  createCat: 'create-cat',
}

export interface ICatsRepository {
  getCats: (payload: IGetCatsPayload) => Promise<IGetCatsResponse>
  getTags: () => Promise<Array<string>>
  getCatDetails: (id: string) => Promise<ICatDetails>
  createCat: (data: ICreateCatPayload) => Promise<ICatDetails>
}
