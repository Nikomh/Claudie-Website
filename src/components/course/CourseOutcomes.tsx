import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { CourseOutcomesData } from "@/content/courseTypes";

const ILLUSTRATIONS = [
  "/images/illustrations/CT_SE02_steps.png",
  "/images/illustrations/SE02_EP01_team.png",
  "/images/illustrations/CT_SE02_Facilitator_character_A.png",
  "/images/illustrations/SE02_EP01_werkzeug.png",
] as const;

export function CourseOutcomes({
  outcomes,
  illustrations: customIllustrations,
}: {
  outcomes: CourseOutcomesData;
  illustrations?: readonly string[];
}) {
  const illustrationSources = customIllustrations ?? ILLUSTRATIONS;

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
            const illSrc = illustrationSources[i] ?? illustrationSources[0];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                  <div aria-hidden className="h-16 w-16">
                    <Image
                      src={illSrc}
                      alt=""
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
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
