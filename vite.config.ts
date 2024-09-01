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
    commonjsOptions: {
      ignore: [
        "better-sqlite3",
        "mariadb/callback",
        "tedious",
        "pg",
        "libsql",
        "pg-query-stream",
        "mysql",
        "oracledb",
        "mysql2",
      ],
      strictRequires: true,
    },
  },
  ssr: {
    noExternal: true,
  },
});
