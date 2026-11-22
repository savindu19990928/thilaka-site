import { Suspense } from "react";
import type { Metadata } from "next";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { ContactEnquiryForm } from "@/components/ContactEnquiryForm";
import {
  CatalogueNoticeBanner,
  HealthDisclaimerBanner,
} from "@/components/Notices";
import { BUSINESS_INFO } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact & Visit Us",
  description:
    "Visit Thilaka Ayurveda at No. 38, Main Street, Ruwanwella, Sri Lanka or call +94 36 226 6693 to ask about product information and current availability.",
};

function FormFallback() {
  return (
    <div className="rounded-3xl border border-[#E3DAC6] bg-white p-8 shadow-sm space-y-4">
      <div className="h-5 w-40 rounded bg-[#F2ECE0]" />
      <div className="h-8 w-64 rounded bg-[#F2ECE0]" />
      <div className="h-11 w-full rounded-xl bg-[#FAF7F0]" />
      <div className="h-11 w-full rounded-xl bg-[#FAF7F0]" />
      <div className="h-28 w-full rounded-xl bg-[#FAF7F0]" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F0] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
            Ruwanwella Shop &amp; Enquiries
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#15231A] sm:text-5xl">
            Visit or Contact Thilaka Ayurveda
          </h1>
          <p className="text-base leading-relaxed text-[#435449]">
            Have a question about our products or want to check availability?
            Contact Thilaka Ayurveda or visit our shop at{" "}
            <strong className="font-semibold text-[#15231A]">
              {BUSINESS_INFO.address}
            </strong>
            . Please contact us before visiting to confirm current opening hours
            and product availability.
          </p>
        </header>

        <CatalogueNoticeBanner />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Shop Contact Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-[#DEC89A] bg-white p-6 shadow-sm sm:p-7 space-y-6">
              <div className="space-y-1 border-b border-[#E3DAC6] pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#845D18]">
                  Physical Location
                </p>
                <h2 className="font-serif text-2xl font-semibold text-[#15231A]">
                  {BUSINESS_INFO.name}
                </h2>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F0EA] text-[#0E4025]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5F7065]">
                      Shop Address
                    </p>
                    <p className="mt-0.5 font-medium text-[#15231A]">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F0EA] text-[#0E4025]">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5F7065]">
                      Telephone
                    </p>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="mt-0.5 inline-block font-semibold text-base text-[#0E4025] hover:underline"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FDF7EA] border border-[#DEC89A] text-[#845D18]">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5F7065]">
                      Opening Hours
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#435449]">
                      {BUSINESS_INFO.hoursAdvisory}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#0E4025] px-4 py-2.5 text-xs font-semibold text-[#FAF7F0] hover:bg-[#155232]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Shop
                </a>
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-[#0E4025]/30 bg-[#FAF7F0] px-4 py-2.5 text-xs font-semibold text-[#0E4025] hover:bg-[#E8F0EA]"
                >
                  Directions
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Embedded Ruwanwella Map */}
            <div className="overflow-hidden rounded-3xl border border-[#E3DAC6] bg-white p-2 shadow-xs">
              <iframe
                title="Google Map showing No. 38, Main Street, Ruwanwella, Sri Lanka"
                src={BUSINESS_INFO.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full rounded-2xl border-0"
              />
            </div>
          </div>

          {/* Right: Enquiry Form wrapped in Suspense for Static Export */}
          <div className="lg:col-span-7">
            <Suspense fallback={<FormFallback />}>
              <ContactEnquiryForm />
            </Suspense>
          </div>
        </div>

        <HealthDisclaimerBanner />
      </div>
    </div>
  );
}
