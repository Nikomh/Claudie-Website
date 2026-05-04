import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Impressum — Claudia Thonet Agile Consulting",
  description: "Impressum und Anbieterkennzeichnung von Claudia Thonet Agile Consulting GmbH.",
  alternates: { canonical: "/impressum/" },
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <Section>
      <Container className="max-w-3xl py-16 md:py-24">
        <h1 className="mb-8 text-3xl font-bold text-anthrazit">Impressum</h1>

        <div className="prose prose-sm max-w-none text-anthrazit-80 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-anthrazit [&_p]:leading-relaxed [&_p]:mb-3 [&_a]:text-tuerkis [&_a:hover]:underline">

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Claudia Thonet Agile Consulting GmbH<br />
            Ahlbecker Straße 2<br />
            10437 Berlin<br />
            Deutschland
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4915151937219">+49 (0)151 – 51937219</a><br />
            E-Mail: <a href="mailto:info@claudiathonet.de">info@claudiathonet.de</a>
          </p>

          <h2>Vertretungsberechtigte Person</h2>
          <p>
            Claudia Thonet (Geschäftsführerin)
          </p>

          <h2>Registereintrag</h2>
          <p>
            {/* TODO: Handelsregisternummer eintragen */}
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Berlin-Charlottenburg<br />
            Registernummer: <em>TODO: HRB-Nummer eintragen</em>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            {/* TODO: USt-IdNr. eintragen */}
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            <em>TODO: USt-IdNr. eintragen</em>
          </p>

          <h2>Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
          <p>
            Claudia Thonet<br />
            Ahlbecker Straße 2<br />
            10437 Berlin
          </p>

          <h2>Berufsrechtliche Regelungen</h2>
          <p>
            Claudia Thonet ist Mitglied im BDVT — Berufsverband für Trainer, Berater und Coaches e.V.<br />
            Berufsrechtliche Regelungen: Berufsordnung des BDVT (einsehbar unter{" "}
            <a href="https://www.bdvt.de" target="_blank" rel="noopener noreferrer">www.bdvt.de</a>)
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </Container>
    </Section>
  );
}
