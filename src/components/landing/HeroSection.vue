<script setup lang="ts">
import BaseCta from './BaseCta.vue'
import LandingIcon from './LandingIcon.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'
import DashboardMock from './mocks/DashboardMock.vue'

const assurances = ['Private & login-only', 'Built for specialists']
</script>

<template>
  <section
    id="top"
    aria-labelledby="hero-title"
    class="relative overflow-hidden bg-[radial-gradient(70rem_38rem_at_80%_-10%,var(--navy-50),var(--neutral-50)_55%)]"
  >
    <div class="lp-wrap grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
      <div class="min-w-0">
        <p
          v-reveal
          class="m-0 inline-flex items-center gap-2 rounded-full border border-info-border bg-white px-3 py-1.5 text-xs font-semibold tracking-[0.01em] text-info-text shadow-card"
        >
          <span class="size-1.5 rounded-full bg-green-500 motion-safe:animate-pulse" aria-hidden="true" />
          Cardiology-focused clinical platform
        </p>

        <h1
          id="hero-title"
          v-reveal="1"
          class="mt-5 mb-0 font-display text-[2.375rem] leading-[1.05] font-bold tracking-[-0.015em] text-navy-800 text-balance sm:text-[2.75rem]"
        >
          Less paperwork.<br />More time with patients.
        </h1>

        <p v-reveal="2" class="mt-5 mb-0 max-w-xl text-base leading-relaxed text-neutral-600">
          Tibly takes your specialist practice from patient intake to consultation notes,
          prescriptions and professional documents — in one fast, private workflow that already
          knows your medicines, phrasing and templates.
        </p>

        <div v-reveal="3" class="mt-8 grid gap-3.5 sm:flex sm:flex-wrap">
          <BaseCta href="#demo" size="lg" class="w-full sm:w-auto">
            Book a demo
            <LandingIcon name="arrow-right" :size="16" :stroke-width="2.4" />
          </BaseCta>
          <BaseCta href="#how" variant="secondary" size="lg" class="w-full sm:w-auto">
            See how it works
          </BaseCta>
        </div>

        <ul v-reveal="4" class="m-0 mt-7 flex list-none flex-wrap items-center gap-x-4 gap-y-2 p-0">
          <li
            v-for="(assurance, index) in assurances"
            :key="assurance"
            class="flex items-center gap-4 text-[13px] text-neutral-500"
          >
            <span v-if="index > 0" class="hidden h-3.5 w-px bg-neutral-300 sm:block" aria-hidden="true" />
            <span class="flex items-center gap-1.5">
              <LandingIcon name="check" :size="15" :stroke-width="2.4" class="text-green-600" />
              {{ assurance }}
            </span>
          </li>
        </ul>
      </div>

      <div v-reveal="2" class="relative min-w-0">
        <div
          class="absolute -top-4 -right-4 size-36 rounded-2xl bg-[linear-gradient(135deg,var(--green-100),transparent)] opacity-70 blur-sm"
          aria-hidden="true"
        />
        <ScreenshotFrame label="app.tibly.net" class="relative">
          <DashboardMock />
        </ScreenshotFrame>
      </div>
    </div>
  </section>
</template>
