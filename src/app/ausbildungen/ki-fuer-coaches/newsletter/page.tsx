import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Users, BookOpen, Target } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Neu: AI-Training KI f\u00fcr Coaches \u2013 Ank\u00fcndigung | Claudia Thonet",
  description:
    "Neues AI-Training f\u00fcr Coaches: KI reflektiert, praxisnah und verantwortungsvoll in die Coach-Arbeit integrieren. Zwei halbe Tage online mit Mini-Pilot im eigenen Arbeitskontext.",
  alternates: { canonical: "/ausbildungen/ki-fuer-coaches/newsletter/" },
};

export default function KiFuerCoachesNewsletterPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Ausbildungen", href: "/ausbildungen" },
          { label: "KI f\u00fcr Coaches", href: "/ausbildungen/ki-fuer-coaches" },
          { label: "Ank\u00fcndigung" },
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
                AI-Training: KI reflektiert
                <span className="mt-2 block text-tuerkis">in der Coach-Arbeit nutzen</span>
              </h1>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/75 md:text-lg">
                Zwei halbe Tage online, mit Mini-Pilot im eigenen Arbeitskontext. Kein KI-Hype, keine Toolshow: ein Training f\u00fcr reflektierte Anwendung.
              </p>
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
                KI ist l\u00e4ngst im Arbeitsalltag angekommen. Auch f\u00fcr Coaches, Facilitator:innen, Trainer:innen und Organisationsentwickler:innen er\u00f6ffnen sich neue M\u00f6glichkeiten: Workshops vorbereiten, Gedanken strukturieren, Perspektiven erweitern, Kommunikation sch\u00e4rfen oder Transfer sichern.
              </p>
              <p className="text-base leading-relaxed text-anthrazit-80">
                Gleichzeitig ist gerade im Coaching-Kontext Vorsicht wichtig. Nicht alles geh\u00f6rt in ein KI-Tool. Vertraulichkeit, Beziehungsgestaltung, psychologische Sicherheit und professionelle Verantwortung lassen sich nicht automatisieren.
              </p>
              <p className="text-base font-semibold text-anthrazit">
                Deshalb gibt es jetzt ein neues Angebot:
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
                KI f\u00fcr Coaches
              </h2>
              <p className="mt-2 text-sm font-medium text-tuerkis">
                Online-Workshop \u00b7 2 halbe Tage \u00b7 Transferwoche mit Mini-Pilot
              </p>
              <p className="mt-5 text-base leading-relaxed text-anthrazit-80">
                Ein Workshop f\u00fcr Coaches, Agile Coaches, Facilitator:innen und Trainer:innen, die KI reflektiert, praxisnah und verantwortungsvoll in ihre Arbeit integrieren m\u00f6chten. Im Mittelpunkt steht die Frage:
              </p>
              <p className="mt-4 text-base font-semibold italic text-anthrazit">
                Wie kann KI Coach-Arbeit sinnvoll unterst\u00fctzen, ohne Wahrnehmung, Haltung oder Verantwortung auszulagern?
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Format / Ablauf ─────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <Eyebrow>Ablauf</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
              Drei Phasen. Ein roter Faden.
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              {[
                {
                  icon: Target,
                  title: "Teil 1: Orientierung und sicherer Use Case",
                  body: "Wir kl\u00e4ren, welche Rollen KI in der Coach-Arbeit sinnvoll einnehmen kann, wo Grenzen liegen und wie mit einer Governance-Ampel datenschutz- und verantwortungsbewusste Entscheidungen getroffen werden k\u00f6nnen. Die Teilnehmenden w\u00e4hlen einen kleinen, niedrigsensiblen Use Case aus ihrer Praxis und formulieren mit CRISP einen klaren KI-Auftrag.",
                },
                {
                  icon: Sparkles,
                  title: "Transferwoche: Mini-Pilot im eigenen Arbeitskontext",
                  body: "Zwischen den Terminen testen die Teilnehmenden ihren Use Case bewusst klein: kein gro\u00dfes Projekt, keine sensiblen Coachingdaten, sondern ein sicherer Praxistest mit \u00fcberschaubarem Aufwand.",
                },
                {
                  icon: BookOpen,
                  title: "Teil 2: Auswerten, verbessern, integrieren",
                  body: "Im zweiten Termin werden Erfahrungen ausgewertet, KI-Outputs kritisch gepr\u00fcft, Prompts verbessert und pers\u00f6nliche Spielregeln f\u00fcr die weitere Nutzung entwickelt.",
                },
              ].map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <Reveal key={phase.title} delay={i * 60}>
                    <div className={`flex items-start gap-5 rounded-[var(--radius-md)] border p-5 shadow-sm ${i === 1 ? "border-tuerkis/20 bg-tuerkis/5" : "border-border bg-white"}`}>
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
        <Section bg="anthrazit">
          <Container className="max-w-3xl">
            <Eyebrow className="text-tuerkis-50">Ergebnisse</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Was Teilnehmende mitnehmen
            </h2>
            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Einen getesteten Mini-Use-Case aus der eigenen Praxis",
                "Einen verbesserten Prompt f\u00fcr einen konkreten Coach-Arbeitsschritt",
                "Eine Governance-Ampel f\u00fcr sensible Nutzungssituationen",
                "Eine Checkliste zur Pr\u00fcfung von KI-Outputs",
                "Erste Bausteine f\u00fcr eine pers\u00f6nliche KI-Routine",
              ].map((item) => (
                <Reveal key={item} delay={60}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                    <span className="text-sm leading-relaxed text-white/80">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>
      </Reveal>

      {/* ── F\u00fcr wen ─────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <Eyebrow>Zielgruppe</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
              F\u00fcr wen ist das Training?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-anthrazit-80">
              Das Training richtet sich an Menschen, die KI nicht unkritisch \u00fcbernehmen, aber auch nicht aus Unsicherheit ignorieren m\u00f6chten:
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Agile Coaches",
                "Coaches und interne Berater:innen",
                "Facilitator:innen und Moderator:innen",
                "Trainer:innen und Learning Professionals",
                "Organisationsentwickler:innen",
                "Menschen, die Teams oder Ver\u00e4nderung begleiten",
              ].map((role) => (
                <div key={role} className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 shadow-sm">
                  <Users className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                  <span className="text-sm font-medium text-anthrazit">{role}</span>
                </div>
              ))}
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
                <div>
                  <h2 className="text-lg font-bold text-anthrazit">Keine Toolshow. Kein Prompt-Trick-Training.</h2>
                  <p className="mt-3 text-sm leading-relaxed text-anthrazit-80">
                    Es geht nicht darum, Coaching zu automatisieren oder m\u00f6glichst viele KI-Anwendungen vorzuf\u00fchren. Der Fokus liegt auf professioneller Anwendung: Wo hilft KI wirklich? Was bleibt menschliche Verantwortung? Was geh\u00f6rt nicht in ein KI-Tool?
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <div className="rounded-[var(--radius-lg)] border border-tuerkis/20 bg-tuerkis/5 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
                Interesse am AI-Training?
              </h2>
              <p className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-anthrazit-80">
                Wenn du einen Workshop suchst, der KI nicht als Hype-Thema behandelt, sondern als professionelles Assistenzsystem f\u00fcr Coaches, ist dieses Format ein guter n\u00e4chster Schritt.
              </p>
              <p className="mx-auto mt-2 text-sm text-anthrazit-80/70">
                F\u00fcr Teams, Communities oder Weiterbildungsgruppen. Online in zwei halben Tagen plus Transferphase.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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

      {/* ── Signatur ──────────────────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container className="max-w-3xl">
            <div className="text-center">
              <p className="text-base leading-relaxed text-anthrazit-80">
                Herzliche Gr\u00fc\u00dfe,
              </p>
              <p className="mt-2 text-base font-semibold text-anthrazit">
                Claudia Thonet &amp; Team
              </p>
              <p className="mt-1 text-sm text-anthrazit-80">
                Agile Consulting GmbH
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>
    </>
  );
}
