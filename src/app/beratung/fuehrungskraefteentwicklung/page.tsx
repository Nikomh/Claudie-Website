import type { Metadata } from "next";
import { BeratungsDetailTemplate, type BeratungsDetail } from "@/components/beratung/BeratungsDetailTemplate";

export const metadata: Metadata = {
  title: "Führungskräfteentwicklung — Beratung · Claudia Thonet",
  description: "Führung im Wandel stärken — Rahmen setzen, befähigen, loslassen und dennoch Orientierung geben.",
  alternates: { canonical: "/beratung/fuehrungskraefteentwicklung/" },
};

const data: BeratungsDetail = {
  eyebrow: "Beratung · Führungskräfteentwicklung",
  title: "Führungskräfteentwicklung",
  subline: "Führung verändert sich, wenn sich Organisationen verändern. Wir unterstützen Führungskräfte dabei, ihre Rolle neu zu verstehen — und im Alltag wirksam zu gestalten.",
  heroImage: "/images/agile-fuehrung/claudia-thonet-beraet-zum-thema-agile-fuehrung.jpg",
  heroImageAlt: "Führungskräfteentwicklung — Claudia Thonet im Beratungsgespräch",
  ausgangslagen: [
    { title: "Führung soll sich verändern, aber wie?", body: "Alle reden von New Work und agiler Führung — aber was das konkret bedeutet, bleibt unklar. Führungskräfte wissen nicht, was jetzt von ihnen erwartet wird." },
    { title: "Delegation fällt schwer", body: "Führungskräfte wollen Verantwortung abgeben, aber Teams übernehmen sie nicht. Oder umgekehrt: Teams wollen mehr Autonomie, aber Strukturen lassen das nicht zu." },
    { title: "Führungskräfte sind überlastet", body: "Operative Arbeit, Führungsaufgaben, Veränderungsdruck — zu viel auf einmal. Was kann tatsächlich abgegeben werden?" },
    { title: "Führungsteams funktionieren nicht als Team", body: "Einzelne Führungskräfte sind stark. Aber als Führungsteam gibt es keine gemeinsame Richtung, keine klare Rollenverteilung, keine echte Abstimmung." },
  ],
  fuerWen: [
    "Einzelne Führungskräfte, die ihre Rolle reflektieren und weiterentwickeln wollen",
    "Führungsteams, die gemeinsam besser werden wollen",
    "Organisationen, die Führung im Rahmen einer Transformation stärken wollen",
    "HR-Verantwortliche, die ein strukturiertes Führungskräfteprogramm suchen",
  ],
  themen: [
    { title: "Führungsrolle im Wandel", body: "Was bedeutet Führung heute konkret? Welche alten Muster helfen nicht mehr, welche neuen Kompetenzen sind gefragt?" },
    { title: "Rahmen setzen und Selbstorganisation ermöglichen", body: "Wie gestaltet man einen Rahmen, in dem Teams eigenverantwortlich arbeiten können? Was sind sinnvolle Leitplanken?" },
    { title: "Kommunikation und Feedback", body: "Klare Kommunikation, konstruktives Feedback, schwierige Gespräche führen — konkrete Werkzeuge für den Führungsalltag." },
    { title: "Entscheidungen treffen und delegieren", body: "Welche Entscheidungen gehören wohin? Delegation Poker, Entscheidungsmodelle, Rollenklarheit." },
    { title: "Persönliche Führungshaltung", body: "Was ist das eigene Führungsverständnis? Wo liegen Stärken, wo blinde Flecken?" },
  ],
  ablauf: [
    { step: "01", title: "Standortbestimmung", body: "Einzelgespräch oder Assessment: Wo steht die Führungskraft aktuell? Was sind die wichtigsten Entwicklungsfelder?" },
    { step: "02", title: "Werkzeuge und Konzepte", body: "Input zu relevanten Modellen und Werkzeugen — immer verbunden mit dem konkreten Alltag der Teilnehmenden." },
    { step: "03", title: "Fallarbeit und Reflexion", body: "Echte Situationen aus dem Führungsalltag bearbeiten — im Einzelcoaching, in der Gruppe oder im Peer-Format." },
    { step: "04", title: "Transfer und Umsetzung", body: "Konkrete nächste Schritte festlegen und beim Transfer in den Alltag begleiten." },
    { step: "05", title: "Reflexion und Nachjustierung", body: "Was hat sich verändert? Was braucht es noch? Kontinuierliche Weiterentwicklung statt einmaligem Event." },
  ],
  ergebnisse: [
    "Klareres Verständnis der eigenen Führungsrolle",
    "Konkrete Werkzeuge für Delegation, Entscheidungen und Feedback",
    "Stärkere Wirksamkeit im Führungsalltag",
    "Bessere Zusammenarbeit im Führungsteam",
    "Höhere Eigenverantwortung in den geführten Teams",
    "Führungsprinzipien, die zur Organisation und Person passen",
  ],
  formate: [
    { title: "Führungskräfte-Coaching", body: "Einzelcoaching über 3–6 Monate: Individuelle Begleitung zu konkreten Führungsherausforderungen." },
    { title: "Führungskräfte-Workshop", body: "1–2 Tage: Für ein Führungsteam — gemeinsames Verständnis entwickeln, Rollen klären, Zusammenarbeit stärken." },
    { title: "Führungskräfte-Programm", body: "3–6 Module à 1–2 Tage über 4–8 Monate: Strukturiertes Entwicklungsprogramm mit Transfer und Peer-Learning." },
    { title: "Einzelsparring", body: "Regelmäßiges Sparring (2 Stunden alle 4–6 Wochen) für konkrete aktuelle Führungsfragen." },
  ],
  faq: [
    { question: "Ist das Coaching oder Beratung?", answer: "Beides. Wir verbinden Fachexpertise zu Führung und Organisationen mit einer coachingorientierten Haltung. Wir geben also nicht nur Input, sondern begleiten auch die Reflexion." },
    { question: "Kann man auch ein Programm nur für Führungskräfte eines Unternehmens buchen?", answer: "Ja. Inhouse-Führungskräfteprogramme sind möglich und werden inhaltlich auf den Kontext des Unternehmens angepasst." },
    { question: "Wie viele Führungskräfte können teilnehmen?", answer: "Für Coaching: einzeln. Für Workshops und Programme: 6–14 Personen." },
  ],
};

export default function FuehrungskraefteentwicklungPage() {
  return <BeratungsDetailTemplate data={data} />;
}
