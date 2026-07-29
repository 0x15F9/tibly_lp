<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { LandingContent } from '../../content/landing'
import BaseCta from './BaseCta.vue'
import LandingIcon from './LandingIcon.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'

const props = defineProps<{
  content: LandingContent['hero'] & { eyebrow?: string }
}>()

const activeTrustLine = ref(0)
let trustLineTimer: ReturnType<typeof setInterval> | undefined
let reducedMotionQuery: MediaQueryList | undefined

function stopTrustLineRotation() {
  if (trustLineTimer) clearInterval(trustLineTimer)
  trustLineTimer = undefined
}

function startTrustLineRotation() {
  if (trustLineTimer || props.content.trustLines.length < 2) return
  trustLineTimer = setInterval(() => {
    activeTrustLine.value = (activeTrustLine.value + 1) % props.content.trustLines.length
  }, 3600)
}

function onMotionPreferenceChange(event: MediaQueryListEvent) {
  if (event.matches) {
    stopTrustLineRotation()
    activeTrustLine.value = 0
  } else {
    startTrustLineRotation()
  }
}

onMounted(() => {
  reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotionQuery.addEventListener('change', onMotionPreferenceChange)
  if (!reducedMotionQuery.matches) startTrustLineRotation()
})

onBeforeUnmount(() => {
  stopTrustLineRotation()
  reducedMotionQuery?.removeEventListener('change', onMotionPreferenceChange)
})
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
          v-if="content.eyebrow"
          v-reveal
          class="m-0 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-green-700 uppercase"
        >
          <span class="h-px w-6 bg-green-500" aria-hidden="true" />
          {{ content.eyebrow }}
        </p>

        <h1
          id="hero-title"
          v-reveal="1"
          class="relative z-10 mt-5 mb-0 w-full font-display text-[2.55rem] leading-[0.98] font-bold tracking-[-0.02em] text-navy-800 sm:text-[3.3rem] lg:w-[calc(min(100vw,72rem)-4rem)] lg:text-[3.375rem] xl:text-[3.65rem]"
        >
          <span v-for="line in content.headline" :key="line" class="block">
            {{ line }}
          </span>
        </h1>

        <p
          v-reveal="2"
          class="mt-5 mb-0 max-w-xl text-[1.125rem] leading-relaxed text-neutral-600 sm:text-[1.25rem]"
        >
          {{ content.subhead }}
        </p>

        <div v-reveal="3" class="mt-8 grid gap-3.5 sm:flex sm:flex-wrap">
          <BaseCta
            :href="content.primaryCta.href"
            :aria-label="content.primaryCta.ariaLabel"
            target="_blank"
            size="lg"
            class="h-auto min-h-12 min-w-0 w-full max-w-full px-4 py-3 !whitespace-normal sm:w-auto sm:px-5"
          >
            <span class="min-w-0 text-center">{{ content.primaryCta.label }}</span>
            <LandingIcon name="whatsapp" :size="19" />
          </BaseCta>
          <BaseCta
            :href="content.secondaryCta.href"
            variant="secondary"
            size="lg"
            class="w-full sm:w-auto"
          >
            {{ content.secondaryCta.label }}
            <LandingIcon name="chevrons-down" :size="17" class="scroll-cue" />
          </BaseCta>
        </div>

        <p
          v-reveal="4"
          class="mt-6 mb-0 flex min-h-10 items-start gap-2 text-[13px] text-neutral-600 sm:min-h-5 sm:items-center"
        >
          <LandingIcon
            name="check"
            :size="16"
            :stroke-width="2.4"
            class="mt-0.5 text-green-600 sm:mt-0"
          />
          <Transition name="trust-line" mode="out-in">
            <span :key="activeTrustLine">
              {{ content.trustLines[activeTrustLine] }}
            </span>
          </Transition>
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

<style scoped>
.scroll-cue {
  animation: scroll-cue-bob 1.8s ease-in-out infinite;
}

.trust-line-enter-active,
.trust-line-leave-active {
  transition:
    opacity 240ms ease,
    transform 240ms ease;
}

.trust-line-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.trust-line-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@keyframes scroll-cue-bob {
  0%,
  100% {
    transform: translateY(-1px);
  }

  50% {
    transform: translateY(2px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue {
    animation: none;
  }
}
</style>
