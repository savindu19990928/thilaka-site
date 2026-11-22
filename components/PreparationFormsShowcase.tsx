"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquareText } from "lucide-react";
import { PRODUCT_FORMS } from "@/lib/site-data";

export function PreparationFormsShowcase() {
  const [activeId, setActiveId] = useState<string>(PRODUCT_FORMS[0].id);
  const activeForm =
    PRODUCT_FORMS.find((form) => form.id === activeId) ?? PRODUCT_FORMS[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
      {/* Left: Framed Editorial Flat-Lay Image */}
      <div className="lg:col-span-6">
        <div className="relative rounded-3xl border border-[#DEC89A] bg-white p-3 shadow-sm">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#F2ECE0]">
            <Image
              src="/images/forms-still-life.png"
              alt="Illustrative overhead composition of traditional herbal powder in a brass bowl, unlabeled amber glass oil vessel, dried roots, and green leaves"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 pb-1 text-xs text-[#5F7065]">
            <span>Illustrative botanical preparation materials</span>
            <span className="font-medium text-[#845D18]">
              5 Traditional Forms
            </span>
          </div>
        </div>
      </div>

      {/* Right: Interactive Form Switcher */}
      <div className="lg:col-span-6 space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#845D18]">
            Classical Dosage Traditions
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#15231A] sm:text-4xl">
            Traditional Preparation Forms Carried in Store
          </h2>
          <p className="text-base leading-relaxed text-[#435449]">
            Select a traditional Ayurvedic preparation form below to understand
            how botanical products are categorized at Thilaka Ayurveda.
            Availability and packaging details are confirmed at our shop.
          </p>
        </div>

        {/* Wrapping Accessible Tabs */}
        <div
          role="tablist"
          aria-label="Traditional Ayurvedic product forms"
          className="flex flex-wrap gap-2"
        >
          {PRODUCT_FORMS.map((form) => {
            const selected = form.id === activeForm.id;
            return (
              <button
                key={form.id}
                id={`tab-${form.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${form.id}`}
                onClick={() => setActiveId(form.id)}
                className={`min-h-11 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                  selected
                    ? "bg-[#0E4025] text-[#FAF7F0] shadow-xs"
                    : "border border-[#E3DAC6] bg-white text-[#15231A] hover:border-[#0E4025]/40 hover:bg-[#E8F0EA]/60"
                }`}
              >
                {form.name}
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div
          id={`panel-${activeForm.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeForm.id}`}
          className="rounded-2xl border border-[#E3DAC6] bg-white p-6 shadow-xs space-y-4"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#E3DAC6]/70 pb-3">
            <h3 className="font-serif text-2xl font-semibold text-[#0E4025]">
              {activeForm.name}
            </h3>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#845D18]">
              {activeForm.subtitle}
            </span>
          </div>

          <p className="text-sm font-medium text-[#15231A]">
            {activeForm.summary}
          </p>
          <p className="text-sm leading-relaxed text-[#435449]">
            {activeForm.detail}
          </p>

          <div className="flex items-start gap-2.5 rounded-xl bg-[#FAF7F0] border border-[#E3DAC6] p-3.5 text-xs leading-relaxed text-[#435449]">
            <CheckCircle2
              className="h-4 w-4 shrink-0 text-[#0E4025] mt-0.5"
              aria-hidden="true"
            />
            <span>{activeForm.shopNote}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={`/contact/?subject=Product+Information&topic=${encodeURIComponent(
                activeForm.name
              )}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-5 py-2.5 text-xs font-semibold text-[#FAF7F0] transition-colors hover:bg-[#155232]"
            >
              <MessageSquareText className="h-3.5 w-3.5" aria-hidden="true" />
              Ask About {activeForm.name}
            </Link>
            <Link
              href="/products/"
              className="inline-flex min-h-11 items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0E4025] hover:text-[#845D18] transition-colors"
            >
              Browse Product Categories
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
