import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Target, Users, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "KI-Ära Business Agility — Neue Positionierung · Claudia Thonet",
  description: "Wir helfen Organisationen, Business Agility für die KI-Ära aufzubauen: Führungskräfte, Teams und Change Agents, die sich schneller anpassen und Transformation in messbare Ergebnisse verwandeln.",
  alternates: { canonical: "/beratung/neue-startseite/" },
  robots: { index: false, follow: false },
};

const PILLARS = [
  {
    icon: <Zap className="h-6 w-6 text-tuerkis" aria-hidden />,
    eyebrow: "Säule 1",
    title: "Adaptive Führung & Organisation",
    description:
      "Führungskräfte, die Teams durch KI-Adoption, hybride Arbeit und kontinuierliche Transformation führen — mit Klarheit, psychologischer Sicherheit und messbaren Ergebnissen.",
    offers: [
      "KI-Ära Leadership Masterclass",
      "Designing Change In The AI Era",
      "Agile Leadership Certificate",
    ],
    href: "/beratung/fuehrungskraefteentwicklung",
    image: "/images/agile-fuehrung/ausbildung_consulting_agile_fuehrung_claudia_thonet_agile_consulting_icon_transparent_schrift_02_2023.png",
  },
  {
    icon: <Users className="h-6 w-6 text-tuerkis" aria-hidden />,
    eyebrow: "Säule 2",
    title: "Menschenzentrierte Transformation & Facilitation",
    description:
      "Facilitatoren, Coaches und Change Agents, die bessere Gespräche, Workshops und Interventionen gestalten — für Adoption, die bleibt.",
    offers: [
      "Transformation Facilitation Masterclass",
      "Agile Coach Certificate",
      "Agile Facilitator Certificate",
    ],
    href: "/beratung/agile-transformation",
    image: "/images/icons/agile-teams-agile-teamentwicklung-claudia-thonet-coaching-training-icon-transparent.png",
  },
  {
    icon: <Target className="h-6 w-6 text-tuerkis" aria-hidden />,
    eyebrow: "Säule 3",
    title: "Outcome-orientierte Lieferung & Business Agility",
    description:
      "Teams und Organisationen, die agile Arbeitsweisen, OKRs und KI-unterstützte Workflows mit messbarem Geschäftswert verbinden.",
    offers: [
      "Business Agility Masterclass",
      "Hybrid Delivery In The AI Era",
      "OKR & Outcome Coach Certificate",
    ],
    href: "/beratung/okr-einfuehrung",
    image: "/images/agile-organisationsentwicklung/Consulting_Inhouse_Agile_Organisationsentwicklung_Claudia_Thonet.png",
  },
];

const SHIFTS = [
  {
    title: "KI verändert Arbeit, Rollen und Entscheidungen",
    body: "Organisationen brauchen keine Framework-Theorie — sie brauchen Führungskräfte und Teams, die mit Unsicherheit umgehen und echte Anpassungsfähigkeit entwickeln.",
  },
  {
    title: "Transformation muss messbar sein",
    body: "Buyer stehen unter ROI-Druck. Jede Intervention braucht klare Outcome-Hypothesen, Lernmetriken und eine ehrliche Antwort auf die Frage: Was hat sich wirklich verändert?",
  },
  {
    title: "Human-centered bleibt der Kern — aber mit Businessbezug",
    body: "Psychologische Sicherheit, gute Facilitation und echtes Coaching sind keine Soft Skills. Sie sind der Hebel, der KI-Adoption, Eigenverantwortung und Veränderungsgeschwindigkeit erst möglich macht.",
  },
];

const FUER_WEN = [
  "CEOs und Geschäftsführung, die Transformation strategisch steuern wollen",
  "HR-Leiter:innen und Personalentwickler:innen unter Ergebnisdruck",
  "Transformationsverantwortliche und Change Manager",
  "Agile Coaches und interne Berater, die ihr Skill-Set modernisieren",
  "Team- und Abteilungsleiter:innen im hybriden Wandel",
  "Scrum Master und Facilitatoren, die mehr bewirken wollen",
];

const TESTIMONIALS = [
  {
    quote: "Claudia Thonet bringt nicht nur fundiertes Fachwissen mit, sondern überzeugt auch durch ihre empathische, klare und praxisnahe Art.",
    name: "Manuel Göhring",
    rating: 5,
  },
  {
    quote: "Dank der exzellenten Unterstützung haben wir wertvolle Strukturen und praxisorientierte Modelle erhalten.",
    name: "Sabine Valentin",
    rating: 5,
  },
  {
    quote: "Die Mischung aus Praxisnähe, Tiefgang und Haltung hat mich extrem weitergebracht.",
    name: "Tjorven Graßnick",
    rating: 5,
  },
];

export default function NeueStartseitePage() {
  return (
    <>
      {/* CONCEPT BANNER */}
      <div className="sticky top-[72px] z-40 flex items-center justify-center gap-3 bg-orange-rot/90 px-4 py-2 text-center text-sm font-semibold text-white backdrop-blur-sm">
        <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
        <span>Konzeptseite — Neue Positionierung · KI-Ära Business Agility</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.22)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.08)_0%,transparent_70%)]"
        />
        <Container className="relative grid min-h-[600px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">KI-Ära Business Agility</Eyebrow>
              </div>
            </Reveal>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Transformation,</Reveal>
              <Reveal as="span" delay={100} className="block text-tuerkis">die bleibt.</Reveal>
            </h1>

            <Reveal delay={220}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Wir verbinden Organisationsentwicklung, agile Praxis und KI-Ära-Transformation — damit Unternehmen schneller, klarer und menschlicher werden.
              </p>
            </Reveal>

            <Reveal delay={340} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Business Agility Scan anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="#drei-saeulen"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Das Portfolio entdecken
              </Link>
            </Reveal>

            <Reveal delay={460}>
              <p className="text-sm text-white/50">
                <span className="font-semibold text-white/80">4,9 / 5 Sterne</span> · 120+ Bewertungen auf Google · 15+ Jahre Erfahrung
              </p>
            </Reveal>
          </div>

          <Reveal delay={280} className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20">
              <Image
                src="/images/photos/_LFP4451.jpg"
                alt="Claudia Thonet — KI-Ära Transformation & Business Agility"
                fill priority sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
            </div>
            <div aria-hidden className="pointer-events-none absolute -bottom-4 -left-6">
              <Image src="/images/illustrations/CT_SE02_Leader.png" alt="" width={110} height={130} className="drop-shadow-lg" />
            </div>
            <div aria-hidden className="pointer-events-none absolute -top-4 -right-6">
              <Image src="/images/illustrations/CT_SE02_25years_v2.png" alt="" width={96} height={72} className="drop-shadow-md" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-border bg-bg-section">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {[
              { value: "15+", label: "Jahre Transformationserfahrung" },
              { value: "200+", label: "Projekte & Programme" },
              { value: "BDVT", label: "Zertifiziert & akkreditiert" },
              { value: "DACH", label: "Einsatzbereit" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
                <p className="text-xl font-bold text-anthrazit md:text-2xl">{s.value}</p>
                <p className="text-xs leading-snug text-anthrazit-80">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* SCAN — EXECUTIVE ENTRY POINT */}
      <div className="bg-tuerkis py-14">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/20 px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden />
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">Strategischer Einstieg</span>
              </div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">Business Agility Scan</h2>
              <p className="max-w-[52ch] text-sm leading-relaxed text-white/80 md:text-base">
                In 2–4 Wochen: Klares Bild des Agilitätsgrades, eine KI-Ära-Transformationskarte, die wichtigsten Reibungspunkte und ein priorisertes Interventions-Portfolio. Der strategische Einstieg für Entscheider:innen.
              </p>
              <ul className="mt-1 flex flex-col gap-1.5">
                {[
                  "Business-Agility-Reifegrad-Snapshot",
                  "KI-Ära-Transformationschancen-Karte",
                  "Empfohlene Lern- und Transformations-Roadmap",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-white" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Scan anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* WARUM JETZT */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Warum jetzt"
              title="Drei Verschiebungen, die alles verändern"
              lead="Agilität war immer sinnvoll. In der KI-Ära ist sie überlebenswichtig — aber sie muss anders aussehen als bisher."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {SHIFTS.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
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

      {/* DREI SÄULEN */}
      <Reveal>
        <Section bg="section" id="drei-saeulen">
          <Container>
            <SectionHeading
              eyebrow="Portfolio"
              title="Drei Säulen — eine Richtung"
              lead="Kein Methoden-Bauchladen. Drei klar abgegrenzte Felder, die sich zu einer transformativen Gesamtstrategie verbinden."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 80}>
                  <Link
                    href={pillar.href}
                    className="group flex h-full flex-col gap-5 rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-tuerkis/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-tuerkis/10">
                        {pillar.icon}
                      </div>
                      <div className="h-12 w-12 shrink-0">
                        <Image src={pillar.image} alt="" width={48} height={48} className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-2">
                      <Eyebrow className="text-tuerkis">{pillar.eyebrow}</Eyebrow>
                      <h3 className="text-lg font-bold leading-snug text-anthrazit">{pillar.title}</h3>
                      <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{pillar.description}</p>
                    </div>

                    <div className="flex flex-col gap-1.5 rounded-[var(--radius-md)] bg-bg-section p-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-anthrazit-80">Kernangebote</p>
                      {pillar.offers.map((offer) => (
                        <div key={offer} className="flex items-center gap-2 text-xs text-anthrazit-80">
                          <div className="h-1 w-1 shrink-0 rounded-full bg-tuerkis" />
                          {offer}
                        </div>
                      ))}
                    </div>

                    <span className="flex items-center gap-1.5 text-sm font-semibold text-tuerkis transition-all group-hover:gap-2.5">
                      Mehr erfahren <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* FÜR WEN */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <Eyebrow>Für wen</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Gemeinsam mit denen, die Veränderung verantworten.
                </h2>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  Wir arbeiten mit Entscheider:innen, die wissen, dass Transformation nur gelingt, wenn sie menschlich, strategisch und messbar ist — und die keine Zeit für Framework-Theater haben.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-tuerkis hover:underline"
                >
                  Erstgespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {FUER_WEN.map((item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      <p className="text-sm leading-snug text-anthrazit-80">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* CLAUDIA — PERSÖNLICHES VERTRAUEN */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
              <Reveal delay={100} className="relative hidden overflow-hidden rounded-[var(--radius-lg)] shadow-xl lg:block aspect-[4/5]">
                <Image
                  src="/images/agile-organisationsentwicklung/Agile_Organisationsentwicklung_Claudia_Thonet.jpg"
                  alt="Claudia Thonet — Organisationsentwicklung und KI-Ära Transformation"
                  fill sizes="35vw"
                  className="object-cover object-center"
                />
              </Reveal>

              <div className="flex flex-col gap-5">
                <Eyebrow>Warum Claudia Thonet</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Boutique-Partnerin für Transformation, die trägt.
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Seit über 15 Jahren begleite ich Organisationen dabei, Veränderung nicht nur einzuführen, sondern im Alltag zu verankern. Mein Ansatz: systemisch, praxisnah, ehrlich über das, was wirklich funktioniert.
                </p>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  In der KI-Ära braucht es keine weiteren Frameworks — es braucht die Fähigkeit, mit Unsicherheit zu führen, schneller zu lernen und Transformation so zu gestalten, dass Menschen dabei wachsen statt erschöpfen.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-anthrazit shadow-sm">BDVT-zertifiziert</span>
                  <span className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-anthrazit shadow-sm">ECA-akkreditiert</span>
                  <span className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-anthrazit shadow-sm">4 Bücher veröffentlicht</span>
                  <span className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-anthrazit shadow-sm">200+ Projekte</span>
                </div>
                <Link href="/ueber-uns" className="mt-1 inline-flex items-center gap-2 self-start text-sm font-semibold text-tuerkis hover:underline">
                  Mehr über uns <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* TESTIMONIALS */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Stimmen" title="Was Menschen sagen" lead="" />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <div className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <span key={j} className="text-tuerkis text-sm" aria-hidden>★</span>
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit-80 italic">&ldquo;{t.quote}&rdquo;</p>
                    <p className="text-xs font-semibold text-anthrazit">{t.name}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ILLUSTRATION + KUNDEN */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="flex flex-col items-center gap-8">
              <SectionHeading eyebrow="Referenzen" title="Vertrauen von Unternehmen im DACH-Raum" lead="" />
              <div className="flex flex-wrap justify-center gap-3">
                {["Tesvolt", "Telekom", "Flughafen BER", "H&M", "Sparda-Bank", "Danone", "Hoffmann Group", "MSD"].map((client) => (
                  <span key={client} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-anthrazit-80 shadow-sm">
                    {client}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-6 opacity-60">
                <Image src="/images/illustrations/CT_SE02_steps.png" alt="" width={80} height={80} className="h-16 w-auto object-contain" />
                <Image src="/images/illustrations/CT_SE02_module.png" alt="" width={80} height={80} className="h-16 w-auto object-contain" />
                <Image src="/images/illustrations/CT_SE02_structured.png" alt="" width={80} height={80} className="h-16 w-auto object-contain" />
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ABSCHLUSS CTA */}
      <div className="bg-anthrazit py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
              <Eyebrow className="text-tuerkis-50">Nächster Schritt</Eyebrow>
            </div>
            <h2 className="max-w-[28ch] text-3xl font-bold leading-tight text-white md:text-4xl">
              Bereit für KI-Ära Business Agility?
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/65 md:text-base">
              30 Minuten. Wir hören zu, fragen nach und zeigen, was in Ihrer konkreten Situation sinnvoll ist — ohne Verpflichtung und ohne Buzzwords.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Erstgespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Alle Beratungsfelder
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
