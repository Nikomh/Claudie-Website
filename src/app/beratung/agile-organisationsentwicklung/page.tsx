import type { Metadata } from "next";
import { BeratungsDetailTemplate, type BeratungsDetail } from "@/components/beratung/BeratungsDetailTemplate";

export const metadata: Metadata = {
  title: "Agile Organisationsentwicklung — Beratung · Claudia Thonet",
  description: "Strukturen, Kulturen und Zusammenarbeitsweisen iterativ weiterentwickeln — systemisch, nachhaltig und auf Wirkung ausgerichtet.",
  alternates: { canonical: "/beratung/agile-organisationsentwicklung/" },
};

const data: BeratungsDetail = {
  eyebrow: "Beratung · Organisationsentwicklung",
  title: "Agile Organisationsentwicklung",
  subline: "Organisationen als lebendige Systeme verstehen und weiterentwickeln — nicht durch Masterpläne, sondern durch iterative Prozesse, die auf echtem Feedback basieren.",
  heroImage: "/images/agile-organisationsentwicklung/Agile_Organisationsentwicklung_Claudia_Thonet.jpg",
  heroImageAlt: "Agile Organisationsentwicklung — Claudia Thonet",
  ausgangslagen: [
    { title: "Strukturen passen nicht mehr", body: "Die Organisation ist gewachsen, aber die Prozesse und Strukturen stammen noch aus einer anderen Zeit. Reibung entsteht nicht durch Menschen, sondern durch unpassende Strukturen." },
    { title: "Kulturwandel ist gewünscht, aber unklar", body: "Alle wollen eine andere Kultur — aber niemand weiß, wie man sie konkret gestaltet. Workshops werden gemacht, aber nichts ändert sich nachhaltig." },
    { title: "Zusammenarbeit zwischen Bereichen stockt", body: "Silodenken, unklare Schnittstellen, Doppelarbeit. Die einzelnen Teams funktionieren, aber das Zusammenspiel nicht." },
    { title: "Veränderungsinitiativen verpuffen", body: "Neue Methoden werden eingeführt, nach drei Monaten aber nicht mehr gelebt. Veränderung hat keinen Ort und kein Momentum." },
  ],
  fuerWen: [
    "Geschäftsführungen und Führungsteams, die strategischen Wandel begleiten wollen",
    "HR- und OE-Verantwortliche, die strukturierte Unterstützung suchen",
    "Organisationen in Wachstums- oder Restrukturierungsphasen",
    "Unternehmen, die New Work und Agilität nachhaltig verankern wollen",
  ],
  themen: [
    { title: "Organisationsdiagnose", body: "Verstehen, wie die Organisation heute wirklich funktioniert — Strukturen, Entscheidungswege, informelle Muster und Kulturmerkmale." },
    { title: "Zielbild entwickeln", body: "Gemeinsam ein klares Bild davon erarbeiten, wie die Organisation in Zukunft funktionieren soll." },
    { title: "Iterative Veränderungsarbeit", body: "Kleine, konkrete Schritte statt großer Masterpläne. Feedback-Schleifen einbauen und daraus lernen." },
    { title: "Kulturarbeit mit dem Kulturwandelhaus", body: "Das Kulturwandelhaus (Thonet/Hofert) als Orientierungsmodell: Werte sichtbar machen, Strukturen als Verhaltenstreiber nutzen." },
    { title: "Befähigung der internen Akteure", body: "Nicht externe Abhängigkeit schaffen, sondern interne Kapazität aufbauen — damit die Organisation die Veränderung selbst trägt." },
  ],
  ablauf: [
    { step: "01", title: "Kontext verstehen", body: "Gespräche mit relevanten Personen, Beobachtungen, Analyse bestehender Strukturen und Prozesse." },
    { step: "02", title: "Zielbild schärfen", body: "Gemeinsam mit dem Führungsteam klären, was sich konkret verändern soll — und was nicht." },
    { step: "03", title: "Interventionen designen", body: "Formate, Workshops und Begleitungsstrukturen entwickeln, die zur Ausgangslage passen." },
    { step: "04", title: "Umsetzung begleiten", body: "Regelmäßige Begleitung, Reflexion und Anpassung — keine einmalige Intervention, sondern kontinuierliche Begleitung." },
    { step: "05", title: "Wirkung verankern", body: "Sicherstellen, dass die Veränderung in Strukturen, Routinen und Praktiken verankert ist, bevor die externe Begleitung endet." },
  ],
  ergebnisse: [
    "Klarere Organisationsstruktur mit sinnvollen Schnittstellen",
    "Gemeinsames Verständnis von Kultur und Werten",
    "Konkrete Maßnahmen und Verantwortlichkeiten",
    "Stärkere Selbststeuerungsfähigkeit der Organisation",
    "Bessere Zusammenarbeit zwischen Bereichen und Teams",
    "Interne Akteure, die Veränderung selbst weiterführen können",
  ],
  formate: [
    { title: "Organisationsdiagnose", body: "1–2 Tage: Strukturanalyse, Gespräche, Kulturassessment mit konkreten Handlungsempfehlungen." },
    { title: "Transformationsbegleitung", body: "Mehrmonatige Begleitung: regelmäßige Workshops, Coaching und Reflexionsformate." },
    { title: "Kulturworkshop-Serie", body: "3–5 Workshops à halbtägig bis ganztägig mit Führungsteam oder erweiterten Gruppen." },
    { title: "Inhouse-Ausbildung OE", body: "3–6 Module à 2 Tage: Grundlagen systemisch-agiler Organisationsentwicklung für interne Akteure." },
  ],
  faq: [
    { question: "Wie lange dauert eine Begleitung typischerweise?", answer: "Das hängt stark vom Ausgangspunkt ab. Diagnostik- und Einzel-Workshops starten nach wenigen Wochen. Eine echte Transformationsbegleitung läuft typischerweise über 6–18 Monate." },
    { question: "Kann man auch einzelne Bausteine buchen?", answer: "Ja. Ein Organisations-Assessment oder ein Kulturworkshop können auch als einzelne Maßnahmen gebucht werden." },
    { question: "Wie viele Personen können eingebunden werden?", answer: "Das variiert. Wir arbeiten sowohl mit kleinen Führungsteams (5–12 Personen) als auch mit größeren Gruppen bis ca. 80 Personen in Open-Space- oder Barcamp-Formaten." },
  ],
};

export default function AgileOrganisationsentwicklungBeratungPage() {
  return <BeratungsDetailTemplate data={data} />;
}
