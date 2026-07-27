<script setup lang="ts">
import { steps } from '../../data/landing'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="how" aria-labelledby="how-title" class="mt-12 border-y border-neutral-100 bg-white sm:mt-16">
    <div class="lp-wrap py-16 sm:py-20">
      <div v-reveal>
        <SectionHeading
          eyebrow="How it works"
          title="Three steps from door to document"
          title-id="how-title"
          centered
        />
      </div>

      <ol class="m-0 mt-10 grid list-none gap-5 p-0 sm:mt-14 md:grid-cols-3 md:gap-7">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          v-reveal="index"
          class="rounded-lg border border-neutral-100 bg-neutral-50 p-7 sm:p-8"
        >
          <div class="flex items-center gap-3.5">
            <span
              class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-800 font-display text-[22px] font-bold text-white"
              aria-hidden="true"
            >
              {{ index + 1 }}
            </span>
            <span
              class="h-px flex-1 bg-[linear-gradient(90deg,var(--neutral-300),transparent)]"
              aria-hidden="true"
            />
          </div>
          <h3 class="mt-5 mb-0 text-lg font-semibold text-navy-800">{{ step.title }}</h3>
          <p class="mt-2 mb-0 text-sm leading-relaxed text-neutral-600">{{ step.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
