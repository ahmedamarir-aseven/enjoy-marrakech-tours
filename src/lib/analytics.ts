// Google Analytics 4 (GA4) Integration Helper

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-FEREF32MBX'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Send a page_view event to Google Analytics
 */
export function trackPageView(path: string, title?: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  })
}

/**
 * Send a custom event to Google Analytics
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean | undefined | null>
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', eventName, eventParams)
}

/**
 * Track WhatsApp contact click
 */
export function trackWhatsAppClick(source: string = 'floating_button', message?: string) {
  trackEvent('contact_whatsapp', {
    event_category: 'Engagement',
    event_label: source,
    message_preview: message ? message.slice(0, 50) : undefined,
  })
}

/**
 * Track Phone call click
 */
export function trackPhoneClick(phoneNumber: string) {
  trackEvent('contact_phone', {
    event_category: 'Engagement',
    event_label: phoneNumber,
  })
}

/**
 * Track successful booking form submission (Lead generation conversion)
 */
export function trackBookingSubmission(data: {
  service: string
  travelers?: string | number
  date?: string
}) {
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    event_label: data.service,
    service_name: data.service,
    travelers_count: data.travelers,
    booking_date: data.date,
  })
}

/**
 * Track tour details view
 */
export function trackTourView(tourName: string, price?: number) {
  trackEvent('view_item', {
    event_category: 'Tours',
    item_name: tourName,
    value: price,
    currency: 'EUR',
  })
}

/**
 * Track language change
 */
export function trackLanguageChange(language: string) {
  trackEvent('change_language', {
    event_category: 'User Preference',
    language,
  })
}
