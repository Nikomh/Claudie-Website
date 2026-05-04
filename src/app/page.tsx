import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, organizationSchema } from "@/components/ui/JsonLd";
import { AngebotsFinder } from "@/components/sections/AngebotsFinder";
import { BuecherSection } from "@/components/sections/BuecherSection";
import { ClaudiaTeaserSection } from "@/components/sections/ClaudiaTeaserSection";
import { CourseTeaserList } from "@/components/sections/CourseTeaserList";
import { FeaturedAusbildungen } from "@/components/sections/FeaturedAusbildungen";
import { FinalCTABanner } from "@/components/sections/FinalCTABanner";
import { NewsletterStripe } from "@/components/sections/NewsletterStripe";
import { ReferenzLogoWall } from "@/components/sections/ReferenzLogoWall";
import { ServiceTeaserGrid } from "@/components/sections/ServiceTeaserGrid";
import { SocialProofStripe } from "@/components/sections/SocialProofStripe";
import { StageHero } from "@/components/sections/StageHero";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { TrustBadgeStrip } from "@/components/sections/TrustBadgeStrip";
import { BlogTeaserGrid } from "@/components/sections/BlogTeaserGrid";

const META_DESCRIPTION =
  "BDVT-zertifizierte agile Ausbildungen, Coaching, Beratung und Inhouse-Trainings. Agile Coach, OKR Coach, Facilitator, Agile Führung — für Coaches, HR und Organisationen im DACH-Raum.";

export function generateMetadata(): Metadata {
  return {
    title: "Claudia Thonet — Agile Ausbildungen, Coaching & Beratung",
    description: META_DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: "Claudia Thonet",
      title: "Claudia Thonet — Agile Ausbildungen, Coaching & Beratung",
      description: META_DESCRIPTION,
      images: [{ url: "/images/photos/_LFP4451.jpg", width: 1200, height: 1500, alt: "Claudia Thonet" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Claudia Thonet — Agile Ausbildungen, Coaching & Beratung",
      description: META_DESCRIPTION,
      images: ["/images/photos/_LFP4451.jpg"],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />

      {/* 1 · Hero — Positionierung + 2 CTAs */}
      <StageHero />

      {/* 2 · Sozialer Beweis — Kundennamen scrollen, Google-Rating */}
      <Reveal>
        <SocialProofStripe />
      </Reveal>

      {/* 3 · Angebotsfinder — "Was bringt dich hierher?" */}
      <Reveal>
        <AngebotsFinder />
      </Reveal>

      {/* 4 · Service-Bereiche — 3 Karten: Ausbildungen / Consulting / Toolbox */}
      <Reveal>
        <ServiceTeaserGrid />
      </Reveal>

      {/* 5 · Top 3 Ausbildungen mit echten Fotos */}
      <Reveal>
        <FeaturedAusbildungen />
      </Reveal>

      {/* 6 · Nächste Starttermine — tabellarisch mit Tabs */}
      <Reveal>
        <CourseTeaserList />
      </Reveal>

      {/* 7 · Claudia Thonet — persönliches Vertrauen */}
      <Reveal>
        <ClaudiaTeaserSection />
      </Reveal>

      {/* 8 · Testimonials — Karussell mit 14 echten Bewertungen */}
      <Reveal>
        <TestimonialCarousel />
      </Reveal>

      {/* 9 · 4 Bücher + Verlagslogos */}
      <Reveal>
        <BuecherSection />
      </Reveal>

      {/* 10 · Kundenlogos real + Presselogos real */}
      <Reveal>
        <ReferenzLogoWall />
      </Reveal>

      {/* 11 · Trust Badges: BDVT / ECA / Bildungsurlaub */}
      <Reveal>
        <TrustBadgeStrip />
      </Reveal>

      {/* 12 · Newsletter */}
      <Reveal>
        <NewsletterStripe />
      </Reveal>

      {/* 13 · Wissen / Blog-Teaser */}
      <Reveal>
        <BlogTeaserGrid />
      </Reveal>

      {/* 14 · Abschluss-CTA */}
      <Reveal>
        <FinalCTABanner />
      </Reveal>
    </>
  );
}
