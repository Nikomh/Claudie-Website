import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

interface LogoWallProps {
  eyebrow: string;
  logos: readonly string[];
}

export function LogoWall({ eyebrow, logos }: LogoWallProps) {
  return (
    <Section className="py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <ul
            className="grid w-full grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5"
            aria-label="Presseerwähnungen"
          >
            {logos.map((name) => (
              <li
                key={name}
                className="flex items-center justify-center text-center text-sm font-semibold uppercase tracking-[0.18em] text-anthrazit-80/60 opacity-60 grayscale transition hover:opacity-100 hover:text-anthrazit hover:grayscale-0 md:text-base"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
