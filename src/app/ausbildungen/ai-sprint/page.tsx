import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SprintAccordion } from "@/components/sections/SprintAccordion";
import type { AccordionItem } from "@/components/sections/SprintAccordion";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Leadership Sprint — 9 Tage. Kein weiteres Training.",
  description:
    "Ein Arbeitsprozess für Führungskräfte, die KI nicht nur verstehen, sondern anwenden wollen. 2 halbe Tage, 1 Übungswoche, 90 Tage Begleitung. EU AI Act konform.",
  alternates: { canonical: "/ausbildungen/ai-sprint" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "AI Leadership Sprint — 9 Tage. Kein weiteres Training.",
    description:
      "Ein Arbeitsprozess für Führungskräfte, die KI nicht nur verstehen, sondern anwenden wollen.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────

const FAQ: AccordionItem[] = [
  {
    id: "fuer-wen",
    trigger: "Für wen ist dieser Sprint — und für wen nicht?",
    text: "Für Führungskräfte aus dem Mittelstand (50–500 MA), die GF oder Bereichsleiter:in sind und erste KI-Erfahrung mitbringen — aber noch keine eigene Praxis entwickelt haben. Nicht geeignet für: Tool-Einführungen für ganze Belegschaften, IT-Teams oder Führungskräfte, die nicht selbst teilnehmen wollen. Wer unsicher ist: dafür ist das 30-Minuten-Gespräch da.",
  },
  {
    id: "zeitaufwand",
    trigger: "Wie viele Stunden sind das insgesamt?",
    text: "8 Stunden synchron (2 × 4 Std. online), ca. 4 Stunden in der Übungswoche (verteilt auf 7 Tage, nicht geblockt), plus drei kurze Termine in der 90-Tage-Nachphase. Insgesamt etwa 15 Stunden über drei Monate — das entspricht einem Nachmittag pro Monat.",
  },
  {
    id: "datenschutz",
    trigger: "Mein Unternehmen hat strenge Datenschutzvorgaben.",
    text: "Der Tool-Stack ist dafür vorbereitet. Wir arbeiten mit Microsoft Copilot Enterprise und Claude Pro Team — beide DSGVO-konform mit AV-Vertrag. Für Banken, Versicherungen und Gesundheitsunternehmen gibt es eine gesonderte \"Regulated\"-Variante mit Aleph Alpha. Jeder Hands-on-Block beginnt mit einem verbindlichen Daten-Briefing.",
  },
  {
    id: "compliance",
    trigger: "Reicht das wirklich für Art. 4 EU AI Act?",
    text: "Ja. Der Sprint deckt die geforderten Inhalte ab und liefert eine schriftliche Bestätigung mit Datum, Inhalten und Trainer-Unterschrift — direkt nutzbar für die Compliance-Akte. Er ersetzt keine unternehmensweite AI-Governance-Strategie; dafür empfehlen wir eine spezialisierte Kanzlei.",
  },
  {
    id: "stornierung",
    trigger: "Was passiert, wenn ich kurzfristig absagen muss?",
    text: "Bis 4 Wochen vor Sprint: kostenfreie Umbuchung auf den nächsten Termin. 2–4 Wochen vorher: 50 % Erstattung. Darunter: keine Erstattung, aber du kannst eine Vertretung entsenden. Bei plötzlicher Erkrankung entscheiden wir kulant.",
  },
];

const JSON_LD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.filter((f) => f.text).map((f) => ({
    "@type": "Question",
    name: f.trigger,
    acceptedAnswer: { "@type": "Answer", text: f.text },
  })),
};

const JSON_LD_COURSE = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI Leadership Sprint",
  description:
    "9-tägiger Arbeitsprozess für Führungskräfte zur Entwicklung von KI-Entscheidungskompetenz. EU AI Act Art. 4 konform.",
  provider: { "@type": "Organization", name: "Claudia Thonet & Team" },
  courseMode: "online",
  offers: {
    "@type": "Offer",
    price: "2000",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

// ─────────────────────────────────────────────────────────────────────────────

export default function AISprintPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_FAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_COURSE) }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
          Eine Frage, die sitzt. Kein Produktname. Kein Feature-Katalog.
          Der Leser soll innerlich nicken — und weiterlesen wollen.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] overflow-hidden bg-anthrazit text-white">
        {/* Subtle teal radial glow — top right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_10%,_#14b4be18_0%,_transparent_70%)]"
        />
        {/* Faded "9" watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 top-0 select-none text-[45vw] font-bold leading-none text-white/[0.03] lg:text-[32vw]"
          style={{ fontFamily: "var(--font-narrow)" }}
        >
          9
        </div>

        <Container className="relative flex min-h-[90vh] flex-col justify-between py-20 md:py-28">
          <div className="max-w-[780px]">
            <Reveal>
              <Eyebrow className="mb-8 block text-tuerkis">
                AI LEADERSHIP SPRINT · CLAUDIA THONET &amp; TEAM
              </Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1
                className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.06] tracking-tight text-white"
                style={{ fontFamily: "var(--font-narrow)" }}
              >
                Wie viele KI-Trainings hat dein Team dieses Jahr schon gemacht?
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-7 max-w-[50ch] text-xl leading-relaxed text-white/60 md:text-2xl">
                Und wie viele haben deine Art zu entscheiden wirklich verändert?
              </p>
            </Reveal>
            <Reveal delay={320} className="mt-10 flex flex-wrap gap-3">
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
              <Link
                href="#sprint"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-[var(--radius-sm)] px-6 text-base font-semibold text-white/55 transition-colors hover:text-white/90"
              >
                Was ist das hier?
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>

          {/* Credibility strip — bottom of hero */}
          <Reveal delay={480}>
            <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-8">
              <span className="text-sm font-semibold text-white/55">
                4,9 / 5 · 120+ Bewertungen · Claudia Thonet &amp; Team
              </span>
              <span className="hidden h-3 w-px bg-white/15 md:block" aria-hidden />
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {["Telekom", "Danone", "H&M", "Sparda-Bank", "Flughafen BER"].map(
                  (c) => (
                    <span key={c} className="text-sm text-white/30">
                      {c}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. MANIFESTO
          Das eigentliche Argument — in Prosa.
          Klare Aussagen, aktive Sätze, kein Buzzword-Salat.
          Nutzen vor Methode: Was hat der Leser davon?
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="sprint" className="scroll-mt-24 bg-white py-20 md:py-32">
        <Container className="max-w-[700px]">
          <Reveal>
            <Eyebrow className="mb-6 block">WORUM ES HIER GEHT</Eyebrow>
            <h2
              className="text-3xl font-bold leading-[1.12] tracking-tight text-anthrazit md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              KI ist keine IT-Aufgabe. Sie ist eine Führungsaufgabe.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-anthrazit-80">
              <p>
                Die eigentliche Herausforderung ist nicht zu verstehen, was
                Large Language Models können. Sie ist zu entscheiden: Wann
                setze ich KI ein? Wann bewusst nicht? Und wie trage ich das als
                Führungskraft — gegenüber Team, Vorgesetzten, Kunden?
              </p>
              <p>
                Diese Entscheidungskompetenz entsteht nicht im Seminar. Sie
                braucht Vorbereitung, echte Anwendung im Alltag, Reflexion und
                Begleitung danach.
              </p>
              <p>
                Genau dafür ist der AI Leadership Sprint entwickelt worden.
                Neun Tage. Kein Frontalunterricht. Kein Zertifikat als Ziel.{" "}
                <span className="font-semibold text-anthrazit">
                  Du verlässt den Sprint mit drei konkreten Dingen — und einem
                  Compliance-Nachweis im Sinne von Art. 4 EU AI Act.
                </span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 border-t border-border pt-8">
              <p className="font-semibold text-anthrazit">
                Das hier ist kein Training. Es ist ein Arbeitsprozess.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. FORMAT — DIE NEUN TAGE ALS RHYTHMUS
          Typografie trägt die visuelle Arbeit.
          Zahlen statt Timeline — bleibt im Gedächtnis.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-bg-section py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">DAS FORMAT</Eyebrow>
            <h2
              className="text-3xl font-bold tracking-tight text-anthrazit md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              9 Tage. Drei Phasen. Klare Logik.
            </h2>
          </Reveal>

          {/* Large number rhythm */}
          <Reveal delay={120}>
            <div className="mt-14 flex flex-wrap items-end justify-center gap-3 md:gap-5 lg:gap-8">
              {/* 1 */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div
                  className="font-bold leading-none text-anthrazit"
                  style={{
                    fontFamily: "var(--font-narrow)",
                    fontSize: "clamp(72px, 12vw, 128px)",
                  }}
                >
                  1
                </div>
                <p className="text-sm font-semibold text-anthrazit">Halbtag 1</p>
                <p className="text-xs text-anthrazit-80">4 Std. online</p>
              </div>

              <div
                aria-hidden
                className="mb-10 text-3xl font-light text-tuerkis/40 md:text-4xl"
              >
                ·
              </div>

              {/* 7 */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div
                  className="font-bold leading-none text-anthrazit"
                  style={{
                    fontFamily: "var(--font-narrow)",
                    fontSize: "clamp(72px, 12vw, 128px)",
                  }}
                >
                  7
                </div>
                <p className="text-sm font-semibold text-anthrazit">Übungswoche</p>
                <p className="text-xs text-anthrazit-80">Echte Praxis</p>
              </div>

              <div
                aria-hidden
                className="mb-10 text-3xl font-light text-tuerkis/40 md:text-4xl"
              >
                ·
              </div>

              {/* 1 */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div
                  className="font-bold leading-none text-anthrazit"
                  style={{
                    fontFamily: "var(--font-narrow)",
                    fontSize: "clamp(72px, 12vw, 128px)",
                  }}
                >
                  1
                </div>
                <p className="text-sm font-semibold text-anthrazit">Halbtag 2</p>
                <p className="text-xs text-anthrazit-80">4 Std. online</p>
              </div>

              <div
                aria-hidden
                className="mb-10 text-2xl font-light text-border md:text-3xl"
              >
                +
              </div>

              {/* 90 — lighter, secondary */}
              <div className="flex flex-col items-center gap-2 text-center opacity-35">
                <div
                  className="font-bold leading-none text-tuerkis"
                  style={{
                    fontFamily: "var(--font-narrow)",
                    fontSize: "clamp(72px, 12vw, 128px)",
                  }}
                >
                  90
                </div>
                <p className="text-sm font-semibold text-anthrazit-80">
                  Tage Begleitung
                </p>
                <p className="text-xs text-anthrazit-80">Nachphase</p>
              </div>
            </div>
          </Reveal>

          {/* Phase descriptions */}
          <Reveal delay={220}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Vorbereitung + Halbtag 1",
                  text: "3 Wochen Vorbereitung mit KI-Standortbestimmung. Dann 4 Stunden online: Realitätscheck, Decision Intelligence, ein Quick Win an deinem eigenen Führungsfall.",
                },
                {
                  title: "Übungswoche",
                  text: "7 Tage strukturierte Eigenarbeit. Drei echte Führungssituationen, eine Strategiezeit, ein Buddy-Call. Kein Seminar — echte Praxis im Alltag.",
                },
                {
                  title: "Halbtag 2 + Nachphase",
                  text: "4 Stunden Synthese, Rollenklärung, Decision Architecture. Danach 90 Tage: Reunion-Call, Check-in, Wirkungsmessung.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-[0_2px_8px_rgba(51,58,69,0.06)]"
                >
                  <p className="mb-2 text-sm font-bold text-anthrazit">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-anthrazit-80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. DIE DREI DINGE
          Nutzen vor Methode — was nimmst du mit?
          Nicht 8 Deliverables. Die drei, die wirklich entscheiden.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">WAS DU DANACH HAST</Eyebrow>
            <h2
              className="mb-16 max-w-[48ch] text-3xl font-bold leading-[1.12] tracking-tight text-anthrazit md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              Drei Dinge. Konkret. Direkt nutzbar.
            </h2>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Eine KI-Praxis, die du selbst lebst.",
                body: "In der Übungswoche entwickelst du eine konkrete Routine — und testest sie sieben Tage im echten Führungsalltag. Du verlässt den Sprint nicht mit einem Vorsatz. Mit einer Praxis.",
              },
              {
                n: "02",
                title: "Eine Entscheidungsstruktur für die nächsten 30 Tage.",
                body: "Du weißt, welche drei Entscheidungen du mit KI triffst — und welche zwei du bewusst ohne triffst. Diese Klarheit ist das Herzstück des Sprints.",
              },
              {
                n: "03",
                title: "Ein Compliance-Nachweis — einsatzbereit.",
                body: "Eine personalisierte Bestätigung im Sinne von Art. 4 EU AI Act. Direkt in die Compliance-Akte. Plus: ein fertig formulierter Brief an deine Rechtsabteilung.",
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 110}>
                <div className="flex flex-col gap-5">
                  <span
                    aria-hidden
                    className="block text-7xl font-bold leading-none text-tuerkis/15 md:text-8xl"
                    style={{ fontFamily: "var(--font-narrow)" }}
                  >
                    {item.n}
                  </span>
                  <h3 className="text-xl font-bold leading-snug text-anthrazit md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-anthrazit-80">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={380}>
            <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-border pt-10">
              <Link
                href="#gespraech"
                className={buttonVariants({ variant: "primary", size: "md" })}
              >
                Gespräch vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <span className="text-sm text-anthrazit-80">
                30 Minuten · unverbindlich · kein Pitch
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. SELF-ASSESSMENT
          Qualifizierung als Dialog — kein Raster, kein Trichter.
          Der Leser entscheidet selbst, ob er passt.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-anthrazit py-20 text-white md:py-28">
        <Container className="max-w-[680px]">
          <Reveal>
            <Eyebrow className="mb-8 block text-tuerkis">FÜR WEN</Eyebrow>
            <h2
              className="mb-10 text-3xl font-bold leading-[1.1] text-white md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              Fünf Aussagen. Wenn du bei vier nickst — dann lass uns reden.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-col gap-5">
              {[
                "Ich bin GF oder Bereichsleiter:in in einem Unternehmen mit 50–500 Mitarbeitenden.",
                "Ich habe KI schon genutzt — aber keine eigene Entscheidungsstruktur dafür entwickelt.",
                "Ich will kein Seminar. Ich will etwas, das nach dem Sprint in meinem Alltag wirkt.",
                "Ich kann 8 Stunden synchron investieren — verteilt auf zwei Halbtage.",
                "Ich bin bereit, in der Woche dazwischen echte Führungsentscheidungen mit KI zu treffen.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tuerkis/20 ring-1 ring-tuerkis/40">
                    <Check className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                  </div>
                  <span className="text-base leading-relaxed text-white/75 md:text-lg">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 border-t border-white/10 pt-10">
              <p className="mb-6 text-sm leading-relaxed text-white/50">
                Nicht geeignet für: Tool-Einführungen für ganze Belegschaften,
                IT-Teams, oder wenn du nicht selbst teilnehmen kannst. Wenn du
                unsicher bist — genau dafür ist das Gespräch da.
              </p>
              <Link
                href="#gespraech"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "min-h-[52px]",
                )}
              >
                Passt das? — 30 Minuten klären
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. INVESTITION — FRÜH UND TRANSPARENT
          Preis nicht verstecken. Führungskräfte schätzen Klarheit.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">INVESTITION &amp; TERMINE</Eyebrow>
            <h2
              className="mb-14 text-3xl font-bold tracking-tight text-anthrazit md:text-4xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              Was es kostet — und was dabei ist.
            </h2>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Pricing */}
            <Reveal>
              <div className="flex flex-col gap-5">
                <div className="rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-[0_2px_8px_rgba(51,58,69,0.06)]">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em] text-anthrazit-80">
                    Standard
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-5xl font-bold text-anthrazit"
                      style={{ fontFamily: "var(--font-narrow)" }}
                    >
                      2.000
                    </span>
                    <span className="text-xl font-medium text-anthrazit-80">€</span>
                  </div>
                  <p className="mt-1 text-sm text-anthrazit-80">
                    pro Teilnehmer:in · zzgl. MwSt.
                  </p>
                </div>

                <div className="rounded-[var(--radius-md)] border border-tuerkis/30 bg-tuerkis/5 p-7">
                  <div className="mb-2 inline-flex items-center rounded-[var(--radius-sm)] bg-tuerkis px-2.5 py-0.5 text-xs font-bold tracking-[0.06em] text-white">
                    EARLY BIRD
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-5xl font-bold text-anthrazit"
                      style={{ fontFamily: "var(--font-narrow)" }}
                    >
                      1.700
                    </span>
                    <span className="text-xl font-medium text-anthrazit-80">€</span>
                  </div>
                  <p className="mt-1 text-sm text-anthrazit-80">
                    bis 4 Wochen vor Sprint · zzgl. MwSt.
                  </p>
                </div>

                <div className="rounded-[var(--radius-md)] border border-border bg-bg p-7">
                  <p className="mb-1 text-sm font-semibold text-anthrazit">
                    Inhouse-Variante
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-4xl font-bold text-anthrazit"
                      style={{ fontFamily: "var(--font-narrow)" }}
                    >
                      ab 14.000
                    </span>
                    <span className="text-xl font-medium text-anthrazit-80">€</span>
                  </div>
                  <p className="mt-1 text-sm text-anthrazit-80">
                    pauschal · 8–12 Personen · dein Unternehmen · zzgl. MwSt.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Inclusions + Dates */}
            <Reveal delay={100} className="flex flex-col gap-10">
              <div>
                <p className="mb-4 text-sm font-bold text-anthrazit">
                  Das ist dabei
                </p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "2 × 4 Std. Online-Workshop (Halbtag 1 + 2)",
                    "7 Tage strukturierte Übungswoche mit Begleitung",
                    "90 Tage Nachphase: Reunion-Call, Check-in, Wirkungsmessung",
                    "Literacy-Bestätigung EU AI Act (Art. 4)",
                    "Compliance-Brief für deinen Arbeitgeber",
                    "AI Leadership Plan — 7 Felder, persönlich unterzeichnet",
                    "Knowledge-Owner-Rollout-Begleiter (PDF für dein Team)",
                    "Buddy-Match aus der Cohort",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-anthrazit-80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-4 text-sm font-bold text-anthrazit">
                  Nächste Termine
                </p>
                <div className="overflow-hidden rounded-[var(--radius-md)] border border-border shadow-[0_2px_8px_rgba(51,58,69,0.06)]">
                  {[
                    {
                      name: "Q3–2026",
                      d1: "12. Sep.",
                      d2: "19. Sep.",
                      note: "4 / 12 Plätze",
                      urgent: true,
                    },
                    {
                      name: "Q4–2026",
                      d1: "21. Nov.",
                      d2: "28. Nov.",
                      note: "Anmeldung offen",
                      urgent: false,
                    },
                    {
                      name: "Q1–2027",
                      d1: "30. Jan.",
                      d2: "6. Feb.",
                      note: "Anmeldung offen",
                      urgent: false,
                    },
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
          7. DER TRAINER
          Person vor Vita. Das Foto ist wichtiger als der Lebenslauf.
          Wenige, echte Sätze — aus der Ich-Perspektive.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-section py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-[0_8px_32px_rgba(51,58,69,0.14)] ring-1 ring-anthrazit/8">
                <Image
                  src="/images/trainer/nikolay-huse.png"
                  alt="Nikolay Huse, AI Transformation Architekt bei Claudia Thonet & Team"
                  fill
                  sizes="(max-width: 768px) 80vw, 35vw"
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
                <p className="mt-1 text-sm text-anthrazit-80">
                  KI-Strategie &amp; Transformation · Agentic Workflows ·
                  Change Architecture &amp; Adoption
                </p>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-anthrazit-80">
                <p>
                  KI verändert, wie Organisationen denken, entscheiden und
                  arbeiten. Aber Technologie allein verändert nichts — erst wenn
                  Menschen sie wirklich tragen, entsteht aus Einführung echter
                  Wandel. Genau das ist meine Arbeit.
                </p>
                <p>
                  Ich habe erlebt, wie gut gemeinte KI-Initiativen an Widerstand
                  scheitern — nicht weil die Technologie schlecht war, sondern
                  weil niemand gefragt hat: Was brauchen die Menschen dahinter,
                  um wirklich mitzugehen? Diese Frage lässt mich nicht los.
                  Adoption ist kein Kommunikationsproblem. Es ist ein
                  Designproblem.
                </p>
                <p className="font-medium text-anthrazit">
                  Deshalb beginne ich nie mit dem Tool-Stack — sondern damit zu
                  verstehen, wie eine Organisation wirklich funktioniert.
                </p>
              </div>

              {/* Ausbildungen als Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "M.Sc. Wirtschaftsinformatik",
                  "AI Integration Expert",
                  "Agiler Coach (CT)",
                  "Agiler Trainer & Facilitator (CT)",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-[var(--radius-sm)] border border-border bg-white px-3 py-1.5 text-xs font-semibold text-anthrazit shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. FAQ — KOMPAKT
          Die 5 wichtigsten Kaufbarrieren. Direkt beantwortet.
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
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
          9. FINAL CTA — RADIKAL EINFACH
          Nach allem Lesen: ein einziger, klarer Schritt.
          Orange-Rot: Kontrast, Energie, Entscheidung.
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        id="gespraech"
        className="relative scroll-mt-24 overflow-hidden bg-orange-rot py-24 text-white md:py-36"
      >
        {/* Subtle tint */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_50%,_rgba(255,255,255,0.08)_0%,_transparent_70%)]"
        />
        <Container className="relative text-center">
          <Reveal>
            <Eyebrow className="mb-6 block text-white/60">NÄCHSTER SCHRITT</Eyebrow>
            <h2
              className="mx-auto max-w-[580px] text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.04] text-white"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              30 Minuten. Mehr brauchen wir nicht.
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-lg text-white/65">
              Kein Pitch. Wir klären, ob der Sprint zu deiner Situation passt
              — und wenn nicht, empfehle ich dir etwas Passendes.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10">
              <Link
                href="#"
                className="inline-flex min-h-[56px] items-center gap-2 rounded-[var(--radius-sm)] bg-white px-9 text-base font-bold text-orange-rot shadow-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-rot motion-reduce:hover:translate-y-0"
              >
                Deinen Termin wählen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/45">
              Oder direkt schreiben:{" "}
              <a
                href="mailto:nikolay@claudiathonet.de"
                className="font-semibold text-white/70 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white/60"
              >
                nikolay@claudiathonet.de
              </a>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
