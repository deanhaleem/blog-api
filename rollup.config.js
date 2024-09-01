import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/server.ts",
  output: {
    entryFileNames: "bundle-rollup.js",
    dir: "dist",
  },
  plugins: [
    json(),
    commonjs({
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
    }),
    resolve(),
  ],
};
