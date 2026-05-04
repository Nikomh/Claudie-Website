import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cookie-Einstellungen — Claudia Thonet Agile Consulting",
  description: "Informationen zu Cookies und Tracking auf der Website von Claudia Thonet Agile Consulting.",
  alternates: { canonical: "/cookies/" },
  robots: { index: false },
};

const COOKIE_CATEGORIES = [
  {
    name: "Notwendige Cookies",
    required: true,
    description: "Diese Cookies sind für den technischen Betrieb der Website unbedingt erforderlich und können nicht deaktiviert werden. Sie ermöglichen grundlegende Funktionen wie Navigation und Sicherheit.",
    cookies: [
      { name: "__session", purpose: "Sitzungs-Management", duration: "Sitzungsende" },
      { name: "csrf_token", purpose: "Schutz vor Cross-Site-Request-Forgery", duration: "Sitzungsende" },
    ],
  },
  {
    name: "Analyse-Cookies",
    required: false,
    description: "Diese Cookies helfen uns zu verstehen, wie Besuchende die Website nutzen. Alle Daten werden anonymisiert erhoben.",
    cookies: [
      { name: "—", purpose: "Derzeit keine Analyse-Cookies aktiv", duration: "—" },
    ],
  },
  {
    name: "Marketing-Cookies",
    required: false,
    description: "Diese Cookies werden verwendet, um Besucher website-übergreifend zu verfolgen. Sie werden eingesetzt, um relevante Werbung anzuzeigen.",
    cookies: [
      { name: "—", purpose: "Derzeit keine Marketing-Cookies aktiv", duration: "—" },
    ],
  },
];

export default function CookiesPage() {
  return (
    <Section>
      <Container className="max-w-3xl py-16 md:py-24">
        <h1 className="mb-4 text-3xl font-bold text-anthrazit">Cookie-Einstellungen</h1>
        <p className="mb-10 text-sm leading-relaxed text-anthrazit-80">
          Auf dieser Website verwenden wir Cookies und ähnliche Technologien. Hier finden Sie eine Übersicht aller verwendeten Cookies sowie Informationen zu deren Zweck und Laufzeit.
        </p>

        <div className="flex flex-col gap-6">
          {COOKIE_CATEGORIES.map((cat) => (
            <div key={cat.name} className="rounded-[var(--radius-md)] border border-border bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="text-base font-bold text-anthrazit">{cat.name}</h2>
                  {cat.required && (
                    <span className="mt-1 inline-block rounded-full bg-tuerkis/10 px-2.5 py-0.5 text-xs font-semibold text-tuerkis">
                      Immer aktiv
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-anthrazit-80 mb-4">{cat.description}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-anthrazit-80">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="pb-2 text-left font-semibold text-anthrazit pr-4">Name</th>
                      <th className="pb-2 text-left font-semibold text-anthrazit pr-4">Zweck</th>
                      <th className="pb-2 text-left font-semibold text-anthrazit">Laufzeit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.cookies.map((c) => (
                      <tr key={c.name} className="border-b border-border/50 last:border-0">
                        <td className="py-2 pr-4 font-mono">{c.name}</td>
                        <td className="py-2 pr-4">{c.purpose}</td>
                        <td className="py-2">{c.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-md)] border border-border bg-bg-section p-5">
          <p className="text-sm leading-relaxed text-anthrazit-80">
            Weitere Informationen zur Datenverarbeitung finden Sie in unserer{" "}
            <a href="/datenschutz" className="font-semibold text-tuerkis hover:underline">Datenschutzerklärung</a>.
            Für Fragen wenden Sie sich an:{" "}
            <a href="mailto:info@claudiathonet.de" className="font-semibold text-tuerkis hover:underline">
              info@claudiathonet.de
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
