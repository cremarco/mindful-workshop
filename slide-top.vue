<template>
  <template v-if="$page > 1">
    <div class="aipp-progress" aria-hidden="true">
      <div
        class="aipp-progress__bar"
        :style="{
          width: $nav.total > 1
            ? `${(($page - 1) / ($nav.total - 1)) * 100}%`
            : '100%',
        }"
      />
    </div>

    <footer class="aipp-slide-number" aria-hidden="true">
      {{ $page }} / {{ $nav.total }}
    </footer>
  </template>
</template>

<style scoped>
.aipp-progress {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 90;
  height: 4px;
  background: #e7e5e4;
  pointer-events: none;
}

.aipp-progress__bar {
  height: 100%;
  background: #991b1b;
  transition: width 180ms ease;
}

.aipp-slide-number {
  position: absolute;
  right: 24px;
  bottom: 18px;
  z-index: 91;
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  color: #78716c;
  letter-spacing: 0;
  pointer-events: none;
}
</style>
