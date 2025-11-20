import type {
  IGetRepositoriesPayload,
  IGetRepositoriesResponse,
} from './github.types'

export interface IGithubRepository {
  getRepositories: (
    params: IGetRepositoriesPayload,
  ) => Promise<IGetRepositoriesResponse>
}
