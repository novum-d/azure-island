import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  root: "./src",
  build: {
    // root (= ./src) から見た相対パスで指定
    outDir: "../public",
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    svgr(),
  ],
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `import { jsx } from "@emotion/react"`,
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
