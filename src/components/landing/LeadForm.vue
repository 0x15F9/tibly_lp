<script setup lang="ts">
import { reactive } from 'vue'
import type { LandingContent } from '../../content/landing'
import BaseCta from './BaseCta.vue'
import LandingIcon from './LandingIcon.vue'

const props = defineProps<{
  content: LandingContent['finalCta']['form']
  submitted: boolean
}>()

const emit = defineEmits<{
  submit: [lead: { name: string; practice: string; phone: string }]
}>()

const form = reactive({ name: '', practice: '', phone: '' })

function onSubmit() {
  emit('submit', { ...form })
}

const inputClass =
  'h-11 w-full rounded-md border border-neutral-300 bg-white px-3.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-green-600'
</script>

<template>
  <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-raised sm:p-8" aria-live="polite">
    <div v-if="submitted" class="flex min-h-72 flex-col items-center justify-center text-center">
      <span class="flex size-12 items-center justify-center rounded-full bg-green-50 text-green-700">
        <LandingIcon name="check" :size="24" :stroke-width="2.4" />
      </span>
      <h3 class="mt-5 mb-0 font-display text-[1.5rem] font-bold text-navy-800">
        {{ content.successHeading }}
      </h3>
      <p class="mt-2 mb-0 text-sm text-neutral-600">{{ content.successBody }}</p>
    </div>
    <template v-else>
      <h3 class="m-0 font-display text-[1.5rem] font-bold text-navy-800">{{ content.heading }}</h3>
      <p class="mt-2 mb-6 text-sm text-neutral-600">{{ content.intro }}</p>
      <form @submit.prevent="onSubmit">
        <div class="grid gap-4">
          <div>
            <label for="lead-name" class="mb-1.5 block text-[13px] font-semibold text-neutral-700">
              {{ content.fields.name.label }}
            </label>
            <input
              id="lead-name"
              v-model.trim="form.name"
              name="name"
              type="text"
              autocomplete="name"
              required
              :title="content.fields.name.requiredMessage"
              :placeholder="content.fields.name.placeholder"
              :class="inputClass"
            />
          </div>
          <div>
            <label for="lead-practice" class="mb-1.5 block text-[13px] font-semibold text-neutral-700">
              {{ content.fields.practice.label }}
            </label>
            <input
              id="lead-practice"
              v-model.trim="form.practice"
              name="practice"
              type="text"
              autocomplete="organization"
              required
              :title="content.fields.practice.requiredMessage"
              :placeholder="content.fields.practice.placeholder"
              :class="inputClass"
            />
          </div>
          <div>
            <label for="lead-phone" class="mb-1.5 block text-[13px] font-semibold text-neutral-700">
              {{ content.fields.phone.label }}
            </label>
            <input
              id="lead-phone"
              v-model.trim="form.phone"
              name="phone"
              type="tel"
              inputmode="tel"
              autocomplete="tel"
              required
              pattern="[+0-9 ()-]{7,}"
              :title="content.fields.phone.requiredMessage"
              :placeholder="content.fields.phone.placeholder"
              :class="inputClass"
            />
          </div>
        </div>
        <BaseCta type="submit" variant="secondary" size="lg" class="mt-6 w-full">
          {{ content.submitLabel }}
          <LandingIcon name="arrow-right" :size="16" :stroke-width="2.4" />
        </BaseCta>
        <p class="mt-4 mb-0 text-center text-xs text-neutral-500">{{ content.privacy }}</p>
      </form>
    </template>
  </div>
</template>
