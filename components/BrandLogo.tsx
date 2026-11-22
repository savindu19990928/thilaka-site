import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light-surface" | "dark-surface";
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  showText?: boolean;
}

const SIZE_MAP = {
  sm: { box: "h-10 w-10", imgW: 40, imgH: 35, title: "text-lg", sub: "text-[10px]" },
  md: { box: "h-12 w-12", imgW: 48, imgH: 42, title: "text-xl sm:text-[22px]", sub: "text-[10px]" },
  lg: { box: "h-16 w-16", imgW: 64, imgH: 56, title: "text-2xl", sub: "text-[11px]" },
} as const;

export function BrandLogo({
  variant = "light-surface",
  size = "md",
  asLink = true,
  showText = true,
}: BrandLogoProps) {
  const cfg = SIZE_MAP[size];

  const mark = (
    <span className="inline-flex items-center gap-3 group">
      {variant === "dark-surface" ? (
        <span
          className={`${cfg.box} shrink-0 rounded-full bg-[#FAF7F0] border border-[#D4AF63]/70 p-1.5 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]`}
        >
          <Image
            src="/images/logo.png"
            alt="Thilaka Ayurveda emblem"
            width={cfg.imgW}
            height={cfg.imgH}
            className="h-full w-full object-contain"
            priority
          />
        </span>
      ) : (
        <span
          className={`${cfg.box} shrink-0 rounded-xl bg-[#FFFFFF]/80 border border-[#E3DAC6] p-1 shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]`}
        >
          <Image
            src="/images/logo.png"
            alt="Thilaka Ayurveda emblem"
            width={cfg.imgW}
            height={cfg.imgH}
            className="h-full w-full object-contain"
            priority
          />
        </span>
      )}

      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif font-semibold tracking-[0.04em] ${cfg.title} ${
              variant === "dark-surface" ? "text-[#FAF7F0]" : "text-[#0E4025]"
            }`}
          >
            THILAKA
          </span>
          <span
            className={`mt-1 font-sans uppercase tracking-[0.22em] font-medium ${cfg.sub} ${
              variant === "dark-surface" ? "text-[#D4AF63]" : "text-[#845D18]"
            }`}
          >
            Ayurveda · Ruwanwella
          </span>
        </span>
      )}
    </span>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        aria-label="Thilaka Ayurveda — Return to home page"
        className="inline-flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        {mark}
      </Link>
    );
  }

  return mark;
}
