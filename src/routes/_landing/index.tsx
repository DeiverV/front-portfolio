import { createFileRoute } from '@tanstack/react-router'
import { Header } from './-components/header'
import { Hero } from './-sections/hero'
import { About } from './-sections/about'

export const Route = createFileRoute('/_landing/')({
  component: Landing,
})

function Landing() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
      </main>
    </>
  )
}
