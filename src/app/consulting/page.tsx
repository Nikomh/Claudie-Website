import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Agile Consulting & Inhouse-Programme — Claudia Thonet",
  description: "Agile Beratung und Inhouse-Programme: Organisationsentwicklung, Teamentwicklung, Führungskräfteentwicklung und Transformationsbegleitung. BDVT-zertifiziert, deutschlandweit.",
  alternates: { canonical: "/consulting/" },
};

const SERVICES = [
  {
    href: "/consulting/agile-organisationsentwicklung",
    title: "Agile Organisationsentwicklung",
    subtitle: "Systemisch. Iterativ. Nachhaltig.",
    description: "Wir begleiten Organisationen bei tiefgreifenden Transformationsprozessen — mit dem Kulturwandelhaus-Modell, dem TPDCA-Zyklus und echter Praxiserfahrung.",
    icon: "/images/agile-organisationsentwicklung/Consulting_Inhouse_Agile_Organisationsentwicklung_Claudia_Thonet.png",
    photo: "/images/agile-organisationsentwicklung/Agile_Organisationsentwicklung_Claudia_Thonet.jpg",
    tags: ["Kulturwandel", "Change Management", "Systemisches Coaching"],
    forWhom: "Für Unternehmen, die sich nachhaltig transformieren wollen",
  },
  {
    href: "/consulting/agile-teams",
    title: "Agile Teams",
    subtitle: "Selbstorganisation fördern.",
    description: "Teamentwicklung zu selbstorganisierten, kundenzentrierten Teams — mit bewährten Methoden, echten Fallarbeit und passgenauen Formaten.",
    icon: "/images/icons/agile-teams-agile-teamentwicklung-claudia-thonet-coaching-training-icon-transparent.png",
    photo: null,
    tags: ["Teamentwicklung", "Scrum", "Retrospektiven", "OKRs"],
    forWhom: "Für Teams und Teamleitungen, die wirklich agil werden wollen",
  },
  {
    href: "/consulting/agile-fuehrung",
    title: "Agile Führung",
    subtitle: "Rahmen gestalten. Teams ermächtigen.",
    description: "Führungskräfteentwicklung mit dem Dreistufen-Lösungsprogramm — BDVT-zertifiziert, praxisnah und nachhaltig wirksam.",
    icon: "/images/agile-fuehrung/ausbildung_consulting_agile_fuehrung_claudia_thonet_agile_consulting_icon_transparent_schrift_02_2023.png",
    photo: "/images/agile-fuehrung/claudia-thonet-beraet-zum-thema-agile-fuehrung.jpg",
    tags: ["Führungsentwicklung", "Selbstorganisation", "Kulturwandel"],
    forWhom: "Für Führungskräfte und Führungsteams",
  },
  {
    href: "/transformation-coach",
    title: "Transformation Coach",
    subtitle: "Veränderung von innen gestalten.",
    description: "Tiefgreifende Begleitung von Führungskräften, Teams und Organisationen durch Transformationsprozesse — systemisch, nachhaltig und mit dem Kulturwandelhaus-Modell.",
    icon: "/images/transformation-coach/Consulting_Inhouse_Agile_Organisationsentwicklung_Claudia_Thonet.png",
    photo: "/images/transformation-coach/Agile_Organisationsentwicklung_Claudia_Thonet.jpg",
    tags: ["Transformation", "Systemisches Coaching", "Kulturarbeit"],
    forWhom: "Für Unternehmen in tiefgreifenden Veränderungsprozessen",
  },
];

const HOW_WE_WORK = [
  {
    step: "01",
    title: "Erstgespräch & Analyse",
    body: "Wir hören zu, stellen die richtigen Fragen und verstehen eure konkrete Situation — ohne Standardlösung.",
  },
  {
    step: "02",
    title: "Maßgeschneidertes Konzept",
    body: "Kein Copy-Paste. Wir entwickeln ein Programm, das zu eurer Organisation, eurer Kultur und euren Zielen passt.",
  },
  {
    step: "03",
    title: "Umsetzung & Begleitung",
    body: "Wir sind präsent — in Workshops, im Coaching, im Sparring. Nicht nur als Wissensvermittler, sondern als Prozessbegleiter.",
  },
  {
    step: "04",
    title: "Wirkung & Transfer",
    body: "Wir messen, was sich verändert — und sorgen dafür, dass die Wirkung bleibt, wenn wir gehen.",
  },
];

const REFERENCES = [
  "Mercedes-Benz Bank Services Center",
  "Daiichi Sankyo",
  "Johnson & Johnson",
  "Schweizer Post",
  "Sparda Bank BW",
  "RA-MICRO GmbH",
];

export default function ConsultingOverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]" />
        <Container className="relative py-20 md:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
              <Eyebrow className="text-tuerkis-50">Consulting & Inhouse</Eyebrow>
            </div>
          </Reveal>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
            <Reveal as="span" className="block text-white">Beratung, die</Reveal>
            <Reveal as="span" delay={100} className="block text-tuerkis">wirklich etwas</Reveal>
            <Reveal as="span" delay={200} className="block text-white/70">verändert.</Reveal>
          </h1>
          <Reveal delay={350}>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/65 md:text-lg">
              Keine Standardlösungen. Kein Copy-Paste aus Büchern. Wir begleiten Organisationen, Teams und Führungskräfte durch echte Veränderung — mit Methoden, die funktionieren, und Haltung, die trägt.
            </p>
          </Reveal>
          <Reveal delay={450} className="mt-8 flex flex-wrap gap-3">
            <Link href="/beratung" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
              Erstgespräch vereinbaren <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Trust refs */}
      <Reveal>
        <div className="border-y border-border bg-bg-section py-5">
          <Container>
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-anthrazit-80">
              Vertrauen von
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {REFERENCES.map((ref) => (
                <span key={ref} className="text-sm font-medium text-anthrazit-80/60">{ref}</span>
              ))}
            </div>
          </Container>
        </div>
      </Reveal>

      {/* Services */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Leistungsbereiche" title="Unsere vier Beratungsfelder" lead="Von Teamentwicklung bis Organisationstransformation — maßgeschneidert für euren Bedarf." />
          <div className="mt-10 flex flex-col gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 60}>
                <Link href={s.href} className="group grid overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-sm transition-shadow hover:shadow-md md:grid-cols-[1fr_3fr]">
                  <div className="flex items-center justify-center bg-bg-section p-8">
                    <Image src={s.icon} alt="" width={100} height={100} className="object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col gap-3 p-7">
                    <div>
                      <h2 className="text-xl font-bold text-anthrazit">{s.title}</h2>
                      <p className="text-sm text-tuerkis">{s.subtitle}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{s.description}</p>
                    <p className="text-xs text-anthrazit-80/70 flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                      {s.forWhom}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {s.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs text-anthrazit-80">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-tuerkis group-hover:gap-3 transition-all">
                      Mehr erfahren <ArrowRight className="h-4 w-4" aria-hidden />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading eyebrow="Unsere Arbeitsweise" title="Wie Beratung bei uns funktioniert" lead="Keine Standardprogramme aus der Schublade. Jedes Projekt beginnt mit echtem Zuhören." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_WE_WORK.map((step, i) => (
                <Reveal key={step.step} delay={i * 70}>
                  <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                    <span className="text-4xl font-bold text-tuerkis/20">{step.step}</span>
                    <h3 className="font-semibold text-anthrazit">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Testimonial + CTA */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex flex-col gap-4">
                <Eyebrow>Stimmen</Eyebrow>
                <blockquote className="text-xl font-semibold leading-snug text-anthrazit md:text-2xl">
                  „Claudia und ihr Team schaffen es, wirklich praxisnah und individuell die Methoden und konkreten Tools für New Work zu vermitteln. Hands on, ohne PowerPoint."
                </blockquote>
                <p className="text-sm text-anthrazit-80">Henrike Karmasin, Commercial Director · Daiichi Sankyo</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, j) => (
                    <span key={j} className="text-orange-rot">★</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col gap-5 rounded-[var(--radius-lg)] border border-border bg-bg-section p-8">
                <p className="text-sm font-semibold text-anthrazit">Bereit für den nächsten Schritt?</p>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  In einem kostenlosen 30-Min-Gespräch klären wir, welches Format zu euch passt — und ob wir zusammenpassen.
                </p>
                <div className="flex flex-col gap-2">
                  {["Kein Verkaufsgespräch", "Konkrete Empfehlung", "Schnelle Rückmeldung"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/beratung" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80 self-start">
                  Erstgespräch vereinbaren <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
