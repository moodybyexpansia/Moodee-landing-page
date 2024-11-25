// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sanity({
      projectId: "tvk4rnx3",
      dataset: "production",
      useCdn: false,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
