import type { IExchangeRepository } from '../domain/exchanges.repository'

export const getCurrenciesUseCase =
  (repo: IExchangeRepository): IExchangeRepository['getCurrencies'] =>
  async () =>
    await repo.getCurrencies()
