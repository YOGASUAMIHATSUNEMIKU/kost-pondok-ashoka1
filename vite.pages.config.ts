// Static build for GitHub Pages (separate from the Lovable build in vite.config.ts).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: "pages",
  base: process.env.PAGES_BASE ?? "/pixel-harmony-framework/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  build: { outDir: "../dist-pages", emptyOutDir: true },
});
