import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, Gift, Mail, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Newsletter — Agile Methoden & Impulse · Claudia Thonet",
  description: "Agile Methoden, Führungsimpulse und praxiserprobte Tools alle 2 Wochen — kostenlos. Jetzt anmelden und gratis Retrospektiven E-Book erhalten.",
  alternates: { canonical: "/newsletter/" },
};

const BENEFITS = [
  {
    icon: Zap,
    title: "Direkt anwendbare Methoden",
    description: "Praxiserprobte agile Tools und Methoden für deinen Alltag — alle 2 Wochen, kompakt und umsetzbar.",
  },
  {
    icon: Gift,
    title: "Gratis Retrospektiven E-Book",
    description: "Sofort nach der Anmeldung: umfassendes E-Book mit Retrospektiven-Methoden und -Formaten für Teams.",
  },
  {
    icon: Download,
    title: "Zugang zum Downloadbereich",
    description: "Templates, Canvases und Leitfäden aus unserer agilen Schatzkiste — exklusiv für Abonnent:innen.",
  },
  {
    icon: BookOpen,
    title: "Wissen aus der Praxis",
    description: "Claudia Thonet und ihr Team teilen echte Erfahrungen aus Transformationsprojekten und Ausbildungen.",
  },
  {
    icon: Mail,
    title: "Kein Spam",
    description: "Maximal alle 2 Wochen eine E-Mail — kein Überfluten. Jederzeit mit einem Klick abbestellbar.",
  },
  {
    icon: ArrowRight,
    title: "Exklusive Frühbucher-Angebote",
    description: "Als erste:r von neuen Ausbildungsterminen, Webinaren und Angeboten erfahren.",
  },
];

export default function NewsletterPage() {
  const { newsletter } = homeContent;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative grid min-h-[520px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Agilität in deinem Posteingang</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Agile Methoden,</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">frisch in deinen</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">Posteingang.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Praxiserprobte Tools, Impulse und Methoden alle 2 Wochen — direkt anwendbar, ohne Theorie-Ballast. Plus: gratis Retrospektiven E-Book und Zugang zum Downloadbereich.
              </p>
            </Reveal>
            <Reveal delay={460}>
              <NewsletterForm
                variant="stripe"
                placeholder={newsletter.placeholder}
                cta={newsletter.cta}
              />
            </Reveal>
          </div>

          <Reveal delay={300} className="hidden lg:block">
            <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-tuerkis-50">Was du bekommst</p>
              <div className="flex flex-col gap-4">
                {[
                  "Praxiserprobte agile Methoden",
                  "Gratis Retrospektiven E-Book",
                  "Zugang zum Downloadbereich",
                  "Exklusive Frühbucher-Angebote",
                  "Maximal alle 2 Wochen",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" aria-hidden />
                    <p className="text-sm text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Benefits grid */}
      <Reveal>
        <Section>
          <Container>
            <div className="mb-10 flex flex-col gap-3">
              <Eyebrow>Was du bekommst</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                Mehr als ein Newsletter.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Reveal key={benefit.title} delay={i * 60}>
                    <div className="flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                        <Icon className="h-5 w-5 text-tuerkis" aria-hidden />
                      </div>
                      <h3 className="font-semibold text-anthrazit">{benefit.title}</h3>
                      <p className="text-sm leading-relaxed text-anthrazit-80">{benefit.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Final signup CTA */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-anthrazit md:text-3xl">
                Bereit? Einfach anmelden.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-anthrazit-80">
                Keine Verpflichtung, kein Spam. Jederzeit mit einem Klick abbestellbar.
              </p>
              <div className="mt-6 flex justify-center">
                <NewsletterForm
                  variant="stripe"
                  placeholder={newsletter.placeholder}
                  cta={newsletter.cta}
                />
              </div>
              <p className="mt-4 text-xs text-anthrazit-80/60">
                Durch Anmeldung stimmst du der Verarbeitung deiner E-Mail-Adresse gemäß unserer{" "}
                <Link href="/datenschutz" className="underline hover:text-tuerkis">
                  Datenschutzerklärung
                </Link>{" "}
                zu.
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>
    </>
  );
}
