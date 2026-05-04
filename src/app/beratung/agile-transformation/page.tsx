import type { Metadata } from "next";
import { BeratungsDetailTemplate, type BeratungsDetail } from "@/components/beratung/BeratungsDetailTemplate";

export const metadata: Metadata = {
  title: "Agile Transformation — Beratung · Claudia Thonet",
  description: "Agile Arbeitsweisen pragmatisch und nachhaltig einführen — nicht als Religion, sondern als wirksames Werkzeug für bessere Zusammenarbeit.",
  alternates: { canonical: "/beratung/agile-transformation/" },
};

const data: BeratungsDetail = {
  eyebrow: "Beratung · Transformation",
  title: "Agile Transformation",
  subline: "Agile Arbeitsweisen schrittweise einführen und im Alltag verankern — pragmatisch, ohne Dogmatismus, mit Fokus auf echte Wirkung.",
  heroImage: "/images/agile-organisationsentwicklung/iterative_transformation_claudia_thonet_svenja_hofert_1200px.png",
  heroImageAlt: "Iterative Transformation — Claudia Thonet",
  ausgangslagen: [
    { title: "Agil wird gemacht, aber nicht gelebt", body: "Scrum-Meetings finden statt, aber Entscheidungen laufen weiterhin über alte Kanäle. Methoden werden eingeführt, die Haltung dahinter nicht." },
    { title: "Zu viele Initiativen gleichzeitig", body: "Die Organisation ist im Dauerwandel — aber ohne klare Priorisierung, ohne gemeinsames Zielbild, ohne Kapazität zum Innehalten." },
    { title: "Widerstand gegen Veränderung", body: "Nicht weil die Menschen schwierig sind, sondern weil der Nutzen unklar ist und Betroffene nicht genug eingebunden wurden." },
    { title: "Skalierung scheitert", body: "In einzelnen Teams funktioniert Agilität gut. Die Übertragung auf weitere Bereiche oder die Gesamtorganisation gelingt aber nicht." },
  ],
  fuerWen: [
    "Organisationen, die mit agilen Methoden starten oder diese ausweiten wollen",
    "Führungsteams, die Transformation strategisch begleiten wollen",
    "Unternehmen, bei denen bisherige Transformationsversuche ins Stocken geraten sind",
    "HR- und Change-Verantwortliche, die praktische Unterstützung suchen",
  ],
  themen: [
    { title: "Standortbestimmung", body: "Wo steht die Organisation heute? Was funktioniert bereits, was nicht? Wo sind die wichtigsten Hebel?" },
    { title: "Transformations-Roadmap", body: "Ein realistischer, priorisierter Plan — keine Wunschliste, sondern eine ehrliche Einschätzung, was in welcher Reihenfolge sinnvoll ist." },
    { title: "Pilotformate und Experimente", body: "Kleine, lernorientierte Einheiten, die schnelles Feedback erzeugen, bevor großflächig ausgerollt wird." },
    { title: "Befähigung und Capability Building", body: "Führungskräfte, Teams und interne Multiplikatoren befähigen, die Transformation selbst voranzutragen." },
    { title: "Retrospektiven und Lernschleifen", body: "Regelmäßige Reflexion einbauen — was wirkt, was nicht, was braucht die Organisation als nächstes?" },
  ],
  ablauf: [
    { step: "01", title: "Standortbestimmung", body: "Assessment des aktuellen Reifegrads: Kultur, Strukturen, Prozesse, Führungsverhalten." },
    { step: "02", title: "Zielbild und Roadmap", body: "Gemeinsam mit dem Führungsteam einen realistischen Veränderungsplan entwickeln." },
    { step: "03", title: "Pilotprojekte starten", body: "In kleinen Einheiten ausprobieren, was funktioniert — mit klaren Lernzielen und kurzen Feedback-Schleifen." },
    { step: "04", title: "Skalierung begleiten", body: "Was in Piloten funktioniert hat, strukturiert auf weitere Bereiche übertragen." },
    { step: "05", title: "Wirkung messen und verankern", body: "Regelmäßige Überprüfung, ob die Veränderung im Alltag angekommen ist — und Nachsteuerung, wo nötig." },
  ],
  ergebnisse: [
    "Klares Bild des aktuellen Agilitätsgrades",
    "Priorisierte Transformations-Roadmap",
    "Konkrete Formate und Maßnahmen, die sofort starten können",
    "Führungskräfte, die die Transformation aktiv mitgestalten",
    "Interne Multiplikatoren, die die Veränderung tragen",
    "Messbare Verbesserungen in Zusammenarbeit und Entscheidungsgeschwindigkeit",
  ],
  formate: [
    { title: "Agilitäts-Assessment", body: "1 Tag: Interviews, Beobachtung und strukturierte Analyse mit konkreten Handlungsempfehlungen." },
    { title: "Transformations-Workshop", body: "1–2 Tage: Führungsteam entwickelt gemeinsam Zielbild und erste Maßnahmen." },
    { title: "Transformationsbegleitung", body: "3–12 Monate: Begleitende Beratung mit regelmäßigen Check-ins, Workshops und Sparring." },
    { title: "Inhouse-Ausbildung Agile Transformation", body: "Maßgeschneidertes mehrtägiges Programm für interne Change Agents und Führungskräfte." },
  ],
  faq: [
    { question: "Müssen wir ein bestimmtes Framework einführen?", answer: "Nein. Wir arbeiten nicht mit einer vorgegebenen Framework-Agenda. Welche Methoden und Strukturen passen, ergibt sich aus Ihrer konkreten Situation." },
    { question: "Was ist der Unterschied zu einer klassischen Beratung?", answer: "Wir geben keine Fertiglösungen vor und begleiten die Umsetzung aktiv mit. Wir befähigen interne Akteure statt externe Abhängigkeit zu schaffen." },
    { question: "Wie groß muss die Organisation sein?", answer: "Wir arbeiten mit Teams ab 10 Personen bis zu mittelgroßen Organisationen mit mehreren hundert Mitarbeitenden." },
  ],
};

export default function AgileTransformationPage() {
  return <BeratungsDetailTemplate data={data} />;
}
