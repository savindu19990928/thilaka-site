import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { buildGlobalGraph } from "@/lib/schema";
import { BUSINESS_INFO, SITE_URL } from "@/lib/site-data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0E4025",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thilaka Ayurveda | Ayurvedic Products in Ruwanwella, Sri Lanka",
    template: "%s | Thilaka Ayurveda",
  },
  description:
    "Discover Thilaka Ayurveda in Ruwanwella, Sri Lanka. Explore 12 traditional Ayurvedic product categories, 5 herbal forms, and ways to call or visit our shop.",
  keywords: [
    "Thilaka Ayurveda",
    "Ayurvedic products in Ruwanwella",
    "Ayurvedic medicine shop in Ruwanwella",
    "Herbal products in Sri Lanka",
    "Traditional Ayurvedic preparations",
    "Ayurvedic herbal oils",
    "Churna, Vati and Gutika",
    "Arishta and Asava",
  ],
  authors: [{ name: BUSINESS_INFO.name, url: `${SITE_URL}/` }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  category: "Health & Wellness",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/`,
    siteName: BUSINESS_INFO.name,
    title: "Thilaka Ayurveda | Ayurvedic Products in Ruwanwella, Sri Lanka",
    description:
      "Traditional Ayurvedic knowledge. Personal care. Natural wellness. Explore our product catalogue and visit our shop at No. 38, Main Street, Ruwanwella.",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Thilaka Ayurveda — No. 38, Main Street, Ruwanwella, Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thilaka Ayurveda | Ayurvedic Products in Ruwanwella, Sri Lanka",
    description:
      "Explore 12 traditional Ayurvedic product categories and visit our physical shop at No. 38, Main Street, Ruwanwella, Sri Lanka.",
    images: ["/images/og-cover.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="ai-catalog" href="/.well-known/ai-catalog.json" />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms.txt"
          title="Thilaka Ayurveda — LLMs Summary"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms-full.txt"
          title="Thilaka Ayurveda — Full Knowledge Reference"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/catalogue.md"
          title="Thilaka Ayurveda — Product Catalogue (Markdown)"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF7F0] text-[#15231A] selection:bg-[#0E4025] selection:text-[#FAF7F0]">
        <JsonLd data={buildGlobalGraph()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#0E4025] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[#FAF7F0] focus:shadow-lg"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
