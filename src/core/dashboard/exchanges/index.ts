import { exchangeRepoV1 } from './infrastructure/exchanges.repository'
import { exchangesUseCasesFactory } from './application'
import { frankfurterApi } from '@/core/common/apis/frankfurter.api'

const VERSION = 1

const ExchangesRepoFactory = (version: number) => {
  switch (version) {
    case VERSION:
      return exchangeRepoV1(frankfurterApi)
    default:
      return exchangeRepoV1(frankfurterApi)
  }
}

const repo = ExchangesRepoFactory(VERSION)

export const exchangesUseCases = exchangesUseCasesFactory(repo)
