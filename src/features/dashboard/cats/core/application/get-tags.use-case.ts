import type { ICatsRepository } from '../domain/cats.repository'

export const getTagsUseCase =
  (repo: ICatsRepository): ICatsRepository['getTags'] =>
  async () =>
    await repo.getTags()
