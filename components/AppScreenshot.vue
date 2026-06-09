<script setup lang="ts">
import { imageUrl } from '../utils/images'

defineProps<{
  /** Path under public/images/, e.g. "screenshots/foo.png" */
  src: string
  alt: string
}>()
</script>

<template>
  <div class="app-browser-mockup">
    <div class="mockup-browser-toolbar">
      <div class="input" />
    </div>
    <div class="app-browser-content">
      <img class="app-screenshot" :src="imageUrl(src)" :alt="alt">
    </div>
  </div>
</template>
