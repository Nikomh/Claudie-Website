import Link from "next/link";
import { ArrowRight, MapPin, Wifi } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import type { CourseDatesData } from "@/content/courseTypes";

export function CourseDates({ dates }: { dates: CourseDatesData }) {

  return (
    <section id="termine" className="scroll-mt-24 bg-anthrazit py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 md:mb-14">
            <Eyebrow className="text-tuerkis-50">{dates.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              {dates.title}
            </h2>
            <p className="max-w-[56ch] text-base leading-relaxed text-white/60 md:text-lg">
              {dates.lead}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {dates.cohorts.map((cohort, i) => (
            <Reveal key={cohort.id} delay={i * 100}>
              <article className="flex h-full flex-col rounded-[var(--radius-lg)] bg-white shadow-xl">

                {/* Card header */}
                <div className="flex items-start justify-between gap-3 border-b border-border px-7 py-6">
                  <div>
                    <p className="text-lg font-bold text-anthrazit">{cohort.name}</p>
                    <p className="mt-0.5 text-sm text-anthrazit-80">{cohort.format}</p>
                  </div>
                  {cohort.badge && (
                    <span className="shrink-0 rounded-full bg-tuerkis px-3 py-1 text-xs font-semibold text-white">
                      {cohort.badge}
                    </span>
                  )}
                </div>

                {/* Module dates */}
                <div className="flex flex-col gap-0 px-7 py-5">
                  {cohort.modules.map((mod) => (
                    <div
                      key={mod.label}
                      className="flex items-center justify-between gap-4 border-b border-border/60 py-2.5 last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-16 text-xs font-semibold text-anthrazit-80">
                          {mod.label}
                        </span>
                        <span className="text-sm text-anthrazit">{mod.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-anthrazit-80">
                        {mod.location.includes("Online") ? (
                          <Wifi className="h-3 w-3 shrink-0" aria-hidden />
                        ) : (
                          <MapPin className="h-3 w-3 shrink-0" aria-hidden />
                        )}
                        <span className="hidden sm:inline">{mod.location}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Venue */}
                <div className="px-7 pb-5">
                  <p className="flex items-start gap-1.5 text-xs text-anthrazit-80">
                    <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-tuerkis" aria-hidden />
                    {cohort.venue}
                  </p>
                </div>

                {/* Pricing + CTA */}
                <div className="mt-auto border-t border-border px-7 py-6">
                  <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2">
                    <div>
                      <p className="text-xs text-anthrazit-80">{cohort.priceHybridLabel ?? "Hybrid (Berlin + Online)"}</p>
                      <p className="text-2xl font-bold text-anthrazit">
                        {cohort.priceHybrid}
                        <span className="ml-1 text-sm font-normal text-anthrazit-80">
                          {cohort.vatNote}
                        </span>
                      </p>
                    </div>
                    {cohort.priceOnline ? (
                      <div>
                        <p className="text-xs text-anthrazit-80">{cohort.priceOnlineLabel ?? "Komplett Online"}</p>
                        <p className="text-2xl font-bold text-anthrazit">
                          {cohort.priceOnline}
                          <span className="ml-1 text-sm font-normal text-anthrazit-80">
                            {cohort.vatNote}
                          </span>
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <Link
                    href={cohort.ctaHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-150 hover:bg-tuerkis-80 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2"
                  >
                    {cohort.ctaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

        {/* Footer notes */}
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-md)] border border-white/10 px-6 py-4">
            <p className="text-sm text-white/55">{dates.discountNote}</p>
            <a
              href={`mailto:${dates.contact.email}`}
              className="text-sm font-semibold text-tuerkis hover:text-tuerkis-50 transition-colors"
            >
              {dates.contact.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
