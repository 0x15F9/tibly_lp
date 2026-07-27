<script setup lang="ts">
const dos = [
  'One solid green button per screen',
  'Serif for the page title, Inter for everything below it',
  'Icons on every status pill',
  '.font-data on vitals, dosages, prices, dates',
  'Navy topbar with the green active indicator',
  'Neutral-500 uppercase table headers',
]

const donts = [
  'Green headers, navy buttons — roles never swap',
  'Solid green status badges (pills only)',
  'Serif below 22px, ever',
  'Two solid green CTAs competing on one screen',
  'Pure black text — ink is navy-800 or neutral-900',
  'Color as the only carrier of meaning',
]
</script>

<template>
  <section class="design-section border-b-0!" aria-labelledby="guidance-title">
    <h2 id="guidance-title" class="section-title">Do and don't</h2>
    <div class="mt-2 grid gap-4 sm:grid-cols-2">
      <article class="card p-5">
        <h3 class="mb-2.5 text-[13px] font-semibold text-green-700">Do</h3>
        <ul class="m-0 list-none p-0">
          <li
            v-for="item in dos"
            :key="item"
            class="relative py-1 pl-5 text-[13px] text-neutral-700 before:absolute before:left-0 before:font-semibold before:text-green-600 before:content-['✓']"
          >
            <template v-if="item.startsWith('.font-data')">
              <code class="inline-code">.font-data</code>{{ item.slice(10) }}
            </template>
            <template v-else>{{ item }}</template>
          </li>
        </ul>
      </article>
      <article class="card p-5">
        <h3 class="mb-2.5 text-[13px] font-semibold text-danger-text">Don't</h3>
        <ul class="m-0 list-none p-0">
          <li
            v-for="item in donts"
            :key="item"
            class="relative py-1 pl-5 text-[13px] text-neutral-700 before:absolute before:left-0 before:font-semibold before:text-danger-solid before:content-['✕']"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
