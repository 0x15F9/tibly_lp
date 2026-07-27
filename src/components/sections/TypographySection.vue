<script setup lang="ts">
const typeRows = [
  {
    meta: 'display-xl · 44/1.08 · 700',
    sample: 'Your practice, beautifully run.',
    className: 'font-display text-[44px] leading-[1.08] font-bold text-navy-800',
  },
  {
    meta: 'display-md · 26/1.2 · 600',
    sample: 'Consultation — Anil Ramgoolam',
    className: 'font-display text-[26px] font-semibold text-navy-800',
  },
  {
    meta: 'display-sm · 22/1.25 · 600\nserif floor — nothing smaller',
    sample: 'Ordonnance créée et déjà envoyée',
    className: 'font-display text-[22px] font-semibold text-navy-800',
  },
  {
    meta: 'heading · Inter 16/600',
    sample: 'Tests result',
    className: 'text-base font-semibold text-navy-800',
  },
  {
    meta: 'body · Inter 14/400',
    sample:
      'Historique du patient, résultats et suivis dans une seule vue. Le dossier reste à jour après chaque consultation.',
    className: '',
  },
  {
    meta: 'label · Inter 13/500',
    sample: 'Blood pressure (systolic)',
    className: 'text-[13px] font-medium text-neutral-700',
  },
  {
    meta: 'data · Inter 14 + tnum,\nzero, ss02',
    sample: 'TA 120/80 · Amoxicilline 500 mg · 3×/jour · Rs 1,150 · Il1 0O',
    className: 'font-data',
  },
  {
    meta: 'mono · Plex Mono 13',
    sample: 'PAT-2026-004417 · INV-0093',
    className: 'font-mono text-[13px]',
  },
]
</script>

<template>
  <section class="design-section" aria-labelledby="typography-title">
    <h2 id="typography-title" class="section-title">Typography</h2>
    <p class="section-subtitle">
      Three faces, three jobs. Garamond has a small x-height, so display sizes carry
      +12% optical compensation — already baked into the scale.
    </p>

    <div
      v-for="row in typeRows"
      :key="row.meta"
      class="grid items-baseline gap-2 border-b border-neutral-100 py-3.5 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-5"
    >
      <div class="whitespace-pre-line font-mono text-xs text-neutral-500">
        {{ row.meta }}
      </div>
      <div :class="row.className">{{ row.sample }}</div>
    </div>
  </section>
</template>
