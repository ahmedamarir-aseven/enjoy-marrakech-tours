import { CalendarCheck, Headphones, Map, Sparkles } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { useTranslation } from '@/i18n/LanguageContext'

const ICONS = [Map, Headphones, CalendarCheck, Sparkles]

export default function HowItWorks() {
  const { t } = useTranslation()
  return (
    <section id="how-it-works" className="relative scroll-mt-24 bg-[#EFE5CF] py-24 lg:py-32 overflow-hidden">
      <div className="absolute -left-48 top-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-48 bottom-1/3 h-96 w-96 rounded-full bg-palm/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionHeading
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          lead={t.howItWorks.lead}
        />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-1/2 left-4 right-4 hidden h-px -translate-y-8 bg-ink/10 lg:block border-dashed border-t border-palm/20" />

          {t.howItWorks.steps.map((step, idx) => {
            const Icon = ICONS[idx]
            return (
              <Reveal key={idx} delay={idx * 100}>
                <div className="relative flex flex-col items-center text-center group bg-[#F5EDD9]/40 border border-sand-line/50 p-8 rounded-2xl shadow-sm hover:bg-white hover:shadow-lux transition-all duration-300">
                  <div className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-palm/30 uppercase">
                    {t.howItWorks.step} 0{idx + 1}
                  </div>
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white text-gold-deep shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-semibold text-palm-deep group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-light leading-relaxed text-ink-soft">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
