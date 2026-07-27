<script setup lang="ts">
import { benefits } from '../../data/landing'
import LandingIcon from './LandingIcon.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'
import PrescriptionMock from './mocks/PrescriptionMock.vue'
</script>

<template>
  <section id="doctors" aria-labelledby="doctors-title" class="lp-wrap py-16 sm:py-20">
    <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
      <div v-reveal class="lg:order-2">
        <p class="m-0 text-xs font-semibold tracking-[0.08em] text-green-700 uppercase">
          Built around your practice
        </p>
        <h2
          id="doctors-title"
          class="mt-3 mb-0 font-display text-[1.75rem] leading-[1.12] font-bold tracking-[-0.01em] text-navy-800 text-balance sm:text-[2.0625rem]"
        >
          A tool that already knows how you work
        </h2>
        <p class="mt-4 mb-8 text-[15px] leading-relaxed text-neutral-600 sm:text-base">
          Whether you run solo or with a small team, Tibly bends to your practice — your medicine
          lists, your medical-history options, your visit reasons, your document layouts. Set it up
          once; it does the repeating.
        </p>

        <ul class="m-0 grid list-none gap-5 p-0">
          <li v-for="benefit in benefits" :key="benefit.title" class="flex items-start gap-4">
            <span
              class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700"
              aria-hidden="true"
            >
              <LandingIcon :name="benefit.icon" :size="19" />
            </span>
            <div>
              <h3 class="m-0 text-[15px] font-semibold text-navy-800">{{ benefit.title }}</h3>
              <p class="mt-1 mb-0 text-sm leading-relaxed text-neutral-600">{{ benefit.body }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div v-reveal="1" class="lg:order-1">
        <ScreenshotFrame>
          <PrescriptionMock />
        </ScreenshotFrame>
      </div>
    </div>
  </section>
</template>
