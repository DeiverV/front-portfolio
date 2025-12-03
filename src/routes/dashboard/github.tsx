import { createFileRoute } from '@tanstack/react-router'
import { WorkingOnThis } from '@/components/ui/working-on-this/working-on-this'

export const Route = createFileRoute('/dashboard/github')({
  component: RouteComponent,
})

function RouteComponent() {
  return <WorkingOnThis />
}
