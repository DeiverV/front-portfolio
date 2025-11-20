import data from '../../data/linkedin-recommendations.json'
import type { ILinkedInRepository } from '../domain/linkedin.repository'

export const linkedInRepo: ILinkedInRepository = {
  getRecommendations: () => {
    return data
  },
}
