import { Scripts, createFileRoute } from '@tanstack/react-router'
import { Header } from './-components/header'

import { Hero } from './-sections/hero'
import { About } from './-sections/about'
import { Experience } from './-sections/experience'
import { SeeMore } from './-sections/see-more'
import { Footer } from './-sections/footer'
import { Seo } from './-seo'

export const Route = createFileRoute('/_landing/')({
  component: () => (
    <html>
      <Seo />
      <body>
        <Landing />
        <Scripts />
      </body>
    </html>
  ),
})

function Landing() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <section className="px-8 sm:px-[100px] lg:px-[250px] xl:px-[400px] grid gap-[100px] bg-secondary">
          <About />
          <Experience />
        </section>
        <SeeMore />
      </main>
      <Footer />
    </>
  )
}
