import type { RepositoryFactory } from '@/types/repository-factory.type'
import type { ICatsRepository } from '../domain/cats.repository'

export const catsRepo: RepositoryFactory<ICatsRepository> = (api) => ({
  async getCatDetails(id) {
    const { data } = await api.get(`/cat/${id}`)

    return data
  },
  async getCats(payload) {
    const { data } = await api.get('/api/cats', {
      params: payload,
    })
    return data
  },
  async getTags() {
    const { data } = await api.get('api/tags')
    return data
  },
  async createCat(payload) {
    const { text, tags, ...rest } = payload

    let slug = ''
    if (tags && tags.length > 0) {
      slug += `/${encodeURIComponent(tags.join(','))}`
    }

    if (text) slug += `/says/${text}`

    const { data } = await api.get(`/cat${slug}`, { params: rest })
    return data
  },
})
