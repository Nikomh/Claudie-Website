import type { Metadata } from "next";
import { BeratungsDetailTemplate, type BeratungsDetail } from "@/components/beratung/BeratungsDetailTemplate";

export const metadata: Metadata = {
  title: "Hybrides Projektmanagement — Beratung · Claudia Thonet",
  description: "Klassische und agile Projektsteuerung sinnvoll verbinden — mit klaren Rollenmodellen und Steuerungsroutinen für komplexe Projekte.",
  alternates: { canonical: "/beratung/hybrides-projektmanagement/" },
};

const data: BeratungsDetail = {
  eyebrow: "Beratung · Projektmanagement",
  title: "Hybrides Projektmanagement",
  subline: "Klassisch oder agil — die meisten Projekte brauchen beides. Wir helfen Ihnen, das richtige Steuerungsmodell für Ihre Projekte zu entwickeln.",
  heroImage: "/images/photos/Weiterbildung_Hybrides_Projektmanagement_Claudia_Thonet.jpg",
  heroImageAlt: "Hybrides Projektmanagement — Weiterbildung",
  ausgangslagen: [
    { title: "Klassisch und agil erzeugen Reibung", body: "Teams arbeiten nach unterschiedlichen Methoden ohne gemeinsames Verständnis. Das erzeugt Missverständnisse, Doppelarbeit und Steuerungslücken." },
    { title: "Projekte sind komplex und unplanbar", body: "Starre Projektpläne funktionieren nicht mehr. Anforderungen ändern sich, Abhängigkeiten sind unklar, der Markt ist schneller als die Planung." },
    { title: "Rollen und Entscheidungswege sind unklar", body: "Wer ist Projektleiter, wer ist Product Owner, wer entscheidet was? In Hybridprojekten fehlt oft ein klares Modell." },
    { title: "Skalierung scheitert", body: "In kleinen Teams funktioniert agiles Vorgehen gut. Sobald mehrere Teams an einem Projekt arbeiten, bricht die Koordination zusammen." },
  ],
  fuerWen: [
    "Projektmanager:innen, die mit hybriden Anforderungen arbeiten",
    "Teams, die klassische und agile Methoden parallel nutzen",
    "Organisationen, die Projektsteuerung modernisieren wollen",
    "Führungskräfte, die Projekte strategisch steuern",
  ],
  themen: [
    { title: "Methodenverständnis", body: "Was sind die Stärken klassischer Projektsteuerung? Was bringen agile Ansätze? Wann passt was?" },
    { title: "Hybrides Steuerungsmodell", body: "Ein Modell entwickeln, das klassische Meilensteinplanung mit iterativer Umsetzung verbindet." },
    { title: "Rollen in Hybridprojekten", body: "Wer übernimmt welche Verantwortung? Projektleitung, Product Ownership, Steuerungskomitee — klar definiert." },
    { title: "Steuerungsroutinen", body: "Welche Meetings und Berichte sind wirklich nötig? Wie werden Entscheidungen schnell und auf der richtigen Ebene getroffen?" },
    { title: "Skalierung mehrerer Teams", body: "Wie koordinieren sich mehrere Teams, die an einem Projekt arbeiten? Welche Synchronisierungsformate helfen?" },
  ],
  ablauf: [
    { step: "01", title: "Projektanalyse", body: "Wie läuft das Projekt heute? Welche Methoden werden genutzt? Wo sind die größten Reibungspunkte?" },
    { step: "02", title: "Modell entwickeln", body: "Ein hybrides Steuerungsmodell entwickeln, das zur Projektgröße, Komplexität und Organisationskultur passt." },
    { step: "03", title: "Rollen klären", body: "Rollenmodell definieren und mit allen relevanten Personen abstimmen." },
    { step: "04", title: "Steuerungsroutinen einführen", body: "Meetings, Reports und Entscheidungsprozesse einführen und erste Zyklen begleiten." },
    { step: "05", title: "Nachjustierung", body: "Nach 4–8 Wochen: Was funktioniert? Was braucht Anpassung?" },
  ],
  ergebnisse: [
    "Klares hybrides Steuerungsmodell für das konkrete Projekt",
    "Definierte Rollen und Entscheidungswege",
    "Reduzierter Koordinationsaufwand",
    "Bessere Sichtbarkeit von Fortschritt und Risiken",
    "Teams, die selbstständiger steuern können",
    "Weniger Eskalationsbedarf",
  ],
  formate: [
    { title: "Projektaufstellung", body: "1 Tag: Steuerungsmodell, Rollen und erste Rituale für ein konkretes Projekt entwickeln." },
    { title: "Methoden-Workshop", body: "Halbtägig: Führungskräfte und Teams für hybrides Projektmanagement sensibilisieren und fit machen." },
    { title: "Projektbegleitung", body: "Mehrmonatige Begleitung: Steuerungsmodell einführen, erste Zyklen begleiten, nachjustieren." },
    { title: "Inhouse-Masterclass", body: "2 Tage: Hybrides Projektmanagement für die gesamte Projektorganisation — als Lernformat." },
  ],
  faq: [
    { question: "Welche Methoden verwenden Sie?", answer: "Wir sind nicht dogmatisch: Scrum, Kanban, SAFe, PRINCE2 oder klassische Projektsteuerung — wir nutzen, was zum Kontext passt." },
    { question: "Braucht man zuerst eine Agile-Transformation?", answer: "Nein. Hybrides Projektmanagement funktioniert auch ohne vorherige Transformation. Es ist oft ein sinnvoller Einstieg." },
    { question: "Für wie große Projekte ist das geeignet?", answer: "Von kleinen Projekten mit 3–5 Personen bis zu größeren Vorhaben mit mehreren Teams. Das Modell wird skaliert." },
  ],
};

export default function HybridesProjectmanagementPage() {
  return <BeratungsDetailTemplate data={data} />;
}
