/**
 * Home page content. Hand-curated; sourced from claudiathonet.de.
 * TODO (CMS): move to a Sanity/Contentful pull when CMS is wired.
 */

export type CourseTeaser = {
  id: string;
  title: string;
  startDate: string;
  formatLabel: string;
  href: string;
  category: "ausbildung" | "masterclass";
};

export type ServiceCard = {
  iconKey: "graduation" | "compass" | "library";
  title: string;
  description: string;
  href: string;
  cta: string;
  accent?: boolean;
};

export type HomeBlogTeaser = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  cluster: string;
  readingMin: number;
};

export type HomeTestimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const homeContent = {
  hero: {
    eyebrow: "Agile Beratung & Ausbildung",
    headlineLines: ["Veränderungen.", "Gestalten.", "Umsetzen."] as const,
    subline:
      "Wir befähigen dich und deine Organisation, den agilen Wandel so zu gestalten, dass Zusammenarbeit besser gelingt — und Zukunft entsteht.",
    ctaPrimary: {
      label: "Gratis Beratungsgespräch",
      href: "/beratung",
    },
    ctaSecondary: {
      label: "Ausbildungen entdecken",
      href: "/ausbildungen",
    },
    portraitImage: "/images/photos/_LFP4451.jpg",
    portraitAlt:
      "Claudia Thonet im Workshop, im Gespräch mit Teilnehmer:innen.",
  },

  socialProof: {
    rating: 4.9,
    ratingCount: 120,
    source: "Google",
    clientLogos: [
      "Tesvolt",
      "Telekom",
      "Flughafen BER",
      "H&M",
      "Sparda-Bank",
      "Danone",
      "Opitz Consulting",
      "Hoffmann Group",
      "Comeco",
      "Monster",
      "Daiichi Sankyo",
      "PDS Vision",
      "AWO",
      "MSD",
    ],
  },

  valueProp: {
    eyebrow: "Was du gewinnst",
    headline:
      "Klarheit, Werkzeuge und Haltung für Veränderung — keine Buzzwords.",
    body: "Mehr Klarheit in komplexen Situationen. Werkzeuge, die Effektivität erhöhen statt zu überfordern. Gestärkte Rollen, getragen von einer Haltung, die Orientierung gibt. Spürbarer Perspektivenwechsel mit Rückenwind für den Alltag — kleine Schritte, große Wirkung.",
  },

  services: [
    {
      iconKey: "graduation",
      title: "Agile Ausbildungen",
      description:
        "Werde Agile Coach, OKR Coach, Vertriebscoach oder Moderator:in — zertifiziert, praxisnah und mit echtem Entwicklungsraum.",
      href: "/ausbildungen",
      cta: "Ausbildungen ansehen",
      accent: true,
    },
    {
      iconKey: "compass",
      title: "Agile Beratung",
      description:
        "Maßgeschneiderte Begleitung für agile Transformation, Vertrieb und Teamentwicklung — vom Pilot bis zur Skalierung.",
      href: "/consulting",
      cta: "Beratung kennenlernen",
    },
    {
      iconKey: "library",
      title: "Toolbox & Wissen",
      description:
        "Methodenkarten, Templates, Webinare und Impulse — frei verfügbar für deine tägliche Praxis.",
      href: "/toolbox",
      cta: "Zur Toolbox",
    },
  ] satisfies ServiceCard[],

  upcomingCourses: [
    {
      id: "agiler-coach-2026-09",
      title: "Ausbildung Agiler Coach",
      startDate: "10. September 2026",
      formatLabel: "Präsenz & Live-Online",
      href: "/agile-ausbildungen/agiler-coach/",
      category: "ausbildung",
    },
    {
      id: "vertriebscoach-2026-09",
      title: "Ausbildung Agiler Vertriebscoach",
      startDate: "17. September 2026",
      formatLabel: "Live-Online",
      href: "/agile-ausbildungen/vertriebscoach-ausbildung/",
      category: "ausbildung",
    },
    {
      id: "agiler-facilitator-2026-09",
      title: "Ausbildung Agile Facilitator",
      startDate: "24. September 2026",
      formatLabel: "Präsenz & Live-Online",
      href: "/agile-ausbildungen/agiler-facilitator/",
      category: "ausbildung",
    },
    {
      id: "kommunikationstrainerin-2026-10",
      title: "Ausbildung Kommunikationstrainer:in",
      startDate: "1. Oktober 2026",
      formatLabel: "Live-Online",
      href: "/agile-ausbildungen/kommunikationstrainerin-ausbildung/",
      category: "ausbildung",
    },
    {
      id: "okr-coach-2026-11",
      title: "Ausbildung OKR Coach",
      startDate: "18. November 2026",
      formatLabel: "Präsenz · Berlin",
      href: "/agile-ausbildungen/okr-coach/",
      category: "ausbildung",
    },
    {
      id: "agile-fuehrung-auf-anfrage",
      title: "Ausbildung Agile Führungskraft (CAL)",
      startDate: "Termine auf Anfrage",
      formatLabel: "Präsenz · Berlin",
      href: "/agile-ausbildungen/agile-fuehrung/",
      category: "ausbildung",
    },
    {
      id: "masterclass-2027-05",
      title: "Agile Coach Ausbildung — Frühjahr",
      startDate: "12. Mai 2027",
      formatLabel: "Präsenz · Berlin",
      href: "/agile-ausbildungen/agiler-coach/",
      category: "masterclass",
    },
    {
      id: "veraenderung-gestalten-2026-10",
      title: "Weiterbildung Veränderung gestalten",
      startDate: "15. Oktober 2026",
      formatLabel: "Präsenz · Berlin",
      href: "/agile-ausbildungen/veraenderung-gestalten/",
      category: "masterclass",
    },
    {
      id: "ai-leadership-2026-11",
      title: "AI Leadership Sprint",
      startDate: "Auf Anfrage",
      formatLabel: "Online",
      href: "/ausbildungen/ai-leadership-sprint",
      category: "masterclass",
    },
  ] satisfies CourseTeaser[],

  newsletter: {
    headline: "Agile Methoden, frisch in deinen Posteingang.",
    subline:
      "Hol dir gratis die wichtigsten agilen Werkzeuge und Impulse für mehr Freude und Flexibilität im Arbeitsalltag — alle 4 Wochen, jederzeit abbestellbar.",
    placeholder: "deine@email.de",
    cta: "Newsletter sichern",
  },

  testimonials: [
    {
      quote:
        "Ihr Agile-Coaching-Programm ist eines der umfassendsten und praxisnahsten, das ich je kennengelernt habe.",
      name: "Mh. W.",
      rating: 5,
    },
    {
      quote:
        "Es geht dort viel um praktische Umsetzung des Gelernten, mit starkem Realitätsbezug und in einer tollen Lernumgebung.",
      name: "Sebastian Gerlach",
      rating: 5,
    },
    {
      quote:
        "Dank der exzellenten Unterstützung haben wir wertvolle Strukturen und praxisorientierte Modelle erhalten.",
      name: "Sabine Valentin",
      rating: 5,
    },
    {
      quote:
        "Frau Thonet bringt nicht nur fundiertes Fachwissen mit, sondern überzeugt auch durch ihre empathische, klare und praxisnahe Art.",
      name: "Manuel Göhring",
      rating: 5,
    },
    {
      quote:
        "Ich bin immer wieder beeindruckt, wie viel Energie, Klarheit und Praxisnähe Claudia in ihre Weiterbildungen bringt.",
      name: "Jonny Kohlhaas",
      role: "OKR-Trainer",
      company: "Claudia Thonet & Team",
      rating: 5,
    },
    {
      quote:
        "Die Ausbildung ist nicht einfach ein Kurs mit Theorie und Buzzwords — sie ist ein echter Entwicklungsraum.",
      name: "Anna Glück",
      rating: 5,
    },
    {
      quote:
        "Claudia Thonet und ihr Team rocken mit ihrem praxisnahen Ansatz! Sie wissen genau, wie sie sich in die Lage ihrer Kunden hineinversetzen können.",
      name: "Anja Höhne",
      rating: 5,
    },
    {
      quote:
        "Claudia hat ein unfassbar umfangreiches Wissen über agiles Arbeiten, das sie hervorragend mit der Situation des Einzelnen verbinden kann.",
      name: "Kai Hamdorf",
      rating: 5,
    },
    {
      quote: "Mit Claudia Thonet arbeiten und lernen — immer wieder eine Bereicherung.",
      name: "Andrea Keil",
      rating: 5,
    },
    {
      quote:
        "Claudia versteht es, sich sehr flexibel auf neu aufkommende Themen einzulassen und die Agenda anzupassen.",
      name: "Andrea Breitenborn",
      rating: 5,
    },
    {
      quote:
        "Die Mischung aus Praxisnähe, Tiefgang und Haltung hat mich extrem weitergebracht.",
      name: "Tjorven Graßnick",
      rating: 5,
    },
    {
      quote:
        "Claudia und ihr Team verstehen es außerordentlich gut, Wissen interaktiv zu gestalten.",
      name: "Anna Kirsch",
      rating: 5,
    },
    {
      quote:
        "Claudia und ihr hoch motiviertes und erfahrenes Team machen eine Ausbildung zum Erlebnis.",
      name: "Bastian Klipp",
      rating: 5,
    },
    {
      quote:
        "Claudias großer Erfahrungsschatz hilft ungemein, ein umfassendes Verständnis für Situationen im Coaching-Alltag zu gewinnen.",
      name: "Jo Claire",
      rating: 5,
    },
  ] satisfies HomeTestimonial[],

  pressLogos: [
    "Springer Professional",
    "managerSeminare",
    "training aktuell",
    "Vertriebszeitung",
    "Handelsblatt",
  ],

  trustBadges: [
    {
      label: "BDVT zertifiziert",
      sublabel: "Berufsverband für Trainer, Berater & Coaches",
    },
    {
      label: "ECA-akkreditiert",
      sublabel: "European Coaching Association",
    },
    {
      label: "Bildungsurlaub anerkannt",
      sublabel: "in vielen Bundesländern",
    },
  ],

  blogTeasers: [
    {
      slug: "agile-methoden",
      title: "Agile Methoden-Übersicht — interaktiv und visuell",
      excerpt:
        "Die interaktive Grafik gibt dir eine strukturierte Übersicht über die wichtigsten agilen Methoden und Frameworks.",
      coverImage: "/images/illustrations/CT_SE02_methods.png",
      cluster: "Methoden",
      readingMin: 6,
    },
    {
      slug: "von-funktionaler-teamarbeit-zu-high-performance",
      title: "Von funktionaler Teamarbeit zu High Performance",
      excerpt:
        "Was macht ein gutes Team aus — und vor allem: Was unterscheidet ein funktionierendes Team von einem High-Performing Team?",
      coverImage: "/images/photos/Teamarbeit1_030124.jpg",
      cluster: "Teams",
      readingMin: 9,
    },
    {
      slug: "change-readiness",
      title: "Change Readiness — Schlüssel für erfolgreiche Veränderung",
      excerpt:
        "Veränderungsbereitschaft ist kein Zufall. Wir zeigen, wie du Reife und Resilienz in Organisationen aufbaust.",
      coverImage: "/images/illustrations/CT_SE02_impulse.png",
      cluster: "Change",
      readingMin: 7,
    },
  ] satisfies HomeBlogTeaser[],

  finalCta: {
    headline: "Bereit für Veränderung?",
    subline:
      "Kostenfreies 30-Min-Gespräch — Klarheit über deinen nächsten Schritt, ohne Verpflichtung.",
    ctaText: "Gratis Beratung sichern",
    ctaHref: "/beratung",
  },
} as const;

export type HomeContent = typeof homeContent;
