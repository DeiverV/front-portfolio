import { Link, createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral px-8">
      <p className="text-text text-6xl sm:text-9xl">😴</p>
      <h1 className="text-text text-2xl sm:text-4xl text-center">
        {t('workingOnThis')}
      </h1>
      <Link
        to="/"
        viewTransition
        className="rounded-default bg-text text-neutral px-8 py-2 mt-4"
      >
        {t('back')}
      </Link>
    </div>
  )
}
