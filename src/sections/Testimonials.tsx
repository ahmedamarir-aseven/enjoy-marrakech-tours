import { Quote, Star } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { TESTIMONIALS } from '@/data/site'
import { useTranslation } from '@/i18n/LanguageContext'

export default function Testimonials() {
  const { t } = useTranslation()
  return (
    <section id="reviews" className="zellige-light scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          lead={t.testimonials.lead}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 110}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-sand-line/60 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-lux transition-all duration-300">
                <Quote className="absolute right-7 top-7 h-8 w-8 text-gold/25" />
                <span className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" strokeWidth={1} />
                  ))}
                </span>
                <blockquote className="mt-5 flex-1 font-display text-[18.5px] font-medium leading-relaxed text-palm-deep">
                  "{testimonial.text}"
                </blockquote>
                <figcaption className="mt-7 border-t border-sand-line/50 pt-5">
                  <p className="text-[14.5px] font-semibold tracking-wide text-ink">{testimonial.name}</p>
                  <p className="mt-0.5 text-[12px] text-ink-soft/90 font-light">{testimonial.from}</p>
                  <div className="mt-3.5">
                    <span className="inline-block rounded-full border border-palm/15 bg-palm-mist/35 px-3.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-palm">
                      {testimonial.tour}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-[13.5px] font-medium uppercase tracking-[0.2em] text-ink-soft">
            {t.testimonials.rating}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
