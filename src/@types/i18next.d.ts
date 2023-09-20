import 'i18next'
import type global from '../locales/en/global.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'global'
    resources: {
      global: typeof global
    }
  }
}
