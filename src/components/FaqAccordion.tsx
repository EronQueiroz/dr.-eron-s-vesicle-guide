import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-primary"
            >
              <span className="pr-2 text-base font-bold leading-snug text-primary md:text-[1.0625rem]">
                {it.q}
              </span>
              <span
                aria-hidden="true"
                className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center text-[var(--color-gold)]"
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className="measure-wide text-base leading-relaxed text-muted-foreground">
                {it.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
