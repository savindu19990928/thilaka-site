"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquareText,
  Phone,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { CategoryIcon } from "./CategoryIcon";
import {
  BUSINESS_INFO,
  PRODUCT_CATEGORIES,
  WELLNESS_GROUPS,
  type WellnessGroup,
} from "@/lib/site-data";

type SortMode = "featured" | "az" | "za";

export function CatalogueBrowser() {
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<WellnessGroup | "ALL">(
    "ALL"
  );
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();

    const list = PRODUCT_CATEGORIES.filter((cat) => {
      const matchesGroup =
        selectedGroup === "ALL" || cat.group === selectedGroup;
      if (!matchesGroup) return false;
      if (!q) return true;

      return (
        cat.name.toLowerCase().includes(q) ||
        cat.shortDescription.toLowerCase().includes(q) ||
        cat.overview.toLowerCase().includes(q) ||
        cat.group.toLowerCase().includes(q) ||
        cat.recommendedForms.some((form) => form.toLowerCase().includes(q))
      );
    });

    if (sortMode === "az") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortMode === "za") {
      return [...list].sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [query, selectedGroup, sortMode]);

  const hasActiveFilters =
    query.trim().length > 0 || selectedGroup !== "ALL" || sortMode !== "featured";

  const resetAll = () => {
    setQuery("");
    setSelectedGroup("ALL");
    setSortMode("featured");
  };

  return (
    <div className="space-y-8">
      {/* Search, Filter & Sort Toolbar */}
      <div className="rounded-3xl border border-[#E3DAC6] bg-white p-5 shadow-xs sm:p-6 space-y-5">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-center">
          {/* Search Input */}
          <div className="lg:col-span-7">
            <label
              htmlFor="catalogue-search"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065] mb-2"
            >
              Search Categories &amp; Preparation Forms
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5F7065]"
                aria-hidden="true"
              />
              <input
                id="catalogue-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Digestive, Medicated Oils, Churna, Skin, Joint..."
                className="min-h-11 w-full rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] pl-10 pr-10 py-2.5 text-sm text-[#15231A] placeholder:text-[#5F7065]/75 focus:border-[#0E4025] focus:bg-white focus:outline-none"
              />
              {query.length > 0 && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search text"
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-lg text-[#5F7065] hover:bg-[#E8F0EA] hover:text-[#0E4025] cursor-pointer"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* Sort Select */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-end gap-3 lg:justify-end">
            <div className="flex-1 sm:max-w-56">
              <label
                htmlFor="catalogue-sort"
                className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065] mb-2"
              >
                Sort Order
              </label>
              <div className="relative">
                <SlidersHorizontal
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5F7065]"
                  aria-hidden="true"
                />
                <select
                  id="catalogue-sort"
                  value={sortMode}
                  onChange={(e) => setSortMode(e.target.value as SortMode)}
                  className="min-h-11 w-full rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] pl-10 pr-4 py-2.5 text-sm font-medium text-[#15231A] focus:border-[#0E4025] focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="featured">Catalogue Order (01–12)</option>
                  <option value="az">Alphabetical (A–Z)</option>
                  <option value="za">Alphabetical (Z–A)</option>
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-[#DEC89A] bg-[#FDF7EA] px-4 py-2.5 text-xs font-semibold text-[#845D18] transition-colors hover:bg-[#F2ECE0] cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Wrapping Filter Chips */}
        <div className="space-y-2 border-t border-[#E3DAC6]/70 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F7065]">
            Browse by Wellness Area
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by wellness area">
            <button
              type="button"
              onClick={() => setSelectedGroup("ALL")}
              aria-pressed={selectedGroup === "ALL"}
              className={`min-h-10 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                selectedGroup === "ALL"
                  ? "bg-[#0E4025] text-[#FAF7F0]"
                  : "border border-[#E3DAC6] bg-[#FAF7F0] text-[#435449] hover:border-[#0E4025]/40 hover:text-[#0E4025]"
              }`}
            >
              All Categories ({PRODUCT_CATEGORIES.length})
            </button>
            {WELLNESS_GROUPS.map((group) => {
              const active = selectedGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  aria-pressed={active}
                  className={`min-h-10 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? "bg-[#0E4025] text-[#FAF7F0]"
                      : "border border-[#E3DAC6] bg-[#FAF7F0] text-[#435449] hover:border-[#0E4025]/40 hover:text-[#0E4025]"
                  }`}
                >
                  {group}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Status & Count Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <p className="text-sm text-[#435449]" aria-live="polite">
          Showing{" "}
          <strong className="font-semibold text-[#15231A]">
            {filteredCategories.length}
          </strong>{" "}
          of {PRODUCT_CATEGORIES.length} official product categories
        </p>
        <p className="text-xs text-[#5F7065]">
          Availability &amp; individual product items confirmed in shop or by phone
        </p>
      </div>

      {/* Category Cards Grid or Helpful Empty State */}
      {filteredCategories.length === 0 ? (
        <div className="rounded-3xl border border-[#E3DAC6] bg-white px-6 py-14 text-center shadow-xs">
          <div className="mx-auto max-w-md space-y-4">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0EA] text-[#0E4025]">
              <Search className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="font-serif text-2xl font-semibold text-[#15231A]">
              No matching catalogue categories found
            </h2>
            <p className="text-sm leading-relaxed text-[#435449]">
              Try searching a broader term like &ldquo;Digestive&rdquo;,
              &ldquo;Medicated Oils&rdquo;, or &ldquo;Skin&rdquo;, or call our
              Ruwanwella shop directly to ask about a specific Ayurvedic product
              or herbal ingredient.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-5 py-2.5 text-xs font-semibold text-[#FAF7F0] hover:bg-[#155232] cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset Search &amp; Filters
              </button>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0E4025]/25 bg-[#FAF7F0] px-5 py-2.5 text-xs font-semibold text-[#0E4025] hover:bg-[#E8F0EA]"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat) => (
            <article
              key={cat.slug}
              className="group flex flex-col justify-between rounded-3xl border border-[#E3DAC6] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A67C2E]/60 hover:shadow-md"
            >
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
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FAF7F0] border border-[#E3DAC6] text-[#0E4025] transition-colors group-hover:bg-[#0E4025] group-hover:text-[#FAF7F0]">
                    <CategoryIcon name={cat.iconName} className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold leading-snug text-[#15231A]">
                      <Link
                        href={`/products/${cat.slug}/`}
                        className="hover:text-[#0E4025] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#435449]">
                      {cat.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.recommendedForms.map((form) => (
                    <span
                      key={form}
                      className="rounded-md border border-[#E3DAC6] bg-[#FAF7F0] px-2 py-0.5 text-[11px] font-medium text-[#435449]"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-[#E3DAC6]/60 pt-4">
                <p className="text-[11px] font-medium text-[#5F7065]">
                  Availability:{" "}
                  <span className="text-[#845D18] font-semibold">
                    {cat.availabilityLabel}
                  </span>
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Link
                    href={`/products/${cat.slug}/`}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#0E4025] px-4 py-2 text-xs font-semibold text-[#FAF7F0] transition-colors hover:bg-[#155232]"
                  >
                    View Details
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/contact/?subject=Product+Availability&topic=${encodeURIComponent(
                      cat.name
                    )}`}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-2 text-xs font-semibold text-[#0E4025] transition-colors hover:border-[#0E4025] hover:bg-[#E8F0EA]"
                  >
                    <MessageSquareText className="h-3.5 w-3.5" aria-hidden="true" />
                    Ask About This
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
