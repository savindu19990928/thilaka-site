import { Info, MapPin, Phone, Store } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/site-data";

export function CatalogueNoticeBanner({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <aside
      aria-label="In-shop purchase and catalogue notice"
      className={`rounded-2xl border border-[#DEC89A] bg-[#FDF7EA] shadow-xs ${
        compact ? "p-4 sm:p-5" : "p-5 sm:p-7"
      }`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0E4025] text-[#FAF7F0]">
            <Store className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#845D18]">
              Catalogue Only · In-Shop Purchases
            </p>
            <p className="text-sm leading-relaxed text-[#15231A]">
              <strong className="font-semibold">Please note:</strong>{" "}
              {BUSINESS_INFO.catalogueNotice}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 lg:shrink-0">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0E4025] px-4 py-2 text-xs font-semibold tracking-wide text-[#FAF7F0] transition-colors hover:bg-[#155232]"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
          <a
            href={BUSINESS_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#0E4025]/25 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[#0E4025] transition-colors hover:border-[#0E4025] hover:bg-[#E8F0EA]"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </div>
    </aside>
  );
}

export function HealthDisclaimerBanner() {
  return (
    <aside
      aria-label="General health and product information notice"
      className="rounded-2xl border border-[#CFE0D4] bg-[#E8F0EA]/65 p-5 sm:p-6"
    >
      <div className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-[#CFE0D4] text-[#0E4025]">
          <Info className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0E4025]">
            General Information &amp; Responsible Use Notice
          </p>
          <p className="text-sm leading-relaxed text-[#435449]">
            {BUSINESS_INFO.medicalNotice} Customers with medical conditions,
            pregnant or breastfeeding individuals, and people taking prescription
            medication should seek advice from a qualified healthcare
            professional before using relevant products.
          </p>
        </div>
      </div>
    </aside>
  );
}
