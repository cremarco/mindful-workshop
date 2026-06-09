<script setup lang="ts">
import { cssUrl } from '../utils/images'

defineProps<{
  name: string
  /** Path under public/images/, e.g. "patients/juanita-delgado/base.png" */
  image: string
  hero?: boolean
}>()
</script>

<template>
  <figure class="patient-card" :class="{ hero }" :style="{ '--patient-image': cssUrl(image) }">
    <figcaption>{{ name }}</figcaption>
  </figure>
</template>
