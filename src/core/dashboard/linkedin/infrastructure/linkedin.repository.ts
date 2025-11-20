import type { ILinkedInRepository } from '../domain/linkedin.repository'
import data from '@/data/linkedin-recommendations.json'

export const linkedInRepo: ILinkedInRepository = {
  getRecommendations: () => {
    return data
  },
}
