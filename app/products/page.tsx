import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { CatalogueBrowser } from "@/components/CatalogueBrowser";
import { JsonLd } from "@/components/JsonLd";
import {
  CatalogueNoticeBanner,
  HealthDisclaimerBanner,
} from "@/components/Notices";
import { buildOpenGraph, buildProductsCatalogueGraph } from "@/lib/schema";
import { BUSINESS_INFO, PRODUCT_FORMS } from "@/lib/site-data";

const PRODUCTS_DESC =
  "Browse Thilaka Ayurveda's 12 Ayurvedic product categories and 5 traditional herbal forms. Digital catalogue only; visit our Ruwanwella shop to buy.";

export const metadata: Metadata = {
  title: "Ayurvedic Product Catalogue",
  description: PRODUCTS_DESC,
  alternates: {
    canonical: "/products/",
  },
  openGraph: buildOpenGraph(
    "Ayurvedic Product Catalogue | Thilaka Ayurveda",
    PRODUCTS_DESC,
    "/products/"
  ),
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Product Catalogue | Thilaka Ayurveda",
    description:
      "Browse 12 Ayurvedic product categories and 5 herbal forms at Thilaka Ayurveda in Ruwanwella, Sri Lanka.",
    images: ["/images/og-cover.png"],
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-[#FAF7F0] py-12 sm:py-16">
      <JsonLd data={buildProductsCatalogueGraph()} />
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

        {/* Traditional Product Forms Semantic Comparison Table (§8.5 & AEO) */}
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
                Traditional Ayurvedic Product Forms Compared
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

          <div className="overflow-x-auto rounded-2xl border border-[#E3DAC6]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of the five traditional Ayurvedic preparation forms
                carried at Thilaka Ayurveda
              </caption>
              <thead className="bg-[#0E4025] text-xs uppercase tracking-[0.12em] text-[#FAF7F0]">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-semibold">
                    Preparation Form
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">
                    Traditional Format
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">
                    Plain-Language Summary
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">
                    In-Shop Verification Note
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3DAC6] bg-white">
                {PRODUCT_FORMS.map((form) => (
                  <tr
                    key={form.id}
                    className="align-top transition-colors hover:bg-[#FAF7F0]/70"
                  >
                    <th scope="row" className="px-4 py-4 font-serif text-lg font-semibold text-[#0E4025] whitespace-nowrap">
                      {form.name}
                      <span className="mt-0.5 block font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#845D18]">
                        {form.subtitle}
                      </span>
                    </th>
                    <td className="px-4 py-4 text-xs leading-relaxed text-[#15231A]">
                      {form.formatType}
                    </td>
                    <td className="px-4 py-4 text-xs leading-relaxed text-[#435449]">
                      {form.summary}
                    </td>
                    <td className="px-4 py-4 text-xs leading-relaxed text-[#435449]">
                      {form.shopNote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AEO Step-by-Step Shop Enquiry & Purchase Guide */}
        <section
          aria-labelledby="how-to-buy-heading"
          className="rounded-3xl border border-[#CFE0D4] bg-[#E8F0EA]/60 p-6 sm:p-8 space-y-5"
        >
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#845D18]">
              In-Shop Purchase Guide
            </p>
            <h2
              id="how-to-buy-heading"
              className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl"
            >
              How to Check Availability &amp; Purchase at Thilaka Ayurveda
            </h2>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-2xl border border-[#E3DAC6] bg-white p-4 space-y-1.5">
              <span className="font-serif text-lg font-semibold text-[#845D18]">
                Step 1
              </span>
              <h3 className="text-sm font-semibold text-[#15231A]">
                Browse Categories
              </h3>
              <p className="text-xs leading-relaxed text-[#435449]">
                Search or filter our 12 wellness categories and 5 traditional
                dosage forms online.
              </p>
            </li>
            <li className="rounded-2xl border border-[#E3DAC6] bg-white p-4 space-y-1.5">
              <span className="font-serif text-lg font-semibold text-[#845D18]">
                Step 2
              </span>
              <h3 className="text-sm font-semibold text-[#15231A]">
                Confirm by Phone or Enquiry
              </h3>
              <p className="text-xs leading-relaxed text-[#435449]">
                Call{" "}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-semibold text-[#0E4025] underline"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>{" "}
                or prepare an enquiry to check current counter stock and hours.
              </p>
            </li>
            <li className="rounded-2xl border border-[#E3DAC6] bg-white p-4 space-y-1.5">
              <span className="font-serif text-lg font-semibold text-[#845D18]">
                Step 3
              </span>
              <h3 className="text-sm font-semibold text-[#15231A]">
                Inspect Labels in Person
              </h3>
              <p className="text-xs leading-relaxed text-[#435449]">
                Visit {BUSINESS_INFO.shortAddress} to review verified packaging,
                ingredients, pack sizes, and label directions.
              </p>
            </li>
            <li className="rounded-2xl border border-[#E3DAC6] bg-white p-4 space-y-1.5">
              <span className="font-serif text-lg font-semibold text-[#845D18]">
                Step 4
              </span>
              <h3 className="text-sm font-semibold text-[#15231A]">
                Purchase at the Shop
              </h3>
              <p className="text-xs leading-relaxed text-[#435449]">
                Complete your purchase directly at our Ruwanwella shop; online
                orders and shipping are not available.
              </p>
            </li>
          </ol>
        </section>

        {/* General Health Disclaimer */}
        <HealthDisclaimerBanner />
      </div>
    </div>
  );
}
