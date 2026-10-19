import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Lang, type Translations } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('emt-lang') as Lang | null
    return stored && ['en', 'fr', 'ar', 'es'].includes(stored) ? stored : 'en'
  })

  // Apply RTL direction and <html lang> on every language change
  useEffect(() => {
    const isRTL = lang === 'ar'
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    localStorage.setItem('emt-lang', l)
    setLangState(l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as Translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used inside <LanguageProvider>')
  return ctx
}
