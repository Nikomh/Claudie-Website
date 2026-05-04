import type { Metadata } from "next";
import { MasterclassTemplate, type MasterclassData } from "@/components/masterclasses/MasterclassTemplate";

export const metadata: Metadata = {
  title: "Masterclass Hybrides Projektmanagement — Claudia Thonet",
  description: "Klassische und agile Projektsteuerung sinnvoll kombinieren — mit klaren Rollenmodellen und Steuerungsroutinen.",
  alternates: { canonical: "/masterclasses/hybrides-projektmanagement/" },
};

const data: MasterclassData = {
  tag: "Projektmanagement",
  title: "Hybrides Projektmanagement",
  subline: "Klassisches und agiles Projektmanagement sind kein Widerspruch. In dieser Masterclass lernen Sie, wie Sie beide Welten sinnvoll verbinden — für bessere Steuerung komplexer Projekte.",
  duration: "2 Tage",
  format: "Präsenz oder Online",
  audience: "Projektmanager:innen, Teams, Führungskräfte",
  heroImage: "/images/photos/Weiterbildung_Hybrides_Projektmanagement_Claudia_Thonet.jpg",
  heroImageAlt: "Masterclass Hybrides Projektmanagement",
  nutzen: "Sie verstehen die Stärken und Grenzen klassischer und agiler Projektsteuerung. Sie können ein passendes hybrides Steuerungsmodell für Ihre Projekte entwickeln — und Sie haben konkrete Werkzeuge für Rollenklarheit, Entscheidungslogik und Steuerungsroutinen.",
  zielgruppe: [
    "Projektmanager:innen, die mit hybriden Anforderungen arbeiten",
    "Teams, die klassische und agile Methoden parallel nutzen",
    "Führungskräfte, die Projekte strategisch steuern",
    "Scrum Master und Product Owner in klassischen Organisationen",
  ],
  inhalte: [
    { title: "Klassisch vs. Agil", body: "Was sind die Stärken beider Welten? Wann passt was? Mythen und Missverständnisse klären." },
    { title: "Hybride Steuerungsmodelle", body: "Wie verbindet man Meilensteinplanung mit iterativer Umsetzung? Konkrete Modelle kennenlernen und bewerten." },
    { title: "Rollen im Hybridprojekt", body: "Projektleitung, Product Owner, Steuerungskomitee — wer hat welche Verantwortung?" },
    { title: "Steuerungsroutinen", body: "Welche Meetings und Reports sind wirklich nötig? Wie werden Entscheidungen schnell getroffen?" },
    { title: "Skalierung mehrerer Teams", body: "Wie koordinieren sich mehrere Teams in einem Projekt? Synchronisierungsformate kennenlernen." },
    { title: "Übungsaufgabe", body: "Ein konkretes Projekt analysieren und ein passendes hybrides Steuerungsmodell entwickeln." },
  ],
  ergebnisse: [
    "Klares Verständnis hybrider Projektsteuerung",
    "Ein eigenes hybrides Modell für das konkrete Projekt",
    "Definierte Rollen und Entscheidungswege",
    "Toolkit für Steuerungsroutinen und Synchronisierung",
    "Sofort anwendbare Methoden für den nächsten Arbeitstag",
  ],
  lernformat: "Mix aus Input, Fallarbeit und direkter Anwendung. Teilnehmende bringen idealerweise ein konkretes Projekt mit, das sie in der Masterclass analysieren und weiterentwickeln.",
  inhouse: "Besonders wirksam als Inhouse-Format: Die gesamte Projektorganisation lernt zusammen — mit Ihren eigenen Projekten als Übungsgrundlage.",
  faq: [
    { question: "Welche Vorkenntnisse sind nötig?", answer: "Grundkenntnisse in Projektmanagement (klassisch oder agil) sind hilfreich. Die Masterclass ist für Einsteiger und Erfahrene geeignet." },
    { question: "Braucht man ein konkretes Projekt?", answer: "Sehr empfehlenswert, aber nicht zwingend. Mit einem eigenen Projekt ist der Transfer deutlich wertvoller." },
  ],
};

export default function HybridesProjectmanagementMasterclassPage() {
  return <MasterclassTemplate data={data} />;
}
