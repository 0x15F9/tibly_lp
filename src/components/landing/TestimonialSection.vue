<script setup lang="ts">
import { testimonial } from '../../data/landing'
import LandingIcon from './LandingIcon.vue'
</script>

<template>
  <section aria-label="Testimonial" class="border-y border-navy-100 bg-navy-50">
    <div class="lp-wrap py-16 sm:py-20">
      <figure v-reveal class="mx-auto m-0 max-w-3xl text-center">
        <LandingIcon name="quote" :size="42" class="mx-auto text-navy-200" aria-hidden="true" />

        <blockquote class="m-0 mt-6">
          <p
            class="m-0 font-display text-[1.375rem] leading-[1.35] font-semibold text-navy-800 text-balance sm:text-[1.625rem]"
          >
            {{ testimonial.quote }}
          </p>
        </blockquote>

        <figcaption class="mt-8 flex items-center justify-center gap-3.5">
          <span
            class="flex size-12 items-center justify-center rounded-full border-2 border-white bg-navy-800 font-display text-[22px] font-semibold text-white shadow-card"
            aria-hidden="true"
          >
            D
          </span>
          <span class="text-left">
            <span class="block text-[15px] font-semibold text-navy-800">{{ testimonial.name }}</span>
            <span class="block text-[13px] text-neutral-600">{{ testimonial.role }}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
