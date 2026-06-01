import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Disable Cloudflare adapter so the build produces a portable Node SSR bundle
// that we can run as a Vercel serverless function (see api/server.mjs).
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
});
