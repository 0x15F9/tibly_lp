<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'text' | 'ghost' | 'destructive'

withDefaults(
  defineProps<{
    variant?: ButtonVariant
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    disabled: false,
  },
)

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-green-600 bg-green-600 text-white hover:border-green-700 hover:bg-green-700 active:border-green-800 active:bg-green-800',
  secondary:
    'border-navy-800 text-navy-800 hover:bg-navy-50 active:bg-navy-100',
  text: 'border-transparent text-green-700 hover:bg-green-50 active:bg-green-100',
  ghost: 'border-transparent text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200',
  destructive:
    'border-danger-border text-danger-text hover:bg-danger-bg active:border-danger-text',
}
</script>

<template>
  <button
    type="button"
    class="inline-flex h-9 items-center gap-1.5 rounded-lg border px-3.5 text-[13px] font-medium transition-colors disabled:cursor-not-allowed disabled:border-neutral-100 disabled:bg-neutral-100 disabled:text-neutral-400"
    :class="variantClasses[variant]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
