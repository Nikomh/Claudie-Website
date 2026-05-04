import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, Mail, Play, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Wissen & Ressourcen — Agile Methoden, Blog, Downloads, Bücher · Claudia Thonet",
  description: "Wissensbereich für agile Veränderung, Führung und Zusammenarbeit: Agile Methoden, Blog, Downloads, Bücher, YouTube und Newsletter.",
  alternates: { canonical: "/wissen/" },
  openGraph: { type: "website", locale: "de_DE", siteName: "Claudia Thonet", title: "Wissen & Ressourcen — Claudia Thonet", description: "Praxiswissen für agile Veränderung." },
};

const BEREICHE = [
  {
    href: "/agile-methoden",
    icon: Wrench,
    title: "Agile Methoden",
    description: "Interaktive Übersicht über die wichtigsten agilen Methoden und Frameworks — strukturiert nach dem TPDCA-Zyklus.",
    cta: "Zur Methodenübersicht",
    visual: "/images/illustrations/CT_SE02_methods.png",
    bg: "bg-tuerkis/5",
  },
  {
    href: "/toolbox",
    icon: BookOpen,
    title: "Toolbox & Blog",
    description: "Praxisartikel, Methodenkarten, Impulse und Tools für Coaches, Führungskräfte und Teams.",
    cta: "Zur Toolbox",
    visual: "/images/illustrations/CT_SE02_impulse.png",
    bg: "bg-bg-section",
  },
  {
    href: "/downloadbereich",
    icon: Download,
    title: "Downloads",
    description: "Kostenlose Templates, Canvases und Leitfäden — direkt nutzbar im nächsten Workshop oder Teamgespräch.",
    cta: "Zu den Downloads",
    visual: "/images/main/PDF-Download-Serie-Retrospektiven-Claudia-Thonet_2.png",
    bg: "bg-tuerkis/5",
  },
  {
    href: "/youtube-videos",
    icon: Play,
    title: "YouTube-Videos",
    description: "Webinar-Aufzeichnungen, Erklärvideos und Einblicke in Ausbildungen und Methoden auf unserem YouTube-Kanal.",
    cta: "Zu den Videos",
    visual: "/images/illustrations/CT_SE02_impulse.png",
    bg: "bg-bg-section",
  },
  {
    href: "/veroeffentlichungen",
    icon: BookOpen,
    title: "Bücher",
    description: "Vier Fachbücher zu Agilität, Coaching, Meetings und Kulturwandel — erschienen bei Vahlen und managerSeminare.",
    cta: "Zu den Büchern",
    visual: "/images/main/4_Buecher_3D_11_2025_1.png",
    bg: "bg-tuerkis/5",
  },
  {
    href: "/newsletter",
    icon: Mail,
    title: "Newsletter",
    description: "Agile Methoden, Impulse und neue Termine — alle 4 Wochen, mit kostenlosem E-Book und Downloadbereich-Zugang.",
    cta: "Newsletter abonnieren",
    visual: "/images/illustrations/CT_SE02_names.png",
    bg: "bg-bg-section",
  },
];

const THEMENBEREICHE = [
  "Agile Transformation",
  "Organisationsentwicklung",
  "Teamentwicklung",
  "Führung",
  "OKR",
  "Projektmanagement",
  "Change",
  "Methoden & Tools",
];

const EMPFEHLUNGEN = [
  {
    href: "/agile-methoden",
    title: "Agile Methoden-Übersicht",
    type: "Methoden",
    description: "Die interaktive Grafik strukturiert die wichtigsten agilen Methoden nach dem TPDCA-Zyklus.",
    visual: "/images/illustrations/CT_SE02_methods.png",
  },
  {
    href: "/toolbox",
    title: "Toolbox für Coaches und Führungskräfte",
    type: "Toolbox",
    description: "Praxisnahe Methoden, Templates und Impulse für die tägliche Arbeit.",
    visual: "/images/illustrations/CT_Toolkit.png",
  },
  {
    href: "/veroeffentlichungen",
    title: "Bücher von Claudia Thonet",
    type: "Bücher",
    description: "Vier Fachbücher — von Agile Meetings bis Kulturwandel.",
    visual: "/images/main/4_Buecher_3D_11_2025_1.png",
  },
];

export default function WissenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]" />
        <Container className="relative py-20 md:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
              <Eyebrow className="text-tuerkis-50">Ressourcen & Wissen</Eyebrow>
            </div>
          </Reveal>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
            <Reveal as="span" className="block text-white">Wissen für agile</Reveal>
            <Reveal as="span" delay={100} className="block text-tuerkis">Veränderung und Zusammenarbeit.</Reveal>
          </h1>
          <Reveal delay={280}>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/65 md:text-lg">
              Methoden, Tools, Impulse und Bücher — frei zugänglich für Coaches, Führungskräfte und alle, die agile Veränderung besser verstehen und gestalten wollen.
            </p>
          </Reveal>
          <Reveal delay={380} className="mt-8 flex flex-wrap gap-3">
            <Link href="/agile-methoden" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
              Agile Methoden entdecken <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/newsletter" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
              Newsletter abonnieren
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* THEMENBEREICHE */}
      <Reveal>
        <div className="border-y border-border bg-white">
          <Container className="py-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-anthrazit-80/60 shrink-0">Themen:</span>
              {THEMENBEREICHE.map((t) => (
                <span key={t} className="rounded-full border border-border bg-bg-section px-3 py-1 text-xs font-medium text-anthrazit-80 transition-colors hover:border-tuerkis/40 hover:text-tuerkis cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </Container>
        </div>
      </Reveal>

      {/* EMPFEHLUNGEN */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Empfohlen" title="Gute Einstiege" lead="Drei besonders hilfreiche Ressourcen für den schnellen Start." />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {EMPFEHLUNGEN.map((item, i) => (
                <Reveal key={item.href} delay={i * 70}>
                  <Link href={item.href} className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-border bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="relative aspect-video overflow-hidden bg-bg-section flex items-center justify-center p-6">
                      <Image src={item.visual} alt="" width={200} height={140} className="h-full w-auto max-h-28 object-contain transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-tuerkis">{item.type}</span>
                      <h3 className="font-bold leading-snug text-anthrazit">{item.title}</h3>
                      <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{item.description}</p>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-tuerkis group-hover:gap-2 transition-all">
                        Ansehen <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ALLE BEREICHE */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading eyebrow="Alle Bereiche" title="Der vollständige Wissensbereich" lead="Von Methodenkarten bis Bücher — alles an einem Ort." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BEREICHE.map((bereich, i) => {
                const Icon = bereich.icon;
                return (
                  <Reveal key={bereich.href} delay={i * 60}>
                    <Link href={bereich.href} className={`group flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border ${bereich.bg} p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-tuerkis/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis`}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                        <Icon className="h-5 w-5 text-tuerkis" aria-hidden />
                      </div>
                      <div className="flex flex-1 flex-col gap-2">
                        <h3 className="font-bold text-anthrazit">{bereich.title}</h3>
                        <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{bereich.description}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-tuerkis group-hover:gap-2 transition-all">
                        {bereich.cta} <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* NEWSLETTER CTA */}
      <Reveal>
        <Section>
          <Container className="max-w-2xl text-center">
            <Eyebrow>Newsletter</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-anthrazit md:text-3xl">Wissen direkt in den Posteingang</h2>
            <p className="mt-3 text-sm leading-relaxed text-anthrazit-80 md:text-base">
              Alle 4 Wochen: agile Methoden, Impulse und neue Termine — plus gratis E-Book und Downloadbereich-Zugang.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/newsletter" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Jetzt abonnieren <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Container>
        </Section>
      </Reveal>
    </>
  );
}
