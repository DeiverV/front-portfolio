import { getExchangesUseCase } from './get-exchanges.use-case'
import { getCurrenciesUseCase } from './get-currencies.use-case'
import type { IExchangeRepository } from '../domain/exchanges.repository'

export const exchangesUseCasesFactory = (repo: IExchangeRepository) => ({
  getExchanges: getExchangesUseCase(repo),
  getCurrencies: getCurrenciesUseCase(repo),
})
