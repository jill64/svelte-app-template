<script lang="ts">
  import { i } from '$lib/i18n'
  import {
    OGP,
    ThemeManager,
    Toaster,
    theme
  } from '@jill64/svelte-suite'
  import {
    LanguageManager,
    LocaleAlternates,
  } from '@jill64/svelte-suite/i18n'
  import '../app.postcss'

  let { children } = $props()

  let title = $derived(i.translate({
    en: 'Title',
    ja: 'タイトル'
  }))

  let description = $derived(i.translate({
    en: 'Description',
    ja: '説明'
  }))

  // eslint-disable-next-line
  let suffix = theme.isDark ? '-dark' : ''
</script>

<Toaster dark={theme.isDark} />
<LanguageManager />
<LocaleAlternates />
<ThemeManager />
<OGP
  {title}
  {description}
  site_name={title}
  image="https://example.com/og-image.png"
/>

<svelte:head>
  <!-- 
    <link rel="icon" href="{base}/favicon{suffix}.png" />
    <link rel="icon" href="{base}/favicon{suffix}.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="{base}/apple-touch-icon{suffix}.png" />
  -->
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

{@render children()}
