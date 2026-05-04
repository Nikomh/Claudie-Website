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
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd, buildCourseSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/components/ui/JsonLd";
import { StickyCourseCta } from "@/components/ui/StickyCourseCTA";
import { CourseDates } from "@/components/course/CourseDates";
import { CourseFAQ } from "@/components/course/CourseFAQ";
import { CourseFinalCTA } from "@/components/course/CourseFinalCTA";
import { CourseForSection } from "@/components/course/CourseForSection";
import { CourseModules } from "@/components/course/CourseModules";
import { CourseTrustBar } from "@/components/course/CourseTrustBar";
import { YoutubeEmbed } from "@/components/course/YoutubeEmbed";
import { agilerCoachContent } from "@/content/agilerCoach";
import { cn } from "@/lib/cn";

export function generateMetadata(): Metadata {
  const { meta } = agilerCoachContent;
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
  "/images/agiler-coach/claudia_thonet_ausbildung_next_level_icon.png",
  "/images/agiler-coach/claudia_thonet_agiler_coach_ausbildung_teamentwicklung_icon.png",
  "/images/agiler-coach/claudia_thonet_agiler_coach_ausbildung_figure_pad_icon.png",
  "/images/agiler-coach/claudia_thonet_agiler_coach_ausbildung_methoden_icon.png",
] as const;

const TRAINER_PHOTOS: Record<string, string> = {
  "Claudia Thonet": "/images/agiler-coach/claudia-thonet-agile-consulting-portrait_08_2024_2.jpg",
  "Anja Höhne": "/images/agiler-coach/anja-hoehne-claudia-thonet-beraterin-08-24.jpg",
  "Jonny Kohlhaas": "/images/agiler-coach/jonny-kohlhaas-berater-claudia-thonet-08-24.jpg",
  "Jason Textor": "/images/agiler-coach/jason-textor-claudia-thonet-berater-08-24.jpg",
  "Tjorven Graßnick": "/images/agiler-coach/tjorven_grassnick-berater-claudia-thonet-12-25.jpg",
};

const TESTIMONIAL_PHOTOS: Record<string, string> = {
  "Henrike Karmasin": "/images/agiler-coach/Testimonial_Agile_Coach_Henrike_Karmasin.png",
  "Raphael Bauhofer": "/images/agiler-coach/Testimonial_Agile_Coach_Raphael_Bauhofer.png",
  "Katrin Spahn": "/images/agiler-coach/Testimonial_Agile_Coach_Katrin_Spahn.png",
  "Marek Gawlik": "/images/agiler-coach/Testimonial_Agile_Coach_Marek_Gawlik.png",
  "Natascha Melcher": "/images/agiler-coach/Testimonial_Agile_Coach_Natascha_Melcher.png",
  "Stefanie S. Stürmer": "/images/agiler-coach/Testimonial_Agile_Coach_Stefanie_S_Stuermer.png",
};

export default function AgilerCoachPage() {
  const c = agilerCoachContent;

  const courseJsonLd = buildCourseSchema({
    name: c.meta.title,
    description: c.meta.description,
    url: c.meta.canonical,
    courseMode: "Blended",
  });

  const faqJsonLd = buildFAQSchema(c.faq.items);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Ausbildungen", url: "/ausbildungen" },
    { name: "Agile Coach Ausbildung", url: c.meta.canonical },
  ]);

  return (
    <>
      <JsonLd data={courseJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ label: "Ausbildungen", href: "/ausbildungen" }, { label: "Agile Coach" }]} />
      <StickyCourseCta
        primaryHref="/beratung"
        primaryLabel="Beratung vereinbaren"
        secondaryHref="#termine"
        secondaryLabel="Zu den Terminen"
      />
      {/* HERO */}
      <section aria-label="Agile Coach Ausbildung" className="relative overflow-hidden bg-anthrazit">
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
                {c.hero.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={c.hero.ctaSecondary.href} className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:text-lg">
                <Phone className="h-4 w-4" aria-hidden />
                {c.hero.ctaSecondary.label}
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
              <Image src="/images/agiler-coach/claudia-thonet-leitet-die-ausbildung-zum-agilen-coach.jpg" alt="Claudia Thonet leitet die Ausbildung zum Agile Coach" fill priority sizes="40vw" className="object-cover object-center" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold text-white">Claudia Thonet</p>
                <p className="text-xs text-white/70">Gründerin & Lead-Trainerin</p>
              </div>
            </div>
            <div aria-hidden className="pointer-events-none absolute -bottom-4 -right-5">
              <Image src="/images/agiler-coach/claudia_thonet_ausbildung_100stunden_icon.png" alt="" width={100} height={84} className="drop-shadow-lg" />
            </div>
            <div aria-hidden className="pointer-events-none absolute -top-2 -left-2">
              <Image src="/images/agiler-coach/BDVT_gepruefte_Fortbildung.png" alt="BDVT Geprüfte Fortbildung" width={90} height={45} className="drop-shadow-md rounded" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TRUST BAR */}
      <CourseTrustBar trustBar={c.trustBar} />

      {/* OUTCOMES */}
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
      <Reveal>
        <CourseForSection forWhom={c.forWhom} />
      </Reveal>

      {/* YOUTUBE VIDEO */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <Eyebrow>Schau rein</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">Die Ausbildung in der Praxis</h2>
                <p className="text-base leading-relaxed text-anthrazit-80">
                  Was macht die Agile Coach Ausbildung so besonders? Claudia Thonet erklärt, welche Kompetenzen du entwickelst, wie die Ausbildung abläuft — und warum Praxis vor Theorie der entscheidende Unterschied ist.
                </p>
                <Link href={c.hero.ctaPrimary.href} className="mt-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-tuerkis hover:underline">
                  Jetzt Platz sichern <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <YoutubeEmbed videoId="DGsE2QQZBCU" title="Agile Coach Ausbildung — Claudia Thonet erklärt" />
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* MODULES */}
      <Reveal>
        <CourseModules modules={c.modules} />
      </Reveal>

      {/* IN-ACTION GALLERY */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading eyebrow="Echte Praxis" title="So sieht die Ausbildung aus." lead="Kein PowerPoint, kein Frontalunterricht — Lernen durch echte Fallarbeit und gemeinsames Erleben." />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { src: "/images/agiler-coach/claudia_thonet_ausbildung_gruppe.jpg", alt: "Gruppe beim Workshop der Agile Coach Ausbildung" },
                { src: "/images/agiler-coach/claudia_thonet_ausbildung_methoden.jpg", alt: "Claudia Thonet erklärt den Coaching-Prozess" },
                { src: "/images/agiler-coach/claudia_thonet_ausbildung_besonderheiten.jpg", alt: "Claudia Thonet und Teilnehmer mit Methoden-Toolbox" },
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

      {/* TEAM with real portraits */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading eyebrow={c.team.eyebrow} title={c.team.title} lead={c.team.lead} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
                        <div className={cn("flex h-14 w-14 items-center justify-center rounded-full text-base font-bold", member.avatarColor, member.textColor)} aria-hidden>
                          {member.initials}
                        </div>
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

      {/* TESTIMONIALS with portraits */}
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
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.testimonials.items.map((t, i) => {
                const photo = TESTIMONIAL_PHOTOS[t.name];
                return (
                  <Reveal key={t.name} delay={i * 70}>
                    <article className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-7 shadow-sm">
                      <Quote className="-ml-1 h-7 w-7 text-anthrazit/12" aria-hidden />
                      <p className="flex-1 text-sm leading-relaxed text-anthrazit md:text-base">{`„${t.quote}"`}</p>
                      <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
                        <div className="flex items-center gap-3 min-w-0">
                          {photo ? (
                            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
                              <Image src={photo} alt={t.name} fill sizes="36px" className="object-cover" />
                            </div>
                          ) : null}
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-anthrazit truncate">{t.name}</p>
                            {(t.role ?? t.company) && (
                              <p className="mt-0.5 text-xs text-anthrazit-80 truncate">{[t.role, t.company].filter(Boolean).join(" · ")}</p>
                            )}
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
                );
              })}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <CourseFAQ faq={c.faq} />
      </Reveal>

      {/* INHOUSE */}
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
              {c.inhouse.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </div>

      {/* FINAL CTA */}
      <CourseFinalCTA finalCta={c.finalCta} />
    </>
  );
}
