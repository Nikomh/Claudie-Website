import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Lock, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Downloadbereich — Agile Tools & Templates · Claudia Thonet",
  description: "Kostenlose Downloads: Agile Meeting-Moderation, Retrospektiven-Vorlagen, Leadership Canvas und mehr — exklusiv für Newsletter-Abonnent:innen.",
  alternates: { canonical: "/downloadbereich/" },
};

const DOWNLOADS = [
  {
    title: "Agile Meeting-Moderation",
    description: "Meetings mit agilen Facilitation-Techniken strukturieren — mit konkreten Vorlagen und Moderationsleitfäden.",
    type: "PDF · Template",
    locked: true,
  },
  {
    title: "Retrospektiven-Ansätze",
    description: "Retrospektiven-Phasen und Tools für den Aufbau einer Lernkultur im Team — Formate für alle Teamreife-Phasen.",
    type: "PDF · Workbook",
    locked: true,
  },
  {
    title: "Leadership Canvas",
    description: "Framework für die Entwicklung und Kommunikation des eigenen Führungsverständnisses im agilen Kontext.",
    type: "PDF · Canvas",
    locked: true,
  },
  {
    title: "Gratis Retrospektiven E-Book",
    description: "Umfassendes E-Book zu Retrospektiven-Methoden, -Formaten und Tipps für effektives Team-Lernen.",
    type: "E-Book · PDF",
    locked: true,
  },
  {
    title: "Team Canvas",
    description: "Teamziele, Werte und Arbeitsprinzipien gemeinsam definieren — als Grundlage für echte Zusammenarbeit.",
    type: "PDF · Canvas",
    locked: true,
  },
  {
    title: "OKR-Implementierungsleitfaden",
    description: "Schritt-für-Schritt-Anleitung für die OKR-Einführung im Team oder der gesamten Organisation.",
    type: "PDF · Guide",
    locked: true,
  },
];

export default function DownloadbereichPage() {
  const { newsletter } = homeContent;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-[680px]">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Wissen & Downloads</Eyebrow>
              </div>
            </Reveal>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Agile Tools.</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">Templates.</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">Kostenlos.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Praxiserprobte Templates, Canvases und Leitfäden aus unserer agilen Schatzkiste — exklusiv für Newsletter-Abonnent:innen. Jetzt anmelden und sofort loslegen.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Downloads preview */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Was dich erwartet"
              title="Aus unserem Downloadbereich"
              lead="Melde dich zum Newsletter an und erhalte sofort Zugriff — inklusive kostenlosem Retrospektiven E-Book."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DOWNLOADS.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="relative flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    {item.locked && (
                      <div className="absolute right-4 top-4">
                        <Lock className="h-4 w-4 text-anthrazit-80/40" aria-hidden />
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                        <FileText className="h-4 w-4 text-tuerkis" aria-hidden />
                      </div>
                      <span className="rounded-full bg-bg-section px-2 py-0.5 text-xs text-anthrazit-80">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.description}</p>
                    <div className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-anthrazit-80/60">
                      <Lock className="h-3 w-3" aria-hidden />
                      Zugang via Newsletter
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Newsletter signup */}
      <Section bg="section">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="rounded-[var(--radius-lg)] bg-anthrazit px-8 py-12 text-center shadow-xl md:px-14">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tuerkis/20">
                    <Download className="h-7 w-7 text-tuerkis" aria-hidden />
                  </div>
                </div>
                <Eyebrow className="text-tuerkis-50">Sofortiger Zugang</Eyebrow>
                <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                  Jetzt anmelden & alles herunterladen
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                  Newsletter anmelden → Zugang zum Downloadbereich erhalten → Gratis E-Book und alle Templates sofort nutzen. Maximal alle 2 Wochen, jederzeit abbestellbar.
                </p>
                <div className="mt-8 flex justify-center">
                  <NewsletterForm
                    variant="stripe"
                    placeholder={newsletter.placeholder}
                    cta="Zugang sichern"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Already subscriber */}
      <Reveal>
        <Section>
          <Container>
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-sm text-anthrazit-80">
                Bereits Abonnent:in?{" "}
                <a
                  href="mailto:info@claudiathonet.de?subject=Downloadbereich%20Zugangsdaten"
                  className="font-semibold text-tuerkis hover:underline"
                >
                  Zugangsdaten anfordern
                </a>
              </p>
              <Link
                href="/toolbox"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-anthrazit-80 hover:text-tuerkis transition-colors"
              >
                Zur kostenlosen Toolbox
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Container>
        </Section>
      </Reveal>
    </>
  );
}
