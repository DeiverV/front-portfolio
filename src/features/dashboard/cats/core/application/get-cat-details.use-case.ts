import type { ICatsRepository } from '../domain/cats.repository'

export const getCatDetailsUseCase =
  (repo: ICatsRepository): ICatsRepository['getCatDetails'] =>
  async (id) =>
    await repo.getCatDetails(id)
