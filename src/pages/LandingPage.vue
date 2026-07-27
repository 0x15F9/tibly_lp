<script setup lang="ts">
import DemoSection from '../components/landing/DemoSection.vue'
import FaqSection from '../components/landing/FaqSection.vue'
import HeroSection from '../components/landing/HeroSection.vue'
import HowItWorksSection from '../components/landing/HowItWorksSection.vue'
import PillarsSection from '../components/landing/PillarsSection.vue'
import PracticeSection from '../components/landing/PracticeSection.vue'
import ShowcaseSection from '../components/landing/ShowcaseSection.vue'
import SiteFooter from '../components/landing/SiteFooter.vue'
import SiteHeader from '../components/landing/SiteHeader.vue'
import TestimonialSection from '../components/landing/TestimonialSection.vue'
import TrustStrip from '../components/landing/TrustStrip.vue'
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <SiteHeader />

  <main id="main-content">
    <HeroSection />
    <TrustStrip />
    <PillarsSection />
    <ShowcaseSection />
    <HowItWorksSection />
    <PracticeSection />
    <TestimonialSection />
    <FaqSection />
    <DemoSection />
  </main>

  <SiteFooter />
</template>
