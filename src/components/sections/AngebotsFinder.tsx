import Link from "next/link";
import { ArrowRight, BookOpen, Building2, GraduationCap, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const PATHS = [
  {
    icon: GraduationCap,
    eyebrow: "Für dich persönlich",
    title: "Ich will mich weiterbilden & zertifizieren lassen",
    description: "Als Coach, Trainer:in, Facilitator oder Führungskraft — du willst eine fundierte Ausbildung, die wirklich etwas verändert.",
    cta: "Ausbildungen ansehen",
    href: "/ausbildungen",
    tags: ["Agile Coach", "Facilitator", "OKR Coach", "Agile Führung"],
    color: "border-tuerkis/40 hover:border-tuerkis",
    iconBg: "bg-tuerkis/10",
    iconColor: "text-tuerkis",
  },
  {
    icon: Building2,
    eyebrow: "Für dein Unternehmen",
    title: "Ich brauche Beratung oder ein Inhouse-Programm",
    description: "Du willst Teams, Führung oder eine ganze Organisation agil weiterentwickeln — maßgeschneidert, nicht von der Stange.",
    cta: "Consulting kennenlernen",
    href: "/consulting",
    tags: ["Organisationsentwicklung", "Teamdevelopment", "Transformation"],
    color: "border-anthrazit/20 hover:border-anthrazit/50",
    iconBg: "bg-anthrazit/8",
    iconColor: "text-anthrazit",
  },
  {
    icon: Users,
    eyebrow: "Schnell einsteigen",
    title: "Ich will erst reinschnuppern — Webinar oder Toolbox",
    description: "Kostenlose Webinare, die Agile Toolbox mit 50+ Methoden oder ein Newsletter — fang dort an, wo du gerade stehst.",
    cta: "Wissensbereich öffnen",
    href: "/toolbox",
    tags: ["Gratis Webinare", "Toolbox", "Methodenkarten", "Newsletter"],
    color: "border-orange-rot/30 hover:border-orange-rot/60",
    iconBg: "bg-orange-rot/10",
    iconColor: "text-orange-rot",
  },
  {
    icon: BookOpen,
    eyebrow: "Noch unsicher?",
    title: "Ich weiß noch nicht genau, was ich brauche",
    description: "30 Minuten kostenloses Gespräch. Kein Pitch, keine Verpflichtung — wir helfen dir, den richtigen nächsten Schritt zu finden.",
    cta: "Kostenloses Gespräch",
    href: "/beratung",
    tags: ["Kostenlos", "30 Minuten", "Unverbindlich"],
    color: "border-tuerkis/40 bg-tuerkis/5 hover:border-tuerkis",
    iconBg: "bg-tuerkis/15",
    iconColor: "text-tuerkis",
    highlight: true,
  },
];

export function AngebotsFinder() {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Einstieg</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold text-anthrazit md:text-3xl">
                Was bringt dich hierher?
              </h2>
            </div>
            <p className="max-w-[40ch] text-sm leading-relaxed text-anthrazit-80">
              Wähle deinen Einstieg — wir führen dich direkt zum Richtigen.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {PATHS.map((path, i) => {
            const Icon = path.icon;
            return (
              <Reveal key={path.title} delay={i * 70}>
                <Link
                  href={path.href}
                  className={`group flex h-full flex-col gap-4 rounded-[var(--radius-md)] border-2 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2 ${path.color}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] ${path.iconBg}`}>
                      <Icon className={`h-5 w-5 ${path.iconColor}`} aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-anthrazit-80/70">{path.eyebrow}</p>
                      <h3 className="mt-0.5 text-base font-bold leading-snug text-anthrazit">{path.title}</h3>
                    </div>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{path.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {path.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs text-anthrazit-80">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-tuerkis group-hover:gap-2.5 transition-all duration-200">
                    {path.cta} <ArrowRight className="h-4 w-4" aria-hidden />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
