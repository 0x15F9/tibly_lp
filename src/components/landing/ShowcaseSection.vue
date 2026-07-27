<script setup lang="ts">
import ConsultMock from './mocks/ConsultMock.vue'

const capabilities = [
  'ECG & echo findings',
  'Vitals capture',
  'Reusable favorites',
  'Next-review scheduling',
]
</script>

<template>
  <section aria-labelledby="showcase-title" class="lp-wrap py-4 sm:py-8">
    <div
      v-reveal
      class="grid min-w-0 overflow-hidden rounded-lg bg-navy-800 shadow-overlay lg:grid-cols-[1fr_1.05fr]"
    >
      <div class="flex min-w-0 flex-col justify-center p-8 sm:p-10 lg:p-12">
        <p class="m-0 text-xs font-semibold tracking-[0.08em] text-green-300 uppercase">
          Consultation workspace
        </p>
        <h2
          id="showcase-title"
          class="mt-3 mb-0 font-display text-[1.75rem] leading-[1.12] font-bold text-white text-balance sm:text-[2.0625rem]"
        >
          A visit that writes itself as you work
        </h2>
        <p class="mt-4 mb-6 text-[15px] leading-relaxed text-navy-200 sm:text-base">
          Record the complaint, examination findings and vitals, build the plan and set the next
          review — with reusable favorites, defaults, drag-and-drop ordering and prefill from the
          last visit doing the repetitive typing for you.
        </p>
        <ul class="m-0 flex list-none flex-wrap gap-2 p-0">
          <li
            v-for="capability in capabilities"
            :key="capability"
            class="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-navy-100"
          >
            {{ capability }}
          </li>
        </ul>
      </div>

      <div class="flex min-w-0 items-end px-6 pt-8 sm:px-10 lg:pt-12 lg:pl-0">
        <div
          class="w-full overflow-hidden rounded-t-lg border border-b-0 border-white/15 bg-white shadow-overlay"
          aria-hidden="true"
        >
          <ConsultMock />
        </div>
      </div>
    </div>
  </section>
</template>
