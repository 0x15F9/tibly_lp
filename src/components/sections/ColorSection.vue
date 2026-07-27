<script setup lang="ts">
import StatusPill from '../ui/StatusPill.vue'

type ColorRamp = {
  name: string
  description: string
  values: { step: string; hex: string; anchor?: boolean }[]
}

const ramps: ColorRamp[] = [
  {
    name: 'Navy',
    description: 'structure · brand anchor at 800',
    values: [
      { step: '50', hex: '#EEF2F9' },
      { step: '100', hex: '#DBE4F2' },
      { step: '200', hex: '#B9C9E4' },
      { step: '300', hex: '#8FA7D0' },
      { step: '400', hex: '#6383B8' },
      { step: '500', hex: '#40639D' },
      { step: '600', hex: '#294A82' },
      { step: '700', hex: '#1A366B' },
      { step: '800', hex: '#0F2557', anchor: true },
      { step: '900', hex: '#0A1839' },
    ],
  },
  {
    name: 'Green',
    description: 'interaction · action at 600, hover 700, pressed 800',
    values: [
      { step: '50', hex: '#EAF5EF' },
      { step: '100', hex: '#D2EADD' },
      { step: '200', hex: '#A6D5BC' },
      { step: '300', hex: '#74BC96' },
      { step: '400', hex: '#479D71' },
      { step: '500', hex: '#2C8A5C' },
      { step: '600', hex: '#1F7A4D', anchor: true },
      { step: '700', hex: '#186040' },
      { step: '800', hex: '#124A32' },
      { step: '900', hex: '#0C3423' },
    ],
  },
  {
    name: 'Neutral',
    description: 'cool, navy-tinted',
    values: [
      { step: '0', hex: '#FFFFFF' },
      { step: '50', hex: '#F7F8FA' },
      { step: '100', hex: '#EFF1F4' },
      { step: '200', hex: '#E2E5EA' },
      { step: '300', hex: '#CDD2DA' },
      { step: '400', hex: '#A8AFBB' },
      { step: '500', hex: '#7C8492' },
      { step: '600', hex: '#5A6372' },
      { step: '700', hex: '#434B58' },
      { step: '900', hex: '#171B22' },
    ],
  },
]
</script>

<template>
  <section class="design-section" aria-labelledby="color-title">
    <h2 id="color-title" class="section-title">Color</h2>
    <p class="section-subtitle">
      Two brand ramps and a cool neutral ramp. In a typical screen, neutrals cover
      roughly 80% of pixels; navy and green together should not exceed 15%.
    </p>

    <div v-for="(ramp, rampIndex) in ramps" :key="ramp.name">
      <p
        class="mb-2 text-[13px] font-medium text-neutral-700"
        :class="rampIndex === 0 ? 'mt-0' : 'mt-6'"
      >
        {{ ramp.name }} — {{ ramp.description }}
      </p>
      <div class="grid grid-cols-5 gap-1.5 sm:grid-cols-10">
        <div
          v-for="color in ramp.values"
          :key="color.step"
          class="h-14 rounded-lg border border-navy-900/5"
          :style="{
            backgroundColor: color.hex,
            boxShadow: color.anchor
              ? `0 0 0 2px ${ramp.name === 'Navy' ? '#479D71' : '#6383B8'}`
              : undefined,
          }"
        />
      </div>
      <div class="mt-1.5 grid grid-cols-5 gap-1.5 sm:grid-cols-10">
        <span
          v-for="color in ramp.values"
          :key="color.step"
          class="font-mono text-[10.5px] text-neutral-500"
        >
          {{ color.step }}<template v-if="color.anchor"> ★</template>
        </span>
      </div>
    </div>

    <h3 class="subsection-title">Semantic — the tinted-pill treatment</h3>
    <div class="flex flex-wrap gap-2.5">
      <StatusPill tone="success">Results normal</StatusPill>
      <StatusPill tone="warning">Review overdue</StatusPill>
      <StatusPill tone="danger">Abnormal result</StatusPill>
      <StatusPill tone="info">Draft — not saved</StatusPill>
    </div>
    <p class="field-hint mt-3!">
      Always an icon. Meaning must survive without color — for print, and for the
      ~5% of men with color-deficient vision.
    </p>
  </section>
</template>
