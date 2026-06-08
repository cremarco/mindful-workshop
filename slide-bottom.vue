<template>
  <template v-if="$page > 1">
    <div
      aria-hidden="true"
      style="
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 19;
        height: 4px;
        background: #e7e5e4;
        pointer-events: none;
      "
    >
      <div
        style="
          height: 100%;
          background: #991b1b;
          transition: width 180ms ease;
        "
        :style="{ width: `${(($page - 1) / ($nav.total - 1)) * 100}%` }"
      />
    </div>

    <footer
      aria-hidden="true"
      style="
        position: absolute;
        right: 24px;
        bottom: 18px;
        z-index: 20;
        font-size: 0.72rem;
        line-height: 1;
        color: #78716c;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0;
        pointer-events: none;
      "
    >
      {{ $page }} / {{ $nav.total }}
    </footer>
  </template>
</template>
