<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Fake address-bar label; omit to hide the browser chrome. */
    label?: string
  }>(),
  {
    label: '',
  },
)
</script>

<template>
  <figure
    class="m-0 min-w-0 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-overlay"
    aria-hidden="true"
  >
    <div
      v-if="label"
      class="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-3.5 py-2.5"
    >
      <span v-for="dot in 3" :key="dot" class="size-2.5 rounded-full bg-neutral-200" />
      <span class="ml-2 font-mono text-[11px] text-neutral-400">{{ label }}</span>
    </div>
    <slot />
  </figure>
</template>
