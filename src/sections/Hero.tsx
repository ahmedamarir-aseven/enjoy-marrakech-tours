import { ArrowRight, MessageCircle } from 'lucide-react'
import { waLink } from '@/data/site'
import { useTranslation } from '@/i18n/LanguageContext'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="home" className="relative flex min-h-[70svh] lg:min-h-[100svh] items-center overflow-hidden bg-palm-deep">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1569370088252-c26ef022594c?q=80&w=1920&auto=format&fit=crop"
          alt="Private Marrakech tours and Sahara desert trips - Marrakech medina Koutoubia Mosque at sunset"
          className="kenburns h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-palm-deep/95 via-palm-deep/30 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 lg:px-6">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold mb-5">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-[48px] sm:text-[72px] md:text-[84px] font-semibold leading-[0.95] text-sand">
            {t.hero.title1}
            <br />
            <span className="italic text-gold font-light">{t.hero.title2}</span>
          </h1>

          <p className="mt-6 text-[15px] sm:text-[17px] font-light leading-relaxed text-sand/80 max-w-md">
            {t.hero.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#tours"
              className="group flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-palm-deep transition-all duration-300 hover:bg-sand hover:-translate-y-0.5 hover:shadow-lux"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={waLink('Hello Enjoy Marrakech Tours!')}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-sand/40 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-sand transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
