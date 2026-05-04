import { Lightbulb, CalendarDays, Play, CheckSquare, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PhaseMethod {
  name: string;
  description: string;
}

export interface Phase {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgLight: string;
  description: string;
  methods: PhaseMethod[];
}

export const PHASES: Phase[] = [
  {
    id: "think-new",
    icon: Lightbulb,
    label: "Think New",
    title: "Innovation & Strategie",
    color: "bg-tuerkis",
    textColor: "text-tuerkis",
    borderColor: "border-tuerkis",
    bgLight: "bg-tuerkis/5",
    description:
      "Neue Perspektiven einnehmen, Kunden verstehen und strategische Richtung setzen — bevor Entscheidungen fallen.",
    methods: [
      {
        name: "Customer Journey Map",
        description:
          "Kundenerlebnisse visuell darstellen und Schmerzpunkte identifizieren.",
      },
      {
        name: "Design Thinking",
        description:
          "Systematischer, nutzerzentrierter Prozess für komplexe Herausforderungen.",
      },
      {
        name: "OKRs",
        description:
          "Modernes Zielsetzungs-Framework: Objectives & Key Results statt klassischer KPIs.",
      },
      {
        name: "Leadership Canvas",
        description:
          "Führungsrolle und -verständnis strukturiert entwickeln und kommunizieren.",
      },
      {
        name: "Business Model Canvas",
        description:
          "Geschäftsmodelle visualisieren, analysieren und iterativ weiterentwickeln.",
      },
      {
        name: "Empathy Map",
        description:
          "Kunden- und Nutzer-Perspektiven tief verstehen — für bessere Entscheidungen.",
      },
      {
        name: "Persona Template",
        description:
          "Typische Nutzer:innen-Profile entwickeln für kundenzentrisches Handeln.",
      },
      {
        name: "STACEY Matrix",
        description:
          "Komplexität einschätzen und die passende Vorgehensweise ableiten.",
      },
    ],
  },
  {
    id: "plan",
    icon: CalendarDays,
    label: "Plan",
    title: "Planung & Entscheidung",
    color: "bg-anthrazit",
    textColor: "text-anthrazit",
    borderColor: "border-anthrazit",
    bgLight: "bg-anthrazit/5",
    description:
      "Hypothesen formulieren, Arbeit strukturieren und Entscheidungen transparent treffen.",
    methods: [
      {
        name: "Planning Meeting Board",
        description: "Sprint-Planung strukturiert und visuell gestalten.",
      },
      {
        name: "Delegation Board",
        description:
          "Entscheidungskompetenzen klären und Autonomie sichtbar machen.",
      },
      {
        name: "Delegation Poker",
        description: "Entscheidungsebenen spielerisch und konsensual klären.",
      },
      {
        name: "Team Canvas",
        description:
          "Teamziele, Werte und Arbeitsweisen gemeinsam definieren.",
      },
      {
        name: "RACI-Matrix",
        description: "Rollen und Verantwortlichkeiten klar zuordnen.",
      },
      {
        name: "Planning Poker",
        description: "Aufwände schätzen durch kollektives Team-Urteil.",
      },
      {
        name: "Decision Matrix",
        description:
          "Komplexe Entscheidungen systematisch und transparent treffen.",
      },
    ],
  },
  {
    id: "do",
    icon: Play,
    label: "Do",
    title: "Umsetzung & Ausführung",
    color: "bg-orange-rot",
    textColor: "text-orange-rot",
    borderColor: "border-orange-rot",
    bgLight: "bg-orange-rot/5",
    description:
      "Iterativ arbeiten, Transparenz schaffen und Ergebnisse liefern — mit klaren Rollen und visualisierten Workflows.",
    methods: [
      {
        name: "Scrum",
        description:
          "Iterative Produktentwicklung mit definierten Rollen, Meetings und Sprints.",
      },
      {
        name: "Kanban",
        description:
          "Workflow-Visualisierung zur selbstorganisierten Arbeitssteuerung — aus dem Lean Management.",
      },
      {
        name: "Shopfloor / Officefloor",
        description:
          "Shopfloor-Management-Prinzipien auf Büroumgebungen übertragen.",
      },
      {
        name: "Daily Stand-up",
        description:
          "Tägliche 15-minütige Abstimmung für Transparenz und Hindernisbeseitigung.",
      },
      {
        name: "Sales Board",
        description:
          "Vertriebsprozesse visuell steuern — agiles Kanban für Sales-Teams.",
      },
    ],
  },
  {
    id: "check",
    icon: CheckSquare,
    label: "Check",
    title: "Überprüfung & Review",
    color: "bg-tuerkis",
    textColor: "text-tuerkis",
    borderColor: "border-tuerkis",
    bgLight: "bg-tuerkis/5",
    description:
      "Ergebnisse bewerten, Feedback integrieren und Lernschleifen schließen.",
    methods: [
      {
        name: "Review Meeting",
        description:
          "Sprintendergebnis mit Stakeholdern besprechen und Feedback integrieren.",
      },
      {
        name: "Review Board",
        description:
          "Ergebnisse und Fortschritte visuell aufbereiten und kommunizieren.",
      },
      {
        name: "All Hands Meeting",
        description:
          "Silos aufbrechen und gesamtorganisationale Transparenz schaffen.",
      },
      {
        name: "Analyse-Tools",
        description:
          "Kennzahlen und Qualitätsindikatoren systematisch auswerten.",
      },
    ],
  },
  {
    id: "act",
    icon: RefreshCw,
    label: "Act",
    title: "Anpassen & Lernen",
    color: "bg-anthrazit",
    textColor: "text-anthrazit",
    borderColor: "border-anthrazit",
    bgLight: "bg-anthrazit/5",
    description:
      "Prozesse kontinuierlich verbessern, Lernkultur etablieren und Teams in ihrer Reifung begleiten.",
    methods: [
      {
        name: "Retrospektiven",
        description:
          "Team-Lernen strukturiert gestalten — für Forming, Storming, Norming und Performing.",
      },
      {
        name: "Sailboat Retrospektive",
        description:
          "Beliebtes visuelles Format: Was treibt uns voran? Was hält uns auf?",
      },
      {
        name: "Retrospektiven-Board",
        description:
          "Digitales oder physisches Board für strukturierte Team-Retrospektiven.",
      },
      {
        name: "Management-Strategie-Board",
        description:
          "Strategische Ausrichtung und Prioritäten transparent steuern.",
      },
    ],
  },
];
