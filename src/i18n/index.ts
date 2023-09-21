import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enGlobal from '@/locales/en/global.json'
import frGlobal from '@/locales/fr/global.json'
import type { Lang } from '@/types/lang'

const resources = {
  en: {
    global: enGlobal
  },
  fr: {
    global: frGlobal
  }
} as const

i18n.use(initReactI18next).init({
  lng: 'en',
  defaultNS: 'global',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources,
  compatibilityJSON: 'v3' // For compatibility on React Native
})

export const changeLanguage = async (lang: Lang) => {
  await i18n.changeLanguage(lang)
}

export default i18n
