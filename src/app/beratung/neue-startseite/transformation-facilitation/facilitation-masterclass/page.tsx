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
  title: "Transformation Facilitation Masterclass · Claudia Thonet",
  description:
    "Zwei intensive Tage — Workshops, Retrospektiven und Transformationsinterventionen wirkungsvoller gestalten. Mit KI als Werkzeug, nicht als Ersatz.",
  robots: { index: false, follow: false },
};

const MODULES = [
  {
    title: "Facilitation als Transformationswerkzeug",
    body: "Warum gute Facilitation der entscheidende Hebel für Adoption und Veränderung ist.",
  },
  {
    title: "Workshop-Design für die KI-Ära",
    body: "Hybride und verteilte Gruppen effektiv moderieren — mit KI-Unterstützung für Vorbereitung und Nachbereitung.",
  },
  {
    title: "Retrospektiven, die Lernen erzeugen",
    body: "Rückblicke gestalten, die echte Erkenntnisse produzieren statt Pflichttermine abzuhaken.",
  },
  {
    title: "Schwierige Gruppen und Konflikte",
    body: "Wie Sie mit Widerstand, Dominanz und Schweigen in Gruppen professionell umgehen.",
  },
  {
    title: "Stakeholder-Arbeit und Entscheidungsfacilitation",
    body: "Wichtige Entscheidungen gemeinsam erarbeiten — ohne Drama und Zeitverlust.",
  },
  {
    title: "KI-gestützte Facilitation-Praxis",
    body: "Praktische Tools: KI für Agenda-Design, Synthese, Dokumentation und Lernschleifen.",
  },
];

const FUER_WEN = [
  "Agile Coaches und Scrum Master",
  "Moderator:innen und Trainer:innen",
  "Change Manager und HR",
  "Führungskräfte, die Gruppen führen",
];

const FORMAT = [
  "2 Tage Intensiv",
  "Präsenz oder Live-Online",
  "Max. 14 Teilnehmer:innen",
  "Inhouse auf Anfrage",
  "Praxisübungen und Peer Feedback",
];

export default function FacilitationMasterclassPage() {
  return (
    <>
      {/* BACK LINK */}
      <div className="border-b border-border bg-white">
        <Container>
          <div className="py-3">
            <Link
              href="/beratung/neue-startseite/transformation-facilitation"
              className="inline-flex items-center gap-1.5 text-sm text-anthrazit-80 transition-colors hover:text-anthrazit"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Menschenzentrierte Transformation &amp; Facilitation
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
        <Container className="relative grid min-h-[520px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow className="text-tuerkis">Facilitation &amp; Change · Masterclass</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
                Transformation Facilitation Masterclass
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Zwei intensive Tage — Workshops, Retrospektiven und Transformationsinterventionen wirkungsvoller gestalten. Mit KI als Werkzeug, nicht als Ersatz.
              </p>
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/transformation-facilitation"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Alle Programme
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20">
              <Image
                src="/images/agile-organisationsentwicklung/Agile_Organisationsentwicklung_Claudia_Thonet.jpg"
                alt="Transformation Facilitation Masterclass — Claudia Thonet"
                fill
                sizes="35vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* INHALTE */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Inhalte"
            title="Sechs Module — vom Handwerk zur Wirkung"
            lead="Zwei intensive Tage mit Praxisübungen, Peer Feedback und direkter Anwendbarkeit — ab dem nächsten Workshop."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module, i) => (
              <Reveal key={module.title} delay={i * 60}>
                <div className="flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tuerkis/10 text-xs font-bold text-tuerkis">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-semibold leading-snug text-anthrazit">{module.title}</h3>
                  </div>
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
          <SectionHeading
            eyebrow="Details"
            title="Für wen und wie"
            lead="Die Masterclass richtet sich an alle, die Gruppen und Transformationsprozesse professionell begleiten — und besser werden wollen."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Für wen */}
            <div className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-anthrazit">Für wen</h3>
              <ul className="flex flex-col gap-2.5">
                {FUER_WEN.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                    <span className="text-sm leading-snug text-anthrazit-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Format */}
            <div className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-anthrazit">Format</h3>
              <ul className="flex flex-col gap-2.5">
                {FORMAT.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                    <span className="text-sm leading-snug text-anthrazit-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <div className="bg-tuerkis py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-[28ch] text-3xl font-bold leading-tight text-white md:text-4xl">
              Bereit für wirkungsvollere Facilitation?
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/80 md:text-base">
              Wir besprechen Ihre Situation und ob die Masterclass der richtige nächste Schritt ist — ohne Verpflichtung.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all hover:bg-white/90"
              >
                Anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/transformation-facilitation"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/40 px-6 text-sm font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
              >
                Alle Programme
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
