# Blog API

Trying to get vite's bundle to not require drivers I'm not using.

I think rollup just makes it hard. Seems the common js plugin is what hoists `require` calls to the top. I tried patching the replace logic [here](https://github.com/rollup/plugins/blob/8550c4b1925b246adbd3af48ed0e5f74f822c951/packages/commonjs/src/generate-imports.js#L177), and that seemed to work after I included `strictRequires` as well. I think that's needed due to some circular dependencies.

## Run

- Clone
- `npm i`
  - This will patch the rollup plugin
- `node --no-warnings=ExperimentalWarning --loader ts-node/esm index.ts`

Should see `esbuild` works. `rollup` works after the patch, so maybe something similar would be needed for `vite`. This is obviously fixing it on the bundler side. I'm sure Knex could do something differently as well.
