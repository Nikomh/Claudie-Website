import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { CourseTeamData } from "@/content/courseTypes";
import { cn } from "@/lib/cn";

export function CourseTeam({ team }: { team: CourseTeamData }) {

  return (
    <Section bg="section">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 md:mb-14">
            <Eyebrow>{team.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
              {team.title}
            </h2>
            <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">
              {team.lead}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <article className="flex h-full flex-col rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">

                {/* Avatar */}
                <div
                  className={cn(
                    "mb-4 flex h-14 w-14 items-center justify-center rounded-full text-base font-bold tracking-wide",
                    member.avatarColor,
                    member.textColor,
                  )}
                  aria-hidden
                >
                  {member.initials}
                </div>

                {/* Info */}
                <p className="font-semibold text-anthrazit leading-snug">{member.name}</p>
                <p className="mt-0.5 text-xs text-anthrazit-80">{member.role}</p>

                {/* Bio */}
                <p className="mt-3 text-sm leading-relaxed text-anthrazit-80">{member.bio}</p>

                {/* Focus topics */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {member.focusTopics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs text-anthrazit-80"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
