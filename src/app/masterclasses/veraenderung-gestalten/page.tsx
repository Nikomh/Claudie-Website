import type { Metadata } from "next";
import { MasterclassTemplate, type MasterclassData } from "@/components/masterclasses/MasterclassTemplate";

export const metadata: Metadata = {
  title: "Masterclass Veränderung gestalten — Claudia Thonet",
  description: "In 2 Tagen lernen Sie, Veränderungsprozesse professionell zu begleiten — Widerstände verstehen, Akzeptanz aufbauen, Wandel nachhaltig verankern.",
  alternates: { canonical: "/masterclasses/veraenderung-gestalten/" },
};

const data: MasterclassData = {
  tag: "Change",
  title: "Veränderung gestalten",
  subline: "In 2 intensiven Tagen lernen Sie, Veränderungsprozesse professionell zu begleiten — Widerstände konstruktiv nutzen, Menschen einbinden und Wandel im Alltag verankern.",
  duration: "2 Tage",
  format: "Präsenz",
  audience: "Führungskräfte, HR, Coaches",
  heroImage: "/images/veraenderung-gestalten/Veraenderung_gestalten_Claudia_Thonet.jpg",
  heroImageAlt: "Masterclass Veränderung gestalten",
  nutzen: "Sie verstehen, warum Veränderung auf Widerstand trifft — und wie Sie damit professionell umgehen. Sie beherrschen konkrete Techniken für Veränderungskommunikation, Stakeholder-Einbindung und Change-Begleitung. Und Sie gehen mit einem persönlichen Aktionsplan nach Hause.",
  zielgruppe: [
    "Führungskräfte, die Veränderungen in ihrer Organisation begleiten",
    "HR- und OE-Verantwortliche in Change-Projekten",
    "Agile Coaches und Berater:innen",
    "Projektverantwortliche in Transformationsprojekten",
  ],
  inhalte: [
    { title: "Veränderungsdynamiken verstehen", body: "Warum reagieren Menschen wie sie reagieren? Modelle wie Kotter, ADKAR und die Satir-Kurve — praxisnah erklärt und erprobt." },
    { title: "Widerstand konstruktiv nutzen", body: "Widerstand ist Information, kein Problem. Wie man ihn hört, versteht und produktiv bearbeitet." },
    { title: "Stakeholder-Analyse", body: "Wer ist betroffen? Wer hat Einfluss? Wie werden die richtigen Menschen zur richtigen Zeit eingebunden?" },
    { title: "Change-Kommunikation", body: "Was wann wie kommunizieren? Botschaften entwickeln, die ehrlich, konkret und zugewandt sind." },
    { title: "Beteiligungsformate", body: "Formate kennenlernen, die echte Mitgestaltung ermöglichen statt Betroffene nur zu informieren." },
    { title: "Persönlicher Aktionsplan", body: "Was nehme ich mit? Was ist mein konkreter nächster Schritt in meiner Situation?" },
  ],
  ergebnisse: [
    "Sicherer Umgang mit Widerstand in Veränderungsprozessen",
    "Konkrete Kommunikationstechniken für Change-Situationen",
    "Eigene Stakeholder-Analyse für aktuelle Projekte",
    "Persönlicher Aktionsplan mit nächsten Schritten",
    "Verständnis, wann welches Format passt",
  ],
  lernformat: "Hoher Praxisanteil: Methoden werden direkt erprobt, nicht nur erklärt. Fallarbeit mit echten Situationen der Teilnehmenden. Reflexion in Kleingruppen. Jeder Tag endet mit einem konkreten Transfer in den eigenen Alltag.",
  inhouse: "Diese Masterclass kann als maßgeschneidertes Inhouse-Format gebucht werden — angepasst auf Ihre Ausgangslage und Ihr konkretes Veränderungsprojekt.",
  faq: [
    { question: "Brauche ich Change-Management-Vorkenntnisse?", answer: "Nein. Die Masterclass ist für alle zugänglich, die Veränderungen begleiten — unabhängig vom bisherigen Wissensstand." },
    { question: "Kann ich eigene Fälle mitbringen?", answer: "Ausdrücklich ja. Ein Großteil der Masterclass lebt von den echten Situationen der Teilnehmenden." },
  ],
};

export default function VeraenderungGestaltenMasterclassPage() {
  return <MasterclassTemplate data={data} />;
}
