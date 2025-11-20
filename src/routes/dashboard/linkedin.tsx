import { createFileRoute } from '@tanstack/react-router'
import { LinkedInPage } from '@/features/dashboard/linkedin/presentation/linkedin.page'
import { useGetRecommendations } from '@/features/dashboard/linkedin/presentation/hooks/use-get-recommendations'

export const Route = createFileRoute('/dashboard/linkedin')({
  component: () => (
    <>
      <title>Dashboard | LinkedIn</title>
      <meta name="description" content="LinkedIn Recommendations for Deiber Verano" />
      <LinkedInPage />
    </>
  ),
  loader: () => {
    const recommendations = useGetRecommendations()
    return recommendations
  },
})
