"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowRight, ChevronLeft, Sparkles, CheckCircle2, BarChart2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

// ── Types ─────────────────────────────────────────────────────────

type Category = "fuehrung" | "facilitation" | "delivery";

type ScaleQ = {
  type: "scale"; id: string; category: Category;
  text: string; minLabel: string; maxLabel: string;
};
type RadioQ = {
  type: "radio"; id: string; category: Category;
  text: string; options: { label: string; value: number }[];
};
type MultiQ = {
  type: "multi"; id: string; category: Category;
  text: string; hint: string;
  options: { label: string; isGood: boolean }[];
};
type Question = ScaleQ | RadioQ | MultiQ;
type Answers = Record<string, number | string[]>;

// ── Questions ─────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  // — Führung (4) —
  {
    type: "scale", id: "q1", category: "fuehrung",
    text: "Wie klar ist das Zielbild für Ihre aktuelle Transformation?",
    minLabel: "Unklar", maxLabel: "Sehr klar",
  },
  {
    type: "scale", id: "q2", category: "fuehrung",
    text: "Wie aktiv unterstützt Ihre Führungsebene Veränderungsinitiativen?",
    minLabel: "Kaum", maxLabel: "Sehr stark",
  },
  {
    type: "multi", id: "q3", category: "fuehrung",
    text: "Welche Herausforderungen hat Ihr Führungsteam aktuell?",
    hint: "Mehrere möglich",
    options: [
      { label: "Widerstand gegen Veränderung", isGood: false },
      { label: "Unklare Rollen und Verantwortlichkeiten", isGood: false },
      { label: "Zu viele Initiativen gleichzeitig", isGood: false },
      { label: "Fehlende KI-Kompetenz", isGood: false },
      { label: "Lange Entscheidungswege", isGood: false },
      { label: "Keine der genannten", isGood: true },
    ],
  },
  {
    type: "scale", id: "q4", category: "fuehrung",
    text: "Wie schnell reagiert Ihre Führungsebene auf neue Anforderungen?",
    minLabel: "Sehr langsam", maxLabel: "Sehr schnell",
  },
  // — Facilitation (4) —
  {
    type: "scale", id: "q5", category: "facilitation",
    text: "Wie effektiv sind Ihre internen Workshops, Meetings und Retrospektiven?",
    minLabel: "Wenig effektiv", maxLabel: "Sehr effektiv",
  },
  {
    type: "radio", id: "q6", category: "facilitation",
    text: "Wie laufen Veränderungsprozesse typischerweise bei Ihnen ab?",
    options: [
      { label: "Meist top-down, wenig Beteiligung der Betroffenen", value: 1 },
      { label: "Einbindung vorhanden, aber Follow-through fehlt oft", value: 2 },
      { label: "Partizipativ gestaltet und konsequent nachgehalten", value: 3 },
    ],
  },
  {
    type: "scale", id: "q7", category: "facilitation",
    text: "Wie hoch ist die psychologische Sicherheit in Ihren Teams?",
    minLabel: "Niedrig", maxLabel: "Hoch",
  },
  {
    type: "multi", id: "q8", category: "facilitation",
    text: "Was fehlt Ihren internen Change Agents und Coaches?",
    hint: "Mehrere möglich",
    options: [
      { label: "KI-Transformationskompetenz", isGood: false },
      { label: "Facilitation und Workshopdesign", isGood: false },
      { label: "Systemische Coaching-Tiefe", isGood: false },
      { label: "Zeit und Kapazität", isGood: false },
      { label: "Methodenvielfalt", isGood: false },
      { label: "Nichts — gut aufgestellt", isGood: true },
    ],
  },
  // — Delivery (4) —
  {
    type: "scale", id: "q9", category: "delivery",
    text: "Wie gut verbinden Sie agile Arbeitsweisen mit messbarem Geschäftswert?",
    minLabel: "Kaum", maxLabel: "Sehr gut",
  },
  {
    type: "radio", id: "q10", category: "delivery",
    text: "Wie nutzen Ihre Teams KI in der täglichen Arbeit?",
    options: [
      { label: "Noch nicht oder nur ganz vereinzelt", value: 1 },
      { label: "Einzelne Tools, ohne gemeinsame Systematik", value: 2 },
      { label: "Systematisch in Workflows und Routinen integriert", value: 3 },
    ],
  },
  {
    type: "scale", id: "q11", category: "delivery",
    text: "Wie klar und fokussiert sind Ihre strategischen Ziele (z.B. OKRs)?",
    minLabel: "Unklar / Zu viele", maxLabel: "Sehr klar",
  },
  {
    type: "scale", id: "q12", category: "delivery",
    text: "Wie schnell kann Ihre Organisation auf veränderte Marktanforderungen reagieren?",
    minLabel: "Sehr langsam", maxLabel: "Sehr schnell",
  },
];

// ── Scoring ───────────────────────────────────────────────────────

function scoreQ(q: Question, a: number | string[] | undefined): number {
  if (a === undefined) return 0;
  if (q.type === "scale") return ((a as number) - 1) / 4;
  if (q.type === "radio") return ((a as number) - 1) / 2;
  // multi
  const sel = a as string[];
  if (sel.some(s => q.options.find(o => o.label === s)?.isGood)) return 1;
  const neg = sel.filter(s => !q.options.find(o => o.label === s)?.isGood).length;
  return Math.max(0, 1 - neg * 0.22);
}

function calcScores(answers: Answers) {
  const cats: Category[] = ["fuehrung", "facilitation", "delivery"];
  const scores: Record<Category, number> = { fuehrung: 0, facilitation: 0, delivery: 0 };
  for (const cat of cats) {
    const qs = QUESTIONS.filter(q => q.category === cat);
    scores[cat] = qs.reduce((sum, q) => sum + scoreQ(q, answers[q.id]), 0) / qs.length;
  }
  const overall = (scores.fuehrung + scores.facilitation + scores.delivery) / 3;
  return { ...scores, overall };
}

const MATURITY = [
  { max: 0.35, label: "Erste Schritte", tw: "text-orange-500", badge: "bg-orange-100 text-orange-700 border-orange-200" },
  { max: 0.60, label: "Im Aufbau", tw: "text-amber-600", badge: "bg-amber-100 text-amber-700 border-amber-200" },
  { max: 0.80, label: "Fortgeschritten", tw: "text-blue-600", badge: "bg-blue-100 text-blue-700 border-blue-200" },
  { max: 1.01, label: "KI-Ära Ready", tw: "text-tuerkis", badge: "bg-tuerkis/10 text-tuerkis border-tuerkis/30" },
];

function getMaturity(score: number) {
  return MATURITY.find(m => score < m.max)!;
}

const PILLARS: Record<Category, { label: string; href: string; desc: (s: number) => string; barColor: string }> = {
  fuehrung: {
    label: "Adaptive Führung",
    href: "/beratung/neue-startseite/adaptive-fuehrung",
    barColor: "bg-tuerkis",
    desc: s => s < 0.4
      ? "Klares Transformationszielbild, schnellere Entscheidungsstrukturen und KI-Kompetenz aufbauen."
      : s < 0.70
      ? "Führungskompetenzen für die KI-Ära schärfen und Entscheidungsgeschwindigkeit erhöhen."
      : "Führungsstärke als Multiplikator nutzen — KI-Leadership weiter vertiefen.",
  },
  facilitation: {
    label: "Facilitation & Change",
    href: "/beratung/neue-startseite/transformation-facilitation",
    barColor: "bg-blue-500",
    desc: s => s < 0.4
      ? "Change-Kapazität aufbauen: Facilitation, psychologische Sicherheit und klare Prozesse."
      : s < 0.70
      ? "KI-unterstützte Facilitation und systemisches Coaching als nächste Stufe."
      : "Exzellente Basis — KI als Verstärker für Facilitation und Coaching integrieren.",
  },
  delivery: {
    label: "Business Agility",
    href: "/beratung/neue-startseite/outcome-agilitaet",
    barColor: "bg-violet-500",
    desc: s => s < 0.4
      ? "Agile Praxis mit Geschäftswert verbinden: OKRs, Outcome-Metriken und KI-Workflows priorisieren."
      : s < 0.70
      ? "Strukturierte OKRs und klare Outcome-Metriken bringen den Durchbruch."
      : "Systematische KI-Integration und Portfolio-Steuerung für maximale Geschwindigkeit.",
  },
};

// ── Helpers ───────────────────────────────────────────────────────

function isAnswered(q: Question, answers: Answers): boolean {
  const a = answers[q.id];
  if (q.type === "scale" || q.type === "radio") return typeof a === "number" && a > 0;
  return Array.isArray(a) && a.length > 0;
}

// ── Sub-components ────────────────────────────────────────────────

function ScaleInput({ q, value, onChange }: { q: ScaleQ; value: number | undefined; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-stretch gap-2">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={cn(
              "flex flex-1 flex-col items-center gap-1.5 rounded-[var(--radius-md)] border py-4 text-sm font-bold transition-all",
              value === n
                ? "border-tuerkis bg-tuerkis text-white shadow-md"
                : "border-border bg-white text-anthrazit hover:border-tuerkis/60 hover:text-tuerkis",
            )}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex justify-between px-1 text-xs text-anthrazit-80">
        <span>{q.minLabel}</span>
        <span>{q.maxLabel}</span>
      </div>
    </div>
  );
}

function RadioInput({ q, value, onChange }: { q: RadioQ; value: number | undefined; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col gap-2.5">
      {q.options.map(opt => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "flex items-center gap-3 rounded-[var(--radius-md)] border p-4 text-left text-sm transition-all",
            value === opt.value
              ? "border-tuerkis bg-tuerkis/5 text-anthrazit shadow-sm"
              : "border-border bg-white text-anthrazit hover:border-tuerkis/50",
          )}
        >
          <div className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
            value === opt.value ? "border-tuerkis bg-tuerkis" : "border-border",
          )}>
            {value === opt.value && <div className="h-2 w-2 rounded-full bg-white" />}
          </div>
          <span className="leading-snug">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}

function MultiInput({ q, value = [], onChange }: { q: MultiQ; value: string[] | undefined; onChange: (v: string[]) => void }) {
  const sel = value ?? [];

  function toggle(label: string, isGood: boolean) {
    if (isGood) {
      onChange(sel.includes(label) ? [] : [label]);
      return;
    }
    const goodOption = q.options.find(o => o.isGood)?.label;
    const withoutGood = sel.filter(s => s !== goodOption);
    if (withoutGood.includes(label)) {
      onChange(withoutGood.filter(s => s !== label));
    } else {
      onChange([...withoutGood, label]);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="mb-1 text-xs text-anthrazit-80">{q.hint}</p>
      {q.options.map(opt => {
        const checked = sel.includes(opt.label);
        return (
          <button
            key={opt.label}
            type="button"
            onClick={() => toggle(opt.label, opt.isGood)}
            className={cn(
              "flex items-center gap-3 rounded-[var(--radius-md)] border p-3.5 text-left text-sm transition-all",
              checked
                ? "border-tuerkis bg-tuerkis/5 text-anthrazit shadow-sm"
                : "border-border bg-white text-anthrazit hover:border-tuerkis/50",
              opt.isGood && "mt-2",
            )}
          >
            <div className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border-2 transition-all",
              checked ? "border-tuerkis bg-tuerkis" : "border-border",
            )}>
              {checked && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
            </div>
            <span className={cn("leading-snug", opt.isGood && "font-medium")}>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Results ───────────────────────────────────────────────────────

function Results({ answers, onRestart }: { answers: Answers; onRestart: () => void }) {
  const scores = calcScores(answers);
  const pct = Math.round(scores.overall * 100);
  const maturity = getMaturity(scores.overall);

  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <BarChart2 className="h-5 w-5 text-tuerkis" aria-hidden />
          <span className="text-sm font-semibold text-tuerkis">Ihre Auswertung</span>
        </div>
        <div className="flex items-end gap-3">
          <span className={cn("text-5xl font-bold", maturity.tw)}>{pct}%</span>
          <span className={cn("mb-1 rounded-full border px-3 py-0.5 text-sm font-semibold", maturity.badge)}>
            {maturity.label}
          </span>
        </div>
        <p className="text-sm text-anthrazit-80">
          Business Agility Score — basierend auf Ihren Antworten zu Führung, Facilitation und Delivery.
        </p>
      </div>

      {/* Category bars */}
      <div className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-bg-section p-4">
        {(["fuehrung", "facilitation", "delivery"] as Category[]).map(cat => {
          const p = PILLARS[cat];
          const catPct = Math.round(scores[cat] * 100);
          return (
            <div key={cat} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-anthrazit">{p.label}</span>
                <span className="text-xs font-bold text-anthrazit">{catPct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-border">
                <div
                  className={cn("h-full rounded-full transition-all", p.barColor)}
                  style={{ width: `${catPct}%` }}
                />
              </div>
              <p className="text-xs leading-snug text-anthrazit-80">{p.desc(scores[cat])}</p>
            </div>
          );
        })}
      </div>

      {/* Pillar links */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-anthrazit-80">Empfohlene nächste Schritte</p>
        {(["fuehrung", "facilitation", "delivery"] as Category[]).map(cat => {
          const p = PILLARS[cat];
          const catScore = scores[cat];
          const priority = catScore < 0.5 ? "Hohe Priorität" : catScore < 0.75 ? "Empfohlen" : "Vertiefung";
          return (
            <Dialog.Close asChild key={cat}>
              <Link
                href={p.href}
                className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border bg-white p-3.5 text-sm transition-all hover:border-tuerkis/50 hover:shadow-sm"
              >
                <div>
                  <span className="font-semibold text-anthrazit">{p.label}</span>
                  <span className="ml-2 rounded-full bg-bg-section px-2 py-0.5 text-xs text-anthrazit-80">{priority}</span>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
              </Link>
            </Dialog.Close>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-2.5 rounded-[var(--radius-md)] bg-anthrazit p-5 text-center">
        <p className="text-sm font-semibold text-white">Ergebnisse besprechen?</p>
        <p className="text-xs text-white/65">30 Minuten Erstgespräch — wir zeigen, welche Interventionen für Ihre Situation sinnvoll sind.</p>
        <Dialog.Close asChild>
          <Link
            href="/kontakt"
            className="mt-1 inline-flex h-10 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-5 text-sm font-semibold text-white transition-all hover:bg-tuerkis-80"
          >
            Erstgespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Dialog.Close>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="text-center text-xs text-anthrazit-80 underline-offset-2 hover:underline"
      >
        Scan neu starten
      </button>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────

export function BusinessAgilityScan({
  label = "Business Agility Scan starten",
  className,
  variant = "primary",
}: {
  label?: string;
  className?: string;
  variant?: "primary" | "outline" | "white";
}) {
  const [step, setStep] = useState(0); // 0 = intro, 1-12 = questions, 13 = results
  const [answers, setAnswers] = useState<Answers>({});

  const totalQ = QUESTIONS.length;
  const isIntro = step === 0;
  const isResults = step === totalQ + 1;
  const currentQ = !isIntro && !isResults ? QUESTIONS[step - 1] : null;
  const canProceed = currentQ ? isAnswered(currentQ, answers) : false;

  function setAnswer(id: string, val: number | string[]) {
    setAnswers(prev => ({ ...prev, [id]: val }));
  }

  function reset() {
    setStep(0);
    setAnswers({});
  }

  const triggerClass = cn(
    "inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] px-6 text-sm font-semibold transition-all",
    variant === "primary" && "bg-tuerkis text-white shadow-md hover:bg-tuerkis-80",
    variant === "outline" && "border border-white/25 text-white/80 hover:border-white/50 hover:text-white",
    variant === "white" && "bg-white text-tuerkis shadow-md hover:shadow-lg hover:-translate-y-0.5",
    className,
  );

  return (
    <Dialog.Root onOpenChange={open => { if (!open) reset(); }}>
      <Dialog.Trigger asChild>
        <button type="button" className={triggerClass}>
          <Sparkles className="h-4 w-4" aria-hidden />
          {label}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-anthrazit/50 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-2xl data-[state=open]:animate-fade-in"
          style={{ maxHeight: "min(90vh, 720px)" }}
        >
          {/* Close button */}
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Schließen"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-anthrazit-80 transition-colors hover:bg-bg-section"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </Dialog.Close>

          <div className="overflow-y-auto" style={{ maxHeight: "min(90vh, 720px)" }}>

            {/* INTRO */}
            {isIntro && (
              <div className="flex flex-col items-center gap-6 p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tuerkis/10">
                  <Sparkles className="h-8 w-8 text-tuerkis" aria-hidden />
                </div>
                <Dialog.Title className="text-2xl font-bold text-anthrazit">Business Agility Scan</Dialog.Title>
                <Dialog.Description className="max-w-[38ch] text-sm leading-relaxed text-anthrazit-80">
                  12 Fragen zu Führung, Facilitation und Business Delivery — in ca. 4 Minuten. Keine Anmeldung. Sofortige Auswertung.
                </Dialog.Description>
                <div className="flex flex-col gap-2.5 w-full text-sm text-left">
                  {[
                    "Ihr Reifegradprofil in drei Dimensionen",
                    "Konkrete Empfehlungen pro Kategorie",
                    "Gezielte Weiterführung zu relevanten Angeboten",
                  ].map(t => (
                    <div key={t} className="flex items-center gap-2.5 text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {t}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
                >
                  Scan starten <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            )}

            {/* QUESTION */}
            {currentQ && (
              <div className="flex flex-col gap-6 p-6 md:p-8">
                {/* Progress */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-anthrazit-80">
                    <span>
                      {currentQ.category === "fuehrung" ? "Führung & Organisation" :
                       currentQ.category === "facilitation" ? "Facilitation & Change" :
                       "Delivery & Business Agility"}
                    </span>
                    <span>Frage {step} von {totalQ}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-tuerkis transition-all"
                      style={{ width: `${((step - 1) / totalQ) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question text */}
                <Dialog.Title className="text-lg font-bold leading-snug text-anthrazit md:text-xl">
                  {currentQ.text}
                </Dialog.Title>
                <Dialog.Description className="sr-only">Frage {step} von {totalQ}</Dialog.Description>

                {/* Answer UI */}
                {currentQ.type === "scale" && (
                  <ScaleInput
                    q={currentQ}
                    value={answers[currentQ.id] as number | undefined}
                    onChange={v => setAnswer(currentQ.id, v)}
                  />
                )}
                {currentQ.type === "radio" && (
                  <RadioInput
                    q={currentQ}
                    value={answers[currentQ.id] as number | undefined}
                    onChange={v => setAnswer(currentQ.id, v)}
                  />
                )}
                {currentQ.type === "multi" && (
                  <MultiInput
                    q={currentQ}
                    value={answers[currentQ.id] as string[] | undefined}
                    onChange={v => setAnswer(currentQ.id, v)}
                  />
                )}

                {/* Navigation */}
                <div className="flex items-center gap-3 pt-2">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(s => s - 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-white text-anthrazit transition-colors hover:bg-bg-section"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden />
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={!canProceed}
                    onClick={() => setStep(s => s + 1)}
                    className={cn(
                      "flex h-10 flex-1 items-center justify-center gap-2 rounded-[var(--radius-md)] text-sm font-semibold transition-all",
                      canProceed
                        ? "bg-tuerkis text-white shadow-sm hover:bg-tuerkis-80"
                        : "cursor-not-allowed bg-border text-anthrazit-80",
                    )}
                  >
                    {step === totalQ ? "Auswertung ansehen" : "Weiter"}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </div>
            )}

            {/* RESULTS */}
            {isResults && (
              <Results answers={answers} onRestart={reset} />
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
