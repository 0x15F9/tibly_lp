<script setup lang="ts">
import { ref } from 'vue'
import BaseCta from '../components/landing/BaseCta.vue'
import CardGrid from '../components/landing/CardGrid.vue'
import HeroSection from '../components/landing/HeroSection.vue'
import LandingIcon from '../components/landing/LandingIcon.vue'
import LeadForm from '../components/landing/LeadForm.vue'
import MediaRow from '../components/landing/MediaRow.vue'
import OfferPanel from '../components/landing/OfferPanel.vue'
import SectionHeading from '../components/landing/SectionHeading.vue'
import SiteFooter from '../components/landing/SiteFooter.vue'
import SiteHeader from '../components/landing/SiteHeader.vue'
import TestimonialBlock from '../components/landing/TestimonialBlock.vue'
import TonalBand from '../components/landing/TonalBand.vue'
import VideoEmbed from '../components/landing/VideoEmbed.vue'
import { landingContent } from '../content/landing'

const content = landingContent
const leadSubmitted = ref(false)

function submitLead(_lead: { name: string; practice: string; phone: string }) {
  // Placeholder handler: replace this body with the production endpoint.
  leadSubmitted.value = true
}
</script>

<template>
  <a class="skip-link" href="#main-content">{{ content.brand.skipLink }}</a>
  <SiteHeader
    :brand="content.brand"
    :navigation="content.navigation"
    :cta="content.headerCta"
  />

  <main id="main-content">
    <HeroSection :content="content.hero" />

    <section aria-labelledby="who-title" class="bg-white py-16 sm:py-24">
      <div class="lp-wrap">
        <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
          <SectionHeading
            :eyebrow="content.whoFor.eyebrow"
            :title="content.whoFor.heading"
            title-id="who-title"
          />
          <p class="m-0 max-w-2xl text-[15px] leading-relaxed text-neutral-600 sm:text-base">
            {{ content.whoFor.intro }}
          </p>
        </div>
        <CardGrid
          :cards="content.whoFor.cards"
          :columns="2"
          numbered
          class="mt-10"
        />
      </div>
    </section>

    <TonalBand
      :eyebrow="content.problem.eyebrow"
      :heading="content.problem.heading"
      :pains="content.problem.pains"
      :image="content.problem.image"
    />

    <section id="outcome" aria-labelledby="outcome-title" class="bg-neutral-50 py-16 sm:py-24">
      <div class="lp-wrap">
        <SectionHeading
          :eyebrow="content.outcome.eyebrow"
          :title="content.outcome.heading"
          title-id="outcome-title"
          centered
        />
        <CardGrid :cards="content.outcome.cards" :columns="3" class="mt-10" />
        <p
          v-reveal
          class="mx-auto mt-9 mb-0 max-w-3xl text-center font-display text-[1.5rem] leading-snug font-semibold text-navy-800 sm:text-[1.75rem]"
        >
          {{ content.outcome.payoff }}
        </p>
      </div>
    </section>

    <section id="product" aria-labelledby="product-title" class="bg-white py-16 sm:py-24">
      <div class="lp-wrap">
        <SectionHeading
          :eyebrow="content.seeItWork.eyebrow"
          :title="content.seeItWork.heading"
          title-id="product-title"
        />
        <div class="mt-12 grid gap-16 sm:mt-16 sm:gap-24">
          <MediaRow
            v-for="(row, index) in content.seeItWork.rows"
            :key="row.title"
            :item="row"
            :reverse="index % 2 === 1"
          />
        </div>
        <div class="mt-16 border-t border-neutral-200 pt-12 sm:mt-24 sm:pt-16">
          <VideoEmbed v-bind="content.seeItWork.video" />
        </div>
      </div>
    </section>

    <section id="why" aria-labelledby="why-title" class="bg-neutral-50 py-16 sm:py-24">
      <div class="lp-wrap">
        <SectionHeading
          :eyebrow="content.why.eyebrow"
          :title="content.why.heading"
          title-id="why-title"
          centered
        />
        <CardGrid :cards="content.why.items" :columns="5" compact class="mt-10" />
      </div>
    </section>

    <TestimonialBlock v-bind="content.proof" />

    <OfferPanel :content="content.offer" />

    <section aria-labelledby="trust-title" class="border-y border-navy-700 bg-navy-800">
      <div class="lp-wrap flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
        <h2 id="trust-title" class="m-0 font-display text-[1.375rem] font-semibold text-white">
          {{ content.trust.heading }}
        </h2>
        <ul class="m-0 grid list-none gap-2 p-0 md:max-w-3xl md:grid-cols-2 md:gap-7">
          <li
            v-for="line in content.trust.lines"
            :key="line"
            class="flex items-start gap-2 text-xs leading-relaxed text-navy-100"
          >
            <LandingIcon name="check" :size="15" :stroke-width="2.4" class="mt-0.5 text-green-300" />
            {{ line }}
          </li>
        </ul>
      </div>
    </section>

    <section id="contact" aria-labelledby="contact-title" class="bg-white py-16 sm:py-24">
      <div class="lp-wrap">
        <h2
          id="contact-title"
          class="m-0 max-w-4xl font-display text-[2.15rem] leading-[1.05] font-bold text-navy-800 text-balance sm:text-[3rem]"
        >
          {{ content.finalCta.heading }}
        </h2>

        <div class="mt-10 grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            v-reveal
            class="flex flex-col justify-between rounded-lg bg-navy-900 p-7 text-white shadow-raised sm:p-10"
          >
            <div>
              <p class="m-0 text-xs font-semibold tracking-[0.08em] text-green-300 uppercase">
                {{ content.finalCta.whatsapp.eyebrow }}
              </p>
              <p class="mt-5 mb-0 max-w-lg text-[15px] leading-relaxed text-navy-100 sm:text-base">
                {{ content.finalCta.whatsapp.body }}
              </p>
            </div>
            <BaseCta
              :href="content.finalCta.whatsapp.href"
              :aria-label="content.finalCta.whatsapp.ariaLabel"
              target="_blank"
              size="lg"
              class="mt-10 w-full sm:w-fit"
            >
              {{ content.finalCta.whatsapp.label }}
              <LandingIcon name="arrow-right" :size="16" :stroke-width="2.4" />
            </BaseCta>
          </div>

          <div v-reveal="1">
            <LeadForm
              :content="content.finalCta.form"
              :submitted="leadSubmitted"
              class="h-full"
              @submit="submitLead"
            />
          </div>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter
    :brand="content.brand"
    :navigation="content.navigation"
    :content="content.footer"
  />
</template>
