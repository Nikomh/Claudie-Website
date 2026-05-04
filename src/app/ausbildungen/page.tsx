import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Clock, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Agile Ausbildungen — Zertifiziert & BDVT-anerkannt · Claudia Thonet",
  description: "Zertifizierte Agile Ausbildungen: Agile Coach, Agile Facilitator, OKR Coach, Agile Führung, Vertriebscoach. BDVT-anerkannt, Bildungsurlaub, bis 100+ Stunden.",
  alternates: { canonical: "/ausbildungen/" },
};

const AUSBILDUNGEN = [
  {
    href: "/agile-ausbildungen/agiler-coach",
    title: "Agile Coach Ausbildung",
    subtitle: "Die umfassendste Ausbildung",
    description: "In 100+ Stunden zur BDVT-zertifizierten Agile Coach. Das tiefste Format mit 5 Trainerinnen, 5 Modulen und Supervision.",
    hours: "100+",
    duration: "5 Module",
    badge: "BDVT-Zertifiziert",
    icon: "/images/icons/ausbildung-agiler-coach-claudia-thonet-coaching-training-icon-transparent.png",
    photo: "/images/agiler-coach/claudia-thonet-leitet-die-ausbildung-zum-agilen-coach.jpg",
    highlights: ["5 Expert:innen", "Supervision inklusive", "Bildungsurlaub Berlin"],
    featured: true,
  },
  {
    href: "/agile-ausbildungen/agiler-facilitator",
    title: "Agile Facilitator Ausbildung",
    subtitle: "Workshops & Meetings",
    description: "In 50+ Stunden zur gefragten Facilitatorin — Workshops konzipieren, Meetings transformieren, innovative Formate entwickeln.",
    hours: "50+",
    duration: "3 Module",
    badge: "BDVT-Zertifiziert",
    icon: "/images/icons/ausbildung-agiler-moderator-claudia-thonet-coaching-training-icon-transparent.png",
    photo: "/images/agiler-facilitator/claudia-thonet-im-trainng-zu-agilen-werten-11-23.jpg",
    highlights: ["20+ Methoden pro Modul", "Virtuelle Formate", "Bildungsurlaub Berlin"],
    featured: false,
  },
  {
    href: "/agile-ausbildungen/okr-coach",
    title: "OKR Coach Ausbildung",
    subtitle: "Strategie & Ziele",
    description: "In 25 Stunden zum OKR Coach — Objectives & Key Results einführen, coachen und nachhaltig verankern.",
    hours: "25",
    duration: "3 Tage",
    badge: "BDVT + ECA",
    icon: "/images/icons/agile-methoden-kompakt-online-kurs-claudia-thonet-coaching-training-icon.png",
    photo: "/images/okr-coach/jonny-kohlhaas-okr-coach-ausbildung-claudia-thonet.jpg",
    highlights: ["3 intensive Tage", "Mit Jonny Kohlhaas", "OKR-Zertifizierung"],
    featured: false,
  },
  {
    href: "/agile-ausbildungen/agile-fuehrung",
    title: "Agile Führung Ausbildung",
    subtitle: "Führungskräfte entwickeln",
    description: "Führung im agilen Kontext — Rahmen gestalten, Selbstorganisation ermöglichen, Sinn vermitteln.",
    hours: "TODO",
    duration: "TODO",
    badge: "BDVT-Zertifiziert",
    icon: "/images/icons/agile-fuehrung-training-coaching-fuer-agile-transformative-fuehrung-claudia-thonet-icon-transparent.png",
    photo: "/images/agile-fuehrung/claudia-thonet-beraet-zum-thema-agile-fuehrung.jpg",
    highlights: ["Praxisnah", "Inhouse buchbar", "Für Führungskräfte"],
    featured: false,
  },
  {
    href: "/agile-ausbildungen/vertriebscoach-ausbildung",
    title: "Agiler Vertriebscoach",
    subtitle: "Vertrieb transformieren",
    description: "Vertriebsteams agil entwickeln — kundenorientiert, iterativ, wirksam.",
    hours: "TODO",
    duration: "TODO",
    badge: "Zertifiziert",
    icon: "/images/icons/ausbildung-agiler-vertriebscoach-claudia-thonet-coaching-training-icon-transparent.png",
    photo: null,
    highlights: ["Für Vertriebscoaches", "Agile Methoden", "Inhouse buchbar"],
    featured: false,
  },
  {
    href: "/agile-ausbildungen/kommunikationstrainerin-ausbildung",
    title: "Kommunikationstrainerin",
    subtitle: "Kommunikation & Coaching",
    description: "Professionell als Kommunikationstrainerin auftreten — mit Tiefe, Methodik und Zertifikat.",
    hours: "TODO",
    duration: "TODO",
    badge: "Zertifiziert",
    icon: "/images/icons/ausbildung-weiterbildung-agiler-trainer-claudia-thonet-coaching-training-icon-transparent.png",
    photo: null,
    highlights: ["Kommunikation", "Coaching-Ansatz", "Zertifikat"],
    featured: false,
  },
  {
    href: "/agile-ausbildungen/veraenderung-gestalten",
    title: "Veränderung gestalten",
    subtitle: "Change-Weiterbildung",
    description: "In 2 intensiven Tagen: Veränderungsprozesse verstehen, Widerstände begleiten, Teams durch Wandel führen.",
    hours: "2 Tage",
    duration: "2 Tage",
    badge: "Weiterbildung",
    icon: "/images/veraenderung-gestalten/Ausbildung_Veraenderung_gestalten_Claudia_Thonet.png",
    photo: "/images/veraenderung-gestalten/Veraenderung_gestalten_Claudia_Thonet.jpg",
    highlights: ["Intensivformat", "Kleine Gruppe", "Inhouse buchbar"],
    featured: false,
  },
];

const TRUST_ITEMS = [
  { value: "BDVT", label: "Zertifizierungsstelle" },
  { value: "ECA", label: "Lizenziert" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "Bildungsurlaub", label: "Anerkannt in Berlin" },
];

const FINDER_QUESTIONS = [
  {
    goal: "Ich will als Agile Coach arbeiten",
    answer: "Agile Coach Ausbildung (100+ Stunden)",
    href: "/agile-ausbildungen/agiler-coach",
  },
  {
    goal: "Ich moderiere Workshops und Meetings",
    answer: "Agile Facilitator Ausbildung (50+ Stunden)",
    href: "/agile-ausbildungen/agiler-facilitator",
  },
  {
    goal: "Ich will OKR einführen oder coachen",
    answer: "OKR Coach Ausbildung (3 Tage intensiv)",
    href: "/agile-ausbildungen/okr-coach",
  },
  {
    goal: "Ich führe ein Team oder eine Abteilung",
    answer: "Agile Führung Ausbildung",
    href: "/agile-ausbildungen/agile-fuehrung",
  },
  {
    goal: "Ich bin im Vertrieb und will agiler werden",
    answer: "Agiler Vertriebscoach",
    href: "/agile-ausbildungen/vertriebscoach-ausbildung",
  },
  {
    goal: "Ich begleite Veränderungsprozesse",
    answer: "Veränderung gestalten (2 Tage)",
    href: "/agile-ausbildungen/veraenderung-gestalten",
  },
];

export default function AusbildungenOverviewPage() {
  const featured = AUSBILDUNGEN.filter((a) => a.featured);
  const rest = AUSBILDUNGEN.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.07)_0%,transparent_70%)]" />
        <Container className="relative py-20 md:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
              <Eyebrow className="text-tuerkis-50">Zertifizierte Ausbildungen</Eyebrow>
            </div>
          </Reveal>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
            <Reveal as="span" className="block text-white">Ausbildungen, die</Reveal>
            <Reveal as="span" delay={100} className="block text-tuerkis">wirklich etwas</Reveal>
            <Reveal as="span" delay={200} className="block text-white/70">verändern.</Reveal>
          </h1>
          <Reveal delay={350}>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/65 md:text-lg">
              BDVT-zertifizierte Ausbildungen für Coaches, Trainer:innen, Führungskräfte und alle, die agile Veränderung professionell gestalten wollen — von 2 Tagen bis 100+ Stunden.
            </p>
          </Reveal>
          <Reveal delay={450} className="mt-8 flex flex-wrap gap-3">
            <Link href="/beratung" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
              Beratungsgespräch vereinbaren <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="#finder" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
              Welche Ausbildung passt zu mir?
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Trust bar */}
      <div className="border-y border-border bg-bg-section">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
                <p className="text-xl font-bold text-anthrazit md:text-2xl">{item.value}</p>
                <p className="text-xs leading-snug text-anthrazit-80">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Featured — Agile Coach */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Flagship-Ausbildung" title="Die umfassendste Agile Ausbildung" lead="Die Agile Coach Ausbildung ist unser tiefstgehendes Format — 100+ Stunden, 5 Expert:innen, BDVT-zertifiziert." />
          {featured.map((a) => (
            <Reveal key={a.href}>
              <Link href={a.href} className="group mt-10 grid overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-sm transition-shadow hover:shadow-md lg:grid-cols-[2fr_3fr]">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                  {a.photo && (
                    <Image src={a.photo} alt={a.title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  )}
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/40 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col gap-4 p-8 lg:p-10">
                  <div className="flex items-start gap-4">
                    <Image src={a.icon} alt="" width={56} height={56} className="shrink-0 object-contain" />
                    <div>
                      <span className="rounded-full bg-tuerkis/10 px-3 py-1 text-xs font-semibold text-tuerkis">{a.badge}</span>
                      <h2 className="mt-2 text-2xl font-bold text-anthrazit">{a.title}</h2>
                      <p className="text-sm text-tuerkis">{a.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-anthrazit-80">{a.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-anthrazit-80">
                      <Clock className="h-4 w-4 text-tuerkis" aria-hidden />
                      {a.hours} Stunden
                    </div>
                    <div className="flex items-center gap-2 text-sm text-anthrazit-80">
                      <Award className="h-4 w-4 text-tuerkis" aria-hidden />
                      {a.duration}
                    </div>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {a.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-anthrazit-80">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-tuerkis group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight className="h-4 w-4" aria-hidden />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </Section>

      {/* All other Ausbildungen */}
      <Section bg="section">
        <Container>
          <SectionHeading eyebrow="Alle Ausbildungen" title="Das vollständige Angebot" lead="Von 2 Tagen bis zu 100+ Stunden — wähle das Format, das zu deinen Zielen und deiner Zeit passt." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.href} delay={i * 60}>
                <Link href={a.href} className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                  {a.photo && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image src={a.photo} alt={a.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-3">
                      <Image src={a.icon} alt="" width={40} height={40} className="shrink-0 object-contain" />
                      <span className="rounded-full bg-tuerkis/10 px-2.5 py-0.5 text-xs font-semibold text-tuerkis">{a.badge}</span>
                    </div>
                    <h2 className="text-base font-bold text-anthrazit leading-snug">{a.title}</h2>
                    <p className="text-xs text-tuerkis">{a.subtitle}</p>
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{a.description}</p>
                    <div className="flex items-center gap-4 border-t border-border pt-3">
                      <span className="flex items-center gap-1.5 text-xs text-anthrazit-80">
                        <Clock className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                        {a.hours} Std.
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-anthrazit-80">
                        <Users className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                        {a.duration}
                      </span>
                      <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-tuerkis group-hover:gap-2 transition-all">
                        Details <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Angebotsfinder */}
      <Section id="finder">
        <Container>
          <SectionHeading eyebrow="Angebotsfinder" title="Welche Ausbildung passt zu dir?" lead="Beschreib dein Ziel — wir zeigen dir das passende Format." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {FINDER_QUESTIONS.map((item, i) => (
              <Reveal key={item.goal} delay={i * 50}>
                <Link href={item.href} className="group flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm transition-all hover:border-tuerkis/40 hover:shadow-md">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tuerkis" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-anthrazit">{item.goal}</p>
                    <p className="mt-1 text-xs text-tuerkis">→ {item.answer}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 text-center text-sm text-anthrazit-80">
              Noch unsicher?{" "}
              <Link href="/beratung" className="font-semibold text-tuerkis hover:underline">
                Vereinbare ein kostenloses Erstgespräch
              </Link>{" "}
              — wir helfen dir, das Richtige zu finden.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Inhouse CTA */}
      <div className="bg-tuerkis py-14">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Eyebrow className="text-white/70">Für Unternehmen</Eyebrow>
              <p className="mt-2 text-xl font-bold text-white">Alle Ausbildungen auch als Inhouse-Programm</p>
              <p className="mt-1 max-w-[52ch] text-sm text-white/75">
                Maßgeschneidert für euer Team, eure Branche und eure Herausforderungen — mit echten Fällen aus eurem Unternehmen.
              </p>
            </div>
            <Link href="/beratung" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Inhouse anfragen <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
