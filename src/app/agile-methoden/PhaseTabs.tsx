"use client";

import { useState } from "react";
import { PHASES } from "./phases";

export function PhaseTabs() {
  const [active, setActive] = useState("think-new");
  const activePhase = PHASES.find((p) => p.id === active) ?? PHASES[0];
  const Icon = activePhase.icon;

  return (
    <div className="mt-10 flex flex-col gap-8">
      {/* Tab pills */}
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="TPDCA-Phasen"
      >
        {PHASES.map((phase) => {
          const PhaseIcon = phase.icon;
          const isActive = phase.id === active;
          return (
            <button
              key={phase.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${phase.id}`}
              onClick={() => setActive(phase.id)}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis",
                isActive
                  ? `${phase.color} border-transparent text-white shadow-md`
                  : "border-border bg-white text-anthrazit-80 hover:border-anthrazit/30 hover:text-anthrazit",
              ].join(" ")}
            >
              <PhaseIcon className="h-3.5 w-3.5" aria-hidden />
              {phase.label}
            </button>
          );
        })}
      </div>

      {/* Active phase panel */}
      <div
        id={`panel-${activePhase.id}`}
        role="tabpanel"
        className={`rounded-[var(--radius-lg)] border ${activePhase.borderColor}/20 ${activePhase.bgLight} p-6 md:p-8`}
      >
        {/* Phase header */}
        <div className="mb-6 flex items-start gap-4">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${activePhase.color}`}
          >
            <Icon className="h-5 w-5 text-white" aria-hidden />
          </div>
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-widest ${activePhase.textColor}`}
            >
              {activePhase.label}
            </p>
            <h3 className="mt-0.5 text-xl font-bold text-anthrazit">
              {activePhase.title}
            </h3>
            <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-anthrazit-80">
              {activePhase.description}
            </p>
          </div>
        </div>

        {/* Method cards grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activePhase.methods.map((method) => (
            <div
              key={method.name}
              className="rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm"
            >
              <p className="font-semibold text-anthrazit">{method.name}</p>
              <p className="mt-1 text-sm text-anthrazit-80">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
