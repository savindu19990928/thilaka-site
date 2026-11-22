import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/site-data";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <details
          key={item.id}
          open={idx === 0}
          className="group rounded-2xl border border-[#E3DAC6] bg-white/95 transition-colors open:border-[#0E4025]/35 open:bg-white open:shadow-xs hover:border-[#A67C2E]/60"
        >
          <summary className="flex min-h-14 list-none items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer sm:px-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-serif text-lg font-semibold text-[#15231A] sm:text-xl">
              {item.question}
            </h3>
            <ChevronDown
              className="h-5 w-5 shrink-0 text-[#0E4025] transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="border-t border-[#E3DAC6]/60 px-5 pb-5 pt-3.5 text-sm leading-relaxed text-[#435449] sm:px-6">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
