import type { RepositoryFactory } from '@/core/common/types/repository-factory.type'
import type { IExchangeRepository } from '../domain/exchanges.repository'

export const exchangeRepoV1: RepositoryFactory<IExchangeRepository> = (
  api,
) => ({
  async getExchanges(params) {
    const { data } = await api.get('/v1', { params })
    return data
  },
  async getCurrencies() {
    const { data } = await api.get('/v1/currencies')
    return data
  },
})
