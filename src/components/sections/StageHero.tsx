import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { HeroParallax } from "@/components/sections/HeroParallax";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/cn";

const HEADLINE_COLORS = ["text-anthrazit", "text-tuerkis", "text-tuerkis"];

export function StageHero() {
  const { hero } = homeContent;

  return (
    <section
      aria-label="Intro"
      className="relative overflow-hidden bg-tuerkis-50/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-tuerkis-50)_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_left,_var(--color-bg)_0%,_transparent_60%)]"
      />
      <Container className="grid min-h-[600px] items-center gap-10 py-16 md:min-h-[88vh] md:py-24 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div className="flex flex-col gap-6 lg:gap-8">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
            {hero.headlineLines.map((line, i) => (
              <Reveal
                as="span"
                key={line}
                delay={i * 100}
                className={cn("block", HEADLINE_COLORS[i] ?? "text-anthrazit")}
              >
                {line}
              </Reveal>
            ))}
          </h1>
          <Reveal delay={400}>
            <p className="max-w-[52ch] text-lg leading-relaxed text-anthrazit-80 md:text-xl">
              {hero.subline}
            </p>
          </Reveal>
          <Reveal delay={500} className="flex flex-wrap gap-3 pt-2">
            <Link
              href={hero.ctaPrimary.href}
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "min-h-[44px]",
              )}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "min-h-[44px]",
              )}
            >
              {hero.ctaSecondary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={600}>
            <p className="text-sm text-anthrazit-80">
              <span className="font-semibold text-anthrazit">
                4,9 / 5 Sterne
              </span>{" "}
              · 120+ Bewertungen auf Google
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <HeroParallax intensity={0.06}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl ring-1 ring-tuerkis/20 lg:max-w-none">
              <Image
                src={hero.portraitImage}
                alt={hero.portraitAlt}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-anthrazit/15 via-transparent to-transparent mix-blend-multiply"
              />
            </div>
          </HeroParallax>

          {/* Floating illustration badges */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-4 -left-6 hidden lg:block"
          >
            <Image
              src="/images/illustrations/CT_SE02_Leader.png"
              alt=""
              width={110}
              height={130}
              className="drop-shadow-lg"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-4 -right-6 hidden lg:block"
          >
            <Image
              src="/images/illustrations/CT_SE02_25years_v2.png"
              alt=""
              width={96}
              height={72}
              className="drop-shadow-md"
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -left-4 hidden h-24 w-24 rounded-full bg-orange-rot/15 blur-2xl md:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-8 -right-4 hidden h-32 w-32 rounded-full bg-tuerkis/25 blur-3xl md:block"
          />
        </div>
      </Container>
    </section>
  );
}
