import type {
  CourseModuleItem,
  CourseCohortData,
  CourseTrainerData,
  CourseTestimonialData,
} from "@/content/courseTypes";

export const agilerFacilitatorContent = {
  meta: {
    title: "Agile Facilitator Ausbildung (BDVT-Zertifiziert)",
    description:
      "In 50+ Stunden zur zertifizierten Agile Facilitatorin — BDVT-anerkannt, Workshops gestalten, Meetings neu denken, innovative Formate entwickeln.",
    canonical: "/agile-ausbildungen/agiler-facilitator/",
  },

  hero: {
    eyebrow: "BDVT-Zertifizierte Ausbildung",
    headlineLines: [
      "Trainings gestalten.",
      "Workshops moderieren.",
      "Meetings neu denken.",
    ] as const,
    subline:
      "In 50+ Stunden praxisnahem Training wirst du zur gefragten Begleiter:in für Workshops und Trainings — mit Formaten, die wirklich funktionieren, und Methoden, die Menschen aktivieren.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
    stats: [
      { value: "50+", label: "Trainingsstunden" },
      { value: "< 14", label: "Personen pro Gruppe" },
      { value: "BDVT", label: "Zertifiziert" },
    ] as const,
  },

  trustBar: [
    { value: "50+", label: "Live-Trainingsstunden", icon: "clock" },
    { value: "3", label: "Expert:innen im Team", icon: "users" },
    { value: "BDVT", label: "Zertifiziert", icon: "award" },
    { value: "Bildungsurlaub", label: "Anerkannt in Berlin", icon: "calendar" },
  ] as const,

  outcomes: {
    eyebrow: "Was du mitnimmst",
    title: "Drei Kompetenzen. Echte Wirksamkeit.",
    lead: "Kein Methodenfeuerwerk — sondern Tiefe, Praxis und Formate, die Menschen wirklich bewegen.",
    items: [
      {
        title: "Workshops souverän gestalten",
        body: "Du konzipierst Workshops mit Storyboards, designst packende Check-ins und strukturierst jeden Phasenübergang vom Kickoff bis zum Transfer.",
      },
      {
        title: "Virtuelle Formate professionell moderieren",
        body: "Du moderierst Plannings, Decisions, Reviews und All-Hands online — mit Meeting-Board-Konzepten und Retrospektiven, die wirklich wirken.",
      },
      {
        title: "Innovative Formate entwickeln",
        body: "Barcamps, Lean Cafés, Open Space Agility, Design Thinking — du weißt, wann welches Format passt und kannst es souverän einsetzen.",
      },
      {
        title: "Methoden gezielt einsetzen",
        body: "20+ Methoden pro Modul — von Line-ups über LEGO Serious Play bis Agile Gaming. Du hast die Toolbox, die jede Situation meistert.",
      },
    ],
  },

  forWhom: {
    eyebrow: "Für wen",
    title: "Diese Ausbildung ist für dich, wenn …",
    items: [
      {
        title: "… du Trainings und Workshops wirkungsvoller gestalten willst",
        body: "Als Trainer:in, Coach, HR-Profi oder Führungskraft — du willst Formate, in denen Menschen aktiv lernen statt passiv zuhören.",
      },
      {
        title: "… du Meetings neu denken willst",
        body: "Nicht das 47. Zoom-Meeting mit Folien — sondern Formate, die Energie erzeugen, Entscheidungen ermöglichen und echte Zusammenarbeit fördern.",
      },
      {
        title: "… du an echten Methoden lernen willst",
        body: "Du lernst durch Erleben — mit 20+ Methoden pro Modul, die direkt in deiner Praxis einsetzbar sind.",
      },
      {
        title: "… dir Kreativität und Struktur wichtig sind",
        body: "Struktur und Offenheit schließen sich nicht aus — du lernst, wie du beides verbindest und Teilnehmende zu aktiven Mitgestalter:innen machst.",
      },
    ],
    note: "Keine tiefen Vorkenntnisse nötig. Wichtig ist Offenheit für interaktives Lernen — und der Wille, Meetings und Trainings wirklich zu verändern.",
  },

  modules: {
    eyebrow: "Ausbildungsstruktur",
    title: "3 Module. 50+ Stunden. Echter Praxistransfer.",
    lead: "Alle Module sind live moderiert — in Berlin oder online. Kein PowerPoint, kein Frontalunterricht.",
    items: [
      {
        number: 1,
        title: "Grundlagen agiler Facilitation",
        description:
          "Du lernst Workshop-Konzeption mit Storyboards und designst packende Einstiege und Moderationsphasen.",
        topics: [
          "Workshop-Konzeption mit Storyboards",
          "Packende Check-ins und Openings gestalten",
          "Werkzeuge für jede Workshop-Phase",
          "Vom Kickoff bis zum Transfer moderieren",
        ],
        trainers: ["Claudia Thonet", "Jonny Kohlhaas"],
        format: "Berlin · Präsenz",
      },
      {
        number: 2,
        title: "Virtuelle Moderation & Visualisierung",
        description:
          "Du konzipierst Meeting-Boards und moderierst Plannings, Decisions und Reviews online mit echtem Engagement.",
        topics: [
          "Meeting-Board-Konzeption entwickeln",
          "Plannings, Decisions und Reviews moderieren",
          "All-Hands und Retrospektiven gestalten",
          "Visualisierung als Moderationswerkzeug",
        ],
        trainers: ["Claudia Thonet", "Anja Höhne"],
        format: "Live Online",
      },
      {
        number: 3,
        title: "Innovative Formate & Kreativmethoden",
        description:
          "Du lernst Barcamps, Lean Cafés und Open Space Agility — und weißt, wie du nachhaltige Lernreisen gestaltest.",
        topics: [
          "Barcamps und Lean Cafés konzipieren",
          "Open Space Agility und Design Thinking",
          "Agile Games als Lernmethode",
          "Nachhaltige Lernreisen entwickeln",
        ],
        trainers: ["Jonny Kohlhaas"],
        format: "Berlin · Präsenz",
      },
    ] as CourseModuleItem[],
    addons: [
      {
        title: "Peer-Groups",
        body: "In Peer-Groups übst du das Gelernte an echten Praxisfällen — gemeinsam, reflektiert, wirksam.",
      },
      {
        title: "Agile Toolbox",
        body: "Templates, Canvas-Modelle, Checklisten und Board-Systeme — direkt einsetzbar in deiner Praxis.",
      },
      {
        title: "Methoden-Bibliothek",
        body: "20+ Methoden pro Modul — von Line-ups über Fishbowl bis LEGO Serious Play — als digitale Referenz.",
      },
    ],
  },

  dates: {
    eyebrow: "Termine & Preise",
    title: "Herbst 2026. Eine Entscheidung.",
    lead: "Hybrid in Berlin oder komplett online — wähle das Format, das zu dir passt.",
    cohorts: [
      {
        id: "herbst-2026",
        name: "Herbst 2026",
        badge: "Nächster Start",
        format: "Hybrid · Berlin + Live Online",
        priceHybrid: "3.900 €",
        priceHybridLabel: "Präsenz & Online",
        priceOnline: "3.500 €",
        priceOnlineLabel: "Komplett Online",
        vatNote: "zzgl. MwSt.",
        modules: [
          { label: "Modul 1", date: "24.–25. Sep 2026", location: "Berlin · Präsenz" },
          { label: "Modul 2", date: "22.–23. Okt 2026", location: "Live Online" },
          { label: "Modul 3", date: "19.–20. Nov 2026", location: "Berlin · Präsenz" },
        ],
        venue: "Berlin Mitte (Adresse wird nach Anmeldung bekannt gegeben)",
        ctaLabel: "Jetzt anmelden",
        ctaHref:
          "mailto:info@claudiathonet.de?subject=Anmeldung%20Agile%20Facilitator%20Herbst%202026",
      },
    ] as CourseCohortData[],
    discountNote: "Rabatte für Selbstzahler:innen, Start-ups und Studierende auf Anfrage.",
    contact: {
      name: "Claudia Werian",
      email: "info@claudiathonet.de",
      phone: "+49 (0)151 – 51937219",
    },
  },

  team: {
    eyebrow: "Dein Trainer-Team",
    title: "3 Expert:innen. Echter Erfahrungsschatz.",
    lead: "Alle Trainer:innen kommen aus der Praxis — mit echten Workshop- und Coaching-Erfahrungen.",
    members: [
      {
        name: "Claudia Thonet",
        initials: "CT",
        avatarColor: "bg-tuerkis",
        textColor: "text-white",
        role: "Gründerin & Lead-Trainerin",
        focusTopics: ["Agile Facilitation", "Workshop-Design", "Kulturwandel"],
        bio: "Bestseller-Autorin, Botschafterin für agilen Wandel und Gründerin der Akademie — mit über 15 Jahren Erfahrung in Transformation und Workshop-Gestaltung.",
      },
      {
        name: "Jonny Kohlhaas",
        initials: "JK",
        avatarColor: "bg-tuerkis-80",
        textColor: "text-white",
        role: "Trainer & Strategie-Coach",
        focusTopics: ["Strategieumsetzung", "Innovative Formate", "Agile Gaming"],
        bio: "Spezialisiert auf innovative Lernformate und Barcamp-Konzepte. Bringt Energie und Kreativität in jede Moderation.",
      },
      {
        name: "Anja Höhne",
        initials: "AH",
        avatarColor: "bg-anthrazit",
        textColor: "text-white",
        role: "Trainerin & Kommunikationsexpertin",
        focusTopics: ["Virtuelle Moderation", "Kommunikationsdesign", "Visualisierung"],
        bio: "20+ Jahre Erfahrung in HR und People Development. Spezialisiert auf virtuelle Moderation und Kommunikationsdesign.",
      },
    ] as CourseTrainerData[],
  },

  testimonials: {
    eyebrow: "Stimmen",
    title: "Was Absolvent:innen sagen",
    lead: "Auszüge von Teilnehmenden unserer Ausbildungsprogramme.",
    items: [
      {
        quote:
          "Claudia und ihr Team schaffen es, wirklich praxisnah und individuell die Methoden und konkreten Tools zu vermitteln. Dabei immer hands on, ohne PowerPoint und mit so viel Herzblut, dass es einfach nur zu empfehlen ist!",
        name: "Henrike Karmasin",
        role: "Commercial Director",
        company: "Daiichi Sankyo",
        rating: 5 as const,
      },
      {
        quote:
          "Die Methoden sind direkt in der Praxis einsetzbar — das ist es, was wirklich zählt. Jedes Modul war ein echtes Erlebnis.",
        name: "Sarah Jochimsen",
        role: "Head of Training & Talent Management",
        company: "FFG",
        rating: 5 as const,
      },
      {
        quote:
          "Die Mischung aus Präsenz und Online hat perfekt funktioniert. Die Werkzeuge für virtuelle Moderation sind Gold wert.",
        name: "Natascha Melcher",
        role: "Online- und Präsenztrainerin",
        rating: 5 as const,
      },
    ] as CourseTestimonialData[],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      {
        question: "Brauche ich Vorkenntnisse?",
        answer:
          "Keine tiefen Vorkenntnisse sind erforderlich. Erfahrung in der Zusammenarbeit mit Teams oder in Trainings ist hilfreich, aber kein Muss. Wichtig ist Offenheit für interaktives Lernen.",
      },
      {
        question: "Wann erhalte ich das BDVT-Zertifikat?",
        answer:
          "Nach erfolgreichem Abschluss aller 3 Module erhältst du das anerkannte BDVT-Zertifikat. In Berlin ist die Ausbildung zudem als Bildungsurlaub anerkannt.",
      },
      {
        question: "Was ist der Unterschied zwischen Hybrid und Online?",
        answer:
          "Beim Hybrid-Format finden Module 1 und 3 in Präsenz in Berlin statt. Modul 2 ist Live-Online. Das reine Online-Format ist komplett digital und 400 € günstiger.",
      },
      {
        question: "Gibt es die Ausbildung auch als Inhouse-Format?",
        answer:
          "Ja — die Ausbildung ist als maßgeschneidertes Inhouse-Programm für Unternehmen buchbar, deutschlandweit. Kontaktiere uns für ein unverbindliches Erstgespräch.",
      },
      {
        question: "Wie groß sind die Gruppen?",
        answer:
          "Wir arbeiten bewusst in kleinen Gruppen von maximal 14 Teilnehmenden — damit echter Austausch und persönliche Begleitung möglich sind.",
      },
    ],
  },

  inhouse: {
    eyebrow: "Für Unternehmen",
    headline: "Die Ausbildung auch Inhouse?",
    body: "Maßgeschneidert für euer Unternehmen, eure Sprache, eure Herausforderungen — deutschlandweit, mit demselben Expert:innen-Team.",
    ctaLabel: "Inhouse-Format anfragen",
    ctaHref: "/beratung",
  },

  finalCta: {
    headline: "Bereit, Workshops zu transformieren?",
    subline:
      "Melde dich an oder sichere dir ein kostenfreies 30-Min-Gespräch — ohne Verpflichtung, mit echter Orientierung.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
  },
};
