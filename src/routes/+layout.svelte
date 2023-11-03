<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import { translate } from '$lib/i18n'
  import { ThemeManager, theme } from '@jill64/svelte-dark-theme'
  import { LanguageManager, LocaleAlternates } from '@jill64/svelte-i18n'
  import { Toaster } from '@jill64/svelte-toast'
  import '../app.postcss'

  $: title = $translate({
    en: 'Title',
    ja: 'タイトル'
  })

  $: description = $translate({
    en: 'Description',
    ja: '説明'
  })

  $: suffix = $theme === 'dark' ? '-dark' : ''
</script>

<Toaster />
<LanguageManager />
<LocaleAlternates />
<ThemeManager />
<svelte:head>
  <!-- 
    <link rel="icon" href="{base}/favicon{suffix}.png" />
    <link rel="icon" href="{base}/favicon{suffix}.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="{base}/apple-touch-icon{suffix}.png" />
  -->
  <meta name="description" content={description} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://example.com/og-image.png" />
</svelte:head>
<slot />
