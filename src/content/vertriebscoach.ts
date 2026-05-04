import type {
  CourseModuleItem,
  CourseCohortData,
  CourseTrainerData,
  CourseTestimonialData,
} from "@/content/courseTypes";

export const vertriebscoachContent = {
  meta: {
    title: "Vertriebscoach Ausbildung (BDVT-Zertifiziert)",
    description:
      "Werde zertifizierter Agiler Vertriebscoach — in 60+ Stunden praxisnah, live online. BDVT-anerkannt. Vertrieb neu denken.",
    canonical: "/agile-ausbildungen/vertriebscoach-ausbildung/",
  },

  hero: {
    eyebrow: "BDVT-Zertifizierte Ausbildung",
    headlineLines: [
      "Kunden verstehen.",
      "Vertrauen verkaufen.",
      "Zusammenarbeit stärken.",
    ] as const,
    subline:
      "In 60+ Stunden praxisnahem Live-Online-Training wirst du zum gefragten Begleiter für agile Vertriebs- und Service-Teams — mit Coaching-Kompetenz, die wirklich überzeugt.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
    stats: [
      { value: "60+", label: "Trainingsstunden" },
      { value: "< 14", label: "Personen pro Gruppe" },
      { value: "BDVT", label: "Zertifiziert" },
    ] as const,
  },

  trustBar: [
    { value: "60+", label: "Live-Trainingsstunden", icon: "clock" },
    { value: "3", label: "Expert:innen im Team", icon: "users" },
    { value: "BDVT", label: "Zertifiziert", icon: "award" },
    { value: "Live Online", label: "Zoom & Mural", icon: "calendar" },
  ] as const,

  outcomes: {
    eyebrow: "Was du mitnimmst",
    title: "Vier Kompetenzen. Echter Vertriebswandel.",
    lead: "Kein Rebranding klassischer Verkaufslogik — sondern echte Kundenzentriertheit und wirksame Zusammenarbeit.",
    items: [
      {
        title: "Agile Transformation im Vertrieb begleiten",
        body: "Du verstehst Kulturstile, erkennst Widerstände und weißt, wie du Vertriebs- und Service-Teams durch echten Wandel zur Selbstorganisation führst.",
      },
      {
        title: "Sales Coaching für Teams und Einzelne",
        body: "Du coachst wirksam — von der Einzelperson bis zum Team. Mit Coaching-Phasen, Customer Journey Optimierung und individueller Kompetenzentwicklung.",
      },
      {
        title: "Agile Methoden im Vertriebsalltag einsetzen",
        body: "Scrum, Kanban, OKRs — du weißt, wann welche Methode passt und kannst sie souverän in Vertriebs- und Service-Kontexten begleiten.",
      },
      {
        title: "Neue Führungsmodelle etablieren",
        body: "Du etablierst Führungsmodelle, die Selbstorganisation und Verantwortungsübernahme fördern — und die Effektivität von Teams messbar steigern.",
      },
    ],
  },

  forWhom: {
    eyebrow: "Für wen",
    title: "Diese Ausbildung ist für dich, wenn …",
    items: [
      {
        title: "… du Vertriebsteams als Coach begleiten willst",
        body: "Als Vertriebsleiter:in, HR-Profi, Trainer:in oder Coach — du willst Vertriebs- und Service-Teams agil entwickeln, nicht nur verwalten.",
      },
      {
        title: "… du Agilität wirklich im Vertrieb verankern willst",
        body: "Nicht als Buzzword, sondern als echte Veränderungskompetenz — mit Tiefgang, Reflexion und Praxiserfahrung aus realen Vertriebssituationen.",
      },
      {
        title: "… du neue Führungsmodelle etablieren willst",
        body: "Du willst Führung neu denken — weg von Command & Control, hin zu Selbstorganisation und geteilter Verantwortung im Vertrieb.",
      },
      {
        title: "… dir ein starkes Netzwerk wichtig ist",
        body: "Du lernst in kleinen Gruppen mit Menschen, die denselben Anspruch haben — und bleibst danach in Verbindung.",
      },
    ],
    note: "Keine tiefen Vorkenntnisse nötig. Erfahrung im Vertrieb oder in der Teamarbeit ist hilfreich — der Wille zur echten Veränderung ist entscheidend.",
  },

  modules: {
    eyebrow: "Ausbildungsstruktur",
    title: "3 Module. 60+ Stunden. Echter Praxistransfer.",
    lead: "Alle Module sind live online via Zoom und Mural — interaktiv, ohne PowerPoint.",
    items: [
      {
        number: 1,
        title: "Grundlagen agilen Kulturwandels",
        description:
          "Du verstehst Agilität als Haltung und lernst, wie du Veränderungsprozesse in Vertriebs- und Service-Organisationen wirksam anstoßen kannst.",
        topics: [
          "Rollen- und Selbstverständnis als Vertriebscoach schärfen",
          "Agile Teams im Vertrieb aufsetzen und Werte etablieren",
          "Coaching-Interventionen passt gestalten",
          "Kulturstile erkennen und Widerstände bearbeiten",
        ],
        trainers: ["Claudia Thonet"],
        format: "Live Online",
      },
      {
        number: 2,
        title: "Sales Coaching für Teams und Einzelne",
        description:
          "Du coachst mit Struktur und Empathie — von Einzelpersonen bis zu Vertriebsteams, mit erprobten Coaching-Phasen.",
        topics: [
          "Professionelle Coaching-Phasen im Vertrieb",
          "Customer Journey Optimierung durch Coaching",
          "Individuelle Kompetenzentwicklung im Sales",
          "Kundenzentriertheit als Coaching-Ziel",
        ],
        trainers: ["Jonny Kohlhaas", "Katrin Spahn"],
        format: "Live Online",
      },
      {
        number: 3,
        title: "Frameworks und Change-Methoden",
        description:
          "Du kennst die wichtigsten agilen Methoden und weißt, wie du Veränderungsprozesse im Vertrieb iterativ gestaltest.",
        topics: [
          "Agile Methoden im Vertriebskontext einsetzen",
          "Wissenstransfer und Change-Prozesse gestalten",
          "Widerstandsmanagement professionell begleiten",
          "Iterative Verbesserung im Vertriebsalltag",
        ],
        trainers: ["Claudia Thonet"],
        format: "Live Online",
      },
    ] as CourseModuleItem[],
    addons: [
      {
        title: "Peer-Groups",
        body: "In Peer-Groups übst du das Gelernte an echten Vertriebsfällen — gemeinsam, reflektiert, wirksam.",
      },
      {
        title: "Agile Toolbox",
        body: "Checklisten, Agilitäts-Assessments, Moderationswerkzeuge, Canvas-Modelle und Board-Systeme — direkt einsetzbar im Vertriebsalltag.",
      },
      {
        title: "Praxis-Transfer",
        body: "20+ Facilitation-Techniken pro Modul — von Line-ups über Lean Café bis Lego Serious Play — für deinen Vertriebskontext.",
      },
    ],
  },

  dates: {
    eyebrow: "Termine & Preise",
    title: "Herbst 2026. Live Online.",
    lead: "Drei Module, komplett live online via Zoom und Mural — in deiner Zeitzone, ohne Reiseaufwand.",
    cohorts: [
      {
        id: "herbst-2026",
        name: "Herbst 2026",
        badge: "Nächster Start",
        format: "Live Online · Zoom & Mural",
        priceHybrid: "3.500 €",
        priceHybridLabel: "Live Online",
        vatNote: "zzgl. MwSt.",
        modules: [
          { label: "Modul 1", date: "17.–18. Sep 2026", location: "Live Online" },
          { label: "Modul 2", date: "15.–16. Okt 2026", location: "Live Online" },
          { label: "Modul 3", date: "12.–13. Nov 2026", location: "Live Online" },
        ],
        venue: "Live Online via Zoom und Mural",
        ctaLabel: "Jetzt anmelden",
        ctaHref:
          "mailto:info@claudiathonet.de?subject=Anmeldung%20Vertriebscoach%20Herbst%202026",
      },
    ] as CourseCohortData[],
    discountNote:
      "Rabatte für Selbstzahler:innen, Start-ups und Studierende auf Anfrage. Auch als Inhouse buchbar.",
    contact: {
      name: "Claudia Werian",
      email: "info@claudiathonet.de",
      phone: "+49 (0)151 – 51937219",
    },
  },

  team: {
    eyebrow: "Dein Trainer-Team",
    title: "3 Expert:innen. Echter Erfahrungsschatz.",
    lead: "Alle Trainer:innen kommen aus der Praxis — mit echten Vertriebs- und Coaching-Erfahrungen.",
    members: [
      {
        name: "Claudia Thonet",
        initials: "CT",
        avatarColor: "bg-tuerkis",
        textColor: "text-white",
        role: "Gründerin & Lead-Trainerin",
        focusTopics: ["Agile Transformation", "Vertriebscoaching", "Kulturwandel"],
        bio: "Bestseller-Autorin und Gründerin der Akademie — mit über 15 Jahren Erfahrung in agiler Transformation und Teamentwicklung.",
      },
      {
        name: "Jonny Kohlhaas",
        initials: "JK",
        avatarColor: "bg-tuerkis-80",
        textColor: "text-white",
        role: "Trainer & OKR-Coach",
        focusTopics: ["Strategieumsetzung", "Teamentwicklung", "Retrospektiven"],
        bio: "Spezialisiert darauf, Strategie im Arbeitsalltag wirklich wirksam werden zu lassen — mit Retrospektiven und OKRs als Kernthemen.",
      },
      {
        name: "Katrin Spahn",
        initials: "KS",
        avatarColor: "bg-orange-rot",
        textColor: "text-white",
        role: "Trainerin & Sales-Expertin",
        focusTopics: ["Agile Führung", "Agiler Vertrieb", "Teamentwicklung"],
        bio: "Spezialisiert auf agile Führung und agilen Vertrieb — bringt echte Sales-Praxis und Coaching-Kompetenz zusammen.",
      },
    ] as CourseTrainerData[],
  },

  testimonials: {
    eyebrow: "Stimmen",
    title: "Was Absolvent:innen sagen",
    lead: "Auszüge von Teilnehmenden der Vertriebscoach Ausbildung.",
    items: [
      {
        quote:
          "Herausragende Ausbildung mit direkt umsetzbaren Werkzeugen und wirklich ansprechenden Inhalten — ich empfehle es jedem weiter.",
        name: "Dr. Susanne Jafari-Chamgavi",
        role: "Managerin",
        company: "Daiichi Sankyo",
        rating: 5 as const,
      },
      {
        quote:
          "Das Beste, was ich für die Umsetzung in die Praxis erhalten konnte. Die Methoden sind direkt im Vertriebsalltag einsetzbar.",
        name: "Sarah Jochimsen",
        role: "Head of Training & Talent Management",
        company: "FFG",
        rating: 5 as const,
      },
      {
        quote:
          "Durch die agile Coaching-Ausbildung konnte ich unseren internen Service-Bereich komplett neu ausrichten. Klare Empfehlung!",
        name: "Kristina Simon",
        role: "Personalreferentin",
        company: "Hch. Perschmann GmbH",
        rating: 5 as const,
      },
    ] as CourseTestimonialData[],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      {
        question: "Brauche ich Vertriebserfahrung?",
        answer:
          "Keine tiefen Vorkenntnisse sind erforderlich. Erfahrung im Vertrieb oder in der Teamarbeit ist hilfreich, aber kein Muss. Wichtig ist Offenheit für neue Ansätze und der Wille zur Veränderung.",
      },
      {
        question: "Wann erhalte ich das BDVT-Zertifikat?",
        answer:
          "Nach erfolgreichem Abschluss aller 3 Module und der Peer-Group-Arbeit erhältst du das anerkannte BDVT-Zertifikat als Agiler Vertriebscoach.",
      },
      {
        question: "Wie läuft das Online-Format ab?",
        answer:
          "Alle Module finden live via Zoom statt. Mural wird für kollaborative Boards und Visualisierungen genutzt. Kein Frontalunterricht — alle Einheiten sind interaktiv gestaltet.",
      },
      {
        question: "Gibt es die Ausbildung auch als Inhouse-Format?",
        answer:
          "Ja — die Ausbildung ist als maßgeschneidertes Inhouse-Programm für Unternehmen buchbar, deutschlandweit. Ideal für Vertriebsteams, die gemeinsam eine neue Kultur entwickeln wollen.",
      },
      {
        question: "Was bringt mir das Zertifikat konkret?",
        answer:
          "Das BDVT-Zertifikat ist ein anerkannter Nachweis deiner Coaching- und Facilitation-Kompetenz im Vertriebskontext. Es öffnet Türen für interne Beförderungen und externe Beratungsmandate.",
      },
    ],
  },

  inhouse: {
    eyebrow: "Für Unternehmen",
    headline: "Die Ausbildung auch Inhouse?",
    body: "Maßgeschneidert für euer Vertriebsteam, eure Sprache, eure Herausforderungen — deutschlandweit, mit demselben Expert:innen-Team.",
    ctaLabel: "Inhouse-Format anfragen",
    ctaHref: "/beratung",
  },

  finalCta: {
    headline: "Bereit, Vertrieb neu zu denken?",
    subline:
      "Melde dich an oder sichere dir ein kostenfreies 30-Min-Gespräch — ohne Verpflichtung, mit echter Orientierung.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
  },
};
