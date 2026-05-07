"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, Sparkles, CheckCircle2, BarChart2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";

// ── Types & Questions (mirrored from BusinessAgilityScan) ─────────

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

const QUESTIONS: Question[] = [
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
  return { ...scores, overall: (scores.fuehrung + scores.facilitation + scores.delivery) / 3 };
}

const MATURITY = [
  { max: 0.35, label: "Erste Schritte", tw: "text-orange-500", badge: "bg-orange-100 text-orange-700 border-orange-200" },
  { max: 0.60, label: "Im Aufbau", tw: "text-amber-600", badge: "bg-amber-100 text-amber-700 border-amber-200" },
  { max: 0.80, label: "Fortgeschritten", tw: "text-blue-600", badge: "bg-blue-100 text-blue-700 border-blue-200" },
  { max: 1.01, label: "KI-Ära Ready", tw: "text-tuerkis", badge: "bg-tuerkis/10 text-tuerkis border-tuerkis/30" },
];

const PILLARS: Record<Category, { label: string; href: string; barColor: string; desc: (s: number) => string }> = {
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

function isAnswered(q: Question, answers: Answers): boolean {
  const a = answers[q.id];
  if (q.type === "scale" || q.type === "radio") return typeof a === "number" && a > 0;
  return Array.isArray(a) && a.length > 0;
}

// ── Answer inputs ─────────────────────────────────────────────────

function ScaleInput({ q, value, onChange }: { q: ScaleQ; value: number | undefined; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={cn(
              "flex flex-col items-center gap-1 rounded-[var(--radius-md)] border py-4 text-sm font-bold transition-all",
              value === n
                ? "border-tuerkis bg-tuerkis text-white shadow-md scale-[1.03]"
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
    <div className="flex flex-col gap-2">
      {q.options.map(opt => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "flex items-center gap-3 rounded-[var(--radius-md)] border p-4 text-left text-sm transition-all",
            value === opt.value
              ? "border-tuerkis bg-tuerkis/5 shadow-sm"
              : "border-border bg-white hover:border-tuerkis/50",
          )}
        >
          <div className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
            value === opt.value ? "border-tuerkis bg-tuerkis" : "border-border",
          )}>
            {value === opt.value && <div className="h-2 w-2 rounded-full bg-white" />}
          </div>
          <span className="leading-snug text-anthrazit">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}

function MultiInput({ q, value = [], onChange }: { q: MultiQ; value: string[] | undefined; onChange: (v: string[]) => void }) {
  function toggle(label: string, isGood: boolean) {
    if (isGood) { onChange(value.includes(label) ? [] : [label]); return; }
    const goodLabel = q.options.find(o => o.isGood)?.label;
    const base = value.filter(s => s !== goodLabel);
    onChange(base.includes(label) ? base.filter(s => s !== label) : [...base, label]);
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-anthrazit-80">{q.hint}</p>
      {q.options.map(opt => {
        const checked = value.includes(opt.label);
        return (
          <button
            key={opt.label}
            type="button"
            onClick={() => toggle(opt.label, opt.isGood)}
            className={cn(
              "flex items-center gap-3 rounded-[var(--radius-md)] border p-3.5 text-left text-sm transition-all",
              checked ? "border-tuerkis bg-tuerkis/5 shadow-sm" : "border-border bg-white hover:border-tuerkis/50",
              opt.isGood && "mt-1.5",
            )}
          >
            <div className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border-2 transition-all",
              checked ? "border-tuerkis bg-tuerkis" : "border-border",
            )}>
              {checked && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
            </div>
            <span className={cn("leading-snug text-anthrazit", opt.isGood && "font-medium")}>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Phases ────────────────────────────────────────────────────────

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-5">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-3 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
          <span className="text-xs font-bold uppercase tracking-widest text-tuerkis">Strategischer Einstieg</span>
        </div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
          Business Agility Scan
        </h2>
        <p className="text-base leading-relaxed text-anthrazit-80">
          12 Fragen zu Führung, Facilitation und Business Delivery — in ca. 4 Minuten. Sofortige Auswertung. Keine Anmeldung.
        </p>
        <div className="flex flex-col gap-2">
          {[
            "Ihr Reifegrad-Profil in drei Dimensionen",
            "Konkrete Empfehlungen pro Kategorie",
            "Gezielte Weiterführung zu relevanten Angeboten",
          ].map(t => (
            <div key={t} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 rounded-[var(--radius-lg)] border border-border bg-bg-section p-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-tuerkis/10">
          <Sparkles className="h-10 w-10 text-tuerkis" aria-hidden />
        </div>
        <div className="flex gap-4">
          {[
            { val: "12", lab: "Fragen" },
            { val: "~4", lab: "Minuten" },
            { val: "3", lab: "Kategorien" },
          ].map(b => (
            <div key={b.lab} className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-anthrazit">{b.val}</span>
              <span className="text-xs text-anthrazit-80">{b.lab}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={onStart}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
        >
          Scan starten <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
        <p className="text-xs text-anthrazit-80">Keine Anmeldung · Sofortige Auswertung · 100% kostenlos</p>
      </div>
    </div>
  );
}

function QuestionStep({
  step, total, question, answers,
  onAnswer, onNext, onPrev,
}: {
  step: number; total: number; question: Question; answers: Answers;
  onAnswer: (id: string, val: number | string[]) => void;
  onNext: () => void; onPrev: () => void;
}) {
  const answered = isAnswered(question, answers);
  const catLabel = question.category === "fuehrung"
    ? "Führung & Organisation"
    : question.category === "facilitation"
    ? "Facilitation & Change"
    : "Delivery & Business Agility";

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      {/* Progress */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-anthrazit-80">
          <span className="font-medium">{catLabel}</span>
          <span>Frage {step} von {total}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-tuerkis transition-all duration-300"
            style={{ width: `${((step - 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold leading-snug text-anthrazit md:text-2xl">{question.text}</h3>

      {/* Answer */}
      {question.type === "scale" && (
        <ScaleInput q={question} value={answers[question.id] as number | undefined} onChange={v => onAnswer(question.id, v)} />
      )}
      {question.type === "radio" && (
        <RadioInput q={question} value={answers[question.id] as number | undefined} onChange={v => onAnswer(question.id, v)} />
      )}
      {question.type === "multi" && (
        <MultiInput q={question} value={answers[question.id] as string[] | undefined} onChange={v => onAnswer(question.id, v)} />
      )}

      {/* Nav */}
      <div className="flex items-center gap-3 pt-2">
        {step > 1 && (
          <button
            type="button"
            onClick={onPrev}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-border bg-white text-anthrazit transition-colors hover:bg-bg-section"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
        )}
        <button
          type="button"
          disabled={!answered}
          onClick={onNext}
          className={cn(
            "flex h-11 flex-1 items-center justify-center gap-2 rounded-[var(--radius-md)] text-sm font-semibold transition-all",
            answered
              ? "bg-tuerkis text-white shadow-sm hover:bg-tuerkis-80"
              : "cursor-not-allowed bg-border text-anthrazit-80",
          )}
        >
          {step === total ? "Auswertung ansehen" : "Weiter"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

function Results({ answers, onRestart }: { answers: Answers; onRestart: () => void }) {
  const scores = calcScores(answers);
  const pct = Math.round(scores.overall * 100);
  const maturity = MATURITY.find(m => scores.overall < m.max)!;

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <BarChart2 className="h-5 w-5 text-tuerkis" aria-hidden />
          <span className="text-sm font-semibold text-tuerkis">Ihre Auswertung</span>
        </div>
        <div className="flex items-end gap-3">
          <span className={cn("text-6xl font-bold", maturity.tw)}>{pct}%</span>
          <span className={cn("mb-1.5 rounded-full border px-3 py-1 text-sm font-semibold", maturity.badge)}>
            {maturity.label}
          </span>
        </div>
        <p className="max-w-[44ch] text-sm text-anthrazit-80">
          Business Agility Score — basierend auf Ihren Antworten zu Führung, Facilitation und Delivery.
        </p>
      </div>

      {/* Category scores */}
      <div className="grid gap-4 md:grid-cols-3">
        {(["fuehrung", "facilitation", "delivery"] as Category[]).map(cat => {
          const p = PILLARS[cat];
          const catPct = Math.round(scores[cat] * 100);
          return (
            <div key={cat} className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-anthrazit">{p.label}</span>
                <span className="text-lg font-bold text-anthrazit">{catPct}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-border">
                <div className={cn("h-full rounded-full transition-all", p.barColor)} style={{ width: `${catPct}%` }} />
              </div>
              <p className="text-xs leading-snug text-anthrazit-80">{p.desc(scores[cat])}</p>
              <Link
                href={p.href}
                className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-tuerkis hover:underline"
              >
                Zur Säule <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] bg-anthrazit px-6 py-8 text-center">
        <p className="text-lg font-bold text-white">Ergebnisse im Gespräch vertiefen?</p>
        <p className="max-w-[44ch] text-sm text-white/65">
          30 Minuten. Wir zeigen, welche Interventionen für Ihre konkrete Situation sinnvoll sind — ohne Verpflichtung.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakt"
            className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-5 text-sm font-semibold text-white transition-all hover:bg-tuerkis-80"
          >
            Erstgespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-5 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Scan wiederholen
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────

export function InlineBusinessAgilityScan() {
  const [phase, setPhase] = useState<"intro" | "questions" | "results">("intro");
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});

  function setAnswer(id: string, val: number | string[]) {
    setAnswers(prev => ({ ...prev, [id]: val }));
  }

  function handleNext() {
    if (step < QUESTIONS.length) { setStep(s => s + 1); }
    else { setPhase("results"); }
  }

  function restart() {
    setPhase("intro");
    setStep(1);
    setAnswers({});
  }

  return (
    <div className="w-full">
      {phase === "intro" && <Intro onStart={() => setPhase("questions")} />}
      {phase === "questions" && (
        <QuestionStep
          step={step}
          total={QUESTIONS.length}
          question={QUESTIONS[step - 1]}
          answers={answers}
          onAnswer={setAnswer}
          onNext={handleNext}
          onPrev={() => setStep(s => s - 1)}
        />
      )}
      {phase === "results" && <Results answers={answers} onRestart={restart} />}
    </div>
  );
}
