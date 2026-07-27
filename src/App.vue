<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import DesignSystemPage from './pages/DesignSystemPage.vue'
import LandingPage from './pages/LandingPage.vue'

/**
 * Hash-based view switch: the landing page is the site; the internal
 * design-system reference stays reachable at `#/design-system`.
 */
const hash = ref(window.location.hash)

function onHashChange() {
  hash.value = window.location.hash
}

onMounted(() => window.addEventListener('hashchange', onHashChange))
onBeforeUnmount(() => window.removeEventListener('hashchange', onHashChange))

const showDesignSystem = computed(() => hash.value === '#/design-system')
</script>

<template>
  <DesignSystemPage v-if="showDesignSystem" />
  <LandingPage v-else />
</template>
