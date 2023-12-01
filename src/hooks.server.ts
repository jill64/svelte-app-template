import { attach as lang_attach } from '$lib/i18n'
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { ogpAttach, onRender } from '@jill64/svelte-suite'
import { sequence } from '@sveltejs/kit/hooks'

const { onHandle, onError } = serverInit('')

export const handle = onHandle(sequence(lang_attach, onRender(), ogpAttach))
export const handleError = onError()
