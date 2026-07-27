// Tibly Design System — "Anchor" — Tailwind v3 config.
// If you are on Tailwind v4, skip this file: tokens.css @theme covers it.
// Values duplicate tokens.css deliberately (v3 opacity modifiers like
// bg-navy-800/50 require raw values, not var() references).

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Structure — chrome, headings, nav, emphasis. Never on buttons that act.
        navy: {
          50: "#EEF2F9", 100: "#DBE4F2", 200: "#B9C9E4", 300: "#8FA7D0",
          400: "#6383B8", 500: "#40639D", 600: "#294A82", 700: "#1A366B",
          800: "#0F2557", 900: "#0A1839",
        },
        // Interaction — buttons, links, active states, focus. Never on chrome.
        green: {
          50: "#EAF5EF", 100: "#D2EADD", 200: "#A6D5BC", 300: "#74BC96",
          400: "#479D71", 500: "#2C8A5C", 600: "#1F7A4D", 700: "#186040",
          800: "#124A32", 900: "#0C3423",
        },
        neutral: {
          0: "#FFFFFF", 50: "#F7F8FA", 100: "#EFF1F4", 200: "#E2E5EA",
          300: "#CDD2DA", 400: "#A8AFBB", 500: "#7C8492", 600: "#5A6372",
          700: "#434B58", 800: "#2C323D", 900: "#171B22",
        },
        // Statuses: always tinted pill + icon. Never solid fills.
        success: { bg: "#EAF5EF", text: "#186040", border: "#A6D5BC" },
        warning: { bg: "#FAEEDA", text: "#854F0B", border: "#F0D6A3" },
        danger:  { bg: "#FCEBEB", text: "#A32626", border: "#F0B9B9", solid: "#C5352F" },
        info:    { bg: "#EEF2F9", text: "#1A366B", border: "#B9C9E4" },
      },
      fontFamily: {
        // Display: >= 22px only. Page titles, record names, marketing.
        display: ['"EB Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        // Garamond sizes carry +12% optical compensation
        "display-xl": ["44px", { lineHeight: "1.08", fontWeight: "700" }],
        "display-lg": ["33px", { lineHeight: "1.15", fontWeight: "600" }],
        "display-md": ["26px", { lineHeight: "1.20", fontWeight: "600" }],
        "display-sm": ["22px", { lineHeight: "1.25", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        lg: "12px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,24,57,0.06)",
        raised: "0 4px 12px rgba(10,24,57,0.10)",
        overlay: "0 12px 32px rgba(10,24,57,0.16)",
        "focus-ring": "0 0 0 3px rgba(31,122,77,0.25)",
      },
      height: {
        control: "36px",
        topbar: "52px",
      },
    },
  },
  plugins: [],
};

export default config;
