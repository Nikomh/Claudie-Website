import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, CalendarDays, Quote, Star, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonVariants } from "@/components/ui/Button";
import { OkrTrustBar } from "@/components/course/OkrTrustBar";
import { OkrForSection } from "@/components/course/OkrForSection";
import { OkrFAQ } from "@/components/course/OkrFAQ";
import { OkrInhouse } from "@/components/course/OkrInhouse";
import { OkrFinalCTA } from "@/components/course/OkrFinalCTA";
import { YoutubeEmbed } from "@/components/course/YoutubeEmbed";
import { okrCoachContent } from "@/content/okrCoach";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyCourseCta } from "@/components/ui/StickyCourseCTA";
import { cn } from "@/lib/cn";

export function generateMetadata(): Metadata {
  const { meta } = okrCoachContent;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: { type: "website", locale: "de_DE", siteName: "Claudia Thonet", title: `${meta.title} · Claudia Thonet`, description: meta.description },
    twitter: { card: "summary_large_image", title: `${meta.title} · Claudia Thonet`, description: meta.description },
  };
}

const LINE_COLORS = ["text-white", "text-tuerkis", "text-orange-rot"] as const;

const OUTCOME_ICONS = [
  "/images/okr-coach/claudia_thonet_agiler_coach_ausbildung_impulse_icon.png",
  "/images/okr-coach/claudia_thonet_agiler_facilitator_konzeption_moderation_icon.png",
  "/images/okr-coach/claudia_thonet_agiler_coach_ausbildung_figure_pad_icon.png",
  "/images/okr-coach/claudia_thonet_agiler_coach_ausbildung_teamentwicklung_icon.png",
] as const;

const DAY_TAGS = [
  "/images/okr-coach/CT_Tag1.png",
  "/images/okr-coach/CT_Tag2.png",
  "/images/okr-coach/CT_Tag3.png",
] as const;

const PHOTO_TESTIMONIALS = [
  {
    quote: "Die Ausbildung hat mir ein konkretes Framework gegeben, das ich sofort in der Praxis einsetzen konnte. OKRs sind jetzt ein fester Bestandteil unserer Strategiearbeit.",
    name: "Harald Schiebel",
    role: "Geschäftsführer",
    rating: 5 as const,
    photo: "/images/okr-coach/Testimonial_OKR_Coach_Harald_Schiebel_Claudia_Thonet_Agile_Consulting.png",
  },
  {
    quote: "Jonny bringt OKR wirklich zum Leben — durch echte Simulationen, Fallarbeit und individuelle Supervision. Keine Theoriestunden, sondern Praxis vom ersten Moment an.",
    name: "Thomas Wilde",
    role: "Agile Coach",
    rating: 5 as const,
    photo: "/images/okr-coach/Thomas_Wilde_Ausbildung_OKR_Coach_Marc_Schmetkamp_Claudia_Thonet_Agile_Consulting.png",
  },
];

export default function OkrCoachPage() {
  const c = okrCoachContent;

  return (
    <>
      <Breadcrumbs items={[{ label: "Ausbildungen", href: "/ausbildungen" }, { label: "OKR Coach" }]} />
      <StickyCourseCta primaryHref="/beratung" primaryLabel="Beratung vereinbaren" secondaryHref="#termine" secondaryLabel="Zu den Terminen" />
      {/* ── HERO ── */}
      <section aria-label="OKR Coach Ausbildung" className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.15)_0%,transparent_65%),radial-gradient(ellipse_40%_50%_at_0%_100%,rgba(252,85,30,0.06)_0%,transparent_70%)]"
        />
        <Container className="relative grid min-h-[680px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">

          <div className="flex flex-col gap-6 lg:gap-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">{c.hero.eyebrow}</Eyebrow>
              </div>
            </Reveal>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
              {c.hero.headlineLines.map((line, i) => (
                <Reveal as="span" key={line} delay={i * 100} className={cn("block", LINE_COLORS[i] ?? "text-white")}>
                  {line}
                </Reveal>
              ))}
            </h1>

            <Reveal delay={400}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                {c.hero.subline}
              </p>
            </Reveal>

            <Reveal delay={500} className="flex flex-wrap gap-3 pt-1">
              <Link href={c.hero.ctaPrimary.href} className={cn(buttonVariants({ variant: "primary", size: "lg" }), "min-h-[44px]")}>
                {c.hero.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={c.hero.ctaSecondary.href} className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:text-lg">
                <Phone className="h-4 w-4" aria-hidden />
                {c.hero.ctaSecondary.label}
              </Link>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={600} className="flex flex-wrap gap-6 pt-1">
              {c.hero.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-tuerkis">{s.value}</p>
                  <p className="text-xs text-white/50">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right: Jonny photo */}
          <Reveal delay={300} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 aspect-[4/5]">
              <Image
                src="/images/okr-coach/ausbildung-okr-coach-jonny-kohlhaas.png"
                alt="Jonny Kohlhaas, OKR Coach und Trainer"
                fill
                priority
                sizes="40vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-base font-bold text-white">Jonny Kohlhaas</p>
                <p className="text-xs text-white/70">OKR Coach & Strategieberater</p>
              </div>
            </div>
            {/* Floating 25 Stunden badge */}
            <div aria-hidden className="pointer-events-none absolute -bottom-5 -right-5">
              <Image
                src="/images/okr-coach/claudia_thonet_ausbildung_25stunden_icon.png"
                alt=""
                width={96}
                height={80}
                className="drop-shadow-lg"
              />
            </div>
            {/* BDVT+ECA badge */}
            <div className="absolute -top-3 -left-3 flex flex-col items-center justify-center h-16 w-16 rounded-full bg-orange-rot shadow-lg ring-2 ring-white/20">
              <span className="text-[9px] font-bold tracking-wide text-white text-center leading-tight">BDVT<br/>+ ECA</span>
            </div>
          </Reveal>

        </Container>
      </section>

      {/* ── TRUST BAR ── */}
      <OkrTrustBar />

      {/* ── OUTCOMES with OKR icons ── */}
      <Reveal>
        <Section>
          <Container>
            <Reveal>
              <div className="mb-12 flex flex-col gap-3 md:mb-16">
                <Eyebrow>{c.outcomes.eyebrow}</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  {c.outcomes.title}
                </h2>
                <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80 md:text-lg">
                  {c.outcomes.lead}
                </p>
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
      </Reveal>

      {/* ── FOR WHOM ── */}
      <OkrForSection />

      {/* ── YOUTUBE VIDEO ── */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <Eyebrow>Schau rein</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  OKR in 3 Tagen meistern
                </h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Jonny Kohlhaas erklärt, was diese Ausbildung von anderen OKR-Angeboten unterscheidet: echte Simulationen, individuelle Supervision und Praxis von Tag 1 an.
                </p>
                <Link href={c.hero.ctaPrimary.href} className="mt-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-tuerkis hover:underline">
                  Jetzt Platz sichern
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <YoutubeEmbed videoId="x7SiPnJkFQk" title="OKR Coach Ausbildung — In 3 Tagen zur Expertise" />
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── 3 DAYS with tag badges ── */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow={c.days.eyebrow}
              title={c.days.title}
              lead={c.days.lead}
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {c.days.items.map((day, i) => (
                <Reveal key={day.number} delay={i * 80}>
                  <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white shadow-sm overflow-hidden">
                    <div className="flex items-center gap-4 border-b border-border bg-bg-section px-6 py-5">
                      <Image
                        src={DAY_TAGS[i] ?? DAY_TAGS[0]}
                        alt={day.label}
                        width={56}
                        height={56}
                        className="shrink-0"
                      />
                      <h3 className="text-base font-bold leading-snug text-anthrazit">
                        {day.title}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <p className="text-sm leading-relaxed text-anthrazit-80">{day.description}</p>
                      <ul className="flex flex-col gap-2">
                        {day.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2.5 text-sm text-anthrazit">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" aria-hidden />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            {/* Supervision callout */}
            <Reveal delay={200}>
              <div className="mt-6 flex items-start gap-4 rounded-[var(--radius-md)] border border-tuerkis/20 bg-tuerkis/5 px-6 py-5">
                <Image
                  src="/images/okr-coach/claudia_thonet_agiler_coach_ausbildung_supervision_icon.png"
                  alt=""
                  width={48}
                  height={48}
                  className="shrink-0"
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-anthrazit">
                  <span className="font-semibold text-tuerkis">Inklusive: </span>
                  {c.days.supervision}
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── DATES ── */}
      <section id="termine" className="scroll-mt-24 bg-anthrazit py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="mb-12 flex flex-col gap-3 md:mb-14">
              <Eyebrow className="text-tuerkis-50">{c.dates.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">{c.dates.title}</h2>
              <p className="max-w-[56ch] text-base leading-relaxed text-white/60 md:text-lg">{c.dates.lead}</p>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {c.dates.cohorts.map((cohort, i) => (
              <Reveal key={cohort.id} delay={i * 100}>
                <article className="flex h-full flex-col rounded-[var(--radius-lg)] bg-white shadow-xl">
                  <div className="flex items-start justify-between gap-3 border-b border-border px-7 py-6">
                    <div>
                      <p className="text-lg font-bold text-anthrazit">{cohort.name}</p>
                      <div className="mt-1.5 flex items-center gap-1.5 text-sm text-anthrazit-80">
                        <CalendarDays className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                        <span className="font-medium text-anthrazit">{cohort.dates}</span>
                        {cohort.dateTbd && (
                          <span className="ml-1 rounded-full bg-bg-section px-2 py-0.5 text-xs text-anthrazit-80">Termin folgt</span>
                        )}
                      </div>
                    </div>
                    {cohort.badge && (
                      <span className="shrink-0 rounded-full bg-tuerkis px-3 py-1 text-xs font-semibold text-white">{cohort.badge}</span>
                    )}
                  </div>
                  <div className="px-7 py-5">
                    <p className="flex items-start gap-1.5 text-sm text-anthrazit-80">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                      {cohort.venue}
                    </p>
                  </div>
                  {/* Included */}
                  <div className="flex items-start gap-4 border-t border-border px-7 py-5">
                    <Image
                      src="/images/okr-coach/claudia_thonet_ausbildung_toolbox_icon.png"
                      alt=""
                      width={52}
                      height={52}
                      className="shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <ul className="flex flex-col gap-2">
                      {c.dates.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-anthrazit">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto border-t border-border px-7 py-6">
                    <div className="mb-5">
                      <p className="text-xs text-anthrazit-80">Preis</p>
                      <p className="text-3xl font-bold text-anthrazit">
                        {cohort.price}
                        <span className="ml-1.5 text-sm font-normal text-anthrazit-80">{cohort.vatNote}</span>
                      </p>
                    </div>
                    <Link
                      href={cohort.ctaHref}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2"
                    >
                      {cohort.ctaLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-md)] border border-white/10 px-6 py-4">
              <p className="text-sm text-white/55">{c.dates.discountNote}</p>
              <a href={`mailto:${c.dates.contact.email}`} className="text-sm font-semibold text-tuerkis hover:text-tuerkis-50 transition-colors">
                {c.dates.contact.email}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── TEAM with real photo ── */}
      <Reveal>
        <Section bg="section">
          <Container>
            <Reveal>
              <div className="mb-10 flex flex-col gap-3">
                <Eyebrow>{c.team.eyebrow}</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">{c.team.title}</h2>
                <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80">{c.team.lead}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                {/* Photo */}
                <div className="flex flex-row items-start gap-5 md:flex-col md:items-center md:w-44">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-md ring-2 ring-tuerkis/20 md:h-36 md:w-36 shrink-0">
                    <Image
                      src="/images/okr-coach/ausbildung-okr-coach-jonny-kohlhaas.png"
                      alt="Jonny Kohlhaas"
                      fill
                      sizes="144px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="md:text-center">
                    <p className="font-bold text-anthrazit text-lg">{c.team.member.name}</p>
                    <p className="text-sm text-anthrazit-80 mt-0.5">{c.team.member.role}</p>
                  </div>
                </div>
                {/* Bio */}
                <div className="rounded-[var(--radius-md)] border border-border bg-white p-6 md:p-8 shadow-sm flex flex-col gap-5">
                  <p className="text-base leading-relaxed text-anthrazit-80">{c.team.member.bio}</p>
                  <blockquote className="border-l-2 border-tuerkis pl-5">
                    <p className="text-base font-medium italic text-anthrazit leading-relaxed">{c.team.member.philosophy}</p>
                  </blockquote>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {c.team.member.focusTopics.map((topic) => (
                      <span key={topic} className="rounded-full bg-tuerkis/10 px-3 py-1 text-xs font-semibold text-tuerkis">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      </Reveal>

      {/* ── TESTIMONIALS with portraits ── */}
      <Reveal>
        <Section>
          <Container>
            <Reveal>
              <div className="mb-12 flex flex-col gap-3 md:mb-14">
                <Eyebrow>{c.testimonials.eyebrow}</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">{c.testimonials.title}</h2>
                <p className="max-w-[56ch] text-base leading-relaxed text-anthrazit-80">{c.testimonials.lead}</p>
              </div>
            </Reveal>

            {/* Featured photo testimonials */}
            <div className="mb-5 grid gap-5 sm:grid-cols-2">
              {PHOTO_TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
                    <Quote className="-ml-1 h-7 w-7 text-anthrazit/12" aria-hidden />
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit md:text-base">{`„${t.quote}"`}</p>
                    <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-border shrink-0">
                          <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-anthrazit">{t.name}</p>
                          {t.role && <p className="mt-0.5 text-xs text-anthrazit-80">{t.role}</p>}
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-0.5" aria-label={`${t.rating} von 5 Sternen`}>
                        {Array.from({ length: 5 }, (_, j) => (
                          <Star key={j} className={cn("h-3.5 w-3.5", j < t.rating ? "fill-orange-rot text-orange-rot" : "text-border")} aria-hidden />
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Rest of testimonials */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.testimonials.items.slice(0, 3).map((t, i) => (
                <Reveal key={t.name} delay={i * 70}>
                  <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
                    <Quote className="-ml-1 h-7 w-7 text-anthrazit/12" aria-hidden />
                    <p className="flex-1 text-sm leading-relaxed text-anthrazit md:text-base">{`„${t.quote}"`}</p>
                    <div className="flex items-end justify-between gap-4 border-t border-border pt-4">
                      <div>
                        <p className="text-sm font-semibold text-anthrazit">{t.name}</p>
                        {(t.role ?? t.company) && (
                          <p className="mt-0.5 text-xs text-anthrazit-80">{[t.role, t.company].filter(Boolean).join(" · ")}</p>
                        )}
                      </div>
                      <div className="flex shrink-0 gap-0.5" aria-label={`${t.rating} von 5 Sternen`}>
                        {Array.from({ length: 5 }, (_, j) => (
                          <Star key={j} className={cn("h-3.5 w-3.5", j < t.rating ? "fill-orange-rot text-orange-rot" : "text-border")} aria-hidden />
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

      {/* ── FAQ ── */}
      <OkrFAQ />

      {/* ── INHOUSE ── */}
      <OkrInhouse />

      {/* ── FINAL CTA ── */}
      <OkrFinalCTA />
    </>
  );
}
