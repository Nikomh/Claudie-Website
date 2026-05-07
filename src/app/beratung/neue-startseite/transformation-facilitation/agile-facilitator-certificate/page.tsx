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
  title: "Agile Facilitator Certificate · Claudia Thonet",
  description:
    "Die 3–4-monatige Facilitation-Ausbildung — für alle, die Workshops, Retrospektiven und Transformationsprozesse wirkungsvoller moderieren wollen. BDVT-zertifiziert.",
  robots: { index: false, follow: false },
};

const MODULES = [
  {
    title: "Facilitation-Grundlagen",
    body: "Gruppendynamik, Rollenklarheit und das Handwerk der professionellen Moderation.",
  },
  {
    title: "Retrospektiven und Lernformate",
    body: "Rückblicke und Lernformate gestalten, die echte Erkenntnisse erzeugen.",
  },
  {
    title: "Hybride und verteilte Facilitation",
    body: "Remote, hybrid und asynchron: wie gute Moderation auch auf Distanz funktioniert.",
  },
  {
    title: "KI-gestützte Workshopgestaltung",
    body: "Praktische KI-Tools für Agenda, Dokumentation, Synthese und Vorbereitung.",
  },
];

const FUER_WEN = [
  "Scrum Master und agile Rollen",
  "Moderator:innen und Trainer:innen",
  "HR und OD-Professionals",
  "Team- und Projektleiter:innen",
];

const DETAILS = [
  "3–4 Monate",
  "Blended Learning",
  "BDVT-zertifiziert",
  "50+ Stunden",
  "Praxisprojekt",
  "Inhouse oder offene Gruppe",
];

const TRUST_BADGES = [
  "BDVT-zertifiziert",
  "3–4 Monate",
  "50+ Stunden",
  "Praxisorientiert",
];

export default function AgileFacilitatorCertificatePage() {
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
              <Eyebrow className="text-tuerkis">Facilitation &amp; Change · Zertifizierung</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
                Agile Facilitator Certificate
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Die 3–4-monatige Facilitation-Ausbildung — für alle, die Workshops, Retrospektiven und Transformationsprozesse wirkungsvoller moderieren wollen. BDVT-zertifiziert.
              </p>
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Ausbildung anfragen <ArrowRight className="h-4 w-4" aria-hidden />
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
                src="/images/photos/Teamarbeit1_030124.jpg"
                alt="Agile Facilitator Certificate — Claudia Thonet"
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
            title="Vier Module — vom Grundlagenhandwerk zur KI-gestützten Praxis"
            lead="Ein kompakter, praxisnaher Lernpfad für alle, die Facilitation als professionelles Werkzeug beherrschen wollen."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {MODULES.map((module, i) => (
              <Reveal key={module.title} delay={i * 80}>
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

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-anthrazit shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* FÜR WEN + DETAILS */}
      <Section bg="section">
        <Container>
          <SectionHeading
            eyebrow="Details"
            title="Für wen und wie"
            lead="Die Ausbildung richtet sich an alle, die Gruppen und Prozesse regelmäßig begleiten — und dabei professioneller werden wollen."
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
            {/* Programmdetails */}
            <div className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-anthrazit">Programmdetails</h3>
              <ul className="flex flex-col gap-2.5">
                {DETAILS.map((item) => (
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
              Bereit für professionelle Facilitation?
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/80 md:text-base">
              Wir besprechen Ihre Situation und klären, ob die Ausbildung der richtige nächste Schritt ist — ohne Verpflichtung.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all hover:bg-white/90"
              >
                Ausbildung anfragen <ArrowRight className="h-4 w-4" aria-hidden />
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
