<script setup lang="ts">
import StatusPill from '../../ui/StatusPill.vue'
import LandingIcon from '../LandingIcon.vue'

const vitals = ['BP 128/82', 'HR 76 bpm', 'SpO₂ 98%']

const plan = [
  'Continue bisoprolol 5 mg mane',
  'Repeat echo in 6 months',
  'Fasting lipids before next visit',
]
</script>

<template>
  <div class="min-w-0 overflow-hidden bg-white p-4 text-left select-none sm:p-5">
    <!-- Patient header -->
    <div class="flex items-start justify-between gap-3 border-b border-neutral-100 pb-3">
      <div class="min-w-0">
        <div class="truncate font-display text-[22px] leading-tight font-semibold text-navy-800">
          Mrs D. Ramsamy
        </div>
        <div class="font-data mt-0.5 text-[11px] text-neutral-500">62 · F · Last seen 14 Feb</div>
      </div>
      <StatusPill tone="info" class="shrink-0">Follow-up</StatusPill>
    </div>

    <dl class="m-0 mt-3.5 grid gap-3.5">
      <div>
        <dt class="text-[10px] font-semibold tracking-[0.08em] text-neutral-400 uppercase">Complaint</dt>
        <dd class="m-0 mt-1 text-[13px] leading-snug text-neutral-800">
          Exertional chest tightness, improving on current therapy.
        </dd>
      </div>

      <div>
        <dt class="text-[10px] font-semibold tracking-[0.08em] text-neutral-400 uppercase">Vitals</dt>
        <dd class="m-0 mt-1.5 flex flex-wrap gap-1.5">
          <span
            v-for="vital in vitals"
            :key="vital"
            class="font-data rounded-md bg-neutral-100 px-2 py-1 text-[11px] text-neutral-700"
          >
            {{ vital }}
          </span>
        </dd>
      </div>

      <div>
        <dt class="text-[10px] font-semibold tracking-[0.08em] text-neutral-400 uppercase">Plan</dt>
        <dd class="m-0 mt-1.5 grid gap-1.5">
          <span
            v-for="item in plan"
            :key="item"
            class="flex items-start gap-1.5 text-[12px] leading-snug text-neutral-700"
          >
            <LandingIcon name="check" :size="13" :stroke-width="2.6" class="mt-px text-green-600" />
            {{ item }}
          </span>
        </dd>
      </div>
    </dl>

    <!-- Footer actions -->
    <div class="mt-4 flex items-center justify-between gap-3 border-t border-neutral-100 pt-3.5">
      <span class="font-data text-[11px] text-neutral-500">Next review · 18 Dec</span>
      <span
        class="inline-flex h-7 items-center rounded-md bg-green-600 px-2.5 text-[11px] font-medium whitespace-nowrap text-white"
      >
        Generate documents
      </span>
    </div>
  </div>
</template>
