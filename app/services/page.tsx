import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquareText, Phone } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import {
  CatalogueNoticeBanner,
  HealthDisclaimerBanner,
} from "@/components/Notices";
import { buildOpenGraph, buildServicesPageGraph } from "@/lib/schema";
import { BUSINESS_INFO, SERVICES } from "@/lib/site-data";

const SERVICES_DESC =
  "Explore in-shop Ayurvedic retail, availability enquiries, personalized herbal preparations, and seasonal raw herbs at Thilaka Ayurveda, Ruwanwella.";

export const metadata: Metadata = {
  title: "Ayurvedic Shop Services in Ruwanwella",
  description: SERVICES_DESC,
  alternates: {
    canonical: "/services/",
  },
  openGraph: buildOpenGraph(
    "Ayurvedic Shop Services in Ruwanwella | Thilaka Ayurveda",
    SERVICES_DESC,
    "/services/"
  ),
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Shop Services in Ruwanwella | Thilaka Ayurveda",
    description:
      "Traditional Ayurvedic products, counter guidance, and seasonal raw botanicals at No. 38, Main Street, Ruwanwella.",
    images: ["/images/og-cover.png"],
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF7F0] py-12 sm:py-16">
      <JsonLd data={buildServicesPageGraph()} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
            Customer Support &amp; Offerings
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#15231A] sm:text-5xl">
            Services at Thilaka Ayurveda
          </h1>
          <p className="text-base leading-relaxed text-[#435449]">
            Thilaka Ayurveda focuses on traditional Ayurvedic products and
            in-person customer assistance. Contact the shop at{" "}
            {BUSINESS_INFO.address} or call {BUSINESS_INFO.phoneDisplay} to ask
            about available products, herbal ingredients, and any personalized
            preparation services currently offered.
          </p>
        </header>

        <CatalogueNoticeBanner />

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-3xl border border-[#E3DAC6] bg-white p-7 shadow-xs space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E3DAC6]/70 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#845D18]">
                    {service.subtitle}
                  </span>
                  <span className="font-serif text-xl font-semibold text-[#0E4025]">
                    {service.index}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl">
                  {service.title}
                </h2>
                <p className="text-sm leading-relaxed text-[#435449]">
                  {service.description}
                </p>
              </div>

              <div className="space-y-4">
                <p className="rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] p-3.5 text-xs leading-relaxed text-[#5F7065]">
                  {service.guidanceNote}
                </p>
                <Link
                  href={`/contact/?subject=General+Question&topic=${encodeURIComponent(
                    service.title
                  )}`}
                  className="inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-[#0E4025] hover:text-[#845D18]"
                >
                  <MessageSquareText className="h-3.5 w-3.5" aria-hidden="true" />
                  Enquire About This Service
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <HealthDisclaimerBanner />

        <div className="rounded-3xl bg-[#0E4025] p-7 text-[#FAF7F0] sm:p-9 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Have Questions Before Visiting?
            </h2>
            <p className="text-sm text-[#CFE0D4]">
              Online consultations and online delivery are not offered. Call our
              Ruwanwella counter directly to confirm product availability or
              service details.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FAF7F0] px-6 py-2.5 text-sm font-semibold text-[#0E4025] hover:bg-[#E8F0EA]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
            <Link
              href="/products/"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF63]/60 px-6 py-2.5 text-sm font-semibold text-[#FAF7F0] hover:bg-[#155232]"
            >
              Browse Catalogue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
