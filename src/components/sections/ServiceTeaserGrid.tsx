import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { homeContent, type ServiceCard } from "@/content/home";
import { cn } from "@/lib/cn";

const illustrationMap: Record<ServiceCard["iconKey"], string> = {
  graduation: "/images/illustrations/CT_SE02_enableAa.png",
  compass: "/images/illustrations/CT_SE02_steps.png",
  library: "/images/illustrations/SE02_EP01_werkzeug.png",
};

export function ServiceTeaserGrid() {
  const { services } = homeContent;

  return (
    <Section className="py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const imgSrc = illustrationMap[s.iconKey];
            return (
              <Link
                key={s.title}
                href={s.href}
                className={cn(
                  "group relative flex h-full flex-col gap-5 rounded-[var(--radius-md)] border border-border bg-white p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                  s.accent && "border-t-4 border-t-tuerkis",
                )}
              >
                <div aria-hidden className="h-20 w-20">
                  <Image
                    src={imgSrc}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-xl font-semibold text-anthrazit">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-anthrazit-80">
                    {s.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-tuerkis">
                  {s.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
