"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

export interface AccordionItem {
  id: string;
  trigger: string;
  text?: string;
  points?: string[];
}

function AccordionContent({ items }: { items: AccordionItem[] }) {
  return (
    <>
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="border-b border-border last:border-0"
        >
          <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
            <span className="text-base font-semibold text-anthrazit transition-colors group-hover:text-tuerkis md:text-lg">
              {item.trigger}
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-all group-hover:border-tuerkis group-data-[state=open]:border-tuerkis group-data-[state=open]:bg-tuerkis group-data-[state=open]:text-white">
              <Plus
                className="h-4 w-4 group-data-[state=open]:hidden"
                aria-hidden
              />
              <Minus
                className="hidden h-4 w-4 group-data-[state=open]:block"
                aria-hidden
              />
            </span>
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pb-6 text-sm leading-relaxed text-anthrazit-80 md:text-base">
              {item.text && <p>{item.text}</p>}
              {item.points && (
                <ul className="mt-3 flex flex-col gap-2.5">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis"
                        aria-hidden
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </>
  );
}

export function SprintAccordion({
  items,
  multiple = false,
}: {
  items: AccordionItem[];
  multiple?: boolean;
}) {
  if (multiple) {
    return (
      <Accordion.Root type="multiple" className="divide-y-0">
        <AccordionContent items={items} />
      </Accordion.Root>
    );
  }
  return (
    <Accordion.Root type="single" collapsible className="divide-y-0">
      <AccordionContent items={items} />
    </Accordion.Root>
  );
}
