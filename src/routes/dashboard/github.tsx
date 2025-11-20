import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/github')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/github"!</div>
}
