<script setup lang="ts">
type CtaVariant = 'primary' | 'secondary'
type CtaSize = 'md' | 'lg'

withDefaults(
  defineProps<{
    /** Renders an anchor when set, otherwise a button. */
    href?: string
    type?: 'button' | 'submit'
    variant?: CtaVariant
    size?: CtaSize
  }>(),
  {
    href: undefined,
    type: 'button',
    variant: 'primary',
    size: 'md',
  },
)

/**
 * Law 2 — green owns interaction. `primary` is the one solid green
 * action; `secondary` is the sanctioned navy outline.
 */
const variantClasses: Record<CtaVariant, string> = {
  primary:
    'border-green-600 bg-green-600 text-white shadow-card hover:border-green-700 hover:bg-green-700 active:border-green-800 active:bg-green-800',
  secondary: 'border-navy-800 bg-transparent text-navy-800 hover:bg-navy-50 active:bg-navy-100',
}

const sizeClasses: Record<CtaSize, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[15px]',
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    class="inline-flex items-center justify-center gap-2 rounded-lg border font-semibold whitespace-nowrap transition-colors"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>
