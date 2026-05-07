import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { BusinessAgilityScan } from "@/components/scan/BusinessAgilityScan";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Menschenzentrierte Transformation & Facilitation — Säule 2 · Claudia Thonet",
  description:
    "Facilitatoren, Coaches und Change Agents, die bessere Gespräche, Workshops und Transformationsinterventionen gestalten — für Adoption, die bleibt.",
  robots: { index: false, follow: false },
};

const PROBLEMS = [
  {
    title: "Workshops erzeugen Aufwand, keine Ergebnisse",
    body: "Meetings finden statt, aber Entscheidungen werden wo anders getroffen. Retrospektiven werden abgehakt. Workshops enden ohne klares Next Step.",
  },
  {
    title: "Change Agents sind nicht für die KI-Ära gerüstet",
    body: "Agile Coaches und Scrum Master kennen Scrum — aber nicht, wie KI Arbeitsweisen verändert und welche neuen Coaching-Kompetenzen das erfordert.",
  },
  {
    title: "Veränderung scheitert an fehlender Adoption",
    body: "Prozesse werden eingeführt, aber nicht gelebt. Tools werden deployed, aber nicht genutzt. Der menschliche Faktor wird unterschätzt.",
  },
  {
    title: "Psychologische Sicherheit fehlt",
    body: "Teams experimentieren nicht, weil Fehler bestraft werden. Offenes Feedback ist eine Theorie. Selbstorganisation funktioniert nur auf dem Papier.",
  },
];

const OFFERS = [
  {
    href: "/beratung/neue-startseite/transformation-facilitation/facilitation-masterclass",
    title: "Transformation Facilitation Masterclass",
    description:
      "2 intensive Tage — Workshops, Retrospektiven und Transformationsinterventionen wirkungsvoller gestalten mit KI als Verstärker.",
    tags: ["2 Tage", "Masterclass", "Facilitation & KI"],
  },
  {
    href: "/beratung/neue-startseite/transformation-facilitation/agile-coach-certificate",
    title: "Agile Coach Certificate",
    description:
      "5–6 Monate — die umfassende Ausbildung für Coaches, die Organisationen durch KI-Ära Transformation begleiten wollen.",
    tags: ["5–6 Monate", "Zertifizierung", "BDVT-zertifiziert"],
  },
  {
    href: "/beratung/neue-startseite/transformation-facilitation/agile-facilitator-certificate",
    title: "Agile Facilitator Certificate",
    description:
      "3–4 Monate — professionelle Facilitation-Ausbildung für alle, die Gruppen und Prozesse wirkungsvoller moderieren wollen.",
    tags: ["3–4 Monate", "Zertifizierung", "BDVT-zertifiziert"],
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

export default function TransformationFacilitationPage() {
  return (
    <>
      {/* BACK LINK */}
      <div className="border-b border-border bg-white">
        <Container>
          <div className="py-3">
            <Link
              href="/beratung/neue-startseite"
              className="inline-flex items-center gap-1.5 text-sm text-anthrazit-80 transition-colors hover:text-anthrazit"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Zurück zur Übersicht
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
        <Container className="relative grid min-h-[560px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow className="text-tuerkis">Säule 2 · KI-Ära Business Agility</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
                Menschenzentrierte Transformation &amp; Facilitation
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Facilitatoren, Coaches und Change Agents, die bessere Gespräche, Workshops und Transformationsinterventionen gestalten — für Adoption, die bleibt.
              </p>
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap gap-3 pt-1">
              <BusinessAgilityScan label="Business Agility Scan starten" variant="outline" />
              <Link
                href="/beratung/neue-startseite"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Alle Säulen
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative hidden lg:flex lg:items-center lg:justify-center">
            <Image
              src="/images/icons/agile-teams-agile-teamentwicklung-claudia-thonet-coaching-training-icon-transparent.png"
              alt="Menschenzentrierte Transformation & Facilitation"
              width={340}
              height={340}
              className="h-auto w-full max-w-[320px] object-contain drop-shadow-lg"
            />
          </Reveal>
        </Container>
      </section>

      {/* WANN DIESE SÄULE GREIFT */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Wann diese Säule greift"
            title="Vier Signale, die handeln fordern"
            lead="Wenn Facilitation und Adoption zur Bremse statt zum Hebel werden — dann ist dieser Moment der richtige."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <div className="h-1 w-8 rounded-full bg-tuerkis" />
                  <h3 className="font-semibold leading-snug text-anthrazit">{item.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* KERNANGEBOTE */}
      <Section bg="section">
        <Container>
          <SectionHeading
            eyebrow="Kernangebote"
            title="Drei Programme — eine Richtung"
            lead="Von der 2-tägigen Masterclass bis zur 6-monatigen Zertifizierung: wählen Sie den Einstieg, der zu Ihrer Situation passt."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {OFFERS.map((offer, i) => (
              <Reveal key={offer.title} delay={i * 80}>
                <Link
                  href={offer.href}
                  className="group flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-tuerkis/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis"
                >
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-lg font-bold leading-snug text-anthrazit">{offer.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{offer.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {offer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-bg-section px-2.5 py-1 text-xs font-semibold text-anthrazit-80"
                      >
                        {tag}
                      </span>
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

      {/* FÜR WEN */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">
            <div className="flex flex-col gap-5">
              <Eyebrow>Für wen</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                Für Change Agents, die Transformation wirklich gestalten.
              </h2>
              <p className="text-sm leading-relaxed text-anthrazit-80">
                Diese Säule richtet sich an Menschen, die Gruppen, Prozesse und Veränderungsvorhaben aktiv begleiten —
                und die verstehen, dass gute Facilitation der entscheidende Hebel für Adoption ist.
              </p>
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

      {/* FINAL CTA */}
      <div className="bg-anthrazit py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow className="text-tuerkis">Nächster Schritt</Eyebrow>
            <h2 className="max-w-[28ch] text-3xl font-bold leading-tight text-white md:text-4xl">
              Bereit für bessere Transformation?
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/65 md:text-base">
              30 Minuten. Wir hören zu, fragen nach und zeigen, welches Programm in Ihrer konkreten Situation
              sinnvoll ist — ohne Verpflichtung.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Erstgespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/beratung/neue-startseite"
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Alle Säulen
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
