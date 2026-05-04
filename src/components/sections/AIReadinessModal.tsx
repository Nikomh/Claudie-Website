"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, BarChart2, Brain, Building2, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "praxis",
    title: "Deine KI-Praxis",
    subtitle: "Wie du KI heute nutzt",
    icon: Brain,
    color: "text-tuerkis",
    bg: "bg-tuerkis/10",
  },
  {
    id: "fuehrung",
    title: "Deine Führungsrolle",
    subtitle: "Wie du KI im Team führst",
    icon: BarChart2,
    color: "text-orange-rot",
    bg: "bg-orange-rot/10",
  },
  {
    id: "organisation",
    title: "Organisation & Compliance",
    subtitle: "Wie dein Unternehmen aufgestellt ist",
    icon: Building2,
    color: "text-anthrazit",
    bg: "bg-anthrazit/8",
  },
] as const;

const QUESTIONS = [
  // ── Abschnitt 1: Deine KI-Praxis ─────────────────────────────────────────
  {
    section: 0,
    text: "Wie häufig nutzt du KI-Tools in deinem Arbeitsalltag?",
    options: [
      { label: "Noch gar nicht — ich beobachte das Thema erst", pts: 1 },
      { label: "Selten, wenn es jemand anderes zeigt", pts: 2 },
      { label: "Regelmäßig, aber ohne feste Routine", pts: 3 },
      { label: "Täglich — KI ist Teil meines Arbeitsflusses", pts: 4 },
    ],
  },
  {
    section: 0,
    text: "Wofür setzt du KI-Tools hauptsächlich ein?",
    options: [
      { label: "Ich setze sie noch nicht ein", pts: 1 },
      { label: "Texte formulieren, E-Mails schreiben", pts: 2 },
      { label: "Texte, Recherche, Zusammenfassungen", pts: 3 },
      { label: "Entscheidungsvorbereitung, Analyse, Strategie", pts: 4 },
    ],
  },
  {
    section: 0,
    text: "Wie sicher bist du, wann du einem KI-Output vertrauen kannst — und wann nicht?",
    options: [
      { label: "Ich bin mir meist unsicher, wie zuverlässig KI ist", pts: 1 },
      { label: "Ich lese Ergebnisse durch, bin aber unsicher beim Bewerten", pts: 2 },
      { label: "Ich prüfe kritisch, habe aber keine klaren Kriterien", pts: 3 },
      { label: "Ich habe klare eigene Kriterien zur KI-Bewertung", pts: 4 },
    ],
  },
  {
    section: 0,
    text: "Hast du eine eigene Methode oder Routine für den Umgang mit KI?",
    options: [
      { label: "Nein, ich probiere spontan aus", pts: 1 },
      { label: "Ich habe ein paar Prompts, die ich wiederverwende", pts: 2 },
      { label: "Ja, für bestimmte Aufgaben habe ich ein Vorgehen", pts: 3 },
      { label: "Ja — eine systematische Entscheidungsstruktur", pts: 4 },
    ],
  },

  // ── Abschnitt 2: Deine Führungsrolle ─────────────────────────────────────
  {
    section: 1,
    text: "Wie positionierst du dich als Führungskraft zum Thema KI gegenüber deinem Team?",
    options: [
      { label: "Ich überlasse das dem Team selbst", pts: 1 },
      { label: "Ich beobachte und reagiere auf Anfragen", pts: 2 },
      { label: "Ich ermuntere den Einsatz, ohne klare Richtung vorzugeben", pts: 3 },
      { label: "Ich setze den Rahmen aktiv und begleite die Entwicklung", pts: 4 },
    ],
  },
  {
    section: 1,
    text: "Was passiert in deinem Unternehmen, wenn jemand eine KI-Initiative vorschlägt?",
    options: [
      { label: "Wird an die IT-Abteilung weitergegeben", pts: 1 },
      { label: "Wird diskutiert, landet aber meist im Sand", pts: 2 },
      { label: "Wird ausprobiert — ohne übergreifende Struktur", pts: 3 },
      { label: "Wird gezielt bewertet und geführt", pts: 4 },
    ],
  },
  {
    section: 1,
    text: "Hast du für dein Team definiert, bei welchen Aufgaben KI eingesetzt wird — und bei welchen nicht?",
    options: [
      { label: "Nein, das hat noch niemand entschieden", pts: 1 },
      { label: "Grob — aber nicht verschriftlicht oder kommuniziert", pts: 2 },
      { label: "Informelle Absprachen, aber keine klare Regel", pts: 3 },
      { label: "Ja — klare Regeln, dokumentiert und kommuniziert", pts: 4 },
    ],
  },
  {
    section: 1,
    text: "Wie reagiert dein Team, wenn KI-Themen auf den Tisch kommen?",
    options: [
      { label: "Überwiegend Skepsis oder stilles Abwarten", pts: 1 },
      { label: "Gemischt — einige enthusiastisch, andere zurückhaltend", pts: 2 },
      { label: "Interesse ist da, aber es fehlt Orientierung", pts: 3 },
      { label: "Aktives Engagement mit klarer Richtung", pts: 4 },
    ],
  },

  // ── Abschnitt 3: Organisation & Compliance ────────────────────────────────
  {
    section: 2,
    text: "Gibt es in deinem Unternehmen eine KI-Richtlinie oder Nutzungsregel?",
    options: [
      { label: "Nein — das Thema wurde noch nicht angegangen", pts: 1 },
      { label: "Das Thema ist bekannt, aber nichts ist geregelt", pts: 2 },
      { label: "Erste Richtlinien existieren, sind aber nicht vollständig", pts: 3 },
      { label: "Ja — verbindliche Richtlinie mit Dokumentation", pts: 4 },
    ],
  },
  {
    section: 2,
    text: "Wie gut kennst du den EU AI Act und was er konkret von deinem Unternehmen verlangt?",
    options: [
      { label: "Ich habe davon gehört, kenne den Inhalt kaum", pts: 1 },
      { label: "Ich kenne ihn, weiß aber nicht was konkret zu tun ist", pts: 2 },
      { label: "Wir haben erste Maßnahmen ergriffen", pts: 3 },
      { label: "Wir sind dokumentiert compliant — Art. 4 ist abgedeckt", pts: 4 },
    ],
  },
  {
    section: 2,
    text: "Wer ist in deinem Unternehmen aktuell verantwortlich für KI-Entscheidungen?",
    options: [
      { label: "Niemand explizit — es gibt keine klare Zuständigkeit", pts: 1 },
      { label: "Die IT-Abteilung trägt das alleine", pts: 2 },
      { label: "Das Management ist involviert, aber ohne klare Rollen", pts: 3 },
      { label: "Definierte KI-Verantwortliche auf Führungsebene", pts: 4 },
    ],
  },
  {
    section: 2,
    text: "Was ist der nächste konkrete KI-Schritt für dein Unternehmen?",
    options: [
      { label: "Wir müssen erst verstehen, was KI für uns bedeutet", pts: 1 },
      { label: "Eine Pilotgruppe aufsetzen und erste Erfahrungen sammeln", pts: 2 },
      { label: "Eine KI-Strategie entwickeln und kommunizieren", pts: 3 },
      { label: "KI-Governance und Adoption strukturiert skalieren", pts: 4 },
    ],
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// RESULT LOGIC
// ─────────────────────────────────────────────────────────────────────────────

type Level = "einsteiger" | "anwender" | "praktiker" | "leader";

function calcScores(answers: number[]) {
  const sA = answers.slice(0, 4).reduce((a, b) => a + b, 0);
  const sB = answers.slice(4, 8).reduce((a, b) => a + b, 0);
  const sC = answers.slice(8, 12).reduce((a, b) => a + b, 0);
  const total = sA + sB + sC;
  const pA = Math.round(((sA - 4) / 12) * 100);
  const pB = Math.round(((sB - 4) / 12) * 100);
  const pC = Math.round(((sC - 4) / 12) * 100);
  const pTotal = Math.round(((total - 12) / 36) * 100);
  return { pA, pB, pC, pTotal };
}

function getLevel(pTotal: number): Level {
  if (pTotal < 25) return "einsteiger";
  if (pTotal < 50) return "anwender";
  if (pTotal < 75) return "praktiker";
  return "leader";
}

const LEVEL_LABELS: Record<Level, string> = {
  einsteiger: "KI-Einsteiger",
  anwender: "KI-Anwender",
  praktiker: "KI-Praktiker",
  leader: "KI-Leader",
};

const LEVEL_BADGE: Record<Level, string> = {
  einsteiger: "bg-amber-50 border-amber-200 text-amber-700",
  anwender: "bg-[#d8f3f5] border-[#b8e8eb] text-tuerkis",
  praktiker: "bg-anthrazit border-anthrazit/20 text-tuerkis-50",
  leader: "bg-anthrazit border-anthrazit/20 text-tuerkis-50",
};

const LEVEL_HEADLINE: Record<Level, string> = {
  einsteiger: "Du stehst am Anfang — und das ist der richtige Moment.",
  anwender: "Du hast die Ausgangslage, die der Sprint braucht.",
  praktiker: "Du bist weiter als die meisten. Jetzt brauchst du Struktur.",
  leader: "Du führst KI-Transformation schon aktiv. Der Sprint macht es nachhaltig.",
};

const LEVEL_BODY: Record<Level, string> = {
  einsteiger:
    "Bevor der Sprint das Richtige ist, empfehlen wir das AI Leadership Briefing: ein halbtägiges Format, das Klarheit schafft und die Grundlage legt. Der Sprint wäre danach der nächste natürliche Schritt.",
  anwender:
    "Erste KI-Erfahrung, aber noch keine eigene Entscheidungsstruktur — das ist genau die Lücke, die der Sprint in 9 Tagen schließt. Mit einer Praxis, die im Alltag bleibt.",
  praktiker:
    "Du nutzt KI aktiv. Was fehlt, ist ein strukturierter Rahmen, den du auch ins Team tragen kannst. Der Sprint gibt dir deine Decision Architecture — und erledigt den EU AI Act nebenbei.",
  leader:
    "Du bist auf Leadership-Niveau. Der Sprint formalisiert, was du aufgebaut hast — mit einer dokumentierten Entscheidungsarchitektur und EU AI Act-Compliance. Die Inhouse-Variante könnte noch besser passen.",
};

const LEVEL_CTA: Record<Level, { label: string; href: string }> = {
  einsteiger: { label: "Briefing anfragen", href: "#gespraech" },
  anwender: { label: "Gespräch vereinbaren", href: "#gespraech" },
  praktiker: { label: "Gespräch vereinbaren", href: "#gespraech" },
  leader: { label: "Zur Inhouse-Variante", href: "#investition" },
};

function dimensionInsight(pct: number, dim: 0 | 1 | 2): string {
  const texts = [
    [
      "Deine KI-Praxis ist noch im Aufbau. Der Sprint gibt dir eine Entscheidungsroutine, die du sofort im Alltag anwenden kannst.",
      "Du nutzt KI, aber ohne klare Struktur. Der Sprint entwickelt deine persönliche Entscheidungsarchitektur.",
      "Starke eigene KI-Praxis. Der Sprint schärft sie — und macht sie übertragbar auf dein Team.",
    ],
    [
      "KI läuft bei euch noch ohne Führung. Wer das nicht aktiv gestaltet, verliert Kontrolle über Qualität, Datenschutz und Kultur.",
      "Du bist auf dem richtigen Weg, aber die Führungsrolle ist noch nicht klar definiert. Der Sprint gibt dir konkrete Entscheidungsregeln.",
      "Du führst KI-Transformation aktiv. Selten im Mittelstand — und der Sprint gibt dir dafür einen nachhaltigen Rahmen.",
    ],
    [
      "Compliance-Lücke offen. Art. 4 EU AI Act ist seit Feb. 2025 Pflicht. Der Sprint liefert die nötige Bestätigung direkt.",
      "Erste Schritte gemacht, aber die Compliance-Dokumentation fehlt. Der Sprint schließt das — mit einer Art.-4-Bestätigung.",
      "Gut aufgestellt. Der Sprint stellt sicher, dass die Führungsebene der Enabler bleibt — und nicht zum Flaschenhals wird.",
    ],
  ] as const;
  const i = pct < 40 ? 0 : pct < 70 ? 1 : 2;
  return texts[dim][i];
}

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED BAR
// ─────────────────────────────────────────────────────────────────────────────

function Bar({ pct, ready }: { pct: number; ready: boolean }) {
  const color =
    pct < 40 ? "bg-amber-400" : pct < 70 ? "bg-tuerkis/70" : "bg-tuerkis";
  return (
    <div className="h-2 overflow-hidden rounded-full bg-border">
      <div
        className={cn("h-full rounded-full transition-all duration-[1200ms] ease-out", color)}
        style={{ width: ready ? `${pct}%` : "0%" }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// RESULT SCREEN
// ─────────────────────────────────────────────────────────────────────────────

function ResultScreen({ answers, onReset }: { answers: number[]; onReset: () => void }) {
  const { pA, pB, pC, pTotal } = calcScores(answers);
  const level = getLevel(pTotal);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col gap-6 px-6 pb-6 pt-4 sm:px-8">
      {/* Level badge + headline */}
      <div className="rounded-[var(--radius-md)] border bg-bg-section p-5">
        <div
          className={cn(
            "mb-3 inline-flex items-center rounded-[var(--radius-sm)] border px-3 py-1 text-xs font-bold tracking-[0.06em]",
            LEVEL_BADGE[level],
          )}
        >
          Dein KI-Reifegrad: {LEVEL_LABELS[level]}
        </div>
        <h3
          className="mb-2 text-xl font-bold leading-tight text-anthrazit"
          style={{ fontFamily: "var(--font-narrow)" }}
        >
          {LEVEL_HEADLINE[level]}
        </h3>
        <p className="text-sm leading-relaxed text-anthrazit-80">
          {LEVEL_BODY[level]}
        </p>
      </div>

      {/* Three dimension bars */}
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-anthrazit-80">
          Deine drei Bereiche
        </p>
        <div className="flex flex-col gap-5">
          {([
            { label: "KI-Praxis", pct: pA, dim: 0 },
            { label: "Führungsrolle", pct: pB, dim: 1 },
            { label: "Organisation & Compliance", pct: pC, dim: 2 },
          ] as const).map((item) => {
            const Icon = SECTIONS[item.dim].icon;
            return (
              <div key={item.label}>
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full",
                        SECTIONS[item.dim].bg,
                      )}
                    >
                      <Icon
                        className={cn("h-3 w-3", SECTIONS[item.dim].color)}
                        aria-hidden
                      />
                    </div>
                    <span className="text-sm font-semibold text-anthrazit">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-anthrazit">
                    {item.pct}%
                  </span>
                </div>
                <Bar pct={item.pct} ready={ready} />
                <p className="mt-2 text-xs leading-relaxed text-anthrazit-80">
                  {dimensionInsight(item.pct, item.dim as 0 | 1 | 2)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
        <Link
          href={LEVEL_CTA[level].href}
          className={buttonVariants({ variant: "primary", size: "md" })}
        >
          {LEVEL_CTA[level].label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-anthrazit-80 hover:text-tuerkis hover:underline"
        >
          Check wiederholen →
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INTRO SCREEN
// ─────────────────────────────────────────────────────────────────────────────

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col gap-6 px-6 pb-6 pt-2 sm:px-8">
      <p className="text-base leading-relaxed text-anthrazit-80">
        Dieser Check analysiert drei Dimensionen deiner KI-Reife — und gibt
        dir am Ende einen ehrlichen Befund: wo du heute stehst, wo die
        größten Hebel sind, und welches Format für dich Sinn ergibt.
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              className="rounded-[var(--radius-md)] border border-border bg-bg p-4"
            >
              <div
                className={cn(
                  "mb-3 flex h-9 w-9 items-center justify-center rounded-full",
                  s.bg,
                )}
              >
                <Icon className={cn("h-4 w-4", s.color)} aria-hidden />
              </div>
              <p className="text-sm font-bold text-anthrazit">{s.title}</p>
              <p className="mt-0.5 text-xs text-anthrazit-80">{s.subtitle}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 text-xs text-anthrazit-80">
        <span className="rounded-full bg-bg-section px-3 py-1 font-semibold">
          12 Fragen
        </span>
        <span className="rounded-full bg-bg-section px-3 py-1 font-semibold">
          ~5 Minuten
        </span>
        <span className="rounded-full bg-bg-section px-3 py-1 font-semibold">
          Kein Formular
        </span>
      </div>

      <button
        type="button"
        onClick={onStart}
        className={cn(buttonVariants({ variant: "primary", size: "lg" }), "self-start")}
      >
        Check starten
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// QUESTION SCREEN
// ─────────────────────────────────────────────────────────────────────────────

function QuestionScreen({
  qIndex,
  onAnswer,
}: {
  qIndex: number;
  onAnswer: (pts: number) => void;
}) {
  const [fading, setFading] = useState(false);
  const q = QUESTIONS[qIndex];
  const section = SECTIONS[q.section];
  const Icon = section.icon;

  // Re-fade in when question changes
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, [qIndex]);

  function pick(pts: number) {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setFading(false);
      onAnswer(pts);
    }, 180);
  }

  // Index within current section
  const sectionStart = QUESTIONS.findIndex((q2) => q2.section === q.section);
  const posInSection = qIndex - sectionStart + 1;
  const sectionTotal = QUESTIONS.filter((q2) => q2.section === q.section).length;

  return (
    <div
      className={cn(
        "flex flex-col gap-5 px-6 pb-6 pt-2 sm:px-8 transition-opacity duration-[180ms]",
        fading || !visible ? "opacity-0" : "opacity-100",
      )}
    >
      {/* Section badge */}
      <div className="flex items-center gap-2.5">
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full",
            section.bg,
          )}
        >
          <Icon className={cn("h-3.5 w-3.5", section.color)} aria-hidden />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.1em] text-anthrazit-80">
          {section.title} · {posInSection} von {sectionTotal}
        </span>
      </div>

      {/* Question text */}
      <p
        className="text-xl font-bold leading-snug text-anthrazit"
        style={{ fontFamily: "var(--font-narrow)" }}
      >
        {q.text}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-2.5">
        {q.options.map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => pick(opt.pts)}
            className="group flex w-full items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border bg-bg px-5 py-4 text-left text-sm font-medium text-anthrazit transition-all duration-150 hover:border-tuerkis/50 hover:bg-tuerkis/5 active:scale-[0.99]"
          >
            <span className="leading-snug">{opt.label}</span>
            <ArrowRight
              className="h-4 w-4 shrink-0 text-border transition-colors group-hover:text-tuerkis"
              aria-hidden
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────────────────────────────────────────

type Phase = "intro" | "questions" | "result";

interface AIReadinessModalProps {
  trigger: ReactNode;
}

export function AIReadinessModal({ trigger }: AIReadinessModalProps) {
  const [open, setOpen]       = useState(false);
  const [phase, setPhase]     = useState<Phase>("intro");
  const [qIndex, setQIndex]   = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const total = QUESTIONS.length;
  const progress = phase === "intro" ? 0 : phase === "result" ? 100 : Math.round((qIndex / total) * 100);

  function handleStart() {
    setPhase("questions");
    setQIndex(0);
    setAnswers([]);
  }

  function handleAnswer(pts: number) {
    const next = [...answers, pts];
    setAnswers(next);
    if (qIndex < total - 1) {
      setQIndex(qIndex + 1);
    } else {
      setPhase("result");
    }
  }

  function handleReset() {
    setPhase("intro");
    setQIndex(0);
    setAnswers([]);
  }

  function handleOpenChange(v: boolean) {
    setOpen(v);
    if (!v) {
      // Reset on close so next open is fresh
      setTimeout(() => {
        setPhase("intro");
        setQIndex(0);
        setAnswers([]);
      }, 300);
    }
  }

  const modalTitle =
    phase === "intro"
      ? "KI-Readiness Check"
      : phase === "result"
      ? "Dein KI-Reifegrad"
      : `Frage ${qIndex + 1} von ${total}`;

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-anthrazit/60 backdrop-blur-sm motion-safe:data-[state=open]:animate-fade-in" />

        {/* Modal */}
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 flex max-h-[92dvh] w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-2xl focus:outline-none motion-safe:data-[state=open]:animate-scale-in"
          aria-describedby={undefined}
        >
          {/* ── Header ────────────────────────────────────────────────────── */}
          <div className="shrink-0 border-b border-border">
            {/* Progress bar */}
            <div className="h-1 w-full bg-bg-section">
              <div
                className="h-full bg-tuerkis transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-6 py-4 sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-tuerkis">
                  KI-READINESS CHECK
                </p>
                <Dialog.Title className="text-base font-bold text-anthrazit">
                  {modalTitle}
                </Dialog.Title>
              </div>
              <Dialog.Close className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-anthrazit-80 transition-colors hover:border-anthrazit hover:bg-bg-section hover:text-anthrazit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis">
                <X className="h-4 w-4" aria-hidden />
                <span className="sr-only">Schließen</span>
              </Dialog.Close>
            </div>
          </div>

          {/* ── Scrollable content ────────────────────────────────────────── */}
          <div className="flex-1 overflow-y-auto">
            {phase === "intro" && <IntroScreen onStart={handleStart} />}
            {phase === "questions" && (
              <QuestionScreen qIndex={qIndex} onAnswer={handleAnswer} />
            )}
            {phase === "result" && (
              <ResultScreen answers={answers} onReset={handleReset} />
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
