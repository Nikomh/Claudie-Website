import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Quote, Star, CheckCircle2, Building2, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonVariants } from "@/components/ui/Button";
import { CourseFAQ } from "@/components/course/CourseFAQ";
import { CourseTrustBar } from "@/components/course/CourseTrustBar";
import { CourseForSection } from "@/components/course/CourseForSection";
import { veraenderungGestaltenContent } from "@/content/veraenderungGestalten";
import { cn } from "@/lib/cn";

export function generateMetadata(): Metadata {
  const { meta } = veraenderungGestaltenContent;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: { type: "website", locale: "de_DE", siteName: "Claudia Thonet", title: `${meta.title} · Claudia Thonet`, description: meta.description },
    twitter: { card: "summary_large_image", title: `${meta.title} · Claudia Thonet`, description: meta.description },
  };
}

const LINE_COLORS = ["text-white", "text-tuerkis", "text-white"] as const;

const OUTCOME_ICONS = [
  "/images/veraenderung-gestalten/claudia_thonet_ausbildung_gespraech_icon.png",
  "/images/veraenderung-gestalten/claudia_thonet_ausbildung_gespraech_icon.png",
  "/images/veraenderung-gestalten/Ausbildung_Veraenderung_gestalten_Claudia_Thonet.png",
  "/images/veraenderung-gestalten/claudia_thonet_nutzen_icon.png",
] as const;

const DAY_BADGES = [
  "/images/veraenderung-gestalten/CT_Tag1.png",
  "/images/veraenderung-gestalten/CT_Tag2.png",
] as const;

const TRAINER_PHOTOS: Record<string, string> = {
  "Claudia Thonet": "/images/veraenderung-gestalten/claudia-thonet-agile-consulting-portrait_08_2024_2.jpg",
  "Anja Höhne": "/images/veraenderung-gestalten/anja-hoehne-claudia-thonet-beraterin-08-24.jpg",
};

const FEATURED_TESTIMONIALS = [
  {
    quote: "Endlich ein Training, das nicht bei Theorie-Modellen stehen bleibt. Ich bin mit konkreten Werkzeugen nach Hause gegangen — und habe sie direkt am nächsten Tag eingesetzt.",
    name: "Marcus R.",
    role: "Teamleiter Produktentwicklung",
    rating: 5 as const,
    photo: "/images/veraenderung-gestalten/claudia_thonet_agiler_coach_ausbildung_unternehmenskultur.jpg",
  },
];

export default function VeraenderungGestaltenPage() {
  const c = veraenderungGestaltenContent;

  return (
    <>
      {/* HERO */}
      <section aria-label="Veränderung gestalten Weiterbildung" className="relative overflow-hidden bg-anthrazit">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.07)_0%,transparent_70%)]" />
        <Container className="relative grid min-h-[680px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6 lg:gap-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">{c.hero.eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              {c.hero.headlineLines.map((line, i) => (
                <Reveal as="span" key={line} delay={i * 120} className={cn("block", LINE_COLORS[i] ?? "text-white")}>
                  {line}
                </Reveal>
              ))}
            </h1>
            <Reveal delay={420}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">{c.hero.subline}</p>
            </Reveal>
            <Reveal delay={520} className="flex flex-wrap gap-3 pt-1">
              <Link href={c.hero.ctaPrimary.href} className={cn(buttonVariants({ variant: "primary", size: "lg" }), "min-h-[44px]")}>
                {c.hero.ctaPrimary.label} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={c.hero.ctaSecondary.href} className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:text-lg">
                <Phone className="h-4 w-4" aria-hidden /> {c.hero.ctaSecondary.label}
              </Link>
            </Reveal>
            <Reveal delay={620} className="flex flex-wrap gap-6 pt-1">
              {c.hero.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-tuerkis">{s.value}</p>
                  <p className="text-xs text-white/50">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right: group photo */}
          <Reveal delay={300} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 aspect-[4/5]">
              <Image
                src="/images/veraenderung-gestalten/Veraenderung_gestalten_Claudia_Thonet.jpg"
                alt="Veränderung gestalten mit Claudia Thonet"
                fill
                priority
                sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold text-white">Claudia Thonet</p>
                <p className="text-xs text-white/70">Change · Veränderungsbegleitung</p>
              </div>
            </div>
            {/* Day badges */}
            <div aria-hidden className="pointer-events-none absolute -bottom-4 -right-5 flex gap-2">
              {DAY_BADGES.map((badge) => (
                <Image key={badge} src={badge} alt="" width={72} height={80} className="drop-shadow-lg" />
              ))}
            </div>
            <div aria-hidden className="pointer-events-none absolute -top-3 -left-3">
              <Image
                src="/images/veraenderung-gestalten/Ausbildung_Veraenderung_gestalten_Claudia_Thonet.png"
                alt="Veränderung gestalten"
                width={80}
                height={80}
                className="drop-shadow-md rounded-full"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TRUST BAR */}
      <CourseTrustBar trustBar={c.trustBar} />

      {/* OUTCOMES */}
      <Section>
        <Container>
          <Reveal>
            <div className="mb-12 flex flex-col gap-3 md:mb-16">
              <Eyebrow>{c.outcomes.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">{c.outcomes.title}</h2>
              <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">{c.outcomes.lead}</p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.outcomes.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                  <div aria-hidden className="h-16 w-16">
                    <Image src={OUTCOME_ICONS[i] ?? OUTCOME_ICONS[0]} alt="" width={64} height={64} className="h-full w-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold leading-snug text-anthrazit">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FOR WHOM */}
      <Reveal><CourseForSection forWhom={c.forWhom} /></Reveal>

      {/* 2-DAY AGENDA */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading eyebrow="Das Programm" title="Zwei Tage. Volle Intensität." lead="Jeder Tag hat einen klaren Fokus — Verständnis am ersten, Handlung am zweiten Tag." />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {c.days.map((day, i) => (
                <Reveal key={day.number} delay={i * 100}>
                  <article className="flex flex-col gap-5 rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
                    <div className="flex items-center gap-4">
                      <Image src={DAY_BADGES[i] ?? DAY_BADGES[0]} alt={`Tag ${day.number}`} width={72} height={80} className="shrink-0 object-contain" />
                      <h3 className="text-lg font-bold leading-snug text-anthrazit">{day.title}</h3>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {day.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed text-anthrazit-80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* IN-ACTION PHOTO */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-5">
                <Eyebrow>Echte Praxis</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">So arbeiten wir.</h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Kein Frontalunterricht, keine PowerPoint-Schlachten. Wir arbeiten mit deinen echten Fällen, in kleiner Gruppe, mit viel Raum für Fragen — und mit Methoden, die du morgen einsetzen kannst.
                </p>
                <ul className="flex flex-col gap-2.5 mt-2">
                  {["Fallarbeit mit echten Situationen", "Übungen in Kleingruppen", "Persönlicher Aktionsplan", "Direktes Feedback von Trainerin & Gruppe"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-anthrazit-80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={c.hero.ctaPrimary.href} className="mt-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-tuerkis hover:underline">
                  Jetzt Platz sichern <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <Reveal delay={150}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-xl">
                  <Image
                    src="/images/veraenderung-gestalten/claudia_thonet_agiler_coach_ausbildung_unternehmenskultur.jpg"
                    alt="Claudia Thonet im Workshop mit Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* DATES */}
      <Reveal>
        <Section id="termine">
          <Container>
            <SectionHeading eyebrow={c.dates.eyebrow} title={c.dates.title} lead={c.dates.lead} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {c.dates.sessions.map((session, i) => (
                <Reveal key={session.id} delay={i * 80}>
                  <article className="flex flex-col gap-5 rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-bold text-anthrazit">{session.dates}</p>
                      <div className="flex items-center gap-4 text-sm text-anthrazit-80">
                        <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-tuerkis" aria-hidden />{session.location}</span>
                        <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-tuerkis" aria-hidden />{session.spotsLeft} Plätze frei</span>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-2xl font-bold text-anthrazit">{session.price}</p>
                      <p className="text-xs text-anthrazit-80">{session.vatNote}</p>
                    </div>
                    <Link href={session.ctaHref} className={cn(buttonVariants({ variant: "primary" }), "w-full justify-center")}>
                      Platz sichern <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mt-8 text-center text-sm text-anthrazit-80">
                Fragen? <a href={`mailto:${c.dates.contact.email}`} className="font-semibold text-tuerkis hover:underline">{c.dates.contact.email}</a> · <a href={`tel:${c.dates.contact.phone.replace(/\s/g, "")}`} className="font-semibold text-tuerkis hover:underline">{c.dates.contact.phone}</a>
              </p>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* TEAM */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow={c.team.eyebrow} title={c.team.title} lead={c.team.lead} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {c.team.members.map((member, i) => {
                const photo = TRAINER_PHOTOS[member.name];
                return (
                  <Reveal key={member.name} delay={i * 70}>
                    <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                      {photo ? (
                        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-border">
                          <Image src={photo} alt={member.name} fill sizes="56px" className="object-cover object-top" />
                        </div>
                      ) : (
                        <div className={cn("flex h-14 w-14 items-center justify-center rounded-full text-base font-bold", member.avatarColor, member.textColor)} aria-hidden>{member.initials}</div>
                      )}
                      <p className="font-semibold leading-snug text-anthrazit">{member.name}</p>
                      <p className="text-xs text-tuerkis">{member.role}</p>
                      <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{member.bio}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {member.focusTopics.map((topic) => (
                          <span key={topic} className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs text-anthrazit-80">{topic}</span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* TESTIMONIALS */}
      <Reveal>
        <Section bg="section">
          <Container>
            <Reveal>
              <div className="mb-10 flex flex-col gap-3">
                <Eyebrow>{c.testimonials.eyebrow}</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">{c.testimonials.title}</h2>
                <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80">{c.testimonials.lead}</p>
              </div>
            </Reveal>
            {/* Featured with photo */}
            <div className="mb-5">
              {FEATURED_TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <article className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
                    <Quote className="-ml-1 h-7 w-7 text-anthrazit/12" aria-hidden />
                    <p className="text-base leading-relaxed text-anthrazit">{`„${t.quote}"`}</p>
                    <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-border shrink-0">
                          <Image src={t.photo} alt={t.name} fill sizes="48px" className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-anthrazit">{t.name}</p>
                          {t.role && <p className="mt-0.5 text-xs text-anthrazit-80">{t.role}</p>}
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-0.5">
                        {Array.from({ length: 5 }, (_, j) => (
                          <Star key={j} className={cn("h-3.5 w-3.5", j < t.rating ? "fill-orange-rot text-orange-rot" : "text-border")} aria-hidden />
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            {/* Grid testimonials */}
            <div className="grid gap-5 sm:grid-cols-3">
              {c.testimonials.items.map((t, i) => (
                <Reveal key={t.name} delay={i * 70}>
                  <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                    <Quote className="-ml-1 h-6 w-6 text-anthrazit/10" aria-hidden />
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit">{`„${t.quote}"`}</p>
                    <div className="border-t border-border pt-3">
                      <p className="text-sm font-semibold text-anthrazit">{t.name}</p>
                      {t.role && <p className="text-xs text-anthrazit-80">{t.role}</p>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal><CourseFAQ faq={c.faq} /></Reveal>

      {/* INHOUSE BANNER */}
      <div className="bg-tuerkis py-14">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-white/15">
                <Building2 className="h-6 w-6 text-white" aria-hidden />
              </div>
              <div className="flex flex-col gap-1.5">
                <Eyebrow className="text-white/70">{c.inhouse.eyebrow}</Eyebrow>
                <p className="text-xl font-bold text-white">{c.inhouse.headline}</p>
                <p className="max-w-[52ch] text-sm leading-relaxed text-white/75">{c.inhouse.body}</p>
              </div>
            </div>
            <Link href={c.inhouse.ctaHref} className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-tuerkis shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tuerkis">
              {c.inhouse.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </div>

      {/* FINAL CTA */}
      <Section bg="section">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <div className="flex flex-col items-center gap-4">
                <Eyebrow>{c.finalCta.eyebrow}</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">{c.finalCta.headline}</h2>
                <p className="max-w-[48ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">{c.finalCta.subline}</p>
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  <Link href={c.finalCta.ctaPrimary.href} className={cn(buttonVariants({ variant: "primary", size: "lg" }), "min-h-[44px]")}>
                    {c.finalCta.ctaPrimary.label} <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href={c.finalCta.ctaSecondary.href} className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "min-h-[44px]")}>
                    {c.finalCta.ctaSecondary.label}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
