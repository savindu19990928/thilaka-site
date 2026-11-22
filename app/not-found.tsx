import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { BUSINESS_INFO } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <div className="bg-[#FAF7F0] py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center space-y-6">
        <div className="flex justify-center">
          <BrandLogo variant="light-surface" size="lg" asLink={false} showText={false} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
          Page Not Found
        </p>
        <h1 className="font-serif text-4xl font-semibold text-[#15231A] sm:text-5xl">
          We Could Not Locate That Page
        </h1>
        <p className="text-base leading-relaxed text-[#435449]">
          The page you requested may have moved or is not part of the Thilaka
          Ayurveda product catalogue. Explore our Ayurvedic product categories
          or return to the home page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-6 py-2.5 text-sm font-semibold text-[#FAF7F0] hover:bg-[#155232]"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Return Home
          </Link>
          <Link
            href="/products/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0E4025]/30 bg-white px-6 py-2.5 text-sm font-semibold text-[#0E4025] hover:bg-[#E8F0EA]"
          >
            Product Catalogue
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#DEC89A] bg-[#FDF7EA] px-5 py-2.5 text-sm font-semibold text-[#845D18] hover:bg-[#F2ECE0]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
