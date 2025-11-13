import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa'
import { RedirectionIcon } from '../-components/redirection-icon'

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = heroRef.current?.scrollHeight ?? 0
      const ratio = Math.min(scrollY / maxScroll, 1)

      setProgress(ratio)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scale = 1 + progress * 500

  return (
    <article
      ref={heroRef}
      className="h-screen grid place-items-center overflow-hidden"
    >
      <section className="animate-[fadeIn_4s_ease-in] z-10 grid px-8 place-items-center">
        <h1 className="text-secondary font-semibold text-6xl sm:text-9xl text-center font-styled">
          Deiber Verano
        </h1>

        <h2 className="text-secondary font-semibold text-xl sm:text-4xl text-center font-styled">
          Frontend Developer
        </h2>
        <figure
          className="my-2 rounded-full bg-secondary z-10 pointer-events-none"
          style={{
            width: '12px',
            height: '12px',
            transform: `scale(${scale})`,
            transformOrigin: 'center',
            transition: 'transform 0.4s ease-out',
            aspectRatio: '1/1',
          }}
        ></figure>

        <nav
          className="flex gap-4 mt-4 justify-center flex-wrap"
          aria-label="Profile links"
        >
          <RedirectionIcon
            href="https://www.linkedin.com/in/deiber-verano/"
            icon={<FaLinkedin size={18} className="fill-white" />}
            label="LinkedIn"
          />

          <RedirectionIcon
            href="https://github.com/DeiverV"
            icon={<FaGithub size={18} className="fill-white" />}
            label="Github"
          />

          <RedirectionIcon
            href="https://github.com/DeiverV"
            icon={<FaPaperclip size={18} className="fill-white" />}
            label="CV"
          />
        </nav>
      </section>

      <figure className="flex absolute gap-8 justify-center flex-col h-[400px] aspect-square w-fit rounded-default p-4 bg-secondary/10 animate-[swing_1.5s_ease_infinite] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <figure className="w-full h-full bg-black/40 absolute left-0 top-0 backdrop-blur-[2px] rounded-default animate-[fadeIn_4s_ease-in] z-20"></figure>
        <figure className="w-full h-full bg-black/80 absolute left-0 top-0 blur-[100px] rounded-default animate-[fadeIn_4s_ease-in]"></figure>
        <img
          src="/deiber.webp"
          alt="Deiber Verano"
          className="rounded-default z-10"
        />
      </figure>
    </article>
  )
}
