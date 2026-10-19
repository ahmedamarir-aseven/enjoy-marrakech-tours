import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { CATEGORIES, optimizeImage } from '@/data/site'
import { useTranslation } from '@/i18n/LanguageContext'

export default function Categories() {
  const { t } = useTranslation()
  return (
    <section id="categories" className="zellige-light relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute -left-64 top-1/4 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-64 bottom-1/4 h-[500px] w-[500px] rounded-full bg-palm/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionHeading
          eyebrow={t.categories.eyebrow}
          title={t.categories.title}
          lead={t.categories.lead}
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => {
            const firstServiceWithImage = c.services.find((s) => s.image)
            const cardBgImage = firstServiceWithImage?.image || c.image

            return (
              <Reveal key={c.id} delay={(i % 4) * 90}>
                <Link
                  to={`/services/${c.id}`}
                  className="group relative block w-full overflow-hidden text-left bg-white rounded-xl border border-sand-line/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-lux"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-palm-deep">
                    <img
                      src={optimizeImage(cardBgImage, 500, 330)}
                    alt={c.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-palm-deep/30 to-transparent" />
                  
                  {/* Floating Services Count */}
                  <span className="absolute right-3 top-3 rounded-full bg-palm-deep/85 backdrop-blur-sm px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-sand shadow-sm">
                    {c.services.length} {t.categories.services}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 relative">
                  <h3 className="font-display text-[23px] font-semibold leading-tight text-palm-deep group-hover:text-gold transition-colors duration-300">
                    {c.label}
                  </h3>
                  <p className="mt-2 text-[13.5px] font-light leading-relaxed text-ink-soft line-clamp-2">
                    {c.blurb}
                  </p>
                  
                  {/* Action Link */}
                  <div className="mt-4 pt-4 border-t border-sand-deep/40 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-palm group-hover:text-gold transition-colors duration-300">
                    <span>{t.categories.explore}</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-palm-mist text-palm group-hover:bg-gold group-hover:text-palm-deep transition-all duration-300">
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )})}
        </div>
      </div>
    </section>
  )
}

