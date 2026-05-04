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
  title: "Agile Führung — Consulting · Claudia Thonet",
  description: "Agile Führung Consulting: Rahmen gestalten für Verantwortungsübernahme und Kundenzentrierung. Dreistufen-Lösungsprogramm, BDVT-zertifiziert.",
  alternates: { canonical: "/consulting/agile-fuehrung/" },
};

const COMPETENCIES = [
  { number: "01", title: "Sinn und Orientierung vermitteln", body: "Bedeutungsvolle Arbeit jenseits von Kennzahlen ermöglichen — Teams wissen, warum sie tun, was sie tun." },
  { number: "02", title: "Rahmen für Selbstorganisation gestalten", body: "Transparente Freiheit mit klaren Leitplanken — Teams entscheiden eigenverantwortlich innerhalb eines sicheren Rahmens." },
  { number: "03", title: "Hindernisse beseitigen", body: "Engpässe und Blockaden erkennen und auflösen, bevor sie zur Bremse werden." },
  { number: "04", title: "Kontinuierliche Reflexion fördern", body: "Beobachtungsfähigkeit und Lernbereitschaft erhöhen — Führung als Entwicklungsraum." },
  { number: "05", title: "Vernetzen und kontinuierlich lernen", body: "Wissensaustausch über Organisationsgrenzen hinweg fördern und selbst Vorbild sein." },
];

const SOLUTION_PROGRAMS = [
  {
    title: "Agile Führung",
    duration: "2–3 Tage",
    description: "Grundlagen und agile Methoden für Führungskräfte — Organisationsagilität einschätzen und Entwicklungsplanung.",
    bullets: ["Framework und agile Methoden-Grundlagen", "Organisatorische Agilitätsbewertung", "Strategische Entwicklungsplanung", "Führungsrolle im agilen Kontext klären"],
  },
  {
    title: "Agiler Kulturwandel",
    duration: "3 Tage",
    description: "Ist-Stand-Analyse und Agilität messen — Transformations-Framework entwickeln und Selbstorganisation stärken.",
    bullets: ["Ist-Stand-Analyse und Agilitätsmessung", "Transformations-Framework entwickeln", "Selbstorganisation und Entscheidungsfindung stärken", "Kulturveränderung strukturiert begleiten"],
  },
  {
    title: "Agile Meeting-Gestaltung",
    duration: "2–3 Tage",
    description: "Meetings effektiv gestalten und Meetingkultur transformieren — für alle Formate vom Stand-up bis zum All-Hands.",
    bullets: ["Meetings für alle Formate effektiv designen", "Meetingkultur transformieren", "Strukturierte Moderationskompetenz aufbauen", "Virtuelle und hybride Formate professionell begleiten"],
  },
];

const testimonials: CourseTestimonialsData = {
  eyebrow: "Stimmen",
  title: "Was Kund:innen sagen",
  lead: "Auszüge aus Führungskräfte-Coachings und Transformationsprojekten.",
  items: [
    { quote: "Der Wissensvermittlung, Selbstreflexion und Handlungsplanung — diese Kombination schafft optimale Wirksamkeit für Führungskräfte.", name: "Stefan Bisterfeld", role: "Führungskraft", company: "Sparda Bank BW", rating: 5 },
    { quote: "Das reflektierte, sachliche Feedback von einer gleichgestellten Persönlichkeit ist für mich das Wertvollste an der Beratung.", name: "Josef Heinz", role: "Geschäftsführer", company: "RA-MICRO GmbH", rating: 5 },
    { quote: "Durch die Begleitung habe ich mich deutlich besser positioniert — das hat sich direkt auf meine Karriereentwicklung ausgewirkt.", name: "Axel Mertink", role: "Director", company: "Johnson & Johnson", rating: 5 },
  ],
};

const inhouse: CourseInhouseData = {
  eyebrow: "Für Unternehmen",
  headline: "Führungsentwicklung als Inhouse-Programm",
  body: "Maßgeschneidert für euer Führungsteam, eure Kultur, eure Herausforderungen — besonders wirksam, wenn Führungskräfte gemeinsam eine neue Kultur entwickeln.",
  ctaLabel: "Inhouse-Programm anfragen",
  ctaHref: "/beratung",
};

const finalCta: CourseFinalCtaData = {
  headline: "Führung wirklich verändern?",
  subline: "Vereinbart ein kostenfreies 30-Min-Gespräch — wir entwickeln gemeinsam das richtige Programm für euer Führungsteam.",
  ctaPrimary: { label: "Gespräch vereinbaren", href: "/beratung" },
  ctaSecondary: { label: "Anfrage per E-Mail", href: "mailto:info@claudiathonet.de?subject=Anfrage%20Agile%20Fuehrung%20Consulting" },
};

export default function AgileFuehrungConsultingPage() {
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
              <Reveal as="span" className="block text-white">Führung neu denken.</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">Rahmen gestalten.</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">Teams ermächtigen.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Agile Führung vermittelt Sinn, zeigt Kundenzentrierung in der Ausrichtung und befähigt Teams durch Selbstorganisation und Reflexion. Mit unserem Dreistufen-Lösungsprogramm begleiten wir Führungskräfte nachhaltig.
              </p>
            </Reveal>
            <Reveal delay={460} className="flex flex-wrap gap-3 pt-1">
              <Link href="/beratung" className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Gespräch vereinbaren <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="mailto:info@claudiathonet.de?subject=Anfrage%20Agile%20Fuehrung%20Consulting" className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden /> Anfrage per E-Mail
              </Link>
            </Reveal>
          </div>
          {/* Hero photo */}
          <Reveal delay={300} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 aspect-[4/5]">
              <Image
                src="/images/agile-fuehrung/claudia-thonet-beraet-zum-thema-agile-fuehrung.jpg"
                alt="Claudia Thonet berät zum Thema Agile Führung"
                fill
                priority
                sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold text-white">Claudia Thonet</p>
                <p className="text-xs text-white/70">Agile Führungsberatung</p>
              </div>
            </div>
            <div aria-hidden className="pointer-events-none absolute -top-3 -right-3">
              <Image
                src="/images/agile-fuehrung/ausbildung_consulting_agile_fuehrung_claudia_thonet_agile_consulting_icon_transparent_schrift_02_2023.png"
                alt="Agile Führung Icon"
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
              { value: "BDVT", label: "Zertifiziert" },
              { value: "ECA", label: "Lizenziert" },
              { value: "Bildungsurlaub", label: "Anerkannt" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 px-4 py-7 text-center md:py-9">
                <p className="text-xl font-bold text-anthrazit md:text-2xl">{item.value}</p>
                <p className="text-xs leading-snug text-anthrazit-80">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Kompetenzfelder model + competencies */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Eyebrow>Kernkompetenzen</Eyebrow>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                    Fünf Kompetenzen agiler Führung
                  </h2>
                  <p className="text-base leading-relaxed text-anthrazit-80">
                    Agile Führung ist kein Rollenklischee — sie ist eine Haltung, die Orientierung gibt und Selbstorganisation möglich macht.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {COMPETENCIES.map((comp, i) => (
                    <Reveal key={comp.title} delay={i * 60}>
                      <div className="flex gap-4 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                        <span className="text-2xl font-bold leading-none text-tuerkis/30 shrink-0 w-8">{comp.number}</span>
                        <div>
                          <p className="font-semibold text-anthrazit leading-snug">{comp.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-anthrazit-80">{comp.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <Reveal delay={150}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-4">
                  <Image
                    src="/images/agile-fuehrung/kompetenzfelder-fuehrung-claudia-thonet.png"
                    alt="Kompetenzfelder agiler Führung — Claudia Thonet"
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

      {/* Framework visual + Führungstyp */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal delay={100}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-4">
                  <Image
                    src="/images/agile-fuehrung/rahmen-gestalten-claudia-thonet.png"
                    alt="Rahmen gestalten für agile Führung — Claudia Thonet"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
              <div className="flex flex-col gap-5">
                <Eyebrow>Der Führungsrahmen</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Selbstorganisation braucht einen klaren Rahmen
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Agile Führung bedeutet nicht, loszulassen — sondern einen Rahmen zu gestalten, in dem Teams eigenverantwortlich entscheiden können. Dieser Rahmen macht den Unterschied zwischen Chaos und echter Selbstorganisation.
                </p>
                <div className="rounded-[var(--radius-md)] overflow-hidden border border-border shadow-sm bg-white p-3">
                  <Image
                    src="/images/agile-fuehrung/agile-fuehrung-fuehrungstyp-werte-staerken-entwicklung_claudia_thonet.png"
                    alt="Führungstyp, Werte und Stärken — Claudia Thonet"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Dreistufen Solution Programs */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Unser Angebot"
              title="Das Dreistufen-Lösungsprogramm"
              lead="Drei aufeinander aufbauende Bausteine — einzeln buchbar oder als ganzheitliches Führungsentwicklungsprogramm."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {SOLUTION_PROGRAMS.map((prog, i) => (
                <Reveal key={prog.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
                    <div className="mb-3 inline-flex items-center gap-2">
                      <span className="rounded-full bg-tuerkis/10 px-3 py-1 text-xs font-semibold text-tuerkis">{prog.duration}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-anthrazit">{prog.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-anthrazit-80">{prog.description}</p>
                    <ul className="mt-auto flex flex-col gap-2">
                      {prog.bullets.map((b) => (
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

      {/* Strategy board visual */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <Eyebrow>Strategie sichtbar machen</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Agile Methoden für Führung und Strategie
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Vom Strategy Board bis zum Delegation Poker — wir arbeiten mit Methoden, die Transparenz schaffen, Verantwortung verteilen und strategische Entscheidungen im Team möglich machen.
                </p>
                <ul className="flex flex-col gap-2">
                  {["Strategy Boards und OKR-Boards", "Delegation Poker und Delegation Board", "Laterale Führung und Peer-Coaching", "Agile Meeting-Formate für Führungsteams"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Reveal delay={150}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-3">
                  <Image
                    src="/images/agile-fuehrung/agile-methoden-management-strategie-board.png"
                    alt="Agile Methoden Management Strategie Board"
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

      {/* Testimonials */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Stimmen" title="Was Kund:innen sagen" lead="Auszüge aus Führungskräfte-Coachings und Transformationsprojekten." />
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
