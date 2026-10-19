import { Link } from 'react-router'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Logo from '@/components/Logo'
import { BRAND, CATEGORIES, waLink } from '@/data/site'
import { useTranslation } from '@/i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()

  const navItems = [
    { label: t.nav.tours, href: '/#tours' },
    { label: t.nav.services, href: '/#categories' },
    { label: t.nav.process, href: '/#how-it-works' },
    { label: t.nav.gallery, href: '/#gallery' },
    { label: t.nav.whyUs, href: '/#why' },
    { label: t.nav.faq, href: '/#faq' },
    { label: t.nav.contact, href: '/#booking' },
  ]

  return (
    <footer className="bg-palm-deep text-sand">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-[14.5px] font-light leading-relaxed text-sand/65">
              {t.footer.tagline}
            </p>
            <a
              href={waLink('Hello Enjoy Marrakech Tours!')}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-gold/50 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold hover:text-palm-deep"
            >
              <MessageCircle className="h-4 w-4" /> {t.footer.chat}
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.26em] text-gold">{t.footer.explore}</h3>
            <ul className="mt-6 space-y-3.5">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[14.5px] font-light text-sand/70 transition hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.26em] text-gold">{t.footer.services}</h3>
            <ul className="mt-6 space-y-3.5">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link to={`/services/${c.id}`} className="text-[14.5px] font-light text-sand/70 transition hover:text-gold">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.26em] text-gold">{t.footer.contact}</h3>
            <ul className="mt-6 space-y-4 text-[14.5px] font-light text-sand/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="space-y-1">
                  <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="block transition hover:text-gold">
                    {BRAND.phone}
                  </a>
                  <a href={`tel:${BRAND.phone2.replace(/\s/g, '')}`} className="block transition hover:text-gold">
                    {BRAND.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${BRAND.email}`} className="transition hover:text-gold">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {BRAND.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sand/10 pt-8 text-[12.5px] font-light tracking-wide text-sand/50 md:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}</p>
          <p>{BRAND.license} · Marrakech, Morocco</p>
          <p className="flex items-center gap-6">
            <a href="#home" className="transition hover:text-gold">{t.footer.terms}</a>
            <a href="#home" className="transition hover:text-gold">{t.footer.privacy}</a>
            <span className="border-l border-sand/20 pl-6">
              {t.footer.createdBy}{' '}
              <a
                href="https://aseven.dev"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gold/70 transition hover:text-gold"
              >
                aseven
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
