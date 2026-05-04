import type { Metadata } from "next";
import { BeratungsDetailTemplate, type BeratungsDetail } from "@/components/beratung/BeratungsDetailTemplate";

export const metadata: Metadata = {
  title: "OKR-Einführung & Begleitung — Beratung · Claudia Thonet",
  description: "OKRs strukturiert einführen und im Alltag verankern — damit Ziele wirklich fokussieren statt Aufwand erzeugen.",
  alternates: { canonical: "/beratung/okr-einfuehrung/" },
};

const data: BeratungsDetail = {
  eyebrow: "Beratung · OKR",
  title: "OKR-Einführung & Begleitung",
  subline: "OKRs sind kein Selbstzweck. Richtig eingeführt schaffen sie Fokus, verbinden Strategie mit Alltag und stärken eigenverantwortliches Arbeiten. Falsch eingeführt erzeugen sie nur Aufwand.",
  heroImage: "/images/okr-coach/jonny-kohlhaas-okr-coach-ausbildung-claudia-thonet.jpg",
  heroImageAlt: "OKR-Einführung — Jonny Kohlhaas Claudia Thonet",
  ausgangslagen: [
    { title: "Ziele sind zu viele und zu unklar", body: "Jede Abteilung hat ihre eigene Prioritätenliste. Es gibt keine gemeinsame Richtung, keine erkennbare Verbindung zwischen Strategie und Tagesgeschäft." },
    { title: "OKRs wurden eingeführt, aber sie wirken nicht", body: "Das Framework ist bekannt, die Zyklen laufen — aber niemand schaut wirklich auf die OKRs. Sie leben nicht im Arbeitsalltag." },
    { title: "Strategie und Umsetzung klaffen auseinander", body: "Die Strategie ist formuliert. Aber welche konkreten Maßnahmen daraus folgen, bleibt unklar. Teams arbeiten, aber wissen nicht, ob sie an den richtigen Dingen arbeiten." },
    { title: "Zu viele Meetings um OKRs herum", body: "OKR-Zyklen erzeugen mehr Abstimmungsaufwand als vorher — ohne dass die Qualität der Entscheidungen besser wird." },
  ],
  fuerWen: [
    "Unternehmen, die OKRs zum ersten Mal einführen wollen",
    "Organisationen, bei denen OKRs eingeführt wurden, aber nicht wirken",
    "Führungsteams, die Strategie besser in den Alltag übersetzen wollen",
    "Teams, die mehr Fokus und Eigenverantwortung entwickeln wollen",
  ],
  themen: [
    { title: "OKR-Grundlagen und Designprinzipien", body: "Was macht gute OKRs aus? Wie unterscheiden sich Objectives, Key Results und Initiativen? Typische Fehler vermeiden." },
    { title: "OKR-Set entwickeln", body: "Gemeinsam ein erstes OKR-Set für Team oder Organisation entwickeln — von der Strategieklärung bis zur Formulierung." },
    { title: "OKR-Rhythmus etablieren", body: "Check-ins, Reviews, Retrospektiven: Welche Formate sind wirklich nötig — und welche nicht?" },
    { title: "OKRs mit dem Alltag verbinden", body: "Wie hängen OKRs mit Backlog, Projektplanung und Ressourcenverteilung zusammen?" },
    { title: "OKR-Champions entwickeln", body: "Interne Personen befähigen, OKRs zu moderieren, zu coachen und weiterzuentwickeln." },
  ],
  ablauf: [
    { step: "01", title: "Kontext verstehen", body: "Wie arbeitet die Organisation heute? Welche Zielstrukturen gibt es? Was soll mit OKRs konkret besser werden?" },
    { step: "02", title: "Strategieklärung", body: "Gemeinsam klären, was die Prioritäten der nächsten 3–12 Monate sind." },
    { step: "03", title: "Erstes OKR-Set erarbeiten", body: "Workshop mit dem Führungsteam oder mit allen Teams: OKRs formulieren, abstimmen, verbinden." },
    { step: "04", title: "Ersten Zyklus begleiten", body: "Den ersten OKR-Zyklus begleiten — Check-ins, Reflexion, Anpassung." },
    { step: "05", title: "OKR-Champions aufbauen", body: "Interne Personen befähigen, OKRs eigenständig weiterzuführen." },
  ],
  ergebnisse: [
    "Ein erstes OKR-Set, das wirklich fokussiert",
    "Klar etablierter OKR-Rhythmus mit den richtigen Formaten",
    "Stärkere Verbindung zwischen Strategie und Alltag",
    "Teams, die mehr Fokus und Eigenverantwortung entwickeln",
    "Interne OKR-Champions, die das System weiterführen können",
    "Weniger Meetings — aber bessere Entscheidungen",
  ],
  formate: [
    { title: "OKR-Setup-Workshop", body: "1–2 Tage: Erstes OKR-Set entwickeln — für Führungsteam oder die gesamte Organisation." },
    { title: "OKR-Begleitung", body: "3–6 Monate: Begleitung des ersten OKR-Zyklus mit regelmäßigen Check-ins und Coaching." },
    { title: "OKR-Gesundheitscheck", body: "Halbtägig: OKRs bewerten, Stärken identifizieren, konkrete Verbesserungsmaßnahmen ableiten." },
    { title: "OKR-Champion-Programm", body: "Interne OKR-Moderatoren ausbilden — als Training oder als Begleitprogramm zur Einführung." },
  ],
  faq: [
    { question: "Welches OKR-Framework nutzen Sie?", answer: "Wir sind nicht an ein bestimmtes Framework gebunden. Wir orientieren uns an bewährten OKR-Prinzipien und passen sie an den jeweiligen Kontext an." },
    { question: "Wie schnell kann man mit OKRs starten?", answer: "Ein erstes OKR-Set lässt sich in einem 1–2-tägigen Workshop erarbeiten. Den ersten Zyklus zum Laufen zu bringen, dauert typischerweise 4–8 Wochen." },
    { question: "Braucht man spezielle Software?", answer: "Nein. OKRs können zunächst in einfachen Tabellentools oder Whiteboards gepflegt werden. Ob und welche Software sinnvoll ist, klären wir im Kontext des Projekts." },
  ],
};

export default function OkrEinfuehrungPage() {
  return <BeratungsDetailTemplate data={data} />;
}
