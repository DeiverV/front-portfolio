import { TbExternalLink } from 'react-icons/tb'
import type { ILinkedInRepository } from '../../core/domain/linkedin.repository'

export type Props = ReturnType<
  ILinkedInRepository['getRecommendations']
>[number]

export const LinkedInCard = ({ author, dateAndRelationship, text }: Props) => {
  return (
    <article className="bg-neutral rounded-default px-8 py-6 grid gap-2 shadow-text/20 shadow-lg">
      <header className="flex flex-col md:flex-row items-center gap-2">
        <img
          src={author.image}
          alt={author.name}
          className="w-[45px] h-[45px] rounded-full object-cover bg-primary"
        />
        <div>
          <div className="flex items-center gap-1">
            <a
              href={author.link}
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label={`${author.name} LinkedIn Link`}
              className="flex items-center gap-1"
            >
              <span className="font-bold">{author.name}</span>
              <TbExternalLink />
            </a>
          </div>
          <p className="text-xs">{author.position}</p>
          <p className="text-text/70 text-xs">
            {dateAndRelationship}
          </p>
        </div>
      </header>

      <div className="h-[150px] overflow-x-auto">
        <p
          aria-description="Recommendation Text"
          className="whitespace-pre-line"
        >
          {text}
        </p>
      </div>
    </article>
  )
}
