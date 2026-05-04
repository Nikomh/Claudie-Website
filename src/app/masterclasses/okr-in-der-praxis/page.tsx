import type { Metadata } from "next";
import { MasterclassTemplate, type MasterclassData } from "@/components/masterclasses/MasterclassTemplate";

export const metadata: Metadata = {
  title: "Masterclass OKR in der Praxis — Claudia Thonet",
  description: "OKRs einführen, etablieren und lebendig halten — von der ersten Formulierung bis zum funktionierenden OKR-Rhythmus.",
  alternates: { canonical: "/masterclasses/okr-in-der-praxis/" },
};

const data: MasterclassData = {
  tag: "OKR",
  title: "OKR in der Praxis",
  subline: "OKRs richtig einzuführen ist einfacher als gedacht — wenn man die häufigen Fehler kennt. Diese Masterclass zeigt, wie OKRs wirklich fokussieren statt Aufwand erzeugen.",
  duration: "1–2 Tage",
  format: "Präsenz oder Online",
  audience: "Führungskräfte, OKR-Champions, Teams",
  heroImage: "/images/okr-coach/ausbildung-okr-coach-jonny-kohlhaas.png",
  heroImageAlt: "Masterclass OKR in der Praxis",
  nutzen: "Sie verstehen, wie gute OKRs formuliert werden — und warum schlechte OKRs nicht wirken. Sie kennen den OKR-Rhythmus und wissen, welche Formate wirklich gebraucht werden. Und Sie haben ein erstes OKR-Set entwickelt, das Sie direkt einsetzen können.",
  zielgruppe: [
    "Führungskräfte, die OKRs in ihrem Team oder ihrer Organisation einführen wollen",
    "OKR-Champions und interne Begleiter:innen",
    "Teams, die mit OKRs arbeiten und sie verbessern wollen",
    "Scrum Master und Agile Coaches mit OKR-Kontext",
  ],
  inhalte: [
    { title: "OKR-Grundlagen", body: "Was sind Objectives, Key Results und Initiativen? Wie unterscheiden sie sich? Was macht gute OKRs aus?" },
    { title: "Typische Fehler", body: "Die häufigsten OKR-Fallen: zu viele Ziele, zu kleine Key Results, zu schwache Verbindung zum Alltag." },
    { title: "OKRs formulieren", body: "Übung: Objectives und Key Results für eine konkrete Situation entwickeln und feedback-basiert verbessern." },
    { title: "OKR-Rhythmus", body: "Welche Meetings braucht man wirklich? Wie laufen Check-ins, Reviews und Retrospektiven effektiv ab?" },
    { title: "OKRs und Strategie verbinden", body: "Wie hängen OKRs mit der Unternehmensstrategie zusammen? Wie vermeidet man Silos?" },
    { title: "OKR-Set erarbeiten", body: "Jede:r Teilnehmende erarbeitet ein erstes OKR-Set für die eigene Situation — mit direktem Feedback." },
  ],
  ergebnisse: [
    "Fundiertes Verständnis von OKRs und ihren Erfolgsfaktoren",
    "Eigenes OKR-Set, das direkt eingesetzt werden kann",
    "Klarer Plan für den ersten OKR-Zyklus",
    "Wissen, welche Formate wirklich gebraucht werden",
    "Sicherheit bei der Moderation von OKR-Formaten",
  ],
  lernformat: "Kombination aus Input und intensiver Übung. Jede:r Teilnehmende entwickelt eigene OKRs und erhält direktes Feedback. Kleingruppenarbeit und Plenumsdiskussion wechseln sich ab.",
  inhouse: "Als Inhouse-Format: Das gesamte Führungsteam oder alle Teams entwickeln ihre OKRs gemeinsam — mit direktem Ergebnis für den nächsten Zyklus.",
  faq: [
    { question: "Kann man OKRs in einem Tag einführen?", answer: "Einen guten Start machen — ja. Nachhaltig verankern braucht mehr Zeit. Die Masterclass gibt den entscheidenden Impuls und die Werkzeuge dafür." },
    { question: "Was wenn wir OKRs schon haben, aber sie nicht wirken?", answer: "Gerade dann ist die Masterclass besonders wertvoll. Wir schauen, was nicht funktioniert und warum — und entwickeln Anpassungen." },
  ],
};

export default function OkrInDerPraxisMasterclassPage() {
  return <MasterclassTemplate data={data} />;
}
