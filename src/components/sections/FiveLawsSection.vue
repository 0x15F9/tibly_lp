<script setup lang="ts">
const laws = [
  {
    title: 'Navy owns structure.',
    description:
      'Chrome, headings, navigation, emphasis. Navy never sits on a control that performs an action.',
  },
  {
    title: 'Green owns interaction.',
    description:
      'Buttons, links, active indicators, focus, selected states. Green is never decoration. One sanctioned crossover: the green active-tab indicator inside navy chrome.',
  },
  {
    title: 'One solid green button per screen.',
    description:
      'It marks the primary action. Everything else is a navy outline, a ghost, or a green-text button.',
  },
  {
    title: 'Statuses are tinted pills with icons — never solid fills.',
    description:
      'This treatment rule is what lets action-green and success-green share an interface without confusion.',
  },
  {
    title: 'The serif lives at 22px and above.',
    description:
      'EB Garamond for page titles, record names, marketing. Inter does all body, table, form, and button work — with data features on.',
  },
]
</script>

<template>
  <section class="design-section" aria-labelledby="laws-title">
    <h2 id="laws-title" class="section-title">The five laws</h2>
    <p class="section-subtitle">
      Everything below is an application of these. When a screen feels wrong, one
      of these has been broken.
    </p>

    <ol class="m-0 grid list-none gap-3 p-0">
      <li
        v-for="(law, index) in laws"
        :key="law.title"
        class="card flex items-baseline gap-4 px-[18px] py-4"
      >
        <span
          class="min-w-6 font-display text-2xl font-semibold text-green-600"
          aria-hidden="true"
        >
          {{ index + 1 }}
        </span>
        <p class="m-0">
          <strong class="text-navy-800">{{ law.title }}</strong>
          {{ law.description }}
        </p>
      </li>
    </ol>
  </section>
</template>
