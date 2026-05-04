import type { Metadata } from "next";
import { MasterclassTemplate, type MasterclassData } from "@/components/masterclasses/MasterclassTemplate";

export const metadata: Metadata = {
  title: "Masterclass Moderation & Facilitation — Claudia Thonet",
  description: "Workshops, Retrospektiven und Entscheidungsmeetings professionell moderieren — mit konkreten Formaten und Moderationstechniken.",
  alternates: { canonical: "/masterclasses/moderation-facilitation/" },
};

const data: MasterclassData = {
  tag: "Facilitation",
  title: "Moderation & Facilitation",
  subline: "Gute Moderation macht den Unterschied zwischen einem Meeting, das aufwühlt, und einem Workshop, der etwas bewirkt. Diese Masterclass gibt Ihnen das Handwerk dafür.",
  duration: "2 Tage",
  format: "Präsenz",
  audience: "Moderator:innen, Coaches, Führungskräfte, HR",
  heroImage: "/images/agiler-facilitator/claudia-thonet-im-trainng-zu-agilen-werten-11-23.jpg",
  heroImageAlt: "Masterclass Moderation & Facilitation",
  nutzen: "Sie beherrschen konkrete Moderationstechniken für Workshops, Retrospektiven und Entscheidungsmeetings. Sie wissen, wie Sie Gruppen aktivieren, Energie halten und Ergebnisse sichern. Und Sie haben eine eigene Methoden-Toolbox, die Sie sofort einsetzen können.",
  zielgruppe: [
    "Moderator:innen und Facilitator:innen, die ihre Kompetenz ausbauen wollen",
    "Führungskräfte, die wirksame Meetings und Workshops leiten",
    "Agile Coaches und Scrum Master",
    "HR-Verantwortliche, die interne Workshops begleiten",
  ],
  inhalte: [
    { title: "Grundhaltung und Rolle", body: "Was ist die Rolle der Moderation? Was ist Facilitation? Wie bleibt man neutral ohne wirkungslos zu sein?" },
    { title: "Workshops konzipieren", body: "Vom Storyboard zur Durchführung: Wie plant man einen Workshop, der Energie erzeugt und Ergebnisse sichert?" },
    { title: "Methoden und Techniken", body: "10+ Methoden für verschiedene Workshop-Situationen: Einstieg, Arbeitsphasen, Entscheidungen, Abschluss." },
    { title: "Schwierige Situationen", body: "Was tun wenn Diskussionen sich festfahren, Dominante das Wort führen oder Energie verloren geht?" },
    { title: "Retrospektiven gestalten", body: "Retrospektiven planen und moderieren — für Scrum-Teams und als allgemeines Lernformat." },
    { title: "Eigene Moderation ausprobieren", body: "Jede:r Teilnehmende moderiert eine kurze Einheit — mit direktem Feedback aus der Gruppe." },
  ],
  ergebnisse: [
    "Sicherheit bei der Moderation von Workshops und Meetings",
    "Toolkit mit 10+ sofort einsetzbaren Methoden",
    "Persönliches Storyboard für den nächsten eigenen Workshop",
    "Sicherer Umgang mit schwierigen Gruppendynamiken",
    "Feedback zu eigener Moderationswirkung",
  ],
  lernformat: "Stark praxisorientiert: Methoden werden direkt erprobt, nicht nur erklärt. Alle Teilnehmenden moderieren mindestens eine kurze Einheit und erhalten strukturiertes Feedback. Kleingruppenarbeit und Plenum wechseln sich ab.",
  inhouse: "Als Inhouse-Masterclass besonders wertvoll: Alle internen Moderator:innen und Führungskräfte entwickeln eine gemeinsame Moderationskultur.",
  faq: [
    { question: "Brauche ich Vorkenntnisse in Moderation?", answer: "Nein. Die Masterclass ist für Einsteiger und Erfahrene geeignet — das Tempo wird an die Gruppe angepasst." },
    { question: "Wie viele Methoden werden behandelt?", answer: "Mindestens 10 konkrete Methoden mit direkter Übung. Jede:r Teilnehmende geht mit einer persönlichen Methoden-Toolbox nach Hause." },
  ],
};

export default function ModerationFacilitationMasterclassPage() {
  return <MasterclassTemplate data={data} />;
}
