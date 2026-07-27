<script setup lang="ts">
import ColorSection from '../components/sections/ColorSection.vue'
import ComponentsSection from '../components/sections/ComponentsSection.vue'
import DosDontsSection from '../components/sections/DosDontsSection.vue'
import FiveLawsSection from '../components/sections/FiveLawsSection.vue'
import PageHero from '../components/sections/PageHero.vue'
import TypographySection from '../components/sections/TypographySection.vue'
</script>

<template>
  <PageHero />

  <main class="page-wrap">
    <FiveLawsSection />
    <ColorSection />
    <TypographySection />
    <ComponentsSection />
    <DosDontsSection />
  </main>
</template>
