import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, FileCheck, LayoutGrid, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AIReadinessModal } from "@/components/sections/AIReadinessModal";
import { SprintAccordion } from "@/components/sections/SprintAccordion";
import type { AccordionItem } from "@/components/sections/SprintAccordion";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Leadership Sprint — Entscheide, wann KI dir wirklich hilft.",
  description:
    "9 Tage, die deine Entscheidungen verändern. Finde in 2 Minuten heraus, ob der Sprint der richtige Schritt für dich ist.",
  alternates: { canonical: "/ausbildungen/ai-sprint-v2" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "AI Leadership Sprint — Entscheide, wann KI dir wirklich hilft.",
    description:
      "9 Tage, die deine Entscheidungen verändern. Finde in 2 Minuten heraus, ob der Sprint der richtige Schritt ist.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────

const TIMELINE_STEPS = [
  {
    id: "vorbereitung",
    num: "00",
    tag: "3 Wochen vorher",
    title: "Vorbereitung",
    duration: "~2 Std.",
    desc: "KI-Standortbestimmung, Pre-Reading, Vier-Felder-Reflexion, Vorgesetzten-Anker",
    accent: false,
  },
  {
    id: "halbtag1",
    num: "01",
    tag: "Tag 1",
    title: "Halbtag 1",
    duration: "4 Std. online",
    desc: "KI-Realitätscheck, Decision Intelligence, Quick Win am eigenen Führungsfall",
    accent: true,
  },
  {
    id: "uebungswoche",
    num: "02",
    tag: "Tage 2–7",
    title: "Übungswoche",
    duration: "7 Tage",
    desc: "3 echte Praxis-Aufgaben, Strategiezeit, Buddy-Call — im eigenen Alltag",
    accent: false,
    highlight: true,
  },
  {
    id: "halbtag2",
    num: "03",
    tag: "Tag 8",
    title: "Halbtag 2",
    duration: "4 Std. online",
    desc: "Rollenklärung, Decision Architecture, AI Leadership Plan unterzeichnen",
    accent: true,
  },
  {
    id: "nachphase",
    num: "04",
    tag: "Tag 9–90",
    title: "Nachphase",
    duration: "90 Tage",
    desc: "Reunion-Call, persönlicher Check-in, Wirkungsmessung",
    accent: false,
  },
];

const OUTCOMES = [
  {
    icon: Zap,
    title: "Eine KI-Praxis, die du selbst lebst.",
    body: "In der Übungswoche entwickelst du eine konkrete Routine und testest sie 7 Tage im echten Führungsalltag. Du verlässt den Sprint nicht mit einem Vorsatz — mit einer Praxis.",
  },
  {
    icon: LayoutGrid,
    title: "Eine Entscheidungsstruktur für die nächsten 30 Tage.",
    body: "Du weißt, welche drei Entscheidungen du mit KI triffst und welche zwei du bewusst ohne triffst. Diese Klarheit ist das Herzstück des Sprints.",
  },
  {
    icon: FileCheck,
    title: "Ein Compliance-Nachweis — direkt nutzbar.",
    body: "Eine Bestätigung im Sinne von Art. 4 EU AI Act plus ein fertiger Compliance-Brief an deinen Arbeitgeber. Du musst nichts schreiben.",
  },
];

const FAQ: AccordionItem[] = [
  {
    id: "fuer-wen",
    trigger: "Für wen ist dieser Sprint — und für wen nicht?",
    text: "Für Führungskräfte aus dem Mittelstand (50–500 MA) mit erster KI-Erfahrung, aber ohne eigene Entscheidungsstruktur. Nicht geeignet für: IT-Teams, reine Tool-Einführungen oder Führungskräfte, die nicht selbst teilnehmen. Im Zweifel: das 30-Minuten-Gespräch klärt das.",
  },
  {
    id: "zeitaufwand",
    trigger: "Wie viele Stunden sind das insgesamt?",
    text: "8 Stunden synchron (2 × 4 Std. online), ca. 4 Stunden in der Übungswoche (verteilt, nicht geblockt), plus drei kurze Termine in der 90-Tage-Nachphase. Insgesamt etwa 15 Stunden über drei Monate.",
  },
  {
    id: "datenschutz",
    trigger: "Mein Unternehmen hat strenge Datenschutzvorgaben.",
    text: 'Microsoft Copilot Enterprise und Claude Pro Team — beide DSGVO-konform mit AV-Vertrag. Für Banken, Versicherungen und Gesundheitsunternehmen gibt es eine "Regulated"-Variante mit Aleph Alpha.',
  },
  {
    id: "compliance",
    trigger: "Reicht das wirklich für Art. 4 EU AI Act?",
    text: "Ja. Du bekommst eine schriftliche Bestätigung mit Datum, Inhalten und Trainer-Unterschrift — direkt nutzbar für die Compliance-Akte. Für eine unternehmensweite AI-Governance empfehlen wir zusätzlich eine spezialisierte Kanzlei.",
  },
  {
    id: "stornierung",
    trigger: "Was passiert, wenn ich kurzfristig absagen muss?",
    text: "Bis 4 Wochen vorher: kostenfreie Umbuchung. 2–4 Wochen vorher: 50 % Erstattung. Darunter: keine Erstattung, aber du kannst eine Vertretung schicken. Bei Erkrankung entscheiden wir kulant.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.filter((f) => f.text).map((f) => ({
    "@type": "Question",
    name: f.trigger,
    acceptedAnswer: { "@type": "Answer", text: f.text },
  })),
};

// ─────────────────────────────────────────────────────────────────────────────

export default function AISprintV2Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
          Zwei klare Pfade: Gespräch buchen oder erst selbst checken.
          Kein Feature-Katalog — ein einziges Versprechen.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] overflow-hidden bg-anthrazit text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_85%_15%,_#14b4be1a_0%,_transparent_65%)]"
        />
        {/* Faint "9" — decorative only */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-[-2%] select-none font-bold leading-none text-white/[0.03]"
          style={{
            fontFamily: "var(--font-narrow)",
            fontSize: "clamp(220px, 38vw, 520px)",
          }}
        >
          9
        </div>

        <Container className="relative flex min-h-[88vh] flex-col justify-between py-20 md:py-28">
          <div className="max-w-[760px]">
            <Reveal>
              <Eyebrow className="mb-8 block text-tuerkis">
                AI LEADERSHIP SPRINT · CLAUDIA THONET &amp; TEAM
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.07] tracking-tight text-white"
                style={{ fontFamily: "var(--font-narrow)" }}
              >
                Entscheide, wann KI dir wirklich hilft.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-white/60 md:text-xl">
                9 Tage. Keine Keynote. Kein weiteres Tool-Training. Ein
                Arbeitsprozess, der deine KI-Entscheidungen für die nächsten 30
                Tage strukturiert — und EU AI Act Art. 4 erledigt das nebenbei.
              </p>
            </Reveal>
            <Reveal delay={270} className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#gespraech"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "min-h-[52px]",
                )}
              >
                Gespräch vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <AIReadinessModal
                trigger={
                  <button
                    type="button"
                    className="inline-flex min-h-[52px] items-center gap-2 rounded-[var(--radius-sm)] border border-white/20 px-6 text-base font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    KI-Check: Passt das für mich?
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                }
              />
            </Reveal>
          </div>

          {/* Credibility strip */}
          <Reveal delay={420}>
            <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.08] pt-7">
              <span className="text-sm font-semibold text-white/50">
                4,9 / 5 · 120+ Bewertungen
              </span>
              <span className="hidden h-3 w-px bg-white/15 md:block" aria-hidden />
              {["Telekom", "Danone", "H&M", "Sparda-Bank", "Flughafen BER"].map(
                (c) => (
                  <span key={c} className="text-sm text-white/25">
                    {c}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. KI-READINESS CHECK — MODAL ENTRY POINT
          Einladung zum Check mit klarer Preview der 3 Dimensionen.
          Öffnet ein vollständiges Modal mit 12 Fragen und Ergebnis-Dashboard.
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        id="assessment"
        className="scroll-mt-24 border-b border-border bg-bg-section py-14 md:py-16"
      >
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <Reveal>
              <Eyebrow className="mb-3 block">KI-READINESS CHECK</Eyebrow>
              <h2
                className="mb-3 text-2xl font-bold tracking-tight text-anthrazit md:text-3xl"
                style={{ fontFamily: "var(--font-narrow)" }}
              >
                Wo stehst du? Finde es in 5 Minuten heraus.
              </h2>
              <p className="mb-5 max-w-[52ch] text-base text-anthrazit-80">
                12 gezielte Fragen analysieren drei Dimensionen deiner KI-Reife
                — und geben dir einen ehrlichen Befund mit konkreter Empfehlung.
              </p>
              {/* Dimension preview pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Deine KI-Praxis", dot: "bg-tuerkis" },
                  { label: "Deine Führungsrolle", dot: "bg-orange-rot" },
                  { label: "Organisation & Compliance", dot: "bg-anthrazit" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-anthrazit"
                  >
                    <div className={cn("h-1.5 w-1.5 rounded-full", item.dot)} aria-hidden />
                    {item.label}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <AIReadinessModal
                trigger={
                  <button
                    type="button"
                    className="group relative overflow-hidden rounded-[var(--radius-lg)] border-2 border-tuerkis/30 bg-white px-8 py-6 text-left shadow-[0_4px_20px_rgba(20,180,190,0.12)] transition-all duration-200 hover:border-tuerkis/60 hover:shadow-[0_8px_32px_rgba(20,180,190,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2 md:min-w-[240px]"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,_#14b4be12_0%,_transparent_70%)]"
                    />
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em] text-tuerkis">
                      Kostenlos
                    </p>
                    <p
                      className="mb-3 text-lg font-bold text-anthrazit"
                      style={{ fontFamily: "var(--font-narrow)" }}
                    >
                      KI-Check starten
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-tuerkis">
                      12 Fragen · ~5 Min.
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </div>
                  </button>
                }
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. WORUM ES GEHT — MANIFESTO (KOMPAKT)
          Das Argument in 3 Sätzen. Aktiv, konkret, ohne Buzzwords.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-[680px]">
          <Reveal>
            <Eyebrow className="mb-5 block">DAS KONZEPT</Eyebrow>
            <h2
              className="text-3xl font-bold leading-[1.1] tracking-tight text-anthrazit md:text-[2.6rem]"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              KI ist keine IT-Aufgabe. Sie ist eine Führungsaufgabe.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-7 space-y-4 text-[1.05rem] leading-relaxed text-anthrazit-80">
              <p>
                Die meisten KI-Trainings scheitern nicht an der Technologie.
                Sie scheitern daran, dass niemand die Frage stellt: Wann setze
                ich KI ein — und wann bewusst nicht?
              </p>
              <p>
                Diese Entscheidungskompetenz entsteht nicht im Seminar. Sie
                braucht Vorbereitung, echte Anwendung, Reflexion und
                Begleitung. Der Sprint liefert genau das — in 9 Tagen.
              </p>
            </div>
            <div className="mt-8 border-t border-border pt-7">
              <p className="font-semibold text-anthrazit">
                Kein Training. Ein Arbeitsprozess.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. FORMAT — KLARE SCHRITTFOLGE
          Kein verwirrendes "1 · 7 · 1" mehr.
          Eine klare Schritt-für-Schritt-Ansicht mit dem Fokus auf die
          Übungswoche als zentralem Element.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-section py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-3 block">DER ABLAUF</Eyebrow>
            <h2
              className="mb-2 text-3xl font-bold tracking-tight text-anthrazit md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              9 Tage — Schritt für Schritt.
            </h2>
            <p className="mb-12 max-w-[52ch] text-base text-anthrazit-80 md:text-lg">
              Zwei halbe Tage online, eine Woche echte Praxis dazwischen, 90
              Tage Begleitung danach. So sieht der Ablauf konkret aus:
            </p>
          </Reveal>

          {/* Desktop: horizontal stepper */}
          <div className="hidden md:block">
            <Reveal delay={80}>
              {/* Step cards */}
              <div className="relative grid grid-cols-5 gap-3">
                {/* Connecting line */}
                <div
                  aria-hidden
                  className="absolute left-[10%] right-[10%] top-[28px] h-px bg-tuerkis/20"
                />

                {TIMELINE_STEPS.map((s, _i) => (
                  <div key={s.id} className="relative flex flex-col items-center gap-3 text-center">
                    {/* Node */}
                    <div
                      className={cn(
                        "relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold ring-4 ring-bg-section transition-transform duration-200 hover:scale-110",
                        s.accent
                          ? "bg-tuerkis text-white shadow-[0_0_0_4px_rgba(20,180,190,0.2)]"
                          : s.highlight
                          ? "bg-anthrazit text-white"
                          : "bg-white text-anthrazit-80 border border-border",
                      )}
                    >
                      {s.num}
                    </div>

                    {/* Card */}
                    <div
                      className={cn(
                        "w-full rounded-[var(--radius-md)] border p-4 shadow-[0_2px_8px_rgba(51,58,69,0.06)]",
                        s.highlight
                          ? "border-anthrazit/20 bg-anthrazit text-white"
                          : "border-border bg-white",
                      )}
                    >
                      <p
                        className={cn(
                          "mb-0.5 text-xs font-bold uppercase tracking-[0.1em]",
                          s.highlight ? "text-tuerkis-50" : "text-tuerkis",
                        )}
                      >
                        {s.tag}
                      </p>
                      <p
                        className={cn(
                          "text-sm font-bold",
                          s.highlight ? "text-white" : "text-anthrazit",
                        )}
                      >
                        {s.title}
                      </p>
                      <p
                        className={cn(
                          "mt-0.5 text-xs font-semibold",
                          s.highlight ? "text-tuerkis-50" : "text-tuerkis",
                        )}
                      >
                        {s.duration}
                      </p>
                      <p
                        className={cn(
                          "mt-2 text-xs leading-snug",
                          s.highlight ? "text-white/65" : "text-anthrazit-80",
                        )}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-0 md:hidden">
            {TIMELINE_STEPS.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <div className="flex gap-4">
                  {/* Left: node + line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                        s.accent
                          ? "bg-tuerkis text-white"
                          : s.highlight
                          ? "bg-anthrazit text-white"
                          : "border border-border bg-white text-anthrazit-80",
                      )}
                    >
                      {s.num}
                    </div>
                    {i < TIMELINE_STEPS.length - 1 && (
                      <div className="my-1 w-px flex-1 bg-tuerkis/20" />
                    )}
                  </div>

                  {/* Right: content */}
                  <div
                    className={cn(
                      "mb-4 flex-1 rounded-[var(--radius-md)] border p-4",
                      s.highlight
                        ? "border-anthrazit/20 bg-anthrazit"
                        : "border-border bg-white",
                      i === TIMELINE_STEPS.length - 1 && "mb-0",
                    )}
                  >
                    <p
                      className={cn(
                        "text-xs font-bold uppercase tracking-[0.1em]",
                        s.highlight ? "text-tuerkis-50" : "text-tuerkis",
                      )}
                    >
                      {s.tag} · {s.duration}
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 font-bold",
                        s.highlight ? "text-white" : "text-anthrazit",
                      )}
                    >
                      {s.title}
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-sm leading-relaxed",
                        s.highlight ? "text-white/65" : "text-anthrazit-80",
                      )}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. DIE DREI ERGEBNISSE
          Icons als visuelle Anker — nicht dekorativ, sondern als
          sofortiger Kategorie-Erkennungspunkt.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">WAS DU DANACH HAST</Eyebrow>
            <h2
              className="mb-14 max-w-[44ch] text-3xl font-bold leading-[1.1] tracking-tight text-anthrazit md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              Drei konkrete Dinge. Direkt nutzbar.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {OUTCOMES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="group flex h-full flex-col gap-5 rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-[0_2px_8px_rgba(51,58,69,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(51,58,69,0.1)] motion-reduce:hover:translate-y-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tuerkis-50/40 text-tuerkis transition-colors group-hover:bg-tuerkis group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-anthrazit">
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={350}>
            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-10">
              <Link
                href="#gespraech"
                className={buttonVariants({ variant: "primary", size: "md" })}
              >
                Gespräch vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <span className="text-sm text-anthrazit-80">
                30 Min · unverbindlich · kein Pitch
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. FÜR WEN
          Klarer Selbst-Filter — ehrlich und direkt.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-anthrazit py-16 text-white md:py-24">
        <Container className="max-w-[660px]">
          <Reveal>
            <Eyebrow className="mb-7 block text-tuerkis">FÜR WEN</Eyebrow>
            <h2
              className="mb-10 text-3xl font-bold leading-[1.1] text-white md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              Du nickst innerlich bei vier von fünf Punkten — dann reden wir.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="flex flex-col gap-4">
              {[
                "GF oder Bereichsleiter:in · Unternehmen mit 50–500 Mitarbeitenden",
                "Erste KI-Erfahrung vorhanden — aber noch keine eigene Entscheidungsstruktur",
                "Kein Seminar, sondern etwas, das nach dem Sprint im Alltag bleibt",
                "8 Stunden synchron investierbar — verteilt auf zwei Halbtage",
                "Bereit, in der Übungswoche echte Führungsentscheidungen mit KI zu treffen",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tuerkis/20 ring-1 ring-tuerkis/30">
                    <Check className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                  </div>
                  <span className="text-base leading-relaxed text-white/75">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 border-t border-white/10 pt-9">
              <p className="mb-5 text-sm text-white/45">
                Nicht geeignet für: IT-Teams, reine Tool-Einführungen oder wenn du nicht selbst teilnehmen kannst.
              </p>
              <Link
                href="#gespraech"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "min-h-[52px]",
                )}
              >
                Passt das? — Gespräch klären
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. INVESTITION
          Preis früh und klar zeigen — mit kompakten Terminen.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">INVESTITION &amp; TERMINE</Eyebrow>
            <h2
              className="mb-12 text-3xl font-bold tracking-tight text-anthrazit md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              Was es kostet — und was dabei ist.
            </h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            {/* Pricing cards */}
            <Reveal>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Standard",
                    price: "2.000 €",
                    sub: "pro Teilnehmer:in · zzgl. MwSt.",
                    highlight: false,
                    badge: null,
                  },
                  {
                    label: "Early Bird",
                    price: "1.700 €",
                    sub: "bis 4 Wochen vor Sprint · zzgl. MwSt.",
                    highlight: true,
                    badge: "EARLY BIRD",
                  },
                  {
                    label: "Inhouse",
                    price: "ab 14.000 €",
                    sub: "pauschal · 8–12 Personen · zzgl. MwSt.",
                    highlight: false,
                    badge: null,
                  },
                ].map((p) => (
                  <div
                    key={p.label}
                    className={cn(
                      "rounded-[var(--radius-md)] border p-6 shadow-[0_2px_8px_rgba(51,58,69,0.06)]",
                      p.highlight
                        ? "border-tuerkis/30 bg-tuerkis/5"
                        : "border-border bg-white",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-anthrazit-80">
                          {p.label}
                        </p>
                        <p
                          className="mt-1 text-4xl font-bold text-anthrazit"
                          style={{ fontFamily: "var(--font-narrow)" }}
                        >
                          {p.price}
                        </p>
                        <p className="mt-0.5 text-sm text-anthrazit-80">{p.sub}</p>
                      </div>
                      {p.badge && (
                        <span className="shrink-0 rounded-[var(--radius-sm)] bg-tuerkis px-2.5 py-0.5 text-xs font-bold text-white">
                          {p.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* What's included + dates */}
            <Reveal delay={100} className="flex flex-col gap-8">
              {/* Inclusions */}
              <div>
                <p className="mb-3 text-sm font-bold text-anthrazit">
                  Das ist dabei
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "2 × 4 Std. Online-Workshop",
                    "7 Tage Übungswoche mit Begleitung",
                    "90 Tage Nachphase (Reunion · Check-in · Wirkungsmessung)",
                    "Literacy-Bestätigung EU AI Act (Art. 4)",
                    "Compliance-Brief für deinen Arbeitgeber",
                    "AI Leadership Plan (7 Felder, persönlich)",
                    "Knowledge-Owner-PDF für dein Team",
                    "Buddy-Match aus der Cohort",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                        aria-hidden
                      />
                      <span className="text-sm text-anthrazit-80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sprint dates */}
              <div>
                <p className="mb-3 text-sm font-bold text-anthrazit">
                  Nächste Termine
                </p>
                <div className="overflow-hidden rounded-[var(--radius-md)] border border-border shadow-[0_2px_8px_rgba(51,58,69,0.06)]">
                  {[
                    { name: "Q3–2026", d1: "12. Sep.", d2: "19. Sep.", note: "4 / 12 Plätze", urgent: true },
                    { name: "Q4–2026", d1: "21. Nov.", d2: "28. Nov.", note: "Offen", urgent: false },
                    { name: "Q1–2027", d1: "30. Jan.", d2: "6. Feb.",  note: "Offen", urgent: false },
                  ].map((s, i) => (
                    <div
                      key={s.name}
                      className={cn(
                        "flex items-center justify-between gap-4 px-5 py-3.5",
                        i < 2 && "border-b border-border",
                        s.urgent && "bg-tuerkis/[0.04]",
                      )}
                    >
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-tuerkis">
                          {s.name}
                        </p>
                        <p className="text-sm text-anthrazit-80">
                          {s.d1} · {s.d2}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "rounded-[var(--radius-sm)] px-2.5 py-0.5 text-xs font-semibold",
                            s.urgent
                              ? "bg-[#ffe8e0] text-orange-rot"
                              : "bg-bg-section text-anthrazit-80",
                          )}
                        >
                          {s.note}
                        </span>
                        <Link
                          href="#gespraech"
                          className="text-xs font-semibold text-tuerkis hover:underline"
                        >
                          Sichern →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. DER TRAINER
          Person vor Vita — echte Ich-Stimme, spezifisch zum Sprint.
          Text spiegelt Nikolays eigene Sprache und Motivationen wider.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-section py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-[0_8px_32px_rgba(51,58,69,0.14)] ring-1 ring-anthrazit/8">
                <Image
                  src="/images/trainer/nikolay-huse.png"
                  alt="Nikolay Huse, Berater für KI-Transformation bei Claudia Thonet & Team"
                  fill
                  sizes="(max-width: 768px) 80vw, 33vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-6">
              <div>
                <Eyebrow className="mb-3 block">DER TRAINER</Eyebrow>
                <h2
                  className="text-3xl font-bold leading-tight text-anthrazit md:text-4xl"
                  style={{ fontFamily: "var(--font-narrow)" }}
                >
                  Nikolay Huse
                </h2>
                <p className="mt-1.5 text-sm font-semibold text-tuerkis">
                  Berater · Claudia Thonet &amp; Team
                </p>
                <p className="mt-0.5 text-sm text-anthrazit-80">
                  KI-Strategie &amp; Transformation · Agentic Workflows ·
                  Change Architecture &amp; Adoption
                </p>
              </div>

              <div className="space-y-4 text-[1.02rem] leading-relaxed text-anthrazit-80">
                <p>
                  Ich entwickle diesen Sprint, weil ich immer wieder dasselbe
                  sehe: Führungskräfte, die KI eigentlich wollen — und dann
                  zögern. Nicht weil die Technologie zu komplex ist. Sondern
                  weil niemand ihnen gezeigt hat, wann KI eine gute Entscheidung
                  ist und wann sie es nicht ist.
                </p>
                <p>
                  Ich habe erlebt, wie gut gemeinte KI-Initiativen an Widerstand
                  scheitern — nicht weil der Tool-Stack falsch war, sondern weil
                  niemand gefragt hat: Was brauchen die Menschen dahinter,
                  um wirklich mitzugehen? Diese Frage lässt mich nicht los.
                </p>
                <p className="font-semibold text-anthrazit">
                  Deshalb beginne ich nie mit Technologie — sondern damit zu
                  verstehen, wie eine Organisation wirklich funktioniert.
                </p>
              </div>

              {/* Qualification badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "M.Sc. Wirtschaftsinformatik & Digitale Transformation",
                  "AI Integration Expert (Leaders of AI)",
                  "Agiler Coach (Claudia Thonet)",
                  "Agiler Trainer & Facilitator (Claudia Thonet)",
                ].map((b) => (
                  <span
                    key={b}
                    className="rounded-[var(--radius-sm)] border border-border bg-white px-3 py-1.5 text-xs font-semibold text-anthrazit shadow-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. FAQ
          5 Fragen — die 5 wichtigsten Kaufbarrieren.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-[700px]">
          <Reveal>
            <Eyebrow className="mb-4 block">FRAGEN</Eyebrow>
            <h2
              className="mb-12 text-3xl font-bold tracking-tight text-anthrazit md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              Was du noch wissen willst.
            </h2>
          </Reveal>
          <SprintAccordion items={FAQ} multiple />
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          10. FINAL CTA
          Orange-Rot. Klar. Kein Drumherum.
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        id="gespraech"
        className="relative scroll-mt-24 overflow-hidden bg-orange-rot py-24 text-white md:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_75%_50%,_rgba(255,255,255,0.07)_0%,_transparent_65%)]"
        />
        <Container className="relative">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <Reveal>
              <Eyebrow className="mb-5 block text-white/55">
                NÄCHSTER SCHRITT
              </Eyebrow>
              <h2
                className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.05] text-white"
                style={{ fontFamily: "var(--font-narrow)" }}
              >
                30 Minuten. Mehr brauchen wir nicht.
              </h2>
              <p className="mt-5 max-w-[40ch] text-lg text-white/65">
                Kein Pitch. Wir klären, ob der Sprint zu deiner Situation passt
                — und wenn nicht, empfehle ich dir etwas Passendes.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-white px-8 text-base font-bold text-orange-rot shadow-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-rot motion-reduce:hover:translate-y-0"
                >
                  Termin wählen
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <p className="text-sm text-white/45">
                  Oder schreib direkt:{" "}
                  <a
                    href="mailto:nikolay@claudiathonet.de"
                    className="font-semibold text-white/70 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
                  >
                    nikolay@claudiathonet.de
                  </a>
                </p>

                {/* Trust micro-signals */}
                <div className="mt-4 flex flex-col gap-2 border-t border-white/15 pt-5">
                  {[
                    "Kein Verkaufsgespräch — ehrliche Einschätzung",
                    "Wenn es nicht passt: Empfehlung für ein besseres Format",
                    "Nächster freier Termin meist innerhalb von 3–5 Tagen",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2.5 text-sm text-white/55">
                      <div className="h-1 w-1 shrink-0 rounded-full bg-tuerkis" aria-hidden />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
