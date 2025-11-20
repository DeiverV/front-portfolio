import { catsRepo } from './infrastructure/cats.repository'
import { catsUseCasesFactory } from './application'
import { catsApi } from '@/features/dashboard/cats/api/cats.api'

const CatsRepoFactory = () => catsRepo(catsApi)
const repo = CatsRepoFactory()

export const catsUseCases = catsUseCasesFactory(repo)
