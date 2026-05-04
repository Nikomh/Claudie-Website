import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { homeContent } from "@/content/home";

export function NewsletterStripe() {
  const { newsletter } = homeContent;
  return (
    <Section className="py-12 md:py-16">
      <Container>
        <div className="rounded-[var(--radius-md)] bg-anthrazit p-8 text-white shadow-xl md:p-12 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-tuerkis-50">
                Newsletter
              </span>
              <h2 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
                {newsletter.headline}
              </h2>
              <p className="max-w-[52ch] text-sm leading-relaxed text-white/75 md:text-base">
                {newsletter.subline}
              </p>
            </div>
            <div className="lg:justify-self-end">
              <NewsletterForm
                variant="stripe"
                placeholder={newsletter.placeholder}
                cta={newsletter.cta}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
