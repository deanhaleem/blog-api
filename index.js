try {
  console.log("Start rollup");
  const rollup = await import("./dist/bundle-rollup.js");
  await rollup.handler();
} catch (e) {
  console.log("error with rollup", e);
}

try {
  console.log("Start esbuild");
  const esbuild = await import("./dist/bundle-esb.cjs");
  await esbuild.handler();
} catch (e) {
  console.log("error with esbuild", e);
}

try {
  console.log("Start vite");
  const vite = await import("./dist/bundle.js");
  vite.handler();
} catch (e) {
  console.log("error with vite", e);
}

export {};
