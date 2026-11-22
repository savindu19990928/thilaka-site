import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "Claude-SearchBot",
          "Claude-User",
          "meta-webindexer",
          "facebookexternalhit",
          "GPTBot",
          "ClaudeBot",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.thilakaayurveda.lk/sitemap.xml",
    host: "https://www.thilakaayurveda.lk",
  };
}
