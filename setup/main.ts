import type { AppContext } from '@slidev/types'
import { cssUrl, imageUrl, withBase } from '../utils/images'

/* Backgrounds and decorative shapes consumed by the stylesheets.
   Injected at runtime (not hard-coded in CSS) so the URLs resolve
   correctly under any deploy base path. */
const imageCssVariables: Record<string, string> = {
  '--aipp-cover-bg-image': 'backgrounds/aipp-cover.png',
  '--aipp-marco-bg-image': 'backgrounds/marco.png',
  '--aipp-whattadata-bg-image': 'backgrounds/whattadata.png',
  '--aipp-socialita-bg-image': 'backgrounds/socialita-digitale.png',
  '--aipp-ia-cosa-pensiamo-shape': 'decorations/sections/ia-salute-mentale-cosa-pensiamo.png',
  '--aipp-ia-cosa-pensiamo-compact-shape': 'decorations/sections/ia-cosa-pensiamo-compact.png',
  '--aipp-ml-psicologia-shape': 'decorations/sections/ml-psicologia-psichiatria.png',
  '--aipp-sfide-future-shape': 'decorations/sections/sfide-future.png',
  '--aipp-aspetti-normativi-shape': 'decorations/sections/aspetti-normativi-oblong.png',
  '--aipp-tool-index-shape': 'decorations/sections/tool-index.png',
  '--aipp-domande-discussione-shape': 'decorations/sections/domande-discussione.png',
  '--aipp-tesi-finale-shape': 'decorations/sections/tesi-finale-oblong.png',
  '--aipp-grazie-frame': 'decorations/thanks/grazie-corner.png',
  '--aipp-arianne-feedback-thread': 'decorations/feedback/arianne-yarn.png',
  '--aipp-parche-shape': 'decorations/sections/parche-cropped.png',
}

function setImageCssVariables() {
  const root = document.documentElement.style
  for (const [name, path] of Object.entries(imageCssVariables))
    root.setProperty(name, cssUrl(path))
}

/* Links shared from GitHub Pages can carry the mount segment inside the
   hash (e.g. #/AIPP/5); strip it so the router lands on the right slide. */
async function normalizeHashRoute(router: AppContext['router']) {
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

export default async function setupAippDeck({ app, router }: AppContext) {
  app.config.globalProperties.$aippImage = imageUrl
  app.config.globalProperties.$aippCssImage = cssUrl
  app.config.globalProperties.$aippAsset = withBase
  setImageCssVariables()
  await normalizeHashRoute(router)
}
