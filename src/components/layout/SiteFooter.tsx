import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/social";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const columns: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Beratung",
      links: [
        { label: "Alle Beratungsfelder", href: "/beratung" },
        { label: "Organisationsentwicklung", href: "/beratung/agile-organisationsentwicklung" },
        { label: "Teamentwicklung", href: "/beratung/teamentwicklung" },
        { label: "Führungskräfteentwicklung", href: "/beratung/fuehrungskraefteentwicklung" },
        { label: "OKR-Einführung", href: "/beratung/okr-einfuehrung" },
        { label: "Veränderung gestalten", href: "/beratung/veraenderung-gestalten" },
      ],
    },
    {
      heading: "Ausbildungen",
      links: [
        { label: "Alle Ausbildungen", href: "/ausbildungen" },
        { label: "Agile Coach", href: "/agile-ausbildungen/agiler-coach" },
        { label: "OKR Coach", href: "/agile-ausbildungen/okr-coach" },
        { label: "Agile Facilitator", href: "/agile-ausbildungen/agiler-facilitator" },
        { label: "Agile Führung", href: "/agile-ausbildungen/agile-fuehrung" },
      ],
    },
    {
      heading: "Masterclasses",
      links: [
        { label: "Alle Masterclasses", href: "/masterclasses" },
        { label: "AI Leadership Sprint", href: "/ausbildungen/ai-leadership-sprint" },
        { label: "Veränderung gestalten", href: "/masterclasses/veraenderung-gestalten" },
        { label: "Agile Führung", href: "/masterclasses/agile-fuehrung" },
        { label: "OKR in der Praxis", href: "/masterclasses/okr-in-der-praxis" },
        { label: "Moderation & Facilitation", href: "/masterclasses/moderation-facilitation" },
      ],
    },
    {
      heading: "Wissen",
      links: [
        { label: "Wissen & Ressourcen", href: "/wissen" },
        { label: "Agile Toolbox", href: "/toolbox" },
        { label: "Agile Methoden", href: "/agile-methoden" },
        { label: "Bücher", href: "/veroeffentlichungen" },
        { label: "Webinare", href: "/webinare" },
        { label: "Downloads", href: "/downloadbereich" },
      ],
    },
    {
      heading: "Unternehmen",
      links: [
        { label: "Über uns", href: "/ueber-uns" },
        { label: "Kontakt", href: "/kontakt" },
        { label: "Erstgespräch buchen", href: "/kontakt" },
        { label: "Newsletter", href: "/newsletter" },
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
      ],
    },
  ];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/claudiathonet", icon: LinkedinIcon },
  { label: "Instagram", href: "https://www.instagram.com/claudiathonet", icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/@claudiathonet", icon: YoutubeIcon },
  { label: "Facebook", href: "https://www.facebook.com/claudiathonet.agile", icon: FacebookIcon },
];

export function SiteFooter() {
  return (
    <>
      <footer className="bg-anthrazit text-white">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            <div className="lg:col-span-1">
              <Link
                href="/"
                aria-label="Claudia Thonet — Startseite"
                className="inline-flex"
              >
                <Image
                  src="/brand/logos/Logo_querformatig_fuer_dunklen_Hintergrund_web_office.png"
                  alt="Claudia Thonet"
                  width={160}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Agile Ausbildungen, Beratung und Trainings für nachhaltige
                Veränderung im DACH-Raum.
              </p>
              <div className="mt-5 flex gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-tuerkis hover:bg-tuerkis"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>

            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-tuerkis-50">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-tuerkis-50">
                Newsletter
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/70">
                Impulse, Tools und neue Termine — alle 4 Wochen, jederzeit
                abbestellbar.
              </p>
              <NewsletterForm variant="footer" cta="Anmelden" />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Claudia Thonet. Alle Rechte vorbehalten.</p>
            <p className="text-white/40">
              Agile Beratung &amp; Ausbildung · Made in DACH
            </p>
          </div>
        </Container>
      </footer>
      <ScrollToTop />
    </>
  );
}
