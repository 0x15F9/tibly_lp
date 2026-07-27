import type { Directive } from 'vue'

/**
 * `v-reveal` fades an element in the first time it enters the viewport.
 * Pass an index (`v-reveal="i"`) to stagger siblings by 80 ms steps.
 * Falls back to instantly visible when IntersectionObserver is missing
 * or the user prefers reduced motion.
 */
const staggerIndex = new WeakMap<Element, number>()

let observer: IntersectionObserver | undefined

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        el.style.transitionDelay = `${(staggerIndex.get(el) ?? 0) * 80}ms`
        el.classList.add('is-in')
        observer?.unobserve(el)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

declare module 'vue' {
  interface GlobalDirectives {
    vReveal: typeof vReveal
  }
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (typeof IntersectionObserver === 'undefined' || reducedMotion) {
      el.classList.add('is-in')
      return
    }

    staggerIndex.set(el, binding.value ?? 0)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
