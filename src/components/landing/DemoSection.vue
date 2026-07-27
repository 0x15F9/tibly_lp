<script setup lang="ts">
import { reactive, ref } from 'vue'
import BaseCta from './BaseCta.vue'
import LandingIcon from './LandingIcon.vue'

const expectations = [
  'A 20-minute tailored walkthrough',
  'No commitment, no card',
  'Your data stays private & login-only',
]

const form = reactive({ name: '', contact: '', note: '' })
const submitted = ref(false)

function onSubmit() {
  submitted.value = true
}

const inputClasses =
  'h-11 w-full rounded-md border border-neutral-300 bg-white px-3.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-green-600'
</script>

<template>
  <section
    id="demo"
    aria-labelledby="demo-title"
    class="bg-[linear-gradient(160deg,var(--navy-800),var(--navy-900))]"
  >
    <div class="lp-wrap grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
      <div v-reveal>
        <h2
          id="demo-title"
          class="m-0 font-display text-[2rem] leading-[1.1] font-bold tracking-[-0.01em] text-white text-balance sm:text-[2.375rem]"
        >
          See Tibly on your own patients
        </h2>
        <p class="mt-4 mb-8 text-[15px] leading-relaxed text-navy-200 sm:text-base">
          Book a short, private walkthrough. We'll set it up around your medicines, phrasing and
          documents, and show a full visit come together in a few clicks.
        </p>
        <ul class="m-0 grid list-none gap-4 p-0">
          <li
            v-for="expectation in expectations"
            :key="expectation"
            class="flex items-center gap-3 text-[15px] text-navy-100"
          >
            <LandingIcon name="check" :size="18" :stroke-width="2.2" class="text-green-300" />
            {{ expectation }}
          </li>
        </ul>
      </div>

      <div v-reveal="1" class="rounded-lg bg-white p-6 shadow-overlay sm:p-8" aria-live="polite">
        <div v-if="submitted" class="px-2 py-6 text-center">
          <span
            class="mx-auto flex size-14 items-center justify-center rounded-full bg-green-50 text-green-700"
            aria-hidden="true"
          >
            <LandingIcon name="check" :size="28" :stroke-width="2.4" />
          </span>
          <h3 class="mt-5 mb-0 font-display text-[1.375rem] font-bold text-navy-800">
            Thank you — request received
          </h3>
          <p class="mt-2 mb-0 text-[15px] leading-relaxed text-neutral-600">
            We'll be in touch shortly to arrange your walkthrough.
          </p>
        </div>

        <template v-else>
          <h3 class="m-0 text-xl font-semibold text-navy-800">Book a demo</h3>
          <p class="mt-1 mb-6 text-[13px] text-neutral-500">We usually reply within a working day.</p>

          <form @submit.prevent="onSubmit">
            <div class="grid gap-4">
              <div>
                <label for="demo-name" class="mb-1.5 block text-[13px] font-semibold text-neutral-700">
                  Name
                </label>
                <input
                  id="demo-name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  placeholder="Dr. Full Name"
                  required
                  :class="inputClasses"
                />
              </div>

              <div>
                <label
                  for="demo-contact"
                  class="mb-1.5 block text-[13px] font-semibold text-neutral-700"
                >
                  Contact <span class="font-normal text-neutral-400">(email or phone)</span>
                </label>
                <input
                  id="demo-contact"
                  v-model="form.contact"
                  type="text"
                  name="contact"
                  autocomplete="email"
                  placeholder="you@practice.com"
                  required
                  :class="inputClasses"
                />
              </div>

              <div>
                <label for="demo-note" class="mb-1.5 block text-[13px] font-semibold text-neutral-700">
                  Tell us about your practice
                  <span class="font-normal text-neutral-400">(optional)</span>
                </label>
                <textarea
                  id="demo-note"
                  v-model="form.note"
                  name="note"
                  rows="3"
                  placeholder="Specialty, size, what you'd like to see…"
                  class="w-full resize-y rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-green-600"
                />
              </div>
            </div>

            <BaseCta type="submit" size="lg" class="mt-6 w-full">Request my demo</BaseCta>

            <p class="mt-4 mb-0 text-center text-xs leading-relaxed text-neutral-400">
              By submitting you agree to be contacted about Tibly. We never share your details.
            </p>
          </form>
        </template>
      </div>
    </div>
  </section>
</template>
