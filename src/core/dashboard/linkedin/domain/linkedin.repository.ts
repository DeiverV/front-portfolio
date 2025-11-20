import type data from '@/data/linkedin-recommendations.json'

export interface ILinkedInRepository {
  getRecommendations: () => typeof data
}
