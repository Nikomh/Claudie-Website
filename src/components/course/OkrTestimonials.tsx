import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { okrCoachContent, type OkrTestimonial } from "@/content/okrCoach";
import { cn } from "@/lib/cn";

function TestimonialCard({ t }: { t: OkrTestimonial }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
      <Quote className="-ml-1 h-7 w-7 text-anthrazit/12" aria-hidden />
      <p className="flex-1 text-sm leading-relaxed text-anthrazit md:text-base">
        {`„${t.quote}"`}
      </p>
      <div className="flex items-end justify-between gap-4 border-t border-border pt-4">
        <div>
          <p className="text-sm font-semibold text-anthrazit">{t.name}</p>
          {(t.role ?? t.company) ? (
            <p className="mt-0.5 text-xs text-anthrazit-80">
              {[t.role, t.company].filter(Boolean).join(" · ")}
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 gap-0.5" aria-label={`${t.rating} von 5 Sternen`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < t.rating ? "fill-orange-rot text-orange-rot" : "text-border",
              )}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export function OkrTestimonials() {
  const { testimonials } = okrCoachContent;

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 md:mb-14">
            <Eyebrow>{testimonials.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
              {testimonials.title}
            </h2>
            <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80">
              {testimonials.lead}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
