import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import FeaturedTours from '@/sections/FeaturedTours'
import HowItWorks from '@/sections/HowItWorks'
import GallerySection from '@/sections/GallerySection'
import WhyUs from '@/sections/WhyUs'
import Testimonials from '@/sections/Testimonials'
import FaqSection from '@/sections/FaqSection'
import Booking from '@/sections/Booking'
import Footer from '@/sections/Footer'
import FloatingActions from '@/components/FloatingActions'
import SchemaOrg from '@/components/SchemaOrg'
import { useSEO } from '@/hooks/useSEO'

const HOME_FAQS = [
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer free cancellation up to 24 hours before your scheduled service starts. If your plans change, simply drop us a message on WhatsApp or email, and we will update or cancel your booking with zero fees.',
  },
  {
    question: 'How do I meet my driver at Marrakech Airport (RAK)?',
    answer: 'Your driver will meet you inside the main arrivals terminal hall, immediately after you clear customs and baggage claim. They will be holding a professional sign displaying the "Enjoy Marrakech Tours" logo and your name. Flight tracking is included, so we will be there even if your flight is early or delayed.',
  },
  {
    question: 'Are the vehicles private, clean, and air-conditioned?',
    answer: 'Yes, 100%. We operate a modern fleet of clean, fully licensed, and comprehensively insured tourist vehicles. Each vehicle is equipped with air conditioning and is booked exclusively for your party—no sharing with strangers, no unscheduled stops.',
  },
  {
    question: 'Can you design a custom multi-day itinerary for us?',
    answer: 'Absolutely. Beyond our standard day trips and desert packages, our Marrakech team specializes in crafting custom, multi-day tours across Morocco. Contact us with your travel dates, group size, and interests, and we will prepare a bespoke itinerary.',
  },
  {
    question: 'Is tipping customary in Morocco?',
    answer: 'Tipping is customary in Moroccan culture and is highly appreciated by drivers, local guides, and riad staff for excellent service. While completely optional and at your discretion, a typical tip is around 10-15% of the trip cost.',
  },
  {
    question: 'Is it safe to travel to the desert with children?',
    answer: 'Yes, it is very safe and incredibly memorable for families. We structure our family desert tours with plenty of stops, comfortable air-conditioned transport, and family-friendly camps equipped with private ensuite bathrooms and proper bedding.',
  },
]

export default function Home() {
  useSEO({
    title: 'Private Marrakech Tours & Sahara Desert Trips',
    description:
      'Book premium private tours in Marrakech & Sahara desert trips with officially licensed guides. Custom Morocco itineraries, VIP transfers, and 24/7 support.',
    image: '/images/hero.jpg',
    url: '/',
  })

  return (
    <div className="min-h-screen">
      <SchemaOrg type="LocalBusiness" />
      <SchemaOrg type="FAQPage" faqs={HOME_FAQS} />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <FeaturedTours />
        <GallerySection />
        <WhyUs />
        <Testimonials />
        <FaqSection />
        <Booking selected="" />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
