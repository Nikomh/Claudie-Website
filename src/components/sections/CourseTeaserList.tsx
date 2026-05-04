"use client";

import Link from "next/link";
import { ArrowRight, Calendar, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent, type CourseTeaser } from "@/content/home";
import { cn } from "@/lib/cn";

const VISIBLE = 4;

type Tab = "ausbildung" | "masterclass";

const TABS: { id: Tab; label: string }[] = [
  { id: "ausbildung", label: "Ausbildungen" },
  { id: "masterclass", label: "Masterclasses & Weiterbildungen" },
];

function CourseRow({ course }: { course: CourseTeaser }) {
  return (
    <li>
      <Link
        href={course.href}
        className="group flex flex-col gap-3 rounded-[var(--radius-md)] border border-transparent bg-white p-5 transition-all duration-150 hover:border-border hover:bg-bg-section md:flex-row md:items-center md:gap-6 md:p-6"
      >
        <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-tuerkis md:w-48">
          <Calendar className="h-4 w-4" aria-hidden />
          {course.startDate}
        </div>
        <h3 className="flex-1 text-base font-semibold text-anthrazit md:text-lg">
          {course.title}
        </h3>
        <div className="flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.1em] text-anthrazit-80 md:gap-2">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {course.formatLabel}
        </div>
        <ArrowRight
          className="hidden h-5 w-5 shrink-0 text-anthrazit-80 transition-all duration-200 group-hover:translate-x-1 group-hover:text-tuerkis md:block"
          aria-hidden
        />
      </Link>
    </li>
  );
}

export function CourseTeaserList() {
  const { upcomingCourses } = homeContent;
  const [activeTab, setActiveTab] = useState<Tab>("ausbildung");
  const [expanded, setExpanded] = useState(false);

  const filtered = upcomingCourses.filter((c) => c.category === activeTab);
  const visible = filtered.slice(0, VISIBLE);
  const hidden = filtered.slice(VISIBLE);

  function handleTabChange(tab: Tab) {
    setActiveTab(tab);
    setExpanded(false);
  }

  return (
    <Section bg="section" className="py-20">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Nächste Starttermine"
            title="Anstehende Programme"
            lead="Live-Online, Präsenz oder hybrid — buche dir deinen Platz."
          />
          <Link
            href="/ausbildungen"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-tuerkis hover:underline md:self-end"
          >
            Alle Termine
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Programmkategorien"
          className="mt-8 inline-flex rounded-[var(--radius-md)] border border-border bg-white p-1 gap-1"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "rounded-[var(--radius-sm)] px-4 py-2 text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis",
                activeTab === tab.id
                  ? "bg-tuerkis text-white shadow-sm"
                  : "text-anthrazit-80 hover:bg-bg-section hover:text-anthrazit",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course list */}
        <ul className="mt-4 flex flex-col gap-2">
          {visible.map((c) => (
            <CourseRow key={c.id} course={c} />
          ))}
          {expanded
            ? hidden.map((c) => (
                <div
                  key={c.id}
                  className="overflow-hidden motion-safe:animate-fade-in-up"
                >
                  <CourseRow course={c} />
                </div>
              ))
            : null}
        </ul>

        {hidden.length > 0 ? (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "gap-2",
              )}
            >
              {expanded
                ? "Weniger anzeigen"
                : `+${hidden.length} weitere einblenden`}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  expanded && "rotate-180",
                )}
                aria-hidden
              />
            </button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
