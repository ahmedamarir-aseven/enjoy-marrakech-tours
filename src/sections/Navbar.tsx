import { useEffect, useState } from 'react'
import { Globe, Menu, Phone, X } from 'lucide-react'
import Logo from '@/components/Logo'
import { BRAND } from '@/data/site'
import { useTranslation } from '@/i18n/LanguageContext'
import type { Lang } from '@/i18n/translations'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
  { code: 'es', label: 'ES' },
]

export default function Navbar() {
  const { t, lang, setLang } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: t.nav.tours, href: '/#tours' },
    { label: t.nav.services, href: '/#categories' },
    { label: t.nav.process, href: '/#how-it-works' },
    { label: t.nav.gallery, href: '/#gallery' },
    { label: t.nav.whyUs, href: '/#why' },
    { label: t.nav.faq, href: '/#faq' },
    { label: t.nav.contact, href: '/#booking' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar (Desktop) */}
      <div
        className={`hidden bg-palm-deep text-sand/80 transition-all duration-500 lg:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[12.5px] tracking-wide">
          <p className="font-light">{BRAND.license} — Marrakech, Morocco</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 transition hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" /> {BRAND.phone}
            </a>
            <span className="text-sand/40">|</span>
            <a href={`tel:${BRAND.phone2.replace(/\s/g, '')}`} className="flex items-center gap-2 transition hover:text-gold">
              {BRAND.phone2}
            </a>
            <span className="text-sand/40">|</span>
            {/* Desktop language switcher */}
            <div className="flex items-center gap-1.5">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`rounded px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                    lang === l.code
                      ? 'bg-gold text-palm-deep'
                      : 'text-sand/60 hover:text-gold'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-sand/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.03)] border-b border-sand-line/50 py-3 lg:py-4'
            : 'bg-gradient-to-b from-palm-deep/80 to-transparent border-transparent py-5 lg:py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-6">
          <Logo light={!scrolled && !open} />

          {/* Desktop Links */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`group/nav relative text-[12.5px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 ${
                  scrolled ? 'text-palm hover:text-gold-deep' : 'text-sand/95 hover:text-gold'
                }`}
              >
                {n.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover/nav:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="/#booking"
              className="rounded-full bg-gold px-7 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-palm-deep shadow-[0_8px_24px_rgba(198,161,91,0.3)] transition-all duration-300 hover:bg-palm hover:text-sand hover:shadow-lux"
            >
              {t.nav.bookNow}
            </a>
          </div>

          {/* Hamburger */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden focus:outline-none p-1 transition-colors duration-300 ${
                scrolled ? 'text-palm hover:text-gold-deep' : 'text-sand hover:text-gold'
              }`}
              aria-label="Menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden flex flex-col justify-between overflow-y-auto pt-24 pb-8 px-8 ${
          open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        {/* Header row */}
        <div className="absolute top-0 inset-x-0 h-20 px-5 flex items-center justify-between border-b border-palm-deep/5">
          <Logo light={false} />
          <button
            onClick={() => setOpen(false)}
            className="text-palm-deep hover:text-gold-deep focus:outline-none p-1"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center min-h-max py-8">
          <nav className="flex flex-col gap-5">
            {navItems.map((n, idx) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`font-display text-[26px] xs:text-[30px] font-semibold text-palm-deep hover:text-gold-deep transition-all duration-500 tracking-wide origin-left transform ${
                  open ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-4 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: open ? `${idx * 60}ms` : '0ms' }}
              >
                {n.label}
              </a>
            ))}

            {/* ── Mobile Language Switcher ── */}
            <div
              className={`mt-4 flex items-center gap-2 transform transition-all duration-500 ${
                open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${navItems.length * 60}ms` : '0ms' }}
            >
              <Globe className="h-4 w-4 text-gold-deep shrink-0" />
              <div className="flex items-center gap-1.5">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${
                      lang === l.code
                        ? 'bg-gold text-palm-deep shadow-sm'
                        : 'border border-palm-deep/15 text-palm-deep/60 hover:border-gold hover:text-gold-deep'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Now CTA */}
            <a
              href="/#booking"
              onClick={() => setOpen(false)}
              className={`mt-4 inline-block rounded-full bg-palm-deep py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-sand shadow-lux transition duration-300 hover:bg-gold hover:text-palm-deep transform ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${(navItems.length + 1) * 60}ms` : '0ms' }}
            >
              {t.nav.bookNow}
            </a>
          </nav>
        </div>

        {/* Info panel */}
        <div
          className={`border-t border-palm-deep/10 pt-6 text-ink-soft/80 text-[12px] font-light space-y-1.5 transform transition-all duration-700 shrink-0 ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: open ? `${(navItems.length + 2) * 60}ms` : '0ms' }}
        >
          <p className="font-semibold uppercase tracking-[0.16em] text-gold-deep text-[9px]">{BRAND.license}</p>
          <p className="leading-relaxed">{BRAND.address}</p>
          <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="block text-palm hover:text-gold-deep transition-colors font-medium">
            {BRAND.phone}
          </a>
          <a href={`tel:${BRAND.phone2.replace(/\s/g, '')}`} className="block text-palm hover:text-gold-deep transition-colors font-medium">
            {BRAND.phone2}
          </a>
          <p className="text-[10px] text-ink-soft/40 mt-1">© {new Date().getFullYear()} Enjoy Marrakech Tours.</p>
        </div>
      </div>
    </header>
  )
}
