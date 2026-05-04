import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { okrCoachContent } from "@/content/okrCoach";
import { cn } from "@/lib/cn";

export function OkrTeam() {
  const { team } = okrCoachContent;
  const m = team.member;

  return (
    <Section bg="section">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col gap-3">
            <Eyebrow>{team.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
              {team.title}
            </h2>
            <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80">
              {team.lead}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-6 md:grid-cols-[auto_1fr]">

            {/* Avatar + name */}
            <div className="flex flex-row items-start gap-5 md:flex-col md:items-center md:w-44">
              <div
                className={cn(
                  "flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-xl font-bold tracking-wide md:h-28 md:w-28 md:text-2xl",
                  m.avatarColor,
                  m.textColor,
                )}
                aria-hidden
              >
                {m.initials}
              </div>
              <div className="md:text-center">
                <p className="font-bold text-anthrazit text-lg">{m.name}</p>
                <p className="text-sm text-anthrazit-80 mt-0.5">{m.role}</p>
              </div>
            </div>

            {/* Bio + philosophy + tags */}
            <div className="rounded-[var(--radius-md)] border border-border bg-white p-6 md:p-8 shadow-sm flex flex-col gap-5">
              <p className="text-base leading-relaxed text-anthrazit-80">{m.bio}</p>
              <blockquote className="border-l-2 border-tuerkis pl-5">
                <p className="text-base font-medium italic text-anthrazit leading-relaxed">
                  {m.philosophy}
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-2 pt-1">
                {m.focusTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-tuerkis/10 px-3 py-1 text-xs font-semibold text-tuerkis"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
