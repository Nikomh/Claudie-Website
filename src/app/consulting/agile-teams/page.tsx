import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseInhouse } from "@/components/course/CourseInhouse";
import { CourseFinalCTA } from "@/components/course/CourseFinalCTA";
import type { CourseInhouseData, CourseFinalCtaData, CourseTestimonialsData } from "@/content/courseTypes";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Agile Teams — Consulting · Claudia Thonet",
  description: "Agile Teamentwicklung und Consulting für selbstorganisierte, wendige Teams. Workshops, Coaching und Begleitung für mehr Agilität, Eigenverantwortung und Zusammenarbeit.",
  alternates: { canonical: "/consulting/agile-teams/" },
};

const TEAM_INGREDIENTS = [
  { title: "Agilität", body: "Schnelle Anpassungsfähigkeit und iteratives Arbeiten — Teams reagieren auf Veränderungen, statt gegen sie zu kämpfen." },
  { title: "Innovation", body: "Kundenzentriertes Denken und Raum für Experimente — Teams entwickeln Lösungen, die wirklich gebraucht werden." },
  { title: "Teamgeist", body: "Gemeinsame Verantwortung statt individueller Optimierung — Teams erzielen mehr, wenn alle an einem Strang ziehen." },
];

const CUSTOMER_QUESTIONS = [
  "Wie steigern wir Teamgeist und Eigenverantwortung?",
  "Wie fördern wir Kollaboration statt Konkurrenz?",
  "Was macht unsere Meetings effizienter und dynamischer?",
  "Welche Frameworks passen wirklich zu uns? (Scrum, Kanban, OKRs, Design Thinking)",
  "Wie entwickeln wir nachhaltige agile Expertise in den Teams?",
  "Welche Strukturen braucht der Wandel?",
];

const SERVICES = [
  {
    title: "Teamentwicklung zu agilen Teams",
    description: "2-tägiger Workshop — Analyse und Stärkung des vorhandenen Agilitätsgrades.",
    bullets: [
      "Agilitätsgrad analysieren und stärken",
      "Agile Methoden erlebbar machen und in den Alltag integrieren",
      "Team-Canvas und TEAM TASK Board entwickeln",
      "Interaktionen optimieren und Zusammenarbeit neu denken",
    ],
  },
  {
    title: "Agiles Projektmanagement",
    description: "2-tägiger Workshop — Frameworks und iterative Methoden für komplexe Projekte.",
    bullets: [
      "Iterativer Ansatz und agiler Projektzyklus",
      "Frameworks: Scrum, Kanban, Scrumban, Design Thinking, OKRs",
      "Customer Journey Map entwickeln",
      "Design Thinking als Moderationsmethode einsetzen",
    ],
  },
  {
    title: "Agile Coaching",
    description: "Kontinuierliche Begleitung auf dem Weg zu echter Selbstorganisation.",
    bullets: [
      "Coach-Rolle für reibungslose Abläufe",
      "Laterale Führung in Richtung höherer Agilität",
      "Moderierte Retrospektiven",
      "Transformationsbegleitung mit agiler Expertise",
    ],
  },
];

const testimonials: CourseTestimonialsData = {
  eyebrow: "Stimmen",
  title: "Was Kund:innen sagen",
  lead: "Auszüge aus abgeschlossenen Teamentwicklungsprojekten.",
  items: [
    { quote: "Seit vielen Jahren unterstützt uns Claudia Thonet kompetent, ideenreich und erfahren in der Weiterentwicklung unserer Service- und Trainerteams.", name: "Karolin Hurich", role: "HR", company: "Mercedes-Benz Bank Services Center", rating: 5 },
    { quote: "Die agile Teamentwicklung mit Frau Thonet ist individuell an den Teamzustand angepasst und festigt unsere derzeitige und zukünftige Zusammenarbeit.", name: "Vanessa Hanzel", role: "stellvertretende Filialleiterin", rating: 5 },
    { quote: "Claudia versteht es, sich sehr flexibel auf neu aufkommende Themen einzulassen und die Agenda anzupassen. Das schafft echtes Vertrauen.", name: "Andrea Breitenborn", role: "Teamleiterin", rating: 5 },
  ],
};

const inhouse: CourseInhouseData = {
  eyebrow: "Für Unternehmen",
  headline: "Teamentwicklung maßgeschneidert",
  body: "Wir passen jeden Workshop an den konkreten Teamzustand, die Branche und eure Ziele an — passgenaue agile Maßnahmen je nach Reifegrad und Bereich.",
  ctaLabel: "Angebot anfragen",
  ctaHref: "/beratung",
};

const finalCta: CourseFinalCtaData = {
  headline: "Euer Team hat mehr Potenzial.",
  subline: "Vereinbart ein kostenfreies 30-Min-Gespräch — wir zeigen euch, wie agile Teamentwicklung konkret aussieht.",
  ctaPrimary: { label: "Gespräch vereinbaren", href: "/beratung" },
  ctaSecondary: { label: "Anfrage per E-Mail", href: "mailto:info@claudiathonet.de?subject=Anfrage%20Agile%20Teamentwicklung" },
};

export default function AgileTeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]" />
        <Container className="relative grid min-h-[620px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Agile Beratung</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Teams befähigen.</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">Selbstorganisation</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">fördern.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Agile Teams sind selbstorganisierte Gruppen, die kundenzentriert handeln und Innovationen entwickeln, evaluieren und anpassen. Drei Zutaten sind entscheidend: Agilität, Innovation und Teamgeist.
              </p>
            </Reveal>
            <Reveal delay={460} className="flex flex-wrap gap-3 pt-1">
              <Link href="/beratung" className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Gespräch vereinbaren <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="mailto:info@claudiathonet.de?subject=Anfrage%20Agile%20Teamentwicklung" className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden /> Anfrage per E-Mail
              </Link>
            </Reveal>
          </div>
          {/* Hero icon */}
          <Reveal delay={300} className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-6">
            <Image
              src="/images/agile-teams/consulting_agile_teams_claudia_thonet_agile_consulting_icon_transparent_mit_schrift_02_2023.png"
              alt="Agile Teams Consulting — Claudia Thonet"
              width={280}
              height={280}
              className="drop-shadow-2xl"
            />
          </Reveal>
        </Container>
      </section>

      {/* Trust bar */}
      <div className="border-y border-border bg-bg-section">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {[
              { value: "15+", label: "Jahre Erfahrung" },
              { value: "200+", label: "Teamprojekte" },
              { value: "BDVT", label: "Zertifiziert" },
              { value: "DE-weit", label: "Einsatzbereit" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 px-4 py-7 text-center md:py-9">
                <p className="text-xl font-bold text-anthrazit md:text-2xl">{item.value}</p>
                <p className="text-xs leading-snug text-anthrazit-80">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3 Ingredients + crossfunktionale teams visual */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Eyebrow>Warum agile Teams</Eyebrow>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                    Drei Zutaten für Agilität, Innovation und Teamgeist
                  </h2>
                  <p className="text-base leading-relaxed text-anthrazit-80">
                    Agile Teams sind mehr als eine Methode — sie sind eine neue Art zu arbeiten, zu entscheiden und zu wachsen.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {TEAM_INGREDIENTS.map((item, i) => (
                    <Reveal key={item.title} delay={i * 80}>
                      <div className="flex gap-4 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                        <div className="text-3xl font-bold text-tuerkis/25 leading-none w-8 shrink-0">{String(i + 1).padStart(2, "0")}</div>
                        <div>
                          <h3 className="text-base font-bold text-anthrazit">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <Reveal delay={150}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-4">
                  <Image
                    src="/images/agile-teams/agile-crossfunktionale-teams-claudia-thonet.png"
                    alt="Agile crossfunktionale Teams — Claudia Thonet"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Team models — Kompetenz- und Störfelder */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading
              eyebrow="Team-Modelle"
              title="Was Teams stark macht — und was sie bremst"
              lead="Zwei Modelle, die wir in unseren Workshops einsetzen: Kompetenzfelder zeigen Stärken auf — Störfelder machen sichtbar, wo Reibung entsteht."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { src: "/images/agile-teams/kompetenzfelder-von-teams-claudia-thonet.png", alt: "Kompetenzfelder von Teams — Claudia Thonet", label: "Kompetenzfelder" },
                { src: "/images/agile-teams/stoerfelder-von-teams-claudia-thonet.png", alt: "Störfelder von Teams — Claudia Thonet", label: "Störfelder" },
              ].map((img, i) => (
                <Reveal key={img.label} delay={i * 80}>
                  <div className="flex flex-col gap-3">
                    <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-4">
                      <Image src={img.src} alt={img.alt} width={580} height={420} className="w-full h-auto" />
                    </div>
                    <p className="text-center text-sm font-semibold text-anthrazit-80">{img.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Customer questions */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-start">
              <div className="flex flex-col gap-4 lg:sticky lg:top-28">
                <Eyebrow>Was euch bewegt</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Die Fragen, die unsere Kunden stellen
                </h2>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  Diese Herausforderungen kennen wir — und wir haben konkrete Antworten darauf.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {CUSTOMER_QUESTIONS.map((q, i) => (
                  <Reveal key={q} delay={i * 60}>
                    <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tuerkis" aria-hidden />
                      <p className="text-sm leading-relaxed text-anthrazit">{q}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Services */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading
              eyebrow="Unsere Lösungsangebote"
              title="Drei Wege zu mehr Agilität im Team"
              lead="Passgenau auf euren Teamzustand, eure Branche und eure Ziele abgestimmt."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <Reveal key={service.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
                    <h3 className="mb-2 text-lg font-bold text-anthrazit">{service.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-anthrazit-80">{service.description}</p>
                    <ul className="mt-auto flex flex-col gap-2">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-anthrazit">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Testimonials */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Stimmen" title="Was Kund:innen sagen" lead="Auszüge aus abgeschlossenen Teamentwicklungsprojekten." />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {testimonials.items.map((t, i) => (
                <Reveal key={t.name} delay={i * 70}>
                  <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                    <Quote className="-ml-1 h-6 w-6 text-anthrazit/10" aria-hidden />
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit">{`„${t.quote}"`}</p>
                    <div className="border-t border-border pt-3">
                      <p className="text-sm font-semibold text-anthrazit">{t.name}</p>
                      {t.role && <p className="text-xs text-anthrazit-80">{t.role}{t.company ? `, ${t.company}` : ""}</p>}
                      <div className="mt-1.5 flex gap-0.5">
                        {Array.from({ length: 5 }, (_, j) => (
                          <Star key={j} className={cn("h-3 w-3", j < t.rating ? "fill-orange-rot text-orange-rot" : "text-border")} aria-hidden />
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      <CourseInhouse inhouse={inhouse} />
      <CourseFinalCTA finalCta={finalCta} />
    </>
  );
}
