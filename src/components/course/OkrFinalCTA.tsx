import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { okrCoachContent } from "@/content/okrCoach";

export function OkrFinalCTA() {
  const { finalCta } = okrCoachContent;

  return (
    <section className="bg-anthrazit py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/5 px-8 py-14 text-center md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(20,180,190,0.15)_0%,transparent_70%)]"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-[20ch] text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {finalCta.headline}
            </h2>
            <p className="max-w-[52ch] text-base leading-relaxed text-white/60 md:text-lg">
              {finalCta.subline}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href={finalCta.ctaPrimary.href}
                className="inline-flex h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all duration-150 hover:bg-tuerkis-80 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2 focus-visible:ring-offset-anthrazit"
              >
                {finalCta.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={finalCta.ctaSecondary.href}
                className="inline-flex h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all duration-150 hover:border-white/50 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {finalCta.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
