import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const FEATURED = [
  {
    href: "/agile-ausbildungen/agiler-coach",
    label: "Flagship",
    labelColor: "bg-tuerkis text-white",
    title: "Agile Coach Ausbildung",
    badge: "BDVT-Zertifiziert",
    hours: "100+ Stunden",
    format: "5 Module",
    group: "< 14 Personen",
    photo: "/images/agiler-coach/claudia-thonet-leitet-die-ausbildung-zum-agilen-coach.jpg",
    icon: "/images/icons/ausbildung-agiler-coach-claudia-thonet-coaching-training-icon-transparent.png",
    description: "Die umfassendste agile Ausbildung — mit 5 Expert:innen, Supervision und echten Praxisprojekten. BDVT-anerkannt, Bildungsurlaub in Berlin.",
    highlight: true,
  },
  {
    href: "/agile-ausbildungen/agiler-facilitator",
    label: "Beliebt",
    labelColor: "bg-anthrazit text-white",
    title: "Agile Facilitator Ausbildung",
    badge: "BDVT-Zertifiziert",
    hours: "50+ Stunden",
    format: "3 Module",
    group: "< 14 Personen",
    photo: "/images/agiler-facilitator/claudia-thonet-im-trainng-zu-agilen-werten-11-23.jpg",
    icon: "/images/icons/ausbildung-agiler-moderator-claudia-thonet-coaching-training-icon-transparent.png",
    description: "Workshops gestalten, Meetings transformieren, Formate entwickeln — 50+ Stunden praxisnahes Training.",
    highlight: false,
  },
  {
    href: "/agile-ausbildungen/okr-coach",
    label: "Intensiv",
    labelColor: "bg-orange-rot text-white",
    title: "OKR Coach Ausbildung",
    badge: "BDVT + ECA",
    hours: "25 Stunden",
    format: "3 Tage",
    group: "< 12 Personen",
    photo: "/images/okr-coach/jonny-kohlhaas-okr-coach-ausbildung-claudia-thonet.jpg",
    icon: "/images/agiler-facilitator/claudia_thonet_agiler_facilitator_50_stunden_icon.png",
    description: "Strategie in Ergebnisse überführen — OKRs einführen, coachen und nachhaltig verankern. In 3 intensiven Tagen.",
    highlight: false,
  },
];

export function FeaturedAusbildungen() {
  return (
    <Section bg="section" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Zertifizierte Ausbildungen</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold text-anthrazit md:text-3xl">
                Die drei meistgebuchten Formate
              </h2>
            </div>
            <Link
              href="/ausbildungen"
              className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-tuerkis hover:underline md:self-end"
            >
              Alle Ausbildungen ansehen <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {FEATURED.map((course, i) => (
            <Reveal key={course.href} delay={i * 80}>
              <Link
                href={course.href}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2"
              >
                {/* Photo */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={course.photo}
                    alt={course.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-anthrazit/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${course.labelColor}`}>
                      {course.label}
                    </span>
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-anthrazit">
                      {course.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start gap-3">
                    <Image src={course.icon} alt="" width={36} height={36} className="shrink-0 object-contain mt-0.5" />
                    <h3 className="text-lg font-bold leading-snug text-anthrazit">{course.title}</h3>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-anthrazit-80">{course.description}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 border-t border-border pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-anthrazit-80">
                      <Clock className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                      {course.hours}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-anthrazit-80">
                      <Award className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                      {course.format}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-anthrazit-80">
                      <Users className="h-3.5 w-3.5 text-tuerkis" aria-hidden />
                      {course.group}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-tuerkis group-hover:gap-2.5 transition-all duration-200">
                    Mehr erfahren <ArrowRight className="h-4 w-4" aria-hidden />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
