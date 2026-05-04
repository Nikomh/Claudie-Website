"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { label: "Ergebnisse", href: "#versprechen" },
  { label: "Format", href: "#format" },
  { label: "Für wen?", href: "#zielgruppe" },
  { label: "Preise", href: "#investition" },
  { label: "FAQ", href: "#faq" },
];

const SECTION_IDS = ["versprechen", "format", "zielgruppe", "investition", "faq"];

export function SprintStickyNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const hero = document.getElementById("sprint-hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed left-0 right-0 top-[72px] z-40 border-b border-border bg-white/92 shadow-sm backdrop-blur-md motion-safe:animate-fade-in">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-5 py-2 md:px-8">
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Seitennavigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-[var(--radius-sm)] px-3 py-1.5 text-sm font-medium transition-colors",
                active === item.href.slice(1)
                  ? "bg-tuerkis/10 text-tuerkis"
                  : "text-anthrazit-80 hover:bg-bg-section hover:text-anthrazit",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="hidden text-xs text-anthrazit-80 md:block lg:hidden">
          AI Leadership Sprint
        </p>
        <Link
          href="#sondierungsgespraech"
          className={cn(
            buttonVariants({ variant: "primary", size: "sm" }),
            "ml-auto shrink-0",
          )}
        >
          Gespräch buchen
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
