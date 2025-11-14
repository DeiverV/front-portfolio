interface Props {
  icon: React.ReactNode
  label: string
  href: string
}

export const RedirectionIcon = ({ href, icon, label }: Props) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      aria-description='Redirect to social media'
      className="flex items-center bg-secondary p-2 rounded-default text-white gap-2 hover:bg-secondary/80 duration-150 ease-in-out w-[120px] justify-center"
    >
      {icon}
      {label}
    </a>
  )
}
