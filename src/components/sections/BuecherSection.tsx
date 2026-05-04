import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const BOOKS = [
  {
    title: "Agiler Coach: Skills und Tools",
    publisher: "managerSeminare",
    description: "Kompetenzsammlung für die Team- und Mitarbeiterentwicklung auf dem Weg zur agilen Transformation.",
  },
  {
    title: "Agile Meetings und Workshops",
    publisher: "Vahlen",
    description: "Arbeitsbuch mit Grafiken und Flipcharts für effizientere Zusammenarbeit in Meetings und Workshops.",
  },
  {
    title: "Der agile Vertrieb",
    publisher: "Vahlen",
    description: "Wie du flexible, schnelle Vertriebsteams für digital-affine Kunden aufbaust.",
  },
  {
    title: "Der agile Kulturwandel",
    publisher: "Vahlen",
    description: "33 nachhaltige Lösungen, wie Veränderungen in Organisationen wirklich gelingen.",
  },
];

export function BuecherSection() {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* Book image */}
          <Reveal>
            <div className="relative flex items-center justify-center">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-tuerkis/8 blur-3xl" />
              <Image
                src="/images/main/4_Buecher_3D_11_2025_1.png"
                alt="Die vier Bücher von Claudia Thonet"
                width={540}
                height={400}
                className="w-full max-w-md drop-shadow-2xl lg:max-w-none"
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <div>
                <Eyebrow>Bücher & Expertise</Eyebrow>
                <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  4 Bücher. Echte Praxistiefe.
                </h2>
                <p className="mt-3 text-base leading-relaxed text-anthrazit-80">
                  Claudia Thonet ist Autorin von vier Fachbüchern zu Agilität, Coaching, Meetings und Kulturwandel — erschienen bei Vahlen und managerSeminare. Bücher, die in der Praxis entstanden sind.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {BOOKS.map((book) => (
                  <div key={book.title} className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white p-4 shadow-sm">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-anthrazit">{book.title}</p>
                      <p className="mt-0.5 text-xs text-anthrazit-80/70">{book.publisher}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/veroeffentlichungen"
                className="inline-flex items-center gap-2 self-start rounded-[var(--radius-md)] border-2 border-tuerkis px-6 py-3 text-sm font-semibold text-tuerkis transition-all hover:bg-tuerkis hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis"
              >
                Alle Veröffentlichungen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
