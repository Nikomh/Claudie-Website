import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterStripe } from "@/components/sections/NewsletterStripe";

export const metadata: Metadata = {
  title: "Veröffentlichungen & Bücher — Claudia Thonet",
  description:
    "Bücher und Fachbeiträge von Claudia Thonet: Agiler Coach, Agile Meetings, Agiler Vertrieb, Agiler Kulturwandel — plus Artikel in managerSeminare und der Vertriebszeitung.",
  alternates: { canonical: "/veroeffentlichungen/" },
};

const BOOKS = [
  {
    id: "agiler-coach",
    title: "Agiler Coach: Skills und Tools",
    authors: "Claudia Thonet",
    publisher: "managerSeminare",
    description:
      "Kompetenzsammlung für die Team- und Mitarbeiterentwicklung auf dem Weg zur agilen Transformation. Mit konkreten Tools, Methoden und Fallbeispielen aus der Praxis.",
    tags: ["Coaching", "Agilität", "Teamentwicklung"],
    href: "https://www.managerseminare.de",
  },
  {
    id: "agile-meetings",
    title: "Arbeitsbuch: Agile Meetings und Workshops",
    authors: "Claudia Thonet & Marc Schmetkamp",
    publisher: "Vahlen",
    description:
      "Arbeitsbuch mit Grafiken und Flipcharts für effizientere Zusammenarbeit. Direkt einsetzbare Formate für Meetings, Retrospektiven und Workshops.",
    tags: ["Meetings", "Workshops", "Moderation"],
    href: "https://www.vahlen.de",
  },
  {
    id: "agiler-vertrieb",
    title: "Der agile Vertrieb",
    authors: "Claudia Thonet",
    publisher: "Vahlen",
    description:
      "Wie du flexible, schnelle Vertriebsteams für digital-affine Kunden aufbaust — mit agilen Methoden, die wirklich im Vertriebsalltag funktionieren.",
    tags: ["Vertrieb", "Agilität", "Kundenzentriertheit"],
    href: "https://www.vahlen.de",
  },
  {
    id: "agiler-kulturwandel",
    title: "Der agile Kulturwandel",
    authors: "Claudia Thonet & Svenja Hofert",
    publisher: "Vahlen",
    description:
      "33 nachhaltige Lösungen, wie Veränderungen in Organisationen wirklich gelingen. Ein praxisorientierter Leitfaden für Führungskräfte und Change-Begleiter:innen.",
    tags: ["Kulturwandel", "Change", "Transformation"],
    href: "https://www.vahlen.de",
  },
];

const MAGAZINE_ARTICLES = [
  {
    title: "Systemgerecht transformieren — Anschlussfähig agil",
    publication: "managerSeminare",
    date: "April 2024",
    description:
      "Systemisches Bewusstsein und agiles Denken als Grundlage für erfolgreiche Transformation.",
  },
  {
    title: "Daily Dilemmata agiler Führung",
    publication: "managerSeminare",
    date: "März 2023",
    description:
      "Sechs Dilemmata, die agile Führungskräfte in selbstorganisierten Teams täglich balancieren müssen.",
  },
];

const TRADE_ARTICLES = [
  { title: "Der Agile Sales Prozess", publication: "Vertriebszeitung" },
  { title: "So erstellen Sie eine Customer Journey Map", publication: "Vertriebszeitung" },
  {
    title: "So messen Sie die Vertriebs-Performance im agilen System",
    publication: "Vertriebszeitung",
  },
  { title: "Das Sales Board für den agileren Vertrieb", publication: "Vertriebszeitung" },
];

export default function VeroeffentlichungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative flex min-h-[480px] flex-col justify-center gap-6 py-20 md:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
              <Eyebrow className="text-tuerkis-50">Wissen & Publikationen</Eyebrow>
            </div>
          </Reveal>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
            <Reveal as="span" className="block text-tuerkis">
              Bücher.
            </Reveal>
            <Reveal as="span" delay={120} className="block text-tuerkis">
              Artikel.
            </Reveal>
            <Reveal as="span" delay={240} className="block text-white">
              Fachwissen.
            </Reveal>
          </h1>
          <Reveal delay={360}>
            <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
              Claudia Thonet und ihr Team teilen ihr Wissen in Büchern, Fachmagazinen und
              Online-Medien — praxisnah, fundiert und direkt anwendbar.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Books */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Bücher"
              title="Vier Bücher aus der Praxis"
              lead="Fundiertes Wissen für Coaches, Führungskräfte und alle, die Transformation gestalten."
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {BOOKS.map((book, i) => (
              <Reveal key={book.id} delay={i * 80}>
                <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-border bg-white shadow-sm overflow-hidden">
                  {/* Tuerkis left border accent */}
                  <div className="flex flex-1 flex-col gap-4 border-l-4 border-tuerkis p-6">
                    {/* Icon + publisher */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                        <BookOpen className="h-5 w-5 text-tuerkis" aria-hidden />
                      </div>
                      <span className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs font-semibold text-anthrazit-80">
                        {book.publisher}
                      </span>
                    </div>
                    {/* Title & authors */}
                    <div>
                      <h3 className="text-lg font-bold leading-snug text-anthrazit">
                        {book.title}
                      </h3>
                      <p className="mt-1 text-sm text-anthrazit-80">{book.authors}</p>
                    </div>
                    {/* Description */}
                    <p className="text-sm leading-relaxed text-anthrazit-80">{book.description}</p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {book.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-tuerkis/10 px-2.5 py-0.5 text-xs font-medium text-tuerkis"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* CTA */}
                    <Link
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-tuerkis transition-colors hover:text-tuerkis-80"
                    >
                      Jetzt kaufen <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Magazine articles */}
      <Section bg="section">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Fachmagazine"
              title="Artikel in Fachmagazinen"
              lead="Vertiefende Beiträge zu Führung, Transformation und Agilität in führenden Fachmagazinen."
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {MAGAZINE_ARTICLES.map((article, i) => (
              <Reveal key={article.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
                  {/* Publication badge & date */}
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-tuerkis/10 px-2.5 py-0.5 text-xs font-semibold text-tuerkis">
                      {article.publication}
                    </span>
                    <span className="text-xs text-anthrazit-80">{article.date}</span>
                  </div>
                  {/* Icon + title */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-bg-section">
                      <FileText className="h-4 w-4 text-anthrazit-80" aria-hidden />
                    </div>
                    <h3 className="font-bold leading-snug text-anthrazit">{article.title}</h3>
                  </div>
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-anthrazit-80">{article.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trade articles */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Fachpresse"
              title="Artikel in der Vertriebszeitung"
              lead="Praxisnahe Beiträge zu agilen Methoden im Vertriebskontext."
              className="mb-10"
            />
          </Reveal>
          <div className="flex flex-col divide-y divide-border rounded-[var(--radius-md)] border border-border bg-white shadow-sm overflow-hidden">
            {TRADE_ARTICLES.map((article, i) => (
              <Reveal key={article.title} delay={i * 60}>
                <div className="flex items-center gap-4 px-6 py-5 md:px-8">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis/10">
                    <FileText className="h-4 w-4 text-tuerkis" aria-hidden />
                  </div>
                  <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-anthrazit leading-snug">{article.title}</p>
                    <span className="shrink-0 rounded-full bg-bg-section px-2.5 py-0.5 text-xs font-semibold text-anthrazit-80">
                      {article.publication}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <NewsletterStripe />
    </>
  );
}
