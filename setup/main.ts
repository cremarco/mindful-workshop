import type { AppContext } from '@slidev/types'

export default async function normalizeLegacyGitHubPagesHash({ router }: AppContext) {
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
