import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import type { CourseHeroData } from "@/content/courseTypes";
import { cn } from "@/lib/cn";

const LINE_COLORS = ["text-white", "text-tuerkis", "text-tuerkis-50"] as const;

export function CourseHero({ hero }: { hero: CourseHeroData }) {

  return (
    <section aria-label="Kurs-Einführung" className="relative overflow-hidden bg-anthrazit">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(20,180,190,0.07)_0%,transparent_70%)]"
      />
      <Container className="relative grid min-h-[640px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16">

        {/* Left column */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
              <Eyebrow className="text-tuerkis-50">{hero.eyebrow}</Eyebrow>
            </div>
          </Reveal>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
            {hero.headlineLines.map((line, i) => (
              <Reveal
                as="span"
                key={line}
                delay={i * 120}
                className={cn("block", LINE_COLORS[i] ?? "text-white")}
              >
                {line}
              </Reveal>
            ))}
          </h1>

          <Reveal delay={450}>
            <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
              {hero.subline}
            </p>
          </Reveal>

          <Reveal delay={550} className="flex flex-wrap gap-3 pt-1">
            <Link
              href={hero.ctaPrimary.href}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "min-h-[44px]")}
            >
              {hero.ctaPrimary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all duration-150 hover:border-white/50 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:text-lg"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {hero.ctaSecondary.label}
            </Link>
          </Reveal>
        </div>

        {/* Right column: stat card */}
        <Reveal delay={300} className="hidden lg:block">
          <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            {/* Illustration + BDVT badge */}
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-auto items-center justify-center rounded-full bg-tuerkis/20 px-3 ring-1 ring-tuerkis/40">
                  <span className="text-xs font-bold tracking-wide text-tuerkis">BDVT</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">BDVT-Zertifiziert</p>
                  <p className="text-xs text-white/45">Bildungsurlaub anerkannt · Berlin</p>
                </div>
              </div>
              <Image
                src="/images/illustrations/CT_SE02_100Stunden_v2.png"
                alt=""
                width={72}
                height={72}
                aria-hidden
                className="shrink-0 drop-shadow-md"
              />
            </div>
            <div className="flex flex-col gap-6">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-bold text-tuerkis">{s.value}</p>
                  <p className="mt-1 text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
