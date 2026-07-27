<script setup lang="ts">
import StatusPill from '../../ui/StatusPill.vue'
import LandingIcon from '../LandingIcon.vue'

const tabs = [
  { label: 'Patients', active: true },
  { label: 'Consults', active: false },
  { label: 'Documents', active: false },
]

const patients = [
  { initials: 'NR', name: 'N. Ramdhony', meta: '58 · HTN, AF', tone: 'success', status: 'Seen today' },
  { initials: 'SA', name: 'S. Appadoo', meta: '64 · Post-PCI', tone: 'info', status: 'Review 12 Aug' },
  { initials: 'AB', name: 'A. Bhola', meta: '71 · CHF', tone: 'warning', status: 'Results due' },
  { initials: 'MC', name: 'M. Curpen', meta: '49 · New referral', tone: 'info', status: 'New' },
] as const
</script>

<template>
  <div class="flex min-w-0 flex-col overflow-hidden bg-neutral-50 text-left select-none">
    <!-- Navy chrome with the sanctioned green active-tab indicator -->
    <div class="flex items-center gap-5 bg-navy-800 px-4 pt-2.5 text-white">
      <span class="pb-2.5 text-[13px] font-semibold tracking-tight">Tibly</span>
      <nav class="flex items-center gap-4" aria-hidden="true">
        <span
          v-for="tab in tabs"
          :key="tab.label"
          class="border-b-2 pb-2 text-xs"
          :class="tab.active ? 'border-green-400 font-medium text-white' : 'border-transparent text-navy-300'"
        >
          {{ tab.label }}
        </span>
      </nav>
    </div>

    <!-- Toolbar -->
    <div class="flex items-center gap-3 border-b border-neutral-200 bg-white px-4 py-3">
      <div
        class="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-md border border-neutral-300 bg-white px-2.5 text-neutral-400"
      >
        <LandingIcon name="search" :size="14" />
        <span class="truncate text-xs">Search patients…</span>
      </div>
      <span
        class="hidden h-8 items-center rounded-md bg-green-600 px-3 text-xs font-medium whitespace-nowrap text-white sm:inline-flex"
      >
        New patient
      </span>
    </div>

    <!-- Patient rows -->
    <ul class="m-0 list-none divide-y divide-neutral-100 bg-white p-0">
      <li v-for="patient in patients" :key="patient.name" class="flex items-center gap-3 px-4 py-2.5">
        <span
          class="flex size-7 shrink-0 items-center justify-center rounded-full bg-navy-50 text-[11px] font-semibold text-navy-700"
        >
          {{ patient.initials }}
        </span>
        <div class="min-w-0 flex-1">
          <div class="truncate text-[13px] font-medium text-neutral-800">{{ patient.name }}</div>
          <div class="font-data truncate text-[11px] text-neutral-500">{{ patient.meta }}</div>
        </div>
        <StatusPill :tone="patient.tone" class="shrink-0">{{ patient.status }}</StatusPill>
      </li>
    </ul>
  </div>
</template>
