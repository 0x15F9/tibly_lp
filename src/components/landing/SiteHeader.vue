<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { navLinks } from '../../data/landing'
import BaseCta from './BaseCta.vue'
import LandingIcon from './LandingIcon.vue'

const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement>()
let desktopQuery: MediaQueryList | undefined

function closeMenu(restoreFocus = false) {
  menuOpen.value = false
  if (restoreFocus) nextTick(() => menuButton.value?.focus())
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) closeMenu(true)
}

function onDesktopChange(event: MediaQueryListEvent) {
  if (event.matches) closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  desktopQuery = window.matchMedia('(min-width: 768px)')
  desktopQuery.addEventListener('change', onDesktopChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  desktopQuery?.removeEventListener('change', onDesktopChange)
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-neutral-100 bg-white/85 backdrop-blur-md">
    <div class="lp-wrap flex h-16 items-center justify-between gap-6">
      <a
        href="#top"
        class="flex shrink-0 items-center gap-2.5 text-navy-800"
        aria-label="Tibly home"
        @click="closeMenu()"
      >
        <span
          class="flex size-8 items-center justify-center rounded-md bg-navy-800 font-display text-[19px] font-bold text-white"
          aria-hidden="true"
        >
          T
        </span>
        <span class="font-display text-[23px] font-bold tracking-tight">Tibly</span>
      </a>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-neutral-700 transition-colors hover:text-navy-800"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="ml-auto hidden md:block md:ml-0">
        <!-- Law 3: the solid green button belongs to the hero — nav stays navy outline. -->
        <BaseCta href="#demo" variant="secondary">Book a demo</BaseCta>
      </div>

      <button
        ref="menuButton"
        type="button"
        class="flex size-10 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-navy-800 md:hidden"
        :aria-expanded="menuOpen"
        aria-haspopup="true"
        aria-controls="mobile-nav"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
        <LandingIcon :name="menuOpen ? 'close' : 'menu'" :size="20" />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-1 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-1 opacity-0"
    >
      <nav
        v-if="menuOpen"
        id="mobile-nav"
        class="border-t border-neutral-100 bg-white shadow-raised md:hidden"
        aria-label="Primary"
      >
        <div class="lp-wrap flex flex-col gap-1 py-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="rounded-md px-3 py-2.5 text-[15px] font-medium text-neutral-700 hover:bg-neutral-50 hover:text-navy-800"
            @click="closeMenu()"
          >
            {{ link.label }}
          </a>
          <BaseCta href="#demo" variant="secondary" class="mt-2 w-full" @click="closeMenu()">
            Book a demo
          </BaseCta>
        </div>
      </nav>
    </Transition>
  </header>
</template>
