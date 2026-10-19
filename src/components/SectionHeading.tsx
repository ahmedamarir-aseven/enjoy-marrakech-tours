import Reveal from './Reveal'

export function Ornament({ className = 'text-gold' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-10 bg-current opacity-60" />
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 1l2.8 6.4L21 8.6l-4.8 4.4L17.5 20 12 16.6 6.5 20l1.3-7L3 8.6l6.2-1.2z" />
      </svg>
      <span className="h-px w-10 bg-current opacity-60" />
    </span>
  )
}

type Props = {
  eyebrow: string
  title: string
  lead?: string
  dark?: boolean
  align?: 'center' | 'left'
}

export default function SectionHeading({ eyebrow, title, lead, dark = false, align = 'center' }: Props) {
  const centered = align === 'center'
  return (
    <Reveal className={`mb-14 ${centered ? 'text-center' : 'text-left'}`}>
      <div className={centered ? 'flex justify-center' : 'flex'}>
        <Ornament className={dark ? 'text-gold' : 'text-gold-deep'} />
      </div>
      <p className={`eyebrow mt-4 ${dark ? '!text-gold' : ''}`}>{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-4xl font-semibold leading-[1.08] md:text-[52px] ${
          dark ? 'text-sand' : 'text-palm-deep'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 max-w-2xl text-[17px] font-light leading-relaxed ${
            dark ? 'text-sand/75' : 'text-ink-soft'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  )
}
