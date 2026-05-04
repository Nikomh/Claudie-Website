import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function ValuePropBlock() {
  const { valueProp } = homeContent;
  return (
    <Section className="pt-20 pb-8 md:pt-24 md:pb-10">
      <Container>
        <div className="max-w-[640px]">
          <SectionHeading
            eyebrow={valueProp.eyebrow}
            title={valueProp.headline}
            lead={valueProp.body}
          />
        </div>
      </Container>
    </Section>
  );
}
