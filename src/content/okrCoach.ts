export type OkrDay = {
  number: number;
  label: string;
  title: string;
  description: string;
  topics: string[];
};

export type OkrCohort = {
  id: string;
  name: string;
  badge: string;
  dates: string;
  dateTbd: boolean;
  location: string;
  venue: string;
  price: string;
  vatNote: string;
  ctaLabel: string;
  ctaHref: string;
};

export type OkrTestimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type OkrFAQItem = {
  question: string;
  answer: string;
};

export const okrCoachContent = {
  meta: {
    title: "OKR Coach Ausbildung (BDVT & ECA Zertifiziert)",
    description:
      "In 3 intensiven Präsenztagen zur zertifizierten OKR Coach:in — BDVT- und ECA-anerkannt, mit 90 Min. Supervision, OKR Toolbox und echten Simulationen.",
    canonical: "/agile-ausbildungen/okr-coach/",
  },

  hero: {
    eyebrow: "BDVT & ECA Zertifiziert",
    headlineLines: [
      "Strategie.",
      "Umsetzung.",
      "Wirkung.",
    ] as const,
    subline:
      "In 3 intensiven Präsenztagen lernst du, OKRs professionell einzuführen, zu begleiten und als Coach wirksam zu machen — mit Praxis, Simulation und echter Fallarbeit.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
    stats: [
      { value: "3", label: "Intensive Präsenztage" },
      { value: "BDVT + ECA", label: "Doppelt zertifiziert" },
      { value: "90 Min", label: "Individuelle Supervision" },
    ] as const,
  },

  trustBar: [
    { value: "3 Tage", label: "Intensiv-Präsenztraining", icon: "clock" },
    { value: "BDVT + ECA", label: "Doppelt zertifiziert", icon: "award" },
    { value: "Toolbox", label: "Templates & Materialien inklusive", icon: "box" },
    { value: "90 Min", label: "Individuelle Supervision", icon: "message" },
  ] as const,

  outcomes: {
    eyebrow: "Was du mitnimmst",
    title: "Vier Kompetenzen. Sofort einsetzbar.",
    lead: "Praxis vor Theorie — du lernst OKR nicht aus dem Buch, sondern durch Simulation, Fallarbeit und echte Coaching-Situationen.",
    items: [
      {
        title: "Strategie in Ziele überführen",
        body: "Du weißt, wie du Visionen und Strategien in messbare Objectives und Key Results übersetzt — so, dass Teams wirklich danach arbeiten.",
      },
      {
        title: "OKR strukturiert einführen",
        body: "Du kannst OKRs in Organisationen einführen, Widerstände begleiten, Rhythmen etablieren und den Transfer in den Alltag sichern.",
      },
      {
        title: "Als OKR Coach wirksam agieren",
        body: "Du kennst deine Rolle als Coach, Trainer oder Berater — und weißt, wie du Führungskräfte und Teams bei der Zielarbeit begleitest.",
      },
      {
        title: "Fortschritt & Lernen begleiten",
        body: "OKR-Reviews, Check-ins, Retrospektiven — du moderierst und coachst diese Formate professionell und bringst echte Reflexion in die Zielarbeit.",
      },
    ],
  },

  forWhom: {
    eyebrow: "Für wen",
    title: "Diese Ausbildung ist für dich, wenn …",
    items: [
      {
        title: "… du OKRs professionell einführen willst",
        body: "Als Berater:in, Coach, Agile Master oder HR-Profi — du begleitest Organisationen bei der OKR-Einführung und willst dabei wirklich wirksam sein.",
      },
      {
        title: "… du Strategie mit Umsetzung verbinden willst",
        body: "Du weißt, dass gute Strategien oft an Fokus und Prioritäten scheitern — und willst das in deiner Organisation oder bei deinen Kunden verändern.",
      },
      {
        title: "… du Führungskräfte und Teams begleiten willst",
        body: "Du coachst, trainierst oder berätst — und willst OKR als Werkzeug nutzen, um Zielarbeit, Retrospektiven und Reviews wirksam zu gestalten.",
      },
      {
        title: "… du mehr als ein Zertifikat willst",
        body: "Nicht Theorie sammeln, sondern echte Handlungskompetenz entwickeln: Simulation, Fallarbeit und individuelle Supervision gehören zum Kern.",
      },
    ],
    note: "Erste OKR-Kenntnisse sind hilfreich, aber keine Voraussetzung. Offenheit und Umsetzungswille zählen mehr.",
  },

  days: {
    eyebrow: "Ausbildungsstruktur",
    title: "3 Tage. Drei Ebenen. Volle Handlungskompetenz.",
    lead: "Jeder Tag baut auf dem vorherigen auf — von den Grundlagen über die Implementierung bis zur Coaching-Praxis.",
    items: [
      {
        number: 1,
        label: "Tag 1",
        title: "Grundlagen & OKR-Framework",
        description:
          "Du verstehst die Philosophie hinter OKR — warum Organisationen mit Fokus und Ausrichtung scheitern, und wie OKRs das verändern.",
        topics: [
          "OKR vs. klassisches Projektmanagement & KPIs",
          "Systematik, Philosophie und Grundprinzipien",
          "Fokus, Ausrichtung und Ambition in der Praxis",
          "Zyklen und Rhythmen verstehen",
          "Objectives formulieren — was zählt, was nicht",
        ],
      },
      {
        number: 2,
        label: "Tag 2",
        title: "Implementierung & Change-Begleitung",
        description:
          "Du lernst, OKRs in echten Organisationen einzuführen — mit einer durchgehenden Fallstudie und Simulation realer Herausforderungen.",
        topics: [
          "OKR-Einführung in Organisationen gestalten",
          "OKR-Architektur: Team-, Abteilungs- und Unternehmensebene",
          "Planning, Review und Reflexionsformate",
          "Widerstände und typische Stolperfallen begleiten",
          "Durchgehende Fallstudie: Simulation aus der Praxis",
        ],
      },
      {
        number: 3,
        label: "Tag 3",
        title: "Coaching-Kompetenzen & Transfer",
        description:
          "Du entwickelst deine Rolle als OKR Coach — mit konkreten Werkzeugen für Workshops, Trainings und Einzel-Coaching.",
        topics: [
          "Rolle als Coach, Trainer und Berater schärfen",
          "Workshop- und Moderationsdesign für OKR-Events",
          "OKR-Formate professionell gestalten",
          "Transfer-Tools für den Alltag",
          "Kontext-Erprobung und Reflexion",
        ],
      },
    ] satisfies OkrDay[],
    supervision: "Zusätzlich: 90 Minuten individuelle Supervision pro Person — für deine persönlichen Anwendungsfragen und nächsten Schritte.",
  },

  dates: {
    eyebrow: "Termine & Preise",
    title: "Zwei Standorte. Ein Programm.",
    lead: "3 intensive Präsenztage — in Berlin oder Hamburg. Jeweils in kleinen Gruppen, mit vollem Praxisfokus.",
    cohorts: [
      {
        id: "berlin-herbst-2026",
        name: "Herbst 2026 · Berlin",
        badge: "Nächster Termin",
        dates: "18.–20. November 2026",
        dateTbd: false,
        location: "Berlin",
        venue: "STRATUM Lounge, Boxhagener Str. 16 (Alte Pianofabrik), 10245 Berlin",
        price: "2.300 €",
        vatNote: "zzgl. MwSt.",
        ctaLabel: "Jetzt anmelden",
        ctaHref: "mailto:info@claudiathonet.de?subject=Anmeldung%20OKR%20Coach%20Berlin%20November%202026",
      },
      {
        id: "hamburg-fruehjahr-2027",
        name: "Frühjahr 2027 · Hamburg",
        badge: "",
        dates: "März 2027",
        dateTbd: true,
        location: "Hamburg",
        venue: "Neues Amt Altona, Hamburg",
        price: "2.300 €",
        vatNote: "zzgl. MwSt.",
        ctaLabel: "Interesse bekunden",
        ctaHref: "mailto:info@claudiathonet.de?subject=Interesse%20OKR%20Coach%20Hamburg%202027",
      },
    ] satisfies OkrCohort[],
    included: [
      "3-tägige Präsenz-Ausbildung",
      "OKR Coach Zertifikat (BDVT & ECA)",
      "Umfangreiche OKR Toolbox (Templates & Arbeitsmaterialien)",
      "90 Minuten individuelle Supervision",
      "Fallstudien und Simulationen zentraler OKR-Events",
    ],
    discountNote: "Rabatte für Selbstzahler:innen, Start-ups und Studierende auf Anfrage.",
    contact: {
      name: "Claudia Werian",
      email: "info@claudiathonet.de",
      phone: "+49 (0)151 – 51937219",
    },
  },

  team: {
    eyebrow: "Dein Trainer",
    title: "Jonny Kohlhaas.",
    lead: "Praxis vor Theorie — Jonny bringt OKR nicht als Konzept, sondern als gelebte Strategie-Praxis in die Ausbildung.",
    member: {
      name: "Jonny Kohlhaas",
      initials: "JK",
      avatarColor: "bg-tuerkis-80",
      textColor: "text-white",
      role: "OKR Coach & Strategieberater",
      focusTopics: ["OKR", "Strategieumsetzung", "Teamentwicklung", "Retrospektiven"],
      bio: "Jonny begleitet Organisationen dabei, Strategie im Arbeitsalltag wirklich wirksam werden zu lassen. Sein Ansatz: OKR nicht als Bürokratie, sondern als Orientierungsrahmen — und Praxis vor Theorie. Er ist selbst OKR Coach, Trainer und Teamentwickler mit langjähriger Erfahrung in agilen Organisationen.",
      philosophy: '„Strategie braucht Umsetzung. OKRs schaffen die Brücke zwischen Vision und Alltag — wenn man sie richtig anwendet."',
    },
  },

  testimonials: {
    eyebrow: "Stimmen",
    title: "Was Teilnehmende sagen",
    lead: "Aus 120+ Bewertungen — über Claudia Thonets Ausbildungen und Trainings.",
    items: [
      {
        quote:
          "Die Mischung aus Praxisnähe, Tiefgang und Haltung hat mich extrem weitergebracht. Ich konnte das Gelernte direkt in meiner Organisation einsetzen.",
        name: "Tjorven Graßnick",
        role: "Agile Coach & Trainerin",
        rating: 5 as const,
      },
      {
        quote:
          "Ich bin immer wieder beeindruckt, wie viel Energie, Klarheit und Praxisnähe in diese Weiterbildungen fließt. Ein echter Entwicklungsraum.",
        name: "Jonny Kohlhaas",
        role: "OKR-Trainer",
        company: "Claudia Thonet & Team",
        rating: 5 as const,
      },
      {
        quote:
          "Es geht dort viel um praktische Umsetzung des Gelernten, mit starkem Realitätsbezug und in einer tollen Lernumgebung.",
        name: "Sebastian Gerlach",
        rating: 5 as const,
      },
      {
        quote:
          "Claudia und ihr Team verstehen es außerordentlich gut, Wissen interaktiv zu gestalten und direkt in die Praxis zu überführen.",
        name: "Anna Kirsch",
        rating: 5 as const,
      },
      {
        quote:
          "Frau Thonet bringt nicht nur fundiertes Fachwissen mit, sondern überzeugt auch durch ihre empathische, klare und praxisnahe Art zu vermitteln.",
        name: "Manuel Göhring",
        rating: 5 as const,
      },
      {
        quote:
          "Claudias großer Erfahrungsschatz hilft ungemein, ein umfassendes Verständnis für Situationen im Coaching-Alltag zu gewinnen.",
        name: "Jo Claire",
        rating: 5 as const,
      },
    ] satisfies OkrTestimonial[],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      {
        question: "Was sind OKRs und warum brauche ich eine Ausbildung dafür?",
        answer:
          "OKR (Objectives and Key Results) ist eine Methode zur Strategieumsetzung — sie hilft Organisationen, klare Ziele zu setzen, Prioritäten zu fokussieren und Fortschritt messbar zu machen. Die Ausbildung geht über das reine Methodenwissen hinaus: Du lernst, OKRs zu coachen, Widerstände zu begleiten und echte Zielarbeit in Organisationen zu verankern.",
      },
      {
        question: "Brauche ich OKR-Vorkenntnisse?",
        answer:
          "Erste Berührungspunkte mit OKRs sind hilfreich, aber keine Pflicht. Wichtiger ist der Wunsch, Strategie und Umsetzung wirklich zu verbinden — und die Bereitschaft, intensiv zu üben.",
      },
      {
        question: "Was unterscheidet diese Ausbildung von Online-OKR-Kursen?",
        answer:
          "Drei Dinge: Erstens echte Präsenz und Interaktion statt Selbstlern-Videos. Zweitens eine durchgehende Fallstudie und Simulation statt Theorieblöcke. Drittens 90 Minuten individuelle Supervision, bei der du deine konkreten Anwendungsfragen klären kannst.",
      },
      {
        question: "Kann ich OKRs nach der Ausbildung selbst einführen?",
        answer:
          "Ja — das ist das Ziel. Du gehst mit konkreten Tools, Templates und einem erprobten Vorgehen heraus. Die Toolbox und die Supervision helfen dir, die ersten Schritte in deiner Organisation zu meistern.",
      },
      {
        question: "Was kostet die Ausbildung?",
        answer:
          "2.300 € zzgl. MwSt. — inklusive aller Materialien, OKR Toolbox, Supervision und Zertifikat. Für Selbstzahler:innen, Start-ups und Studierende gibt es Rabatte auf Anfrage.",
      },
      {
        question: "Welche Zertifikate erhalte ich?",
        answer:
          "Du erhältst das OKR Coach Zertifikat der Claudia Thonet Agile Consulting GmbH, anerkannt durch den BDVT (Berufsverband für Training, Beratung und Coaching) und die ECA (European Coaching Association).",
      },
      {
        question: "Gibt es die Ausbildung auch als Inhouse-Format?",
        answer:
          "Ja — die Ausbildung ist als maßgeschneidertes Inhouse-Programm für Unternehmen buchbar, deutschlandweit. Kontaktiere uns für ein unverbindliches Erstgespräch.",
      },
    ] satisfies OkrFAQItem[],
  },

  inhouse: {
    eyebrow: "Für Unternehmen",
    headline: "OKR-Ausbildung für euer Team?",
    body: "Inhouse, maßgeschneidert, in eurer Sprache — wir bringen die OKR Coach Ausbildung direkt zu euch, deutschlandweit.",
    ctaLabel: "Inhouse-Format anfragen",
    ctaHref: "/beratung",
  },

  finalCta: {
    headline: "OKR meistern. In 3 Tagen.",
    subline:
      "Melde dich an oder sichere dir ein kostenfreies Gespräch — ohne Verpflichtung, mit echter Orientierung.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
  },
} as const;
