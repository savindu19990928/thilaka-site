import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CatalogueNoticeBanner } from "@/components/Notices";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { buildAboutPageGraph, buildOpenGraph } from "@/lib/schema";
import { BUSINESS_INFO, CORE_VALUES } from "@/lib/site-data";

const ABOUT_DESC =
  "Learn about Thilaka Ayurveda in Ruwanwella, Sri Lanka—a family-operated Ayurvedic shop established in 1982 according to its official website.";

export const metadata: Metadata = {
  title: "About Thilaka Ayurveda (Est. 1982)",
  description: ABOUT_DESC,
  alternates: {
    canonical: "/about/",
  },
  openGraph: buildOpenGraph(
    "About Thilaka Ayurveda (Est. 1982) | Thilaka Ayurveda",
    ABOUT_DESC,
    "/about/"
  ),
  twitter: {
    card: "summary_large_image",
    title: "About Thilaka Ayurveda (Est. 1982) | Thilaka Ayurveda",
    description:
      "Family-operated traditional Ayurvedic medicine shop in Ruwanwella, Sri Lanka (Est. 1982).",
    images: ["/images/og-cover.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F0] py-12 sm:py-16">
      <JsonLd data={buildAboutPageGraph()} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Intro */}
        <section className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
              Heritage &amp; Philosophy · Est. {BUSINESS_INFO.establishedYear}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[#15231A] sm:text-5xl">
              About Thilaka Ayurveda
            </h1>
            <p className="text-base leading-relaxed text-[#435449] sm:text-lg">
              Thilaka Ayurveda is a traditional Ayurvedic medicine business
              located in Ruwanwella, Sri Lanka. The company&apos;s existing
              website states that the business was established in 1982 and
              describes it as a family-operated business guided by traditional
              Ayurvedic knowledge.
            </p>
            <p className="text-base leading-relaxed text-[#435449]">
              The business presents its work around herbal products, Ayurvedic
              preparations and personal customer care. Its aim is to make its
              range of traditional products accessible to customers while
              maintaining respect for Ayurvedic practices and knowledge.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products/"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-6 py-2.5 text-sm font-semibold text-[#FAF7F0] hover:bg-[#155232]"
              >
                Explore Product Catalogue
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0E4025]/30 bg-white px-6 py-2.5 text-sm font-semibold text-[#0E4025] hover:bg-[#E8F0EA]"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Visit Ruwanwella Shop
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#DEC89A] bg-white p-3 shadow-sm">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-[#FAF7F0]">
                <Image
                  src="/images/heritage-botanical-plate.png"
                  alt="Illustrative botanical herbarium artwork showing sacred lotus, gotu kola, neem leaves, and Ceylon cinnamon flower"
                  width={960}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2.5 px-2 pb-1 text-center text-[11px] text-[#5F7065]">
                Illustrative botanical study of traditional medicinal flora
              </p>
            </div>
          </div>
        </section>

        {/* Verified Business Facts Summary (Entity Clarity for Search & AI) */}
        <section
          aria-labelledby="business-profile-heading"
          className="rounded-3xl border border-[#E3DAC6] bg-white p-6 shadow-xs sm:p-8"
        >
          <h2
            id="business-profile-heading"
            className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl mb-5"
          >
            Verified Business Profile
          </h2>
          <dl className="grid gap-5 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065]">
                Business Name
              </dt>
              <dd className="mt-1 font-medium text-[#15231A]">
                {BUSINESS_INFO.name}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065]">
                Business Type
              </dt>
              <dd className="mt-1 font-medium text-[#15231A]">
                Traditional Ayurvedic medicine shop &amp; herbal retailer
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065]">
                Stated Establishment Year
              </dt>
              <dd className="mt-1 font-medium text-[#0E4025]">
                {BUSINESS_INFO.establishedYear} (per official website)
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065]">
                Physical Address
              </dt>
              <dd className="mt-1 font-medium text-[#15231A]">
                {BUSINESS_INFO.address}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065]">
                Telephone
              </dt>
              <dd className="mt-1 font-medium">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-[#0E4025] hover:underline"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065]">
                Purchase Model
              </dt>
              <dd className="mt-1 font-medium text-[#845D18]">
                Digital catalogue only · Purchases made at shop
              </dd>
            </div>
          </dl>
        </section>

        <OrnamentDivider />

        {/* Our Story & Mission */}
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#E3DAC6] bg-white p-7 shadow-xs space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#845D18]">
              Since 1982
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#15231A]">
              Our Story
            </h2>
            <p className="text-sm leading-relaxed text-[#435449]">
              The official Thilaka Ayurveda website describes Thilaka Ayurveda as
              a family business that began in 1982. Over the years, the
              business has continued to serve customers in Ruwanwella and beyond
              through traditional Ayurvedic products, classical herbal
              preparations, and personal customer attention at{" "}
              {BUSINESS_INFO.address}.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D4AF63]/40 bg-[#0E4025] p-7 text-[#FAF7F0] shadow-xs space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF63]">
              Purpose &amp; Commitment
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#FAF7F0]">
              Our Mission
            </h2>
            <p className="text-sm leading-relaxed text-[#CFE0D4]">
              To serve customers with care by offering traditional Ayurvedic
              products and sharing clear, responsible information about the
              products available at Thilaka Ayurveda—always encouraging accurate
              label review and qualified healthcare guidance where needed.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
              Guiding Standards
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#15231A] sm:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="rounded-2xl border border-[#E3DAC6] bg-white p-5 shadow-2xs space-y-2.5"
              >
                <span className="font-serif text-base font-semibold text-[#845D18]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#0E4025]">
                  {val.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#435449]">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CatalogueNoticeBanner />

        {/* Call or Visit CTA */}
        <section className="rounded-3xl border border-[#E3DAC6] bg-white p-7 sm:p-9 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <h2 className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl">
              Visit Our Ruwanwella Shop in Person
            </h2>
            <p className="text-sm text-[#435449]">
              {BUSINESS_INFO.address} · Please call before travelling to confirm
              current opening hours and stock availability.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-6 py-2.5 text-sm font-semibold text-[#FAF7F0] hover:bg-[#155232]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
            <Link
              href="/contact/"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0E4025]/30 bg-[#FAF7F0] px-6 py-2.5 text-sm font-semibold text-[#0E4025] hover:bg-[#E8F0EA]"
            >
              Contact &amp; Directions
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
