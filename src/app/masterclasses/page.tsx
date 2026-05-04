import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Masterclasses — Kompakte Lernformate für agile Führung und Zusammenarbeit · Claudia Thonet",
  description: "Masterclasses für Führungskräfte, Coaches und Teams: AI Leadership Sprint, Veränderung gestalten, Hybrides Projektmanagement, Agile Führung, OKR in der Praxis, Moderation & Facilitation.",
  alternates: { canonical: "/masterclasses/" },
  openGraph: { type: "website", locale: "de_DE", siteName: "Claudia Thonet", title: "Masterclasses — Claudia Thonet", description: "Kompakte, praxisnahe Lernformate für moderne Zusammenarbeit." },
};

const MASTERCLASSES = [
  {
    href: "/ausbildungen/ai-leadership-sprint",
    title: "AI Leadership Sprint",
    subtitle: "KI-Entscheidungskompetenz für Führungskräfte",
    description: "9 Tage Online-Sprint: Entscheidungs-Souveränität unter KI-Bedingungen entwickeln — plus Compliance-Bestätigung im Sinne des EU AI Act. 2 halbe Tage Live, 1 Übungswoche, 90 Tage Begleitung.",
    duration: "9 Tage",
    format: "Online",
    audience: "Führungskräfte, Entscheider:innen",
    icon: "/images/illustrations/CT_SE02_steps.png",
    photo: "/images/photos/Master_Class_Claudia_Thonet.jpg",
    tag: "KI & Führung",
    tagColor: "bg-anthrazit text-white",
  },
  {
    href: "/masterclasses/veraenderung-gestalten",
    title: "Veränderung gestalten",
    subtitle: "Change & Transformation",
    description: "In 2 intensiven Tagen lernen Sie, Veränderungsprozesse professionell zu begleiten — Widerstände verstehen, Akzeptanz aufbauen und Wandel nachhaltig verankern.",
    duration: "2 Tage",
    format: "Präsenz",
    audience: "Führungskräfte, Coaches, HR",
    icon: "/images/veraenderung-gestalten/Ausbildung_Veraenderung_gestalten_Claudia_Thonet.png",
    photo: "/images/veraenderung-gestalten/Veraenderung_gestalten_Claudia_Thonet.jpg",
    tag: "Change",
    tagColor: "bg-tuerkis/10 text-tuerkis",
  },
  {
    href: "/masterclasses/hybrides-projektmanagement",
    title: "Hybrides Projektmanagement",
    subtitle: "Klassisch + Agil verbinden",
    description: "Klassische und agile Projektsteuerung sinnvoll kombinieren — mit klaren Rollenmodellen, Entscheidungslogiken und Steuerungsroutinen für komplexe Projekte.",
    duration: "2 Tage",
    format: "Präsenz oder Online",
    audience: "Projektmanager:innen, Teams",
    icon: "/images/illustrations/CT_SE02_structured.png",
    photo: "/images/photos/Weiterbildung_Hybrides_Projektmanagement_Claudia_Thonet.jpg",
    tag: "Projektmanagement",
    tagColor: "bg-anthrazit/10 text-anthrazit",
  },
  {
    href: "/masterclasses/agile-fuehrung",
    title: "Agile Führung",
    subtitle: "Rahmen setzen, befähigen, loslassen",
    description: "Führung im agilen Kontext stärken — Orientierung geben, Selbstorganisation ermöglichen und Verantwortung sinnvoll verteilen.",
    duration: "2–3 Tage",
    format: "Präsenz",
    audience: "Führungskräfte, Team Leads",
    icon: "/images/agile-fuehrung/ausbildung_consulting_agile_fuehrung_claudia_thonet_agile_consulting_icon_transparent_schrift_02_2023.png",
    photo: "/images/agile-fuehrung/claudia-thonet-beraet-zum-thema-agile-fuehrung.jpg",
    tag: "Führung",
    tagColor: "bg-orange-rot/10 text-orange-rot",
  },
  {
    href: "/masterclasses/okr-in-der-praxis",
    title: "OKR in der Praxis",
    subtitle: "Ziele fokussieren, Strategie umsetzen",
    description: "OKRs einführen, etablieren und lebendig halten — von der ersten Formulierung bis zum funktionierenden OKR-Rhythmus in der Organisation.",
    duration: "1–2 Tage",
    format: "Präsenz oder Online",
    audience: "Führungskräfte, OKR-Champions",
    icon: "/images/illustrations/CT_SE02_module.png",
    photo: "/images/okr-coach/ausbildung-okr-coach-jonny-kohlhaas.png",
    tag: "OKR",
    tagColor: "bg-tuerkis/10 text-tuerkis",
  },
  {
    href: "/masterclasses/moderation-facilitation",
    title: "Moderation & Facilitation",
    subtitle: "Workshops wirksam gestalten",
    description: "Workshops, Retrospektiven und Entscheidungsmeetings professionell moderieren — mit konkreten Formaten, Methoden und Moderationstechniken für den sofortigen Einsatz.",
    duration: "2 Tage",
    format: "Präsenz",
    audience: "Moderator:innen, Agile Coaches, HR",
    icon: "/images/agiler-facilitator/ausbildung_agiler_facilitator_claudia_thonet_agile_consulting_icon_transparent__07_2023.png",
    photo: "/images/agiler-facilitator/claudia-thonet-im-trainng-zu-agilen-werten-11-23.jpg",
    tag: "Facilitation",
    tagColor: "bg-anthrazit/10 text-anthrazit",
  },
];

const UNTERSCHIEDE = [
  { title: "Hoher Praxisanteil", body: "Keine Theorievorlesung — Methoden werden direkt erprobt, reflektiert und für den eigenen Alltag angepasst." },
  { title: "Kleine Gruppen", body: "Maximal 14 Personen. Wer sich kennt, lernt tiefer. Wer Fragen stellt, bekommt echte Antworten." },
  { title: "Echte Fälle", body: "Teilnehmende bringen ihre eigenen Situationen mit. Die Masterclass wird zum Arbeitsraum für konkrete Herausforderungen." },
  { title: "Sofort einsetzbar", body: "Am Ende jeder Masterclass gibt es einen persönlichen Aktionsplan — mit konkreten nächsten Schritten für den nächsten Arbeitstag." },
];

export default function MasterclassesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]" />
        <Container className="relative py-20 md:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
              <Eyebrow className="text-tuerkis-50">Kompakte Lernformate</Eyebrow>
            </div>
          </Reveal>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
            <Reveal as="span" className="block text-white">Masterclasses für agile</Reveal>
            <Reveal as="span" delay={100} className="block text-tuerkis">Führung und Zusammenarbeit.</Reveal>
          </h1>
          <Reveal delay={280}>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/65 md:text-lg">
              1 bis 3 Tage. Praxisnah. Kleine Gruppen. Direkt einsetzbar. Masterclasses sind keine Seminare — sie sind Arbeitsräume für konkrete Herausforderungen.
            </p>
          </Reveal>
          <Reveal delay={380} className="mt-8 flex flex-wrap gap-3">
            <Link href="/kontakt" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
              Masterclass anfragen <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="#masterclasses" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
              Alle Masterclasses ansehen
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* WAS MASTERCLASSES AUSMACHT */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Was Masterclasses besonders macht" title="Lernen, das im Alltag bleibt" lead="Masterclasses sind keine Theorie-Blöcke. Sie verbinden fachliche Tiefe mit sofortiger Anwendbarkeit." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {UNTERSCHIEDE.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                    <div className="h-1 w-8 rounded-full bg-tuerkis" />
                    <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* MASTERCLASS KARTEN */}
      <Reveal>
        <Section bg="section" id="masterclasses">
          <Container>
            <SectionHeading eyebrow="Alle Masterclasses" title="Das aktuelle Programm" lead="Fünf Themenfelder — als offene Masterclass oder maßgeschneidertes Inhouse-Format." />
            <div className="mt-10 flex flex-col gap-6">
              {MASTERCLASSES.map((mc, i) => (
                <Reveal key={mc.href} delay={i * 60}>
                  <Link href={mc.href} className="group grid overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-sm transition-all hover:shadow-md md:grid-cols-[280px_1fr]">
                    <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto">
                      <Image src={mc.photo} alt={mc.title} fill sizes="(max-width: 768px) 100vw, 280px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent md:bg-gradient-to-r" />
                      <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${mc.tagColor}`}>{mc.tag}</span>
                    </div>
                    <div className="flex flex-col gap-4 p-7">
                      <div className="flex items-start gap-4">
                        <Image src={mc.icon} alt="" width={44} height={44} className="shrink-0 object-contain mt-0.5" />
                        <div>
                          <h3 className="text-lg font-bold text-anthrazit">{mc.title}</h3>
                          <p className="text-sm text-tuerkis">{mc.subtitle}</p>
                        </div>
                      </div>
                      <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{mc.description}</p>
                      <div className="flex flex-wrap gap-4 border-t border-border pt-4">
                        <span className="flex items-center gap-1.5 text-xs text-anthrazit-80"><Clock className="h-3.5 w-3.5 text-tuerkis" aria-hidden />{mc.duration}</span>
                        <span className="flex items-center gap-1.5 text-xs text-anthrazit-80"><Users className="h-3.5 w-3.5 text-tuerkis" aria-hidden />{mc.audience}</span>
                        <span className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-tuerkis group-hover:gap-2.5 transition-all">
                          Details <ArrowRight className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* INHOUSE */}
      <div className="bg-tuerkis py-14">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div>
              <Eyebrow className="text-white/70">Inhouse-Format</Eyebrow>
              <p className="mt-2 text-xl font-bold text-white">Masterclasses auch für Ihr Unternehmen</p>
              <p className="mt-1 max-w-[52ch] text-sm text-white/75">Alle Masterclasses können als Inhouse-Format gebucht werden — angepasst auf Ihre Ausgangslage, Ihr Team und Ihre Themen.</p>
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
