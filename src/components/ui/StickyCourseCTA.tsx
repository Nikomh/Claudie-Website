"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

interface StickyCourseCtaProps {
  label?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showAfterPx?: number;
}

export function StickyCourseCta({
  label = "Noch Fragen?",
  primaryHref = "/beratung",
  primaryLabel = "Beratung vereinbaren",
  secondaryHref = "#termine",
  secondaryLabel = "Zu den Terminen",
  showAfterPx = 400,
}: StickyCourseCtaProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfterPx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPx]);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden",
        "transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="border-t border-white/10 bg-anthrazit px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex flex-1 flex-col gap-2">
            <p className="text-xs font-semibold text-white/70">{label}</p>
            <div className="flex gap-2">
              <Link
                href={primaryHref}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-[var(--radius-md)] bg-tuerkis px-4 py-2.5 text-xs font-semibold text-white shadow-sm active:opacity-90"
              >
                {primaryLabel} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <Link
                href={secondaryHref}
                className="flex flex-1 items-center justify-center rounded-[var(--radius-md)] border border-white/20 px-4 py-2.5 text-xs font-semibold text-white/80 active:opacity-90"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Ausblenden"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/40 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
