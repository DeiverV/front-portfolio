import type {
  IGetExchangesPayload,
  IGetExchangesResponse,
} from './exchanges.types'

export interface IExchangeRepository {
  getExchanges: (params: IGetExchangesPayload) => Promise<IGetExchangesResponse>
  getCurrencies: () => Promise<Record<string, string>>
}
