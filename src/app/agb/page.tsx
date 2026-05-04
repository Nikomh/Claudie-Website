import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen — Claudia Thonet Agile Consulting",
  description: "AGB der Claudia Thonet Agile Consulting GmbH.",
  alternates: { canonical: "/agb/" },
  robots: { index: false },
};

export default function AGBPage() {
  return (
    <Section>
      <Container className="max-w-3xl py-16 md:py-24">
        <h1 className="mb-8 text-3xl font-bold text-anthrazit">Allgemeine Geschäftsbedingungen</h1>
        <p className="mb-8 text-sm text-anthrazit-80">Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}</p>

        <div className="prose prose-sm max-w-none text-anthrazit-80 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-anthrazit [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-anthrazit [&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:pl-5 [&_li]:mb-1 [&_a]:text-tuerkis [&_a:hover]:underline">

          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Claudia Thonet Agile Consulting GmbH, Ahlbecker Straße 2, 10437 Berlin (nachfolgend „Anbieter"), und den jeweiligen Teilnehmenden oder Auftraggebenden (nachfolgend „Auftraggeber") über die Durchführung von Seminaren, Ausbildungen, Coachings, Beratungsleistungen und sonstigen Trainingsformaten.
          </p>

          <h2>§ 2 Vertragsschluss</h2>
          <p>
            Eine verbindliche Anmeldung zu einem Seminar oder einer Ausbildung erfolgt durch Einsendung des ausgefüllten Anmeldeformulars, per E-Mail oder auf andere schriftliche Weise. Die Anmeldung stellt ein verbindliches Angebot dar. Der Vertrag kommt mit der schriftlichen Bestätigung durch den Anbieter zustande.
          </p>

          <h2>§ 3 Leistungen und Inhalte</h2>
          <p>
            Der Anbieter behält sich vor, beschriebene Seminarinhalte bei Bedarf an aktuelle Entwicklungen anzupassen und referierte Personen durch gleichwertige Fachkräfte zu ersetzen, ohne dass dadurch Stornierungsrechte entstehen.
          </p>

          <h2>§ 4 Preise und Zahlung</h2>
          <p>
            {/* TODO: Preisdetails und Zahlungskonditionen einfügen */}
            <em>TODO: Preise, Zahlungsbedingungen und Fälligkeit hier ergänzen.</em>
          </p>
          <p>
            Alle angegebenen Preise verstehen sich zzgl. der gesetzlichen Umsatzsteuer, sofern nicht anders angegeben.
          </p>

          <h2>§ 5 Stornierung durch den Auftraggeber</h2>
          <p>
            {/* TODO: Stornierungsfristen und -konditionen einfügen */}
            <em>TODO: Stornierungsregelungen hier ergänzen.</em>
          </p>

          <h2>§ 6 Absage oder Verschiebung durch den Anbieter</h2>
          <p>
            Der Anbieter behält sich vor, Veranstaltungen bei zu geringer Teilnehmerzahl oder aus anderen wichtigen Gründen (z.B. Erkrankung der Referentin) abzusagen oder zu verschieben. In diesem Fall werden bereits geleistete Zahlungen vollständig erstattet. Darüber hinausgehende Ansprüche sind ausgeschlossen.
          </p>

          <h2>§ 7 Haftung</h2>
          <p>
            Der Anbieter haftet unbeschränkt für Schäden, die auf vorsätzlichen oder grob fahrlässigen Pflichtverletzungen beruhen. Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten.
          </p>

          <h2>§ 8 Urheberrecht und Nutzungsrechte</h2>
          <p>
            Alle Seminarunterlagen, Präsentationen, Materialien und Methoden sind urheberrechtlich geschützt. Die Vervielfältigung, Weitergabe oder gewerbliche Nutzung bedarf der ausdrücklichen schriftlichen Genehmigung des Anbieters.
          </p>

          <h2>§ 9 Datenschutz</h2>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{" "}
            <a href="/datenschutz">Datenschutzerklärung</a>.
          </p>

          <h2>§ 10 Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten ist Berlin, sofern der Auftraggeber Kaufmann ist oder keinen allgemeinen Gerichtsstand in Deutschland hat.
          </p>
          <p>
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein, so bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
          </p>
        </div>
      </Container>
    </Section>
  );
}
