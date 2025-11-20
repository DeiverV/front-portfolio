import { Header } from './components/header'

import { About } from './sections/about'
import { Experience } from './sections/experience'
import { Footer } from './sections/footer'
import { Hero } from './sections/hero'
import { SeeMore } from './sections/see-more'

export const LandingPage = () => {
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
