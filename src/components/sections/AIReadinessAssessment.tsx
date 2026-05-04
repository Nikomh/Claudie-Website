"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: "nutzung",
    text: "Wie nutzt du KI-Tools heute?",
    options: [
      { label: "Noch gar nicht — ich erkunde gerade, was das bedeutet", pts: 1 },
      { label: "Gelegentlich, ohne feste Routine", pts: 2 },
      { label: "Regelmäßig, aber ohne klare Struktur dahinter", pts: 2 },
      { label: "Täglich — ich will strukturierter werden", pts: 3 },
    ],
  },
  {
    id: "organisation",
    text: "Was passiert in deinem Unternehmen, wenn KI-Themen aufkommen?",
    options: [
      { label: "Das wird an die IT delegiert", pts: 1 },
      { label: "Es gibt einzelne Nutzer, aber kein System dahinter", pts: 2 },
      { label: "Erste Piloten laufen — aber noch keine Strategie", pts: 2 },
      { label: "Strategie vorhanden, aber sie landet nicht bei den Führungskräften", pts: 3 },
    ],
  },
  {
    id: "unsicherheit",
    text: "Was beschäftigt dich bei KI im Führungsalltag am meisten?",
    options: [
      { label: "Ich weiß nicht, wann KI wirklich hilft — und wann nicht", pts: 2 },
      { label: "Datenschutz und EU-Compliance", pts: 2 },
      { label: "Wie nehme ich mein Team dabei mit?", pts: 3 },
      { label: "Ich habe keine konkreten Unsicherheiten mehr", pts: 3 },
    ],
  },
  {
    id: "zeit",
    text: "Was ist realistisch für dich?",
    options: [
      { label: "Maximal ein halber Tag — danach muss es sitzen", pts: 1 },
      { label: "8 Stunden online — wenn der Nutzen klar ist", pts: 2 },
      { label: "15 Stunden über 3 Monate — kein Problem", pts: 3 },
      { label: "Ich entscheide nach dem Gespräch", pts: 2 },
    ],
  },
  {
    id: "ziel",
    text: "Was soll nach dem Sprint anders sein?",
    options: [
      { label: "Ich will verstehen, was KI für Führungskräfte bedeutet", pts: 1 },
      { label: "Ich will klar entscheiden können, wann ich KI einsetze", pts: 2 },
      { label: "Ich will eine eigene KI-Praxis entwickelt haben", pts: 3 },
      { label: "Ich will compliant agieren und das belegen können", pts: 2 },
    ],
  },
] as const;

type ResultKey = "einsteiger" | "ready" | "fortgeschritten";

const RESULTS: Record<
  ResultKey,
  {
    level: string;
    badge: string;
    badgeText: string;
    headline: string;
    body: string;
    cta: { label: string; href: string };
    secondary?: { label: string; href: string };
  }
> = {
  einsteiger: {
    level: "KI-Einsteiger",
    badge: "bg-amber-50 border border-amber-200 text-amber-700",
    badgeText: "Einsteiger-Level",
    headline: "Erst der Boden, dann der Sprint.",
    body: "Du stehst am Anfang — das ist der perfekte Zeitpunkt, um die richtigen Grundlagen zu legen. Bevor der Sprint das Richtige ist, empfehlen wir das AI Leadership Briefing: ein halbtägiges Format, das Klarheit schafft und den Boden bereitet.",
    cta: { label: "Briefing anfragen", href: "#gespraech" },
    secondary: { label: "Trotzdem: Gespräch über den Sprint →", href: "#gespraech" },
  },
  ready: {
    level: "Bereit für den Sprint",
    badge: "bg-[#d8f3f5] border border-[#b8e8eb] text-tuerkis",
    badgeText: "Sprint-Level ✓",
    headline: "Du hast genau die richtige Ausgangslage.",
    body: "Erste KI-Erfahrung, aber noch keine eigene Entscheidungsstruktur. Genau diese Lücke schließt der Sprint — in 9 Tagen, mit einer Praxis, die im Alltag bleibt.",
    cta: { label: "Gespräch vereinbaren", href: "#gespraech" },
  },
  fortgeschritten: {
    level: "KI-Praktiker",
    badge: "bg-anthrazit border border-anthrazit/20 text-tuerkis-50",
    badgeText: "Fortgeschritten",
    headline: "Du schärfst, was du aufgebaut hast.",
    body: "Du bist schon weiter als die meisten. Der Sprint gibt dir keine Grundlagen mehr — er gibt dir eine Entscheidungsarchitektur, die du ins Team tragen kannst. Und den EU AI Act erledigst du nebenbei.",
    cta: { label: "Gespräch vereinbaren", href: "#gespraech" },
    secondary: { label: "Zur Inhouse-Variante →", href: "#investition" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────

export function AIReadinessAssessment() {
  const [step, setStep]   = useState(0);
  const [pts, setPts]     = useState<number[]>([]);
  const [fading, setFading] = useState(false);
  const [done, setDone]   = useState(false);

  const total = QUESTIONS.length;

  function pick(p: number) {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      const next = [...pts, p];
      setPts(next);
      if (step < total - 1) {
        setStep(step + 1);
      } else {
        setDone(true);
      }
      setFading(false);
    }, 190);
  }

  function reset() {
    setStep(0);
    setPts([]);
    setDone(false);
    setFading(false);
  }

  function getResultKey(): ResultKey {
    const avg = pts.reduce((a, b) => a + b, 0) / pts.length;
    if (avg <= 1.6) return "einsteiger";
    if (avg >= 2.5) return "fortgeschritten";
    return "ready";
  }

  // ── Result ────────────────────────────────────────────────────────────────
  if (done) {
    const r = RESULTS[getResultKey()];
    return (
      <div className="mx-auto max-w-[560px] motion-safe:animate-fade-in-up">
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-[0_4px_24px_rgba(51,58,69,0.1)]">
          {/* Header bar */}
          <div className="border-b border-border bg-bg-section px-8 py-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-anthrazit-80">
                Dein KI-Reifegrad
              </span>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-xs font-semibold text-anthrazit-80 transition-colors hover:text-tuerkis"
                type="button"
              >
                <RotateCcw className="h-3 w-3" aria-hidden />
                Nochmal
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Level badge */}
            <div className={cn("mb-5 inline-flex items-center rounded-[var(--radius-sm)] px-3 py-1 text-xs font-bold tracking-[0.06em]", r.badge)}>
              {r.badgeText}
            </div>

            {/* Headline */}
            <h3
              className="mb-3 text-2xl font-bold leading-tight text-anthrazit md:text-3xl"
              style={{ fontFamily: "var(--font-narrow)" }}
            >
              {r.headline}
            </h3>

            {/* Body */}
            <p className="mb-7 text-base leading-relaxed text-anthrazit-80">
              {r.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={r.cta.href}
                className={buttonVariants({ variant: "primary", size: "md" })}
              >
                {r.cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              {r.secondary && (
                <Link
                  href={r.secondary.href}
                  className="text-sm font-semibold text-tuerkis hover:underline"
                >
                  {r.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Question ──────────────────────────────────────────────────────────────
  const q = QUESTIONS[step];

  return (
    <div className="mx-auto max-w-[560px]">
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-[0_4px_24px_rgba(51,58,69,0.1)]">
        {/* Progress */}
        <div className="border-b border-border bg-bg-section px-8 py-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-anthrazit-80">
              Frage {step + 1} von {total}
            </span>
            <div className="flex gap-1.5">
              {Array.from({ length: total }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i < step
                      ? "w-4 bg-tuerkis"
                      : i === step
                      ? "w-4 bg-tuerkis/40"
                      : "w-1.5 bg-border",
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Question + options */}
        <div
          className={cn(
            "p-8 transition-opacity duration-[190ms]",
            fading ? "opacity-0" : "opacity-100",
          )}
        >
          <p
            className="mb-6 text-xl font-bold leading-snug text-anthrazit"
            style={{ fontFamily: "var(--font-narrow)" }}
          >
            {q.text}
          </p>

          <div className="flex flex-col gap-2.5">
            {q.options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => pick(opt.pts)}
                className="group flex w-full items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border bg-bg px-5 py-4 text-left text-sm font-medium text-anthrazit transition-all duration-150 hover:border-tuerkis/50 hover:bg-tuerkis/5 hover:text-anthrazit active:scale-[0.99]"
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
      </div>
    </div>
  );
}
