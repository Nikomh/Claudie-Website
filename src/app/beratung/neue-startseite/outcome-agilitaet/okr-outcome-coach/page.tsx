import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "OKR & Outcome Coach Certificate — Outcome-orientierte Lieferung · Claudia Thonet",
  description:
    "Die 3–4-monatige Ausbildung für alle, die OKRs einführen, coachen und in Transformation und Alltag nachhaltig verankern wollen. BDVT- und ECA-akkreditiert.",
  robots: { index: false, follow: false },
};

const MODULES = [
  {
    number: "01",
    title: "OKR-Grundlagen und Theorie",
    body: "Was OKRs sind, was sie nicht sind, und warum die meisten OKR-Implementierungen scheitern.",
  },
  {
    number: "02",
    title: "OKR-Einführung und Change Management",
    body: "Wie man OKRs einführt, ohne die Organisation zu überfordern — iterativ und lernorientiert.",
  },
  {
    number: "03",
    title: "Coaching für OKR-Teams und Führung",
    body: "Wie man OKR-Reviews, Check-ins und Retros als Coach begleitet und Fokus aufrechthält.",
  },
  {
    number: "04",
    title: "Outcome-Metriken und Business Agility",
    body: "Den Bogen von OKRs zu Business Impact, Flow-Metriken und strategischer Steuerung spannen.",
  },
];

const FUER_WEN = [
  "OKR Master und Change Agents",
  "Agile Coaches",
  "Führungskräfte mit Strategieverantwortung",
  "HR und OD Professionals",
  "Projektleiter:innen und PMOs",
];

const DETAILS = [
  "3–4 Monate",
  "Blended Learning",
  "BDVT & ECA akkreditiert",
  "Praxisprojekt",
  "Offene Gruppe oder Inhouse",
  "Max. 12 TN",
];

export default function OkrOutcomeCoachPage() {
  return (
    <>
      {/* BACK LINK */}
      <div className="border-b border-border bg-white">
        <Container>
          <div className="py-3">
            <Link
              href="/beratung/neue-startseite/outcome-agilitaet"
              className="inline-flex items-center gap-1.5 text-sm text-anthrazit-80 transition-colors hover:text-anthrazit"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Outcome-orientierte Lieferung &amp; Business Agility
            </Link>
          </div>
        </Container>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative grid min-h-[540px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow className="text-tuerkis">Business Agility · Zertifizierung</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
                OKR &amp; Outcome Coach Certificate
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Die 3–4-monatige Ausbildung für alle, die OKRs einführen, coachen und in Transformation und Alltag
                nachhaltig verankern wollen. BDVT- und ECA-akkreditiert.
              </p>
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Ausbildung anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/outcome-agilitaet"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Zur Säule Outcome &amp; Agility
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative hidden lg:flex lg:items-center lg:justify-center">
            <Image
              src="/images/illustrations/CT_SE02_impulse.png"
              alt="OKR & Outcome Coach Certificate"
              width={200}
              height={200}
              className="h-auto w-full max-w-[200px] object-contain drop-shadow-lg"
            />
          </Reveal>
        </Container>
      </section>

      {/* PROGRAMM-MODULE */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Programm Module"
            title="Vier Module — ein klarer Weg"
            lead="Von OKR-Grundlagen bis zur Outcome-orientierten Organisationssteuerung — aufeinander aufbauend, praxisnah und direkt anwendbar."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {MODULES.map((module, i) => (
              <Reveal key={module.number} delay={i * 70}>
                <div className="flex h-full gap-4 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <div className="shrink-0">
                    <span className="text-2xl font-bold text-tuerkis/30">{module.number}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold leading-snug text-anthrazit">{module.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{module.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ZERTIFIZIERUNGS-BOX */}
          <Reveal delay={200}>
            <div className="mt-8 rounded-[var(--radius-md)] border border-tuerkis/30 bg-tuerkis/10 p-5">
              <p className="text-center text-sm font-semibold text-anthrazit">
                BDVT-zertifiziert · ECA-akkreditiert · 3–4 Monate · Praxisprojekt inklusive
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FÜR WEN + DETAILS */}
      <Section bg="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Für wen" title="Wer diese Ausbildung macht" />
              <div className="mt-2 flex flex-col gap-3">
                {FUER_WEN.map((item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                      <p className="text-sm leading-snug text-anthrazit-80">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Details" title="Programmdetails" />
              <div className="mt-2 flex flex-col gap-3">
                {DETAILS.map((item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                      <p className="text-sm leading-snug text-anthrazit-80">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <div className="bg-anthrazit py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow className="text-tuerkis">Nächster Schritt</Eyebrow>
            <h2 className="max-w-[28ch] text-3xl font-bold leading-tight text-white md:text-4xl">
              OKR & Outcome Coach werden
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/65 md:text-base">
              Fragen zur Ausbildung, zum Ablauf oder zur Inhouse-Variante — sprechen Sie uns an. 30 Minuten ohne
              Verpflichtung.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Ausbildung anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/outcome-agilitaet"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Weitere Angebote dieser Säule
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
