import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";

export function BlogTeaserGrid() {
  const { blogTeasers } = homeContent;
  return (
    <Section className="py-20">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Aus der Toolbox"
            title="Frische Methoden, Tools und Impulse"
            lead="Praxis-Inhalte für Coaches, Führungskräfte und Teams."
          />
          <Link
            href="/toolbox"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-tuerkis hover:underline md:self-end"
          >
            Alle Beiträge
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogTeasers.map((post) => (
            <Link
              key={post.slug}
              href={post.slug === "agile-methoden" ? "/agile-methoden" : "/toolbox"}
              className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <div className="relative aspect-video overflow-hidden bg-bg-section">
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs text-anthrazit-80">
                  <Badge variant="outline" size="sm">
                    {post.cluster}
                  </Badge>
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden />
                    {post.readingMin} min
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-anthrazit">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-tuerkis">
                  Lesen
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
