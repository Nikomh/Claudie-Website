import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const REFERENZ_LOGOS = [
  { src: "/images/brand-logos/referenzen/telekom_logo.png", alt: "Telekom" },
  { src: "/images/brand-logos/referenzen/hm_logo.png", alt: "H&M" },
  { src: "/images/brand-logos/referenzen/daiichi_sankyo_logo.png", alt: "Daiichi Sankyo" },
  { src: "/images/brand-logos/referenzen/danone_logo.png", alt: "Danone" },
  { src: "/images/brand-logos/referenzen/sparda_bw_logo.png", alt: "Sparda Bank BW" },
  { src: "/images/brand-logos/referenzen/hoffmann_group_logo.png", alt: "Hoffmann Group" },
  { src: "/images/brand-logos/referenzen/tesvolt_logo.png", alt: "Tesvolt" },
  { src: "/images/brand-logos/referenzen/ber_logo.png", alt: "Flughafen BER" },
  { src: "/images/brand-logos/referenzen/opitz_consulting_logo.png", alt: "Opitz Consulting" },
  { src: "/images/brand-logos/referenzen/comeco_logo.png", alt: "Comeco" },
  { src: "/images/brand-logos/referenzen/monster_logo.png", alt: "Monster" },
  { src: "/images/brand-logos/referenzen/msd_logo.png", alt: "MSD" },
  { src: "/images/brand-logos/referenzen/awo_sachsen_west_logo.png", alt: "AWO Sachsen-West" },
];

const PRESSE_LOGOS = [
  { src: "/images/brand-logos/presse/slider_managerSeminare.png", alt: "managerSeminare" },
  { src: "/images/brand-logos/presse/slider_handelsblatt.png", alt: "Handelsblatt" },
  { src: "/images/brand-logos/presse/slider_springer_professional.png", alt: "Springer Professional" },
  { src: "/images/brand-logos/presse/slider_training_aktuell.png", alt: "training aktuell" },
  { src: "/images/brand-logos/presse/slider_vertriebszeitung.png", alt: "Vertriebszeitung" },
];

export function ReferenzLogoWall() {
  return (
    <>
      {/* Client logos */}
      <Section bg="section" className="py-12 md:py-16">
        <Container>
          <Reveal>
            <div className="mb-8 text-center">
              <Eyebrow>Referenzen</Eyebrow>
              <p className="mt-1 text-sm text-anthrazit-80">Unternehmen, die uns vertrauen</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="grid grid-cols-3 items-center gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7" aria-label="Kundenreferenzen">
              {REFERENZ_LOGOS.map((logo) => (
                <li key={logo.alt} className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className="h-8 w-auto object-contain opacity-55 grayscale transition-all duration-200 hover:opacity-90 hover:grayscale-0 md:h-10"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* Press logos */}
      <div className="border-y border-border bg-white py-8">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-anthrazit-80/60">Erwähnt in</p>
              <ul className="flex flex-wrap items-center justify-center gap-6 md:justify-start" aria-label="Presseerwähnungen">
                {PRESSE_LOGOS.map((logo) => (
                  <li key={logo.alt}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={140}
                      height={40}
                      className="h-7 w-auto object-contain opacity-50 grayscale transition-all duration-200 hover:opacity-80 hover:grayscale-0 md:h-8"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
