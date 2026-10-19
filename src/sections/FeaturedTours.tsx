import { Link } from 'react-router'
import { ArrowRight, Check, Clock3, Star } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { FEATURED, toSlug, optimizeImage } from '@/data/site'
import { useTranslation } from '@/i18n/LanguageContext'

export default function FeaturedTours() {
  const { t } = useTranslation()
  return (
    <section id="tours" className="relative scroll-mt-24 bg-sand-deep/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionHeading
          eyebrow={t.featuredTours.eyebrow}
          title={t.featuredTours.title}
          lead={t.featuredTours.lead}
        />

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED.map((tour, i) => (
            <Reveal key={tour.title} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-sand-line/75 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-lux">
                <Link to={`/details/${toSlug(tour.title)}`} className="relative h-64 overflow-hidden bg-palm-deep block">
                  <img
                    src={optimizeImage(tour.image, 600, 400)}
                    alt={tour.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-palm-deep/80 via-transparent to-transparent" />
                  {tour.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-palm-deep shadow-sm">
                      {tour.badge}
                    </span>
                  )}
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-0.5 text-gold">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className="h-3.5 w-3.5 fill-current" strokeWidth={1} />
                        ))}
                      </span>
                      <span className="text-[12px] font-semibold tracking-wider text-ink-soft uppercase">
                        {tour.rating} · {tour.reviews} {t.featuredTours.reviews}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-palm/8 border border-palm/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-palm">
                      <Clock3 className="h-3 w-3 text-gold" />
                      {tour.days}
                    </span>
                  </div>

                  <Link to={`/details/${toSlug(tour.title)}`}>
                    <h3 className="mt-3.5 font-display text-[24px] font-medium leading-tight text-palm-deep group-hover:text-gold transition-colors duration-300">
                      {tour.title}
                    </h3>
                  </Link>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {tour.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[14px] font-light leading-relaxed text-ink-soft">
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-deep" strokeWidth={2.5} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between border-t border-sand-line/50 pt-5">
                    <div>
                      <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">{t.featuredTours.privateExp}</p>
                      <p className="mt-0.5 text-[15px] font-semibold text-palm">
                        {t.category.priceOnRequest}
                      </p>
                    </div>
                    <Link
                      to={`/details/${toSlug(tour.title)}`}
                      className="flex items-center gap-2 rounded-full border border-palm bg-palm px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand transition-all duration-300 hover:bg-gold hover:border-gold hover:text-palm-deep hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {t.featuredTours.book} <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
