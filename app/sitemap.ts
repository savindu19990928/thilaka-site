import type { MetadataRoute } from "next";
import { PRODUCT_CATEGORIES } from "@/lib/site-data";

export const dynamic = "force-static";

const BASE_URL = "https://www.thilakaayurveda.lk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
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
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : path === "/products/" ? 0.9 : 0.8,
  }));
}
