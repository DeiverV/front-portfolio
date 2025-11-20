import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/features/dashboard/common/components/navbar/navbar'
import { Sidebar } from '@/features/dashboard/common/components/sidebar/sidebar'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section
      className="flex dark:bg-gray-500 bg-black"
      aria-description="dashboard layout"
    >
      <Sidebar />

      <section className="flex-col gap-2 grow">
        <Navbar />
        <main className="min-h-[99vh] bg-neutral/95 px-4 sm:px-16 md:px-[120px] py-6">
          <Outlet />
        </main>
      </section>
      <figure
        aria-hidden={true}
        className="text-[300px] font-bold text-primary/10 fixed -bottom-20 right-5"
      >
        .d
      </figure>
    </section>
  )
}
