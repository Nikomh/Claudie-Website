import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Agile Coach Certificate · Claudia Thonet",
  description:
    "Die umfassende 5–6-Monats-Ausbildung für Coaches und Change Agents, die Organisationen durch KI-Ära Transformation begleiten — BDVT-zertifiziert.",
  robots: { index: false, follow: false },
};

const MODULES = [
  {
    number: "01",
    title: "Agile Grundlagen und Haltung",
    body: "Agile Werte, Prinzipien und Frameworks — nicht als Dogma, sondern als Werkzeugkasten.",
  },
  {
    number: "02",
    title: "Coaching-Kompetenz für Transformation",
    body: "Systemisches Coaching, Fragetechniken und professionelle Begleitungsformate.",
  },
  {
    number: "03",
    title: "Facilitation und Workshopdesign",
    body: "Gruppen, Teams und Führungskreise wirksam begleiten und moderieren.",
  },
  {
    number: "04",
    title: "KI-Ära Organisationsentwicklung",
    body: "Wie KI Rollen, Strukturen und Zusammenarbeit verändert — und wie Coaching dabei hilft.",
  },
  {
    number: "05",
    title: "Praxisprojekt und Supervision",
    body: "Echte Fallarbeit, kollegiale Fallberatung und individuelle Supervision.",
  },
];

const FUER_WEN = [
  "Agile Coaches und Scrum Master",
  "HR und Personalentwickler:innen",
  "Change Manager und Transformationsverantwortliche",
  "Interne Berater und OD-Professionals",
  "Trainer:innen und Moderator:innen",
  "Team- und Projektleiter:innen, die Gruppen führen",
];

const DETAILS = [
  "5–6 Monate",
  "Blended: Präsenz + Live-Online",
  "BDVT-zertifiziert",
  "Offene Gruppe oder Inhouse",
  "Supervision inklusive",
  "Persönliches Lernprojekt",
];

export default function AgileCoachCertificatePage() {
  return (
    <>
      {/* BACK LINK */}
      <div className="border-b border-border bg-white">
        <Container>
          <div className="py-3">
            <Link
              href="/beratung/neue-startseite/transformation-facilitation"
              className="inline-flex items-center gap-1.5 text-sm text-anthrazit-80 transition-colors hover:text-anthrazit"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Menschenzentrierte Transformation &amp; Facilitation
            </Link>
          </div>
        </Container>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.22)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.08)_0%,transparent_70%)]"
        />
        <Container className="relative grid min-h-[520px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow className="text-tuerkis">Facilitation &amp; Change · Zertifizierung</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
                Agile Coach Certificate
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Die umfassende 5–6-Monats-Ausbildung für Coaches und Change Agents, die Organisationen durch KI-Ära Transformation begleiten — BDVT-zertifiziert.
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
                href="/beratung/neue-startseite/transformation-facilitation"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Alle Programme
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative hidden lg:flex lg:items-center lg:justify-center">
            <Image
              src="/images/agile-organisationsentwicklung/Consulting_Inhouse_Agile_Organisationsentwicklung_Claudia_Thonet.png"
              alt="Agile Coach Certificate — Claudia Thonet"
              width={240}
              height={240}
              className="h-auto object-contain drop-shadow-lg"
            />
          </Reveal>
        </Container>
      </section>

      {/* MODULE */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Programm Module"
            title="Fünf Module — von den Grundlagen zur Praxis"
            lead="Ein strukturierter Lernpfad, der Coaching-Kompetenz, Facilitation und KI-Ära-Wissen systematisch aufbaut."
          />

          {/* BDVT Highlight Box */}
          <div className="mt-8 rounded-[var(--radius-md)] border border-tuerkis/30 bg-tuerkis/10 px-6 py-4">
            <p className="text-center text-sm font-semibold text-anthrazit md:text-base">
              BDVT-zertifizierte Ausbildung · 100+ Stunden · 5 Module · Praxisprojekt inklusive
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {MODULES.map((module, i) => (
              <Reveal key={module.title} delay={i * 60}>
                <div className="flex gap-5 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tuerkis/10 text-sm font-bold text-tuerkis">
                    {module.number}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-semibold leading-snug text-anthrazit">{module.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{module.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FÜR WEN + DETAILS */}
      <Section bg="section">
        <Container>
          <SectionHeading
            eyebrow="Details"
            title="Für wen und wie"
            lead="Die Ausbildung richtet sich an erfahrene und aufstrebende Change Agents, die sich für die KI-Ära professionalisieren wollen."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Für wen */}
            <div className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-anthrazit">Für wen</h3>
              <ul className="flex flex-col gap-2.5">
                {FUER_WEN.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                    <span className="text-sm leading-snug text-anthrazit-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Programmdetails */}
            <div className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-anthrazit">Programmdetails</h3>
              <ul className="flex flex-col gap-2.5">
                {DETAILS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" />
                    <span className="text-sm leading-snug text-anthrazit-80">{item}</span>
                  </li>
                ))}
              </ul>
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
              Bereit für die Ausbildung zum Agile Coach?
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/65 md:text-base">
              Wir besprechen Ihre Situation, klären offene Fragen und schauen gemeinsam, ob die Ausbildung der richtige nächste Schritt ist.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Ausbildung anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite/transformation-facilitation"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Alle Programme
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
