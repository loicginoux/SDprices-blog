import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Decap/Netlify CMS configuration
import NetlifyCMS from "astro-netlify-cms";
import config from "./cms.config.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), NetlifyCMS({ config: config }), sitemap()],
});
