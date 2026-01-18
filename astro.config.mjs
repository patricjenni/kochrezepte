/// <reference types="node" />
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
  base: process.env.NODE_ENV === "production" ? "/kochrezepte/" : "/",
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  },
});
