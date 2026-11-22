import type { MetadataRoute } from "next";
import {
  PRODUCT_CATEGORIES,
  SITE_LAST_UPDATED_ISO,
  SITE_URL,
} from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/products/",
    "/about/",
    "/services/",
    "/quality/",
    "/contact/",
  ];

  const categoryPages = PRODUCT_CATEGORIES.map(
    (category) => `/products/${category.slug}/`
  );

  return [...staticPages, ...categoryPages].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: SITE_LAST_UPDATED_ISO,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : path === "/products/" ? 0.9 : 0.8,
  }));
}
