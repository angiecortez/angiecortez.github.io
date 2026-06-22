import { createContext, useContext, useState } from 'react'

export type Lang = 'es' | 'en'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LangCtx>({ lang: 'es', setLang: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
