<script setup lang="ts">
withDefaults(
  defineProps<{
    selected?: boolean
  }>(),
  {
    selected: false,
  },
)
</script>

<template>
  <button
    type="button"
    class="inline-flex h-[30px] items-center rounded-lg border px-3 text-[13px] transition-colors"
    :class="
      selected
        ? 'border-green-600 bg-green-50 font-medium text-green-800'
        : 'border-neutral-300 bg-white text-neutral-700 hover:border-green-500'
    "
    :aria-pressed="selected"
  >
    <slot />
  </button>
</template>
