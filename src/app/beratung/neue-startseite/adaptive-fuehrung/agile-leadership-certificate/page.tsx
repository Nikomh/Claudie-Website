import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Agile Leadership Certificate — Adaptive Führung · Claudia Thonet",
  description:
    "Das umfassende 6–8-Wochen-Programm für Führungskräfte, die Agilität und KI-Ära-Leadership als Haltung — nicht nur als Methode — entwickeln wollen.",
  robots: { index: false, follow: false },
};

const MODULES = [
  {
    number: "01",
    title: "Agile Führungshaltung",
    body: "Was es bedeutet, agil zu führen: Rahmen setzen, befähigen, loslassen und dennoch Orientierung geben.",
  },
  {
    number: "02",
    title: "KI-Ära Leadership",
    body: "Führung in Zeiten von KI, Unsicherheit und schnellem Wandel — Kompetenzen und Mindset.",
  },
  {
    number: "03",
    title: "Change Leadership",
    body: "Veränderungsprozesse professionell steuern: Adoption fördern, Widerstände nutzen, nachhaltig verankern.",
  },
  {
    number: "04",
    title: "Outcome-Steuerung",
    body: "OKRs, Führung mit Zielen und das Verbinden von Strategie und Alltag.",
  },
];

const FUER_WEN = [
  "Führungskräfte, die Agilität als Haltung entwickeln wollen",
  "Team- und Abteilungsleiter:innen im Wandel",
  "Transformation Sponsors und Change Leader",
  "HR-Business-Partner mit strategischer Führungsverantwortung",
  "Führungskräfte in KI-getriebenen Branchen",
];

const DETAILS = [
  "6–8 Wochen",
  "Blended: Präsenz + Live-Online",
  "BDVT-anerkannt",
  "Inhouse oder offene Gruppe",
  "Max. 12 Teilnehmer:innen",
  "Individuelle Lernpfade",
];

const BADGES = [
  "BDVT-anerkannt",
  "6–8 Wochen",
  "Max. 12 TN",
  "Praxisorientiert",
];

export default function AgileLeadershipCertificatePage() {
  return (
    <>
      {/* BACK LINK */}
      <div className="border-b border-border bg-white">
        <Container>
          <div className="py-3">
            <Link
              href="/beratung/neue-startseite/adaptive-fuehrung"
              className="inline-flex items-center gap-1.5 text-sm text-anthrazit-80 transition-colors hover:text-anthrazit"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Adaptive Führung &amp; Organisation
            </Link>
          </div>
        </Container>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.22)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.08)_0%,transparent_70%)]"
        />
        <Container className="relative grid min-h-[560px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow className="text-tuerkis">Adaptive Führung · Zertifizierung</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
                Agile Leadership Certificate
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Das umfassende 6–8-Wochen-Programm für Führungskräfte, die Agilität und KI-Ära-Leadership als
                Haltung — nicht nur als Methode — entwickeln wollen.
              </p>
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Programm anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/adaptive-fuehrung"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Zur Säule
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20">
              <Image
                src="/images/agile-organisationsentwicklung/iterative_transformation_claudia_thonet_svenja_hofert_1200px.png"
                alt="Agile Leadership Certificate"
                fill
                sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PROGRAMMMODULE */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Programmmodule"
            title="Vier Module — eine Haltung"
            lead="Jedes Modul baut aufeinander auf: von der Führungshaltung über KI-Leadership bis zur konkreten Outcome-Steuerung."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {MODULES.map((module, i) => (
              <Reveal key={module.number} delay={i * 80}>
                <div className="flex h-full gap-5 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <div className="shrink-0">
                    <span className="text-3xl font-bold text-tuerkis/30 leading-none">{module.number}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold leading-snug text-anthrazit">{module.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{module.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FÜR WEN + DETAILS */}
      <Section bg="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Für wen" title="Wer dieses Programm absolviert" />
              <div className="flex flex-col gap-3 mt-2">
                {FUER_WEN.map((item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <p className="text-sm leading-snug text-anthrazit-80">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Programmdetails" title="Was Sie erwartet" />
              <div className="flex flex-col gap-3 mt-2">
                {DETAILS.map((item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                      <p className="text-sm leading-snug text-anthrazit-80">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* TRUST BADGES */}
          <Reveal>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-anthrazit shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <div className="bg-anthrazit py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow className="text-tuerkis">Nächster Schritt</Eyebrow>
            <h2 className="max-w-[28ch] text-3xl font-bold leading-tight text-white md:text-4xl">
              Programm anfragen
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/65 md:text-base">
              Inhouse oder offene Gruppe — wir beraten Sie gerne, welcher Einstieg für Ihr Führungsteam sinnvoll ist.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Programm anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/adaptive-fuehrung"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Weitere Angebote dieser Säule
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
