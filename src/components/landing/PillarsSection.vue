<script setup lang="ts">
import { pillars } from '../../data/landing'
import LandingIcon from './LandingIcon.vue'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="product" aria-labelledby="product-title" class="lp-wrap py-16 sm:py-20">
    <div v-reveal>
      <SectionHeading
        eyebrow="The platform"
        title="Four pillars, one continuous record"
        title-id="product-title"
        subtitle="Everything a specialist practice touches in a visit — patients, history, consultation and paperwork — lives in a single, connected flow."
      />
    </div>

    <div class="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2">
      <article
        v-for="(pillar, index) in pillars"
        :key="pillar.title"
        v-reveal="index"
        class="card p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-raised sm:p-7"
      >
        <span
          class="flex size-11 items-center justify-center rounded-lg bg-green-50 text-green-700"
          aria-hidden="true"
        >
          <LandingIcon :name="pillar.icon" :size="22" />
        </span>
        <h3 class="mt-4 mb-0 text-lg font-semibold tracking-[-0.01em] text-navy-800">
          {{ pillar.title }}
        </h3>
        <p class="mt-2 mb-4 text-sm leading-relaxed text-neutral-600">{{ pillar.body }}</p>
        <ul class="m-0 grid list-none gap-2 p-0">
          <li
            v-for="point in pillar.points"
            :key="point"
            class="flex items-start gap-2 text-[13px] leading-snug text-neutral-700"
          >
            <LandingIcon
              name="check"
              :size="15"
              :stroke-width="2.4"
              class="mt-0.5 text-green-500"
            />
            {{ point }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
