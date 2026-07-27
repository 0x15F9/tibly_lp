<script setup lang="ts">
import SelectChip from '../ui/SelectChip.vue'
import StatusPill from '../ui/StatusPill.vue'
import TiblyButton from '../ui/TiblyButton.vue'
import TiblyInput from '../ui/TiblyInput.vue'

const chips = ['1 w', '2 w', '1 m', '3 m', '6 m', '12 m']

const patients = [
  {
    initials: 'AR',
    name: 'Anil Ramgoolam',
    age: '46',
    phone: '5795 4412',
    lastVisit: '14 May 2026',
    status: 'Up to date',
    tone: 'success' as const,
  },
  {
    initials: 'BJ',
    name: 'Bibi F. Jeetoo',
    age: '67',
    phone: '5710 3521',
    lastVisit: '08 Nov 2025',
    status: 'Review overdue',
    tone: 'warning' as const,
  },
]
</script>

<template>
  <section class="design-section" aria-labelledby="components-title">
    <h2 id="components-title" class="section-title">Components</h2>

    <h3 class="subsection-title mt-0!">Buttons — the action hierarchy</h3>
    <div class="flex flex-wrap items-center gap-2.5">
      <TiblyButton>+ New consultation</TiblyButton>
      <TiblyButton variant="secondary">Print summary</TiblyButton>
      <TiblyButton variant="text">View history</TiblyButton>
      <TiblyButton variant="ghost">Cancel</TiblyButton>
      <TiblyButton variant="destructive">Delete record</TiblyButton>
      <TiblyButton disabled>Save</TiblyButton>
    </div>
    <p class="field-hint mt-3!">
      Primary: green-600 → hover 700 → pressed 800. Exactly one per screen.
      Secondary is a navy outline; it navigates and configures, it never "does".
    </p>

    <h3 class="subsection-title">Inputs</h3>
    <div class="flex flex-wrap items-start gap-4">
      <TiblyInput
        label="Search by patient's name"
        placeholder="Search by patient's name"
        hint="Default"
      />
      <TiblyInput
        label="Focused search example"
        model-value="Ramgoolam"
        state="focus"
        hint="Focus — green ring"
      />
      <TiblyInput
        label="Invalid numeric input example"
        model-value="hello"
        state="error"
        hint="Enter a number, like 120"
      />
    </div>

    <h3 class="subsection-title">Chips — durations, filters, selectable options</h3>
    <div class="flex flex-wrap gap-2">
      <SelectChip v-for="chip in chips" :key="chip" :selected="chip === '1 m'">
        {{ chip }}
      </SelectChip>
    </div>
    <p class="field-hint mt-2.5!">
      Selected = green-50 fill, green-600 border, green-800 text. Tinted, not solid
      — the solid fill belongs to the primary button alone.
    </p>

    <h3 class="subsection-title">Topbar — the sanctioned crossover</h3>
    <nav
      class="flex h-[52px] items-center gap-4 overflow-x-auto rounded-xl bg-navy-800 px-5 sm:gap-7"
      aria-label="Example application navigation"
    >
      <a
        href="#"
        class="shrink-0 font-display text-xl font-semibold text-white no-underline"
        @click.prevent
      >
        Tibly<span class="text-green-300">.net</span>
      </a>
      <a
        href="#"
        class="inline-flex h-full shrink-0 items-center border-b-2 border-transparent text-[13px] text-navy-300 no-underline hover:text-white"
        @click.prevent
      >
        Dashboard
      </a>
      <a
        href="#"
        class="inline-flex h-full shrink-0 items-center border-b-2 border-green-400 text-[13px] text-white no-underline"
        aria-current="page"
        @click.prevent
      >
        Patients
      </a>
      <a
        href="#"
        class="inline-flex h-full shrink-0 items-center border-b-2 border-transparent text-[13px] text-navy-300 no-underline hover:text-white"
        @click.prevent
      >
        Documents
      </a>
    </nav>

    <h3 class="subsection-title">Table</h3>
    <div class="card overflow-x-auto">
      <table class="w-full min-w-[680px] border-collapse text-sm">
        <thead>
          <tr>
            <th
              v-for="heading in ['Name', 'Age', 'Phone', 'Last visit', 'Status']"
              :key="heading"
              scope="col"
              class="border-b border-neutral-200 px-3.5 py-2.5 text-left text-xs font-semibold tracking-[0.04em] text-neutral-500 uppercase"
            >
              {{ heading }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="patient in patients"
            :key="patient.name"
            class="group"
          >
            <td
              class="border-b border-neutral-100 px-3.5 py-3 text-neutral-800 group-last:border-b-0 group-hover:bg-neutral-50"
            >
              <span
                class="mr-2 inline-flex size-8 items-center justify-center rounded-full bg-navy-100 text-xs font-semibold text-navy-700"
              >
                {{ patient.initials }}
              </span>
              {{ patient.name }}
            </td>
            <td
              class="font-data border-b border-neutral-100 px-3.5 py-3 text-neutral-800 group-last:border-b-0 group-hover:bg-neutral-50"
            >
              {{ patient.age }}
            </td>
            <td
              class="font-data border-b border-neutral-100 px-3.5 py-3 text-neutral-800 group-last:border-b-0 group-hover:bg-neutral-50"
            >
              {{ patient.phone }}
            </td>
            <td
              class="font-data border-b border-neutral-100 px-3.5 py-3 text-neutral-800 group-last:border-b-0 group-hover:bg-neutral-50"
            >
              {{ patient.lastVisit }}
            </td>
            <td
              class="border-b border-neutral-100 px-3.5 py-3 text-neutral-800 group-last:border-b-0 group-hover:bg-neutral-50"
            >
              <StatusPill :tone="patient.tone">{{ patient.status }}</StatusPill>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="field-hint mt-2.5!">
      Numeric columns use <code class="inline-code">.font-data</code> — dates, ages,
      and phone numbers align vertically and the zero is slashed.
    </p>
  </section>
</template>
