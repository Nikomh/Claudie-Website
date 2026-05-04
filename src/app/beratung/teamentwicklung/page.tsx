import type { Metadata } from "next";
import { BeratungsDetailTemplate, type BeratungsDetail } from "@/components/beratung/BeratungsDetailTemplate";

export const metadata: Metadata = {
  title: "Teamentwicklung — Beratung · Claudia Thonet",
  description: "Teams stärken, Zusammenarbeit klären und Selbstorganisation fördern — für mehr Wirksamkeit im Alltag.",
  alternates: { canonical: "/beratung/teamentwicklung/" },
};

const data: BeratungsDetail = {
  eyebrow: "Beratung · Teamentwicklung",
  title: "Teamentwicklung",
  subline: "Teams stärken bedeutet nicht, Probleme zu lösen. Es bedeutet, gemeinsam Klarheit über Rollen, Zusammenarbeit und Verantwortung herzustellen — und das im konkreten Arbeitsalltag zu verankern.",
  heroImage: "/images/agiler-coach/claudia_thonet_ausbildung_gruppe.jpg",
  heroImageAlt: "Teamentwicklung — Gruppenarbeit",
  ausgangslagen: [
    { title: "Rollen sind unklar verteilt", body: "Wer entscheidet was? Wer ist für was verantwortlich? Diese Unklarheit erzeugt Reibung, Doppelarbeit und manchmal Blockaden." },
    { title: "Meetings erzeugen Aufwand statt Ergebnisse", body: "Das Team trifft sich regelmäßig, aber Entscheidungen werden nicht getroffen, Themen nicht abgeschlossen, Energie geht verloren." },
    { title: "Zusammenarbeit hat Luft nach oben", body: "Das Team funktioniert — aber das Potenzial wird nicht ausgeschöpft. Offene Kommunikation, echter Austausch und Vertrauen sind ausbaufähig." },
    { title: "Das Team wächst oder verändert sich", body: "Neue Mitglieder, neue Führung, neue Aufgaben. Was bisher funktioniert hat, passt nicht mehr unbedingt." },
  ],
  fuerWen: [
    "Teams, die ihre Zusammenarbeit bewusst weiterentwickeln wollen",
    "Neu zusammengestellte oder stark veränderte Teams",
    "Teams in agilen oder hybriden Arbeitsumgebungen",
    "Führungskräfte, die ihr Team gezielt stärken möchten",
    "Teams nach Konflikten oder Phasen hoher Belastung",
  ],
  themen: [
    { title: "Teamdiagnose und Standortbestimmung", body: "Wo steht das Team? Was funktioniert gut, was nicht? Welche Muster zeigen sich in der Zusammenarbeit?" },
    { title: "Rollen und Verantwortlichkeiten klären", body: "Wer macht was — und warum? Klare Rollen reduzieren Reibung und erhöhen Eigenverantwortung." },
    { title: "Zusammenarbeit und Kommunikation stärken", body: "Formate und Vereinbarungen entwickeln, die echten Austausch ermöglichen und Entscheidungen erleichtern." },
    { title: "Agile Methoden einführen", body: "Retrospektiven, Team-Boards, kurze Planungszyklen — nur dort, wo sie wirklich helfen." },
    { title: "Selbstorganisation stärken", body: "Das Team befähigen, eigenverantwortlich zu arbeiten und Hindernisse selbst zu lösen." },
  ],
  ablauf: [
    { step: "01", title: "Vorgespräch und Klärung", body: "Mit Führungskraft und ggf. einzelnen Teammitgliedern den Kontext, den Auftrag und die Erwartungen klären." },
    { step: "02", title: "Teamworkshop — Standort", body: "Was läuft gut? Was soll besser werden? Das Team diagnostiziert sich selbst — ehrlich und konstruktiv." },
    { step: "03", title: "Themen bearbeiten", body: "In gezielten Modulen die wichtigsten Entwicklungsfelder angehen — Rollen, Entscheidungen, Kommunikation." },
    { step: "04", title: "Maßnahmen verankern", body: "Konkrete Vereinbarungen treffen und in den Alltag überführen." },
    { step: "05", title: "Follow-up", body: "Nach 4–8 Wochen: Was ist geblieben? Was braucht Nachschärfung?" },
  ],
  ergebnisse: [
    "Klare Rollen und Verantwortlichkeiten im Team",
    "Bessere Entscheidungsqualität und -geschwindigkeit",
    "Stärkere Kommunikation und offener Austausch",
    "Konkrete Team-Vereinbarungen für den Alltag",
    "Mehr Eigenverantwortung und weniger Eskalationsbedarf",
    "Wirksamere Meetings und Arbeitsprozesse",
  ],
  formate: [
    { title: "Team-Kickoff", body: "Halbtägig bis ganztägig: Für neue Teams oder veränderte Konstellationen — gemeinsamer Start mit klarem Fokus." },
    { title: "Teamworkshop-Serie", body: "2–4 Halbtages-Workshops über 4–8 Wochen: Vertieftes Arbeiten an konkreten Themen mit Transfer in den Alltag." },
    { title: "Teamretrospektive", body: "Regelmäßiges Format (2–3 Stunden) zur kontinuierlichen Reflexion und Verbesserung der Zusammenarbeit." },
    { title: "Team-Coaching", body: "Begleitung des Teams über mehrere Monate: Regelmäßige Formate, die auf den aktuellen Stand des Teams eingehen." },
  ],
  faq: [
    { question: "Wie viele Personen können in einem Teamworkshop arbeiten?", answer: "Wir arbeiten mit Teams von 4 bis ca. 16 Personen. Für größere Gruppen nutzen wir andere Formate." },
    { question: "Wie lange dauert eine Teamentwicklung?", answer: "Ein einzelner Workshop dauert einen halben bis ganzen Tag. Eine strukturierte Teamentwicklung läuft typischerweise über 2–4 Monate." },
    { question: "Muss die Führungskraft teilnehmen?", answer: "Das hängt vom Thema ab. Bei Rollen- und Entscheidungsklärung ja. Bei reiner Teamdynamik manchmal auch bewusst nicht." },
  ],
};

export default function TeamentwicklungPage() {
  return <BeratungsDetailTemplate data={data} />;
}
