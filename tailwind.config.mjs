/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        dark: "#151D48",
        purple: {
          light: "#ECDFF9",
          DEFAULT: "#9F58E1",
        },
        green: {
          light: "#DDF9E1",
          DEFAULT: "#53E16A",
        },
        blue: {
          light: "#ECF6FF",
          DEFAULT: "#409CFF",
        },
        orange: {
          light: "#FDF3D9",
          DEFAULT: "#F6C443",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
