<script setup lang="ts">
import type { IconName } from '../../data/landing'
import LandingIcon from './LandingIcon.vue'

interface Card {
  readonly title: string
  readonly body: string
  readonly icon?: IconName
  readonly label?: string
}

withDefaults(
  defineProps<{
    cards: readonly Card[]
    columns?: 2 | 3 | 5
    numbered?: boolean
    compact?: boolean
  }>(),
  {
    columns: 3,
    numbered: false,
    compact: false,
  },
)
</script>

<template>
  <div
    class="grid gap-4"
    :class="{
      'md:grid-cols-2': columns === 2,
      'md:grid-cols-3': columns === 3,
      'sm:grid-cols-2 lg:grid-cols-5': columns === 5,
    }"
  >
    <article
      v-for="(card, index) in cards"
      :key="card.title"
      v-reveal="index"
      class="card group relative overflow-hidden"
      :class="compact ? 'p-5' : 'p-6 sm:p-7'"
    >
      <div class="flex items-center justify-between gap-3">
        <span
          v-if="card.icon"
          class="flex size-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700"
          aria-hidden="true"
        >
          <LandingIcon :name="card.icon" :size="19" :stroke-width="2.1" />
        </span>
        <span v-if="numbered" class="font-data text-xs font-semibold tracking-[0.08em] text-neutral-400">
          {{ card.label }}
        </span>
      </div>
      <h3
        class="mb-0 font-display leading-[1.15] font-bold text-navy-800"
        :class="compact ? 'mt-5 text-[1.375rem]' : 'mt-6 text-[1.5rem]'"
      >
        {{ card.title }}
      </h3>
      <p class="mt-3 mb-0 leading-relaxed text-neutral-600" :class="compact ? 'text-sm' : 'text-[15px]'">
        {{ card.body }}
      </p>
      <span
        class="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-green-500 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  </div>
</template>
