<script setup lang="ts">
defineProps<{
  eyebrow: string
  heading: string
  pains: readonly string[]
  image: {
    readonly src: string
    readonly alt: string
  }
}>()
</script>

<template>
  <section aria-labelledby="problem-title" class="overflow-hidden bg-navy-900 text-white">
    <div class="lp-wrap grid items-stretch gap-0 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-0">
      <div class="min-w-0 lg:py-24 lg:pr-16">
        <p class="m-0 text-xs font-semibold tracking-[0.08em] text-green-300 uppercase">
          {{ eyebrow }}
        </p>
        <h2
          id="problem-title"
          class="mt-4 mb-0 max-w-xl font-display text-[2rem] leading-[1.08] font-bold text-white text-balance sm:text-[2.5rem]"
        >
          {{ heading }}
        </h2>
        <ol class="m-0 mt-9 grid list-none gap-6 p-0">
          <li v-for="(pain, index) in pains" :key="pain" class="grid grid-cols-[2rem_1fr] gap-3">
            <span class="font-data pt-0.5 text-xs font-semibold text-green-300">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <p class="m-0 text-[15px] leading-relaxed text-navy-100">{{ pain }}</p>
          </li>
        </ol>
      </div>
      <figure v-reveal class="relative m-0 mt-12 min-h-80 overflow-hidden rounded-lg lg:mt-0 lg:min-h-full lg:rounded-none">
        <img
          :src="image.src"
          :alt="image.alt"
          width="1400"
          height="1050"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <span class="absolute inset-0 bg-navy-900/10" aria-hidden="true" />
      </figure>
    </div>
  </section>
</template>
