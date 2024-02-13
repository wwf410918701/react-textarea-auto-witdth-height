import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "react-auto-textarea",
      fileName: "react-auto-textarea",
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist",
  },
  plugins: [vanillaExtractPlugin(), dts()],
});
