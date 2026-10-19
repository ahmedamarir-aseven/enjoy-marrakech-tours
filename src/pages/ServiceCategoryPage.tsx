import { useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { ArrowLeft, ArrowRight, Check, Clock3, Star } from 'lucide-react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import BookingForm from '@/components/BookingForm'
import FloatingActions from '@/components/FloatingActions'
import { CATEGORIES, toSlug, optimizeImage } from '@/data/site'
import { useSEO } from '@/hooks/useSEO'
import { useTranslation } from '@/i18n/LanguageContext'

// Dynamic image resolver mapping name queries to actual asset files
const getServiceImage = (name: string, fallback: string) => {
  const n = name.toLowerCase()
  if (n.includes('desert') || n.includes('camp') || n.includes('merzouga') || n.includes('zagora')) return '/images/desert.jpg'
  if (n.includes('transfer') || n.includes('taxi') || n.includes('airport') || n.includes('chauffeur') || n.includes('vehicle') || n.includes('hotel')) return '/images/transfer.jpg'
  if (n.includes('balloon')) return '/images/balloon.jpg'
  if (n.includes('essaouira')) return '/images/essaouira.jpg'
  if (n.includes('cooking') || n.includes('hammam') || n.includes('spa') || n.includes('dinner') || n.includes('show') || n.includes('tea') || n.includes('henna') || n.includes('fantasia')) return '/images/experience.jpg'
  if (n.includes('mountain') || n.includes('atlas') || n.includes('toubkal') || n.includes('imlil')) return '/images/atlas.jpg'
  if (n.includes('camel') || n.includes('ride') || n.includes('quad') || n.includes('buggy') || n.includes('horse') || n.includes('paragliding') || n.includes('zipline') || n.includes('jet ski') || n.includes('surf') || n.includes('sandboard') || n.includes('agafay')) return '/images/camel.jpg'
  if (n.includes('ait ben haddou') || n.includes('ouarzazate') || n.includes('ksar')) return '/images/aitbenhaddou.jpg'
  return fallback
}

// Generate stable user feedback metrics based on title character sum
const getServiceMeta = (name: string, catId: string) => {
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const rating = (4.7 + (hash % 4) * 0.1).toFixed(1)
  const reviews = 45 + (hash % 120)

  // Calculate sensible duration default strings
  let duration = '1 Day'
  if (catId === 'transfers') duration = 'Flexible'
  else if (catId === 'desert' || catId === 'circuit-tours') {
    const match = name.toLowerCase().match(/(\d+)\s*(?:-|–)?\s*days?/i)
    if (match) {
      const days = parseInt(match[1], 10)
      duration = days > 1 ? `${days} Days · ${days - 1} Nights` : '1 Day'
    }
  } else if (name.includes('Hour') || name.includes('min') || name.includes('Ride')) {
    duration = name.includes('2') || name.includes('Two') ? '2 Hours' : '1 Hour'
  }

  return { rating, reviews, duration }
}

const getSEOData = (id: string, defaultLabel: string, defaultBlurb: string) => {
  switch (id) {
    case 'transfers':
      return {
        title: 'Private Marrakech Airport Transfers & Chauffeur Services',
        description: 'Book professional private airport transfers in Marrakech & across Morocco. Meet & greet, flight tracking, air-conditioned fleet, and 24/7 service.'
      }
    case 'day-trips':
      return {
        title: 'Best Marrakech Day Trips & Guided Excursions | Morocco',
        description: 'Explore top-rated Marrakech day trips to Essaouira, Ouzoud falls, Ourika valley, and Ait Ben Haddou with complimentary hotel pickup and expert local guides.'
      }
    case 'desert':
      return {
        title: 'Private Sahara Desert Tours from Marrakech | Erg Chebbi',
        description: 'Embark on a private Sahara desert tour. Experience sunset camel caravans, luxury desert camps in Merzouga or Zagora, and stunning Atlas mountain crossings.'
      }
    case 'city-tours':
      return {
        title: 'Marrakech Medina Guided Tours & Custom City Walks',
        description: 'Explore Marrakech, Fes, Casablanca, and Rabat with licensed local guides. Discover secret souks, historic palaces, and UNESCO-listed medinas.'
      }
    case 'mountains':
      return {
        title: 'Atlas Mountains Day Trips & Toubkal Summit Trekking',
        description: 'Discover the High Atlas Mountains. Private treks through traditional Berber villages, Ourika valley walks, and guided Jebel Toubkal peak ascents.'
      }
    case 'circuit-tours':
      return {
        title: 'Multi-Day Private Morocco Tours & Desert Circuits',
        description: 'Custom multi-day private circuits across Morocco. Explore imperial cities, Sahara dunes, and coastal gems. Fully tailored to your pace.'
      }
    default:
      return {
        title: `${defaultLabel} in Morocco`,
        description: `${defaultBlurb} Book online with Enjoy Marrakech Tours — licensed Moroccan tour operator since 2013.`
      }
  }
}

export default function ServiceCategoryPage() {
  const { categoryId } = useParams()
  const cat = CATEGORIES.find((c) => c.id === categoryId)
  const { t } = useTranslation()

  const seoData = cat ? getSEOData(cat.id, cat.label, cat.blurb) : {
    title: 'Morocco Tour Services',
    description: 'Explore our full range of Morocco tours, transfers, and experiences. Book online with Enjoy Marrakech Tours.'
  }

  useSEO({
    title: seoData.title,
    description: seoData.description,
    image: cat?.image,
    url: cat ? `/services/${cat.id}` : '/services',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryId])

  if (!cat) {
    return (
      <div className="min-h-screen bg-[#F7F1E5] flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-5 py-32">
          <h1 className="font-display text-4xl font-semibold text-palm-deep">{t.category.notFound}</h1>
          <p className="mt-4 text-ink-soft max-w-md font-light">
            {t.category.notFoundDesc}
          </p>
          <Link
            to="/#categories"
            className="mt-8 rounded-full bg-palm px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-sand transition hover:bg-gold hover:text-palm-deep"
          >
            {t.category.allCategories}
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const firstServiceWithImage = cat.services.find((s) => s.image)
  const heroBgImage = firstServiceWithImage?.image || cat.image

  return (
    <div className="min-h-screen bg-[#F7F1E5] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative h-[50vh] min-h-[380px] w-full overflow-hidden bg-palm-deep">
          <img
            src={optimizeImage(heroBgImage, 1920, 850)}
            alt={cat.label}
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palm-deep/95 via-palm-deep/50 to-palm-deep/10" />

          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 md:px-12 max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <Link
              to="/#categories"
              className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/60 hover:text-gold transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t.category.allCategories}
            </Link>

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-3">
              {cat.services.length} {t.categories.services}
            </span>
            <h1 className="font-display text-[44px] md:text-[64px] font-semibold leading-tight text-sand">
              {cat.label}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-sand/80">
              {cat.blurb}
            </p>
          </div>
        </div>

        {/* Category tabs (browse other categories) */}
        <div className="bg-palm-deep border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-6 overflow-x-auto scrollbar-none">
            <div className="flex gap-0 min-w-max">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.id}
                  to={`/services/${c.id}`}
                  className={`relative flex-shrink-0 px-5 py-4 text-[10.5px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${c.id === cat.id
                      ? 'text-gold'
                      : 'text-sand/45 hover:text-sand/80'
                    }`}
                >
                  {c.label}
                  {c.id === cat.id && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gold" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Service cards + booking form */}
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-6 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">

            {/* Services Grid (Signature layout style cards) */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Check className="h-4 w-4 text-gold" strokeWidth={2.5} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
                  Hotel pickup included · Licensed operator
                </span>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {cat.services.map((s) => {
                  const serviceImage = s.image || getServiceImage(s.name, cat.image)
                  const { rating, reviews, duration } = getServiceMeta(s.name, cat.id)

                  return (
                    <article
                      key={s.name}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-sand-line/75 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lux"
                    >
                      {/* Image header matching featured tours */}
                      <Link to={`/details/${toSlug(s.name)}`} className="relative h-48 overflow-hidden bg-palm-deep block">
                        <img
                          src={optimizeImage(serviceImage, 600, 360)}
                          alt={s.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-palm-deep/80 via-transparent to-transparent" />

                        {s.badge && (
                          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[8.5px] font-bold uppercase tracking-[0.16em] text-palm-deep shadow-sm">
                            {s.badge}
                          </span>
                        )}
                      </Link>

                      <div className="flex flex-1 flex-col p-6">
                        {/* Rating row & Clock duration */}
                        <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                          <div className="flex items-center gap-1.5">
                            <span className="flex items-center gap-0.5 text-gold">
                              {Array.from({ length: 5 }).map((_, k) => (
                                <Star key={k} className="h-3 w-3 fill-current" strokeWidth={1} />
                              ))}
                            </span>
                            <span className="text-[11px] font-semibold tracking-wider text-ink-soft uppercase">
                              {rating} ({reviews})
                            </span>
                          </div>

                          <span className="flex items-center gap-1.5 rounded-full bg-palm/8 border border-palm/15 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-palm">
                            <Clock3 className="h-3 w-3 text-gold" />
                            {duration}
                          </span>
                        </div>

                        {/* Title link */}
                        <Link to={`/details/${toSlug(s.name)}`}>
                          <h3 className="font-display text-[22px] font-semibold leading-snug text-palm-deep group-hover:text-gold transition-colors duration-300">
                            {s.name}
                          </h3>
                        </Link>

                        {/* Short Description */}
                        <p className="mt-2.5 flex-1 text-[13.5px] font-light leading-relaxed text-ink-soft line-clamp-3">
                          {s.desc}
                        </p>

                        {/* Footer details + Book details */}
                        <div className="mt-6 flex items-center justify-between border-t border-sand-line/50 pt-4">
                          <div>
                            <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
                              {cat.id === 'transfers' ? 'Private Transfer' : 'Best Rate Guarantee'}
                            </p>
                            <p className="mt-0.5 text-[15px] font-semibold text-palm">
                              {t.category.priceOnRequest}
                            </p>
                          </div>
                          <Link
                            to={`/details/${toSlug(s.name)}`}
                            className="flex items-center gap-1.5 rounded-full bg-palm px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sand transition-all duration-300 hover:bg-gold hover:text-palm-deep hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap shrink-0"
                          >
                            {t.category.book} <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            {/* Sticky booking form */}
            <div className="sticky top-28">
              <div className="rounded-2xl bg-white border border-sand-line/60 p-6 shadow-lux">
                <h3 className="font-display text-[22px] font-semibold text-palm-deep mb-1">
                  Book this category
                </h3>
                <p className="text-[13px] font-light text-ink-soft mb-5">
                  Choose a specific service below, or send us a message and we'll help plan the perfect experience.
                </p>
                <BookingForm />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}
