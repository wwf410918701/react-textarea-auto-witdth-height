/// <reference types="vitest" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "react-textarea-auto-witdth-height",
      fileName: (format) => `react-textarea-auto-witdth-height.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist",
  },
  plugins: [
    vanillaExtractPlugin(),
    cssInjectedByJsPlugin(),
    dts({
      exclude: ["**/__tests__/**", "**/*.stories.*", "**/*.css.*"],
    }),
  ],
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      exclude: ["**/*.css.*", "**/*.stories.tsx", ".storybook"],
    },
  },
  resolve: {
    alias: { "@": "/src" },
  },
});
