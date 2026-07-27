<script setup lang="ts">
import { ref } from 'vue'
import { faqs } from '../../data/landing'
import LandingIcon from './LandingIcon.vue'
import SectionHeading from './SectionHeading.vue'

const openIndex = ref<number>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" aria-labelledby="faq-title" class="lp-wrap max-w-3xl py-16 sm:py-20">
    <div v-reveal>
      <SectionHeading eyebrow="FAQ" title="Questions, answered" title-id="faq-title" centered />
    </div>

    <div class="mt-10 grid gap-3">
      <div
        v-for="(faq, index) in faqs"
        :key="faq.question"
        v-reveal="index"
        class="card overflow-hidden"
      >
        <h3 class="m-0">
          <button
            :id="`faq-question-${index}`"
            type="button"
            class="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-5 py-4 text-left sm:px-6 sm:py-5"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="toggle(index)"
          >
            <span class="text-[15px] font-semibold text-navy-800 sm:text-base">
              {{ faq.question }}
            </span>
            <span
              class="flex size-8 shrink-0 items-center justify-center rounded-md text-green-700 transition-[transform,background-color] duration-300"
              :class="openIndex === index ? 'rotate-180 bg-green-50' : 'bg-neutral-50'"
              aria-hidden="true"
            >
              <LandingIcon name="chevron-down" :size="17" :stroke-width="2.4" />
            </span>
          </button>
        </h3>
        <div
          :id="`faq-answer-${index}`"
          role="region"
          :aria-labelledby="`faq-question-${index}`"
          class="grid transition-[grid-template-rows] duration-300 ease-out"
          :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="overflow-hidden">
            <p class="m-0 px-5 pb-5 text-sm leading-relaxed text-neutral-600 sm:px-6">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
