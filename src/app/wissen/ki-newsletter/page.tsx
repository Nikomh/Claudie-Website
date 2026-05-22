import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "KI-Newsletter für Coaches – Prompt & Praxis | Claudia Thonet",
  description:
    "Abonniere den KI-Newsletter für Coaches. Erhalte regelmäßig erprobte Prompts, Updates zum AI Act und Praxis-Beispiele für deine Arbeit.",
};

export default function KiNewsletterPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "KI-Newsletter" },
        ]}
      />

      <div className="bg-anthrazit py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow className="text-tuerkis-50">Kostenlos abonnieren</Eyebrow>
            <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
              Der Newsletter für zukunftsfähige Coaches
            </h1>
            <p className="max-w-[54ch] text-base leading-relaxed text-white/80">
              Hol dir regelmäßig neue Impulse, bewährte Prompts und aktuelle Updates zu Themen wie dem EU AI Act – direkt in dein Postfach.
            </p>
          </div>
        </Container>
      </div>

      <Reveal>
        <Section bg="default">
          <Container className="max-w-4xl">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-tuerkis/20 bg-tuerkis/5 p-8 md:p-12">
              <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <Eyebrow className="text-tuerkis">KI-Newsletter für Coaches</Eyebrow>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
                    Prompt & Praxis
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-anthrazit-80">
                    Die KI-Entwicklung wartet nicht. Hol dir regelmäßig erprobte Prompts, Updates zum AI Act und Reflexionsfragen für deine Coaching-Praxis direkt ins Postfach. Kein Tech-Hype, sondern anwendbares Wissen.
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {[
                      "Direkt anwendbare COACH-Prompts",
                      "Praxis-Beispiele und Case-Studies",
                      "Datenschutz & AI-Act Updates für Coaches"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-anthrazit-80">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-base font-semibold text-anthrazit">Jetzt kostenlos eintragen:</h3>
                  {/* Dies ist aktuell eine Dummy-Form für das UI-Konzept. Das onSubmit muss mit eurem Newsletter-Tool verbunden werden. */}
                  <form className="flex flex-col gap-3" action="/newsletter" method="get">
                    <div>
                      <label htmlFor="newsletter-email" className="sr-only">E-Mail Adresse</label>
                      <input
                        type="email"
                        id="newsletter-email"
                        placeholder="deine.email@adresse.de"
                        className="w-full rounded-[var(--radius-md)] border border-border px-4 py-3 text-sm text-anthrazit placeholder:text-anthrazit-80/50 focus:border-tuerkis focus:outline-none focus:ring-1 focus:ring-tuerkis"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80"
                    >
                      Kostenlos abonnieren <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                    <p className="mt-2 text-center text-[11px] leading-relaxed text-anthrazit-80/70">
                      Kein Spam, jederzeit abmeldbar. Weitere Infos in unserer <Link href="/datenschutz" className="underline hover:text-anthrazit-80">Datenschutzerklärung</Link>.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </>
  );
}
