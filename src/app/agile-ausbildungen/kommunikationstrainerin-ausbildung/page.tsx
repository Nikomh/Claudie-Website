import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { CourseDates } from "@/components/course/CourseDates";
import { CourseFAQ } from "@/components/course/CourseFAQ";
import { CourseFinalCTA } from "@/components/course/CourseFinalCTA";
import { CourseForSection } from "@/components/course/CourseForSection";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseInhouse } from "@/components/course/CourseInhouse";
import { CourseModules } from "@/components/course/CourseModules";
import { CourseOutcomes } from "@/components/course/CourseOutcomes";
import { CourseTeam } from "@/components/course/CourseTeam";
import { CourseTestimonials } from "@/components/course/CourseTestimonials";
import { CourseTrustBar } from "@/components/course/CourseTrustBar";
import { kommunikationstrainerinContent } from "@/content/kommunikationstrainerin";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyCourseCta } from "@/components/ui/StickyCourseCTA";

export function generateMetadata(): Metadata {
  const { meta } = kommunikationstrainerinContent;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: "Claudia Thonet",
      title: `${meta.title} · Claudia Thonet`,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} · Claudia Thonet`,
      description: meta.description,
    },
  };
}

export default function KommunikationstrainerinPage() {
  const c = kommunikationstrainerinContent;
  return (
    <>
      <Breadcrumbs items={[{ label: "Ausbildungen", href: "/ausbildungen" }, { label: "Kommunikationstrainerin" }]} />
      <StickyCourseCta primaryHref="/beratung" primaryLabel="Beratung vereinbaren" secondaryHref="#termine" secondaryLabel="Zu den Terminen" />
      <CourseHero hero={c.hero} />
      <CourseTrustBar trustBar={c.trustBar} />
      <Reveal>
        <CourseOutcomes outcomes={c.outcomes} />
      </Reveal>
      <Reveal>
        <CourseForSection forWhom={c.forWhom} />
      </Reveal>
      <Reveal>
        <CourseModules modules={c.modules} />
      </Reveal>
      <CourseDates dates={c.dates} />
      <Reveal>
        <CourseTeam team={c.team} />
      </Reveal>
      <Reveal>
        <CourseTestimonials testimonials={c.testimonials} />
      </Reveal>
      <Reveal>
        <CourseFAQ faq={c.faq} />
      </Reveal>
      <CourseInhouse inhouse={c.inhouse} />
      <CourseFinalCTA finalCta={c.finalCta} />
    </>
  );
}
