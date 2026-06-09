<script setup lang="ts">
defineProps<{
  role: 'therapist' | 'patient'
  speaker: string
}>()
</script>

<template>
  <div class="chat-balloon" :class="role">
    <strong class="chat-speaker">{{ speaker }}</strong><br>
    <slot />
  </div>
</template>
