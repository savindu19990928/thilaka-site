import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import {
  CatalogueNoticeBanner,
  HealthDisclaimerBanner,
} from "@/components/Notices";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { buildOpenGraph, buildQualityPageGraph } from "@/lib/schema";
import {
  BUSINESS_INFO,
  FAQS,
  QUALITY_PILLARS,
  SITE_LAST_UPDATED_LABEL,
} from "@/lib/site-data";

const QUALITY_DESC =
  "Review Thilaka Ayurveda's transparent ingredient communication, verified label practices, and 10 answers to frequently asked shop and product questions.";

export const metadata: Metadata = {
  title: "Quality, Herbal Sourcing & FAQs",
  description: QUALITY_DESC,
  alternates: {
    canonical: "/quality/",
  },
  openGraph: buildOpenGraph(
    "Quality, Herbal Sourcing & FAQs | Thilaka Ayurveda",
    QUALITY_DESC,
    "/quality/"
  ),
  twitter: {
    card: "summary_large_image",
    title: "Quality, Herbal Sourcing & FAQs | Thilaka Ayurveda",
    description:
      "Transparent Ayurvedic ingredient practices and answers to 10 common questions about visiting Thilaka Ayurveda.",
    images: ["/images/og-cover.png"],
  },
};

export default function QualityAndFaqsPage() {
  return (
    <div className="bg-[#FAF7F0] py-12 sm:py-16">
      <JsonLd data={buildQualityPageGraph()} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Intro */}
        <header className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
            <span>Transparency &amp; Guidance</span>
            <span className="text-[#DEC89A]" aria-hidden="true">
              ·
            </span>
            <span className="text-[#5F7065]">
              Information last reviewed: {SITE_LAST_UPDATED_LABEL}
            </span>
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#15231A] sm:text-5xl">
            Quality, Ingredients &amp; Frequently Asked Questions
          </h1>
          <p className="text-base leading-relaxed text-[#435449]">
            We believe customers should be able to understand the products they
            choose. Thilaka Ayurveda aims to provide clear information about
            available ingredients, preparation methods, and product details.
            Contact us for product-specific label information and supporting
            details.
          </p>
        </header>

        {/* Quality & Transparency Pillars (§11) */}
        <section aria-labelledby="quality-heading" className="space-y-6">
          <h2
            id="quality-heading"
            className="font-serif text-3xl font-semibold text-[#15231A]"
          >
            Our Approach to Ingredients &amp; Quality Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {QUALITY_PILLARS.map((pillar) => (
              <article
                key={pillar.index}
                className="rounded-3xl border border-[#E3DAC6] bg-white p-6 shadow-xs space-y-4 sm:p-7"
              >
                <div className="flex items-center justify-between border-b border-[#E3DAC6]/70 pb-3">
                  <span className="font-serif text-xl font-semibold text-[#845D18]">
                    {pillar.index}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0E4025]">
                    Product Transparency
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#15231A]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#435449]">
                  {pillar.summary}
                </p>
                <div className="flex items-start gap-2.5 rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] p-3.5 text-xs leading-relaxed text-[#435449]">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#0E4025] mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{pillar.verificationNote}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <HealthDisclaimerBanner />

        <OrnamentDivider />

        {/* FAQs Section (§9.10) */}
        <section id="faqs" aria-labelledby="faq-heading" className="space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
                Common Questions
              </p>
              <h2
                id="faq-heading"
                className="font-serif text-3xl font-semibold text-[#15231A] sm:text-4xl"
              >
                Frequently Asked Questions
              </h2>
            </div>
            <Link
              href="/contact/"
              className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-[#0E4025] hover:text-[#845D18]"
            >
              Ask another question
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <FaqAccordion items={FAQS} />
        </section>

        <CatalogueNoticeBanner />

        <div className="rounded-3xl bg-[#0E4025] p-7 text-[#FAF7F0] sm:p-9 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Confirm Product Details Directly at Our Shop
            </h2>
            <p className="text-sm text-[#CFE0D4]">
              Call {BUSINESS_INFO.phoneDisplay} or visit{" "}
              {BUSINESS_INFO.address} to inspect packaging, verified ingredient
              labels, and current availability.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-[#FAF7F0] px-6 py-2.5 text-sm font-semibold text-[#0E4025] hover:bg-[#E8F0EA]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
