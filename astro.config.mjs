/// <reference types="node" />
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/kochrezepte/" : "/",
  vite: {
    server: {
      host: "0.0.0.0",
      hmr: {
        protocol: "ws",
        host: "localhost",
        port: 4321,
      },
    },
  },
});
