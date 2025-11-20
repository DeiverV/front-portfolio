import { catsRepo } from './infrastructure/cats.repository'
import { catsUseCasesFactory } from './application'
import { catsApi } from '@/core/common/apis/cats.api'

const CatsRepoFactory = () => catsRepo(catsApi)
const repo = CatsRepoFactory()

export const catsUseCases = catsUseCasesFactory(repo)
