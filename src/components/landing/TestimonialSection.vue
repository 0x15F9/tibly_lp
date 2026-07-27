<script setup lang="ts">
import { testimonial } from '../../data/landing'
</script>

<template>
  <section aria-label="Testimonial" class="border-y border-navy-100 bg-navy-50">
    <div class="lp-wrap py-16 sm:py-20">
      <figure v-reveal class="mx-auto m-0 max-w-3xl text-center">
        <svg
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="var(--navy-200)"
          aria-hidden="true"
          class="mx-auto"
        >
          <path
            d="M9.5 8C7 8 5 10 5 12.5S7 17 9.5 17c.3 0 .6 0 .9-.1C9.6 18.7 8 20 6 20.5c-.4.1-.6.5-.5.9.1.4.5.6.9.5C10.9 20.7 14 16.6 14 12c0-2.2-2-4-4.5-4zm9 0C16 8 14 10 14 12.5S16 17 18.5 17c.3 0 .6 0 .9-.1-.8 1.8-2.4 3.1-4.4 3.6-.4.1-.6.5-.5.9.1.4.5.6.9.5C19.9 20.7 23 16.6 23 12c0-2.2-2-4-4.5-4z"
          />
        </svg>

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
