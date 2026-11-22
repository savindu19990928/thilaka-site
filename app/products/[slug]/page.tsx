import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";
import { CategoryIcon } from "@/components/CategoryIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import {
  CatalogueNoticeBanner,
  HealthDisclaimerBanner,
} from "@/components/Notices";
import { buildCategoryPageGraph, buildOpenGraph } from "@/lib/schema";
import {
  BUSINESS_INFO,
  PRODUCT_CATEGORIES,
  PRODUCT_FORMS,
  getCategoryBySlug,
  getCategoryFaqs,
} from "@/lib/site-data";

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  const title = `${category.name} — Ayurvedic Products`;
  const description = `${category.shortDescription} Browse traditional forms at Thilaka Ayurveda, Ruwanwella. Call ${BUSINESS_INFO.phoneDisplay} or visit our shop.`;
  const path = `/products/${category.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: buildOpenGraph(
      `${title} | Thilaka Ayurveda`,
      description,
      path
    ),
    twitter: {
      card: "summary_large_image",
      title: `${title} | Thilaka Ayurveda`,
      description,
      images: ["/images/og-cover.png"],
    },
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const relatedCategories = PRODUCT_CATEGORIES.filter((item) =>
    category.relatedSlugs.includes(item.slug)
  );

  const matchingForms = PRODUCT_FORMS.filter((form) =>
    category.recommendedForms.includes(form.name)
  );

  const categoryFaqs = getCategoryFaqs(category);

  return (
    <div className="bg-[#FAF7F0] py-10 sm:py-14">
      <JsonLd data={buildCategoryPageGraph(category)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs text-[#5F7065]"
        >
          <Link href="/" className="hover:text-[#0E4025] transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/products/"
            className="hover:text-[#0E4025] transition-colors"
          >
            Products
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-[#0E4025]">{category.name}</span>
        </nav>

        {/* Main Detail Card */}
        <section className="rounded-3xl border border-[#DEC89A] bg-white p-6 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-serif text-xl font-semibold text-[#845D18]">
                  Category {category.index}
                </span>
                <span className="rounded-full bg-[#E8F0EA] px-3.5 py-1 text-xs font-semibold text-[#0E4025]">
                  {category.group}
                </span>
                <span className="rounded-full border border-[#DEC89A] bg-[#FDF7EA] px-3.5 py-1 text-xs font-semibold text-[#845D18]">
                  Availability: {category.availabilityLabel}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <span className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0E4025] text-[#FAF7F0] mt-1">
                  <CategoryIcon name={category.iconName} className="h-7 w-7" />
                </span>
                <div className="space-y-3">
                  <h1 className="font-serif text-4xl font-semibold leading-tight text-[#15231A] sm:text-5xl">
                    {category.name}
                  </h1>
                  <p className="text-lg font-medium text-[#0E4025]">
                    {category.shortDescription}
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-[#435449]">
                {category.overview}
              </p>

              {/* Semantic Category Quick Facts */}
              <div className="rounded-2xl border border-[#E3DAC6] bg-[#FAF7F0] p-5">
                <h2 className="font-serif text-xl font-semibold text-[#15231A] mb-3">
                  Category Quick Facts
                </h2>
                <dl className="grid gap-3 text-xs sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.12em] text-[#5F7065]">
                      Wellness Focus Area
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#15231A]">
                      {category.group}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.12em] text-[#5F7065]">
                      Traditional Forms
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#15231A]">
                      {category.recommendedForms.join(", ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.12em] text-[#5F7065]">
                      Availability Status
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#845D18]">
                      {category.availabilityLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.12em] text-[#5F7065]">
                      Purchase Method
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#15231A]">
                      In-person purchase at {BUSINESS_INFO.shortAddress}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Verified Guidance Points */}
              <div className="space-y-3 pt-2">
                <h2 className="font-serif text-2xl font-semibold text-[#15231A]">
                  Important Customer Guidance
                </h2>
                <ul className="space-y-2.5">
                  {category.guidancePoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#435449]"
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-[#0E4025] mt-1"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar: Allowed Actions ONLY (§8.6) */}
            <aside className="lg:col-span-4 rounded-2xl border border-[#E3DAC6] bg-[#FAF7F0] p-6 space-y-5">
              <div className="space-y-1.5 border-b border-[#E3DAC6] pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#845D18]">
                  Inquire or Visit
                </p>
                <h2 className="font-serif text-2xl font-semibold text-[#15231A]">
                  Ask About {category.name}
                </h2>
                <p className="text-xs leading-relaxed text-[#5F7065]">
                  Individual product names, label ingredients, pack sizes, and
                  stock status are confirmed directly by our Ruwanwella shop.
                </p>
              </div>

              <div className="space-y-2.5">
                <Link
                  href={`/contact/?subject=Product+Availability&topic=${encodeURIComponent(
                    category.name
                  )}`}
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0E4025] px-5 py-2.5 text-sm font-semibold text-[#FAF7F0] transition-colors hover:bg-[#155232]"
                >
                  <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                  Ask About This Category
                </Link>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#0E4025]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#0E4025] transition-colors hover:bg-[#E8F0EA]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#DEC89A] bg-[#FDF7EA] px-5 py-2.5 text-xs font-semibold text-[#845D18] transition-colors hover:bg-[#F2ECE0]"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Directions to Ruwanwella Shop
                </a>
              </div>

              <div className="border-t border-[#E3DAC6] pt-4 text-xs leading-relaxed text-[#435449]">
                <strong className="text-[#15231A]">Shop Address:</strong>{" "}
                {BUSINESS_INFO.address}
              </div>
            </aside>
          </div>
        </section>

        {/* Applicable Traditional Preparation Forms */}
        <section className="space-y-5">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#845D18]">
              Traditional Formats
            </p>
            <h2 className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl">
              Traditional Forms to Enquire About
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {matchingForms.map((form) => (
              <div
                key={form.id}
                className="rounded-2xl border border-[#E3DAC6] bg-white p-5 space-y-2 shadow-2xs"
              >
                <h3 className="font-serif text-xl font-semibold text-[#0E4025]">
                  {form.name}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#845D18]">
                  {form.subtitle}
                </p>
                <p className="text-xs leading-relaxed text-[#435449]">
                  {form.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Category-Specific FAQs (Matches FAQPage JSON-LD 1:1) */}
        <section aria-labelledby="cat-faq-heading" className="space-y-4">
          <h2
            id="cat-faq-heading"
            className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl"
          >
            Quick Answers About {category.name}
          </h2>
          <FaqAccordion items={categoryFaqs} />
        </section>

        {/* Required Notices */}
        <div className="space-y-4">
          <CatalogueNoticeBanner compact />
          <HealthDisclaimerBanner />
        </div>

        {/* Related Categories */}
        <section className="space-y-5 border-t border-[#E3DAC6] pt-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl">
              Related Product Categories
            </h2>
            <Link
              href="/products/"
              className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-[#0E4025] hover:text-[#845D18]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Back to Full Catalogue
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {relatedCategories.map((rel) => (
              <Link
                key={rel.slug}
                href={`/products/${rel.slug}/`}
                className="group rounded-2xl border border-[#E3DAC6] bg-white p-5 shadow-2xs transition-all hover:border-[#A67C2E] hover:shadow-sm"
              >
                <div className="flex items-center justify-between text-xs text-[#845D18] font-semibold mb-2">
                  <span>{rel.index}</span>
                  <span>{rel.group}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#15231A] group-hover:text-[#0E4025]">
                  {rel.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#435449]">
                  {rel.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0E4025]">
                  View Details
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
