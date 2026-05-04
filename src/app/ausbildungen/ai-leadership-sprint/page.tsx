import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Calendar,
  Check,
  GitBranch,
  Shield,
  Star,
  Video,
  X,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { NewsletterStripe } from "@/components/sections/NewsletterStripe";
import { SprintAccordion } from "@/components/sections/SprintAccordion";
import { SprintStickyNav } from "@/components/sections/SprintStickyNav";
import { TrustBadgeStrip } from "@/components/sections/TrustBadgeStrip";
import type { AccordionItem } from "@/components/sections/SprintAccordion";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "AI Leadership Sprint — Entscheidungs-Souveränität in 9 Tagen",
  description:
    "Ein Sprint für Führungskräfte: 2 halbe Tage online, 1 Übungswoche, 90 Tage Begleitung. Plus Compliance-Bestätigung im Sinne des EU AI Act.",
  alternates: { canonical: "/ausbildungen/ai-leadership-sprint" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "AI Leadership Sprint — Entscheidungs-Souveränität in 9 Tagen",
    description:
      "Ein Sprint für Führungskräfte: 2 halbe Tage online, 1 Übungswoche, 90 Tage Begleitung. Plus Compliance-Bestätigung im Sinne des EU AI Act.",
  },
};

// ── DATA ──────────────────────────────────────────────────────────────────────

const PROGRAM_ITEMS: AccordionItem[] = [
  {
    id: "vorbereitung",
    trigger: "1. Vorbereitung (3 Wochen vor Tag 1)",
    points: [
      "Welcome-Mail mit Übersicht und Einstieg",
      "Digitale KI-Standortbestimmung — 15 Fragen, 7 Minuten, personalisiertes Ergebnis",
      "4-seitiges Pre-Reading: Decision Intelligence, Dreifach-Linse, EU AI Act",
      "Vier-Felder-Vorbereitung — strukturiertes Reflexions-Tool zu Ihren eigenen Führungsentscheidungen",
      "Linien-Vorgesetzten-Anker — ein 5-minütiges Erklärvideo, das Sie an Ihre/n Vorgesetzte/n senden",
      "Persönliche Video-Botschaft vom Trainer drei Tage vor Sprint-Start",
    ],
  },
  {
    id: "halbtag1",
    trigger: "2. Halbtag 1 (4 Stunden, online)",
    points: [
      "09:00–09:25  Einchecken & Rahmung",
      "09:25–10:45  KI-Realitätscheck — Grenzen, EU AI Act, Verantwortung, Decision Intelligence",
      "10:45–11:00  Pause",
      "11:00–12:15  Quick Win — Sie lösen live ein echtes Führungs-Problem mit KI",
      "12:15–12:45  Übungswochen-Setup mit Buddy-Match",
      "12:45–13:00  Abschluss & Übergabe in die Woche",
    ],
  },
  {
    id: "uebungswoche",
    trigger: "3. Übungswoche (7 Tage)",
    points: [
      "Tag 2–3: Drei reale Anwendungen mit Decision-Intelligence-Frame",
      "Tag 4: Strategiezeit — 60 Minuten bewusst reservierte Reflexionszeit",
      "Tag 5: Implementation Intention testen — eigene Routine schärfen",
      "Tag 6: Buddy-Call (30 Min) — Erfahrungsaustausch mit Teilnehmer:in aus der Cohort",
      "Tag 7: Vorbereitung Halbtag 2",
    ],
  },
  {
    id: "halbtag2",
    trigger: "4. Halbtag 2 (4 Stunden, online)",
    points: [
      "09:00–09:45  Erfahrungs-Synthese aus der Übungswoche",
      "09:45–11:00  Rollenklärungs-Raum — persönliche Arbeit an Ihrer Führungsrolle mit KI",
      "11:15–12:30  Decision Architecture — Ihre persönliche Entscheidungsstruktur für die nächsten 30 Tage",
      "12:30–13:00  Commitment & AI Leadership Plan — sieben Felder, persönlich unterzeichnet",
    ],
  },
  {
    id: "nachphase",
    trigger: "5. Nachphase (90 Tage)",
    points: [
      "Tag 14: Linien-Vorgesetzten-Follow-up",
      "Tag 30: Reunion-Call mit der gesamten Cohort",
      "Tag 30–60: Persönlicher Check-in (optional, auf Wunsch)",
      "Tag 90: Wirkungsmessung & formaler Abschluss",
    ],
  },
];

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "compliance",
    trigger: "Ist das wirklich rechtskonform für meine Compliance-Akte?",
    text: "Ja. Der Sprint deckt die in Art. 4 EU AI Act geforderten Inhalte ab und liefert Ihnen eine schriftliche Bestätigung mit Datum, Inhalten und Trainer-Unterschrift. Diese Bestätigung ist als Nachweis für die KI-Kompetenz-Pflicht geeignet. Sie ersetzt keine spezifische unternehmensweite AI-Governance-Strategie — dafür gibt es separate Beratungen.",
  },
  {
    id: "einsteiger",
    trigger: "Kann ich auch teilnehmen, wenn ich noch nie KI genutzt habe?",
    text: "Der Sprint richtet sich an Fortgeschrittene Einsteiger:innen — Menschen mit erster KI-Berührung, aber ohne etablierte Praxis. Wenn Sie noch gar keine Berührung mit KI hatten, empfehle ich vorab das AI Leadership Briefing (halbtägig, niedrigschwellig).",
  },
  {
    id: "datenschutz",
    trigger: "Was, wenn mein Arbeitgeber strenge Datenschutz-Vorgaben hat?",
    text: 'Genau dafür ist der Tool-Stack vorbereitet. Wir arbeiten mit Microsoft Copilot Enterprise und Claude Pro Team — beide DSGVO-konform mit AV-Vertrag. Bei besonders strengen Anforderungen (Banken, Versicherungen, Gesundheit) gibt es eine "Regulated"-Variante mit Aleph Alpha. Im Sprint selbst gilt ein striktes Daten-Briefing zu Beginn jedes Hands-on-Blocks.',
  },
  {
    id: "aufwand",
    trigger: "Wie viele Stunden Aufwand habe ich insgesamt?",
    text: "8 Stunden synchron (2× halbe Tage online), ca. 4 Stunden in der Übungswoche (verteilt auf 7 Tage), plus drei kurze Termine in der 90-Tage-Nachphase. Insgesamt etwa 15 Stunden über 3 Monate.",
  },
  {
    id: "stornierung",
    trigger: "Was passiert, wenn ich kurzfristig nicht teilnehmen kann?",
    text: "Bis 4 Wochen vor Sprint-Start ist eine kostenfreie Umbuchung auf den nächsten Termin möglich. Danach gilt: bei Abmeldung bis 2 Wochen vorher 50 % Erstattung, darunter keine Erstattung — aber Sie können einen Vertreter:in aus Ihrem Unternehmen entsenden. Bei plötzlicher Erkrankung oder nachgewiesenem Notfall entscheiden wir im Einzelfall kulant.",
  },
  {
    id: "vs-lab",
    trigger: "Was ist der Unterschied zum Leadership AI Lab?",
    text: "Der Sprint ist für einzelne Führungskräfte aus unterschiedlichen Unternehmen — online, 8 Stunden synchron. Das Lab ist für ein gesamtes Führungsteam aus einem Unternehmen — Präsenz, 16 Stunden plus 30 Tage Nachphase. Sprint ist Einstieg und individuelle Praxis, Lab ist Tiefe und kollektive Transformation.",
  },
  {
    id: "inhouse",
    trigger: "Kann ich den Sprint auch für mein Führungsteam intern buchen?",
    text: "Ja — als Inhouse-Variante ab 14.000 € pauschal für 8–12 Personen aus Ihrem Unternehmen. Format und Methodik identisch zum offenen Sprint, aber geschlossene Cohort, Inhalte auf Ihre Branche zugeschnitten.",
  },
  {
    id: "aufzeichnung",
    trigger: "Bekomme ich eine Aufzeichnung der Sessions?",
    text: "Nein. Der Sprint lebt von Vertraulichkeit und persönlicher Anwesenheit — die Rollenklärungs-Arbeit würde durch Aufzeichnungen unmöglich. Stattdessen erhalten Sie nach jedem Halbtag eine Zusammenfassung der methodischen Inhalte als PDF.",
  },
  {
    id: "entscheidung",
    trigger: "Wer trifft die Entscheidung, ob ich teilnehme?",
    text: "Sie. Aber wir empfehlen, Ihre/n direkte/n Vorgesetzte/n einzubinden. Wir senden ein 5-Min-Video, das diese Einbindung sehr leicht macht — und das nach Forschungslage der wichtigste Faktor für den Lerntransfer ist.",
  },
];

const SPRINT_DATES = [
  {
    id: "q3-2026",
    name: "Q3–2026",
    day1: "12. September 2026",
    day2: "19. September 2026",
    status: "4 / 12 Plätze frei",
    urgent: true,
  },
  {
    id: "q4-2026",
    name: "Q4–2026",
    day1: "21. November 2026",
    day2: "28. November 2026",
    status: "Anmeldung offen",
    urgent: false,
  },
  {
    id: "q1-2027",
    name: "Q1–2027",
    day1: "30. Januar 2027",
    day2: "6. Februar 2027",
    status: "Anmeldung offen",
    urgent: false,
  },
];

const DELIVERABLES = [
  { num: "01", title: "Etablierte KI-Praxis", desc: "Eine konkrete Routine, die in der Übungswoche bereits eine Woche lang gelebt wurde." },
  { num: "02", title: "Decision Architecture", desc: "3 Daily-, 3 Weekly-, 1 Monthly-Decision plus zwei bewusste Nicht-Entscheidungen." },
  { num: "03", title: "Implementation Intention", desc: "Getestet in der Übungswoche — keine Theorie, sondern eine gelebte Praxis." },
  { num: "04", title: "AI Leadership Plan", desc: "Sieben Felder, persönlich unterzeichnet." },
  { num: "05", title: "Peer-Buddy", desc: "Eine Führungskraft aus der Cohort, die über den Sprint hinaus aktiv bleibt." },
  { num: "06", title: "Literacy-Bestätigung (EU AI Act)", desc: "Nachweis im Sinne von Art. 4 — direkt nutzbar für Ihre Compliance-Akte." },
  { num: "07", title: "Compliance-Brief", desc: "Fertig formuliert für Ihren Arbeitgeber. Sie müssen nichts schreiben." },
  { num: "08", title: "Knowledge-Owner-Rollout-Begleiter", desc: "10-seitiges PDF zur strukturierten Weitergabe in Ihr Team." },
];

const TIMELINE = [
  { tag: "VOR TAG 1", phase: "Vorbereitung", sub: "3 Wochen", desc: "Standortbestimmung, Pre-Reading, Vier-Felder-Vorbereitung" },
  { tag: "TAG 1", phase: "Halbtag 1", sub: "4 Std online", desc: "KI-Realitätscheck, Decision Intelligence, Quick Win" },
  { tag: "TAG 2–7", phase: "Übungswoche", sub: "7 Tage", desc: "Drei Praxis-Aufgaben, Strategiezeit, Buddy-Calls" },
  { tag: "TAG 8", phase: "Halbtag 2", sub: "4 Std online", desc: "Rollenklärung, Decision Architecture, Commitment" },
  { tag: "TAG 9–90", phase: "Nachphase", sub: "90 Tage", desc: "Reunion-Call, Follow-up, persönlicher Check-in" },
];

// ── JSON-LD structured data ───────────────────────────────────────────────────

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.filter((i) => i.text).map((i) => ({
    "@type": "Question",
    name: i.trigger,
    acceptedAnswer: { "@type": "Answer", text: i.text },
  })),
};

const COURSE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI Leadership Sprint",
  description:
    "Ein 9-tägiger Sprint für Führungskräfte zur Entwicklung von Entscheidungs-Souveränität unter KI-Bedingungen. EU AI Act konform.",
  provider: { "@type": "Organization", name: "Claudia Thonet & Team" },
  courseMode: "online",
  hasCourseInstance: SPRINT_DATES.map((d) => ({
    "@type": "CourseInstance",
    startDate: d.day1,
    endDate: d.day2,
    courseMode: "online",
  })),
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────

function InlineCta({ primary = "Sondierungsgespräch buchen", secondary = "Preise & Termine ansehen" }) {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <Link
        href="#sondierungsgespraech"
        className={buttonVariants({ variant: "primary", size: "md" })}
      >
        {primary}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
      <Link
        href="#investition"
        className="text-sm font-semibold text-tuerkis hover:underline"
      >
        {secondary} →
      </Link>
    </div>
  );
}

export default function AILeadershipSprintPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COURSE_SCHEMA) }}
      />

      {/* Sticky in-page navigation — appears after hero scrolls out */}
      <SprintStickyNav />

      {/* ── HERO ── */}
      <section
        id="sprint-hero"
        className="relative overflow-hidden bg-anthrazit text-white"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#14b4be22_0%,_transparent_55%)]"
        />
        <Container className="relative py-20 md:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
            <div className="flex flex-col gap-6 lg:gap-8">
              <Reveal>
                <Eyebrow className="text-tuerkis">AI LEADERSHIP SPRINT</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.01em] text-white md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                  Entscheidungs-Souveränität unter KI-Bedingungen — in 9 Tagen.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="max-w-[52ch] text-lg leading-relaxed text-white/70 md:text-xl">
                  Ein Sprint für Führungskräfte, die wissen wollen, wann KI
                  hilft und wann nicht. Zwei halbe Tage online, eine
                  Übungswoche dazwischen, 90 Tage strukturierte Begleitung
                  danach.
                </p>
              </Reveal>
              <Reveal delay={300} className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="#sondierungsgespraech"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "min-h-[44px]",
                  )}
                >
                  <Video className="h-4 w-4" aria-hidden />
                  Sondierungsgespräch buchen
                </Link>
                <Link
                  href="#standortbestimmung"
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[var(--radius-md)] px-5 py-3 text-base font-semibold text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                >
                  Reifegrad in 7 Min testen
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-1 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-white/10 sm:grid-cols-3">
                  {[
                    "Eine etablierte KI-Praxis, die Sie selbst leben",
                    "Eine Decision Architecture für Ihre nächsten 30 Tage",
                    "Eine Compliance-Bestätigung im Sinne des EU AI Act",
                  ].map((text, i) => (
                    <div key={i} className="bg-anthrazit/50 px-5 py-4 backdrop-blur-sm">
                      <span className="mb-1.5 block text-xs font-bold tracking-[0.1em] text-tuerkis">
                        0{i + 1}
                      </span>
                      <p className="text-sm font-medium leading-snug text-white/80">{text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Dreifach-Linse visual */}
            <div aria-hidden className="hidden lg:flex lg:items-center lg:justify-center">
              <svg
                viewBox="0 0 380 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[340px] opacity-70"
              >
                <circle cx="150" cy="160" r="130" stroke="#14b4be" strokeWidth="1.5" fill="#14b4be" fillOpacity="0.12" />
                <circle cx="230" cy="160" r="130" stroke="#14b4be" strokeWidth="1.5" fill="#14b4be" fillOpacity="0.08" />
                <circle cx="190" cy="230" r="130" stroke="#14b4be" strokeWidth="1.5" fill="#14b4be" fillOpacity="0.06" />
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <div className="border-y border-border bg-white py-5">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <span className="text-sm font-semibold text-anthrazit">
                4,9 / 5
              </span>
              <span className="text-sm text-anthrazit-80">
                · 120+ Bewertungen · Claudia Thonet &amp; Team
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-anthrazit-80">
              {["Telekom", "Danone", "H&M", "Sparda-Bank", "Flughafen BER"].map((c) => (
                <span key={c} className="font-medium text-anthrazit-80">{c}</span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── PROBLEM ── */}
      <section className="bg-anthrazit py-16 text-white md:py-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block text-tuerkis">DIAGNOSE</Eyebrow>
            <div className="mb-8 h-px w-16 bg-tuerkis/50" />
            <h2 className="mb-14 max-w-[75%] text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
              Die meisten Mittelständler buchen KI-Trainings — und drei Monate
              später ist das Führungsteam genauso{" "}
              <span className="text-tuerkis">ratlos</span> wie vorher.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  text: "KI wird an die IT delegiert, statt von der Führung getragen.",
                },
                {
                  num: "02",
                  text: "Tools werden geübt, aber nicht in den Führungsalltag integriert.",
                },
                {
                  num: "03",
                  text: "Strategiepapiere entstehen, aber niemand setzt sie um.",
                },
                {
                  num: "04",
                  text: "Sie selbst zögern bei Entscheidungen — weil Sie nicht wissen, wann KI wirklich hilft und wann nicht.",
                },
              ].map((item) => (
                <div key={item.num} className="flex flex-col gap-3">
                  <span className="text-sm font-bold tracking-[0.08em] text-tuerkis">
                    {item.num}
                  </span>
                  <p className="text-lg font-medium leading-snug text-white/85 md:text-xl">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-16 text-center text-2xl font-bold text-tuerkis md:text-3xl">
              Das ist kein Trainingsproblem. Das ist ein Führungsproblem.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── VERSPRECHEN ── */}
      <Section id="versprechen" className="scroll-mt-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">WAS NACH 9 TAGEN VORLIEGT</Eyebrow>
            <h2 className="mb-14 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Nach 9 Tagen verlassen Sie den Sprint mit drei Dingen, die Sie
              vorher nicht hatten — oder nie nutzten.
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Eine etablierte KI-Praxis",
                desc: "Sie haben in der Übungswoche eine konkrete KI-Routine bereits 7 Tage lang gelebt. Sie verlassen den Sprint mit einer Praxis, nicht mit einem Vorsatz.",
              },
              {
                num: "02",
                title: "Eine eigene Decision Architecture",
                desc: "Sie wissen, welche Entscheidungen Sie in den nächsten 30 Tagen mit KI treffen werden, welche bewusst ohne — und warum jeweils.",
              },
              {
                num: "03",
                title: "Eine Compliance-Bestätigung",
                desc: "Sie haben ein schriftliches Dokument im Sinne von Art. 4 EU AI Act, das Sie direkt in die Compliance-Akte Ihres Arbeitgebers geben können.",
              },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 100}>
                <div className="relative border-t-2 border-tuerkis/20 pt-6 md:border-t-0 md:border-l-2 md:pl-8 md:pt-0">
                  <span className="mb-3 block text-6xl font-bold leading-none text-tuerkis/20 md:text-7xl">
                    {item.num}
                  </span>
                  <h3 className="-mt-5 text-xl font-bold text-anthrazit md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-anthrazit-80">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <InlineCta />
          </Reveal>
        </Container>
      </Section>

      {/* ── FORMAT / TIMELINE ── */}
      <Section id="format" bg="section" className="scroll-mt-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">DAS FORMAT</Eyebrow>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-anthrazit md:text-4xl">
              9 Tage, drei Phasen, klare Struktur.
            </h2>
            <p className="mb-14 max-w-[60ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">
              Zwei halbe Tage online, dazwischen eine Woche eigene Anwendung.
              Plus 90 Tage strukturierte Nachbegleitung.
            </p>
          </Reveal>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between gap-4">
              <div
                aria-hidden
                className="absolute top-5 left-[8%] right-[8%] h-px bg-tuerkis/30"
              />
              {TIMELINE.map((item, i) => (
                <Reveal
                  key={item.tag}
                  delay={i * 80}
                  className="group flex flex-1 flex-col items-center gap-3 text-center"
                >
                  <span className="text-xs font-bold tracking-[0.1em] text-tuerkis">
                    {item.tag}
                  </span>
                  <div className="relative z-10 h-4 w-4 rounded-full bg-tuerkis ring-4 ring-bg-section ring-offset-1 transition-all duration-200 group-hover:scale-125" />
                  <div>
                    <p className="text-sm font-bold text-anthrazit">{item.phase}</p>
                    <p className="text-xs font-medium text-tuerkis">{item.sub}</p>
                    <p className="mx-auto mt-2 max-w-[110px] text-xs leading-snug text-anthrazit-80">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="flex flex-col md:hidden">
            {TIMELINE.map((item, i) => (
              <div key={item.tag} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 shrink-0 rounded-full bg-tuerkis ring-2 ring-tuerkis/25" />
                  {i < TIMELINE.length - 1 && (
                    <div className="my-1 w-px flex-1 bg-tuerkis/25" />
                  )}
                </div>
                <div className={cn("flex flex-col gap-0.5 pb-7", i === TIMELINE.length - 1 && "pb-0")}>
                  <span className="text-xs font-bold tracking-[0.1em] text-tuerkis">{item.tag}</span>
                  <p className="font-bold text-anthrazit">
                    {item.phase}{" "}
                    <span className="font-normal text-tuerkis">· {item.sub}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-anthrazit-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── DIFFERENZIERUNG ── */}
      <Section id="differenzierung" className="scroll-mt-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">WAS UNS UNTERSCHEIDET</Eyebrow>
            <h2 className="mb-14 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Drei Elemente, die in dieser Kombination am Markt einzigartig sind.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "brain",
                title: "Die Dreifach-Linse",
                desc: "Jede KI-Entscheidung wird durch drei Perspektiven geprüft: Strategie, Führung, Kultur. Dieses methodische Marken-IP zieht sich durch den ganzen Sprint und wird zur Sprache, die Ihr Team in sechs Monaten selbst nutzt.",
              },
              {
                icon: "git",
                title: "Decision Intelligence statt Tool-Wissen",
                desc: "Sie lernen nicht, was KI kann. Sie lernen, wann sie hilft und wann nicht. Drei strukturierte Schlüsselfragen, die jede Führungskraft vor jeder KI-Anwendung stellen sollte.",
              },
              {
                icon: "shield",
                title: "Compliance-Bestätigung (EU AI Act)",
                desc: "Eine schriftliche Dokumentation, dass Sie an einer Art.-4-konformen Maßnahme teilgenommen haben. Direkt nutzbar für die Compliance-Akte Ihres Arbeitgebers.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="flex h-full flex-col gap-5 rounded-[var(--radius-md)] border border-border bg-white p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                    {card.icon === "brain" && <Brain className="h-5 w-5 text-tuerkis" aria-hidden />}
                    {card.icon === "git" && <GitBranch className="h-5 w-5 text-tuerkis" aria-hidden />}
                    {card.icon === "shield" && <Shield className="h-5 w-5 text-tuerkis" aria-hidden />}
                  </div>
                  <h3 className="text-xl font-bold text-anthrazit">{card.title}</h3>
                  <p className="flex-1 text-base leading-relaxed text-anthrazit-80">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <InlineCta />
          </Reveal>
        </Container>
      </Section>

      {/* ── ZIELGRUPPE ── */}
      <Section id="zielgruppe" bg="section" className="scroll-mt-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">FÜR WEN — UND FÜR WEN NICHT</Eyebrow>
            <h2 className="mb-14 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Der Sprint ist ein Premium-Format mit klaren Grenzen. Das schützt
              seine Wirkung.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col gap-6 rounded-[var(--radius-md)] border border-border bg-white p-8">
                <h3 className="text-lg font-bold text-anthrazit">
                  Für Sie passt der Sprint, wenn
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Sie als Geschäftsführer:in oder Bereichsleiter:in arbeiten",
                    "Ihr Unternehmen 50–500 Mitarbeitende hat",
                    "Sie nicht in einem Tech-Unternehmen mit eigener AI-Funktion sind",
                    "Sie erste KI-Berührung haben, aber keine etablierte Praxis",
                    "Sie 8 Stunden synchron + 1 Übungswoche investieren wollen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tuerkis/15">
                        <Check className="h-3 w-3 text-tuerkis" aria-hidden />
                      </div>
                      <span className="text-sm leading-relaxed text-anthrazit-80 md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex h-full flex-col gap-6 rounded-[var(--radius-md)] border border-border bg-white p-8">
                <h3 className="text-lg font-bold text-anthrazit">
                  Der Sprint ist nicht das Richtige, wenn
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Sie eine Lösung für Ihre gesamte Belegschaft suchen (dann passt das Lab)",
                    "Sie ein Halbtages-Briefing erwarten",
                    "Sie ein reines Tool-Training suchen",
                    "Sie für Ihr ganzes Führungsteam buchen wollen (dann passt das Lab)",
                    "Sie nicht selbst teilnehmen, sondern delegieren wollen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-rot/10">
                        <X className="h-3 w-3 text-orange-rot" aria-hidden />
                      </div>
                      <span className="text-sm leading-relaxed text-anthrazit-80 md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="mt-6 rounded-[var(--radius-md)] border border-tuerkis/20 bg-tuerkis/5 p-6 text-center">
              <p className="mb-4 text-base text-anthrazit-80">
                Falls der Sprint passt — buchen Sie ein Sondierungsgespräch.
                Falls nicht — ich empfehle Ihnen passende Alternativen aus unserem Portfolio.
              </p>
              <Link
                href="#sondierungsgespraech"
                className={buttonVariants({ variant: "primary", size: "md" })}
              >
                Sondierungsgespräch buchen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── DETAILPROGRAMM ── */}
      <Section id="programm" className="scroll-mt-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">DAS PROGRAMM IM DETAIL</Eyebrow>
            <h2 className="mb-14 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Was in jedem der 9 Tage konkret passiert.
            </h2>
          </Reveal>
          <SprintAccordion items={PROGRAM_ITEMS} />
        </Container>
      </Section>

      {/* ── WAS SIE MITNEHMEN ── */}
      <Section id="ergebnisse" bg="section" className="scroll-mt-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">WAS SIE MITNEHMEN</Eyebrow>
            <h2 className="mb-14 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Acht konkrete Ergebnisse, die nach den 9 Tagen vorliegen.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DELIVERABLES.map((item, i) => (
              <Reveal key={item.num} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-6">
                  <span className="text-3xl font-bold text-tuerkis/25">{item.num}</span>
                  <h3 className="font-bold text-anthrazit">{item.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── EU AI ACT ── */}
      <section id="compliance" className="scroll-mt-24 bg-tuerkis/5 py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">PREMIUM-DIFFERENZIATOR</Eyebrow>
            <h2 className="mb-6 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Seit Februar 2025 ist KI-Literacy nicht mehr nice-to-have. Sie ist
              EU-rechtliche Pflicht.
            </h2>
            <p className="mb-6 max-w-[65ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">
              Art. 4 EU AI Act verpflichtet jedes Unternehmen, das KI nutzt,
              ein &bdquo;ausreichendes Maß an KI-Kompetenz&ldquo; beim Personal
              sicherzustellen. Bußgelder bei Verstößen reichen bis 35 Mio. Euro
              oder 7&thinsp;% des Jahresumsatzes.
            </p>
            <p className="mb-10 max-w-[65ch] font-semibold text-anthrazit">
              Der AI Leadership Sprint erfüllt diese Pflicht — und liefert Ihnen
              gleich zwei Dokumente für die Compliance-Akte:
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Literacy-Bestätigung",
                desc: "Eine personalisierte 1-seitige Bestätigung mit Datum, Inhalten und Trainer-Unterschrift. Geeignet als Nachweis für die KI-Kompetenz-Pflicht gemäß Art. 4 AI Act.",
              },
              {
                title: "Compliance-Brief",
                desc: "Ein optionaler Begleitbrief an Ihre Datenschutz- oder Rechtsabteilung — fertig formuliert, sodass Sie nichts schreiben müssen.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="rounded-[var(--radius-md)] border-2 border-tuerkis/25 bg-white p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                      <Shield className="h-4 w-4 text-tuerkis" aria-hidden />
                    </div>
                    <h3 className="text-lg font-bold text-anthrazit">{card.title}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-anthrazit-80">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 border-l-2 border-tuerkis/35 pl-4 text-sm italic text-anthrazit-80">
              Hinweis: Diese Maßnahme deckt die individuelle Mitarbeiter-Kompetenz im Sinne von Art. 4 ab.
              Für eine umfassende AI-Governance-Strategie empfehle ich die Konsultation einer spezialisierten Kanzlei.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <InlineCta primary="Platz reservieren" secondary="Preise ansehen" />
          </Reveal>
        </Container>
      </section>

      {/* ── INVESTITION & TERMINE ── */}
      <Section id="investition" className="scroll-mt-24">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">INVESTITION &amp; TERMINE</Eyebrow>
            <h2 className="mb-14 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Das ist enthalten — und so läuft die Anmeldung.
            </h2>
          </Reveal>

          {/* Pricing */}
          <Reveal>
            <div className="mb-14 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white">
              <div className="grid md:grid-cols-3">
                <div className="p-8 md:border-r md:border-border">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-anthrazit-80">
                    Standard
                  </p>
                  <p className="text-4xl font-bold text-anthrazit">2.000 €</p>
                  <p className="mt-1.5 text-sm text-anthrazit-80">pro Teilnehmer:in, zzgl. MwSt.</p>
                </div>
                <div className="border-y border-tuerkis/20 bg-tuerkis/5 p-8 md:border-x md:border-y-0">
                  <div className="mb-2 inline-flex items-center rounded-full bg-tuerkis px-3 py-0.5 text-xs font-bold text-white">
                    EARLY BIRD
                  </div>
                  <p className="text-4xl font-bold text-anthrazit">1.700 €</p>
                  <p className="mt-1.5 text-sm text-anthrazit-80">bis 4 Wochen vor Sprint, zzgl. MwSt.</p>
                </div>
                <div className="p-8 md:border-l md:border-border">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-anthrazit-80">
                    Inhouse
                  </p>
                  <p className="text-4xl font-bold text-anthrazit">14.000 €</p>
                  <p className="mt-1.5 text-sm text-anthrazit-80">pauschal für 8–12 Personen, zzgl. MwSt.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Inclusions */}
          <Reveal delay={100}>
            <h3 className="mb-6 text-xl font-bold text-anthrazit">Was inkludiert ist</h3>
            <div className="mb-14 grid gap-3 sm:grid-cols-2">
              {[
                "8 Stunden synchroner Workshop (2× halbe Tage online)",
                "7 Tage strukturierte Übungswoche mit Begleitung",
                "90 Tage Nachphase mit Reunion-Call und persönlichem Check-in",
                "Literacy-Bestätigung im Sinne des EU AI Act",
                "Compliance-Brief an Ihren Arbeitgeber",
                "Knowledge-Owner-Rollout-Begleiter (PDF)",
                "Pre-Post-Wirkungsmessung",
                "AI Leadership Coach-Agent",
                "Persönliche Audio-Botschaften zwischen den Halbtagen",
                "Buddy-Match mit nachhaltiger Buddy-Beziehung",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tuerkis/15">
                    <Check className="h-3 w-3 text-tuerkis" aria-hidden />
                  </div>
                  <span className="text-sm leading-relaxed text-anthrazit-80">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Sprint dates */}
          <Reveal delay={200}>
            <h3 className="mb-6 text-xl font-bold text-anthrazit">Nächste Sprint-Termine</h3>
            <div className="flex flex-col gap-3">
              {SPRINT_DATES.map((sprint) => (
                <div
                  key={sprint.id}
                  className={cn(
                    "flex flex-col gap-4 rounded-[var(--radius-md)] border p-5 transition-colors md:flex-row md:items-center md:gap-6",
                    sprint.urgent ? "border-tuerkis/30 bg-tuerkis/5" : "border-border bg-white",
                  )}
                >
                  <div className="min-w-[90px]">
                    <p className="text-sm font-bold uppercase tracking-[0.1em] text-tuerkis">
                      {sprint.name}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:gap-10">
                    <div>
                      <p className="mb-0.5 text-xs text-anthrazit-80">Halbtag 1</p>
                      <div className="flex items-center gap-1.5 font-semibold text-anthrazit">
                        <Calendar className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                        {sprint.day1}
                      </div>
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs text-anthrazit-80">Halbtag 2</p>
                      <div className="flex items-center gap-1.5 font-semibold text-anthrazit">
                        <Calendar className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                        {sprint.day2}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold",
                        sprint.urgent
                          ? "bg-orange-rot/10 text-orange-rot"
                          : "bg-bg-section text-anthrazit-80",
                      )}
                    >
                      {sprint.status}
                    </span>
                    <Link
                      href="#sondierungsgespraech"
                      className={cn(
                        buttonVariants({ variant: "primary", size: "sm" }),
                        "shrink-0",
                      )}
                    >
                      Platz reservieren
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="#sondierungsgespraech"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Sondierungsgespräch buchen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── ÜBER DEN TRAINER ── */}
      <Section id="trainer" bg="section" className="scroll-mt-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:gap-16">
            <Reveal>
              {/* TODO: Replace with <Image src="/images/trainer/nikolay.jpg" ... /> once portrait is available */}
              <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-anthrazit/8 ring-1 ring-anthrazit/10">
                <div className="flex h-full items-center justify-center text-sm text-anthrazit-80">
                  [Trainer-Portrait]
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="flex flex-col justify-center gap-6">
              <Eyebrow>ÜBER DEN TRAINER</Eyebrow>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
                Nikolay Claudiathonet — AI Transformation Architekt.
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-tuerkis">
                Partner bei Claudia Thonet &amp; Team
              </p>
              <p className="text-base leading-relaxed text-anthrazit-80 md:text-lg">
                Nach 15 Jahren in Organisationsentwicklung,
                Führungskräfte- und Teamentwicklung, New Leadership und
                Transformation Coaching habe ich mein Portfolio um KI-Strategie
                und KI-Integration erweitert.
              </p>
              <p className="text-base leading-relaxed text-anthrazit-80">
                Mein Differenziator: Ich bin kein reiner KI-Trainer. Ich
                verbinde KI-Kompetenz mit tiefer Expertise in Führung, Kultur
                und organisationaler Transformation. Während ich meine eigenen
                Kunden begleite, transformiere ich gleichzeitig mein eigenes
                Unternehmen mit KI — diese Doppelrolle ist meine stärkste
                Glaubwürdigkeit. Ich spreche nicht aus der Theorie, sondern aus
                der Praxis.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { stat: "15+", label: "Jahre Erfahrung in Führungs- und Organisationsentwicklung" },
                  { stat: "Seit 2023", label: "Aktive KI-Praxis und -Integration im eigenen Unternehmen" },
                  { stat: "50–500 MA", label: "Fokus auf Mittelstand-Führungsteams" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[var(--radius-md)] border border-border bg-white p-4"
                  >
                    <p className="text-2xl font-bold text-tuerkis">{item.stat}</p>
                    <p className="mt-1 text-xs leading-snug text-anthrazit-80">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq" className="scroll-mt-24">
        <Container className="max-w-[780px]">
          <Reveal>
            <Eyebrow className="mb-4 block">HÄUFIGE FRAGEN</Eyebrow>
            <h2 className="mb-14 text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Was Sie sich noch fragen könnten.
            </h2>
          </Reveal>
          <SprintAccordion items={FAQ_ITEMS} multiple />
        </Container>
      </Section>

      {/* ── TRUST + NEWSLETTER ── */}
      <TrustBadgeStrip />
      <NewsletterStripe />

      {/* ── FINAL CTA ── */}
      <section
        id="sondierungsgespraech"
        className="relative scroll-mt-24 bg-anthrazit py-16 text-white md:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#14b4be18_0%,_transparent_60%)]"
        />
        <Container className="relative">
          <Reveal>
            <div className="mb-4 h-px w-16 bg-tuerkis/50" />
            <h2 className="mb-4 max-w-[52ch] text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
              Wenn Sie wissen wollen, ob der Sprint zu Ihnen passt — sprechen
              wir 30 Minuten.
            </h2>
            <p className="mb-12 max-w-[52ch] text-lg text-white/65">
              Kein Verkauf. Wir klären, ob das Format Ihre Situation trifft.
              Wenn nicht, empfehle ich Ihnen passende Alternativen.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Sondierungsgespräch",
                desc: "30 Minuten Video-Call zur Klärung, ob das Format passt.",
                cta: "Termin wählen",
                href: "#",
                primary: true,
              },
              {
                title: "KI-Standortbestimmung",
                desc: "15 Fragen, 7 Minuten. Sie erhalten einen personalisierten Reifegrad-Report.",
                cta: "Standortbestimmung starten",
                href: "#standortbestimmung",
                primary: false,
              },
              {
                title: "Newsletter",
                desc: "Sie bekommen die Sprint-Termine ein paar Wochen früher als andere.",
                cta: "Newsletter abonnieren",
                href: "#newsletter",
                primary: false,
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="flex h-full flex-col gap-5 rounded-[var(--radius-md)] border border-white/[0.12] bg-white/5 p-7 backdrop-blur-sm">
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-white/65">{card.desc}</p>
                  </div>
                  <Link
                    href={card.href}
                    className={cn(
                      card.primary
                        ? buttonVariants({ variant: "primary", size: "md" })
                        : "inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-white/30 px-6 text-base font-semibold text-white/85 transition-colors hover:border-white/60 hover:text-white",
                    )}
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
