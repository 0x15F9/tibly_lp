<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    titleId?: string
    subtitle?: string
    centered?: boolean
  }>(),
  {
    titleId: undefined,
    subtitle: '',
    centered: false,
  },
)
</script>

<template>
  <div class="max-w-2xl" :class="{ 'mx-auto text-center': centered }">
    <p class="m-0 text-xs font-semibold tracking-[0.08em] text-green-700 uppercase">
      {{ eyebrow }}
    </p>
    <h2
      :id="titleId"
      class="mt-3 mb-0 font-display text-[1.75rem] leading-[1.12] font-bold tracking-[-0.01em] text-navy-800 text-balance sm:text-[2.0625rem]"
    >
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 mb-0 text-[15px] leading-relaxed text-neutral-600 sm:text-base">
      {{ subtitle }}
    </p>
  </div>
</template>
