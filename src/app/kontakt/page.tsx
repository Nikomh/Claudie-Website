import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { LinkedinIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/social";

export const metadata: Metadata = {
  title: "Kontakt — Claudia Thonet Agile Consulting",
  description: "Kontakt zu Claudia Thonet: Anfragen zu Ausbildungen, Beratung und Projekten. Kostenloses Erstgespräch vereinbaren — persönlich, ohne Automatisierung.",
  alternates: { canonical: "/kontakt/" },
};

const CONTACTS = [
  {
    name: "Claudia Werian",
    role: "Organisation & Anmeldungen",
    email: "info@claudiathonet.de",
    phone: "+49 (0)151 – 51937219",
    note: "Für alle organisatorischen Anfragen, Anmeldungen zu Ausbildungen und allgemeine Fragen.",
    bookingHref: null,
  },
  {
    name: "Claudia Thonet",
    role: "Inhaltliche Anfragen & Beratung",
    email: "info@claudiathonet.de",
    phone: "+49 (0)179 – 3946791",
    note: "Für Beratungsanfragen, Projektanfragen und inhaltliche Fragen zu Ausbildungen.",
    bookingHref: "/beratung",
  },
  {
    name: "Jonny Kohlhaas",
    role: "OKR, Strategie & Teams",
    email: "info@claudiathonet.de",
    phone: "+49 (0)151 – 29548080",
    note: "Für Anfragen zu OKR-Coaching, Strategieumsetzung und Teamentwicklung.",
    bookingHref: "/beratung",
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/claudiathonet",
    Icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/claudiathonet",
    Icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@claudiathonet",
    Icon: YoutubeIcon,
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthrazit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_0%,rgba(20,180,190,0.18)_0%,transparent_70%)]"
        />
        <Container className="relative py-16 md:py-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
              <Eyebrow className="text-tuerkis-50">Schreib uns</Eyebrow>
            </div>
          </Reveal>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            <Reveal as="span" className="block text-white">Wir melden uns</Reveal>
            <Reveal as="span" delay={120} className="block text-tuerkis">persönlich.</Reveal>
          </h1>
          <Reveal delay={280}>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
              Keine Automatisierung, keine Warteschleifen. Schreib uns — wir antworten innerhalb von 1–2 Werktagen persönlich.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Form + Contacts */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">

            {/* Form */}
            <Reveal>
              <div className="flex flex-col gap-6">
                <div>
                  <Eyebrow>Kontaktformular</Eyebrow>
                  <h2 className="mt-2 text-2xl font-bold text-anthrazit">Deine Nachricht an uns</h2>
                </div>
                <ContactForm />
              </div>
            </Reveal>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">

              {/* Direct contacts */}
              <Reveal delay={100}>
                <div className="flex flex-col gap-3">
                  <Eyebrow>Direkt erreichbar</Eyebrow>
                  {CONTACTS.map((c) => (
                    <div
                      key={c.name}
                      className="rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm"
                    >
                      <p className="font-semibold text-anthrazit">{c.name}</p>
                      <p className="mt-0.5 text-xs text-tuerkis">{c.role}</p>
                      <p className="mt-2 text-xs leading-relaxed text-anthrazit-80">{c.note}</p>
                      <div className="mt-3 flex flex-col gap-1.5">
                        <a
                          href={`tel:${c.phone.replace(/\s|–|-/g, "")}`}
                          className="flex items-center gap-2 text-xs text-anthrazit-80 hover:text-tuerkis transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5 shrink-0 text-tuerkis" aria-hidden />
                          {c.phone}
                        </a>
                        <a
                          href={`mailto:${c.email}`}
                          className="flex items-center gap-2 text-xs text-anthrazit-80 hover:text-tuerkis transition-colors"
                        >
                          <Mail className="h-3.5 w-3.5 shrink-0 text-tuerkis" aria-hidden />
                          {c.email}
                        </a>
                      </div>
                      {c.bookingHref && (
                        <Link
                          href={c.bookingHref}
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-tuerkis hover:underline"
                        >
                          <Calendar className="h-3.5 w-3.5" aria-hidden />
                          Termin buchen
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Address */}
              <Reveal delay={150}>
                <div className="rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <Eyebrow>Adresse</Eyebrow>
                  <div className="mt-3 flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                    <address className="not-italic text-sm leading-relaxed text-anthrazit">
                      Claudia Thonet Agile Consulting GmbH<br />
                      Ahlbecker Straße 2<br />
                      10437 Berlin
                    </address>
                  </div>
                </div>
              </Reveal>

              {/* Socials */}
              <Reveal delay={200}>
                <div className="rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <Eyebrow>Social Media</Eyebrow>
                  <div className="mt-3 flex gap-3">
                    {SOCIALS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-section text-anthrazit-80 transition-all hover:bg-tuerkis hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Free consultation CTA */}
      <Reveal>
        <section className="bg-anthrazit py-16 md:py-20">
          <Container>
            <div className="flex flex-col items-center gap-6 text-center">
              <Eyebrow className="text-tuerkis-50">Kostenloses Erstgespräch</Eyebrow>
              <h2 className="max-w-[24ch] text-3xl font-bold leading-tight text-white md:text-4xl">
                30 Minuten. Kein Pitch. Echte Orientierung.
              </h2>
              <p className="max-w-[52ch] text-sm leading-relaxed text-white/65 md:text-base">
                Wir hören zu, stellen die richtigen Fragen und zeigen dir, ob und wie wir helfen können — ohne Verpflichtung, ohne Verkaufsshow.
              </p>
              <Link
                href="/beratung"
                className="inline-flex h-14 items-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-tuerkis-80"
              >
                Termin vereinbaren
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Container>
        </section>
      </Reveal>
    </>
  );
}
