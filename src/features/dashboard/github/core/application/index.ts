import { getRepositoriesUseCase } from './get-repositories.use-case'
import type { IGithubRepository } from '../domain/github.repository'

export const githubUseCasesFactory = (repo: IGithubRepository) => ({
  getRepositories: getRepositoriesUseCase(repo),
})
