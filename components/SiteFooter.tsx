import Link from "next/link";
import { Clock, ExternalLink, MapPin, Phone, Store } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import {
  BUSINESS_INFO,
  NAV_LINKS,
  PRODUCT_CATEGORIES,
  SITE_LAST_UPDATED_LABEL,
} from "@/lib/site-data";

export function SiteFooter() {
  const featuredCategories = PRODUCT_CATEGORIES.filter((c) => c.featured);

  return (
    <footer className="bg-[#072415] text-[#FAF7F0] border-t border-[#D4AF63]/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Heritage */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="dark-surface" size="lg" />
            <p className="text-sm leading-relaxed text-[#CFE0D4] max-w-sm">
              A traditional Ayurvedic medicine business in Ruwanwella, Sri
              Lanka. {BUSINESS_INFO.establishedNote} Guided by traditional
              Ayurvedic knowledge, natural herbal ingredients, and personal
              customer care.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF63]/40 bg-[#0E4025] px-3.5 py-1.5 text-xs font-medium text-[#D4AF63]">
              <Store className="h-3.5 w-3.5" aria-hidden="true" />
              Digital Catalogue · Physical Shop Purchases Only
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-serif text-lg font-semibold tracking-wide text-[#FAF7F0]">
              Explore
            </h2>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#CFE0D4] transition-colors hover:text-[#D4AF63]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-lg font-semibold tracking-wide text-[#FAF7F0]">
              Product Categories
            </h2>
            <ul className="space-y-2.5 text-sm">
              {featuredCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}/`}
                    className="text-[#CFE0D4] transition-colors hover:text-[#D4AF63]"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products/"
                  className="inline-flex items-center gap-1 font-semibold text-[#D4AF63] hover:underline"
                >
                  View all 12 categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Visit & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-lg font-semibold tracking-wide text-[#FAF7F0]">
              Visit Our Shop
            </h2>
            <ul className="space-y-3.5 text-sm text-[#CFE0D4]">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="h-4 w-4 shrink-0 text-[#D4AF63] mt-1"
                  aria-hidden="true"
                />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="h-4 w-4 shrink-0 text-[#D4AF63]"
                  aria-hidden="true"
                />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-semibold text-[#FAF7F0] hover:text-[#D4AF63] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="h-4 w-4 shrink-0 text-[#D4AF63] mt-1"
                  aria-hidden="true"
                />
                <span className="text-xs leading-relaxed text-[#CFE0D4]">
                  {BUSINESS_INFO.hoursAdvisory}
                </span>
              </li>
            </ul>
            <a
              href={BUSINESS_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#D4AF63]/50 bg-[#0E4025] px-4 py-2 text-xs font-semibold text-[#FAF7F0] transition-colors hover:border-[#D4AF63] hover:bg-[#155232]"
            >
              Get Directions
              <ExternalLink className="h-3.5 w-3.5 text-[#D4AF63]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Catalogue & Medical Information Advisory Panel */}
        <div className="mt-12 rounded-2xl border border-[#D4AF63]/25 bg-[#0E4025]/80 p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 text-xs leading-relaxed text-[#CFE0D4]">
            <div>
              <p className="font-semibold uppercase tracking-[0.14em] text-[#D4AF63] mb-1.5">
                Catalogue-Only Purchase Notice
              </p>
              <p>{BUSINESS_INFO.catalogueNotice}</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.14em] text-[#D4AF63] mb-1.5">
                General Health &amp; Product Information
              </p>
              <p>{BUSINESS_INFO.medicalNotice}</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#CFE0D4]/85 sm:flex-row sm:items-center">
          <p>
            © {BUSINESS_INFO.name} · {BUSINESS_INFO.address}
          </p>
          <p className="text-[11px] text-[#CFE0D4]/80">
            Information last reviewed: {SITE_LAST_UPDATED_LABEL} · Made by:{" "}
            <a
              href="https://devrious.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF63] hover:underline"
            >
              Devrious
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
