import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "KI-Ära Leadership Masterclass — Adaptive Führung · Claudia Thonet",
  description:
    "Zwei intensive Tage — Führungskompetenzen für die KI-Ära: Entscheidungen unter Unsicherheit, Rollen im Wandel, psychologische Sicherheit und KI-Adoption führen.",
  robots: { index: false, follow: false },
};

const MODULES = [
  {
    title: "Führen in der KI-Ära",
    body: "Was KI an Führung verändert: Rollen, Entscheidungslogik, Erwartungen.",
  },
  {
    title: "Entscheidungen in Komplexität",
    body: "Schneller entscheiden ohne falsche Gewissheit — Frameworks für Führungsteams.",
  },
  {
    title: "Psychologische Sicherheit aufbauen",
    body: "Die Voraussetzung für Innovation, Lernen und Fehlerkultur.",
  },
  {
    title: "KI-Adoption führen",
    body: "Wie Führung den Unterschied macht: zwischen Hype und nachhaltigem Nutzen.",
  },
  {
    title: "Change Communication",
    body: "Die richtigen Worte in Unsicherheit: Menschen durch Transformation führen.",
  },
  {
    title: "Führungsreflexion & Peer Learning",
    body: "Eigene Führungsrolle im KI-Zeitalter reflektieren und entwickeln.",
  },
];

const FUER_WEN = [
  "Führungskräfte aller Ebenen, die Transformation verantworten",
  "Teams vor oder in KI-Einführungsprozessen",
  "HR und OD-Professionals mit Führungsverantwortung",
  "Transformation Sponsors",
];

const FORMAT = [
  "Präsenz oder Live-Online",
  "2 Tage, ca. 16 Stunden",
  "Gruppenarbeit, Reflexion, Best Practices",
  "Inhouse auf Anfrage",
];

export default function KiAeraLeadershipPage() {
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
              <Eyebrow className="text-tuerkis">Adaptive Führung · Masterclass</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
                KI-Ära Leadership Masterclass
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Zwei intensive Tage — Führungskompetenzen für die KI-Ära: Entscheidungen unter Unsicherheit, Rollen
                im Wandel, psychologische Sicherheit und KI-Adoption führen.
              </p>
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Anmelden / Anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/adaptive-fuehrung"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Zur Säule Adaptive Führung
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20">
              <Image
                src="/images/photos/_LFP4451.jpg"
                alt="KI-Ära Leadership Masterclass"
                fill
                sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* INHALTE */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Inhalte"
            title="Was Sie in zwei Tagen lernen"
            lead="Sechs Module, die Führung in der KI-Ära greifbar und anwendbar machen."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module, i) => (
              <Reveal key={module.title} delay={i * 60}>
                <div className="flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <div className="h-1 w-8 rounded-full bg-tuerkis" />
                  <h3 className="font-semibold leading-snug text-anthrazit">{module.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{module.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FÜR WEN + FORMAT */}
      <Section bg="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Für wen" title="Wer von dieser Masterclass profitiert" />
              <div className="flex flex-col gap-3 mt-2">
                {FUER_WEN.map((item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                      <p className="text-sm leading-snug text-anthrazit-80">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Format" title="Wie die Masterclass läuft" />
              <div className="flex flex-col gap-3 mt-2">
                {FORMAT.map((item, i) => (
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
        </Container>
      </Section>

      {/* FINAL CTA */}
      <div className="bg-tuerkis py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-[28ch] text-3xl font-bold leading-tight text-white md:text-4xl">
              Masterclass buchen oder anfragen
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/80 md:text-base">
              Inhouse oder als offene Gruppe — wir finden das Format, das zu Ihrer Situation passt.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/adaptive-fuehrung"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/40 px-6 text-sm font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
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
