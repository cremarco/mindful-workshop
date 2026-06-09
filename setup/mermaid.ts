import { defineMermaidSetup } from '@slidev/types'

/* Shared theme for every diagram in the deck.
   Each fence still needs `{theme: 'base'}`: in dark mode Slidev forces
   theme 'dark' when the fence omits it, and Mermaid ignores these
   themeVariables under any theme other than 'base'. Per-fence options
   replace top-level keys wholesale (shallow merge), so keep any
   themeVariables overrides out of slides.md. */
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    primaryColor: '#ffffff',
    primaryBorderColor: '#d9d7d2',
    primaryTextColor: '#1d1d1f',
    secondaryColor: '#f3f2ef',
    tertiaryColor: '#f6f5f2',
    lineColor: '#a8a6a3',
    fontFamily: 'SF Pro Display, -apple-system, Helvetica Neue, sans-serif',
    fontSize: '15px',
  },
}))
