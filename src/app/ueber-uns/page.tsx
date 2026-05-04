import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Über uns — Team · Claudia Thonet",
  description: "Das Team hinter Claudia Thonet Agile Consulting: Berater:innen, Trainer:innen und Expert:innen für agile Transformation, Führung und Teamentwicklung.",
  alternates: { canonical: "/ueber-uns/" },
};

const VALUES = [
  {
    title: "Praxis vor Theorie",
    body: "Wir lehren nichts, was wir nicht selbst täglich in Organisationen erleben. Jede Methode, jedes Format, jedes Tool kommt aus echter Projektarbeit.",
  },
  {
    title: "Menschen statt Systeme",
    body: "Agilität ist keine Methode — sie ist eine Haltung. Wir begleiten Menschen durch echten Wandel, nicht durch Methodenoptimierungen.",
  },
  {
    title: "Wirkung statt Beschäftigung",
    body: "Wir messen unsere Arbeit an den Ergebnissen unserer Kund:innen. Trainingsstunden, Zertifikate und Slides sind Mittel zum Zweck — nicht der Zweck.",
  },
  {
    title: "Lernen auf Augenhöhe",
    body: "In unseren Ausbildungen und Projekten arbeiten wir partnerschaftlich. Hierarchien helfen beim Lernen nicht — echte Auseinandersetzung schon.",
  },
];

const CORE_TEAM = [
  {
    name: "Claudia Thonet",
    initials: "CT",
    avatarColor: "bg-tuerkis",
    textColor: "text-white",
    role: "Gründerin & Geschäftsführerin",
    focus: ["Agile Transformation", "Agile Führung", "Teams"],
    bio: "Teamdenken und Agilität zu fördern ist mein Bestreben als Beraterin, Trainerin und Autorin. Seit über 15 Jahren begleite ich Organisationen durch echten Wandel — mit Methoden, die wirken, und einer Haltung, die trägt.",
    photo: "/images/agiler-coach/claudia-thonet-agile-consulting-portrait_08_2024_2.jpg",
    phone: "+49 (0)179 – 3946791",
    email: "info@claudiathonet.de",
  },
  {
    name: "Jonny Kohlhaas",
    initials: "JK",
    avatarColor: "bg-tuerkis-80",
    textColor: "text-white",
    role: "Berater & Trainer",
    focus: ["Strategieumsetzung", "OKRs", "Retrospektiven"],
    bio: "Spezialisiert darauf, Strategie im Arbeitsalltag wirklich wirksam werden zu lassen. Verbindet OKRs mit Team-Retrospektiven zu einem konsistenten Umsetzungs-System.",
    photo: "/images/agiler-coach/jonny-kohlhaas-berater-claudia-thonet-08-24.jpg",
    phone: "+49 (0)151 – 29548080",
    email: "info@claudiathonet.de",
  },
  {
    name: "Nikolay Huse",
    initials: "NH",
    avatarColor: "bg-anthrazit",
    textColor: "text-white",
    role: "Berater",
    focus: ["KI-Strategie & Transformation", "Agentic Workflows", "Change Architecture"],
    bio: "AI Transformation Architect — bringt Code und Kultur zusammen. Begleitet Organisationen bei der strategischen KI-Implementierung: von Automatisierung bis zur nachhaltigen Adoption.",
    email: "info@claudiathonet.de",
  },
  {
    name: "Claudia Werian",
    initials: "CW",
    avatarColor: "bg-anthrazit-80",
    textColor: "text-white",
    role: "Office Managerin",
    focus: ["Organisation", "Teilnehmerverwaltung", "Kommunikation"],
    bio: "Koordiniert alle organisatorischen Prozesse und ist erste Anlaufstelle für administrative Anfragen zu Ausbildungen, Terminen und Anmeldungen.",
    phone: "+49 (0)151 – 51937219",
    email: "info@claudiathonet.de",
  },
  {
    name: "Kati Meden",
    initials: "KM",
    avatarColor: "bg-orange-rot",
    textColor: "text-white",
    role: "Grafikdesignerin",
    focus: ["Corporate Design", "Visualisierung", "Illustration"],
    bio: "Entwickelt und pflegt das Corporate Design — unter anderem Claudias unverwechselbaren Zeichenstil, der Workshops und Trainings visuell prägt.",
    email: "info@claudiathonet.de",
  },
  {
    name: "Anne Träm",
    initials: "AT",
    avatarColor: "bg-tuerkis",
    textColor: "text-white",
    role: "Newsletter & Teilnehmerverwaltung",
    focus: ["Newsletter", "Webinar-Organisation", "Community"],
    bio: "Verantwortet die Newsletter-Kommunikation und koordiniert die Webinar-Organisation — und sorgt dafür, dass alle Teilnehmenden gut informiert sind.",
    email: "info@claudiathonet.de",
  },
];

const TEAM_PHOTOS: Record<string, string> = {
  "Claudia Thonet": "/images/agiler-coach/claudia-thonet-agile-consulting-portrait_08_2024_2.jpg",
  "Jonny Kohlhaas": "/images/agiler-coach/jonny-kohlhaas-berater-claudia-thonet-08-24.jpg",
  "Jason Textor": "/images/agiler-coach/jason-textor-claudia-thonet-berater-08-24.jpg",
  "Anja Höhne": "/images/agiler-coach/anja-hoehne-claudia-thonet-beraterin-08-24.jpg",
  "Tjorven Graßnick": "/images/agiler-coach/tjorven_grassnick-berater-claudia-thonet-12-25.jpg",
};

const FREELANCERS = [
  {
    name: "Jason Textor",
    initials: "JT",
    avatarColor: "bg-orange-rot",
    textColor: "text-white",
    role: "Freier Berater & Trainer",
    focus: ["Scrum", "Kanban", "Design Thinking", "Product Owner"],
    bio: "Experte für agile Frameworks und Produktentwicklung. Überzeugt: Spaß und positive Erlebnisse sind der Schlüssel zu nachhaltigem Lernen.",
  },
  {
    name: "Anja Höhne",
    initials: "AH",
    avatarColor: "bg-anthrazit",
    textColor: "text-white",
    role: "Freie Beraterin & Trainerin",
    focus: ["Agile Führung", "Moderation", "Konfliktmanagement"],
    bio: "20+ Jahre Erfahrung in HR-Entwicklung und Transformation. Spezialisiert auf Kommunikationsdesign, Moderation und agile Führungsmodelle.",
  },
  {
    name: "Tjorven Graßnick",
    initials: "TG",
    avatarColor: "bg-anthrazit-80",
    textColor: "text-white",
    role: "Freie Beraterin",
    focus: ["Agile Methoden", "Holakratie", "Prozessmanagement"],
    bio: "Macht komplexe Prozesse verständlich und erfahrbar — mit besonderem Fokus auf Qualitätsmanagement und Holakratie.",
  },
  {
    name: "Dr. Caroline Dostal",
    initials: "CD",
    avatarColor: "bg-tuerkis-80",
    textColor: "text-white",
    role: "Freie Beraterin",
    focus: ["Mediation", "Konflikt-Kommunikation", "Executive Coaching"],
    bio: "Verbindet internationalen Rechts- und Verwaltungshintergrund mit tiefem Wissen in Mediation und Konfliktmanagement für Führungskräfte.",
  },
  {
    name: "Katrin Spahn",
    initials: "KS",
    avatarColor: "bg-tuerkis",
    textColor: "text-white",
    role: "Freie Beraterin & Trainerin",
    focus: ["Agile Führung", "Agiler Vertrieb", "Teamentwicklung"],
    bio: "Bringt echte Sales-Praxis und agile Coaching-Kompetenz zusammen — spezialisiert auf Führungskräfte und Teams im Vertriebsumfeld.",
  },
];

type AnyTeamMember = {
  name: string;
  initials: string;
  avatarColor: string;
  textColor: string;
  role: string;
  focus: string[];
  bio: string;
  phone?: string;
  email?: string;
};

function TeamCard({
  member,
  showContact = false,
}: {
  member: AnyTeamMember;
  showContact?: boolean;
}) {
  const photo = TEAM_PHOTOS[member.name];
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
      {photo ? (
        <div className="relative mb-4 h-14 w-14 overflow-hidden rounded-full ring-2 ring-border">
          <Image src={photo} alt={member.name} fill sizes="56px" className="object-cover object-top" />
        </div>
      ) : (
        <div
          className={cn(
            "mb-4 flex h-14 w-14 items-center justify-center rounded-full text-base font-bold tracking-wide",
            member.avatarColor,
            member.textColor,
          )}
          aria-hidden
        >
          {member.initials}
        </div>
      )}
      <p className="font-semibold leading-snug text-anthrazit">{member.name}</p>
      <p className="mt-0.5 text-xs text-tuerkis">{member.role}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-anthrazit-80">{member.bio}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {member.focus.map((f) => (
          <span
            key={f}
            className="rounded-full bg-bg-section px-2.5 py-0.5 text-xs text-anthrazit-80"
          >
            {f}
          </span>
        ))}
      </div>
      {showContact && member.phone && (
        <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4">
          <a
            href={`tel:${member.phone.replace(/\s|–|-/g, "")}`}
            className="flex items-center gap-1.5 text-xs text-anthrazit-80 hover:text-tuerkis transition-colors"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {member.phone}
          </a>
        </div>
      )}
    </article>
  );
}

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative grid min-h-[520px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <Eyebrow className="text-tuerkis-50">Über uns</Eyebrow>
              </div>
            </Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl xl:text-6xl">
              <Reveal as="span" className="block text-white">Wir begleiten</Reveal>
              <Reveal as="span" delay={120} className="block text-tuerkis">Menschen durch</Reveal>
              <Reveal as="span" delay={240} className="block text-tuerkis-50">echten Wandel.</Reveal>
            </h1>
            <Reveal delay={360}>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
                Claudia Thonet Agile Consulting — ein Team aus erfahrenen Berater:innen, Trainer:innen und Expert:innen. Wir befähigen Organisationen, agilen Wandel so zu gestalten, dass Zusammenarbeit wirklich besser gelingt.
              </p>
            </Reveal>
            <Reveal delay={460} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/beratung"
                className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Gespräch vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href="mailto:info@claudiathonet.de"
                className="inline-flex min-h-[44px] h-14 items-center gap-2 rounded-[var(--radius-md)] border-2 border-white/25 px-8 text-base font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Kontakt aufnehmen
              </a>
            </Reveal>
          </div>

          <Reveal delay={300} className="hidden lg:block">
            <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex flex-col gap-5">
                {[
                  { value: "15+", label: "Jahre Erfahrung" },
                  { value: "200+", label: "Projekte & Ausbildungen" },
                  { value: "11", label: "Expert:innen im Team" },
                  { value: "BDVT", label: "Zertifiziert & ECA-lizenziert" },
                ].map((stat) => (
                  <div key={stat.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <p className="text-3xl font-bold text-tuerkis">{stat.value}</p>
                    <p className="mt-0.5 text-sm text-white/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Mission & Values */}
      <Reveal>
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-start">
              <div className="flex flex-col gap-4 lg:sticky lg:top-28">
                <Eyebrow>Unsere Haltung</Eyebrow>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                  Teamdenken und Agilität fördern — das ist unser Antrieb.
                </h2>
                <p className="text-sm leading-relaxed text-anthrazit-80">
                  Seit 2010 begleiten wir Unternehmen, Teams und Führungskräfte dabei, agilen Wandel nicht nur einzuführen — sondern wirklich zu leben.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {VALUES.map((value, i) => (
                  <Reveal key={value.title} delay={i * 70}>
                    <div className="flex flex-col gap-2 rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                      <div className="h-1 w-8 rounded-full bg-tuerkis" />
                      <h3 className="font-semibold text-anthrazit">{value.title}</h3>
                      <p className="text-sm leading-relaxed text-anthrazit-80">{value.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Core team */}
      <Reveal>
        <Section bg="section">
          <Container>
            <SectionHeading
              eyebrow="Das Team"
              title="Wer wir sind"
              lead="Erfahrene Menschen mit echtem Praxisbackground — und dem Willen, Dinge wirklich besser zu machen."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_TEAM.map((member, i) => (
                <Reveal key={member.name} delay={i * 70}>
                  <TeamCard member={member} showContact />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Freelancers */}
      <Reveal>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Freie Expert:innen"
              title="Unser Netzwerk"
              lead="Je nach Projekt- und Themenanforderung arbeiten wir mit einem erfahrenen Netzwerk freier Berater:innen zusammen."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FREELANCERS.map((member, i) => (
                <Reveal key={member.name} delay={i * 70}>
                  <TeamCard member={member} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* Contact */}
      <Reveal>
        <Section bg="section">
          <Container>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-6">
                <div>
                  <Eyebrow>Kontakt</Eyebrow>
                  <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-anthrazit md:text-4xl">
                    Sprich mit uns.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-anthrazit-80">
                    Du hast Fragen zu Ausbildungen, Projekten oder Beratung? Wir melden uns persönlich — ohne Automatisierung, ohne Warteschleife.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:info@claudiathonet.de"
                    className="flex items-center gap-3 rounded-[var(--radius-md)] border border-border bg-white px-5 py-4 text-sm font-semibold text-anthrazit shadow-sm transition-all hover:border-tuerkis/40 hover:text-tuerkis"
                  >
                    <Mail className="h-4 w-4 text-tuerkis shrink-0" aria-hidden />
                    info@claudiathonet.de
                  </a>
                  <a
                    href="tel:+4915151937219"
                    className="flex items-center gap-3 rounded-[var(--radius-md)] border border-border bg-white px-5 py-4 text-sm font-semibold text-anthrazit shadow-sm transition-all hover:border-tuerkis/40 hover:text-tuerkis"
                  >
                    <Phone className="h-4 w-4 text-tuerkis shrink-0" aria-hidden />
                    +49 (0)151 – 51937219
                  </a>
                  <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white px-5 py-4 text-sm text-anthrazit shadow-sm">
                    <MapPin className="mt-0.5 h-4 w-4 text-tuerkis shrink-0" aria-hidden />
                    <span>
                      Ahlbecker Straße 2<br />
                      10437 Berlin
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] bg-anthrazit p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-tuerkis-50">
                    Kostenloses Erstgespräch
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    30 Minuten. Kein Pitch. Echte Orientierung.
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65">
                    Wir hören zu, stellen die richtigen Fragen und zeigen dir, ob und wie wir helfen können — ohne Verpflichtung.
                  </p>
                  <Link
                    href="/beratung"
                    className="mt-2 inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white transition-all hover:bg-tuerkis-80 self-start"
                  >
                    Termin vereinbaren
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>
    </>
  );
}
