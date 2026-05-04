import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { okrCoachContent } from "@/content/okrCoach";

export function OkrInhouse() {
  const { inhouse } = okrCoachContent;

  return (
    <div className="bg-tuerkis py-14">
      <Container>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-white/15">
              <Building2 className="h-6 w-6 text-white" aria-hidden />
            </div>
            <div className="flex flex-col gap-1.5">
              <Eyebrow className="text-white/70">{inhouse.eyebrow}</Eyebrow>
              <p className="text-xl font-bold text-white">{inhouse.headline}</p>
              <p className="max-w-[52ch] text-sm leading-relaxed text-white/75">{inhouse.body}</p>
            </div>
          </div>
          <Link
            href={inhouse.ctaHref}
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tuerkis motion-reduce:hover:translate-y-0"
          >
            {inhouse.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </div>
  );
}
