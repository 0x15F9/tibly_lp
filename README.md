# Tibly landing page

Responsive Vue 3 implementation of the Tibly marketing site, rebuilt from the supplied landing-page reference using the Tibly “Anchor” design system.

## Development

```sh
bun install
bun run dev
```

Create a production build with:

```sh
bun run build
```

The landing page is served at `/`. The internal design-system reference remains available at `#/design-system`.

## Structure

- `src/components/landing/` — landing-page sections and product mockups
- `src/data/landing.ts` — navigation and marketing content
- `src/styles/tokens.css` — canonical color, typography, shape, and elevation tokens
- `src/pages/DesignSystemPage.vue` — interactive design-system reference
