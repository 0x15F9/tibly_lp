<script setup lang="ts">
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
</script>

<template>
  <span
    class="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap"
    :class="toneClasses[tone]"
  >
    <svg
      v-if="tone === 'success'"
      class="size-3 shrink-0"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
    <svg
      v-else-if="tone === 'warning'"
      class="size-3 shrink-0"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
    <svg
      v-else-if="tone === 'danger'"
      class="size-3 shrink-0"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5m0 3.5v.5" />
    </svg>
    <svg
      v-else
      class="size-3 shrink-0"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5m0-8.5V8" />
    </svg>
    <slot />
  </span>
</template>
