import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Users, BookOpen, Target } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "AI-Training: KI für Coaches – Ankündigung | Claudia Thonet",
  description:
    "Neues AI-Training für Coaches: KI reflektiert, praxisnah und verantwortungsvoll in die Coach-Arbeit integrieren. Zwei halbe Tage online mit Mini-Pilot im eigenen Arbeitskontext.",
  alternates: { canonical: "/ausbildungen/ki-fuer-coaches/newsletter/" },
};

export default function KiFuerCoachesNewsletterPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Ausbildungen", href: "/ausbildungen" },
          { label: "KI für Coaches", href: "/ausbildungen/ki-fuer-coaches" },
          { label: "Ankündigung" },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="bg-anthrazit py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-widest text-tuerkis">
                  Neues Angebot
                </span>
              </div>
              <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
                KI für Coaches –
                <span className="mt-2 block text-tuerkis">reflektiert und praxisnah</span>
              </h1>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/75 md:text-lg">
                Zwei halbe Tage online, mit Mini-Pilot im eigenen Arbeitskontext.
                Kein KI-Hype, keine Toolshow: ein Training für professionelle Anwendung.
              </p>

              {/* Quick jump nav */}
              <nav aria-label="Seitenabschnitte" className="flex flex-wrap justify-center gap-2 pt-2">
                {[
                  { label: "Ablauf", href: "#ablauf" },
                  { label: "Ergebnisse", href: "#ergebnisse" },
                  { label: "Für wen", href: "#fuer-wen" },
                  { label: "Interesse anmelden", href: "#cta" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/70 transition hover:border-tuerkis/50 hover:text-tuerkis"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* ── Einleitung ─────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-anthrazit-80">
                KI eröffnet Coaches, Facilitator:innen und Trainer:innen neue Möglichkeiten –
                Workshops vorbereiten, Gedanken strukturieren, Perspektiven erweitern.
                Gleichzeitig gilt gerade hier besondere Sorgfalt: Vertraulichkeit,
                Beziehungsgestaltung und professionelle Verantwortung lassen sich nicht automatisieren.
              </p>
              <p className="text-base font-semibold text-anthrazit">
                Deshalb gibt es jetzt dieses Training.
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Angebot ────────────────────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container className="max-w-3xl">
            <div className="rounded-[var(--radius-lg)] border border-tuerkis/20 bg-tuerkis/5 p-8 md:p-10">
              <Eyebrow className="text-tuerkis">AI-Training</Eyebrow>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
                KI für Coaches
              </h2>
              <p className="mt-2 text-sm font-medium text-tuerkis">
                Online-Workshop · 2 halbe Tage · Transferwoche mit Mini-Pilot
              </p>

              <div className="mt-6 lg:flex lg:items-start lg:gap-8">
                <div className="flex-1">
                  <p className="text-base leading-relaxed text-anthrazit-80">
                    Ein Workshop für Coaches, Agile Coaches, Facilitator:innen und Trainer:innen,
                    die KI reflektiert, praxisnah und verantwortungsvoll in ihre Arbeit integrieren möchten.
                  </p>
                  <p className="mt-4 text-base font-semibold italic text-anthrazit">
                    Wie kann KI Coach-Arbeit sinnvoll unterstützen, ohne Wahrnehmung,
                    Haltung oder Verantwortung auszulagern?
                  </p>
                </div>

                {/* Spannungsfeld illustration */}
                <figure className="mt-6 lg:mt-0 lg:w-52 lg:shrink-0">
                  <div className="relative aspect-square overflow-hidden rounded-[var(--radius-md)]">
                    <Image
                      src="/images/ki-fuer-coaches/spannungsfeld.png"
                      alt="Das Spannungsfeld: Wie unterstützt KI – ohne Verantwortung auszulagern? Drei Pole: KI-Möglichkeiten, Datenschutz und Sicherheit, Professionelle Haltung."
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 208px, 100vw"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Format / Ablauf ─────────────────────────────────────── */}
      <Reveal>
        <Section id="ablauf">
          <Container className="max-w-3xl">
            <Eyebrow>Ablauf</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
              Drei Phasen. Ein roter Faden.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-anthrazit-80">
              Zwei halbe Tage im Abstand von einer Woche – mit einem Mini-Pilot dazwischen.
            </p>

            {/* Phasenflow illustration */}
            <figure className="mt-6 mb-8">
              <div className="relative w-full overflow-hidden rounded-[var(--radius-md)] border border-border bg-white" style={{ aspectRatio: "2/1" }}>
                <Image
                  src="/images/ki-fuer-coaches/phasenflow.png"
                  alt="Ablaufübersicht: Phase 1 mit Orientierung und Use Case, Transferwoche als Mini-Pilot zum bewusst kleinen Starten, Phase 2 mit Auswerten und Integrieren."
                  fill
                  className="object-contain p-4"
                  sizes="(min-width: 768px) 672px, 100vw"
                />
              </div>
            </figure>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Target,
                  title: "Teil 1: Orientierung und sicherer Use Case",
                  body: "Wir klären, welche Rollen KI in der Coach-Arbeit sinnvoll einnehmen kann und wo Grenzen liegen. Mit einer Governance-Ampel lernen die Teilnehmenden, datenschutz- und verantwortungsbewusste Entscheidungen zu treffen. Jede:r wählt einen kleinen, niedrigsensiblen Use Case aus der eigenen Praxis und formuliert mit CRISP einen klaren KI-Auftrag.",
                },
                {
                  icon: Sparkles,
                  title: "Transferwoche: Mini-Pilot im eigenen Arbeitskontext",
                  body: "Zwischen den Terminen testen die Teilnehmenden ihren Use Case bewusst klein: kein großes Projekt, keine sensiblen Coachingdaten – sondern ein sicherer Praxistest mit überschaubarem Aufwand.",
                },
                {
                  icon: BookOpen,
                  title: "Teil 2: Auswerten, verbessern, integrieren",
                  body: "Im zweiten Termin werden Erfahrungen ausgewertet, KI-Outputs kritisch geprüft, Prompts verbessert und persönliche Spielregeln für die weitere Nutzung entwickelt.",
                },
              ].map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <Reveal key={phase.title} delay={i * 60}>
                    <div
                      className={`flex items-start gap-5 rounded-[var(--radius-md)] border p-5 shadow-sm ${
                        i === 1 ? "border-tuerkis/20 bg-tuerkis/5" : "border-border bg-white"
                      }`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                        <Icon className="h-5 w-5 text-tuerkis" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-semibold text-anthrazit">{phase.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-anthrazit-80">{phase.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Takeaways ────────────────────────────────────────── */}
      <Reveal>
        <Section id="ergebnisse" bg="anthrazit">
          <Container className="max-w-3xl">
            <Eyebrow className="text-tuerkis-50">Ergebnisse</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Was du konkret mitnimmst
            </h2>

            <div className="mt-8 lg:flex lg:items-start lg:gap-10">
              {/* Was du mitnimmst illustration */}
              <figure className="mb-8 lg:mb-0 lg:w-72 lg:shrink-0">
                <div className="relative overflow-hidden rounded-[var(--radius-md)] bg-white/5" style={{ aspectRatio: "9/5" }}>
                  <Image
                    src="/images/ki-fuer-coaches/was-du-mitnimmst.png"
                    alt="Das KI-Toolkit mit fünf konkreten Werkzeugen: Getesteter Mini-Use-Case, Verbesserter Prompt, Governance-Ampel, KI-Output-Checkliste und Persönliche KI-Routine."
                    fill
                    className="object-contain p-3"
                    sizes="(min-width: 1024px) 288px, 100vw"
                  />
                </div>
              </figure>

              <ul className="flex flex-col gap-3">
                {[
                  "Einen getesteten Mini-Use-Case aus der eigenen Praxis",
                  "Einen verbesserten Prompt für einen konkreten Coach-Arbeitsschritt",
                  "Eine Governance-Ampel für sensible Nutzungssituationen",
                  "Eine Checkliste zur Prüfung von KI-Outputs",
                  "Erste Bausteine für eine persönliche KI-Routine",
                ].map((item) => (
                  <Reveal key={item} delay={60}>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <span className="text-sm leading-relaxed text-white/80">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Für wen ─────────────────────────────────────────── */}
      <Reveal>
        <Section id="fuer-wen">
          <Container className="max-w-3xl">
            <Eyebrow>Zielgruppe</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
              Für wen ist das Training?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-anthrazit-80">
              Für Menschen, die KI nicht unkritisch übernehmen, aber auch nicht aus Unsicherheit
              ignorieren möchten.
            </p>

            <div className="mt-6 lg:flex lg:items-start lg:gap-8">
              <div className="flex-1">
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Agile Coaches",
                    "Coaches und interne Berater:innen",
                    "Facilitator:innen und Moderator:innen",
                    "Trainer:innen und Learning Professionals",
                    "Organisationsentwickler:innen",
                    "Menschen, die Teams oder Veränderung begleiten",
                  ].map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 shadow-sm"
                    >
                      <Users className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <span className="text-sm font-medium text-anthrazit">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zielgruppencluster illustration */}
              <figure className="mt-6 lg:mt-0 lg:w-52 lg:shrink-0">
                <div className="relative aspect-square overflow-hidden rounded-[var(--radius-md)] border border-border bg-white">
                  <Image
                    src="/images/ki-fuer-coaches/zielgruppencluster.png"
                    alt="Zielgruppencluster: Agile Coach, Facilitator, Trainer:in, Organisationsentwickler:in und interne Berater:innen – alle begleiten Menschen und Teams in Veränderung."
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 1024px) 208px, 100vw"
                  />
                </div>
              </figure>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Abgrenzung ────────────────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container className="max-w-3xl">
            <div className="rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-tuerkis" aria-hidden />
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-anthrazit">
                    Keine Toolshow. Kein Prompt-Trick-Training.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-anthrazit-80">
                    Es geht nicht darum, Coaching zu automatisieren oder möglichst viele
                    KI-Anwendungen vorzuführen. Der Fokus liegt auf professioneller Anwendung:
                    Wo hilft KI wirklich? Was bleibt menschliche Verantwortung? Was gehört
                    nicht in ein KI-Tool?
                  </p>
                </div>

                {/* Governance Ampel illustration */}
                <figure className="hidden md:block w-24 shrink-0">
                  <div className="relative overflow-hidden rounded-[var(--radius-sm)]" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src="/images/ki-fuer-coaches/governance-ampel.png"
                      alt="KI-Governance-Ampel: Rot für STOP bei vertraulichen Daten, Gelb für PRÜFEN bei unklaren Situationen, Grün für GO bei Vorbereitung und Recherche."
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Reveal>
        <Section id="cta">
          <Container className="max-w-3xl">
            <div className="rounded-[var(--radius-lg)] border border-tuerkis/20 bg-tuerkis/5 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
                Interesse am AI-Training?
              </h2>
              <p className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-anthrazit-80">
                Ein Workshop für reflektierte KI-Anwendung – kein Hype-Format, sondern ein
                praxisnaher Einstieg für Coaches, die professionell mit KI arbeiten möchten.
              </p>
              <p className="mx-auto mt-2 text-sm text-anthrazit-80/70">
                Für Einzelpersonen, Teams und Weiterbildungsgruppen. Online, in zwei halben Tagen
                mit Transferphase.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80 sm:w-auto"
                >
                  Interesse anmelden <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/ausbildungen/ki-fuer-coaches"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-border px-8 text-sm font-semibold text-anthrazit transition-all hover:border-tuerkis hover:text-tuerkis sm:w-auto"
                >
                  Alle Details zum Training
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </>
  );
}
