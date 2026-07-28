<script setup lang="ts">
import type { LandingContent } from '../../content/landing'
import BaseCta from './BaseCta.vue'
import LandingIcon from './LandingIcon.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'

defineProps<{
  content: LandingContent['hero']
}>()
</script>

<template>
  <section
    id="top"
    aria-labelledby="hero-title"
    class="relative overflow-hidden bg-neutral-50"
  >
    <div
      class="lp-wrap grid items-center gap-10 pt-12 pb-0 sm:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pt-20"
    >
      <div class="min-w-0 lg:pb-20">
        <p
          v-reveal
          class="m-0 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-green-700 uppercase"
        >
          <span class="h-px w-6 bg-green-500" aria-hidden="true" />
          {{ content.eyebrow }}
        </p>

        <h1
          id="hero-title"
          v-reveal="1"
          class="mt-5 mb-0 max-w-2xl font-display text-[2.55rem] leading-[0.98] font-bold tracking-[-0.02em] text-navy-800 text-balance sm:text-[3.3rem] lg:text-[3.65rem]"
        >
          {{ content.headline }}
        </h1>

        <p v-reveal="2" class="mt-5 mb-0 max-w-xl text-base leading-relaxed text-neutral-600">
          {{ content.subhead }}
        </p>

        <div v-reveal="3" class="mt-8 grid gap-3.5 sm:flex sm:flex-wrap">
          <BaseCta
            :href="content.primaryCta.href"
            :aria-label="content.primaryCta.ariaLabel"
            target="_blank"
            size="lg"
            class="h-auto min-h-12 w-full px-5 py-3 whitespace-normal sm:w-auto"
          >
            {{ content.primaryCta.label }}
            <LandingIcon name="arrow-right" :size="16" :stroke-width="2.4" />
          </BaseCta>
          <BaseCta
            :href="content.secondaryCta.href"
            variant="secondary"
            size="lg"
            class="w-full sm:w-auto"
          >
            {{ content.secondaryCta.label }}
          </BaseCta>
        </div>

        <p v-reveal="4" class="mt-6 mb-0 flex items-center gap-2 text-[13px] text-neutral-600">
          <LandingIcon name="check" :size="16" :stroke-width="2.4" class="text-green-600" />
          {{ content.trustLine }}
        </p>
      </div>

      <div v-reveal="2" class="relative min-w-0 self-end">
        <div class="absolute -inset-6 rounded-full bg-navy-100 opacity-50 blur-3xl" aria-hidden="true" />
        <ScreenshotFrame :label="content.screenshot.browserLabel" class="relative rounded-b-none border-b-0">
          <img
            :src="content.screenshot.src"
            :alt="content.screenshot.alt"
            width="1440"
            height="900"
            fetchpriority="high"
            class="block h-auto w-full"
          />
        </ScreenshotFrame>
      </div>
    </div>
  </section>
</template>
