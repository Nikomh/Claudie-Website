import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const STATS = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "4", label: "Fachbücher" },
  { value: "200+", label: "Projekte & Programme" },
  { value: "BDVT", label: "Zertifiziert & ECA-lizenziert" },
];

const POINTS = [
  "Autorin von 4 Fachbüchern (Vahlen, managerSeminare)",
  "BDVT-zertifizierte Trainerin & ECA-lizenzierte Coach",
  "Gründerin und Geschäftsführerin seit 2010",
  "Referenzen: Telekom, H&M, Daiichi Sankyo, Schweizer Post u.v.m.",
];

export function ClaudiaTeaserSection() {
  return (
    <Section bg="section" className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">

          {/* Photo */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-[var(--radius-lg)] shadow-xl ring-1 ring-tuerkis/20 aspect-[4/5] lg:max-w-none">
              <Image
                src="/images/agiler-coach/claudia-thonet-agile-consulting-portrait_08_2024_2.jpg"
                alt="Claudia Thonet — Gründerin Claudia Thonet Agile Consulting"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover object-top"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/40 via-transparent to-transparent" />
            </div>
            <div aria-hidden className="pointer-events-none absolute -bottom-4 -right-4 hidden lg:block">
              <Image
                src="/images/illustrations/CT_SE02_25years_v2.png"
                alt=""
                width={90}
                height={70}
                className="drop-shadow-md"
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <div>
                <Eyebrow>Die Person dahinter</Eyebrow>
                <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Claudia Thonet
                </h2>
                <p className="mt-1 text-sm font-semibold text-tuerkis">Gründerin · Beraterin · Autorin · Trainerin</p>
              </div>

              <p className="text-base leading-relaxed text-anthrazit-80">
                Teamdenken und Agilität zu fördern ist mein Bestreben. Seit über 15 Jahren begleite ich Organisationen, Führungskräfte und Teams durch echten Wandel — mit Methoden, die wirken, und einer Haltung, die trägt. Nicht als externe Expertin, die Lösungen mitbringt. Sondern als Begleiterin, die die Stärken einer Organisation sichtbar macht.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <p className="text-2xl font-bold text-tuerkis">{stat.value}</p>
                    <p className="text-xs leading-snug text-anthrazit-80">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Points */}
              <div className="flex flex-col gap-2">
                {POINTS.map((p) => (
                  <div key={p} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                    {p}
                  </div>
                ))}
              </div>

              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-tuerkis hover:underline"
              >
                Mehr über uns und das Team <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
