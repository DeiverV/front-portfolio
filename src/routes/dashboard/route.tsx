import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral">
      <p className="text-text text-9xl">😴</p>
      <h1 className="text-text text-4xl">
        <br />
        Hola! estoy trabajando en esto en este momento
      </h1>
      <Link
        to="/"
        viewTransition
        className="rounded-default bg-text text-neutral px-8 py-2 mt-8"
      >
        Volver
      </Link>
    </div>
  )
}
