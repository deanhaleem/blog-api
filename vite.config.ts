import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/server.ts",
      output: {
        entryFileNames: "bundle.js",
      },
    },
    target: "esnext",
    minify: false,
    ssr: true,
  },
  ssr: {
    noExternal: true,
  },
});
