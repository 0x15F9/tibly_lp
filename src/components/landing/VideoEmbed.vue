<script setup lang="ts">
import { ref } from 'vue'
import LandingIcon from './LandingIcon.vue'

const props = defineProps<{
  title: string
  duration: string
  playLabel: string
  poster: string
  sourceUrl: string
  unavailableLabel: string
}>()

const activated = ref(false)

function play() {
  if (props.sourceUrl) activated.value = true
}
</script>

<template>
  <div id="demo-video" class="scroll-mt-24">
    <div class="mb-5 flex flex-wrap items-end justify-between gap-3">
      <h3 class="m-0 font-display text-[1.5rem] font-bold text-navy-800">{{ title }}</h3>
      <span class="font-data text-xs font-semibold tracking-[0.06em] text-neutral-500 uppercase">
        {{ duration }}
      </span>
    </div>
    <div class="relative aspect-video overflow-hidden rounded-lg border border-neutral-200 bg-navy-900 shadow-overlay">
      <video
        v-if="activated"
        controls
        autoplay
        preload="metadata"
        :poster="poster"
        class="h-full w-full"
      >
        <source :src="sourceUrl" />
      </video>
      <template v-else>
        <img
          :src="poster"
          alt=""
          width="1600"
          height="900"
          loading="lazy"
          class="h-full w-full object-cover"
        />
        <span class="absolute inset-0 bg-navy-900/20" aria-hidden="true" />
        <button
          type="button"
          class="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white"
          :aria-label="sourceUrl ? playLabel : unavailableLabel"
          :disabled="!sourceUrl"
          @click="play"
        >
          <span
            class="flex size-16 items-center justify-center rounded-full border border-white bg-navy-800 shadow-overlay sm:size-20"
            aria-hidden="true"
          >
            <LandingIcon name="arrow-right" :size="26" :stroke-width="2.2" />
          </span>
          <span class="rounded-full bg-navy-900/80 px-4 py-2 text-xs font-semibold tracking-[0.04em] uppercase">
            {{ sourceUrl ? playLabel : unavailableLabel }}
          </span>
        </button>
      </template>
    </div>
  </div>
</template>
