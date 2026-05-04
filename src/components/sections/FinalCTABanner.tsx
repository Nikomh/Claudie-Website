import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function FinalCTABanner() {
  const { finalCta } = homeContent;
  return (
    <Section className="py-12 md:py-16">
      <Container>
        <div className="rounded-[var(--radius-md)] bg-orange-rot p-8 text-white shadow-xl md:p-12 lg:p-14">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
                {finalCta.headline}
              </h2>
              <p className="max-w-[52ch] text-sm leading-relaxed text-white/90 md:text-base">
                {finalCta.subline}
              </p>
            </div>
            <Link
              href={finalCta.ctaHref}
              className="inline-flex h-14 min-h-[44px] shrink-0 items-center gap-2 rounded-[var(--radius-md)] bg-white px-7 text-base font-semibold text-orange-rot shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-rot motion-reduce:hover:translate-y-0"
            >
              {finalCta.ctaText}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
