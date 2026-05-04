import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd, buildBreadcrumbSchema } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Beratung für Organisationen, Teams und Führungskräfte — Claudia Thonet",
  description: "Agile Beratung für wirksame Veränderung: Organisationsentwicklung, Teamentwicklung, Führungskräfteentwicklung, OKR-Einführung und Transformationsbegleitung.",
  alternates: { canonical: "/beratung/" },
  openGraph: { type: "website", locale: "de_DE", siteName: "Claudia Thonet", title: "Beratung — Claudia Thonet Agile Consulting", description: "Beratung für Organisationen, Teams und Führungskräfte in Veränderung." },
};

const BEDARFSLAGEN = [
  { title: "Transformation braucht Orientierung", body: "Große Veränderungsvorhaben verlieren sich in Details, Widerständen oder mangelnder Klarheit über das Ziel. Teams und Führungskräfte wissen nicht, welchen Schritt sie als nächstes gehen sollen." },
  { title: "Teams arbeiten aneinander vorbei", body: "Rollen sind unklar, Entscheidungen stocken, Meetings erzeugen Aufwand statt Ergebnisse. Die Zusammenarbeit funktioniert — aber nicht so, wie sie könnte." },
  { title: "Führung verändert sich schneller als Strukturen", body: "Führungskräfte sollen delegieren, befähigen und begleiten — aber Strukturen, Entscheidungswege und Erwartungen sind noch nicht angepasst." },
  { title: "OKRs erzeugen Aufwand, aber wenig Fokus", body: "OKRs wurden eingeführt, aber die Ziele sind zu viele, zu groß oder zu weit weg vom Alltag. Das System erzeugt Pflege, aber keine Richtung." },
  { title: "Projektarbeit wird komplexer und hybrider", body: "Teams arbeiten mit klassischen und agilen Methoden gleichzeitig — ohne gemeinsames Verständnis, welches Steuerungsmodell wann passt." },
  { title: "Veränderung erzeugt Erschöpfung", body: "Zu viele Initiativen, zu wenig Konsolidierung. Veränderungsmüdigkeit breitet sich aus — und die nächste Initiative stößt auf abnehmenden Rückhalt." },
];

const BERATUNGSFELDER = [
  {
    href: "/beratung/agile-organisationsentwicklung",
    title: "Agile Organisationsentwicklung",
    description: "Strukturen, Kulturen und Zusammenarbeitsweisen iterativ weiterentwickeln — systemisch und auf Wirkung ausgerichtet.",
    icon: "/images/agile-organisationsentwicklung/Consulting_Inhouse_Agile_Organisationsentwicklung_Claudia_Thonet.png",
    tags: ["Kulturentwicklung", "Strukturarbeit", "Systemisches Denken"],
  },
  {
    href: "/beratung/agile-transformation",
    title: "Agile Transformation",
    description: "Agile Arbeitsweisen und Denkmodelle schrittweise in die Organisation bringen — pragmatisch, nicht dogmatisch.",
    icon: "/images/illustrations/CT_SE02_steps.png",
    tags: ["Frameworks", "Change-Begleitung", "Iteratives Vorgehen"],
  },
  {
    href: "/beratung/teamentwicklung",
    title: "Teamentwicklung",
    description: "Teams stärken, Zusammenarbeit klären, Selbstorganisation fördern — für mehr Wirksamkeit im Alltag.",
    icon: "/images/icons/agile-teams-agile-teamentwicklung-claudia-thonet-coaching-training-icon-transparent.png",
    tags: ["Teamdynamik", "Rollen & Verantwortung", "Kollaboration"],
  },
  {
    href: "/beratung/fuehrungskraefteentwicklung",
    title: "Führungskräfteentwicklung",
    description: "Führung im Wandel stärken — Rahmen setzen, befähigen, loslassen und dennoch Orientierung geben.",
    icon: "/images/agile-fuehrung/ausbildung_consulting_agile_fuehrung_claudia_thonet_agile_consulting_icon_transparent_schrift_02_2023.png",
    tags: ["Führungshaltung", "Rollenklarheit", "Selbstorganisation"],
  },
  {
    href: "/beratung/okr-einfuehrung",
    title: "OKR-Einführung & Begleitung",
    description: "OKRs strukturiert einführen und im Alltag verankern — damit Ziele wirklich fokussieren statt Aufwand erzeugen.",
    icon: "/images/okr-coach/jonny-kohlhaas-okr-coach-ausbildung-claudia-thonet.jpg",
    tags: ["Zielklarheit", "OKR-Rhythmus", "Strategieumsetzung"],
  },
  {
    href: "/beratung/veraenderung-gestalten",
    title: "Veränderung gestalten",
    description: "Veränderungsprozesse professionell begleiten — Widerstände verstehen, Akzeptanz aufbauen, Wandel nachhaltig verankern.",
    icon: "/images/veraenderung-gestalten/Ausbildung_Veraenderung_gestalten_Claudia_Thonet.png",
    tags: ["Change Management", "Widerstandsarbeit", "Kulturwandel"],
  },
  {
    href: "/beratung/hybrides-projektmanagement",
    title: "Hybrides Projektmanagement",
    description: "Klassische und agile Projektsteuerung verbinden — klare Rollenmodelle, Entscheidungslogik und Steuerungsroutinen.",
    icon: "/images/illustrations/CT_SE02_structured.png",
    tags: ["Projektsteuerung", "Hybride Methoden", "Skalierung"],
  },
];

const VORGEHEN = [
  { step: "01", title: "Kontext verstehen", body: "Wir sprechen mit den richtigen Menschen, bevor wir handeln. Kein Fragebogen-Audit, sondern echtes Zuhören." },
  { step: "02", title: "Problem schärfen", body: "Wir arbeiten heraus, welches Problem wirklich gelöst werden soll — nicht das erstgenannte, sondern das dahinterliegende." },
  { step: "03", title: "Intervention designen", body: "Wir entwickeln ein passendes Format: Workshop, Coaching, Prozessbegleitung oder Kombination davon." },
  { step: "04", title: "Umsetzung begleiten", body: "Wir sind dabei — nicht als externe Experten, die Lösungen liefern, sondern als Begleiter:innen, die mitdenken und ko-kreativ arbeiten." },
  { step: "05", title: "Wirkung verankern", body: "Was am Ende zählt: Was hat sich verändert? Was trägt? Wir reflektieren und sorgen für Transfer in den Alltag." },
];

const ERGEBNISSE = [
  "Klarere Rollen und Verantwortlichkeiten",
  "Bessere Entscheidungswege und weniger Abstimmungsaufwand",
  "Stärkere Zusammenarbeit in Teams und zwischen Bereichen",
  "Wirksamere Meetings und Arbeitsprozesse",
  "Fokussiertere Ziele mit messbarem Fortschritt",
  "Höhere Veränderungsfähigkeit in der Organisation",
  "Führungskräfte, die begleiten statt kontrollieren",
  "Strukturen, die zum Arbeitsalltag passen",
];

export default function BeratungPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Beratung", url: "/beratung" }])} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.07)_0%,transparent_70%)]" />
        <Container className="relative grid min-h-[560px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Beratung & Begleitung</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Beratung für</Reveal>
              <Reveal as="span" delay={100} className="block text-tuerkis">wirksame Veränderung.</Reveal>
            </h1>
            <Reveal delay={280}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Wir begleiten Organisationen, Teams und Führungskräfte dabei, Veränderung pragmatisch und menschlich zu gestalten — mit Beratung, die zum konkreten Kontext passt.
              </p>
            </Reveal>
            <Reveal delay={400} className="flex flex-wrap gap-3 pt-1">
              <Link href="/kontakt" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Erstgespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="#beratungsfelder" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
                Beratungsfelder ansehen
              </Link>
            </Reveal>
          </div>

          <Reveal delay={300} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 aspect-[4/5]">
              <Image
                src="/images/agile-organisationsentwicklung/Agile_Organisationsentwicklung_Claudia_Thonet.jpg"
                alt="Beratungssituation — Claudia Thonet Agile Consulting"
                fill priority sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TRUST */}
      <div className="border-y border-border bg-bg-section">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {[
              { value: "15+", label: "Jahre Erfahrung" },
              { value: "200+", label: "Projekte begleitet" },
              { value: "BDVT", label: "Zertifiziert" },
              { value: "DE-weit", label: "Einsatzbereit" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
                <p className="text-xl font-bold text-anthrazit md:text-2xl">{s.value}</p>
                <p className="text-xs leading-snug text-anthrazit-80">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* BEDARFSLAGEN */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Typische Situationen" title="Wann Beratung sinnvoll ist" lead="Diese Bedarfslagen kennen wir — und wir haben konkrete Antworten darauf." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BEDARFSLAGEN.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    <div className="h-1 w-8 rounded-full bg-tuerkis" />
                    <h3 className="font-semibold leading-snug text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* BERATUNGSFELDER */}
      <Reveal>
        <Section bg="section" id="beratungsfelder">
          <Container>
            <SectionHeading eyebrow="Beratungsfelder" title="Womit wir arbeiten" lead="Sieben Themenfelder — einzeln buchbar oder als Programm kombinierbar." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BERATUNGSFELDER.map((field, i) => (
                <Reveal key={field.href} delay={i * 60}>
                  <Link href={field.href} className="group flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-tuerkis/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis">
                    <div className="h-14 w-14">
                      <Image src={field.icon} alt="" width={56} height={56} className="h-full w-full object-contain" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <h3 className="font-bold leading-snug text-anthrazit">{field.title}</h3>
                      <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{field.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {field.tags.map((t) => (
                        <span key={t} className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs text-anthrazit-80">{t}</span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-tuerkis group-hover:gap-2.5 transition-all">
                      Mehr erfahren <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* VORGEHEN */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-start">
              <div className="lg:sticky lg:top-28 flex flex-col gap-4">
                <Eyebrow>Arbeitsweise</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Wie wir vorgehen
                </h2>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  Kein Standardkonzept aus der Schublade. Jedes Engagement beginnt mit echtem Verstehen — und endet mit messbarer Wirkung.
                </p>
                <Link href="/kontakt" className="mt-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-tuerkis hover:underline">
                  Gespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                {VORGEHEN.map((step, i) => (
                  <Reveal key={step.step} delay={i * 60}>
                    <div className="flex gap-5 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                      <span className="text-3xl font-bold text-tuerkis/25 leading-none shrink-0 w-10">{step.step}</span>
                      <div>
                        <p className="font-semibold text-anthrazit">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-anthrazit-80">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ERGEBNISSE */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-5">
                <Eyebrow>Ergebnisse</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">Was sich verändert</h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Wir messen unsere Arbeit an dem, was im Alltag tatsächlich besser funktioniert — nicht an Zertifikaten, Folien oder Abschlussberichten.
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {ERGEBNISSE.map((e) => (
                    <div key={e} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <Reveal delay={100}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-xl bg-white p-6">
                  <Image
                    src="/images/agile-organisationsentwicklung/Kulturwandelhaus_Claudia_Thonet_Svenja_Hofert.png"
                    alt="Kulturwandelhaus — Modell für nachhaltigen Wandel"
                    width={600} height={440}
                    className="w-full h-auto"
                  />
                  <p className="mt-3 text-center text-xs text-anthrazit-80">Das Kulturwandelhaus — unser Orientierungsmodell für nachhaltige Veränderung</p>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* INHOUSE */}
      <div className="bg-tuerkis py-14">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div>
              <Eyebrow className="text-white/70">Für Unternehmen</Eyebrow>
              <p className="mt-2 text-xl font-bold text-white">Alle Beratungsformate auch als Inhouse-Programm</p>
              <p className="mt-1 max-w-[52ch] text-sm text-white/75">
                Maßgeschneidert auf eure Ausgangslage, eure Kultur und euren Kontext — für Teams ab 6 Personen.
              </p>
            </div>
            <Link href="/kontakt" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Inhouse anfragen <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
