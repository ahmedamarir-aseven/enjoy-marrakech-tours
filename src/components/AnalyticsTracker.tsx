import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { trackPageView } from '@/lib/analytics'

export default function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    // Wait for the next tick so document.title set by useSEO is current
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search, document.title)
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname, location.search])

  return null
}
