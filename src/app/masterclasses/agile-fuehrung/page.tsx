import type { Metadata } from "next";
import { MasterclassTemplate, type MasterclassData } from "@/components/masterclasses/MasterclassTemplate";

export const metadata: Metadata = {
  title: "Masterclass Agile Führung — Claudia Thonet",
  description: "Führung im agilen Kontext stärken — Rahmen setzen, Selbstorganisation ermöglichen und Verantwortung sinnvoll verteilen.",
  alternates: { canonical: "/masterclasses/agile-fuehrung/" },
};

const data: MasterclassData = {
  tag: "Führung",
  title: "Agile Führung",
  subline: "Agile Führung bedeutet nicht, alles loszulassen. Sie bedeutet, einen Rahmen zu gestalten, in dem Teams eigenverantwortlich arbeiten können — mit klarer Orientierung und sinnvollen Leitplanken.",
  duration: "2–3 Tage",
  format: "Präsenz",
  audience: "Führungskräfte, Team Leads",
  heroImage: "/images/agile-fuehrung/claudia-thonet-beraet-zum-thema-agile-fuehrung.jpg",
  heroImageAlt: "Masterclass Agile Führung — Claudia Thonet",
  nutzen: "Sie verstehen, was agile Führung in der Praxis bedeutet — und was es nicht bedeutet. Sie haben konkrete Werkzeuge für Delegation, Entscheidungen und Feedback. Und Sie entwickeln ein eigenes Führungsverständnis, das zu Ihrer Persönlichkeit und Ihrem Kontext passt.",
  zielgruppe: [
    "Führungskräfte, die ihren Führungsstil weiterentwickeln wollen",
    "Team Leads in agilen oder wachsenden Organisationen",
    "Führungskräfte, die mehr Selbstorganisation in ihren Teams ermöglichen wollen",
    "Führungsteams, die eine gemeinsame Führungshaltung entwickeln wollen",
  ],
  inhalte: [
    { title: "Was agile Führung bedeutet", body: "Konkret: Was ändert sich an der Rolle? Was bleibt? Was sind typische Missverständnisse?" },
    { title: "Rahmen gestalten", body: "Wie schafft man einen Kontext, in dem Teams eigenverantwortlich arbeiten können? Leitplanken statt Kontrolle." },
    { title: "Delegation und Entscheidungen", body: "Delegation Poker, Entscheidungslogiken, subsidiäres Prinzip — wer entscheidet was, wann und warum?" },
    { title: "Führungskommunikation", body: "Sinn vermitteln, Feedback geben, schwierige Gespräche führen — konkrete Techniken für den Führungsalltag." },
    { title: "Selbstreflexion", body: "Eigenes Führungsverhalten analysieren: Stärken, blinde Flecken, Entwicklungsfelder." },
    { title: "Persönlicher Führungsplan", body: "Was verändere ich konkret? Nächste Schritte für den Alltag definieren." },
  ],
  ergebnisse: [
    "Klares, eigenes Verständnis agiler Führung",
    "Werkzeuge für Delegation, Entscheidungen und Feedback",
    "Persönlicher Führungsplan mit konkreten nächsten Schritten",
    "Stärkere Wirksamkeit als Führungskraft",
    "Mehr Selbstorganisation im eigenen Team",
  ],
  lernformat: "Intensive Auseinandersetzung mit der eigenen Führungsrolle. Kombination aus Input, Reflexion und Übung — in Kleingruppen und im Gesamtplenum. Fallarbeit mit eigenen Führungssituationen.",
  inhouse: "Als Inhouse-Format besonders wirksam für Führungsteams: Gemeinsam eine Führungskultur entwickeln, Erwartungen klären, Entscheidungslogiken definieren.",
  faq: [
    { question: "Brauche ich Vorerfahrung mit agilen Methoden?", answer: "Nein. Die Masterclass setzt kein agiles Vorwissen voraus. Sie ist für alle Führungskräfte geeignet." },
    { question: "Ist das ein Führungskräftetraining?", answer: "Ja — aber kein klassisches mit Rollenspielübungen und fertigen Antworten. Es geht um echte Reflexion und konkrete Werkzeuge." },
  ],
};

export default function AgileFuehrungMasterclassPage() {
  return <MasterclassTemplate data={data} />;
}
