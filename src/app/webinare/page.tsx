import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MonitorPlay, Users, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterStripe } from "@/components/sections/NewsletterStripe";

export const metadata: Metadata = {
  title: "Kostenfreie Webinare — Claudia Thonet",
  description: "Kostenfreie Webinare zu Agilität, Führung und Teamentwicklung. ~45 Minuten via Zoom, mit Experten aus der Praxis. Jetzt Platz sichern.",
  alternates: { canonical: "/webinare/" },
};

const UPCOMING = [
  {
    id: "high-performing-teams",
    date: "20. Mai 2026",
    weekday: "Mittwoch",
    time: "12:00 Uhr",
    title: "High-Performing-Teams entwickeln",
    subtitle: "Zusammenarbeit, die wirklich wirkt",
    description:
      "Was unterscheidet ein funktionierendes Team von einem High-Performing Team? In diesem Webinar zeigen wir, welche Faktoren Teams wirklich leistungsfähig machen — und wie du diesen Wandel in deiner Organisation anstoßen kannst.",
    topics: ["Phasen der Teamentwicklung", "Vertrauen und psychologische Sicherheit", "Konkrete Methoden für den Alltag"],
    speaker: "Claudia Thonet & Team",
    href: "mailto:info@claudiathonet.de?subject=Anmeldung%20Webinar%20High-Performing-Teams%2020.05.2026",
  },
  {
    id: "strategie-umsetzen",
    date: "17. Juni 2026",
    weekday: "Mittwoch",
    time: "12:00 Uhr",
    title: "Strategie umsetzen",
    subtitle: "Damit sie im Alltag ankommt",
    description:
      "Viele Strategien scheitern nicht an der Konzeption, sondern an der Umsetzung. Wir zeigen, wie OKRs und agile Methoden dabei helfen, Strategie in echte Alltagspraxis zu überführen — mit messbaren Ergebnissen.",
    topics: ["OKRs als Umsetzungswerkzeug", "Strategie und Arbeitsalltag verbinden", "Typische Stolpersteine vermeiden"],
    speaker: "Jonny Kohlhaas",
    href: "mailto:info@claudiathonet.de?subject=Anmeldung%20Webinar%20Strategie%2017.06.2026",
  },
  {
    id: "veraenderungen-gestalten",
    date: "15. Juli 2026",
    weekday: "Mittwoch",
    time: "12:00 Uhr",
    title: "Veränderungen gestalten",
    subtitle: "Die bewegen statt verpuffen",
    description:
      "Warum scheitern so viele Veränderungsinitiativen? Und was macht den Unterschied? In diesem Webinar erfährst du, wie du Veränderungsprozesse so gestaltest, dass sie echte Wirkung entfalten — bei Menschen und in Systemen.",
    topics: ["Psychologie des Wandels", "Widerstände produktiv nutzen", "Veränderung skalieren"],
    speaker: "Claudia Thonet",
    href: "mailto:info@claudiathonet.de?subject=Anmeldung%20Webinar%20Veraenderungen%2015.07.2026",
  },
];

const FORMAT_FACTS = [
  { icon: MonitorPlay, label: "Plattform", value: "Zoom — kostenlos, kein Download nötig" },
  { icon: Clock, label: "Dauer", value: "ca. 45 Minuten + Q&A" },
  { icon: Users, label: "Format", value: "Interaktiv — Fragen jederzeit willkommen" },
  { icon: Calendar, label: "Nachbereitung", value: "Aufzeichnung & Materialien per E-Mail" },
];

export default function WebinarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-[700px]">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Kostenfreie Webinare</Eyebrow>
              </div>
            </Reveal>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block">Wissen, das wirkt.</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">Kostenlos. Live.</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">Direkt anwendbar.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Unsere Expert:innen teilen Wissen, Erfahrung und konkrete Tools — ca. 45 Minuten via Zoom, kostenlos, mit Nachbereitungsmaterialien. Für alle, die Agilität wirklich in die Praxis bringen wollen.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Format facts strip */}
      <div className="border-y border-border bg-bg-section">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {FORMAT_FACTS.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex flex-col items-center gap-2 px-4 py-6 text-center md:py-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-tuerkis/10">
                    <Icon className="h-4 w-4 text-tuerkis" aria-hidden />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-anthrazit-80">{fact.label}</p>
                  <p className="text-xs leading-snug text-anthrazit">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Upcoming webinars */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Nächste Termine"
              title="Anstehende Webinare"
              lead="Melde dich kostenlos an — Plätze sind begrenzt."
            />
            <div className="mt-10 flex flex-col gap-6">
              {UPCOMING.map((webinar, i) => (
                <Reveal key={webinar.id} delay={i * 80}>
                  <article className="rounded-[var(--radius-lg)] border border-border bg-white shadow-sm overflow-hidden">
                    <div className="flex flex-col gap-0 lg:flex-row">
                      {/* Date column */}
                      <div className="flex shrink-0 flex-col items-center justify-center gap-1 bg-tuerkis px-8 py-6 text-center lg:w-44 lg:py-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">{webinar.weekday}</p>
                        <p className="text-3xl font-bold text-white leading-none">{webinar.date.split(". ")[0]}.</p>
                        <p className="text-sm font-semibold text-white">{webinar.date.split(". ").slice(1).join(". ")}</p>
                        <p className="mt-1 text-xs text-white/70">{webinar.time}</p>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                        <div>
                          <h2 className="text-xl font-bold text-anthrazit">{webinar.title}</h2>
                          <p className="mt-0.5 text-base font-medium text-tuerkis">{webinar.subtitle}</p>
                        </div>
                        <p className="text-sm leading-relaxed text-anthrazit-80">{webinar.description}</p>
                        <ul className="flex flex-wrap gap-2">
                          {webinar.topics.map((t) => (
                            <li
                              key={t}
                              className="rounded-full bg-bg-section px-3 py-1 text-xs font-medium text-anthrazit-80"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                          <p className="text-xs text-anthrazit-80">
                            <span className="font-semibold">Speaker:</span> {webinar.speaker}
                          </p>
                          <Link
                            href={webinar.href}
                            className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis"
                          >
                            Jetzt anmelden
                            <ArrowRight className="h-4 w-4" aria-hidden />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* YouTube CTA */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="flex flex-col items-center gap-6 rounded-[var(--radius-lg)] border border-border bg-white px-8 py-12 text-center shadow-sm md:px-16">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000]/10">
                <PlayCircle className="h-7 w-7 text-[#FF0000]" aria-hidden />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-anthrazit">Alle bisherigen Webinare ansehen</h2>
                <p className="max-w-[50ch] text-sm leading-relaxed text-anthrazit-80">
                  Auf unserem YouTube-Kanal findest du Aufzeichnungen vergangener Webinare, Vorträge und weitere Videos rund um Agilität, Führung und Transformation.
                </p>
              </div>
              <Link
                href="https://www.youtube.com/@claudiathonet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-anthrazit px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-anthrazit/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anthrazit"
              >
                <PlayCircle className="h-4 w-4" aria-hidden />
                Zum YouTube-Kanal
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Newsletter */}
      <Reveal>
        <NewsletterStripe />
      </Reveal>
    </>
  );
}
