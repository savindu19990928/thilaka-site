import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Thilaka Ayurveda",
    short_name: "Thilaka Ayurveda",
    description:
      "Digital product catalogue and shop guide for Thilaka Ayurveda at No. 38, Main Street, Ruwanwella, Sri Lanka (Est. 1982).",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F0",
    theme_color: "#0E4025",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
