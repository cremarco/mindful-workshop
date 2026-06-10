import { defineMermaidSetup } from '@slidev/types'

const sectionAwareFlowchartCss = `
  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: var(--aipp-mermaid-node-fill);
    stroke: var(--aipp-mermaid-node-stroke);
    stroke-width: 1.7px;
  }

  .mermaid-focus rect,
  .mermaid-focus circle,
  .mermaid-focus ellipse,
  .mermaid-focus polygon,
  .mermaid-focus path {
    fill: var(--aipp-mermaid-focus-fill);
    stroke: var(--aipp-mermaid-focus-stroke);
    stroke-width: 2.2px;
  }

  .flowchart-link,
  .edgePath .path {
    stroke: var(--aipp-mermaid-line);
    stroke-width: 2.2px;
  }

  .arrowMarkerPath,
  marker path,
  marker polygon {
    fill: var(--aipp-mermaid-line);
    stroke: var(--aipp-mermaid-line);
  }

  .label,
  .label text,
  .label span,
  .label p,
  .nodeLabel,
  .nodeLabel p {
    color: var(--aipp-mermaid-text);
    fill: var(--aipp-mermaid-text);
  }

  .mermaid-focus .label,
  .mermaid-focus .label text,
  .mermaid-focus .label span,
  .mermaid-focus .label p,
  .mermaid-focus .nodeLabel,
  .mermaid-focus .nodeLabel p {
    color: var(--aipp-mermaid-focus-text);
    fill: var(--aipp-mermaid-focus-text);
    font-weight: 650;
  }

  .edgeLabel,
  .edgeLabel p {
    background-color: var(--aipp-mermaid-label-fill);
    color: var(--aipp-mermaid-label-text);
  }

  .edgeLabel rect,
  .labelBkg {
    fill: var(--aipp-mermaid-label-fill);
    background-color: var(--aipp-mermaid-label-fill);
    opacity: 0.94;
  }
`

/* Shared theme for every diagram in the deck.
   Each fence still needs `{theme: 'base'}`: in dark mode Slidev forces
   theme 'dark' when the fence omits it, and Mermaid ignores these
   themeVariables under any theme other than 'base'. Per-fence options
   replace top-level keys wholesale (shallow merge), so keep any
   themeVariables overrides out of slides.md.

   Section colors are applied through themeCSS because Mermaid derives
   themeVariables with khroma and cannot parse CSS custom properties there. */
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeCSS: sectionAwareFlowchartCss,
  themeVariables: {
    primaryColor: '#ffffff',
    primaryBorderColor: '#d9d7d2',
    primaryTextColor: '#1d1d1f',
    secondaryColor: '#f3f2ef',
    tertiaryColor: '#f6f5f2',
    lineColor: '#a8a6a3',
    edgeLabelBackground: '#ffffff',
    fontFamily: 'SF Pro Display, -apple-system, Helvetica Neue, sans-serif',
    fontSize: '15px',
    useGradient: false,
  },
}))
