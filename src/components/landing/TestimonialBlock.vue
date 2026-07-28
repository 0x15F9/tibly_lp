<script setup lang="ts">
defineProps<{
  label: string
  quote: string
  name: string
  clinic: string
  town: string
  photo: string
  photoAlt: string
  support: string
}>()
</script>

<template>
  <section aria-labelledby="proof-title" class="border-y border-navy-100 bg-navy-50">
    <div class="lp-wrap py-16 sm:py-24">
      <figure v-reveal class="m-0 grid items-center gap-8 md:grid-cols-[8rem_1fr] md:gap-12">
        <img
          :src="photo"
          :alt="photoAlt"
          width="320"
          height="320"
          loading="lazy"
          class="size-24 rounded-full border-4 border-white object-cover shadow-raised md:size-32"
        />
        <div>
          <p class="m-0 text-xs font-semibold tracking-[0.08em] text-green-700 uppercase">{{ label }}</p>
          <blockquote class="m-0 mt-4">
            <p
              id="proof-title"
              class="m-0 max-w-4xl font-display text-[1.65rem] leading-[1.2] font-semibold text-navy-800 text-balance sm:text-[2.15rem]"
            >
              “{{ quote }}”
            </p>
          </blockquote>
          <div class="mt-6">
            <span class="block text-sm font-semibold text-navy-800">
              — {{ name }}, {{ clinic }}, {{ town }}
            </span>
            <span class="mt-2 block text-sm leading-relaxed text-neutral-600">{{ support }}</span>
          </div>
        </div>
      </figure>
    </div>
  </section>
</template>
