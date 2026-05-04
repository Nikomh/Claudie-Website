"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { CourseFAQData } from "@/content/courseTypes";

export function CourseFAQ({ faq }: { faq: CourseFAQData }) {

  return (
    <Section bg="section" id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-start">

          {/* Left: heading */}
          <Reveal className="flex flex-col gap-3 lg:sticky lg:top-28">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
              {faq.title}
            </h2>
            <p className="text-sm leading-relaxed text-anthrazit-80">
              Noch Fragen?{" "}
              <a
                href="mailto:info@claudiathonet.de"
                className="font-semibold text-tuerkis hover:underline"
              >
                Schreib uns
              </a>{" "}
              — wir antworten persönlich.
            </p>
          </Reveal>

          {/* Right: accordion */}
          <Reveal delay={100}>
            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-border rounded-[var(--radius-md)] border border-border bg-white shadow-sm"
            >
              {faq.items.map((item, i) => (
                <Accordion.Item
                  key={i}
                  value={`faq-${i}`}
                  className="group"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-anthrazit transition-colors hover:text-tuerkis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tuerkis md:text-base">
                      {item.question}
                      <ChevronDown
                        className="h-4 w-4 shrink-0 text-tuerkis transition-transform duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="text-sm leading-relaxed text-anthrazit-80 md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
