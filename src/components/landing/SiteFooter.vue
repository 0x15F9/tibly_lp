<script setup lang="ts">
import { navLinks } from '../../data/landing'

const platformLinks = navLinks.map((link) =>
  link.href === '#product' ? { ...link, label: 'Four pillars' } : link,
)

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-navy-900 text-navy-300">
    <div class="lp-wrap pt-12 pb-8 sm:pt-14">
      <div class="flex flex-col justify-between gap-10 md:flex-row md:items-start">
        <div class="max-w-xs">
          <a href="#top" class="inline-flex items-center gap-2.5 text-white">
            <span
              class="flex size-8 items-center justify-center rounded-md bg-white font-display text-[19px] font-bold text-navy-800"
              aria-hidden="true"
            >
              T
            </span>
            <span class="font-display text-[23px] font-bold tracking-tight">Tibly</span>
          </a>
          <p class="mt-4 mb-0 text-sm leading-relaxed">
            The clinical consultation and patient-records platform for specialist practices. Less
            paperwork, more time with patients.
          </p>
        </div>

        <div class="flex flex-wrap gap-x-16 gap-y-10">
          <nav aria-label="Platform">
            <h3 class="m-0 mb-3.5 text-xs font-semibold tracking-[0.08em] text-navy-400 uppercase">
              Platform
            </h3>
            <ul class="m-0 grid list-none gap-2.5 p-0">
              <li v-for="link in platformLinks" :key="link.href">
                <a :href="link.href" class="text-sm text-navy-100 transition-colors hover:text-white">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Get started">
            <h3 class="m-0 mb-3.5 text-xs font-semibold tracking-[0.08em] text-navy-400 uppercase">
              Get started
            </h3>
            <ul class="m-0 grid list-none gap-2.5 p-0">
              <li>
                <a href="#demo" class="text-sm text-navy-100 transition-colors hover:text-white">
                  Book a demo
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@tibly.net"
                  class="text-sm text-navy-100 transition-colors hover:text-white"
                >
                  hello@tibly.net
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        class="mt-10 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-400"
      >
        <span>© {{ year }} Tibly · tibly.net</span>
        <span>Private, login-only clinical platform</span>
      </div>
    </div>
  </footer>
</template>
