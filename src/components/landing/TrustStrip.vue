<script setup lang="ts">
import { stats } from '../../data/landing'
</script>

<template>
  <section aria-label="Tibly at a glance" class="border-y border-neutral-100 bg-white">
    <div
      class="lp-wrap flex flex-col gap-6 py-6 sm:py-7 lg:flex-row lg:items-center lg:justify-between"
    >
      <p
        v-reveal
        class="m-0 text-xs font-semibold tracking-[0.09em] text-neutral-400 uppercase"
      >
        One workflow, from intake to documents
      </p>
      <dl v-reveal="1" class="m-0 grid grid-cols-2 gap-x-10 gap-y-5 sm:flex sm:flex-wrap">
        <div v-for="stat in stats" :key="stat.label">
          <dt class="sr-only">{{ stat.label }}</dt>
          <dd class="m-0 font-display text-[1.625rem] leading-none font-bold text-navy-800">
            {{ stat.value }}
          </dd>
          <dd class="m-0 mt-1 text-xs text-neutral-500">{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
