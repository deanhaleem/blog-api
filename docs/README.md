# Blog API

Trying to get vite's bundle to not require drivers I'm not using.

Main issue with vite/rollup was the `common js` plugin. But seems like passing into the `ignore` array solves things.

## Run

- Clone
- `npm i`
- `npm run build`
- `node --no-warnings=ExperimentalWarning --loader ts-node/esm index.ts`
