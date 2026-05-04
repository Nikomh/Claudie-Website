import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export type BeratungsDetail = {
  eyebrow: string;
  title: string;
  subline: string;
  heroImage: string;
  heroImageAlt: string;
  ausgangslagen: { title: string; body: string }[];
  fuerWen: string[];
  themen: { title: string; body: string }[];
  ablauf: { step: string; title: string; body: string }[];
  ergebnisse: string[];
  formate: { title: string; body: string }[];
  faq: { question: string; answer: string }[];
};

export function BeratungsDetailTemplate({ data }: { data: BeratungsDetail }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Beratung", href: "/beratung" }, { label: data.title }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.07)_0%,transparent_70%)]" />
        <Container className="relative grid min-h-[540px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">{data.eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block">{data.title}</Reveal>
            </h1>
            <Reveal delay={200}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">{data.subline}</p>
            </Reveal>
            <Reveal delay={320} className="flex flex-wrap gap-3 pt-1">
              <Link href="/kontakt" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Erstgespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/beratung" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
                Alle Beratungsfelder
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

      {/* AUSGANGSLAGEN */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Typische Situationen" title="Wann das passt" lead="Diese Ausgangssituationen kennen wir — und wir haben konkrete Ansätze dafür." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.ausgangslagen.map((item, i) => (
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

      {/* FÜR WEN + THEMEN */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-5">
                <Eyebrow>Für wen</Eyebrow>
                <h2 className="text-2xl font-bold leading-tight text-anthrazit">Geeignet für</h2>
                <ul className="flex flex-col gap-2.5">
                  {data.fuerWen.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <Eyebrow>Inhalte</Eyebrow>
                <h2 className="text-2xl font-bold leading-tight text-anthrazit">Was gemeinsam bearbeitet wird</h2>
                <div className="flex flex-col gap-3">
                  {data.themen.map((t, i) => (
                    <Reveal key={t.title} delay={i * 50}>
                      <div className="flex gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tuerkis/10 text-xs font-bold text-tuerkis">{i + 1}</div>
                        <div>
                          <p className="text-sm font-semibold text-anthrazit">{t.title}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-anthrazit-80">{t.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ABLAUF */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Möglicher Ablauf" title="Wie wir vorgehen" lead="Kein starres Programm — aber ein bewährtes Muster, das wir an Ihren Kontext anpassen." />
            <div className="mt-10 flex flex-col gap-4">
              {data.ablauf.map((step, i) => (
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
          </Container>
        </Section>
      </Reveal>

      {/* ERGEBNISSE + FORMATE */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-5">
                <Eyebrow>Ergebnisse</Eyebrow>
                <h2 className="text-2xl font-bold leading-tight text-anthrazit">Was am Ende steht</h2>
                <div className="flex flex-col gap-2">
                  {data.ergebnisse.map((e) => (
                    <div key={e} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Eyebrow>Formate</Eyebrow>
                <h2 className="text-2xl font-bold leading-tight text-anthrazit">Mögliche Beratungsformate</h2>
                <div className="flex flex-col gap-3">
                  {data.formate.map((f, i) => (
                    <Reveal key={f.title} delay={i * 50}>
                      <div className="rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                        <p className="text-sm font-semibold text-anthrazit">{f.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-anthrazit-80">{f.body}</p>
                      </div>
                    </Reveal>
                  ))}
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
      <div className="bg-anthrazit py-16">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Eyebrow className="text-tuerkis-50">Nächster Schritt</Eyebrow>
            <h2 className="max-w-[28ch] text-3xl font-bold leading-tight text-white md:text-4xl">
              Bereit für ein Erstgespräch?
            </h2>
            <p className="max-w-[48ch] text-sm leading-relaxed text-white/65 md:text-base">
              30 Minuten. Wir hören zu, fragen nach und zeigen Ihnen, was konkret sinnvoll wäre — ohne Verpflichtung.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kontakt" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80">
                Erstgespräch anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/beratung" className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-white/25 px-6 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white">
                Alle Beratungsfelder
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
