import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BUSINESS_INFO } from "@/lib/site-data";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thilakaayurveda.lk"),
  title: {
    default: "Thilaka Ayurveda | Ayurvedic Products in Ruwanwella, Sri Lanka",
    template: "%s | Thilaka Ayurveda",
  },
  description:
    "Discover Thilaka Ayurveda in Ruwanwella, Sri Lanka. Explore traditional Ayurvedic product categories, herbal preparations and ways to contact or visit the shop.",
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
  openGraph: {
    type: "website",
    locale: "en_LK",
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
      "Explore traditional Ayurvedic product categories and visit our physical shop in Ruwanwella, Sri Lanka.",
    images: ["/images/og-cover.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F0] text-[#15231A] selection:bg-[#0E4025] selection:text-[#FAF7F0]">
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
