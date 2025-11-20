import type { ICatsRepository } from '../domain/cats.repository'

export const getCatsUseCase =
  (repo: ICatsRepository): ICatsRepository['getCats'] =>
  async (payload) =>
    await repo.getCats(payload)
