import type { IGithubRepository } from '../domain/github.repository'

export const getRepositoriesUseCase =
  (repo: IGithubRepository): IGithubRepository['getRepositories'] =>
  async (params) =>
    await repo.getRepositories(params)
