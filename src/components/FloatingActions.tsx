import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { waLink } from '@/data/site'
import { trackWhatsAppClick } from '@/lib/analytics'

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-white border border-sand-line/60 text-palm-deep shadow-lux transition-all duration-500 hover:bg-gold hover:text-palm-deep ${
          showScroll ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2} />
      </button>

      {/* Quick WhatsApp Action */}
      <a
        href={waLink('Hello! I would like to inquire about booking a tour.')}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackWhatsAppClick('floating_button', 'Hello! I would like to inquire about booking a tour.')}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lux transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>
    </div>
  )
}
