import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { Ornament } from '@/components/SectionHeading'
import { BRAND } from '@/data/site'
import BookingForm from '@/components/BookingForm'
import { useTranslation } from '@/i18n/LanguageContext'

type Props = { selected: string }

export default function Booking({ selected }: Props) {
  const { t } = useTranslation()

  const contacts = [
    { icon: Phone, label: t.booking.phoneLabel, value: `${BRAND.phone}  ·  ${BRAND.phone2}`, href: `tel:${BRAND.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: t.booking.emailLabel, value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: MapPin, label: t.booking.officeLabel, value: BRAND.address },
    { icon: Clock3, label: t.booking.hoursLabel, value: BRAND.hours },
  ]

  return (
    <section id="booking" className="zellige relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Left: pitch + contact */}
          <Reveal>
            <Ornament className="text-gold" />
            <p className="eyebrow mt-4 !text-gold">{t.booking.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.08] text-sand md:text-[50px]">
              {t.booking.title1}
              <br />
              <span className="italic text-gold">{t.booking.title2}</span>
            </h2>
            <p className="mt-5 max-w-lg text-[16px] font-light leading-relaxed text-sand/75">
              {t.booking.lead}
            </p>

            <div className="mt-10 space-y-5">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                    <c.icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-[15px] font-light text-sand transition hover:text-gold">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-[15px] font-light text-sand">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <div className="rounded-2xl bg-white border border-sand-line/60 p-7 shadow-lux sm:p-10">
              <BookingForm initialService={selected} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
