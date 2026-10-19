import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Check, Star } from 'lucide-react'
import { CATEGORIES, toSlug, optimizeImage } from '@/data/site'
import { useTranslation } from '@/i18n/LanguageContext'

type Props = {
  active: string
  onChange: (id: string) => void
  onBook: (service: string) => void
}

export default function ServicesExplorer({ active, onChange, onBook }: Props) {
  const cat = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0]
  const panelRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    panelRef.current?.classList.remove('is-visible')
    requestAnimationFrame(() => panelRef.current?.classList.add('is-visible'))
  }, [active])

  return (
    <section id="services" className="scroll-mt-24 bg-[#F0E8D8]">

      {/* — Hero image banner — */}
      <div className="relative h-[56vh] min-h-[400px] w-full overflow-hidden">
        <img
          key={cat.image}
          src={cat.image}
          alt={cat.label}
          className="kenburns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-palm-deep/30 via-palm-deep/50 to-palm-deep/90" />

        {/* Category meta overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Enjoy Marrakech Tours · {cat.services.length} services
          </p>
          <h2 className="font-display text-[52px] md:text-[72px] font-semibold leading-none text-sand">
            {cat.label}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] font-light leading-relaxed text-sand/80">
            {cat.blurb}
          </p>
          <p className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            Hotel pickup included · Fully licensed
          </p>
        </div>

        {/* Category nav tabs at the bottom of the banner */}
        <div className="absolute bottom-0 inset-x-0 overflow-x-auto scrollbar-none">
          <div className="flex justify-start md:justify-center min-w-max border-t border-white/10 bg-palm-deep/60 backdrop-blur-sm px-4">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => onChange(c.id)}
                className={`relative flex-shrink-0 px-5 py-4 text-[10.5px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  c.id === cat.id
                    ? 'text-gold'
                    : 'text-sand/45 hover:text-sand/80'
                }`}
              >
                {c.label}
                {c.id === cat.id && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gold" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* — Services grid — */}
      <div ref={panelRef} className="reveal mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-px bg-ink/8 border border-ink/8 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {cat.services.map((s, i) => (
            <div
              key={s.name}
              className="group relative flex flex-col overflow-hidden bg-[#F5EDD9] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_40px_-12px_rgba(7,42,32,0.12)] hover:z-10"
            >
              {/* Image Banner */}
              <Link to={`/details/${toSlug(s.name)}`} className="relative h-48 w-full overflow-hidden bg-palm-deep block">
                <img
                  src={optimizeImage(s.image || cat.image, 600, 360)}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-palm-deep/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-palm-deep/85 backdrop-blur-sm px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-sand shadow-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.14em] text-palm-deep shadow-sm">
                    {s.badge}
                  </span>
                )}
              </Link>

              <div className="flex flex-1 flex-col p-6">
                {/* Name */}
                <Link to={`/details/${toSlug(s.name)}`}>
                  <h3 className="font-display text-[22px] font-semibold leading-snug text-palm-deep group-hover:text-gold transition-colors duration-300">
                    {s.name}
                  </h3>
                </Link>

                {/* Desc */}
                <p className="mt-2.5 flex-1 text-[13.5px] font-light leading-relaxed text-ink-soft">
                  {s.desc}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
                      {cat.id === 'transfers' ? 'Private Transfer' : 'Best Rate Guarantee'}
                    </p>
                    <p className="mt-0.5 text-[15px] font-semibold text-palm">
                      {t.category.priceOnRequest}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/details/${toSlug(s.name)}`}
                      className="flex items-center justify-center rounded-full border border-gold px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold hover:bg-gold hover:text-palm-deep transition-all duration-300 whitespace-nowrap shrink-0"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => onBook(s.name)}
                      className="flex items-center gap-1.5 rounded-full bg-palm px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sand shadow-sm transition-all duration-300 hover:bg-gold hover:text-palm-deep hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap shrink-0"
                    >
                      Book <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { icon: Star, text: '4.9 / 5 average rating' },
            { icon: Check, text: 'All-inclusive services, no hidden fees' },
            { icon: Check, text: 'Free cancellation available' },
          ].map((t) => (
            <span key={t.text} className="flex items-center gap-2 text-[11.5px] font-medium text-ink-soft">
              <t.icon className="h-4 w-4 text-gold-deep fill-gold-deep" strokeWidth={1.5} />
              {t.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
