import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  MessageSquare,
  RotateCcw,
  Wrench,
  Building2,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterStripe } from "@/components/sections/NewsletterStripe";

export const metadata: Metadata = {
  title: "Agile Toolbox — Methoden, Tipps & Wissen · Claudia Thonet",
  description:
    "Deine agile Toolbox: Methoden, Frameworks und Praxistipps zu Führung, Teamentwicklung, Moderation, Retrospektiven, OE und agilem Vertrieb.",
  alternates: { canonical: "/toolbox/" },
};

const CATEGORIES = [
  {
    icon: BookOpen,
    title: "Führung",
    description:
      "OKRs, laterale Führung, Selbstorganisation, agile Haltung und Führungsdilemmas — Werkzeuge für moderne Führungskräfte.",
    topics: ["OKR-Implementierung", "Laterale Führung", "Leadership Canvas", "Führungsdilemmas"],
    href: "/toolbox/fuehrung",
  },
  {
    icon: Users,
    title: "Teamentwicklung",
    description:
      "Vom funktionalen zum High-Performing-Team — mit konkreten Methoden für Teamgeist, Eigenverantwortung und Zusammenarbeit.",
    topics: ["Team-Coaching", "Selbstorganisation", "Teamgeist stärken", "OKRs & Teamperformance"],
    href: "/toolbox/teamentwicklung",
  },
  {
    icon: MessageSquare,
    title: "Moderation",
    description:
      "Meetings, die wirken: OKR-Meetings, Planning, Review, All Hands — Formate und Moderationswerkzeuge für jede Situation.",
    topics: ["Meeting-Design", "All Hands", "Plannings & Reviews", "Meetingkultur"],
    href: "/toolbox/moderation",
  },
  {
    icon: RotateCcw,
    title: "Retrospektiven",
    description:
      "Retrospektiven als Lernwerkzeug — Formate, Tools und Methoden für jede Teamphase von Forming bis Performing.",
    topics: ["Sailboat-Retro", "Retro-Formate", "Lernkultur", "Teamreife-Phasen"],
    href: "/toolbox/retrospektiven",
  },
  {
    icon: Wrench,
    title: "Methoden & Tools",
    description:
      "Agile Methoden-Übersicht: OKRs, Empathy Mapping, Design Thinking, Scrum im Vertrieb — interaktiv und direkt einsetzbar.",
    topics: ["OKR-Umsetzung", "Empathy Map", "Design Thinking", "Scrum"],
    href: "/agile-methoden",
  },
  {
    icon: Building2,
    title: "Organisationsentwicklung",
    description:
      "Kulturwandel, Change-Readiness, Run vs. Change und Transformationswiderstände — systemisch und praxisnah.",
    topics: ["Change-Readiness", "Kulturwandel", "Transformationswiderstände", "High-Performance"],
    href: "/toolbox/organisationsentwicklung",
  },
  {
    icon: TrendingUp,
    title: "Agiler Vertrieb",
    description:
      "Agile Sales, Shopfloor Management 4.0, Sales Board und Customer Journey — Agilität im Vertriebsalltag.",
    topics: ["Agile Sales", "Shopfloor 4.0", "Sales Board", "Customer Journey"],
    href: "/toolbox/vertrieb",
  },
];

const FEATURED_RESOURCES = [
  {
    title: "Agile Methoden-Übersicht",
    description:
      "Alle wichtigen agilen Methoden auf einen Blick — von OKR über Design Thinking bis Scrum. Interaktiv aufbereitet und direkt einsetzbar.",
    href: "/agile-methoden",
  },
  {
    title: "Veröffentlichungen & Bücher",
    description:
      "Bücher und Fachbeiträge von Claudia Thonet — praxisnahes Wissen aus über 15 Jahren Erfahrung in agiler Transformation.",
    href: "/veroeffentlichungen",
  },
  {
    title: "Downloadbereich",
    description:
      "Kostenlose Vorlagen, Checklisten und Arbeitsblätter — direkt herunterladen und im nächsten Meeting oder Workshop einsetzen.",
    href: "/downloadbereich",
  },
];

export default function ToolboxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative grid min-h-[560px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Wissen & Methoden</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">
                Deine agile
              </Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">
                Toolbox.
              </Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">
                Praxis-Wissen.
              </Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Methoden, Frameworks und Praxistipps — kostenlos, direkt anwendbar. Für
                Führungskräfte, Coaches und alle, die Agilität wirklich leben wollen.
              </p>
            </Reveal>
            <Reveal delay={460} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/agile-methoden"
                className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Methoden entdecken <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/downloadbereich"
                className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Downloads sichern
              </Link>
            </Reveal>
          </div>

          {/* Right column stats card */}
          <Reveal delay={300} className="hidden lg:block">
            <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-tuerkis-50">
                Deine Toolbox auf einen Blick
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { value: "7", label: "Themenbereiche" },
                  { value: "100+", label: "Artikel" },
                  { value: "Kostenlos", label: "" },
                ].map((stat) => (
                  <div key={stat.value} className="flex items-center gap-4">
                    <p className="text-3xl font-bold text-tuerkis leading-none">{stat.value}</p>
                    {stat.label && (
                      <p className="text-sm leading-snug text-white/70">{stat.label}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Categories grid */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Themenbereiche"
              title="Wissen nach Thema"
              lead="Wähle deinen Einstieg — oder stöbere durch alle Bereiche."
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              const isLast = i === CATEGORIES.length - 1;
              return (
                <Reveal key={cat.title} delay={i * 60} className={isLast ? "sm:col-span-2 lg:col-span-1" : ""}>
                  <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    {/* Icon */}
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                      <Icon className="h-5 w-5 text-tuerkis" aria-hidden />
                    </div>
                    {/* Title */}
                    <h3 className="mb-2 text-lg font-bold text-anthrazit">{cat.title}</h3>
                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-anthrazit-80">
                      {cat.description}
                    </p>
                    {/* Topics */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {cat.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs font-medium text-anthrazit-80"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    {/* Link */}
                    <Link
                      href={cat.href}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-tuerkis transition-colors hover:text-tuerkis-80"
                    >
                      Thema erkunden <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Featured resources */}
      <Section bg="section">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Direkt starten"
              title="Meistgelesene Ressourcen"
              className="mb-10"
            />
          </Reveal>
          <div className="flex flex-col divide-y divide-border rounded-[var(--radius-md)] border border-border bg-white shadow-sm overflow-hidden">
            {FEATURED_RESOURCES.map((resource, i) => (
              <Reveal key={resource.title} delay={i * 80}>
                <Link
                  href={resource.href}
                  className="group flex items-start gap-5 px-6 py-6 transition-colors hover:bg-bg-section md:items-center md:px-8"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-anthrazit leading-snug group-hover:text-tuerkis transition-colors">
                      {resource.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-anthrazit-80">
                      {resource.description}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-tuerkis whitespace-nowrap">
                    Lesen <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <NewsletterStripe />
    </>
  );
}
