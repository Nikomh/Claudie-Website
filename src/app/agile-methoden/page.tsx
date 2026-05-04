import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterStripe } from "@/components/sections/NewsletterStripe";
import { PhaseTabs } from "./PhaseTabs";
import { PHASES } from "./phases";

export const metadata: Metadata = {
  title: "Agile Methoden Übersicht — Interaktiv & Visuell · Claudia Thonet",
  description:
    "Agile Methoden-Übersicht nach dem TPDCA-Zyklus: Think New, Plan, Do, Check, Act — mit Scrum, Kanban, OKRs, Design Thinking, Retrospektiven und mehr.",
  alternates: { canonical: "/agile-methoden/" },
};

const KEY_METHODS = [
  {
    title: "Scrum",
    description:
      "Das verbreitetste agile Framework: iterative Sprints, klare Rollen (Product Owner, Scrum Master, Dev Team) und definierte Ceremonies. Ideal für Produktentwicklung und komplexe Projekte.",
    phase: "Do",
    tags: ["Framework", "Iteration", "Rollen"],
  },
  {
    title: "Kanban",
    description:
      "Workflow-Visualisierung aus dem Lean Management. Arbeit wird auf einem Board sichtbar gemacht, WIP-Limits vermeiden Überlastung. Für kontinuierliche Prozesse geeignet.",
    phase: "Do",
    tags: ["Visualisierung", "Flow", "Lean"],
  },
  {
    title: "OKRs",
    description:
      "Objectives & Key Results: modernes Zielsetzungs-Framework, das klassische KPIs ersetzt. Verbindet Teamarbeit mit der Organisationsvision — quartalsweise überprüft.",
    phase: "Think New",
    tags: ["Ziele", "Strategie", "Alignment"],
  },
  {
    title: "Design Thinking",
    description:
      "Systematischer, nutzerzentrierter Prozess für komplexe Herausforderungen: Empathize, Define, Ideate, Prototype, Test. Fördert Kreativität und Kundenzentrierung.",
    phase: "Think New",
    tags: ["Innovation", "Nutzerzentriert", "Kreativität"],
  },
  {
    title: "Retrospektiven",
    description:
      "Das wichtigste Lernwerkzeug agiler Teams: nach jedem Sprint oder Zyklus gemeinsam reflektieren, was gut lief, was nicht und was konkret verbessert wird.",
    phase: "Act",
    tags: ["Lernen", "Reflexion", "Verbesserung"],
  },
  {
    title: "Customer Journey Map",
    description:
      "Visualisiert das gesamte Kundenerlebnis über alle Touchpoints — zeigt Schmerzpunkte und Chancen auf. Grundlage für kundenzentrisches Produkt- und Service-Design.",
    phase: "Think New",
    tags: ["Customer Centricity", "UX", "Service Design"],
  },
];

export default function AgileMethodenPage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            {/* Left: headline block */}
            <div className="max-w-[660px]">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-tuerkis"
                    aria-hidden
                  />
                  <Eyebrow className="text-tuerkis-50">
                    Wissen &amp; Methoden
                  </Eyebrow>
                </div>
              </Reveal>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
                <Reveal as="span" className="block">
                  Agile Methoden.
                </Reveal>
                <Reveal as="span" delay={120} className="block text-tuerkis">
                  Übersichtlich.
                </Reveal>
                <Reveal
                  as="span"
                  delay={240}
                  className="block text-tuerkis-50"
                >
                  Anwendbar.
                </Reveal>
              </h1>

              <Reveal delay={360}>
                <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                  Alle wichtigen agilen Methoden und Frameworks — übersichtlich
                  nach dem TPDCA-Zyklus geordnet. Von Scrum und Kanban bis
                  Design Thinking und Retrospektiven.
                </p>
              </Reveal>

              <Reveal delay={480}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/toolbox"
                    className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis"
                  >
                    Zur Toolbox
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="/downloadbereich"
                    className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Methoden downloaden
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: phase pills visual overview */}
            <Reveal delay={300} className="hidden lg:flex lg:flex-col lg:gap-3">
              {PHASES.map((phase, i) => {
                const PhaseIcon = phase.icon;
                return (
                  <div
                    key={phase.id}
                    className={`flex items-center gap-3 rounded-full ${phase.color} px-5 py-3`}
                    style={{ opacity: 1 - i * 0.08 }}
                  >
                    <PhaseIcon className="h-4 w-4 text-white" aria-hidden />
                    <span className="text-sm font-semibold text-white">
                      {phase.label}
                    </span>
                    <span className="ml-1 text-xs text-white/70">
                      — {phase.title}
                    </span>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TPDCA cycle — interactive tabs (client component)                   */}
      {/* ------------------------------------------------------------------ */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="TPDCA-Zyklus"
              title="Methoden nach Phase"
              lead="Klicke auf eine Phase um die passenden Methoden zu sehen."
            />
            <PhaseTabs />
          </Container>
        </Section>
      </Reveal>

      {/* ------------------------------------------------------------------ */}
      {/* Key methods deep dive                                               */}
      {/* ------------------------------------------------------------------ */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading
              eyebrow="Die wichtigsten Methoden"
              title="6 Methoden im Überblick"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {KEY_METHODS.map((method, i) => (
                <Reveal key={method.title} delay={i * 60}>
                  <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-sm">
                    {/* Phase badge */}
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-tuerkis/10 px-3 py-1 text-xs font-semibold text-tuerkis">
                      {method.phase}
                    </span>

                    <h3 className="text-lg font-bold text-anthrazit">
                      {method.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-anthrazit-80">
                      {method.description}
                    </p>

                    {/* Tags */}
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {method.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-bg-section px-2.5 py-1 text-xs font-medium text-anthrazit-80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ------------------------------------------------------------------ */}
      {/* CTA to courses                                                       */}
      {/* ------------------------------------------------------------------ */}
      <Reveal>
        <Section>
          <Container>
            <div className="flex flex-col items-center gap-6 rounded-[var(--radius-lg)] border border-border bg-white px-8 py-14 text-center shadow-sm md:px-16">
              <div className="flex flex-col gap-3">
                <Eyebrow>Ausbildungen &amp; Trainings</Eyebrow>
                <h2 className="text-2xl font-bold text-anthrazit md:text-3xl">
                  Diese Methoden in der Praxis lernen
                </h2>
                <p className="mx-auto max-w-[52ch] text-sm leading-relaxed text-anthrazit-80 md:text-base">
                  Theorie ist der erste Schritt — in unseren Ausbildungen
                  bringst du agile Methoden live in dein Team und deine
                  Organisation. Zertifiziert, praxisnah und direkt anwendbar.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/agile-ausbildungen/agiler-coach"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis"
                >
                  Ausbildungen ansehen
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/beratung"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-anthrazit/20 bg-white px-6 py-3 text-sm font-semibold text-anthrazit transition-all hover:border-anthrazit/40 hover:bg-bg-section focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anthrazit"
                >
                  Kostenlos beraten lassen
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ------------------------------------------------------------------ */}
      {/* Newsletter                                                           */}
      {/* ------------------------------------------------------------------ */}
      <Reveal>
        <NewsletterStripe />
      </Reveal>
    </>
  );
}
