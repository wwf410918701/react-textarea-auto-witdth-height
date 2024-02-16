/// <reference types="vitest" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "react-auto-textarea",
      fileName: (format) => `react-auto-textarea.${format}.js`,
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
