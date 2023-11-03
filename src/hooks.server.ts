import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import { attach } from '$lib/i18n'
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { onRender } from '@jill64/svelte-dark-theme'
import { sequence } from '@sveltejs/kit/hooks'

const { onHandle, onError } = serverInit(PUBLIC_SENTRY_DSN)

export const handle = onHandle(sequence(attach, onRender()))
export const handleError = onError()
