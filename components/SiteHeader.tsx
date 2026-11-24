"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Menu, Phone, Store, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);
  const menuOpen = menuOpenPath === pathname;

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpenPath(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Utility Strip */}
      {/* <div className="bg-[#072415] text-[#EDE6D6] border-b border-[#D4AF63]/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-[#FAF7F0]">
              <MapPin className="h-3.5 w-3.5 text-[#D4AF63]" aria-hidden="true" />
              <span>{BUSINESS_INFO.address}</span>
            </span>
            <span className="hidden sm:inline text-[#D4AF63]/60" aria-hidden="true">
              |
            </span>
            <span className="hidden sm:inline text-[#CFE0D4]">
              Est. {BUSINESS_INFO.establishedYear}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#D4AF63] font-medium">
              <Store className="h-3.5 w-3.5" aria-hidden="true" />
              Catalogue Only · Purchase at Shop
            </span>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-[#FAF7F0] hover:text-[#D4AF63] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4AF63]" aria-hidden="true" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Sticky Navigation */}
      <div className="bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E3DAC6] shadow-2xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <BrandLogo variant="light-surface" size="md" />

          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                    active
                      ? "text-[#0E4025] font-semibold bg-[#E8F0EA]/70"
                      : "text-[#435449] hover:text-[#0E4025] hover:bg-[#F2ECE0]/70"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#A67C2E]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-[#0E4025]/25 bg-white px-4 py-2 text-xs font-semibold text-[#0E4025] transition-colors hover:border-[#0E4025] hover:bg-[#E8F0EA]"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Call Shop
            </a>
            <Link
              href="/contact/"
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-[#0E4025] px-4 py-2 text-xs font-semibold text-[#FAF7F0] shadow-xs transition-colors hover:bg-[#155232]"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Visit Our Shop
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpenPath(menuOpen ? null : pathname)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E3DAC6] bg-white text-[#0E4025] transition-colors hover:bg-[#E8F0EA] lg:hidden cursor-pointer"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[#E3DAC6] bg-[#FAF7F0] px-4 pb-5 pt-3 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-11 items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#0E4025] text-[#FAF7F0] font-semibold"
                        : "text-[#15231A] hover:bg-[#E8F0EA]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF63]" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 border-t border-[#E3DAC6] pt-4">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#0E4025]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#0E4025]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
              <Link
                href="/contact/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0E4025] px-4 py-2.5 text-sm font-semibold text-[#FAF7F0]"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Visit Shop &amp; Enquire
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
