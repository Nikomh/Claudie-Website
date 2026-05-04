import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Quote, Star, Building2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonVariants } from "@/components/ui/Button";
import { CourseDates } from "@/components/course/CourseDates";
import { CourseFAQ } from "@/components/course/CourseFAQ";
import { CourseFinalCTA } from "@/components/course/CourseFinalCTA";
import { CourseForSection } from "@/components/course/CourseForSection";
import { CourseModules } from "@/components/course/CourseModules";
import { CourseTrustBar } from "@/components/course/CourseTrustBar";
import { YoutubeEmbed } from "@/components/course/YoutubeEmbed";
import { agilerFacilitatorContent } from "@/content/agilerFacilitator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyCourseCta } from "@/components/ui/StickyCourseCTA";
import { cn } from "@/lib/cn";

export function generateMetadata(): Metadata {
  const { meta } = agilerFacilitatorContent;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: { type: "website", locale: "de_DE", siteName: "Claudia Thonet", title: `${meta.title} · Claudia Thonet`, description: meta.description },
    twitter: { card: "summary_large_image", title: `${meta.title} · Claudia Thonet`, description: meta.description },
  };
}

const LINE_COLORS = ["text-white", "text-tuerkis", "text-tuerkis-50"] as const;

const OUTCOME_ICONS = [
  "/images/agiler-facilitator/claudia_thonet_agiler_facilitator_kick_offs_icon.png",
  "/images/agiler-facilitator/claudia_thonet_agiler_facilitator_konzeption_moderation_icon.png",
  "/images/agiler-facilitator/claudia_thonet_agiler_facilitator_lernbegleitung_icon.png",
  "/images/agiler-facilitator/claudia_thonet_ausbildung_toolbox_icon.png",
] as const;

const MODULE_BADGES = [
  "/images/agiler-facilitator/claudia_thonet_ausbildung_modul_1.png",
  "/images/agiler-facilitator/claudia_thonet_ausbildung_modul_2.png",
  "/images/agiler-facilitator/claudia_thonet_ausbildung_modul_3.png",
] as const;

const TRAINER_PHOTOS: Record<string, string> = {
  "Claudia Thonet": "/images/agiler-coach/claudia-thonet-agile-consulting-portrait_08_2024_2.jpg",
  "Jonny Kohlhaas": "/images/agiler-facilitator/jonny-kohlhaas-berater-claudia-thonet-08-24.jpg",
  "Anja Höhne": "/images/agiler-coach/anja-hoehne-claudia-thonet-beraterin-08-24.jpg",
};

const FEATURED_TESTIMONIALS = [
  {
    quote: "Die Ausbildung hat mir wirklich gezeigt, wie man Workshops so gestaltet, dass Menschen wirklich lernen. Nicht Theorie, sondern echte Werkzeuge, die sofort einsetzbar sind.",
    name: "Dr. Petra Fox-Kuchenbecker",
    role: "Trainerin & Coach",
    rating: 5 as const,
    photo: "/images/agiler-facilitator/Testimonial_Agiler_Facilitator_Dr_Petra_Fox-Kuchenbecker.png",
  },
  {
    quote: "Ich habe in diesen drei Modulen mehr gelernt als in Jahren davor. Die Methoden, die Haltung, der Austausch — das war ein echter Entwicklungssprung für mich.",
    name: "Christina Baldauf",
    role: "HR-Managerin",
    rating: 5 as const,
    photo: "/images/agiler-facilitator/Testimonial_Ausbildung_Agiler_Facilitator_Christina_Baldauf_Claudia_Thonet_Agile_Consulting.png",
  },
];

export default function AgilerFacilitatorPage() {
  const c = agilerFacilitatorContent;

  return (
    <>
      <Breadcrumbs items={[{ label: "Ausbildungen", href: "/ausbildungen" }, { label: "Agile Facilitator" }]} />
      <StickyCourseCta primaryHref="/beratung" primaryLabel="Beratung vereinbaren" secondaryHref="#termine" secondaryLabel="Zu den Terminen" />
      {/* HERO */}
      <section aria-label="Agile Facilitator Ausbildung" className="relative overflow-hidden bg-anthrazit">
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

          {/* Right: Claudia photo */}
          <Reveal delay={300} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 aspect-[4/5]">
              <Image src="/images/agiler-facilitator/claudia-thonet-im-trainng-zu-agilen-werten-11-23.jpg" alt="Claudia Thonet im Training zu agilen Werten" fill priority sizes="40vw" className="object-cover object-center" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold text-white">Claudia Thonet</p>
                <p className="text-xs text-white/70">Agile Werte · Training</p>
              </div>
            </div>
            <div aria-hidden className="pointer-events-none absolute -bottom-4 -right-5">
              <Image src="/images/agiler-facilitator/claudia_thonet_agiler_facilitator_50_stunden_icon.png" alt="" width={100} height={84} className="drop-shadow-lg" />
            </div>
            <div aria-hidden className="pointer-events-none absolute -top-3 -left-3">
              <Image src="/images/agiler-facilitator/ausbildung_agiler_facilitator_claudia_thonet_agile_consulting_icon_transparent__07_2023.png" alt="Agile Facilitator Icon" width={64} height={64} className="drop-shadow-md" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TRUST BAR */}
      <CourseTrustBar trustBar={c.trustBar} />

      {/* OUTCOMES with course-specific icons */}
      <Reveal>
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
      </Reveal>

      {/* FOR WHOM */}
      <Reveal><CourseForSection forWhom={c.forWhom} /></Reveal>

      {/* YOUTUBE VIDEO */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <Eyebrow>Schau rein</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">Die Ausbildung im Überblick</h2>
                <p className="text-base leading-relaxed text-anthrazit-80">In diesem Video erklärt Claudia Thonet, was dich in der Agile Facilitator Ausbildung erwartet — vom ersten Modul bis zum Abschluss. Direkt, ehrlich, ohne Marketingsprache.</p>
                <Link href={c.hero.ctaPrimary.href} className="mt-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-tuerkis hover:underline">
                  Jetzt Platz sichern <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <YoutubeEmbed videoId="quI23h_5XQI" title="Agile Facilitator Ausbildung — Claudia Thonet erklärt" />
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* MODULE BADGES row */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow={c.modules.eyebrow} title={c.modules.title} lead={c.modules.lead} />
            <div className="mt-8 grid gap-4 sm:grid-cols-3 mb-8">
              {MODULE_BADGES.map((badge, i) => (
                <Reveal key={badge} delay={i * 80}>
                  <div className="flex items-center gap-4 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                    <Image src={badge} alt={`Modul ${i + 1}`} width={64} height={80} className="shrink-0 object-contain" />
                    <div>
                      <p className="font-semibold text-anthrazit">{c.modules.items[i]?.title ?? `Modul ${i + 1}`}</p>
                      <p className="text-xs text-anthrazit-80 mt-0.5">{c.modules.items[i]?.format}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* MODULES accordion */}
      <div className="-mt-16">
        <Reveal><CourseModules modules={{ ...c.modules, eyebrow: "", title: "", lead: "" }} /></Reveal>
      </div>

      {/* IN-ACTION GALLERY */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading eyebrow="Echte Praxis" title="So sieht die Ausbildung aus." lead="Kein PowerPoint, kein Frontalunterricht — jedes Modul ist ein echtes Erlebnis." />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { src: "/images/photos/Weiterbildung_Moderation_Claudia_Thonet_10_25_2.jpg", alt: "Claudia Thonet vor Retro-Methoden-Tafel" },
                { src: "/images/photos/moderation_030124.jpg", alt: "Claudia Thonet moderiert mit dem Team" },
                { src: "/images/photos/Moderation-Action1_030124.jpg", alt: "Workshop mit Moderationskarten" },
              ].map((photo, i) => (
                <Reveal key={photo.src} delay={i * 80}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] shadow-sm">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* DATES */}
      <CourseDates dates={c.dates} />

      {/* TEAM with real photos */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow={c.team.eyebrow} title={c.team.title} lead={c.team.lead} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* TESTIMONIALS — featured with portraits + remaining */}
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
            <div className="mb-5 grid gap-5 sm:grid-cols-2">
              {FEATURED_TESTIMONIALS.map((t, i) => (
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

      <CourseFinalCTA finalCta={c.finalCta} />
    </>
  );
}
