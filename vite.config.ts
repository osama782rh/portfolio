import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
    cloudflare()
  ],

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"]
  }
}));