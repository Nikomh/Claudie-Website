import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { okrCoachContent } from "@/content/okrCoach";

export function OkrDates() {
  const { dates } = okrCoachContent;

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

                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-border px-7 py-6">
                  <div>
                    <p className="text-lg font-bold text-anthrazit">{cohort.name}</p>
                    <div className="mt-1.5 flex items-center gap-1.5 text-sm text-anthrazit-80">
                      <CalendarDays className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <span className="font-medium text-anthrazit">{cohort.dates}</span>
                      {cohort.dateTbd && (
                        <span className="ml-1 rounded-full bg-bg-section px-2 py-0.5 text-xs text-anthrazit-80">
                          Termin folgt
                        </span>
                      )}
                    </div>
                  </div>
                  {cohort.badge && (
                    <span className="shrink-0 rounded-full bg-tuerkis px-3 py-1 text-xs font-semibold text-white">
                      {cohort.badge}
                    </span>
                  )}
                </div>

                {/* Venue */}
                <div className="px-7 py-5">
                  <p className="flex items-start gap-1.5 text-sm text-anthrazit-80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                    {cohort.venue}
                  </p>
                </div>

                {/* Included */}
                <div className="border-t border-border px-7 py-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-anthrazit-80">
                    Inklusive
                  </p>
                  <ul className="flex flex-col gap-2">
                    {dates.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-anthrazit">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + CTA */}
                <div className="mt-auto border-t border-border px-7 py-6">
                  <div className="mb-5">
                    <p className="text-xs text-anthrazit-80">Preis</p>
                    <p className="text-3xl font-bold text-anthrazit">
                      {cohort.price}
                      <span className="ml-1.5 text-sm font-normal text-anthrazit-80">
                        {cohort.vatNote}
                      </span>
                    </p>
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
