import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export type MasterclassData = {
  tag: string;
  title: string;
  subline: string;
  duration: string;
  format: string;
  audience: string;
  heroImage: string;
  heroImageAlt: string;
  nutzen: string;
  zielgruppe: string[];
  inhalte: { title: string; body: string }[];
  ergebnisse: string[];
  lernformat: string;
  inhouse: string;
  faq: { question: string; answer: string }[];
};

export function MasterclassTemplate({ data }: { data: MasterclassData }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Masterclasses", href: "/masterclasses" }, { label: data.title }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]" />
        <Container className="relative grid min-h-[500px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Masterclass · {data.tag}</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block">{data.title}</Reveal>
            </h1>
            <Reveal delay={200}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">{data.subline}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock className="h-4 w-4 text-tuerkis" aria-hidden />{data.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Users className="h-4 w-4 text-tuerkis" aria-hidden />{data.audience}
                </div>
              </div>
            </Reveal>
            <Reveal delay={400} className="flex flex-wrap gap-3 pt-1">
              <Link href="/kontakt" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Masterclass anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/masterclasses" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
                Alle Masterclasses
              </Link>
            </Reveal>
          </div>
          <Reveal delay={250} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 aspect-[4/5]">
              <Image src={data.heroImage} alt={data.heroImageAlt} fill priority sizes="40vw" className="object-cover object-center" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* NUTZEN + ZIELGRUPPE */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <Eyebrow>Was Sie mitnehmen</Eyebrow>
                <h2 className="text-2xl font-bold text-anthrazit">Nutzen</h2>
                <p className="text-base leading-relaxed text-anthrazit-80">{data.nutzen}</p>
              </div>
              <div className="flex flex-col gap-4">
                <Eyebrow>Für wen</Eyebrow>
                <h2 className="text-2xl font-bold text-anthrazit">Geeignet für</h2>
                <ul className="flex flex-col gap-2.5">
                  {data.zielgruppe.map((z) => (
                    <li key={z} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* INHALTE */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Inhalte" title="Was bearbeitet wird" lead="Alle Themen werden an konkreten Fällen aus dem Arbeitsalltag der Teilnehmenden erarbeitet." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.inhalte.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-tuerkis/10 text-xs font-bold text-tuerkis">{i + 1}</div>
                    <h3 className="font-semibold leading-snug text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ERGEBNISSE + LERNFORMAT */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <Eyebrow>Ergebnisse</Eyebrow>
                <h2 className="text-2xl font-bold text-anthrazit">Was danach anders ist</h2>
                <div className="flex flex-col gap-2.5">
                  {data.ergebnisse.map((e) => (
                    <div key={e} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Eyebrow>Lernformat</Eyebrow>
                <h2 className="text-2xl font-bold text-anthrazit">Wie gelernt wird</h2>
                <p className="text-sm leading-relaxed text-anthrazit-80">{data.lernformat}</p>
                <div className="mt-2 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-anthrazit">Inhouse-Format</p>
                  <p className="mt-1 text-sm text-anthrazit-80">{data.inhouse}</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* FAQ */}
      {data.faq.length > 0 && (
        <Reveal>
          <Section>
            <Container className="max-w-3xl">
              <SectionHeading eyebrow="Häufige Fragen" title="Was Sie wissen möchten" lead="" />
              <dl className="mt-8 flex flex-col gap-4">
                {data.faq.map((item, i) => (
                  <Reveal key={item.question} delay={i * 50}>
                    <div className="rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                      <dt className="font-semibold text-anthrazit">{item.question}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-anthrazit-80">{item.answer}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </Container>
          </Section>
        </Reveal>
      )}

      {/* CTA */}
      <div className="bg-tuerkis py-14">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div>
              <Eyebrow className="text-white/70">Nächster Schritt</Eyebrow>
              <p className="mt-2 text-xl font-bold text-white">{data.title} anfragen</p>
              <p className="mt-1 max-w-[52ch] text-sm text-white/75">
                Als offene Masterclass oder als Inhouse-Format für Ihr Unternehmen — sprechen Sie uns an.
              </p>
            </div>
            <Link href="/kontakt" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Anfragen <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
