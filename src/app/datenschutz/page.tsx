import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Claudia Thonet Agile Consulting",
  description: "Datenschutzerklärung der Claudia Thonet Agile Consulting GmbH gemäß DSGVO.",
  alternates: { canonical: "/datenschutz/" },
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <Section>
      <Container className="max-w-3xl py-16 md:py-24">
        <h1 className="mb-8 text-3xl font-bold text-anthrazit">Datenschutzerklärung</h1>

        <div className="prose prose-sm max-w-none text-anthrazit-80 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-anthrazit [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-anthrazit [&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:pl-5 [&_li]:mb-1 [&_a]:text-tuerkis [&_a:hover]:underline">

          <p className="text-sm text-anthrazit-80">Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}</p>

          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutzgesetze ist:<br /><br />
            Claudia Thonet Agile Consulting GmbH<br />
            Ahlbecker Straße 2<br />
            10437 Berlin<br />
            E-Mail: <a href="mailto:info@claudiathonet.de">info@claudiathonet.de</a><br />
            Telefon: <a href="tel:+4915151937219">+49 (0)151 – 51937219</a>
          </p>

          <h2>2. Grundsätze der Datenverarbeitung</h2>
          <p>
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt nur nach Einwilligung der Nutzerin oder des Nutzers, sofern keine andere Rechtsgrundlage besteht.
          </p>

          <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>

          <h3>3.1 Beim Besuch der Website</h3>
          <p>
            Beim Aufrufen unserer Website werden durch den Browser auf dem genutzten Endgerät automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
          </ul>
          <p>
            Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht darin, die Funktionsfähigkeit der Website zu gewährleisten.
          </p>

          <h3>3.2 Kontaktformular und E-Mail-Kontakt</h3>
          <p>
            Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden die übermittelten Daten (Name, E-Mail-Adresse, Nachrichteninhalt) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet und gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertragsverhältnisses) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
          <p>
            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind, spätestens 2 Jahre nach dem letzten Kontakt.
          </p>

          <h3>3.3 Newsletter</h3>
          <p>
            Wenn Sie unseren Newsletter abonnieren, verarbeiten wir Ihre E-Mail-Adresse und ggf. Ihren Namen. Die Verarbeitung erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Abmeldelink in jedem Newsletter nutzen oder uns direkt kontaktieren.
          </p>
          <p>
            {/* TODO: Newsletter-Anbieter eintragen (z.B. Mailchimp, Active Campaign etc.) */}
            <em>TODO: Informationen zum eingesetzten Newsletter-Dienst ergänzen.</em>
          </p>

          <h2>4. Weitergabe von Daten</h2>
          <p>
            Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt nicht, es sei denn, dies ist zur Vertragsabwicklung erforderlich oder gesetzlich vorgeschrieben.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies können nicht deaktiviert werden, da ohne sie die Website nicht funktioniert. Für nicht notwendige Cookies holen wir Ihre Einwilligung ein.
          </p>
          <p>
            Eine detaillierte Übersicht der verwendeten Cookies und deren Zwecke finden Sie in unseren{" "}
            <a href="/cookies">Cookie-Einstellungen</a>.
          </p>

          <h2>6. Hosting</h2>
          <p>
            {/* TODO: Hosting-Anbieter eintragen */}
            <em>TODO: Informationen zum Hosting-Anbieter (z.B. Vercel, IONOS etc.) ergänzen.</em>
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben das Recht:</p>
          <ul>
            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
            <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer gespeicherten personenbezogenen Daten zu verlangen</li>
            <li>gemäß Art. 17 DSGVO die Löschung Ihrer gespeicherten personenbezogenen Daten zu verlangen</li>
            <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
            <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
            <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit zu widerrufen</li>
            <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
          </ul>
          <p>
            Zuständige Aufsichtsbehörde: Berliner Beauftragte für Datenschutz und Informationsfreiheit,{" "}
            <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer">
              www.datenschutz-berlin.de
            </a>
          </p>

          <h2>8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den oben angegebenen Stand. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>
        </div>
      </Container>
    </Section>
  );
}
