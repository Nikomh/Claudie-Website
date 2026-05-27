import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  AlertTriangle,
  Lightbulb,
  Users,
  Target,
  MessageCircle,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

// ── METADATA ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'AI-Training: KI fuer Coaches - sicher, reflektiert, praktisch | Claudia Thonet',
  description:
    'Zweiteiliger Online-Workshop fuer Coaches, Agile Coaches und Facilitator:innen. KI als professionelles Assistenzsystem nutzen - DSGVO-bewusst, praxisnah und mit Mini-Pilot im eigenen Arbeitskontext.',
  alternates: { canonical: '/ausbildungen/ki-fuer-coaches/' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    title:
      'AI-Training: KI fuer Coaches - sicher, reflektiert, praktisch | Claudia Thonet',
    description:
      'Zweiteiliger Online-Workshop fuer Coaches, Agile Coaches und Facilitator:innen. KI als professionelles Assistenzsystem nutzen.',
  },
};

// ── DATA ──────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    icon: 'shield' as const,
    title: 'Datenschutz ist unklar',
    text: 'Viele Coaches wissen nicht, welche Klient:innen-Daten sie in ein KI-Tool eingeben duerfen und welche nicht.',
  },
  {
    icon: 'alert' as const,
    title: 'Halluzinationen und Bias',
    text: 'KI-Modelle generieren manchmal plausibel klingende, aber inhaltlich falsche Antworten - im Coaching kann das schaedlich sein.',
  },
  {
    icon: 'target' as const,
    title: 'Rollenklarheit fehlt',
    text: 'Wo hoert die eigene Fachkompetenz auf und wo beginnt die KI? Die Grenze ist oft diffus.',
  },
  {
    icon: 'message' as const,
    title: 'Kein geschuetzter Lernraum',
    text: 'Im Alltag fehlt die Zeit und der Rahmen, um KI professionell auszuprobieren, statt sie nur nebenbei zu nutzen.',
  },
  {
    icon: 'lightbulb' as const,
    title: 'Toolshow statt Transfer',
    text: 'Die meisten KI-Workshops zeigen Features, aber nicht, wie man sie reflektiert in den eigenen Arbeitskontext integriert.',
  },
];

const ZIELGRUPPE = [
  'Agile Coaches, die KI in Workshops und Retrospektiven einsetzen wollen',
  'Systemische Coaches mit Klient:innen-Arbeit',
  'Facilitator:innen, die Gruppenformate mit KI anreichern',
  'Team-Coaches in Organisationen',
  'Change-Begleiter:innen und OE-Berater:innen',
  'Trainer:innen, die Lerndesign mit KI-Unterstuetzung gestalten',
];

const LERNZIELE = [
  {
    title: 'DSGVO-bewusster Umgang',
    text: 'Du weisst, welche Daten du eingeben darfst, welche nicht - und warum.',
  },
  {
    title: 'Prompt-Design fuer Coaching-Kontexte',
    text: 'Du formulierst Prompts, die fachlich praezise und ethisch reflektiert sind.',
  },
  {
    title: 'Reflexionskompetenz',
    text: 'Du erkennst Bias, Halluzinationen und die Grenzen von KI-generierten Inhalten.',
  },
  {
    title: 'Transfer in den eigenen Kontext',
    text: 'Du hast einen konkreten Mini-Pilot, den du nach dem Workshop direkt weiter nutzt.',
  },
  {
    title: 'Governance-Klarheit',
    text: 'Du weisst, was du in deiner Rolle mit KI tun kannst und was eine Organisationsentscheidung braucht.',
  },
];

const TAKEAWAYS = [
  'Einen erprobten Mini-Pilot fuer deinen Arbeitskontext',
  'Eine persoenliche Governance-Checkliste',
  'Prompt-Vorlagen fuer Coaching, Facilitation und Workshop-Design',
  'Klarheit ueber DSGVO und Datenschutz im Coaching',
  'Reflexions-Framework fuer KI-Outputs',
  'Zugang zur Peer-Gruppe fuer Erfahrungsaustausch',
];

const ABGRENZUNG = [
  'Kein Tool-Vergleich oder Feature-Show',
  'Kein Programmier- oder Automatisierungs-Workshop',
  'Kein Ersatz fuer eine unternehmensweite KI-Strategie',
  'Kein reines Prompt-Engineering-Seminar',
  'Keine Empfehlung einzelner Anbieter',
];

const FAQ_ITEMS = [
  {
    q: 'Brauche ich Vorerfahrung mit KI?',
    a: 'Nein. Der Workshop ist so aufgebaut, dass du auch ohne KI-Erfahrung einsteigen kannst. Wir starten mit den Grundlagen und steigern schrittweise.',
  },
  {
    q: 'Welche Tools werden im Workshop verwendet?',
    a: 'Wir arbeiten mit DSGVO-konformen Tools wie Microsoft Copilot und Claude Pro. Du brauchst vorab nichts installieren - wir bereiten alles vor.',
  },
  {
    q: 'Was ist, wenn mein Arbeitgeber strenge Datenschutz-Vorgaben hat?',
    a: 'Genau dafuer ist der Workshop konzipiert. Wir zeigen dir, wie du KI auch unter strengen Compliance-Vorgaben sinnvoll nutzen kannst.',
  },
  {
    q: 'Wie viel Zeit muss ich insgesamt investieren?',
    a: 'Zwei halbe Tage online (je ca. 4 Stunden) plus ca. 2-3 Stunden fuer den Mini-Pilot in der Transferwoche. Insgesamt etwa 10-11 Stunden.',
  },
  {
    q: 'Bekomme ich ein Zertifikat?',
    a: 'Du erhaeltst eine Teilnahmebestaetigung von Claudia Thonet und Team. Der Workshop ist kein zertifizierter Lehrgang, sondern ein praxisorientiertes Arbeitsformat.',
  },
  {
    q: 'Kann ich den Workshop auch fuer mein Team buchen?',
    a: 'Ja, als Inhouse-Variante fuer 6-12 Personen. Inhalte und Beispiele werden dann auf euren Kontext zugeschnitten. Sprich uns einfach an.',
  },
];

// ── ICON HELPER ───────────────────────────────────────────────────────────────

function ProblemIcon({ type }: { type: string }) {
  const cls = 'h-5 w-5 text-tuerkis';
  switch (type) {
    case 'shield':
      return <Shield className={cls} aria-hidden />;
    case 'alert':
      return <AlertTriangle className={cls} aria-hidden />;
    case 'target':
      return <Target className={cls} aria-hidden />;
    case 'message':
      return <MessageCircle className={cls} aria-hidden />;
    case 'lightbulb':
      return <Lightbulb className={cls} aria-hidden />;
    default:
      return null;
  }
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function KiFuerCoachesPage() {
  return (
    <>
      {/* ── 1. BREADCRUMBS ── */}
      <Breadcrumbs
        items={[
          { label: 'Ausbildungen', href: '/ausbildungen' },
          { label: 'KI fuer Coaches' },
        ]}
      />

      {/* ── 2. HERO ── */}
      <div className="bg-anthrazit py-16 md:py-24">
        <Container>
          <Reveal>
            <span className="mb-4 inline-flex items-center rounded-full bg-tuerkis/15 px-4 py-1.5 text-xs font-semibold tracking-[0.08em] text-tuerkis">
              AI-Training &mdash; 2 halbe Tage online
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              KI fuer Coaches: sicher, reflektiert und praktisch nutzen
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-[55ch] text-lg leading-relaxed text-white/70 md:text-xl">
              Ein zweiteiliger Online-Workshop fuer Coaches, Agile Coaches und
              Facilitator:innen. Lerne, KI als professionelles Assistenzsystem zu
              nutzen &mdash; DSGVO-bewusst, praxisnah und mit einem Mini-Pilot
              in deinem eigenen Arbeitskontext.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-4 text-sm text-white/40">
              2 halbe Tage online &middot; mit Mini-Pilot im eigenen
              Arbeitskontext &middot; keine Toolshow
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-8">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-sm font-semibold text-white transition-colors hover:bg-tuerkis/90"
              >
                Workshop anfragen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* ── 3. PROBLEM / AUSGANGSLAGE ── */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">Ausgangslage</Eyebrow>
            <h2 className="mb-4 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              KI ist relevant &mdash; aber im Coaching nicht trivial.
            </h2>
            <p className="mb-12 max-w-[60ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">
              Coaches stehen vor einer besonderen Herausforderung: Sie arbeiten
              mit vertraulichen Daten, in sensiblen Beziehungen und mit
              professionellem Anspruch. KI einfach ausprobieren reicht nicht.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((p, i) => (
                <div
                  key={i}
                  className="rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                    <ProblemIcon type={p.icon} />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-anthrazit">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-anthrazit-80">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 4. LERNREISE / WORKSHOP-AUFBAU ── */}
      <Section bg="section">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">Workshop-Aufbau</Eyebrow>
            <h2 className="mb-14 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Verstehen. Testen. Integrieren.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  num: '01',
                  title: 'Teil 1 - Grundlagen und Orientierung',
                  sub: 'Halber Tag, online',
                  text: 'KI-Grundlagen fuer den Coaching-Kontext, DSGVO-Briefing, erste Hands-on-Uebungen mit professionellen Prompts. Du entwickelst ein Verstaendnis fuer Moeglichkeiten und Grenzen.',
                },
                {
                  num: '02',
                  title: 'Transferwoche',
                  sub: '7 Tage Eigenarbeit',
                  text: 'Du setzt deinen Mini-Pilot im eigenen Arbeitskontext um. Eine strukturierte Aufgabe, die du allein oder im Buddy-Tandem bearbeitest - keine Theorie, sondern echte Anwendung.',
                },
                {
                  num: '03',
                  title: 'Teil 2 - Vertiefung und Integration',
                  sub: 'Halber Tag, online',
                  text: 'Erfahrungsaustausch, Vertiefung der Prompt-Kompetenz, Governance-Ampel, persoenlicher Integrationsplan. Du gehst mit klarer Orientierung raus.',
                },
              ].map((card, i) => (
                <Reveal key={card.num} delay={i * 100}>
                  <div className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-tuerkis/10 text-xs font-bold text-tuerkis">
                      {card.num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-anthrazit">
                        {card.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-tuerkis">
                        {card.sub}
                      </p>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">
                      {card.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 5. ZIELGRUPPE ── */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">Zielgruppe</Eyebrow>
            <h2 className="mb-12 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Fuer wen ist das Training?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ZIELGRUPPE.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm"
                >
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                  <span className="text-sm leading-relaxed text-anthrazit-80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 rounded-[var(--radius-md)] border border-tuerkis/20 bg-tuerkis/5 p-5 text-sm leading-relaxed text-anthrazit-80">
              <strong className="text-anthrazit">Keine Vorerfahrung noetig:</strong>{' '}
              Der Workshop ist so aufgebaut, dass du auch ohne KI-Erfahrung
              einsteigen kannst. Wir holen dich da ab, wo du stehst.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ── 6. LERNZIELE ── */}
      <Section bg="anthrazit">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block text-tuerkis-50">Lernziele</Eyebrow>
            <h2 className="mb-12 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
              Was du im Workshop lernst
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {LERNZIELE.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-tuerkis/15">
                    <CheckCircle2 className="h-4 w-4 text-tuerkis" aria-hidden />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 7. ABLAUF DETAIL ── */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">Detaillierter Ablauf</Eyebrow>
            <h2 className="mb-12 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Was in jedem Teil konkret passiert
            </h2>
          </Reveal>

          <div className="flex flex-col gap-6">
            {/* Teil 1 */}
            <Reveal delay={80}>
              <div className="rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-1 text-lg font-bold text-anthrazit">
                  Teil 1 &mdash; Grundlagen und Orientierung
                </h3>
                <p className="mb-4 text-xs font-semibold text-tuerkis">
                  Halber Tag, online (ca. 4 Stunden)
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    'Einchecken und Erwartungsabgleich',
                    'KI-Grundlagen: Was koennen aktuelle Modelle - und was nicht?',
                    'DSGVO-Briefing fuer den Coaching-Kontext',
                    'Hands-on: Erste Prompts fuer Coaching und Facilitation',
                    'Mini-Pilot-Setup: Aufgabenstellung fuer die Transferwoche',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <span className="text-sm leading-relaxed text-anthrazit-80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Transferwoche - highlight */}
            <Reveal delay={160}>
              <div className="rounded-[var(--radius-md)] border-2 border-tuerkis/30 bg-tuerkis/5 p-6">
                <h3 className="mb-1 text-lg font-bold text-anthrazit">
                  Transferwoche
                </h3>
                <p className="mb-4 text-xs font-semibold text-tuerkis">
                  7 Tage strukturierte Eigenarbeit
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    'Mini-Pilot im eigenen Arbeitskontext umsetzen',
                    'Strukturierte Reflexion der Ergebnisse',
                    'Optionaler Buddy-Call mit Teilnehmer:in aus der Gruppe',
                    'Dokumentation von Erfahrungen und offenen Fragen',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <span className="text-sm leading-relaxed text-anthrazit-80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Teil 2 */}
            <Reveal delay={240}>
              <div className="rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-1 text-lg font-bold text-anthrazit">
                  Teil 2 &mdash; Vertiefung und Integration
                </h3>
                <p className="mb-4 text-xs font-semibold text-tuerkis">
                  Halber Tag, online (ca. 4 Stunden)
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    'Erfahrungsaustausch aus der Transferwoche',
                    'Vertiefung: Fortgeschrittene Prompt-Strategien',
                    'Governance-Ampel: Was darfst du, was braucht Absprache, was ist tabu?',
                    'Persoenlicher Integrationsplan',
                    'Abschluss und Ausblick',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <span className="text-sm leading-relaxed text-anthrazit-80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 8. MINI-PILOT ── */}
      <Section bg="section">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">Herzstueck</Eyebrow>
            <h2 className="mb-12 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Der Mini-Pilot: testen statt nur verstehen.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Geeignete Beispiele */}
              <div className="rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-base font-bold text-anthrazit">
                  Geeignete Beispiele
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Vorbereitung eines Workshop-Designs mit KI-Unterstuetzung',
                    'Entwicklung von Reflexionsfragen fuer Coaching-Sessions',
                    'Zusammenfassung von Fachliteratur fuer die eigene Praxis',
                    'Erstellung von Visualisierungen oder Canvas-Vorlagen',
                    'Formulierung von Hypothesen fuer Team-Retrospektiven',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <span className="text-sm leading-relaxed text-anthrazit-80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nicht geeignet */}
              <div className="rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-base font-bold text-anthrazit">
                  Nicht geeignet
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Eingabe von vertraulichen Klient:innen-Daten in KI-Tools',
                    'Automatisierte Diagnosen oder Bewertungen von Personen',
                    'Ersetzen von Coaching-Gespraechen durch KI-Chats',
                    'Erstellen von psychologischen Gutachten',
                    'Auswertung von Persoenlichkeitstests mit KI',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-orange-rot" aria-hidden />
                      <span className="text-sm leading-relaxed text-anthrazit-80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 9. GOVERNANCE AMPEL ── */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">Orientierung</Eyebrow>
            <h2 className="mb-12 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Die Governance-Ampel: Klarheit auf einen Blick
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 md:grid-cols-3">
              {/* Green */}
              <div className="rounded-[var(--radius-md)] border border-green-600/20 bg-green-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-600" />
                  <h3 className="text-sm font-bold text-green-800">
                    Eigenverantwortlich nutzbar
                  </h3>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {[
                    'Workshop-Designs entwickeln',
                    'Reflexionsfragen generieren',
                    'Fachliteratur zusammenfassen',
                    'Eigene Texte ueberarbeiten',
                  ].map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-green-900/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Yellow */}
              <div className="rounded-[var(--radius-md)] border border-amber-500/20 bg-amber-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <h3 className="text-sm font-bold text-amber-800">
                    Mit Absprache moeglich
                  </h3>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {[
                    'Anonymisierte Fallvignetten analysieren',
                    'Team-Feedback auswerten',
                    'Organisationsdaten verarbeiten',
                    'KI-generierte Inhalte an Klient:innen weitergeben',
                  ].map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-amber-900/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Red */}
              <div className="rounded-[var(--radius-md)] border border-red-500/20 bg-red-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <h3 className="text-sm font-bold text-red-800">
                    Nicht empfohlen
                  </h3>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {[
                    'Vertrauliche Klient:innen-Daten eingeben',
                    'Psychologische Diagnosen erstellen',
                    'Automatisierte Bewertungen vornehmen',
                    'Coaching-Gespraeche durch KI ersetzen',
                  ].map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-red-900/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 10. TAKEAWAYS ── */}
      <Section bg="section">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">Ergebnisse</Eyebrow>
            <h2 className="mb-12 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Was du aus dem Workshop mitnimmst
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {TAKEAWAYS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                  <span className="text-sm leading-relaxed text-anthrazit-80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 11. ABGRENZUNG ── */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow className="mb-4 block">Abgrenzung</Eyebrow>
            <h2 className="mb-8 max-w-[55ch] text-3xl font-bold leading-[1.15] tracking-tight text-anthrazit md:text-4xl">
              Was dieser Workshop nicht ist
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="flex max-w-[600px] flex-col gap-3">
              {ABGRENZUNG.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-anthrazit-80/50" aria-hidden />
                  <span className="text-sm leading-relaxed text-anthrazit-80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* ── 12. CTA ── */}
      <Section bg="anthrazit">
        <Container className="text-center">
          <Reveal>
            <Eyebrow className="mb-4 block text-tuerkis-50">
              Naechster Schritt
            </Eyebrow>
            <h2 className="mx-auto mb-4 max-w-[580px] text-3xl font-bold leading-[1.12] text-white md:text-4xl">
              Klingt passend? Dann lass uns sprechen.
            </h2>
            <p className="mx-auto mb-10 max-w-[50ch] text-base leading-relaxed text-white/70">
              Ob der Workshop zu deiner Situation passt, klaeren wir in einem
              kurzen, unverbindlichen Gespraech. Schreib uns oder buch direkt
              einen Termin.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-sm font-semibold text-white transition-colors hover:bg-tuerkis/90"
              >
                Workshop anfragen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/ausbildungen"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] px-6 text-sm font-semibold text-white/60 transition-colors hover:text-white/90"
              >
                Alle Ausbildungen ansehen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 13. FAQ ── */}
      <Section>
        <Container className="max-w-[760px]">
          <Reveal>
            <Eyebrow className="mb-4 block">Fragen</Eyebrow>
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-anthrazit md:text-4xl">
              Haeufig gestellte Fragen
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <dl className="flex flex-col gap-4">
              {FAQ_ITEMS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm"
                >
                  <dt className="text-sm font-bold text-anthrazit">
                    {faq.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-anthrazit-80">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
