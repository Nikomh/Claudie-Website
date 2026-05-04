import { Star } from "lucide-react";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/cn";

export function SocialProofStripe() {
  const { socialProof } = homeContent;
  const logos = socialProof.clientLogos;

  return (
    <section
      aria-label="Kundenstimmen-Übersicht und Referenzen"
      className="border-y border-border bg-white"
    >
      <div className="flex flex-col items-center gap-3 px-5 py-4 md:flex-row md:gap-8 md:py-0 md:px-8 md:h-[64px]">
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-orange-rot text-orange-rot"
              />
            ))}
          </div>
          <span className="text-sm text-anthrazit">
            <span className="font-semibold">
              {socialProof.rating.toString().replace(".", ",")} / 5
            </span>{" "}
            <span className="text-anthrazit-80">
              · {socialProof.source}
            </span>
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent"
          />
          <ul
            className={cn(
              "flex w-max items-center gap-10 motion-safe:animate-marquee motion-reduce:flex-wrap motion-reduce:justify-center",
            )}
            aria-label="Kundenreferenzen"
          >
            {[...logos, ...logos].map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= logos.length || undefined}
                className="shrink-0 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-anthrazit-80/70"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
