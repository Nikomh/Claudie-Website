import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function TrustBadgeStrip() {
  const { trustBadges } = homeContent;
  return (
    <Section className="py-12 md:py-16">
      <Container>
        <ul className="grid gap-4 md:grid-cols-3">
          {trustBadges.map((b) => (
            <li
              key={b.label}
              className="flex items-start gap-4 rounded-[var(--radius-md)] border border-amber-300/70 bg-[#fff3bf]/70 p-5"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-amber-700 ring-1 ring-amber-300/70">
                <BadgeCheck className="h-5 w-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold text-anthrazit">
                  {b.label}
                </span>
                <span className="text-xs text-anthrazit-80">{b.sublabel}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
