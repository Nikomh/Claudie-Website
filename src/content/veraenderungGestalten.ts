import type {
  CourseTrainerData,
  CourseTestimonialData,
} from "@/content/courseTypes";

export const veraenderungGestaltenContent = {
  meta: {
    title: "Veränderung gestalten – 2-Tages-Weiterbildung",
    description:
      "In 2 intensiven Tagen lernst du, wie du Veränderungsprozesse professionell begleitest — Widerstände verstehst, Teams durch Wandel führst und nachhaltig wirkst.",
    canonical: "/agile-ausbildungen/veraenderung-gestalten/",
  },

  hero: {
    eyebrow: "2-Tages-Weiterbildung",
    headlineLines: [
      "Veränderung",
      "verstehen.",
      "Wandel gestalten.",
    ] as const,
    subline:
      "In zwei intensiven Trainingstagen bekommst du das Rüstzeug, um Veränderungsprozesse professionell zu begleiten — mit echtem Handwerkszeug statt leerer Change-Rhetorik.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
    stats: [
      { value: "2", label: "Trainingstage" },
      { value: "< 16", label: "Personen pro Gruppe" },
      { value: "Praxis", label: "Direkt einsetzbar" },
    ] as const,
  },

  trustBar: [
    { value: "2", label: "Intensive Trainingstage", icon: "clock" },
    { value: "< 16", label: "Personen pro Gruppe", icon: "users" },
    { value: "Zertifikat", label: "Teilnahmebestätigung", icon: "award" },
    { value: "In-House", label: "Auch firmenintern buchbar", icon: "calendar" },
  ] as const,

  outcomes: {
    eyebrow: "Was du mitnimmst",
    title: "Veränderung wirklich begleiten.",
    lead: "Kein Change-Management-Folienstapel — sondern Methoden, Haltung und Werkzeuge, die in echten Situationen funktionieren.",
    items: [
      {
        title: "Veränderungsdynamiken verstehen",
        body: "Du verstehst, warum Veränderung im Menschen und in Organisationen Widerstand erzeugt — und wie du damit professionell umgehst.",
      },
      {
        title: "Gespräche sicher führen",
        body: "Du führst schwierige Veränderungsgespräche auf Augenhöhe — mit klaren Techniken für Widerstand, Unsicherheit und emotionale Reaktionen.",
      },
      {
        title: "Teams durch Wandel begleiten",
        body: "Du weißt, wie Teams in Veränderungsphasen reagieren und hast konkrete Werkzeuge, um sie stabil und handlungsfähig zu halten.",
      },
      {
        title: "Nutzen klar kommunizieren",
        body: "Du kannst den Sinn von Veränderungen so vermitteln, dass Menschen mitgehen wollen — nicht müssen.",
      },
    ],
  },

  forWhom: {
    eyebrow: "Für wen",
    title: "Diese Weiterbildung ist für dich, wenn …",
    note: "",
    items: [
      {
        title: "… du Veränderungsprozesse aktiv begleitest",
        body: "Als Führungskraft, HR-Profi, Agile Coach oder interne Berater:in stehst du mitten in Transformationen und willst diese wirkungsvoller gestalten.",
      },
      {
        title: "… du Widerstände professionell begegnen willst",
        body: "Nicht „Widerstand wegmoderieren“ — sondern verstehen, warum er entsteht, und produktiv damit umgehen.",
      },
      {
        title: "… du handfeste Werkzeuge suchst",
        body: "Kein Theorieoverload — sondern Methoden, die du am nächsten Tag in deiner Praxis einsetzen kannst.",
      },
      {
        title: "… du tief eintauchen willst",
        body: "Zwei Tage intensiv, in kleiner Gruppe, mit echten Fällen aus deinem Arbeitsalltag.",
      },
    ],
  },

  days: [
    {
      number: 1,
      title: "Tag 1: Veränderung verstehen",
      topics: [
        "Modelle der Veränderung (ADKAR, Lippitt, Satir-Kurve)",
        "Widerstand als Information — nicht als Problem",
        "Veränderungsgespräche führen: Techniken & Übungen",
        "Emotionen in Veränderungsprozessen professionell begleiten",
        "Fallarbeit: eigene Situationen aus der Praxis",
      ],
    },
    {
      number: 2,
      title: "Tag 2: Wandel gestalten",
      topics: [
        "Teams durch Veränderung führen — Phasen & Interventionen",
        "Change-Kommunikation: Sinn vermitteln, Akzeptanz schaffen",
        "Stakeholder-Analyse und Kommunikationsplanung",
        "Nutzen sichtbar machen: Storytelling im Change",
        "Persönlicher Aktionsplan: konkrete nächste Schritte",
      ],
    },
  ],

  dates: {
    eyebrow: "Termine",
    title: "Jetzt deinen Platz sichern.",
    lead: "Kleine Gruppen, echte Praxis — buche direkt oder melde dich für das nächste verfügbare Datum an.",
    sessions: [
      {
        id: "vg-2025-sep",
        dates: "11.–12. September 2025",
        location: "Berlin",
        spotsLeft: 5,
        price: "1.190 €",
        vatNote: "zzgl. MwSt.",
        ctaHref: "/anmelden?kurs=veraenderung-gestalten&termin=2025-09",
      },
      {
        id: "vg-2025-nov",
        dates: "20.–21. November 2025",
        location: "Berlin",
        spotsLeft: 8,
        price: "1.190 €",
        vatNote: "zzgl. MwSt.",
        ctaHref: "/anmelden?kurs=veraenderung-gestalten&termin=2025-11",
      },
    ] as const,
    contact: {
      name: "Claudia Thonet",
      email: "hallo@claudiathonet.de",
      phone: "+49 30 123 456 78",
    },
  },

  team: {
    eyebrow: "Deine Trainerinnen",
    title: "Erfahrung, die trägt.",
    lead: "Claudia und Anja haben selbst hunderte Veränderungsprozesse begleitet — und bringen echte Praxiserfahrung mit.",
    members: [
      {
        name: "Claudia Thonet",
        initials: "CT",
        role: "Agile Consulting · Trainerin & Coach",
        bio: "20+ Jahre Erfahrung in Organisations- und Teamentwicklung. Claudia hat selbst zahlreiche Transformationen begleitet — von der Startup-Skalierung bis zum Konzernwandel.",
        focusTopics: ["Change Management", "Organisationsentwicklung", "Führungskräfteentwicklung"],
        avatarColor: "bg-tuerkis",
        textColor: "text-white",
      } as CourseTrainerData,
      {
        name: "Anja Höhne",
        initials: "AH",
        role: "Beraterin & Trainerin",
        bio: "Anja begleitet Teams und Führungskräfte durch Veränderungsprozesse — pragmatisch, empathisch und immer nah an der Realität ihrer Kund:innen.",
        focusTopics: ["Team-Coaching", "Konfliktbegleitung", "Change-Kommunikation"],
        avatarColor: "bg-anthrazit",
        textColor: "text-white",
      } as CourseTrainerData,
    ] as readonly CourseTrainerData[],
  },

  testimonials: {
    eyebrow: "Stimmen",
    title: "Was Teilnehmende sagen.",
    lead: "Kein Selbstlob — sondern echtes Feedback aus echten Veränderungsprozessen.",
    items: [
      {
        quote: "Endlich ein Training, das nicht bei Theorie-Modellen stehen bleibt. Ich bin mit konkreten Werkzeugen nach Hause gegangen — und habe sie direkt am nächsten Tag eingesetzt.",
        name: "Marcus R.",
        role: "Teamleiter Produktentwicklung",
        rating: 5,
      },
      {
        quote: "Claudia hat eine Klarheit und Tiefe in die Themen gebracht, die mich wirklich weitergebracht haben. Besonders die Arbeit mit eigenen Praxisfällen war Gold wert.",
        name: "Sandra K.",
        role: "HR Business Partner",
        rating: 5,
      },
      {
        quote: "Ich begleite seit Jahren Change-Prozesse — und trotzdem habe ich viel Neues mitgenommen. Sehr empfehlenswert.",
        name: "Bernd W.",
        role: "Organisationsentwickler",
        rating: 5,
      },
    ] as readonly CourseTestimonialData[],
  },

  faq: {
    eyebrow: "Häufige Fragen",
    title: "Deine Fragen — ehrlich beantwortet.",
    lead: "Wir glauben an Transparenz. Wenn deine Frage hier nicht dabei ist, ruf einfach an.",
    items: [
      {
        question: "Brauche ich Vorkenntnisse im Change Management?",
        answer: "Nein. Die Weiterbildung ist für alle konzipiert, die Veränderungsprozesse begleiten — egal ob du Einsteiger:in oder erfahrene Führungskraft bist.",
      },
      {
        question: "Was passiert an den beiden Tagen genau?",
        answer: "Tag 1 fokussiert auf Verständnis: Warum reagieren Menschen wie sie reagieren? Tag 2 ist auf Handlung ausgerichtet: Wie begleite ich Teams, wie kommuniziere ich Change-Sinn? Beide Tage sind stark praxisorientiert.",
      },
      {
        question: "Kann ich eigene Fälle mitbringen?",
        answer: "Ja — das ist ausdrücklich erwünscht. Ein großer Teil der Weiterbildung lebt von der Arbeit an echten Situationen der Teilnehmenden.",
      },
      {
        question: "Gibt es eine Zertifizierung?",
        answer: "Du erhältst eine Teilnahmebestätigung von Claudia Thonet Agile Consulting. Die Weiterbildung ist kein zertifiziertes Abschlussprogramm, sondern ein praxisintensives 2-Tages-Format.",
      },
      {
        question: "Kann ich die Weiterbildung als In-House-Training buchen?",
        answer: "Ja — gerne auch als firmeninternes Training. Wir passen Inhalte und Fallbeispiele auf dein Unternehmen an. Melde dich für ein kurzes Erstgespräch.",
      },
    ],
  },

  inhouse: {
    eyebrow: "Firmenintern",
    headline: "Veränderung direkt in deinem Unternehmen.",
    body: "Als In-House-Training buchst du die Weiterbildung exklusiv für dein Team — mit angepassten Inhalten, deinen echten Fallbeispielen und maximalem Praxisbezug.",
    ctaHref: "/beratung",
    ctaLabel: "Erstgespräch vereinbaren",
  },

  finalCta: {
    eyebrow: "Bereit?",
    headline: "Dein nächster Schritt.",
    subline: "Plätze sind begrenzt. Sichere dir jetzt deinen Platz — oder melde dich für ein kurzes Erstgespräch.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gespräch vereinbaren", href: "/beratung" },
  },
} as const;
