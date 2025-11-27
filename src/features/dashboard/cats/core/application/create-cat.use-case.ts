import type { ICatsRepository } from '../domain/cats.repository'

export const createCatUseCase =
  (repo: ICatsRepository): ICatsRepository['createCat'] =>
  async (payload) => {
    const res = await repo.createCat(payload)
    return res
  }
