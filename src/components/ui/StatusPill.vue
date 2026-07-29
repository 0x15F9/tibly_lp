<script setup lang="ts">
import LandingIcon from '../landing/LandingIcon.vue'

type StatusTone = 'success' | 'warning' | 'danger' | 'info'

withDefaults(
  defineProps<{
    tone?: StatusTone
  }>(),
  {
    tone: 'info',
  },
)

const toneClasses: Record<StatusTone, string> = {
  success: 'border-success-border bg-success-bg text-success-text',
  warning: 'border-warning-border bg-warning-bg text-warning-text',
  danger: 'border-danger-border bg-danger-bg text-danger-text',
  info: 'border-info-border bg-info-bg text-info-text',
}

const toneIcons: Record<StatusTone, 'check' | 'clock' | 'alert' | 'info'> = {
  success: 'check',
  warning: 'clock',
  danger: 'alert',
  info: 'info',
}
</script>

<template>
  <span
    class="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap"
    :class="toneClasses[tone]"
  >
    <LandingIcon :name="toneIcons[tone]" :size="12" aria-hidden="true" />
    <slot />
  </span>
</template>
