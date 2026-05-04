"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent, type HomeTestimonial } from "@/content/home";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 6000;

function TestimonialCard({ t }: { t: HomeTestimonial }) {
  return (
    <article className="relative flex h-full flex-col gap-5 rounded-[var(--radius-md)] border border-border bg-white p-8 motion-safe:animate-scale-in">
      <Quote
        className="h-8 w-8 -ml-1 text-anthrazit/15"
        aria-hidden
      />
      <p className="text-base leading-relaxed text-anthrazit md:text-lg">
        {`„${t.quote}"`}
      </p>
      <div className="mt-auto flex items-end justify-between gap-4 pt-2">
        <div>
          <p className="font-semibold text-anthrazit">{t.name}</p>
          {t.role || t.company ? (
            <p className="text-xs text-anthrazit-80">
              {[t.role, t.company].filter(Boolean).join(" · ")}
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 gap-0.5" aria-label={`${t.rating} von 5 Sternen`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < t.rating
                  ? "fill-orange-rot text-orange-rot"
                  : "text-border",
              )}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export function TestimonialCarousel() {
  const { testimonials } = homeContent;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    const onInit = () => setSnaps(emblaApi.scrollSnapList());
    onInit();
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const t = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [emblaApi, paused]);

  return (
    <Section className="py-20">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Stimmen"
            title="Was Teilnehmer:innen sagen"
            lead="Aus 120+ Bewertungen — Auszüge aus aktuellen Programmen."
          />
        </div>
        <div
          className="mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-mx-3 flex">
              {testimonials.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} von ${testimonials.length}`}
                >
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Stimmen-Navigation"
          >
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Stimme ${i + 1} anzeigen`}
                aria-selected={i === selected}
                role="tab"
                className={cn(
                  "h-2 rounded-full transition-all duration-200",
                  i === selected
                    ? "w-8 bg-tuerkis"
                    : "w-2 bg-anthrazit/20 hover:bg-anthrazit/40",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
