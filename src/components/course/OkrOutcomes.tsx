import { ArrowUpRight, BarChart3, Target, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { okrCoachContent } from "@/content/okrCoach";

const ICONS = [Target, ArrowUpRight, Users, BarChart3];

export function OkrOutcomes() {
  const { outcomes } = okrCoachContent;

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 md:mb-16">
            <Eyebrow>{outcomes.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
              {outcomes.title}
            </h2>
            <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">
              {outcomes.lead}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.items.map((item, i) => {
            const Icon = ICONS[i] ?? Target;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-tuerkis/10">
                    <Icon className="h-5 w-5 text-tuerkis" aria-hidden />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold leading-snug text-anthrazit">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
