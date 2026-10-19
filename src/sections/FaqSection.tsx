import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useTranslation } from '@/i18n/LanguageContext'

export default function FaqSection() {
  const { t } = useTranslation()
  return (
    <section id="faq" className="zellige relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-6">
        <SectionHeading
          dark
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          lead={t.faq.lead}
        />

        <Reveal className="mt-16 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-10 backdrop-blur-[2px]">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-white/[0.08] py-2">
                <AccordionTrigger className="font-display text-[18px] sm:text-[21px] font-semibold text-sand hover:text-gold hover:no-underline text-left transition-colors duration-300">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14.5px] font-light leading-relaxed text-sand/70 pt-2 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
