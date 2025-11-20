import type { IExchangeRepository } from '../domain/exchanges.repository'

export const getExchangesUseCase = (
  repo: IExchangeRepository,
): IExchangeRepository['getExchanges'] => {
  return async (params) =>
    await repo.getExchanges({ ...params, date: params.date || 'latest' })
}
