import type { ICatsRepository } from '../domain/cats.repository'

export const getCatImageUseCase =
  (repo: ICatsRepository): ICatsRepository['getCatImage'] =>
  async (id) =>
    await repo.getCatImage(id)
