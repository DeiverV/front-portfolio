import { githubRepo } from './infrastructure/github.repository'
import { githubUseCasesFactory } from './application'
import { githubApi } from '@/core/common/apis/github.api'

const GithubRepoFactory = () => githubRepo(githubApi)
const repo = GithubRepoFactory()

export const githubUseCases = githubUseCasesFactory(repo)
