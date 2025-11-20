import { getCatImageUseCase } from './get-cat-image.use-case'
import { getCatsUseCase } from './get-cats.use-case'
import { getTagsUseCase } from './get-tags.use-case'
import type { ICatsRepository } from '../domain/cats.repository'

export const catsUseCasesFactory = (repo: ICatsRepository) => ({
  getCats: getCatsUseCase(repo),
  getCatImage: getCatImageUseCase(repo),
  getTags: getTagsUseCase(repo),
})
