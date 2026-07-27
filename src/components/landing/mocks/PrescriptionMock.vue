<script setup lang="ts">
interface RxGroup {
  category: string
  items: { name: string; dose: string }[]
}

const groups: RxGroup[] = [
  {
    category: 'Antihypertensives',
    items: [
      { name: 'Amlodipine 5 mg', dose: '1 · 0 · 0' },
      { name: 'Bisoprolol 5 mg', dose: '1 · 0 · 0' },
    ],
  },
  {
    category: 'Anticoagulants',
    items: [{ name: 'Rivaroxaban 20 mg', dose: '0 · 0 · 1' }],
  },
  {
    category: 'Lipid-lowering',
    items: [{ name: 'Atorvastatin 40 mg', dose: '0 · 0 · 1' }],
  },
]
</script>

<template>
  <div class="bg-white p-5 text-left select-none sm:p-6">
    <!-- Document header -->
    <div class="flex items-baseline justify-between gap-3 border-b border-neutral-200 pb-3">
      <span class="font-display text-[22px] leading-tight font-semibold text-navy-800">Prescription</span>
      <span class="font-data text-[11px] whitespace-nowrap text-neutral-500">18 Jun 2026</span>
    </div>
    <div class="font-data mt-2.5 text-xs text-neutral-600">Mrs D. Ramsamy · 62 · F</div>

    <!-- Rx groups: morning · afternoon · night -->
    <div class="mt-4 grid gap-3.5">
      <div v-for="group in groups" :key="group.category">
        <div class="text-[10px] font-semibold tracking-[0.08em] text-green-700 uppercase">
          {{ group.category }}
        </div>
        <ul class="m-0 mt-1 list-none divide-y divide-neutral-100 p-0">
          <li
            v-for="item in group.items"
            :key="item.name"
            class="flex items-center justify-between gap-3 py-1.5"
          >
            <span class="truncate text-[13px] text-neutral-800">{{ item.name }}</span>
            <span class="font-data text-[11px] whitespace-nowrap text-neutral-500">{{ item.dose }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Signature -->
    <div class="mt-4 flex items-end justify-between gap-3 border-t border-neutral-200 pt-3.5">
      <div class="text-[11px] leading-snug text-neutral-500">
        Dr A. — <br />
        Consultant Cardiologist
      </div>
      <span class="h-7 w-20 rounded-sm border border-dashed border-neutral-300" />
    </div>
  </div>
</template>
