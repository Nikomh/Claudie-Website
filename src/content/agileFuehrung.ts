import type {
  CourseModuleItem,
  CourseCohortData,
  CourseTrainerData,
  CourseTestimonialData,
} from "@/content/courseTypes";

export const agileFuehrungContent = {
  meta: {
    title: "Agile Führung Ausbildung – Zertifizierte agile Führungskraft (CAL)",
    description:
      "Werde zertifizierte agile Führungskraft — BDVT-anerkannt, CAL-zertifiziert. Mehr Selbstorganisation, Klarheit und gemeinsame Ausrichtung.",
    canonical: "/agile-ausbildungen/agile-fuehrung/",
  },

  hero: {
    eyebrow: "BDVT-Zertifizierte Ausbildung · CAL",
    headlineLines: [
      "Führen neu denken.",
      "Teams befähigen.",
      "Wandel gestalten.",
    ] as const,
    subline:
      "In 3 intensiven Tagen entwickelst du eine Führungshaltung, die Selbstorganisation ermöglicht, Orientierung gibt und Transformation trägt — zertifiziert nach BDVT und CAL.",
    ctaPrimary: { label: "Gespräch vereinbaren", href: "/beratung" },
    ctaSecondary: {
      label: "Angebot anfragen",
      href: "mailto:info@claudiathonet.de?subject=Anfrage%20Agile%20Fuehrung%20Ausbildung",
    },
    stats: [
      { value: "3", label: "Intensive Tage" },
      { value: "BDVT", label: "Zertifiziert" },
      { value: "CAL", label: "Lizenziert" },
    ] as const,
  },

  trustBar: [
    { value: "3 Tage", label: "Intensivformat", icon: "clock" },
    { value: "2", label: "Expert:innen im Team", icon: "users" },
    { value: "BDVT", label: "Zertifiziert", icon: "award" },
    { value: "Bildungsurlaub", label: "Anerkannt in Berlin", icon: "calendar" },
  ] as const,

  outcomes: {
    eyebrow: "Was du mitnimmst",
    title: "Sechs Lernziele. Echte Führungswirksamkeit.",
    lead: "Nicht nur Methoden — sondern eine neue Führungshaltung, die Orientierung gibt und Selbstorganisation möglich macht.",
    items: [
      {
        title: "Gemeinsames Führungsverständnis entwickeln",
        body: "Du entwickelst mit deinem Team ein geteiltes Verständnis von moderner Führung — als Basis für echte Veränderung.",
      },
      {
        title: "New Work Anforderungen verstehen",
        body: "Du verstehst, was New Work wirklich bedeutet, und weißt, wie du diese Anforderungen in deiner Organisation verankern kannst.",
      },
      {
        title: "Orientierung in Komplexität geben",
        body: "Du schaffst Klarheit in unklaren Situationen — mit Entscheidungsrahmen, die Teams Sicherheit geben, ohne Eigenverantwortung zu nehmen.",
      },
      {
        title: "Selbstorganisation ermöglichen",
        body: "Du lernst, wie du Verantwortungsübernahme und Selbstorganisation förderst — statt Entscheidungen zu zentralisieren.",
      },
    ],
  },

  forWhom: {
    eyebrow: "Für wen",
    title: "Diese Ausbildung ist für dich, wenn …",
    items: [
      {
        title: "… du Führung neu denken willst",
        body: "Als Führungskraft, Teamlead oder Manager:in — du willst weg von Command & Control hin zu einer Führungshaltung, die Teams wirklich befähigt.",
      },
      {
        title: "… du agile Transformation verantworten willst",
        body: "Du willst nicht nur begleiten, sondern gestalten — als Treiber:in von Wandel in deiner Organisation.",
      },
      {
        title: "… du Selbstorganisation in deinem Team ermöglichen willst",
        body: "Du willst Teams aufbauen, die eigenverantwortlich entscheiden und dabei dennoch in dieselbe Richtung marschieren.",
      },
      {
        title: "… du Klarheit über deine Führungsrolle brauchst",
        body: "Du willst wissen, was deine Rolle als Führungskraft im agilen Kontext ist — und wie du sie authentisch ausfüllen kannst.",
      },
    ],
    note: "Die Ausbildung richtet sich an Führungskräfte aller Ebenen. Vorerfahrung mit Agilität ist hilfreich, aber kein Muss.",
  },

  modules: {
    eyebrow: "Ausbildungsstruktur",
    title: "3 Tage. Intensiv. Transformativ.",
    lead: "Kompakt und intensiv — in Präsenz oder hybrid. Theorie trifft auf echte Praxis.",
    items: [
      {
        number: 1,
        title: "Führungsverständnis & New Work",
        description:
          "Wir entwickeln ein gemeinsames Verständnis moderner Führung und verstehen, was New Work wirklich bedeutet.",
        topics: [
          "Agile Führungsrollen definieren und klären",
          "New Work Anforderungen verstehen und einordnen",
          "Organisationale Vision und Ausrichtung entwickeln",
          "Führungsstile erkennen und reflektieren",
        ],
        trainers: ["Claudia Thonet"],
        format: "Präsenz · Berlin oder Live Online",
      },
      {
        number: 2,
        title: "Teamstruktur & Zusammenarbeit",
        description:
          "Wir lernen, wie Teams für agile Zusammenarbeit aufgestellt werden und wie Entscheidungen dezentral getroffen werden.",
        topics: [
          "Teams für Selbstorganisation strukturieren",
          "Kollaborationsmethoden für agile Teams",
          "Entscheidungsrahmen für dezentrale Teams",
          "Kulturelle Transformationsanforderungen meistern",
        ],
        trainers: ["Claudia Thonet", "Anja Höhne"],
        format: "Präsenz · Berlin oder Live Online",
      },
      {
        number: 3,
        title: "Verantwortung & Selbstorganisation",
        description:
          "Wir erarbeiten, wie Führungskräfte Verantwortungsübernahme fördern und Teams in ihrer Reifung begleiten.",
        topics: [
          "Verantwortungsübernahme aktiv fördern",
          "Beidseitige Führungsdimensionen meistern",
          "Selbstorganisation ermöglichen und sichern",
          "Persönlicher Transfer und nächste Schritte",
        ],
        trainers: ["Anja Höhne"],
        format: "Präsenz · Berlin oder Live Online",
      },
    ] as CourseModuleItem[],
    addons: [
      {
        title: "Individuelle Beratung",
        body: "Auf Wunsch: ein persönliches 1:1-Gespräch nach der Ausbildung für deinen konkreten Transfer in den Alltag.",
      },
      {
        title: "Führungs-Toolbox",
        body: "Canvas-Modelle, Entscheidungsrahmen und Führungs-Templates — direkt einsetzbar in deiner Organisation.",
      },
      {
        title: "Inhouse-Option",
        body: "Die Ausbildung ist auch als maßgeschneidertes Inhouse-Programm buchbar — angepasst an eure spezifische Situation.",
      },
    ],
  },

  dates: {
    eyebrow: "Termine & Preise",
    title: "Termine auf Anfrage.",
    lead: "Die Ausbildung findet in kleinen Gruppen oder inhouse statt. Kontaktiere uns für aktuelle Termine und ein individuelles Angebot.",
    cohorts: [
      {
        id: "auf-anfrage",
        name: "Termine auf Anfrage",
        badge: "Individuell planbar",
        format: "Präsenz · Berlin oder Live Online",
        priceHybrid: "Auf Anfrage",
        priceHybridLabel: "Individuelles Angebot",
        vatNote: "zzgl. MwSt.",
        modules: [
          { label: "Tag 1", date: "Auf Anfrage", location: "Berlin · Präsenz" },
          { label: "Tag 2", date: "Auf Anfrage", location: "Berlin · Präsenz" },
          { label: "Tag 3", date: "Auf Anfrage", location: "Live Online" },
        ],
        venue: "Berlin Mitte oder Live Online (je nach Vereinbarung)",
        ctaLabel: "Gespräch vereinbaren",
        ctaHref: "/beratung",
      },
    ] as CourseCohortData[],
    discountNote:
      "Für Inhouse-Buchungen und Gruppen ab 5 Personen erstellen wir gern ein individuelles Angebot.",
    contact: {
      name: "Claudia Thonet",
      email: "info@claudiathonet.de",
      phone: "+49 (0)151 – 51937219",
    },
  },

  team: {
    eyebrow: "Dein Trainer-Team",
    title: "2 Expert:innen. Echter Erfahrungsschatz.",
    lead: "Beide Trainer:innen bringen echte Führungs- und Transformationserfahrung mit.",
    members: [
      {
        name: "Claudia Thonet",
        initials: "CT",
        avatarColor: "bg-tuerkis",
        textColor: "text-white",
        role: "Gründerin & Lead-Trainerin",
        focusTopics: ["Agile Führung", "Agile Transformation", "Kulturwandel"],
        bio: "Bestseller-Autorin und Gründerin der Akademie — mit über 15 Jahren Erfahrung in agiler Transformation und Führungsentwicklung.",
      },
      {
        name: "Anja Höhne",
        initials: "AH",
        avatarColor: "bg-anthrazit",
        textColor: "text-white",
        role: "Trainerin & Führungsexpertin",
        focusTopics: ["Agile Führung", "Selbstorganisation", "Teamentwicklung"],
        bio: "20+ Jahre Erfahrung in HR und Leadership Development. Spezialisiert auf agile Führungsmodelle und Teamreifung.",
      },
    ] as CourseTrainerData[],
  },

  testimonials: {
    eyebrow: "Stimmen",
    title: "Was Absolvent:innen sagen",
    lead: "Auszüge von Teilnehmenden der Agile Führung Ausbildung.",
    items: [
      {
        quote:
          "Die Ausbildung hat mein Verständnis von Führung komplett verändert — ich führe jetzt mit mehr Klarheit und gebe meinem Team echte Eigenverantwortung.",
        name: "Bastian Klipp",
        role: "Team Lead",
        rating: 5 as const,
      },
      {
        quote:
          "Claudia und Anja schaffen es, komplexe Führungsthemen greifbar und direkt umsetzbar zu machen. Eine echte Transformation.",
        name: "Andrea Keil",
        role: "Head of People & Culture",
        rating: 5 as const,
      },
      {
        quote:
          "Die Mischung aus Theorie, Reflexion und praktischen Tools hat mir genau das gegeben, was ich für meinen Führungsalltag brauchte.",
        name: "Manuel Göhring",
        role: "Abteilungsleiter",
        rating: 5 as const,
      },
    ] as CourseTestimonialData[],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      {
        question: "Brauche ich Vorkenntnisse in Agilität?",
        answer:
          "Vorerfahrung ist hilfreich, aber kein Muss. Wichtiger ist die Bereitschaft, die eigene Führungsrolle zu reflektieren und neue Wege auszuprobieren.",
      },
      {
        question: "Was ist CAL und warum ist es wichtig?",
        answer:
          "CAL steht für Certified Agile Leader — eine international anerkannte Zertifizierung für agile Führungskräfte. In Kombination mit dem BDVT-Zertifikat erhältst du eine starke formale Anerkennung deiner Führungskompetenz.",
      },
      {
        question: "Wie groß sind die Gruppen?",
        answer:
          "Wir arbeiten in kleinen Gruppen von maximal 12 Teilnehmenden — damit echter Austausch und persönliche Reflexion möglich sind.",
      },
      {
        question: "Gibt es die Ausbildung auch als Inhouse-Format?",
        answer:
          "Ja — die Ausbildung ist besonders als Inhouse-Programm für Führungsteams geeignet. Maßgeschneidert auf eure Organisation, Sprache und Herausforderungen.",
      },
      {
        question: "Was kostet die Ausbildung?",
        answer:
          "Der Preis richtet sich nach Gruppengrößte, Format (open oder inhouse) und Anpassungsgrad. Kontaktiere uns für ein individuelles Angebot.",
      },
    ],
  },

  inhouse: {
    eyebrow: "Für Unternehmen",
    headline: "Führungsentwicklung Inhouse?",
    body: "Maßgeschneidert für euer Führungsteam, eure Sprache, eure Herausforderungen — deutschlandweit, mit demselben Expert:innen-Team. Besonders wirksam für Führungskräfte, die gemeinsam eine neue Kultur entwickeln wollen.",
    ctaLabel: "Inhouse-Format anfragen",
    ctaHref: "/beratung",
  },

  finalCta: {
    headline: "Bereit, Führung neu zu gestalten?",
    subline:
      "Vereinbare ein kostenfreies 30-Min-Gespräch — wir finden gemeinsam das richtige Format für dich.",
    ctaPrimary: { label: "Gespräch vereinbaren", href: "/beratung" },
    ctaSecondary: {
      label: "Angebot anfragen",
      href: "mailto:info@claudiathonet.de?subject=Anfrage%20Agile%20Fuehrung%20Ausbildung",
    },
  },
};
