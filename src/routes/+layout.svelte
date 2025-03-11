<script lang="ts">
  import { i } from '$lib/i18n'
  import {
    FlipButton,
    OGP,
    ThemeManager,
    Toaster,
    theme
  } from '@jill64/svelte-suite'
  import {
    LanguageManager,
    LanguageSwitcher
  } from '@jill64/svelte-suite/i18n/app'
  import '../app.postcss'

  let { children } = $props()

  let title = $derived(
    i.translate({
      en: 'Title',
      ja: 'タイトル'
    })
  )

  let description = $derived(
    i.translate({
      en: 'Description',
      ja: '説明'
    })
  )

  let suffix = theme.isDark ? '-dark' : ''
</script>

<Toaster dark={theme.isDark} />
<LanguageManager />
<ThemeManager />
<OGP
  {title}
  {description}
  site_name={title}
  image="https://example.com/og-image.png"
/>

<svelte:head>
  <link rel="icon" href="favicon{suffix}.png" />
  <link rel="icon" href="favicon{suffix}.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="apple-touch-icon{suffix}.png" />
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<header class="flex items-center justify-between py-1 px-2">
  <a href="/" class="flex items-center mr-auto">
    <h1>Title</h1>
  </a>
  <LanguageSwitcher
    stroke={theme.isDark ? '#FFF' : '#000'}
    menuClass="absolute top-10 right-0 menu flex flex-col z-10"
    liClass="whitespace-nowrap"
  >
    {#snippet children(label)}
      {#if label === 'en'}
        {i.translate({ en: 'English', ja: '英語' })}
      {/if}
      {#if label === 'ja'}
        {i.translate({ en: 'Japanese', ja: '日本語' })}
      {/if}
    {/snippet}
  </LanguageSwitcher>
  <FlipButton />
</header>

{@render children()}
