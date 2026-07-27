<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    label: string
    state?: 'default' | 'focus' | 'error'
    hint?: string
  }>(),
  {
    modelValue: '',
    placeholder: '',
    state: 'default',
    hint: '',
  },
)
</script>

<template>
  <label class="block">
    <span class="sr-only">{{ label }}</span>
    <input
      class="h-9 w-[220px] max-w-full rounded-lg border bg-white px-3 text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:border-green-600"
      :class="{
        'border-neutral-300': state === 'default',
        'border-green-600 shadow-[var(--focus-ring)]': state === 'focus',
        'border-danger-solid': state === 'error',
      }"
      :value="modelValue"
      :placeholder="placeholder"
      readonly
    />
    <span
      class="field-hint block"
      :class="{ 'text-danger-text!': state === 'error' }"
    >
      {{ hint }}
    </span>
  </label>
</template>
