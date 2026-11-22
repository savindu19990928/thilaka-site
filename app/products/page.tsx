import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { CatalogueBrowser } from "@/components/CatalogueBrowser";
import {
  CatalogueNoticeBanner,
  HealthDisclaimerBanner,
} from "@/components/Notices";
import { PRODUCT_FORMS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Browse Thilaka Ayurveda's 12 traditional Ayurvedic product categories and 5 herbal preparation forms. Catalogue only — visit our shop at No. 38, Main Street, Ruwanwella to purchase.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#FAF7F0] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Editorial Page Header */}
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
            Digital Product Catalogue
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#15231A] sm:text-5xl">
            Ayurvedic Product Categories &amp; Preparations
          </h1>
          <p className="text-base leading-relaxed text-[#435449]">
            Explore the traditional Ayurvedic wellness categories presented by
            Thilaka Ayurveda. Search by focus area or preparation form, inspect
            category guidance, and contact our Ruwanwella shop to confirm
            verified product names, label ingredients, pack sizes, and current
            in-store availability.
          </p>
        </header>

        {/* Required Catalogue-Only Purchase Notice */}
        <CatalogueNoticeBanner />

        {/* Interactive Search, Filter & Category Grid */}
        <CatalogueBrowser />

        {/* Traditional Product Forms Overview (§8.5) */}
        <section
          aria-labelledby="forms-heading"
          className="rounded-3xl border border-[#E3DAC6] bg-white p-6 shadow-xs sm:p-8 space-y-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-[#E3DAC6]/70 pb-5">
            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#845D18]">
                Preparation Traditions
              </p>
              <h2
                id="forms-heading"
                className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl"
              >
                Traditional Ayurvedic Product Forms
              </h2>
            </div>
            <Link
              href="/contact/?subject=Product+Information"
              className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-[#0E4025] hover:text-[#845D18]"
            >
              <MessageSquareText className="h-3.5 w-3.5" aria-hidden="true" />
              Enquire about a specific form
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRODUCT_FORMS.map((form) => (
              <div
                key={form.id}
                className="rounded-2xl border border-[#E3DAC6] bg-[#FAF7F0] p-4 space-y-2"
              >
                <h3 className="font-serif text-xl font-semibold text-[#0E4025]">
                  {form.name}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#845D18]">
                  {form.subtitle}
                </p>
                <p className="text-xs leading-relaxed text-[#435449]">
                  {form.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* General Health Disclaimer */}
        <HealthDisclaimerBanner />
      </div>
    </div>
  );
}
