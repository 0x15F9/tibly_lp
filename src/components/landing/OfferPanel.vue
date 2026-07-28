<script setup lang="ts">
import type { LandingContent } from '../../content/landing'
import BaseCta from './BaseCta.vue'
import LandingIcon from './LandingIcon.vue'

defineProps<{
  content: LandingContent['offer']
}>()
</script>

<template>
  <section id="offer" aria-labelledby="offer-title" class="bg-neutral-50 py-16 sm:py-24">
    <div class="lp-wrap">
      <div
        v-reveal
        class="relative overflow-hidden rounded-lg border border-navy-200 bg-white p-7 shadow-raised sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:p-14"
      >
        <span class="absolute inset-y-0 left-0 w-1.5 bg-navy-800" aria-hidden="true" />
        <div class="max-w-3xl">
          <p class="m-0 text-xs font-semibold tracking-[0.08em] text-green-700 uppercase">
            {{ content.eyebrow }}
          </p>
          <h2
            id="offer-title"
            class="mt-3 mb-0 font-display text-[2.25rem] leading-none font-bold text-navy-800 sm:text-[2.75rem]"
          >
            {{ content.heading }}
          </h2>
          <p class="mt-5 mb-0 text-[15px] leading-relaxed text-neutral-600 sm:text-base">
            {{ content.body }}
          </p>
          <p class="mt-6 mb-0 flex items-start gap-2 text-sm font-semibold text-navy-800">
            <LandingIcon name="check" :size="17" :stroke-width="2.4" class="mt-0.5 text-green-600" />
            <span>
              {{ content.scarcityPrefix }}
              <span class="font-data">{{ content.foundingPracticeCount }}</span>
              {{ content.scarcitySuffix }}
            </span>
          </p>
        </div>
        <BaseCta
          :href="content.cta.href"
          :aria-label="content.cta.ariaLabel"
          target="_blank"
          size="lg"
          class="mt-8 w-full lg:mt-0 lg:w-auto"
        >
          {{ content.cta.label }}
          <LandingIcon name="arrow-right" :size="16" :stroke-width="2.4" />
        </BaseCta>
      </div>
    </div>
  </section>
</template>
