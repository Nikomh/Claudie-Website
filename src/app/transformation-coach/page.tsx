import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseInhouse } from "@/components/course/CourseInhouse";
import { CourseFinalCTA } from "@/components/course/CourseFinalCTA";
import { YoutubeEmbed } from "@/components/course/YoutubeEmbed";
import type { CourseInhouseData, CourseFinalCtaData, CourseTestimonialsData } from "@/content/courseTypes";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Transformation Coach — Claudia Thonet",
  description: "Transformation braucht Haltung und Struktur. Werde Transformation Coach — begleite Führungskräfte, Teams und Organisationen durch tiefgreifende Veränderungsprozesse.",
  alternates: { canonical: "/transformation-coach/" },
};

const MINDSET_POINTS = [
  { title: "Klare Präsenz", body: "Transformation Coaches sind präsent in der Situation — nicht getrieben von der Agenda, sondern aufmerksam für das, was gerade passiert." },
  { title: "Systemisches Verständnis", body: "Sie sehen Organisationen als lebendige Systeme, in denen alles miteinander verbunden ist — und handeln entsprechend." },
  { title: "Spannungen sichtbar machen", body: "Sie erkennen Spannungen, bevor sie zu Blockaden werden — und machen sie konstruktiv nutzbar." },
  { title: "Haltung statt Rezepte", body: "Nicht Lösungen vorgeben, sondern die richtige Haltung entwickeln — aus der heraus echte Veränderung entsteht." },
];

const WHAT_THEY_DO = [
  { number: "01", title: "Führungskräfte begleiten", body: "Einzelne Führungskräfte in komplexen Transformationsphasen — mit Klarheit, Struktur und persönlichem Wachstum." },
  { number: "02", title: "Teams entwickeln", body: "Teams durch Veränderungsprozesse führen — hin zu echter Selbstorganisation und geteilter Verantwortung." },
  { number: "03", title: "Organisationen transformieren", body: "Tiefgreifende Wandelprozesse in ganzen Organisationen begleiten — systemisch, nachhaltig, menschlich." },
  { number: "04", title: "Struktur als Verhaltenstreiber nutzen", body: "Sichtbar machen, wo Haltung und Struktur sich widersprechen — und als Systemarchitekt:in auf Zeit wirken." },
];

const PROGRAM_FEATURES = [
  { title: "Systemisches Denken", body: "Organisationen als lebendige Systeme verstehen — mit allem, was dazugehört." },
  { title: "Coaching-Kompetenz", body: "Individuen und Teams wirksam begleiten — mit erprobten Methoden und echter Haltung." },
  { title: "Kollegiale Reflexion", body: "In geschützten Peer-Groups echte Fälle teilen, Feedback erhalten und gemeinsam wachsen." },
  { title: "Direkt einsetzbare Tools", body: "Methoden und Modelle, die sofort in Workshops, Coachings und Teamprozessen eingesetzt werden können." },
  { title: "Persönliche Entwicklung", body: "Nicht nur Methoden — sondern eine Haltung entwickeln, die nachhaltig trägt." },
  { title: "Praxis als Lernort", body: "Lernen durch echte Fälle, echte Reflexion und echte Verbindung — kein Seminarraum-Wissen." },
];

const testimonials: CourseTestimonialsData = {
  eyebrow: "Stimmen",
  title: "Was Teilnehmende sagen",
  lead: "Aus Transformation-Coaching-Programmen und Begleitprojekten.",
  items: [
    { quote: "Durch die Ausbildung habe ich innere Sicherheit gewonnen — ich liefere nicht mehr sofort Antworten, sondern stelle die richtigen Fragen. Das verändert alles.", name: "Andrea Keil", role: "Head of People & Culture", rating: 5 },
    { quote: "Claudia versteht es außerordentlich gut, komplexe Transformationsthemen greifbar und direkt umsetzbar zu machen.", name: "Raphael Bauhofer", role: "Co-Lead Transformation & Kultur", company: "Schweizer Post", rating: 5 },
    { quote: "Die Ausbildung ist nicht einfach ein Kurs mit Theorie und Buzzwords — sie ist ein echter Entwicklungsraum, in dem echte Veränderung beginnt.", name: "Anna Glück", rating: 5 },
  ],
};

const inhouse: CourseInhouseData = {
  eyebrow: "Für Unternehmen",
  headline: "Transformation Coach als Inhouse-Programm",
  body: "Individuelle Programme, gezielt auf eure Herausforderungen, Ziele und Strukturen abgestimmt — zur Weiterentwicklung eurer Führungskräfte und zur Begleitung umfassender Transformationsprozesse.",
  ctaLabel: "Inhouse-Programm anfragen",
  ctaHref: "/beratung",
};

const finalCta: CourseFinalCtaData = {
  headline: "Transformation von innen gestalten?",
  subline: "Vereinbart ein kostenfreies 30-Min-Gespräch — wir zeigen euch, wie Transformation Coaching in eurer Organisation wirkt.",
  ctaPrimary: { label: "Gespräch vereinbaren", href: "/beratung" },
  ctaSecondary: { label: "Anfrage per E-Mail", href: "mailto:info@claudiathonet.de?subject=Anfrage%20Transformation%20Coach" },
};

export default function TransformationCoachPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.07)_0%,transparent_70%)]" />
        <Container className="relative grid min-h-[640px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Beratung & Begleitung</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Transformation</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">von innen</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">gestalten.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Unsere Arbeitswelt verändert sich schneller als je zuvor. Transformation Coaches begleiten Führungskräfte, Teams und Organisationen dabei, tiefgreifende Prozesse bewusst zu durchlaufen — mit Haltung, Struktur und echter Wirkung.
              </p>
            </Reveal>
            <Reveal delay={460} className="flex flex-wrap gap-3 pt-1">
              <Link href="/beratung" className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Gespräch vereinbaren <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="mailto:info@claudiathonet.de?subject=Anfrage%20Transformation%20Coach" className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden /> Anfrage per E-Mail
              </Link>
            </Reveal>
          </div>
          {/* Hero photo */}
          <Reveal delay={300} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 aspect-[4/5]">
              <Image
                src="/images/transformation-coach/Agile_Organisationsentwicklung_Claudia_Thonet.jpg"
                alt="Claudia Thonet — Agile Transformation"
                fill
                priority
                sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold text-white">Claudia Thonet</p>
                <p className="text-xs text-white/70">Transformation · Coaching · Begleitung</p>
              </div>
            </div>
            {/* Book cover badge */}
            <div aria-hidden className="pointer-events-none absolute -bottom-4 -right-5">
              <Image
                src="/images/transformation-coach/Claudia_Thonet_Kleine_Schritte_mit_grosser_Wirkung_Buchcover_klein.png"
                alt="Buchcover: Kleine Schritte mit grosser Wirkung"
                width={80}
                height={100}
                className="drop-shadow-xl"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Trust bar */}
      <div className="border-y border-border bg-bg-section">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {[
              { value: "15+", label: "Jahre Erfahrung" },
              { value: "200+", label: "Transformationsprojekte" },
              { value: "BDVT", label: "Zertifiziert" },
              { value: "3 Bücher", label: "Veröffentlicht" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 px-4 py-7 text-center md:py-9">
                <p className="text-xl font-bold text-anthrazit md:text-2xl">{item.value}</p>
                <p className="text-xs leading-snug text-anthrazit-80">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* What's different — with iterative model */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-5">
                <Eyebrow>Wenn alte Muster nicht mehr tragen</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Transformation ist kein Projekt — sie ist ein Weg
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Viele Organisationen starten mit ambitionierten Transformationsplänen. Irgendwann stockt es. Nicht weil der Plan schlecht war — sondern weil Veränderung nicht auf Papier entsteht, sondern in den Menschen.
                </p>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Transformation Coaches gestalten Veränderung nicht, indem sie Lösungen vorgeben. Sie bringen die richtige Haltung mit: klare Präsenz, systemisches Verständnis und die Fähigkeit, Spannungen sichtbar zu machen.
                </p>
                <blockquote className="mt-1 rounded-[var(--radius-md)] border-l-4 border-tuerkis bg-bg-section px-5 py-4 text-sm italic leading-relaxed text-anthrazit-80">
                  „Organisationen bekommen nicht die Kultur, die sie sich wünschen, sondern die Kultur, die ihre Strukturen erzwingen."
                </blockquote>
              </div>
              <Reveal delay={150}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg bg-white p-4">
                  <Image
                    src="/images/transformation-coach/iterative_transformation_claudia_thonet_svenja_hofert_1200px.png"
                    alt="Iterative Transformation — Claudia Thonet & Svenja Hofert"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Mindset points */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-start">
              <div className="flex flex-col gap-4 lg:sticky lg:top-28">
                <Eyebrow>Die Haltung</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Was Transformation Coaches auszeichnet
                </h2>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  Es geht nicht um Tools — es geht um die Haltung dahinter. Diese vier Eigenschaften unterscheiden echte Transformation Coaches.
                </p>
                <div className="mt-2 rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-md bg-white p-3">
                  <Image
                    src="/images/transformation-coach/claudia_thonet_PDCA_zyklus.jpg"
                    alt="PDCA-Zyklus — Claudia Thonet"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {MINDSET_POINTS.map((point, i) => (
                  <Reveal key={point.title} delay={i * 70}>
                    <div className="flex gap-4 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tuerkis" aria-hidden />
                      <div>
                        <p className="font-semibold text-anthrazit">{point.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-anthrazit-80">{point.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* What Transformation Coaches do */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Die Rolle"
              title="Was Transformation Coaches tun"
              lead="Transformation Coaches sind Gestalter:innen von Veränderung — Systemarchitekt:innen auf Zeit."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {WHAT_THEY_DO.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                    <span className="text-4xl font-bold text-tuerkis/20">{item.number}</span>
                    <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* YouTube Video */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <Eyebrow>Schau rein</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Kleine Schritte mit grosser Wirkung
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Claudia Thonet über den iterativen Ansatz in der Transformation — warum kleine, konsequente Schritte mehr bewirken als grosse Transformationspläne.
                </p>
                <div className="flex items-start gap-4 mt-2">
                  <Image
                    src="/images/transformation-coach/Claudia_Thonet_Kleine_Schritte_mit_grosser_Wirkung_Buchcover_klein.png"
                    alt="Buch: Kleine Schritte mit grosser Wirkung — Claudia Thonet"
                    width={80}
                    height={110}
                    className="shrink-0 drop-shadow-md"
                  />
                  <div>
                    <p className="text-sm font-semibold text-anthrazit">Kleine Schritte mit grosser Wirkung</p>
                    <p className="mt-0.5 text-xs text-anthrazit-80">Das Buch von Claudia Thonet — agile Transformation im Alltag.</p>
                    <Link href="/veroeffentlichungen" className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-tuerkis hover:underline">
                      Alle Veröffentlichungen <ArrowRight className="h-3 w-3" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
              <YoutubeEmbed videoId="5YzdTkYeLgQ" title="Kleine Schritte mit grosser Wirkung — Claudia Thonet" />
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Program features */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Das Programm"
              title="Praxis, Reflexion und Verbindung"
              lead="Eine intensive Lernreise — systemisches Denken, Coaching-Kompetenz und Gruppen-Moderation verbunden."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PROGRAM_FEATURES.map((feat, i) => (
                <Reveal key={feat.title} delay={i * 60}>
                  <div className="flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                    <div className="h-1 w-10 rounded-full bg-tuerkis" />
                    <h3 className="font-semibold text-anthrazit">{feat.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{feat.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Kulturwandelhaus */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <Eyebrow>Unser Modell</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Das Kulturwandelhaus als Orientierungsrahmen
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Entwickelt von Claudia Thonet und Svenja Hofert — ein systemisches Modell für nachhaltige Kulturveränderung. Es zeigt, wie Haltung, Werte und Praktiken zusammenspielen, um echten Wandel zu ermöglichen.
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {["Haltung als Fundament — nicht als Add-on", "Werte sichtbar machen und verankern", "Strukturen als Verhaltenstreiber nutzen", "Kulturwandel messen und begleiten"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Reveal delay={150}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-xl bg-white p-4">
                  <Image
                    src="/images/transformation-coach/Kulturwandelhaus_Claudia_Thonet_Svenja_Hofert.png"
                    alt="Kulturwandelhaus — Claudia Thonet & Svenja Hofert"
                    width={500}
                    height={420}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Testimonials */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Stimmen" title="Was Teilnehmende sagen" lead="Aus Transformation-Coaching-Programmen und Begleitprojekten." />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {testimonials.items.map((t, i) => (
                <Reveal key={t.name} delay={i * 70}>
                  <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                    <Quote className="-ml-1 h-6 w-6 text-anthrazit/10" aria-hidden />
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit">{`„${t.quote}"`}</p>
                    <div className="border-t border-border pt-3">
                      <p className="text-sm font-semibold text-anthrazit">{t.name}</p>
                      {t.role && <p className="text-xs text-anthrazit-80">{t.role}{t.company ? `, ${t.company}` : ""}</p>}
                      <div className="mt-1.5 flex gap-0.5">
                        {Array.from({ length: 5 }, (_, j) => (
                          <Star key={j} className={cn("h-3 w-3", j < t.rating ? "fill-orange-rot text-orange-rot" : "text-border")} aria-hidden />
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      <CourseInhouse inhouse={inhouse} />
      <CourseFinalCTA finalCta={finalCta} />
    </>
  );
}
