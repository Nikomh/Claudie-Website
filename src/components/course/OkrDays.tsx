"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { okrCoachContent } from "@/content/okrCoach";

export function OkrDays() {
  const { days } = okrCoachContent;

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 md:mb-14">
            <Eyebrow>{days.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
              {days.title}
            </h2>
            <p className="max-w-[60ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">
              {days.lead}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="day-1"
            className="divide-y divide-border rounded-[var(--radius-md)] border border-border bg-white shadow-sm"
          >
            {days.items.map((day) => (
              <Accordion.Item
                key={day.number}
                value={`day-${day.number}`}
                className="group"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center gap-5 px-6 py-5 text-left transition-colors hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tuerkis">
                    <span className="flex h-8 w-20 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-anthrazit text-xs font-bold text-white">
                      {day.label}
                    </span>
                    <span className="flex-1 text-base font-semibold text-anthrazit leading-snug">
                      {day.title}
                    </span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-tuerkis transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="border-t border-border px-6 pb-6 pt-5">
                    <p className="mb-4 text-sm leading-relaxed text-anthrazit-80">
                      {day.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {day.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-sm text-anthrazit">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" aria-hidden />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-6 rounded-[var(--radius-md)] border border-tuerkis/20 bg-tuerkis/5 px-6 py-5">
            <p className="text-sm leading-relaxed text-anthrazit">
              <span className="font-semibold text-tuerkis">Inklusive: </span>
              {days.supervision}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
