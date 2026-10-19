import { Award, HandHeart, MapPinned, Users } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { Ornament } from '@/components/SectionHeading'
import { useTranslation } from '@/i18n/LanguageContext'

const ICONS = [MapPinned, Award, HandHeart, Users]

export default function WhyUs() {
  const { t } = useTranslation()
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <Reveal className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lux border border-sand-line/50">
              <img
                src="https://images.unsplash.com/photo-1628642004970-1da51c8c7dec?q=80&w=939&auto=format&fit=crop"
                alt="Moroccan mint tea ceremony in a riad"
                loading="lazy"
                className="h-[520px] w-full object-cover lg:h-[600px] transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full border border-gold/30 rounded-2xl" />
          </Reveal>

          {/* Text side */}
          <div>
            <Reveal>
              <Ornament className="text-gold-deep" />
              <p className="eyebrow mt-4">{t.whyUs.eyebrow}</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.08] text-palm-deep md:text-[50px]">
                {t.whyUs.title1}
                <br />
                <span className="italic text-gold-deep">{t.whyUs.title2}</span>
              </h2>
              <p className="mt-5 max-w-xl text-[16px] font-light leading-relaxed text-ink-soft">
                {t.whyUs.lead}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {t.whyUs.points.map((p, i) => {
                const Icon = ICONS[i]
                return (
                  <Reveal key={i} delay={i * 90}>
                    <div className="group">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-white text-gold-deep shadow-sm transition-all duration-300 group-hover:bg-palm group-hover:text-gold group-hover:border-palm">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-4 font-display text-[21px] font-medium text-palm-deep">{p.title}</h3>
                      <p className="mt-2 text-[14px] font-light leading-relaxed text-ink-soft">{p.text}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
