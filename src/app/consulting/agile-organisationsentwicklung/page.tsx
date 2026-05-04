import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Quote, Star, RotateCcw, Search, Play, CheckSquare, RefreshCw } from "lucide-react";
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
  title: "Agile Organisationsentwicklung — Claudia Thonet",
  description: "Agile Organisationsentwicklung für dynamische Unternehmen. Iterative Prozesse, systemisches Denken, nachhaltige Transformation — begleitet von erfahrenen Expert:innen.",
  alternates: { canonical: "/consulting/agile-organisationsentwicklung/" },
};

const PROCESS_STEPS = [
  { icon: Search, label: "Think New", title: "Neu denken", body: "Strategische Zukunftsvision aus der Kundenperspektive — bevor Entscheidungen fallen." },
  { icon: Play, label: "Plan", title: "Planen", body: "Konkrete Hypothesen entwickeln und Experimente strukturiert planen." },
  { icon: RotateCcw, label: "Do", title: "Umsetzen", body: "Iterative Umsetzung mit Transparenz — kleine Schritte, echte Wirkung." },
  { icon: CheckSquare, label: "Check", title: "Überprüfen", body: "Ergebnisse überprüfen und Feedback konsequent integrieren." },
  { icon: RefreshCw, label: "Act", title: "Anpassen", body: "Prozesse und Zusammenarbeit kontinuierlich verbessern." },
];

const WHY_POINTS = [
  "Organisationen als lebendige Systeme verstehen — nicht als Maschinen",
  "Iterative Prozesse statt linearer Masterpläne",
  "Cross-funktionale Beteiligung aller Stakeholder",
  "Stärken der Organisation nutzen statt Defizite beheben",
  "Kontinuierliches Lernen durch Dialog und gegenseitige Unterstützung",
];

const SERVICES = [
  {
    title: "Inhouse-Ausbildungen & Trainings",
    description: "Maßgeschneiderte Programme für euer Unternehmen — 3 bis 6 Module à 2 Tage.",
    bullets: ["Grundlagen systemisch-agiler OE", "Rollen und Dynamiken in Veränderungsprozessen", "Führung im Wandel", "Agile Prinzipien und Kulturarbeit"],
  },
  {
    title: "Workshops & Formate",
    description: "Von halbtägigen Impulsen bis zu zweitägigen Tiefenformaten — für Teams und Führungsteams.",
    bullets: ["Strategieworkshops und Leitbildentwicklung", "Team-Kickoffs und Retrospektiven", "Change-Readiness-Assessments", "Barcamp- und Open-Space-Formate"],
  },
  {
    title: "Coaching & Transformationsbegleitung",
    description: "Persönliches und Team-Coaching über mehrere Monate — für nachhaltigen Wandel.",
    bullets: ["Führungscoaching für Entscheider:innen", "Team-Coaching holistisch", "Transformationsprojekte mehrmonatig begleiten", "Sparring für Klarheit und Kurskorrektur"],
  },
];

const testimonials: CourseTestimonialsData = {
  eyebrow: "Stimmen",
  title: "Was Kund:innen sagen",
  lead: "Auszüge aus laufenden und abgeschlossenen Beratungsprojekten.",
  items: [
    { quote: "Claudia und ihr Team schaffen es, wirklich praxisnah und individuell die Methoden und konkreten Tools für New Work zu vermitteln. Hands on, ohne PowerPoint und mit echtem Herzblut.", name: "Henrike Karmasin", role: "Commercial Director", company: "Daiichi Sankyo", rating: 5 },
    { quote: "Dank der exzellenten Unterstützung haben wir wertvolle Strukturen und praxisorientierte Modelle erhalten, die direkt in unserer Organisation wirken.", name: "Sabine Valentin", role: "Organisationsentwicklung", rating: 5 },
    { quote: "Claudia Thonet und ihr Team sind eine überdurchschnittliche, performante agile Manufaktur. Wer sich für agiles Arbeiten begeistert, ist hier richtig.", name: "Marek Gawlik", role: "Senior Project Manager", rating: 5 },
  ],
};

const inhouse: CourseInhouseData = {
  eyebrow: "Für Unternehmen",
  headline: "Maßgeschneidert für eure Organisation",
  body: "Individuelle Programme, abgestimmt auf eure Herausforderungen, Ziele und Strukturen — deutschlandweit, mit erfahrenem Expert:innen-Team.",
  ctaLabel: "Inhouse-Programm anfragen",
  ctaHref: "/beratung",
};

const finalCta: CourseFinalCtaData = {
  headline: "Bereit für echten Wandel?",
  subline: "Vereinbart ein kostenfreies 30-Min-Gespräch — wir zeigen euch, wie agile OE in eurer Organisation wirken kann.",
  ctaPrimary: { label: "Gespräch vereinbaren", href: "/beratung" },
  ctaSecondary: { label: "Anfrage per E-Mail", href: "mailto:info@claudiathonet.de?subject=Anfrage%20Agile%20Organisationsentwicklung" },
};

export default function AgileOrganisationsentwicklungPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.07)_0%,transparent_70%)]" />
        <Container className="relative grid min-h-[640px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Agile Beratung</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Lebendige Organisationen</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">gestalten.</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">Wandel begleiten.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Agile Organisationsentwicklung erkennt, was längst Realität ist: Organisationen sind keine Maschinen — sie sind lebendige Systeme. Wir begleiten euch iterativ, systemisch und nachhaltig.
              </p>
            </Reveal>
            <Reveal delay={460} className="flex flex-wrap gap-3 pt-1">
              <Link href="/beratung" className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Gespräch vereinbaren <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="mailto:info@claudiathonet.de?subject=Anfrage%20Agile%20Organisationsentwicklung" className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden /> Anfrage per E-Mail
              </Link>
            </Reveal>
          </div>
          {/* Hero photo */}
          <Reveal delay={300} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 aspect-[4/5]">
              <Image
                src="/images/agile-organisationsentwicklung/Agile_Organisationsentwicklung_Claudia_Thonet.jpg"
                alt="Agile Organisationsentwicklung — Claudia Thonet"
                fill
                priority
                sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold text-white">Claudia Thonet</p>
                <p className="text-xs text-white/70">Agile Organisationsentwicklung</p>
              </div>
            </div>
            <div aria-hidden className="pointer-events-none absolute -top-3 -right-3">
              <Image
                src="/images/agile-organisationsentwicklung/Consulting_Inhouse_Agile_Organisationsentwicklung_Claudia_Thonet.png"
                alt="Agile OE Consulting Icon"
                width={80}
                height={80}
                className="drop-shadow-md"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Trust bar */}
      <div className="border-y border-border bg-bg-section">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {[
              { value: "15+", label: "Jahre Erfahrung" },
              { value: "200+", label: "Projekte begleitet" },
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

      {/* What is it + hierarchisch vs agil */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-5">
                <Eyebrow>Was ist agile OE</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Organisationen als lebendige Systeme verstehen
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Agile Organisationsentwicklung erkennt an, was längst Realität ist: Organisationen sind keine Maschinen — sie sind lebendige Systeme. Statt linearer Masterpläne setzen wir auf iterative Prozesse, die auf echtem Feedback basieren.
                </p>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Der Kern: Nicht Defizite beheben, sondern vorhandene Stärken nutzen. Nicht verordnen, sondern gemeinsam gestalten.
                </p>
                <div className="flex flex-col gap-2.5 mt-1">
                  {WHY_POINTS.map((point, i) => (
                    <Reveal key={point} delay={i * 50}>
                      <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-3.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                        <p className="text-sm leading-relaxed text-anthrazit">{point}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <Reveal delay={150}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-4">
                  <Image
                    src="/images/agile-organisationsentwicklung/Hierarchische_vs_Agile_Organisation_transparent_Claudia_Thonet_02_2026.png"
                    alt="Hierarchische vs. agile Organisation — Claudia Thonet"
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

      {/* TPDCA Process + iterative model */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-start">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <Eyebrow>Unser Ansatz</Eyebrow>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                    Der TPDCA-Zyklus — Veränderung iterativ gestalten
                  </h2>
                  <p className="text-base leading-relaxed text-anthrazit-80">
                    Kein linearer Masterplan — sondern ein kontinuierlicher Lernprozess, der sich an der Realität orientiert.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {PROCESS_STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <Reveal key={step.label} delay={i * 60}>
                        <div className="flex gap-4 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                            <Icon className="h-4 w-4 text-tuerkis" aria-hidden />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-tuerkis mb-0.5">{step.label}</p>
                            <p className="font-semibold text-anthrazit leading-snug">{step.title}</p>
                            <p className="text-sm leading-relaxed text-anthrazit-80 mt-0.5">{step.body}</p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
              <Reveal delay={200} className="lg:sticky lg:top-28 flex flex-col gap-6">
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-4">
                  <Image
                    src="/images/agile-organisationsentwicklung/iterative_transformation_claudia_thonet_svenja_hofert_1200px.png"
                    alt="Iterative Transformation — Claudia Thonet & Svenja Hofert"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-4">
                  <Image
                    src="/images/agile-organisationsentwicklung/Kulturwandelhaus_Claudia_Thonet_Svenja_Hofert.png"
                    alt="Kulturwandelhaus — Claudia Thonet & Svenja Hofert"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Services */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Unser Angebot"
              title="Drei Begleitungsformen — passend zu eurem Bedarf"
              lead="Von gezielten Impulsen bis zur mehrmonatigen Transformationsbegleitung."
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

      {/* Kulturwandelhaus full-width visual */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <Eyebrow>Modell</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Das Kulturwandelhaus
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Entwickelt von Claudia Thonet und Svenja Hofert — ein systemisches Modell, das zeigt, wie Kulturwandel wirklich funktioniert: von den Fundamenten der Haltung bis zum Dach der sichtbaren Praktiken.
                </p>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  In unseren Beratungsprojekten nutzen wir das Kulturwandelhaus als Diagnose-Instrument und Orientierungsrahmen für nachhaltige Transformationsprozesse.
                </p>
              </div>
              <Reveal delay={150}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-xl bg-white p-6">
                  <Image
                    src="/images/agile-organisationsentwicklung/Agile_Organisationsentwicklung_Claudia_Thonet_Kulturwandelhaus.jpg"
                    alt="Kulturwandelhaus — Agile Organisationsentwicklung Claudia Thonet"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Testimonials */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Stimmen" title="Was Kund:innen sagen" lead="Auszüge aus laufenden und abgeschlossenen Beratungsprojekten." />
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
