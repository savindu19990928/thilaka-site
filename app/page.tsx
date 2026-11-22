import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";
import { CategoryIcon } from "@/components/CategoryIcon";
import { JsonLd } from "@/components/JsonLd";
import {
  CatalogueNoticeBanner,
  HealthDisclaimerBanner,
} from "@/components/Notices";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { PreparationFormsShowcase } from "@/components/PreparationFormsShowcase";
import { Reveal } from "@/components/Reveal";
import { buildHomePageGraph, buildOpenGraph } from "@/lib/schema";
import {
  BUSINESS_INFO,
  CORE_VALUES,
  PRODUCT_CATEGORIES,
  SERVICES,
} from "@/lib/site-data";

const HOME_TITLE =
  "Thilaka Ayurveda | Ayurvedic Products in Ruwanwella, Sri Lanka";
const HOME_DESC =
  "Discover Thilaka Ayurveda in Ruwanwella, Sri Lanka. Browse 12 Ayurvedic product categories and 5 herbal forms, and visit No. 38, Main Street.";

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESC,
  alternates: {
    canonical: "/",
  },
  openGraph: buildOpenGraph(HOME_TITLE, HOME_DESC, "/"),
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description:
      "Browse 12 Ayurvedic product categories and 5 herbal forms, and visit Thilaka Ayurveda at No. 38, Main Street, Ruwanwella.",
    images: ["/images/og-cover.png"],
  },
};

export default function HomePage() {
  const featuredCategories = PRODUCT_CATEGORIES.filter((cat) => cat.featured);

  return (
    <>
      <JsonLd data={buildHomePageGraph()} />
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#E3DAC6] bg-[#FAF7F0] paper-grain botanical-glow">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Hero Editorial Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[#DEC89A] bg-[#FDF7EA] px-4 py-1.5 text-xs font-semibold text-[#845D18]">
                <span>{BUSINESS_INFO.shortAddress}, Sri Lanka</span>
                <span className="text-[#A67C2E]" aria-hidden="true">
                  ·
                </span>
                <span>Est. {BUSINESS_INFO.establishedYear}</span>
              </div>

              <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#15231A] sm:text-5xl lg:text-6xl">
                Traditional Ayurvedic Care, Rooted in Heritage
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[#435449] sm:text-lg">
                Discover Thilaka Ayurveda, a traditional Ayurvedic medicine
                business in Ruwanwella, Sri Lanka. Explore our range of herbal
                products and Ayurvedic preparations, backed by a commitment to
                traditional knowledge and personal customer care.
              </p>

              {/* Allowed Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/products/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0E4025] px-6 py-3 text-sm font-semibold text-[#FAF7F0] shadow-sm transition-colors hover:bg-[#155232]"
                >
                  Explore Our Products
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0E4025]/30 bg-white px-6 py-3 text-sm font-semibold text-[#0E4025] transition-colors hover:border-[#0E4025] hover:bg-[#E8F0EA]"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Visit Our Shop
                </Link>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#DEC89A] bg-[#FDF7EA] px-5 py-3 text-sm font-semibold text-[#845D18] transition-colors hover:bg-[#F2ECE0]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              {/* Compact Catalogue-Only Notice */}
              <div className="max-w-xl rounded-2xl border border-[#DEC89A]/80 bg-white/85 px-4 py-3.5 text-xs leading-relaxed text-[#435449] shadow-2xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#0E4025]">
                  <Store className="h-3.5 w-3.5 text-[#845D18]" aria-hidden="true" />
                  Catalogue &amp; Information Only:
                </span>{" "}
                Online ordering and payments are not available. Visit our
                physical shop at{" "}
                <strong className="font-semibold text-[#15231A]">
                  {BUSINESS_INFO.address}
                </strong>{" "}
                to purchase products.
              </div>
            </div>

            {/* Hero Architectural Botanical Image + Floating Official Emblem Seal */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-t-[180px] rounded-b-3xl border border-[#DEC89A] bg-white p-3 shadow-lg">
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-[170px] rounded-b-2xl bg-[#0E4025]">
                    <Image
                      src="/images/hero-botanical.png"
                      alt="Illustrative editorial still life of a traditional stone mortar and pestle with fresh tulsi leaves, Ceylon cinnamon quills, green cardamom pods, and turmeric roots"
                      width={960}
                      height={1200}
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Official Logo Seal */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-6 flex items-center gap-3.5 rounded-2xl border border-[#DEC89A] bg-[#FAF7F0]/95 backdrop-blur-sm p-3.5 shadow-md">
                  <div className="h-14 w-14 shrink-0 rounded-xl border border-[#E3DAC6] bg-white p-1.5 flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Thilaka Ayurveda official emblem"
                      width={56}
                      height={50}
                      priority
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold leading-tight text-[#0E4025]">
                      Thilaka Ayurveda
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#845D18]">
                      Ruwanwella · Est. {BUSINESS_INFO.establishedYear}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-right text-[11px] text-[#5F7065]">
                  Illustrative botanical still life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERITAGE PILLARS STRIP */}
      <section
        aria-label="Key store information"
        className="bg-[#0E4025] text-[#FAF7F0] border-b border-[#D4AF63]/25"
      >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            <div className="border-l border-[#D4AF63]/40 pl-4">
              <p className="font-serif text-2xl font-semibold text-[#D4AF63] sm:text-3xl">
                Est. 1982
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#CFE0D4]">
                Stated establishment year on the official Thilaka Ayurveda
                website
              </p>
            </div>
            <div className="border-l border-[#D4AF63]/40 pl-4">
              <p className="font-serif text-2xl font-semibold text-[#D4AF63] sm:text-3xl">
                12 Categories
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#CFE0D4]">
                Traditional Ayurvedic wellness categories for in-shop discovery
              </p>
            </div>
            <div className="border-l border-[#D4AF63]/40 pl-4">
              <p className="font-serif text-2xl font-semibold text-[#D4AF63] sm:text-3xl">
                5 Classical Forms
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#CFE0D4]">
                Churna, Vati / Gutika, Medicated Oils, Arishta / Asava &amp; Raw
                Herbs
              </p>
            </div>
            <div className="border-l border-[#D4AF63]/40 pl-4">
              <p className="font-serif text-2xl font-semibold text-[#D4AF63] sm:text-3xl">
                Ruwanwella
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#CFE0D4]">
                Visit No. 38, Main Street for personal guidance and purchases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION / ABOUT PREVIEW (§6.2) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-[#DEC89A] bg-white p-3 shadow-sm">
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-[#FAF7F0]">
                    <Image
                      src="/images/heritage-botanical-plate.png"
                      alt="Botanical herbarium illustration depicting lotus blossom, gotu kola leaves, neem sprigs, and Ceylon cinnamon flower"
                      width={960}
                      height={1200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-2.5 px-2 pb-1 text-center text-[11px] text-[#5F7065]">
                    Illustrative botanical specimen study of traditional herbs
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
                  Family-Operated Heritage
                </p>
                <h2 className="font-serif text-3xl font-semibold leading-tight text-[#15231A] sm:text-4xl lg:text-5xl">
                  About Thilaka Ayurveda
                </h2>
                <p className="text-base leading-relaxed text-[#435449]">
                  Thilaka Ayurveda is a family-operated Ayurvedic medicine
                  business based in Ruwanwella. According to the business&apos;s
                  official website, it was established in 1982. The business
                  focuses on traditional Ayurvedic medicines, herbal
                  preparations and natural wellness products, while placing
                  importance on personal customer attention and traditional
                  knowledge.
                </p>
                <p className="text-base leading-relaxed text-[#435449]">
                  Whether you are looking for classical preparations, raw herbal
                  ingredients, or guidance on locating a product at our counter,
                  our goal is to provide clear, responsible information and
                  welcoming in-person care.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="rounded-2xl border border-[#E3DAC6] bg-white p-4">
                    <p className="font-serif text-xl font-semibold text-[#0E4025]">
                      Traditional Knowledge
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#435449]">
                      Rooted in Sri Lankan and classical Ayurvedic practices
                      passed down across generations.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#E3DAC6] bg-white p-4">
                    <p className="font-serif text-xl font-semibold text-[#0E4025]">
                      Personal Attention
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#435449]">
                      Speak directly with our staff by phone or at the shop
                      counter to check availability and product details.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about/"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-6 py-2.5 text-sm font-semibold text-[#FAF7F0] transition-colors hover:bg-[#155232]"
                  >
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES PREVIEW (§6.3) */}
      <section className="border-y border-[#E3DAC6] bg-[#F2ECE0]/55 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
                Digital Product Catalogue
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#15231A] sm:text-4xl lg:text-5xl">
                Explore Our Product Categories
              </h2>
              <p className="text-base leading-relaxed text-[#435449]">
                Explore the product categories available through Thilaka
                Ayurveda. Product availability may change, so please contact or
                visit the shop to confirm current availability and obtain
                product-specific information.
              </p>
              <OrnamentDivider className="pt-2" />
            </div>
          </Reveal>

          <CatalogueNoticeBanner compact />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((cat, idx) => (
              <Reveal key={cat.slug} delayMs={idx * 60}>
                <article className="group flex h-full flex-col justify-between rounded-3xl border border-[#E3DAC6] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A67C2E]/60 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E3DAC6]/60">
                      <span className="font-serif text-lg font-semibold text-[#845D18]">
                        {cat.index}
                      </span>
                      <span className="rounded-full bg-[#E8F0EA] px-3 py-1 text-[11px] font-semibold text-[#0E4025]">
                        {cat.group}
                      </span>
                    </div>

                    <div className="mt-5 flex items-start gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E3DAC6] bg-[#FAF7F0] text-[#0E4025] transition-colors group-hover:bg-[#0E4025] group-hover:text-[#FAF7F0]">
                        <CategoryIcon name={cat.iconName} className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-[#15231A]">
                          <Link
                            href={`/products/${cat.slug}/`}
                            className="hover:text-[#0E4025] transition-colors"
                          >
                            {cat.name}
                          </Link>
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#435449]">
                          {cat.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-[#E3DAC6]/60 pt-4">
                    <Link
                      href={`/products/${cat.slug}/`}
                      className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-[#0E4025] hover:text-[#845D18] transition-colors"
                    >
                      View Details
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                    <Link
                      href={`/contact/?subject=Product+Availability&topic=${encodeURIComponent(
                        cat.name
                      )}`}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-1.5 text-xs font-semibold text-[#0E4025] transition-colors hover:border-[#0E4025] hover:bg-[#E8F0EA]"
                    >
                      <MessageSquareText
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                      Ask About Category
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/products/"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0E4025] px-7 py-3 text-sm font-semibold text-[#FAF7F0] shadow-xs transition-colors hover:bg-[#155232]"
            >
              Browse All 12 Catalogue Categories
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TRADITIONAL PREPARATION FORMS SHOWCASE (§8.5) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <PreparationFormsShowcase />
          </Reveal>
        </div>
      </section>

      {/* 6. HERITAGE & VALUES SANCTUARY BAND (§6.5 & §7) */}
      <section className="relative overflow-hidden bg-[#0E4025] py-16 text-[#FAF7F0] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center space-y-5">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF63]/70 bg-[#FAF7F0] p-2.5 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Thilaka Ayurveda official logo seal"
                  width={68}
                  height={60}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF63]">
                Our Heritage &amp; Principles
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#FAF7F0] sm:text-4xl lg:text-5xl">
                A Tradition of Ayurvedic Knowledge
              </h2>
              <p className="text-base leading-relaxed text-[#CFE0D4]">
                Thilaka Ayurveda&apos;s website identifies 1982 as the year the
                business was established. Its story is built around traditional
                Ayurvedic knowledge, herbal preparations and service to
                customers in Ruwanwella and beyond.
              </p>
              <OrnamentDivider dark className="pt-1" />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {CORE_VALUES.map((val, index) => (
              <Reveal key={val.title} delayMs={index * 60}>
                <div className="h-full rounded-2xl border border-[#D4AF63]/30 bg-[#072415]/60 p-5 space-y-2.5">
                  <span className="inline-block font-serif text-sm font-semibold text-[#D4AF63]">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#FAF7F0]">
                    {val.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#CFE0D4]">
                    {val.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SERVICES & CUSTOMER GUIDANCE SECTION (§6.6 & §10) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
                  In-Shop Support
                </p>
                <h2 className="font-serif text-3xl font-semibold text-[#15231A] sm:text-4xl">
                  Services &amp; Customer Guidance
                </h2>
                <p className="text-base leading-relaxed text-[#435449]">
                  Thilaka Ayurveda focuses on traditional Ayurvedic products and
                  in-person customer assistance. Contact the shop to confirm
                  currently available items, ingredients, and personalized
                  preparation options.
                </p>
              </div>
              <Link
                href="/services/"
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[#0E4025]/30 bg-white px-5 py-2.5 text-xs font-semibold text-[#0E4025] transition-colors hover:border-[#0E4025] hover:bg-[#E8F0EA]"
              >
                Explore Shop Services
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service, idx) => (
              <Reveal key={service.id} delayMs={idx * 60}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-[#E3DAC6] bg-white p-6 shadow-xs space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#845D18]">
                        {service.subtitle}
                      </span>
                      <span className="font-serif text-lg font-semibold text-[#0E4025]">
                        {service.index}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#15231A]">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#435449]">
                      {service.description}
                    </p>
                  </div>
                  <p className="rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-2.5 text-xs leading-relaxed text-[#5F7065]">
                    {service.guidanceNote}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Need Help Finding a Product (§6.6) */}
          <Reveal>
            <div className="rounded-3xl border border-[#CFE0D4] bg-[#E8F0EA]/60 p-6 sm:p-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-2">
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0E4025]">
                  <Sparkles className="h-3.5 w-3.5 text-[#845D18]" aria-hidden="true" />
                  Customer Assistance
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl">
                  Need Help Finding a Product?
                </h3>
                <p className="text-sm leading-relaxed text-[#435449]">
                  Contact Thilaka Ayurveda or visit the shop to ask about product
                  availability and the products offered. Product information on
                  this website is general and should not replace advice from a
                  qualified healthcare professional.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/contact/"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-6 py-2.5 text-xs font-semibold text-[#FAF7F0] hover:bg-[#155232]"
                >
                  Contact Thilaka Ayurveda
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/quality/"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0E4025]/25 bg-white px-5 py-2.5 text-xs font-semibold text-[#0E4025] hover:bg-[#FAF7F0]"
                >
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Quality &amp; FAQs
                </Link>
              </div>
            </div>
          </Reveal>

          <HealthDisclaimerBanner />
        </div>
      </section>

      {/* 8. VISIT THILAKA AYURVEDA IN RUWANWELLA (§6.7) */}
      <section className="border-t border-[#E3DAC6] bg-[#F2ECE0]/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 rounded-3xl border border-[#DEC89A] bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10">
              <div className="lg:col-span-6 space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
                  Physical Shop Location
                </p>
                <h2 className="font-serif text-3xl font-semibold text-[#15231A] sm:text-4xl">
                  Visit Thilaka Ayurveda in Ruwanwella
                </h2>
                <p className="text-base leading-relaxed text-[#435449]">
                  Find us at No. 38, Main Street, Ruwanwella, Sri Lanka. Contact
                  the shop before visiting to confirm opening hours and product
                  availability.
                </p>

                <ul className="space-y-3 text-sm text-[#15231A]">
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="h-5 w-5 shrink-0 text-[#0E4025] mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold">Address:</strong>{" "}
                      {BUSINESS_INFO.address}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone
                      className="h-5 w-5 shrink-0 text-[#0E4025]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold">Telephone:</strong>{" "}
                      <a
                        href={BUSINESS_INFO.phoneHref}
                        className="font-semibold text-[#0E4025] hover:underline"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      className="h-5 w-5 shrink-0 text-[#845D18] mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-[#435449]">
                      <strong className="font-semibold text-[#15231A]">
                        Opening Hours:
                      </strong>{" "}
                      {BUSINESS_INFO.hoursAdvisory}
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-6 py-2.5 text-sm font-semibold text-[#FAF7F0] hover:bg-[#155232]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call the Shop
                  </a>
                  <a
                    href={BUSINESS_INFO.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0E4025]/30 bg-[#FAF7F0] px-6 py-2.5 text-sm font-semibold text-[#0E4025] hover:bg-[#E8F0EA]"
                  >
                    Get Directions
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-[#E3DAC6] bg-[#FAF7F0]">
                  <iframe
                    title="Map showing Thilaka Ayurveda at No. 38, Main Street, Ruwanwella, Sri Lanka"
                    src={BUSINESS_INFO.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-80 w-full border-0 sm:h-96"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
