export const About = () => {
  const items = [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      label: 'TypeScript',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      label: 'JavaScript',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg',
      label: 'Astro',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      label: 'React',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      label: 'Tailwind',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg',
      label: 'Zustand',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
      label: 'Vite',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      label: 'Express',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
      label: 'NestJS',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      label: 'Jest',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
      label: 'Postman',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      label: 'Figma',
    },
  ]

  return (
    <article
      className="bg-secondary min-h-screen flex flex-col justify-around gap-4 px-8 sm:px-[100px] lg:px-[250px] xl:px-[400px] pt-20 pb-8"
      aria-label="Tech Stack"
    >
      <section className="flex flex-col gap-2 border-4 rounded-default p-8 border-primary border-dashed pl-4">
        <h3 className="font-bold text-2xl sm:text-4xl text-white">
          Hola, soy Deiber Verano 👋
        </h3>
        <p className="text-md sm:text-lg text-white font-semibold">
          Soy un desarrollador frontend apasionado por crear interfaces rápidas,
          elegantes y funcionales. <br /> Me encanta transformar ideas en
          experiencias digitales fluidas, cuidando cada detalle desde el
          rendimiento hasta la accesibilidad. <br /> Disfruto trabajar con
          React, TypeScript y arquitecturas modernas. He desarrollado proyectos
          que integran diseño, lógica de negocio y una experiencia de usuario
          limpia y intuitiva.
        </p>
      </section>
      <section className="relative h-[50%] flex items-center justify-center w-full">
        <h4 className="text-shadow-black text-shadow-sm font-bold font-styled text-7xl sm:text-9xl lg:text-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full text-center">
          Tech Stack
        </h4>
        <div className="flex justify-center bg-black/60 z-10 h-full w-full flex-wrap py-8 rounded-2xl">
          {items.map((item, index) => (
            <figure
              key={index}
              className={`flex flex-col items-center justify-center w-[45%] sm:w-[25%] text-white py-4`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 sm:w-[50px] sm:h-[50px] "
              />
              <p className="text-lg sm:text-xl font-semibold text-white z-10">
                {item.label}
              </p>
            </figure>
          ))}
        </div>
      </section>
    </article>
  )
}
