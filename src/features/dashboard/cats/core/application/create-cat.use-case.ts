import type { ICatsRepository } from '../domain/cats.repository'

export const createCatUseCase =
  (repo: ICatsRepository): ICatsRepository['createCat'] =>
  async (payload) => {
    const res = await repo.createCat(payload)
    window.open(res.url, '_blank')
    return res
  }
