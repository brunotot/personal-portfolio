/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--color-primary-light)",
          base: "var(--color-primary-base)",
          dark: "var(--color-primary-dark)",
          darker: "var(--color-primary-darker)",
        },
        secondary: {
          light: "var(--color-secondary-light)",
          base: "var(--color-secondary-base)",
          dark: "var(--color-secondary-dark)",
          darker: "var(--color-secondary-darker)",
        },
        tertiary: {
          light: "var(--color-tertiary-light)",
          base: "var(--color-tertiary-base)",
          dark: "var(--color-tertiary-dark)",
          darker: "var(--color-tertiary-darker)",
        },
        // Semantic, theme-aware tokens (flip with [data-theme]).
        canvas: {
          DEFAULT: "rgb(var(--canvas) / <alpha-value>)",
          raised: "rgb(var(--canvas-raised) / <alpha-value>)",
        },
        content: {
          DEFAULT: "rgb(var(--content) / <alpha-value>)",
          secondary: "rgb(var(--content-secondary) / <alpha-value>)",
          muted: "rgb(var(--content-muted) / <alpha-value>)",
          faint: "rgb(var(--content-faint) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          subtle: "var(--surface-subtle)",
          hover: "var(--surface-hover)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
      },
    },
  },
  plugins: [],
};
