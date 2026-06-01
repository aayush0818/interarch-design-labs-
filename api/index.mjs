// Vercel serverless function: forwards every incoming Web Request to the
// TanStack Start SSR handler produced by `vite build` at dist/server/server.js.
import handler from "../dist/server/server.js";

export const config = { runtime: "nodejs20.x" };

export default async function vercelHandler(request) {
  return handler.fetch(request, {}, {});
}
