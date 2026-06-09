import type { AppContext } from '@slidev/types'

function withBase(path: string) {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.replace(/^\/+/, '')
  return `${normalizedBase}${normalizedPath}`
}

function imageUrl(path: string) {
  return withBase(`images/${path}`)
}

function cssUrl(path: string) {
  return `url("${imageUrl(path)}")`
}

function setImageCssVariables() {
  const root = document.documentElement.style

  root.setProperty('--aipp-cover-bg-image', cssUrl('aipp-cover-bg.png'))
  root.setProperty('--aipp-marco-bg-image', cssUrl('aipp-marco-bg.png'))
  root.setProperty('--aipp-whattadata-bg-image', cssUrl('whattadata-bg.png'))
  root.setProperty('--aipp-indice-bg-image', cssUrl('aipp-indice-bg-subtle.png'))
  root.setProperty('--aipp-socialita-bg-image', cssUrl('socialita-digitale-bg.png'))
  root.setProperty('--aipp-critique-bg-image', cssUrl('llmpatients-critique-conversation-bg.png'))
}

export default async function setupAippDeck({ app, router }: AppContext) {
  app.config.globalProperties.$aippImage = imageUrl
  setImageCssVariables()

  const mountSegment = location.pathname.split('/').filter(Boolean)[0]
  const hashPath = location.hash.startsWith('#/')
    ? location.hash.slice(2)
    : ''

  if (!mountSegment || !hashPath.startsWith(`${mountSegment}/`))
    return

  const normalizedPath = `/${hashPath.slice(mountSegment.length + 1) || '1'}`
  history.replaceState(null, '', `${location.pathname}${location.search}#${normalizedPath}`)
  await router.replace(normalizedPath)
}
