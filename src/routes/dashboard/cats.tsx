import { createFileRoute } from '@tanstack/react-router'
import { CatsPage } from '@/features/dashboard/cats/presentation/cats.page'

export const Route = createFileRoute('/dashboard/cats')({
  component: CatsPage,
})
