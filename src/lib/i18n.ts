import { init } from '@jill64/svelte-suite/i18n'

export const i = init({
  locales: ['en', 'ja'],
  slug: '[locale=locale]',
  defaultLocale: 'en'
})
