import type { RepositoryFactory } from '@/types/repository-factory.type'
import type { IGithubRepository } from '../domain/github.repository'

export const githubRepo: RepositoryFactory<IGithubRepository> = (api) => ({
  async getRepositories(params) {
    const { data } = await api.get('/user/repos', { params })
    return data
  },
})
