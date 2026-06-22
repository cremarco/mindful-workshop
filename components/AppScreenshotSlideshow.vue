<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { imageUrl } from '../utils/images'

type ScreenshotSlide = {
  src: string
  alt: string
  label?: string
}

const props = withDefaults(defineProps<{
  slides: ScreenshotSlide[]
  title?: string
  intervalMs?: number
}>(), {
  title: 'LLMPatients',
  intervalMs: 4600,
})

const activeIndex = ref(0)
const safeSlides = computed(() => props.slides ?? [])
let timer: number | undefined

function showSlide(index: number) {
  if (!safeSlides.value.length)
    return

  activeIndex.value = index % safeSlides.value.length
}

function showNextSlide() {
  showSlide(activeIndex.value + 1)
}

onMounted(() => {
  if (safeSlides.value.length > 1 && props.intervalMs > 0)
    timer = window.setInterval(showNextSlide, props.intervalMs)
})

onBeforeUnmount(() => {
  if (timer)
    window.clearInterval(timer)
})
</script>

<template>
  <div class="app-browser-mockup app-screenshot-slideshow">
    <div class="mockup-browser-toolbar">
      <div class="input">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="app-browser-content">
      <figure
        v-for="(slide, index) in safeSlides"
        :key="slide.src"
        class="app-slideshow-frame"
        :class="{ active: index === activeIndex }"
      >
        <img class="app-screenshot" :src="imageUrl(slide.src)" :alt="slide.alt">
        <figcaption v-if="slide.label">
          {{ slide.label }}
        </figcaption>
      </figure>

      <div v-if="safeSlides.length > 1" class="app-slideshow-controls" aria-label="Screenshot slideshow controls">
        <button
          v-for="(slide, index) in safeSlides"
          :key="`${slide.src}-control`"
          type="button"
          :class="{ active: index === activeIndex }"
          :aria-label="`Show ${slide.label ?? `screenshot ${index + 1}`}`"
          :aria-pressed="index === activeIndex"
          @click="showSlide(index)"
        />
      </div>
    </div>
  </div>
</template>
