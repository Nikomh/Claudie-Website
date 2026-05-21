import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Award, AlertCircle, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "AI Sparring für Coaches – KI-Masterclass für Coaching, OE & Transformation",
  description:
    "Zwei halbe Tage, in denen Sie KI verantwortungsvoll in Ihre Coaching- und OE-Praxis integrieren. Eigenes Prompting-Framework, sichere Anwendung, DSGVO- und AI-Act-konform. Für agile Coaches, Transformation Coaches, OE-Profis und L&D.",
  alternates: { canonical: "/beratung/ai-sparring-fuer-coaches/" },
  openGraph: {
    title: "AI Sparring für Coaches – KI-Masterclass",
    description:
      "Das Coach-native Prompting-Framework für sichere KI-Nutzung in Coaching und Organisationsentwicklung.",
  },
};

// ── Data ────────────────────────────────────────────────────────────

const outcomes = [
  {
    title: "Ein eigenes Prompting-Framework",
    body: "Das COACH-Framework – aus Coaching-Logik abgeleitet, in Minuten merkbar, in Jahren tragend.",
  },
  {
    title: "Sichere Anwendungsroutinen",
    body: "Ampel-Logik, Anonymisierungs-Checkliste und 10 Sicherheitsregeln – als Karte am Schreibtisch.",
  },
  {
    title: "Mindestens drei eigene Coach-Prompts",
    body: "Erprobt an Ihren anonymisierten realen Fällen. Direkt produktiv einsetzbar.",
  },
  {
    title: "Ein persönliches Use-Case-Canvas",
    body: "Mit Ihrem ersten wiederverwendbaren KI-Workflow für Ihre Coaching- oder OE-Praxis.",
  },
  {
    title: "30-Tage-Transferplan + Begleitung",
    body: "Mailserie, Follow-up-Session in Woche 4 und ein konkreter Lernpartner-Match.",
  },
  {
    title: "Teilnahmebescheinigung mit AI-Literacy-Bezug",
    body: "Nachweisbar für Ihre eigene Compliance und für Auftraggeber, die AI-Literacy nach EU AI Act Art. 4 einfordern.",
  },
];

const audiences = [
  {
    title: "Agile Coaches & Transformation Coaches",
    body: "Sie begleiten Teams und Organisationen durch Veränderung. KI könnte Ihr Vorbereitungs- und Diagnose-Tempo verdoppeln – wenn Sie die Spielregeln kennen.",
  },
  {
    title: "Organisationsentwickler:innen",
    body: "Sie designen Interventionen, analysieren Stakeholder, denken Systeme. KI als Sparringspartner schärft Ihre Hypothesen und Ihr Workshopdesign.",
  },
  {
    title: "Interne Coaches in Unternehmen",
    body: "Sie agieren zwischen Auftraggeber-Compliance und Coaching-Vertraulichkeit. Sie brauchen klare Regeln, um handlungsfähig zu bleiben.",
  },
  {
    title: "Scrum Master & Agile Master",
    body: "Sie wechseln zwischen Methoden- und Beziehungsarbeit. KI kann Sie in beidem unterstützen – wenn Sie wissen, wie.",
  },
  {
    title: "Trainer:innen & Facilitator:innen",
    body: "Sie gestalten Lernräume und Workshops. KI verkürzt Ihren Design-Prozess deutlich – ohne dass Ihr Format austauschbar wird.",
  },
  {
    title: "L&D, People & Culture, HR",
    body: "Sie verantworten Programme und Coaching-Pools. Sie brauchen ein skalierbares, AI-Act-konformes Format für Ihre Coaches.",
  },
];

const coachFramework = [
  {
    letter: "C",
    word: "Context",
    note: "anonymisiert",
    body: "Welche Coaching- oder OE-Situation? Welches Setting? Keine identifizierenden Details.",
  },
  {
    letter: "O",
    word: "Outcome",
    note: "",
    body: "Was soll konkret herauskommen? In welchem Format?",
  },
  {
    letter: "A",
    word: "Assumptions",
    note: "",
    body: "Welche Annahmen mache ich – und welche soll die KI sichtbar machen oder hinterfragen?",
  },
  {
    letter: "C",
    word: "Constraints",
    note: "",
    body: 'Ethik, Datenschutz, Coaching-Haltung: keine Diagnose, mehrere Perspektiven, „Ich weiß es nicht“ ist erlaubt.',
  },
  {
    letter: "H",
    word: "Human Review",
    note: "",
    body: "Welche Rolle hat die KI (Sparring, nicht Coach)? Und wie prüfe ich den Output professionell?",
  },
];

const halbtag1 = [
  {
    code: "1.1",
    title: "Ankommen & Standortbestimmung",
    duration: "30 Min",
    body: "Ehrliche Selbstpositionierung, Erwartungen, Lernziele. Skepsis ausdrücklich willkommen.",
  },
  {
    code: "1.2",
    title: "KI verstehen & Rolle klären",
    duration: "45 Min",
    body: 'Wie LLMs „denken" – ohne Tech-Overload. Rollenmatrix: Was ist KI für Coaches, was darf sie nicht sein.',
  },
  {
    code: "1.3",
    title: "Vertraulichkeit, DSGVO und EU AI Act",
    duration: "45 Min",
    body: "Personenbezogene Daten im Coaching, Anonymisierung vs. Pseudonymisierung, AI-Act-Pflichten, Ampel-Logik – als interaktives Quiz, nicht als Vortrag.",
  },
  {
    code: "1.4",
    title: "Das COACH-Framework + erste Anwendung",
    duration: "60 Min",
    body: 'Framework-Einführung, Live-Demo „schwacher Prompt → starker Prompt", Pair-Prompting an einem anonymisierten Mini-Fall.',
  },
  {
    code: "1.5",
    title: "Abschluss & Brücke zu Tag 2",
    duration: "15 Min",
    body: "Konsolidierung, optionale Hausaufgabe für den eigenen Fall.",
  },
];

const halbtag2 = [
  {
    code: "2.1",
    title: "Insights aus Tag 1",
    duration: "20 Min",
    body: "Was hat sich seit Tag 1 verschoben? Was bleibt offen?",
  },
  {
    code: "2.2",
    title: "Hypothesen & Reflexionsfragen mit KI",
    duration: "70 Min",
    body: 'Der wirksamste Coach-Use-Case in Tiefe: Hypothesenlandkarte erstellen, Reflexionsfragen schärfen, KI als „4. Stuhl" – inklusive klarer Grenzen.',
  },
  {
    code: "2.3",
    title: "Workshopdesign & OE-Anwendung",
    duration: "60 Min",
    body: "Vom diffusen Briefing zum belastbaren Workshop-Grobentwurf. Mit Red-Teaming des KI-Outputs.",
  },
  {
    code: "2.4",
    title: "Mein Coach-Workflow",
    duration: "50 Min",
    body: "Use-Case-Canvas: Ihr persönlicher wiederverwendbarer Workflow, mit Peer-Sparring.",
  },
  {
    code: "2.5",
    title: "Transferplan & Abschluss",
    duration: "30 Min",
    body: "30-Tage-Plan, Lernpartner-Matching, Übergang in die Nachbereitung.",
  },
];

const securityFeatures = [
  {
    title: "DSGVO-konforme Routinen",
    body: "Anonymisierung als Standard, klare Spielregeln für besondere Kategorien personenbezogener Daten.",
  },
  {
    title: "EU AI Act in der Praxis",
    body: "AI-Literacy-Verpflichtung (Art. 4) verständlich erklärt. Hochrisiko-Kontexte und verbotene Praktiken klar markiert.",
  },
  {
    title: "Coaching-Ethik integriert",
    body: "Wir verbinden DSGVO mit Berufsethik (DBVC, ICF, EMCC) – nicht als Pflicht, sondern als Standard.",
  },
  {
    title: "Ampel-Logik für den Alltag",
    body: "Grün, Gelb, Rot. Eine Karte am Schreibtisch ersetzt 20 Folien.",
  },
  {
    title: "Klare No-Gos",
    body: "Was Sie nie ungeprüft mit KI machen sollten. Inklusive sicherer Alternativen.",
  },
];

const faqItems = [
  {
    question: "Brauche ich Vorerfahrung mit KI?",
    answer:
      "Sie sollten mindestens einmal mit ChatGPT, Claude oder einem vergleichbaren Tool gearbeitet haben. Wir setzen Grundbedienung voraus – wir trainieren keine UI. Wenn Sie noch nie ein KI-Tool benutzt haben, empfehlen wir, vorher ein bis zwei Stunden zu experimentieren.",
  },
  {
    question: "Welche KI-Tools brauche ich konkret?",
    answer:
      "Wir empfehlen einen Zugang zu einer Enterprise- oder Pro-Version (z.B. ChatGPT Plus/Business, Claude Pro, Microsoft Copilot Business). Kostenfreie Consumer-Versionen sind datenschutzrechtlich für Coaching-Arbeit ungeeignet. Vor Beginn erhalten Sie eine kurze Setup-Empfehlung.",
  },
  {
    question: "Ist das eine Rechtsberatung zu DSGVO und EU AI Act?",
    answer:
      "Nein. Wir geben praxisorientierte Orientierung auf Basis aktueller Regulierung (Stand der Materialien jeweils dokumentiert). Für unternehmensspezifische Sachverhalte empfehlen wir die anwaltliche Prüfung. Was wir geben: handlungsfähige Routinen für den Coaching-Alltag.",
  },
  {
    question: "Erhalte ich einen formalen Nachweis?",
    answer:
      "Ja. Sie erhalten eine Teilnahmebescheinigung mit explizitem AI-Literacy-Bezug zu Art. 4 EU AI Act. Diesen Nachweis können Sie gegenüber Auftraggeber:innen einsetzen, sofern diese AI-Literacy nachweisen müssen.",
  },
  {
    question: "Wie viele Teilnehmende sind in einem Durchgang?",
    answer:
      "10 bis 14 Personen. Wir arbeiten bewusst in kleinen Gruppen, weil Fallarbeit, Peer-Feedback und individuelle Begleitung sonst leiden.",
  },
  {
    question: "Was ist, wenn ich an einem der Halbtage nicht kann?",
    answer:
      "Wir empfehlen die Teilnahme an beiden Halbtagen, da Tag 2 auf Tag 1 aufbaut. Im Premium-Paket bieten wir eine Nachhol-Lösung im nächsten Durchgang (innerhalb von 6 Monaten).",
  },
  {
    question: "Können wir das Format inhouse buchen?",
    answer:
      "Ja. Wir passen Inhalte, Use Cases und Datenschutz-Module an Ihre Organisation, Branche und vorhandene Tool-Landschaft an. Das Inhouse-Format führen wir bewusst 100 % online live durch. Mindestgruppengröße 8 Personen. Anfrage über das Kontaktformular.",
  },
  {
    question: "Was unterscheidet diese Masterclass von einem normalen Prompting-Workshop?",
    answer:
      "Drei Dinge: Erstens das Coach-native Framework (COACH), das aus Coaching-Logik abgeleitet ist. Zweitens die konsequente Integration von Datenschutz, AI Act und Coaching-Ethik in jede Übung. Drittens der explizite Transferpfad von 30 Tagen – kein reines Wissens-Event.",
  },
  {
    question: "Wie viel Praxis ist im Format enthalten?",
    answer:
      "Mindestens 70 % Anwendung, Reflexion und Peer-Austausch. Maximal 30 % Input. Wir trainieren nicht in Folien.",
  },
  {
    question: "Warum bieten Sie keine Präsenzformate an?",
    answer:
      "Bewusste Entscheidung. KI-Tools nutzen Coaches in ihrem digitalen Arbeitsumfeld – nicht im Seminarraum. Das Online-Format trainiert genau dort, wo die Anwendung später stattfindet. Es ermöglicht kleinere Gruppen, niedrigere Kosten und Teilnahme aus dem gesamten DACH-Raum.",
  },
];

const upsells = [
  {
    title: "KI-Praxislabor für Coaches",
    body: "5 Wochen, hybrid. Sie verankern Ihre Workflows mit Peer-Pods und Experten-Slots. Für Alumni der Masterclass.",
  },
  {
    title: "AI Literacy Inhouse",
    body: "Skalierbares Programm für Ihren gesamten Coaching-Pool oder Ihre L&D-Funktion. AI-Act-konform, modular aufgebaut.",
  },
  {
    title: "KI-Governance-Starter für HR & L&D",
    body: "Sichere Policy, Toolauswahl, Vertragsbausteine für Ihre Coaching- und Beratungsleistungen.",
  },
];

// ── Page ────────────────────────────────────────────────────────────

export default function AiSparringPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Beratung", href: "/beratung" },
          { label: "AI Sparring für Coaches" },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_0%,rgba(20,180,190,0.20)_0%,transparent_70%),radial-gradient(ellipse_45%_35%_at_5%_100%,rgba(20,180,190,0.08)_0%,transparent_70%)]"
        />
        <Container className="relative py-20 md:py-28">
          <div className="flex flex-col gap-6 max-w-[640px]">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">
                  Masterclass · 2 halbe Tage · 100 % Online live · Premium-Format
                </Eyebrow>
              </div>
            </Reveal>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block">
                AI Sparring für Coaches
              </Reveal>
            </h1>

            <Reveal delay={160}>
              <p className="text-lg font-medium leading-snug text-white/80 md:text-xl">
                Die Masterclass für sichere, wirksame KI-Nutzung in Coaching, OE und Transformation.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="max-w-[54ch] text-base leading-relaxed text-white/60">
                KI verändert Coaching, Organisationsentwicklung und Transformation – nicht durch Ersatz,
                sondern durch eine neue Form der Partnerschaft. In zwei halben Tagen entwickeln Sie eine
                fundierte eigene Haltung, ein Prompting-Framework speziell für Coaches und konkrete
                Workflows, die ab Tag drei in Ihrer Praxis greifen. Sicher. AI-Act-konform. Ohne Hype.
              </p>
            </Reveal>

            <Reveal delay={320} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="#pricing"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Jetzt Platz sichern <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Programm anfragen
              </Link>
            </Reveal>

            {/* Trust bar */}
            <Reveal delay={420}>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5">
                {[
                  "100 % live online im gesamten DACH-Raum",
                  "Teilnahmebescheinigung mit AI-Literacy-Bezug (EU AI Act Art. 4)",
                  "Coach-natives Prompting-Framework",
                  "Arbeit an Ihren eigenen anonymisierten Fällen",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-xs text-white/50"
                  >
                    <span className="h-1 w-1 rounded-full bg-tuerkis/60" aria-hidden />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PROBLEM / TENSION ────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <SectionHeading title="Sie kennen das vermutlich." />
            <div className="mt-6 text-base leading-relaxed text-anthrazit-80">
              <p className="mb-5">
                Ihre Kund:innen fragen Sie nach KI. Ihr LinkedIn-Feed quillt über mit Prompt-Tricks.
                Ihre Kolleg:innen probieren ChatGPT in ihrer Coaching-Vorbereitung – ohne klare Regeln.
                Und Sie selbst stehen vor Fragen, die kein Tutorial beantwortet:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Was darf ich überhaupt in ein KI-Tool eingeben, ohne die Vertraulichkeit meiner Klient:innen zu verletzen?",
                  "Wie nutze ich KI so, dass sie meine Coaching-Qualität erhöht – statt sie zu verwässern?",
                  'Wo ist die Grenze zwischen „nützlichem Sparring" und „Pseudo-Diagnostik"?',
                  "Wie spreche ich mit Auftraggeber:innen über meine KI-Nutzung – professionell, nicht abwehrend?",
                  "Wie erfülle ich die AI-Literacy-Pflicht aus dem EU AI Act, ohne zwei Tage Compliance-Folien durchzulesen?",
                ].map((q) => (
                  <li key={q} className="flex gap-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-border bg-bg-section text-center text-xs leading-5 text-anthrazit-80" aria-hidden>
                      ?
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base font-semibold text-anthrazit">
                Wer jetzt keine eigene Haltung entwickelt, lässt sie sich vom Markt diktieren.
              </p>
            </div>

            <Reveal delay={120} className="mt-10">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#pricing"
                  className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80"
                >
                  Platz sichern <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── WAS DIESE MASTERCLASS IST – UND WAS NICHT ───────────── */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading
              eyebrow="Klar positioniert"
              title="Kein Tool-Training. Eine Kompetenzbildung."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Was Sie bekommen */}
              <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-tuerkis/20 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-tuerkis" aria-hidden />
                  <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-tuerkis">
                    Was Sie hier bekommen
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Ein Prompting-Framework, das aus Coaching-Logik abgeleitet ist – nicht aus Marketing-Methodik.",
                    "Sichere, anwendungsreife Routinen für DSGVO, AI Act und Coaching-Ethik.",
                    "Live-Hypothesenarbeit mit kritischer Output-Prüfung an Ihren eigenen anonymisierten Fällen.",
                    "Konkrete Workflows, die ab Tag drei spürbar Zeit sparen und Qualität erhöhen.",
                    "Eine professionelle Sprache, um mit Ihren Kund:innen über KI zu sprechen.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Was diese Masterclass nicht ist */}
              <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-anthrazit-80" aria-hidden />
                  <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-anthrazit-80">
                    Was diese Masterclass bewusst nicht ist
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Kein Tool-Vergleich (ChatGPT vs. Claude vs. Copilot).",
                    "Kein Custom-GPT- oder Agenten-Bau.",
                    "Keine Marketing- oder LinkedIn-KI-Schulung.",
                    "Keine Rechtsberatung – wir geben Orientierung, keine juristische Sicherheit.",
                    "Kein Versprechen, dass KI Sie zum besseren Coach macht. Sie macht nur schneller und klarer, was Sie schon sind.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-anthrazit-80">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-bg-section text-center text-[10px] leading-4 text-anthrazit-80" aria-hidden>
                        –
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── FÜR WEN ──────────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Zielgruppe"
              title="Für Coaches, die professionell mit KI arbeiten wollen – ohne Naivität."
              lead="Diese Masterclass passt zu Ihnen, wenn Sie in einer der folgenden Rollen arbeiten und mindestens einmal mit ChatGPT, Claude oder Copilot etwas Sinnvolles versucht haben."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map((card, i) => (
                <Reveal key={card.title} delay={i * 60}>
                  <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    <div className="h-1 w-8 rounded-full bg-tuerkis" aria-hidden />
                    <h3 className="font-semibold leading-snug text-anthrazit">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Prerequisites */}
            <Reveal delay={200}>
              <div className="mt-8 rounded-[var(--radius-md)] border border-border bg-bg-section p-5">
                <p className="mb-3 text-sm font-semibold text-anthrazit">Was Sie mitbringen sollten:</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Aktive Coaching-, OE- oder Trainingspraxis",
                    "Grunderfahrung mit mindestens einem GenAI-Tool (ChatGPT, Claude, Copilot o.ä.)",
                    "Bereitschaft, mit eigenen anonymisierten Fällen zu arbeiten",
                    "Zugang zu einer Enterprise- oder Pro-Version eines KI-Tools",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── OUTCOMES ─────────────────────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading
              eyebrow="Ergebnisse"
              title="Was Sie konkret mitnehmen."
              lead="Keine 60-Slides-Foliensammlung. Sondern Artefakte, die Sie ab dem nächsten Tag verwenden können."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outcomes.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-tuerkis/10 text-sm font-bold text-tuerkis">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold leading-snug text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── COACH FRAMEWORK ──────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div className="flex flex-col gap-5">
                <SectionHeading
                  eyebrow="Das Framework"
                  title="COACH – das Prompting-Framework, das aus Coaching-Logik kommt."
                  lead="Generische Prompting-Frameworks sind für Marketing gebaut. Für Coaching reichen sie nicht. Wir haben ein Framework entwickelt, das Hypothesenarbeit, Mehrperspektivität, Ethik und Datenschutz von vornherein integriert."
                />
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  Das COACH-Framework ist der Kern dieser Masterclass. Sie üben es an Ihren eigenen Fällen
                  – und nehmen den COACH-Spickzettel mit nach Hause.
                </p>
                <Link
                  href="#curriculum"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-tuerkis hover:underline"
                >
                  Zum Curriculum <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>

              {/* Framework visual */}
              <div className="flex flex-col gap-2">
                {coachFramework.map((item, i) => (
                  <Reveal key={item.word} delay={i * 80}>
                    <div className="flex gap-4 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis text-lg font-bold text-white">
                        {item.letter}
                      </div>
                      <div>
                        <p className="font-semibold text-anthrazit">
                          {item.word}
                          {item.note ? (
                            <span className="ml-2 text-xs font-normal text-anthrazit-80">
                              ({item.note})
                            </span>
                          ) : null}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── CURRICULUM ───────────────────────────────────────────── */}
      <Reveal>
        <Section id="curriculum" bg="section">
          <Container>
            <SectionHeading
              eyebrow="Programm"
              title="Zwei halbe Tage. Klar strukturiert. Nicht überladen."
              lead="Wir arbeiten in zwei Halbtagen à 4 Stunden, im Abstand von 5 bis 10 Tagen. Komplett online live in einer kleinen Gruppe."
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {/* Halbtag 1 */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tuerkis text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-anthrazit">Halbtag 1</p>
                    <p className="text-xs text-anthrazit-80">Verstehen &amp; Verantworten</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {halbtag1.map((module, i) => (
                    <Reveal key={module.code} delay={i * 50}>
                      <div className="rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-xs font-bold text-tuerkis">
                              {module.code}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-anthrazit">{module.title}</p>
                              <p className="mt-0.5 text-xs leading-relaxed text-anthrazit-80">
                                {module.body}
                              </p>
                            </div>
                          </div>
                          <span className="shrink-0 rounded-full bg-bg-section px-2 py-0.5 text-xs text-anthrazit-80">
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Halbtag 2 */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tuerkis text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-anthrazit">Halbtag 2</p>
                    <p className="text-xs text-anthrazit-80">Anwenden &amp; Transferieren</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {halbtag2.map((module, i) => (
                    <Reveal key={module.code} delay={i * 50}>
                      <div className="rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-xs font-bold text-tuerkis">
                              {module.code}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-anthrazit">{module.title}</p>
                              <p className="mt-0.5 text-xs leading-relaxed text-anthrazit-80">
                                {module.body}
                              </p>
                            </div>
                          </div>
                          <span className="shrink-0 rounded-full bg-bg-section px-2 py-0.5 text-xs text-anthrazit-80">
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Didaktik-Hinweis */}
            <Reveal delay={200}>
              <div className="mt-8 flex items-start gap-3 rounded-[var(--radius-md)] border border-tuerkis/20 bg-tuerkis/5 p-4">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-tuerkis/20 text-center text-[10px] leading-4 text-tuerkis font-bold" aria-hidden>
                  i
                </span>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  <strong className="font-semibold text-anthrazit">Didaktik-Hinweis:</strong>{" "}
                  Maximal 30 % Input, mindestens 70 % Anwendung, Reflexion und Peer-Austausch. Wir
                  trainieren nicht in Folien, sondern an Ihren Fällen.
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── METHODIK ─────────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Methodik"
              title="Wie wir lernen – und warum es wirkt."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Erfahrung vor Erklärung",
                  body: "Jedes Thema startet mit einer kurzen eigenen Erfahrung. Erst dann ordnen wir gemeinsam ein. Das passt zur Lernlogik von Coaches.",
                },
                {
                  number: "02",
                  title: "Eigene Fälle, sicher gemacht",
                  body: "Sie arbeiten an Ihren eigenen, anonymisierten Anliegen. Das ist der einzige Weg, der echten Transfer ermöglicht – und genau die Datenschutz-Routine, die Sie auch im Alltag brauchen.",
                },
                {
                  number: "03",
                  title: "Kritisch statt konsumierend",
                  body: 'Sie üben, KI-Output professionell zu hinterfragen. Wir nennen das „Red Teaming". Es ist der Unterschied zwischen Coach und Konsument.',
                },
              ].map((item, i) => (
                <Reveal key={item.number} delay={i * 80}>
                  <div className="flex flex-col gap-3">
                    <span className="text-3xl font-bold text-tuerkis/20 leading-none">{item.number}</span>
                    <h3 className="font-semibold leading-snug text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-10 rounded-[var(--radius-md)] border border-border bg-bg-section p-5">
                <p className="mb-3 text-sm font-semibold text-anthrazit">Was Sie nicht erleben werden:</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Keine 60-Folien-Frontalvorträge.",
                    "Keine Tool-Demo-Shows ohne Anwendung.",
                    "Keine generischen Prompt-Sammlungen aus dem Internet.",
                    'Kein „KI wird Coaching revolutionieren"-Hype.',
                    "Kein klassisches Webinar ohne echte Interaktion.",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-anthrazit-80">
                      <span className="h-4 w-4 shrink-0 rounded-full bg-white text-center text-[10px] leading-4 text-anthrazit-80 border border-border" aria-hidden>
                        –
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── DATENSCHUTZ / SICHERHEIT ─────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading
              eyebrow="Datenschutz & Ethik"
              title="Datenschutz und Coaching-Ethik sind nicht ein Modul. Sie sind die Grundlage."
              lead="Wir nehmen Vertraulichkeit ernst – weil Sie es tun. Deshalb ist das gesamte Format darauf ausgelegt, dass Sie nach der Masterclass mit gutem Gewissen mit KI arbeiten können."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {securityFeatures.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    <Shield className="h-5 w-5 text-tuerkis" aria-hidden />
                    <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-6 flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-anthrazit-80" aria-hidden />
                <p className="text-xs leading-relaxed text-anthrazit-80">
                  Diese Masterclass ist keine Rechtsberatung. Wir geben praxisorientierte Orientierung auf
                  Basis aktueller Regulierung (Stand der Materialien jeweils dokumentiert). Für
                  unternehmensspezifische Sachverhalte empfehlen wir die anwaltliche Prüfung.
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── TRAINER ──────────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Begleitung" title="Wer Sie begleitet." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-bg-section p-6"
                >
                  <div className="h-14 w-14 rounded-full bg-border" aria-hidden />
                  <div>
                    <p className="font-semibold text-anthrazit">[Name Trainer:in]</p>
                    <p className="text-xs text-tuerkis">[Rolle]</p>
                  </div>
                  <p className="text-sm leading-relaxed text-anthrazit-80">
                    [Kurze Bio: Coaching- und OE-Erfahrung, KI-Bezug, Branchenerfahrung, ggf.
                    Zertifizierungen wie ICF/DBVC/EMCC.]
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["[X] Jahre Praxis", "[Zertifizierung]"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white px-3 py-1 text-xs text-anthrazit-80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── TESTIMONIALS (Platzhalter) ────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading eyebrow="Teilnehmende" title="Was Teilnehmende sagen." />
            <Reveal delay={100}>
              <div className="mt-8 flex items-start gap-3 rounded-[var(--radius-md)] border border-tuerkis/20 bg-tuerkis/5 p-5">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-tuerkis/20 text-center text-[10px] leading-4 text-tuerkis font-bold" aria-hidden>
                  i
                </span>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  Diese Section wird nach dem ersten Pilot-Durchgang mit echten Statements gefüllt.
                  Der Pilot läuft aktuell.
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <Reveal>
        <Section id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Investition"
              title="Zwei Wege, in die Masterclass zu starten."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Standard */}
              <Reveal delay={0}>
                <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-sm">
                  <div className="flex-1">
                    <Eyebrow>Standard</Eyebrow>
                    <div className="mt-3 mb-1">
                      <span className="text-2xl font-bold text-anthrazit">Auf Anfrage</span>
                      <span className="ml-1 text-sm text-anthrazit-80">zzgl. USt. · pro Person</span>
                    </div>
                    <p className="mb-5 text-sm text-anthrazit-80">
                      Für Coaches, die fundiert einsteigen wollen.
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {[
                        "2 halbe Tage 100 % live online (8 h netto)",
                        "COACH-Framework + Workbook (PDF)",
                        "Ampel- und Anonymisierungs-Checklisten",
                        "Use-Case-Canvas",
                        "14-Tage-Transfer-Mailserie",
                        "Teilnahmebescheinigung mit AI-Literacy-Bezug",
                      ].map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-anthrazit-80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/kontakt"
                      className="inline-flex w-full h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-tuerkis text-sm font-semibold text-tuerkis transition-all hover:bg-tuerkis hover:text-white"
                    >
                      Standard anfragen
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Premium (empfohlen) */}
              <Reveal delay={80}>
                <div className="flex h-full flex-col rounded-[var(--radius-lg)] border-2 border-tuerkis bg-white p-6 shadow-lg relative">
                  <div className="absolute -top-3 left-6">
                    <span className="rounded-full bg-tuerkis px-3 py-1 text-xs font-semibold text-white">
                      Empfohlen
                    </span>
                  </div>
                  <div className="flex-1">
                    <Eyebrow>Premium</Eyebrow>
                    <div className="mt-3 mb-1">
                      <span className="text-2xl font-bold text-anthrazit">Auf Anfrage</span>
                      <span className="ml-1 text-sm text-anthrazit-80">zzgl. USt. · pro Person</span>
                    </div>
                    <p className="mb-5 text-sm text-anthrazit-80">
                      Für Coaches, die nicht nur lernen, sondern verankern wollen.
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {[
                        "Alles aus Standard",
                        "15-Min Pre-Assessment-Call mit Trainer:in",
                        "Hochwertiges Print-Workbook und laminiertes Karten-Set",
                        "Buddy-Matching für die Lernphase",
                        "Follow-up-Session in Woche 4 (90 Min Gruppe)",
                        "30-Min 1:1 Coaching-Sparring nach Wahl",
                        "Zugang zur kuratierten Promptbibliothek",
                      ].map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-anthrazit-80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/kontakt"
                      className="inline-flex w-full h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80"
                    >
                      Premium anfragen <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Inhouse */}
            <Reveal delay={160}>
              <div className="mt-6 flex flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-bg-section p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-tuerkis" aria-hidden />
                    <span className="text-sm font-bold text-anthrazit">Inhouse-Format</span>
                  </div>
                  <p className="max-w-[52ch] text-sm leading-relaxed text-anthrazit-80">
                    Für Coaching-Pools, L&D-Teams und Organisationen. 100 % online live,
                    plattformneutral, maßgeschneidert auf Ihre Organisation. 8–16 Teilnehmende pro
                    Durchgang. Inkl. Materialien-Lizenz für 12 Monate.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1 text-xs text-anthrazit-80">
                    {[
                      "Zoom · MS Teams · Webex",
                      "Anpassbar an interne Policy",
                      "Kombinierbar mit KI-Governance-Starter",
                    ].map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-tuerkis/60" aria-hidden />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-flex shrink-0 h-11 items-center gap-2 rounded-[var(--radius-md)] border border-anthrazit px-5 text-sm font-semibold text-anthrazit transition-all hover:bg-anthrazit hover:text-white"
                >
                  Inhouse anfragen
                </Link>
              </div>
            </Reveal>

            {/* Termine */}
            <Reveal delay={200}>
              <div className="mt-6 rounded-[var(--radius-md)] border border-border bg-white p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-tuerkis" aria-hidden />
                  <p className="text-sm font-semibold text-anthrazit">
                    Nächste offene Termine (alle live online):
                  </p>
                </div>
                <p className="text-sm text-anthrazit-80">
                  Termine werden nach Buchungsstart bekanntgegeben. Jetzt anfragen und vormerken lassen.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-3 inline-flex h-9 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80"
                >
                  Termin anfragen
                </Link>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── UPSELL ───────────────────────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading
              eyebrow="Nächste Schritte"
              title="Wenn Sie tiefer gehen wollen."
              lead="Die Masterclass ist der Einstieg. Für viele Teilnehmende ist sie auch der Startpunkt einer längeren Lernreise."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {upsells.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    <div className="h-1 w-8 rounded-full bg-tuerkis" aria-hidden />
                    <h3 className="font-semibold leading-snug text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="mt-6">
                <Link
                  href="/beratung"
                  className="inline-flex h-10 items-center gap-2 rounded-[var(--radius-md)] border border-border px-4 text-sm font-semibold text-anthrazit transition-all hover:border-tuerkis hover:text-tuerkis"
                >
                  Alle Vertiefungen ansehen <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="Häufige Fragen" title="Häufige Fragen." />
            <dl className="mt-8 flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <Reveal key={item.question} delay={i * 40}>
                  <div className="rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    <dt className="font-semibold text-anthrazit">{item.question}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-anthrazit-80">{item.answer}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </Container>
        </Section>
      </Reveal>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <div className="bg-anthrazit py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow className="text-tuerkis-50">Nächster Schritt</Eyebrow>
            <h2 className="max-w-[30ch] text-3xl font-bold leading-tight text-white md:text-4xl">
              Bereit, KI in Ihre Coaching-Praxis zu integrieren – sicher und souverän?
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/60 md:text-base">
              Zwei halbe Tage. Ein klares Framework. Ein 30-Tage-Transferpfad. Eine Haltung, die trägt.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="#pricing"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Jetzt Platz sichern <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Inhouse anfragen
              </Link>
            </div>
            <p className="text-xs text-white/40">
              Wenn Sie unsicher sind, ob das Format zu Ihnen passt:{" "}
              <Link href="/kontakt" className="underline hover:text-white/70">
                Kostenloses 15-Min-Klärungsgespräch vereinbaren.
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
