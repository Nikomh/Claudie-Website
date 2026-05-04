import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const FEATURED = [
  {
    href: "/ausbildungen/ai-leadership-sprint",
    label: "Neu",
    labelColor: "bg-orange-rot text-white",
    title: "AI Leadership Sprint",
    badge: "KI-Kompetenz",
    hours: "2 Tage",
    format: "Online-Sprint",
    group: "< 16 Personen",
    photo: "/images/photos/Master_Class_Claudia_Thonet.jpg",
    icon: "/images/illustrations/CT_Laptop3Star_v2.png",
    description: "In zwei intensiven Tagen von KI-Skepsis zu KI-Kompetenz — mit konkreten Tools, Live-Demos und einem persönlichen AI-Aktionsplan.",
    highlight: true,
  },
  {
    href: "/beratung/teamentwicklung",
    label: "Beliebt",
    labelColor: "bg-anthrazit text-white",
    title: "High-Performing Teams",
    badge: "Masterclass",
    hours: "2–3 Tage",
    format: "Präsenz & Online",
    group: "< 14 Personen",
    photo: "/images/photos/Teamarbeit1_030124.jpg",
    icon: "/images/illustrations/SE02_EP01_team.png",
    description: "Was echte Hochleistungsteams von funktionierenden unterscheidet — und wie du hybride Teams in High Performer verwandelst.",
    highlight: false,
  },
  {
    href: "/agile-ausbildungen/veraenderung-gestalten",
    label: "Intensiv",
    labelColor: "bg-tuerkis text-white",
    title: "Veränderung gestalten",
    badge: "BDVT-Zertifiziert",
    hours: "3 Module",
    format: "Präsenz",
    group: "< 14 Personen",
    photo: "/images/veraenderung-gestalten/Veraenderung_gestalten_Claudia_Thonet.jpg",
    icon: "/images/illustrations/CT_SE02_steps.png",
    description: "Change wirklich gestalten — mit Haltung, Methoden und einem Repertoire, das Veränderungsprozesse nachhaltig verankert.",
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
              <Eyebrow>Neue Formate & Highlights</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold text-anthrazit md:text-3xl">
                Unsere drei neuen Formate
              </h2>
            </div>
            <Link
              href="/ausbildungen"
              className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-tuerkis hover:underline md:self-end"
            >
              Alle Formate ansehen <ArrowRight className="h-4 w-4" aria-hidden />
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
