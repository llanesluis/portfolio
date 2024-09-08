import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          light: "hsl(var(--accent-light))",
          dark: "hsl(var(--accent-dark))",
        },
      },
      fontFamily: {
        onest: ["Onest Variable", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: () => ({
        // inspired by https://www.joshwcomeau.com/shadow-palette/
        "surface-glass": `
          inset 0.25px 1px 0 0 hsl(var(--accent) / 0.25),
          0px 0.3px 0.3px hsl(var(--accent) / 0.02),
          0px 2.2px 2.5px -0.4px hsl(var(--accent) / 0.02),
          0px 4.3px 4.8px -0.8px hsl(var(--accent) / 0.02),
          0px 7.5px 8.4px -1.2px hsl(var(--accent) / 0.02),
          0px 12.8px 14.4px -1.7px hsl(var(--accent) / 0.02),
          0px 21px 23.6px -2.1px hsl(var(--accent) / 0.02),
          0px 33.2px 37.4px -2.5px hsl(var(--accent) / 0.02)`,
        "surface-elevation-low": `
          inset 0.25px 1px 1px 0 rgb(var(--accent) / 0.15),
          0.3px 0.5px 0.7px hsl(var(--accent), 0.2) /
          0.4px 0.8px 1px -1.2px hsl(var(--accent) / 0.2),
          1px 2px 2.5px -2.5px hsl(var(--accent) / 0.2);`,
        "surface-elevation-medium": `
          inset 0.25px 1px 1px 0 rgb(var(--accent) / 0.15),
          0.3px 0.5px 0.7px hsl(var(--accent) / 0.1),
          0.8px 1.6px 2px -0.8px hsl(var(--accent) / 0.1),
          2.1px 4.1px 5.2px -1.7px hsl(var(--accent) / 0.1),
          5px 10px 12.6px -2.5px hsl(var(--accent) / 0.1)`,
      }),
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        fadein: "fade-in 1s ease-in-out 0.25s 1",
        fadeout: "fade-out 1s ease-out 0.25s 1",
        fadeindown: "fade-in-down 1s ease-in 0.25s 1",
      },
    },
  },
  plugins: [],
};
