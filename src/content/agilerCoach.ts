export type CourseModule = {
  number: number;
  title: string;
  description: string;
  topics: string[];
  trainers: string[];
  format: string;
};

export type CourseCohort = {
  id: string;
  name: string;
  badge: string;
  format: string;
  priceHybrid: string;
  priceOnline: string;
  vatNote: string;
  modules: { label: string; date: string; location: string }[];
  venue: string;
  ctaLabel: string;
  ctaHref: string;
};

export type CourseTrainer = {
  name: string;
  initials: string;
  avatarColor: string;
  textColor: string;
  role: string;
  focusTopics: string[];
  bio: string;
};

export type CourseTestimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type CourseFAQItem = {
  question: string;
  answer: string;
};

export const agilerCoachContent = {
  meta: {
    title: "Agile Coach Ausbildung (BDVT-Zertifiziert)",
    description:
      "In 100+ Stunden praxisnahem Training zur zertifizierten Agile Coach:in — BDVT-anerkannt, in kleinen Gruppen, mit echten Fallarbeiten und erfahrenen Expert:innen.",
    canonical: "/agile-ausbildungen/agiler-coach/",
  },

  hero: {
    eyebrow: "BDVT-Zertifizierte Ausbildung",
    headlineLines: [
      "Teams begleiten.",
      "Veränderung gestalten.",
      "Haltung leben.",
    ] as const,
    subline:
      "In 100+ Stunden praxisnahem Training wirst du zur gefragten Begleiter:in für agile Transformationen — mit Methoden, die wirken, und einer Haltung, die trägt.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
    stats: [
      { value: "100+", label: "Trainingsstunden" },
      { value: "< 14", label: "Personen pro Gruppe" },
      { value: "5", label: "Expert:innen im Team" },
    ] as const,
  },

  trustBar: [
    { value: "100+", label: "Live-Trainingsstunden", icon: "clock" },
    { value: "5", label: "Expert:innen im Team", icon: "users" },
    { value: "BDVT", label: "Zertifiziert", icon: "award" },
    { value: "Bildungsurlaub", label: "Anerkannt in Berlin", icon: "calendar" },
  ] as const,

  outcomes: {
    eyebrow: "Was du mitnimmst",
    title: "Vier Kompetenzen. Echte Wirksamkeit.",
    lead: "Kein Methodenfeuerwerk — sondern Tiefe, Praxis und eine Haltung, die Veränderung wirklich trägt.",
    items: [
      {
        title: "Agile Transformation begleiten",
        body: "Du verstehst Kulturstile, erkennst Widerstände früh und weißt, wie du Entscheider, Teams und Bereiche durch echten Wandel führst.",
      },
      {
        title: "Teams & Einzelne coachen",
        body: "Du coachst wirksam — von der Einzelperson bis zum High-Performance-Team. Mit Werkzeugen, die zu echten Situationen passen.",
      },
      {
        title: "Workshops & Meetings designen",
        body: "Du konzipierst Formate, die wirklich funktionieren: Kommunikationsdesign, Moderation, Retrospektiven — echte Beteiligung statt Frontalunterricht.",
      },
      {
        title: "Methoden & Frameworks einsetzen",
        body: "Scrum, Kanban, OKRs — du weißt, wann welches Framework passt, und kannst es souverän in der Praxis begleiten.",
      },
    ],
  },

  forWhom: {
    eyebrow: "Für wen",
    title: "Diese Ausbildung ist für dich, wenn …",
    items: [
      {
        title: "… du Organisationen durch Wandel begleiten willst",
        body: "Als Berater:in, Scrum Master, HR-Profi oder Führungskraft — du willst den agilen Wandel aktiv mitgestalten, nicht nur verwalten.",
      },
      {
        title: "… du Agilität wirklich verstehen willst",
        body: "Nicht als Rollenklischee oder Trendwort, sondern als echte Veränderungskompetenz — mit Tiefgang, Reflexion und Praxiserfahrung.",
      },
      {
        title: "… du an echten Fällen lernen willst",
        body: "Supervision, Peer-Groups, Fallarbeit — du lernst nicht in der Theorie, sondern an realen Herausforderungen aus deiner Praxis.",
      },
      {
        title: "… dir ein starkes Netzwerk wichtig ist",
        body: "Du lernst in kleinen Gruppen mit Menschen, die den gleichen Anspruch haben — und bleibst danach in Verbindung.",
      },
    ],
    note: "Keine tiefen Vorkenntnisse nötig. Wichtig ist Offenheit für persönliches Lernen — und der Wille, wirklich etwas zu verändern.",
  },

  modules: {
    eyebrow: "Ausbildungsstruktur",
    title: "5 Module. Über 100 Stunden. Echter Praxistransfer.",
    lead: "Alle Module sind live moderiert — in Berlin oder online. Kein PowerPoint, kein Frontalunterricht.",
    items: [
      {
        number: 1,
        title: "Grundlagen des agilen Kulturwandels",
        description:
          "Du verstehst Agilität als Haltung und lernst, wie du Veränderungsprozesse in Organisationen wirksam anstoßen und begleiten kannst.",
        topics: [
          "Rollen- und Selbstverständnis als Agile Coach schärfen",
          "Agile Teams aufsetzen und Werte etablieren",
          "Kulturstile erkennen und einordnen",
          "Passgenaue Interventionen gestalten",
        ],
        trainers: ["Claudia Thonet"],
        format: "Berlin · Präsenz",
      },
      {
        number: 2,
        title: "Methoden & Frameworks",
        description:
          "Scrum, Kanban, OKRs — du weißt, wann welches Framework passt, und kannst hochwertige Trainings für andere gestalten.",
        topics: [
          "Scrum, Kanban und OKRs im Detail",
          "Iterative Arbeitsweisen in der Praxis begleiten",
          "Effektives Veränderungsmanagement",
          "Didaktisch starke Online-Trainings gestalten",
        ],
        trainers: ["Jason Textor", "Tjorven Graßnick"],
        format: "Live Online",
      },
      {
        number: 3,
        title: "Coaching von Teams & Einzelnen",
        description:
          "Du coachst mit Struktur und Empathie — von Einzelpersonen bis zu ganzen Teams, mit erprobten Prinzipien.",
        topics: [
          "Team-Coaching wirksam gestalten",
          "Einzelpersonen begleiten und fördern",
          "Coaching-Prinzipien und ethische Grundlagen",
          "Motivation, Engagement und Leistungsverbesserung",
        ],
        trainers: ["Anja Höhne", "Jonny Kohlhaas"],
        format: "Berlin · Präsenz",
      },
      {
        number: 4,
        title: "Meeting- & Kommunikationsdesign",
        description:
          "Du gestaltest Formate, die verbinden statt langweilen — von Stand-ups bis zu großen Transformations-Workshops.",
        topics: [
          "Meetings planen und souverän moderieren",
          "Kommunikationsformate zielgerichtet konzipieren",
          "Zusammenarbeit und Informationsfluss optimieren",
          "Hybride und Remote-Formate professionell begleiten",
        ],
        trainers: ["Claudia Thonet", "Anja Höhne"],
        format: "Live Online",
      },
      {
        number: 5,
        title: "Hindernisse & Lösungen in der Transformation",
        description:
          "Du kennst typische Widerstände und weißt, wie du souverän damit umgehst — lösungsorientiert, systemisch, wirksam.",
        topics: [
          "Phasen von Veränderungsprozessen kennen",
          "Widerstände und Ambivalenzen professionell bearbeiten",
          "Systemische Perspektive entwickeln",
          "Komplexität im Transformations-Alltag navigieren",
        ],
        trainers: ["Claudia Thonet"],
        format: "Berlin · Präsenz",
      },
    ] satisfies CourseModule[],
    addons: [
      {
        title: "Peer-Groups",
        body: "In Peer-Groups übst du das Gelernte an echten Praxisfällen — gemeinsam, reflektiert, wirksam.",
      },
      {
        title: "Individuelle Supervision",
        body: "3 persönliche Online-Supervisionseinheiten — für deine ganz konkreten Wachsthemen.",
      },
      {
        title: "Agile Toolbox",
        body: "Templates, Canvas-Modelle, Checklisten und Board-Systeme — direkt einsetzbar in deiner Praxis.",
      },
    ],
  },

  methods: [
    "Line-ups", "Think-Pair-Share", "Brainwriting", "4 Ws", "Work & Travel",
    "Fishbowl", "Peer-Groups", "Reflecting Teams", "Mentimeter", "Narrative",
    "Lego Serious Play", "Floating Agenda", "KDT-Walk", "Ideations",
    "Prototyping", "Staging", "Lean Café", "Agile Gaming",
  ] as const,

  dates: {
    eyebrow: "Termine & Preise",
    title: "Zwei Kohorten. Eine Entscheidung.",
    lead: "Hybrid in Berlin oder komplett online — wähle das Format, das zu dir passt.",
    cohorts: [
      {
        id: "winter-2026",
        name: "Winter – Frühling 2026",
        badge: "Nächster Start",
        format: "Hybrid · Berlin + Live Online",
        priceHybrid: "5.900 €",
        priceOnline: "5.400 €",
        vatNote: "zzgl. MwSt.",
        modules: [
          { label: "Modul 1", date: "22.–23. Jan 2026", location: "Berlin · Präsenz" },
          { label: "Modul 2", date: "19.–20. Feb 2026", location: "Live Online" },
          { label: "Modul 3", date: "16.–17. Mär 2026", location: "Berlin · Präsenz" },
          { label: "Modul 4", date: "16.–17. Apr 2026", location: "Live Online" },
          { label: "Modul 5", date: "28.–29. Mai 2026", location: "Berlin · Präsenz" },
        ],
        venue: "Meeet | Mitte, Chausseestraße 86, 10115 Berlin",
        ctaLabel: "Jetzt anmelden",
        ctaHref: "mailto:info@claudiathonet.de?subject=Anmeldung%20Agile%20Coach%20Winter%202026",
      },
      {
        id: "herbst-2026",
        name: "Herbst 2026 – Winter 2027",
        badge: "",
        format: "Hybrid · Berlin + Live Online",
        priceHybrid: "5.900 €",
        priceOnline: "5.400 €",
        vatNote: "zzgl. MwSt.",
        modules: [
          { label: "Modul 1", date: "10.–11. Sep 2026", location: "Berlin · Präsenz" },
          { label: "Modul 2", date: "08.–09. Okt 2026", location: "Live Online" },
          { label: "Modul 3", date: "05.–06. Nov 2026", location: "Berlin · Präsenz" },
          { label: "Modul 4", date: "03.–04. Dez 2026", location: "Live Online" },
          { label: "Modul 5", date: "18.–19. Jan 2027", location: "Berlin · Präsenz" },
        ],
        venue: "stratum GmbH, Boxhagener Str. 16 (Alte Pianofabrik), 10245 Berlin",
        ctaLabel: "Anmelden",
        ctaHref: "mailto:info@claudiathonet.de?subject=Anmeldung%20Agile%20Coach%20Herbst%202026",
      },
    ] satisfies CourseCohort[],
    discountNote: "Rabatte für Selbstzahler:innen, Start-ups und Studierende auf Anfrage.",
    contact: {
      name: "Claudia Werian",
      email: "info@claudiathonet.de",
      phone: "+49 (0)151 – 51937219",
    },
  },

  team: {
    eyebrow: "Dein Trainer-Team",
    title: "5 Expert:innen. Echter Erfahrungsschatz.",
    lead: "Alle Trainer:innen kommen aus der Praxis — mit echten Unternehmens- und Coaching-Erfahrungen.",
    members: [
      {
        name: "Claudia Thonet",
        initials: "CT",
        avatarColor: "bg-tuerkis",
        textColor: "text-white",
        role: "Gründerin & Lead-Trainerin",
        focusTopics: ["Agile Transformation", "Agile Führung", "Kulturwandel"],
        bio: "Bestseller-Autorin, Botschafterin für agilen Wandel und Gründerin der Akademie — mit über 15 Jahren Erfahrung in Transformation.",
      },
      {
        name: "Anja Höhne",
        initials: "AH",
        avatarColor: "bg-anthrazit",
        textColor: "text-white",
        role: "Trainerin & Coach",
        focusTopics: ["Agile Führung", "Kommunikationsdesign", "Konfliktmanagement"],
        bio: "20+ Jahre Erfahrung in HR, People Development und Transformation. Spezialisiert auf Moderation und Kommunikation.",
      },
      {
        name: "Jonny Kohlhaas",
        initials: "JK",
        avatarColor: "bg-tuerkis-80",
        textColor: "text-white",
        role: "Trainer & OKR-Coach",
        focusTopics: ["Strategieumsetzung", "Teamentwicklung", "OKRs"],
        bio: "Spezialisiert darauf, Strategie im Arbeitsalltag wirklich wirksam werden zu lassen — mit Retrospektiven und OKRs als Kernthemen.",
      },
      {
        name: "Jason Textor",
        initials: "JT",
        avatarColor: "bg-orange-rot",
        textColor: "text-white",
        role: "Trainer & Scrum-Experte",
        focusTopics: ["Scrum", "Kanban", "Design Thinking", "Product Owner"],
        bio: "Überzeugt: Spaß und positive Erlebnisse sind der Schlüssel zu nachhaltigem Lernen. Experte für agile Frameworks und Produktentwicklung.",
      },
      {
        name: "Tjorven Graßnick",
        initials: "TG",
        avatarColor: "bg-anthrazit-80",
        textColor: "text-white",
        role: "Trainerin & Prozessexpertin",
        focusTopics: ["Agile Methoden", "Holakratie", "Prozessmanagement"],
        bio: "Macht komplexe Prozesse verständlich und erfahrbar — mit besonderem Fokus auf Qualitätsmanagement und Holakratie.",
      },
    ] satisfies CourseTrainer[],
  },

  testimonials: {
    eyebrow: "Stimmen",
    title: "Was Absolvent:innen sagen",
    lead: "Aus 120+ Bewertungen — Auszüge von Teilnehmenden der Agile Coach Ausbildung.",
    items: [
      {
        quote:
          "Claudia und ihr Team schaffen es, wirklich praxisnah und individuell die Methoden und konkreten Tools für New Work zu vermitteln. Dabei immer hands on, ohne PowerPoint und mit so viel Herzblut, dass es einfach nur zu empfehlen ist!",
        name: "Henrike Karmasin",
        role: "Commercial Director",
        company: "Daiichi Sankyo",
        rating: 5 as const,
      },
      {
        quote:
          "Claudia ist eine hervorragende Dozentin und Trainerin — sehr fundiert, mit großer Empathie und einem tiefen Verständnis für die Praxis in Organisationen.",
        name: "Raphael Bauhofer",
        role: "Co-Lead Transformation & Kultur",
        company: "Schweizer Post",
        rating: 5 as const,
      },
      {
        quote:
          "So happy and so proud to be part of this amazing group with an amazing Coach. Die Ausbildung hat meine Sicht auf Veränderungsprozesse komplett verändert.",
        name: "Stefanie S. Stürmer",
        role: "Sales Managerin",
        rating: 5 as const,
      },
      {
        quote:
          "Ein tolles und wirksames Konzept für Agilität, wunderbar moderiert und trainiert. Die Methoden sind direkt in der Praxis einsetzbar.",
        name: "Katrin Spahn",
        role: "Chief Sales Marketing Officer",
        rating: 5 as const,
      },
      {
        quote:
          "Das Online Training besticht durch gute Struktur, gelassenen Umgang und die humorvolle Art, auch schwierige Themen anzugehen.",
        name: "Natascha Melcher",
        role: "Online- und Präsenztrainerin",
        rating: 5 as const,
      },
      {
        quote:
          "Claudia Thonet und ihr Team sind eine überdurchschnittliche, performante agile Manufaktur. Wer sich für agiles Arbeiten begeistert, ist hier richtig.",
        name: "Marek Gawlik",
        role: "Senior Project Manager",
        rating: 5 as const,
      },
    ] satisfies CourseTestimonial[],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      {
        question: "Brauche ich Vorkenntnisse?",
        answer:
          "Keine tiefen Vorkenntnisse sind erforderlich. Wichtig ist Interesse an Coaching und Offenheit für persönliches Lernen. Erfahrung in Organisationen oder Teams ist hilfreich, aber kein Muss.",
      },
      {
        question: "Wann erhalte ich das BDVT-Zertifikat?",
        answer:
          "Nach erfolgreichem Abschluss aller 5 Module und der Supervisionseinheiten erhältst du das anerkannte BDVT-Zertifikat. In Berlin ist die Ausbildung zudem als Bildungsurlaub anerkannt.",
      },
      {
        question: "Wie groß sind die Gruppen?",
        answer:
          "Wir arbeiten bewusst in kleinen Gruppen von maximal 14 Teilnehmenden — damit echter Austausch und persönliche Begleitung möglich sind.",
      },
      {
        question: "Was ist der Unterschied zwischen Hybrid und Online?",
        answer:
          "Beim Hybrid-Format finden Module 1, 3 und 5 in Präsenz in Berlin statt — mit dem direkten Erleben echter Workshop-Atmosphären. Module 2 und 4 sind Live-Online. Das reine Online-Format ist komplett digital und 500 € günstiger.",
      },
      {
        question: "Was kostet die Ausbildung?",
        answer:
          "Das Hybrid-Format kostet 5.900 € zzgl. MwSt., das Online-Format 5.400 € zzgl. MwSt. Für Selbstzahler:innen, Start-ups und Studierende gibt es Rabatte auf Anfrage.",
      },
      {
        question: "Gibt es die Ausbildung auch als Inhouse-Format?",
        answer:
          "Ja — die Ausbildung ist auch als maßgeschneidertes Inhouse-Programm für Unternehmen buchbar, deutschlandweit. Kontaktiere uns für ein unverbindliches Erstgespräch.",
      },
      {
        question: "Was kommt nach der Ausbildung?",
        answer:
          "Du erhältst dauerhaften Zugang zur Agile Toolbox (Templates, Canvas-Modelle, Checklisten) und wirst Teil eines Netzwerks gleichgesinnter Profis. Viele Absolvent:innen treffen sich im Alumni-Netzwerk und regelmäßigen Community-Calls weiter.",
      },
    ] satisfies CourseFAQItem[],
  },

  inhouse: {
    eyebrow: "Für Unternehmen",
    headline: "Die Ausbildung auch Inhouse?",
    body: "Maßgeschneidert für euer Unternehmen, eure Sprache, eure Herausforderungen — deutschlandweit, mit demselben Expert:innen-Team.",
    ctaLabel: "Inhouse-Format anfragen",
    ctaHref: "/beratung",
  },

  finalCta: {
    headline: "Bereit, den nächsten Schritt zu gehen?",
    subline:
      "Melde dich an oder sichere dir ein kostenfreies 30-Min-Gespräch — ohne Verpflichtung, mit echter Orientierung.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
  },
} as const;
