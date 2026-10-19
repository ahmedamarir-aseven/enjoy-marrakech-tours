import { useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { Clock3, ShieldCheck, Star } from 'lucide-react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { findItemBySlug, optimizeImage } from '@/data/site'
import BookingForm from '@/components/BookingForm'
import SchemaOrg from '@/components/SchemaOrg'
import { useSEO } from '@/hooks/useSEO'
import { useTranslation } from '@/i18n/LanguageContext'
import { trackTourView } from '@/lib/analytics'

export default function Details() {
  const { slug } = useParams()
  const item = slug ? findItemBySlug(slug) : null
  const { t } = useTranslation()

  useSEO({
    title: item ? `${item.name} | Private Tour & Excursion` : 'Tour Not Found',
    description: item
      ? `Book the private ${item.name} with Enjoy Marrakech Tours. ${item.desc.substring(0, 120)}... Officially licensed guide, hotel pickup, and private transport.`
      : 'Tour not found. Browse our full range of Morocco tours, excursions, and private airport transfers.',
    image: item?.image,
    url: `/details/${slug}`,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    if (item) {
      trackTourView(item.name, item.price)
    }
  }, [slug, item])

  if (!item) {
    return (
      <div className="min-h-screen bg-sand flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-5 py-32">
          <h1 className="font-display text-4xl font-semibold text-palm-deep">{t.details.notFound}</h1>
          <p className="mt-4 text-ink-soft max-w-md font-light">
            {t.details.notFoundDesc}
          </p>
          <Link
            to="/"
            className="mt-8 rounded-full bg-palm px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-sand transition hover:bg-gold hover:text-palm-deep"
          >
            {t.details.backHome}
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F1E5] flex flex-col justify-between">
      {item && (
        <SchemaOrg
          type="TouristTrip"
          name={item.name}
          description={item.desc}
          image={item.image || ''}
          price={item.price}
          days={item.days}
          rating={item.rating}
          reviewCount={item.reviews}
        />
      )}
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <div className="relative h-[45vh] min-h-[350px] w-full overflow-hidden bg-palm-deep">
          <img
            src={optimizeImage(item.image, 1920, 850)}
            alt={item.name}
            className="h-full w-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palm-deep via-palm-deep/45 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              {item.badge && (
                <span className="inline-block rounded-full bg-gold px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-palm-deep mb-4 shadow-sm">
                  {item.badge}
                </span>
              )}
              <h1 className="font-display text-[38px] md:text-[56px] font-semibold leading-tight text-sand">
                {item.name}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-sand/80">
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-gold" /> {item.days}
                </span>
                <span className="text-sand/30">|</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-gold fill-current" /> {item.rating} ({item.reviews} reviews)
                </span>
                <span className="text-sand/30">|</span>
                <span className="flex items-center gap-1 text-gold font-bold text-[13px] uppercase tracking-wider">
                  {t.category.priceOnRequest}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content & Booking layout */}
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-6 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            
            {/* Left: Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-semibold text-palm-deep">{t.details.overview}</h2>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </div>

              <div className="border-t border-sand-line/50 pt-8">
                <h3 className="font-display text-2xl font-semibold text-palm-deep">{t.details.itinerary}</h3>
                <ul className="mt-6 space-y-4">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-[15px] font-light text-ink-soft">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-palm/10 text-palm text-[11px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-sand-line/50 pt-8">
                <h3 className="font-display text-2xl font-semibold text-palm-deep">{t.details.included}</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {t.details.includedItems.map((inc) => (
                    <div key={inc} className="flex items-center gap-2.5 text-[14px] font-light text-ink-soft">
                      <ShieldCheck className="h-4.5 w-4.5 text-gold-deep shrink-0" strokeWidth={2} />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-sand-line/50 pt-8">
                <h3 className="font-display text-2xl font-semibold text-palm-deep">{t.details.importantInfo}</h3>
                <div className="mt-4 p-5 rounded-xl bg-palm/5 border border-palm/10 text-[14px] font-light leading-relaxed text-ink-soft space-y-3">
                  <p><strong>{t.details.departureLabel}</strong> {t.details.departureText}</p>
                  <p><strong>{t.details.tippingLabel}</strong> {t.details.tippingText}</p>
                </div>
              </div>
            </div>

            <div className="relative lg:block">
              <div className="sticky top-28 rounded-2xl bg-white border border-sand-line/60 p-6 shadow-lux">
                <div className="border-b border-sand-line/45 pb-4 mb-6">
                  <div className="flex items-baseline justify-between mb-3 border-b border-sand-line/20 pb-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-deep">Price</span>
                    <span className="text-[18px] font-semibold text-palm-deep">
                      {t.category.priceOnRequest}
                    </span>
                  </div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-gold-deep">{t.details.flexibleInquiry}</p>
                  <p className="mt-1 text-[13.5px] font-light leading-relaxed text-ink-soft">
                    {t.details.flexibleDesc}
                  </p>
                </div>
                <BookingForm initialService={item.name} readOnlyService />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
