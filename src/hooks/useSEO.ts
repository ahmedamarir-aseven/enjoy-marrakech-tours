import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

const SITE_NAME = 'Enjoy Marrakech Tours'
const BASE_URL = 'https://enjoymarrakechtours.com'
const DEFAULT_IMAGE = `${BASE_URL}/images/hero.jpg`

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    const match = selector.match(/\[(\w+)="([^"]+)"\]/)
    if (match) el.setAttribute(match[1], match[2])
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function setCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

export function useSEO({ title, description, image, url, type = 'website' }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    const resolvedImage = image
      ? image.startsWith('http')
        ? image
        : `${BASE_URL}${image}`
      : DEFAULT_IMAGE
    const resolvedUrl = url ? `${BASE_URL}${url}` : BASE_URL + window.location.pathname

    // Title
    document.title = fullTitle

    // Basic
    setMeta('meta[name="description"]', 'content', description)

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:image"]', 'content', resolvedImage)
    setMeta('meta[property="og:url"]', 'content', resolvedUrl)
    setMeta('meta[property="og:type"]', 'content', type)
    setMeta('meta[property="og:site_name"]', 'content', SITE_NAME)
    setMeta('meta[property="og:locale"]', 'content', 'en_US')

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', resolvedImage)

    // Canonical
    setCanonical(resolvedUrl)

    return () => {
      document.title = `${SITE_NAME} — Private Tours, Desert Trips & Transfers`
    }
  }, [title, description, image, url, type])
}
