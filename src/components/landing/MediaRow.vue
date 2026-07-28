<script setup lang="ts">
import type { MediaItem } from '../../content/landing'
import LandingIcon from './LandingIcon.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'

defineProps<{
  item: MediaItem
  reverse?: boolean
}>()
</script>

<template>
  <article class="grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
    <div v-reveal :class="{ 'lg:order-2': reverse }">
      <ScreenshotFrame :label="item.image.label">
        <img
          :src="item.image.src"
          :alt="item.image.alt"
          width="1440"
          height="900"
          loading="lazy"
          class="block h-auto w-full"
        />
      </ScreenshotFrame>
    </div>
    <div v-reveal="1" class="max-w-lg" :class="{ 'lg:order-1': reverse }">
      <span
        class="flex size-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700"
        aria-hidden="true"
      >
        <LandingIcon :name="item.icon" :size="20" :stroke-width="2.1" />
      </span>
      <h3 class="mt-5 mb-0 font-display text-[1.75rem] leading-[1.1] font-bold text-navy-800 sm:text-[2rem]">
        {{ item.title }}
      </h3>
      <p class="mt-4 mb-0 text-[15px] leading-relaxed text-neutral-600 sm:text-base">
        {{ item.body }}
      </p>
    </div>
  </article>
</template>
