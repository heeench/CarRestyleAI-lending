import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [sitemap()],
  site: "https://heeench.github.io",
  base: "/CarRestyleAI-lending"
});
