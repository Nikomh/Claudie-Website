"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { CourseModulesData } from "@/content/courseTypes";

export function CourseModules({ modules }: { modules: CourseModulesData }) {

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 md:mb-14">
            <Eyebrow>{modules.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
              {modules.title}
            </h2>
            <p className="max-w-[60ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">
              {modules.lead}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="module-1"
            className="divide-y divide-border rounded-[var(--radius-md)] border border-border bg-white shadow-sm"
          >
            {modules.items.map((mod) => (
              <Accordion.Item
                key={mod.number}
                value={`module-${mod.number}`}
                className="group"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center gap-5 px-6 py-5 text-left transition-colors hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tuerkis">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis text-xs font-bold text-white">
                      {String(mod.number).padStart(2, "0")}
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <span className="text-base font-semibold text-anthrazit leading-snug">
                        {mod.title}
                      </span>
                      <span className="text-xs text-anthrazit-80">{mod.format}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden text-xs font-medium text-anthrazit-80 sm:block">
                        {mod.trainers.join(", ")}
                      </span>
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-tuerkis transition-transform duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="border-t border-border px-6 pb-6 pt-5">
                    <p className="mb-4 text-sm leading-relaxed text-anthrazit-80">
                      {mod.description}
                    </p>
                    <ul className="mb-5 flex flex-col gap-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-sm text-anthrazit">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" aria-hidden />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {mod.trainers.map((trainer) => (
                        <span
                          key={trainer}
                          className="inline-flex items-center rounded-full bg-tuerkis/10 px-3 py-1 text-xs font-semibold text-tuerkis"
                        >
                          {trainer}
                        </span>
                      ))}
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>

        {/* Add-ons */}
        <Reveal delay={200}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {modules.addons.map((addon) => (
              <div
                key={addon.title}
                className="rounded-[var(--radius-md)] border border-border bg-bg-section p-5"
              >
                <p className="mb-1.5 font-semibold text-anthrazit">{addon.title}</p>
                <p className="text-sm leading-relaxed text-anthrazit-80">{addon.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
