import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { okrCoachContent } from "@/content/okrCoach";

export function OkrForSection() {
  const { forWhom } = okrCoachContent;

  return (
    <Section bg="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-start">
          <Reveal className="flex flex-col gap-4 lg:sticky lg:top-28">
            <Eyebrow>{forWhom.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
              {forWhom.title}
            </h2>
            <p className="mt-2 rounded-[var(--radius-md)] border border-border bg-white px-5 py-4 text-sm leading-relaxed text-anthrazit-80">
              {forWhom.note}
            </p>
          </Reveal>

          <div className="flex flex-col gap-4">
            {forWhom.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tuerkis" aria-hidden />
                  <div className="flex flex-col gap-1.5">
                    <p className="font-semibold text-anthrazit">{item.title}</p>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
