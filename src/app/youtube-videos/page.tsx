import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PlayCircle, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterStripe } from "@/components/sections/NewsletterStripe";

export const metadata: Metadata = {
  title: "YouTube-Videos — Claudia Thonet",
  description: "Videos und Webinar-Aufzeichnungen zu Agilität, Führung, Teamentwicklung und Transformation auf dem YouTube-Kanal von Claudia Thonet.",
  alternates: { canonical: "/youtube-videos/" },
};

const PLAYLISTS = [
  {
    title: "Agile Führung",
    description: "Führung neu denken — Videos zu lateraler Führung, Selbstorganisation und dem Führungsalltag in agilen Organisationen.",
    count: "Mehrere Videos",
    href: "https://www.youtube.com/@claudiathonet",
  },
  {
    title: "Teamentwicklung & Retrospektiven",
    description: "Methoden für High-Performing-Teams, Retrospektiven-Formate und Tools für bessere Zusammenarbeit.",
    count: "Mehrere Videos",
    href: "https://www.youtube.com/@claudiathonet",
  },
  {
    title: "Agile Methoden & Frameworks",
    description: "Scrum, Kanban, OKRs, Design Thinking — verständlich erklärt und direkt auf die Praxis übertragen.",
    count: "Mehrere Videos",
    href: "https://www.youtube.com/@claudiathonet",
  },
  {
    title: "Webinar-Aufzeichnungen",
    description: "Alle vergangenen kostenlosen Webinare zu Agilität, Transformation und Führung — auf Abruf.",
    count: "Wachsendes Archiv",
    href: "https://www.youtube.com/@claudiathonet",
  },
];

export default function YoutubeVideosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-[680px]">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Wissen & Medien</Eyebrow>
              </div>
            </Reveal>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Wissen, das</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">du siehst.</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">Videos & Webinare.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Auf unserem YouTube-Kanal findest du Aufzeichnungen vergangener Webinare, Erklärvideos zu agilen Methoden und Impulse zu Führung, Teams und Transformation — kostenlos und auf Abruf.
              </p>
            </Reveal>
            <Reveal delay={460} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://www.youtube.com/@claudiathonet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                <PlayCircle className="h-5 w-5" aria-hidden />
                Zum YouTube-Kanal
                <ExternalLink className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/webinare"
                className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                Nächste Live-Webinare
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Playlists */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Themen"
              title="Was dich erwartet"
              lead="Videos zu allen Kernthemen rund um Agilität, Führung und Transformation."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PLAYLISTS.map((playlist, i) => (
                <Reveal key={playlist.title} delay={i * 70}>
                  <Link
                    href={playlist.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm transition-all hover:border-tuerkis/40 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-tuerkis/10">
                        <PlayCircle className="h-5 w-5 text-tuerkis" aria-hidden />
                      </div>
                      <span className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs text-anthrazit-80">
                        {playlist.count}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-anthrazit group-hover:text-tuerkis transition-colors">
                        {playlist.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-anthrazit-80">
                        {playlist.description}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-tuerkis">
                      Videos ansehen
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Live webinars CTA */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="flex flex-col items-center gap-6 rounded-[var(--radius-lg)] border border-border bg-white px-8 py-12 text-center shadow-sm md:px-16">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tuerkis/10">
                <PlayCircle className="h-7 w-7 text-tuerkis" aria-hidden />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-anthrazit">Lieber live dabei sein?</h2>
                <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-anthrazit-80">
                  Unsere kostenlosen Live-Webinare finden regelmäßig statt — mit Q&A und direktem Austausch mit Claudia Thonet und Team.
                </p>
              </div>
              <Link
                href="/webinare"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80"
              >
                Nächste Webinare ansehen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Container>
        </Section>
      </Reveal>

      <Reveal>
        <NewsletterStripe />
      </Reveal>
    </>
  );
}
