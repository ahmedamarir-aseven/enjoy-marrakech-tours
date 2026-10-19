import { useEffect } from 'react'
import { BRAND } from '@/data/site'

// ─── Types ───────────────────────────────────────────────────────────────────

interface LocalBusinessSchemaProps {
  type: 'LocalBusiness'
}

interface TouristTripSchemaProps {
  type: 'TouristTrip'
  name: string
  description: string
  image: string
  price?: number
  days: string
  rating: number
  reviewCount: number
}

interface FAQSchemaProps {
  type: 'FAQPage'
  faqs: { question: string; answer: string }[]
}

type SchemaOrgProps = LocalBusinessSchemaProps | TouristTripSchemaProps | FAQSchemaProps

// ─── Schema builders ─────────────────────────────────────────────────────────

const BASE_URL = 'https://enjoymarrakechtours.com'

function buildLocalBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: BRAND.name,
    description:
      'Licensed Moroccan tour operator since 2013. Private airport transfers, Sahara desert tours, day trips and custom Moroccan itineraries.',
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    image: `${BASE_URL}/images/hero.jpg`,
    telephone: BRAND.phone,
    email: BRAND.email,
    priceRange: '$$',
    currenciesAccepted: 'EUR, USD, MAD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHours: 'Mo-Su 07:00-23:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '24 Rue des Banques',
      addressLocality: 'Marrakech',
      addressRegion: 'Marrakech-Safi',
      postalCode: '40000',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.6295,
      longitude: -7.9811,
    },
    hasMap: 'https://maps.google.com/?q=24+Rue+des+Banques+Medina+Marrakech',
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
    sameAs: [
      `https://wa.me/${BRAND.whatsapp}`,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '15000',
      bestRating: '5',
    },
  }
}

function buildTouristTrip(props: TouristTripSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: props.name,
    description: props.description,
    image: props.image.startsWith('http') ? props.image : `${BASE_URL}${props.image}`,
    url: BASE_URL + window.location.pathname,
    touristType: ['Cultural tourists', 'Adventure tourists', 'Family travelers'],
    itinerary: {
      '@type': 'ItemList',
      name: props.name,
    },
    provider: {
      '@type': 'TravelAgency',
      name: BRAND.name,
      url: BASE_URL,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: props.rating.toString(),
      reviewCount: props.reviewCount.toString(),
      bestRating: '5',
    },
  }
}

function buildFAQPage(props: FAQSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

const SCRIPT_ID = 'schema-org-ld-json'

export default function SchemaOrg(props: SchemaOrgProps) {
  useEffect(() => {
    // Remove any existing schema script to avoid duplicates on navigation
    document.querySelectorAll(`[id^="${SCRIPT_ID}"]`).forEach((el) => el.remove())

    let schema: object

    if (props.type === 'LocalBusiness') {
      schema = buildLocalBusiness()
    } else if (props.type === 'TouristTrip') {
      schema = buildTouristTrip(props)
    } else {
      schema = buildFAQPage(props)
    }

    const script = document.createElement('script')
    script.id = `${SCRIPT_ID}-${props.type}`
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema, null, 2)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(props)])

  return null
}
