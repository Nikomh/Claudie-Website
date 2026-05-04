import type { Metadata } from "next";
import { BeratungsDetailTemplate, type BeratungsDetail } from "@/components/beratung/BeratungsDetailTemplate";

export const metadata: Metadata = {
  title: "Veränderung gestalten — Beratung · Claudia Thonet",
  description: "Veränderungsprozesse professionell begleiten — Widerstände verstehen, Akzeptanz aufbauen und Wandel nachhaltig verankern.",
  alternates: { canonical: "/beratung/veraenderung-gestalten/" },
};

const data: BeratungsDetail = {
  eyebrow: "Beratung · Change",
  title: "Veränderung gestalten",
  subline: "Veränderung lässt sich nicht verordnen. Sie braucht Orientierung, Beteiligung und einen langen Atem. Wir begleiten Sie dabei, Veränderungsprozesse strukturiert und menschlich zu gestalten.",
  heroImage: "/images/veraenderung-gestalten/Veraenderung_gestalten_Claudia_Thonet.jpg",
  heroImageAlt: "Veränderung gestalten — Workshop mit Claudia Thonet",
  ausgangslagen: [
    { title: "Veränderung erzeugt Widerstand", body: "Neue Strukturen, Prozesse oder Strategien stoßen auf Ablehnung. Nicht weil die Menschen schwierig sind, sondern weil Veränderung unsicher macht." },
    { title: "Change-Erschöpfung", body: "Zu viele Veränderungsinitiativen in kurzer Zeit. Die Organisation ist im Dauerwandel — ohne die Möglichkeit, das Neue wirklich zu integrieren." },
    { title: "Kommunikation läuft ins Leere", body: "Führungskräfte kommunizieren, aber die Botschaften kommen nicht an. Gerüchte füllen die Informationslücken." },
    { title: "Betroffene werden nicht eingebunden", body: "Veränderungen werden beschlossen und verkündet — aber die Menschen, die sie umsetzen müssen, wurden nicht gefragt." },
  ],
  fuerWen: [
    "Führungskräfte und Projektverantwortliche, die Veränderungen begleiten",
    "HR- und Kommunikationsverantwortliche in Change-Projekten",
    "Organisationen in strukturellen oder kulturellen Veränderungsphasen",
    "Teams, die durch Zusammenschlüsse, Umstrukturierungen oder neue Strategien gefordert sind",
  ],
  themen: [
    { title: "Veränderungsdynamiken verstehen", body: "Warum reagieren Menschen wie sie reagieren? Widerstand als Information verstehen, nicht als Problem." },
    { title: "Stakeholder-Analyse und Einbindung", body: "Wer ist betroffen? Wer hat Einfluss? Wie werden die richtigen Menschen zur richtigen Zeit eingebunden?" },
    { title: "Change-Kommunikation", body: "Was wann wie kommunizieren? Botschaften entwickeln, die gehört werden — ehrlich, konkret, zugewandt." },
    { title: "Beteiligungsformate", body: "Wie kann die Organisation aktiv mitgestalten statt nur konsumieren? Barcamps, Workshops, Dialog-Formate." },
    { title: "Veränderung verankern", body: "Neue Strukturen, Routinen und Praktiken so verankern, dass sie getragen werden — auch wenn die externe Begleitung endet." },
  ],
  ablauf: [
    { step: "01", title: "Situation verstehen", body: "Was soll sich verändern? Wo steht die Organisation? Welche Dynamiken sind bereits sichtbar?" },
    { step: "02", title: "Change-Architektur entwickeln", body: "Einen durchdachten Plan entwickeln: Wer wird wann wie eingebunden? Welche Formate passen?" },
    { step: "03", title: "Führungskräfte befähigen", body: "Führungskräfte sind die entscheidenden Gestalter von Veränderung. Wir befähigen sie, diese Rolle aktiv wahrzunehmen." },
    { step: "04", title: "Begleitung und Reflexion", body: "Regelmäßige Check-ins, Anpassungen und Reflexion. Veränderung verläuft selten linear." },
    { step: "05", title: "Nachhaltigkeit sicherstellen", body: "Was bleibt, wenn die externe Begleitung endet? Interne Strukturen und Kompetenzen aufbauen." },
  ],
  ergebnisse: [
    "Klarer Plan für den Veränderungsprozess",
    "Führungskräfte, die Veränderung aktiv und glaubwürdig begleiten",
    "Geringerer Widerstand durch bessere Einbindung und Kommunikation",
    "Belegschaft, die Veränderung besser versteht und mitträgt",
    "Strukturen und Routinen, die das Neue im Alltag verankern",
    "Erhöhte Veränderungsfähigkeit für zukünftige Prozesse",
  ],
  formate: [
    { title: "Change-Diagnose", body: "Halbtägig bis ganztägig: Ausgangssituation analysieren, Risiken identifizieren, Change-Architektur entwickeln." },
    { title: "Führungskräfte-Workshop Change", body: "1–2 Tage: Führungskräfte für ihre Rolle als Change-Begleiter stärken." },
    { title: "Change-Begleitung", body: "Mehrmonatige Begleitung mit regelmäßigen Check-ins, Workshops und Stakeholder-Arbeit." },
    { title: "Beteiligungsformate", body: "Barcamps, Open Space, Zukunftskonferenzen — für breite Einbindung in kurzer Zeit." },
  ],
  faq: [
    { question: "Ist das Change Management im klassischen Sinne?", answer: "Wir orientieren uns an bewährten Change-Modellen (Kotter, ADKAR, Satir-Kurve), setzen sie aber pragmatisch und kontextspezifisch ein — nicht als starres Framework." },
    { question: "Was wenn die Veränderung schon läuft und es Probleme gibt?", answer: "Wir steigen auch mitten in laufende Prozesse ein. Oft ist der wertvollste Zeitpunkt nicht der Anfang, sondern wenn etwas ins Stocken gerät." },
    { question: "Wie viele Personen können eingebunden werden?", answer: "Von kleinen Führungsgruppen (6–12 Personen) bis zu großen Beteiligungsformaten mit 50–200 Personen — je nach Bedarf." },
  ],
};

export default function VeraenderungGestaltenBeratungPage() {
  return <BeratungsDetailTemplate data={data} />;
}
