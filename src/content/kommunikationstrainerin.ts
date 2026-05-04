import type {
  CourseModuleItem,
  CourseCohortData,
  CourseTrainerData,
  CourseTestimonialData,
} from "@/content/courseTypes";

export const kommunikationstrainerinContent = {
  meta: {
    title: "Kommunikationstrainer Ausbildung (BDVT-Zertifiziert)",
    description:
      "Werde zertifizierte Kommunikationstrainerin — in 50+ Stunden praxisnah. BDVT-anerkannt. Gespräche gestalten, Wirkung entfalten.",
    canonical: "/agile-ausbildungen/kommunikationstrainerin-ausbildung/",
  },

  hero: {
    eyebrow: "BDVT-Zertifizierte Ausbildung",
    headlineLines: [
      "Gespräche gestalten.",
      "Wirkung entfalten.",
      "Trainer werden.",
    ] as const,
    subline:
      "In 50+ Stunden praxisnahem Training lernst du Kommunikationsmethoden und professionelle Moderationskompetenz — für Workshops und Trainings, die echte Veränderung bewirken.",
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
    { value: "2", label: "Expert:innen im Team", icon: "users" },
    { value: "BDVT", label: "Zertifiziert", icon: "award" },
    { value: "Berlin & Online", label: "Flexibles Format", icon: "calendar" },
  ] as const,

  outcomes: {
    eyebrow: "Was du mitnimmst",
    title: "Vier Kompetenzen. Echte Kommunikationswirkung.",
    lead: "Nicht nur Theorie — sondern Tiefe, Praxis und eine Trainer-Haltung, die Gespräche wirklich verändert.",
    items: [
      {
        title: "Kommunikationsprozesse verstehen",
        body: "Du entwickelst ein tiefes Verständnis für Kommunikationsmuster und lernst, Dynamiken zu erkennen und wirkungsvoll zu steuern.",
      },
      {
        title: "Trainer-Rolle mit Klarheit ausfüllen",
        body: "Du entwickelst dein eigenes Trainer-Profil und weißt, wie du Formate gestaltest, die zu deiner Zielgruppe und deinem Kontext passen.",
      },
      {
        title: "Schwierige Gespräche souverän führen",
        body: "Von Konflikten bis zu Widerstand — du führst herausfordernde Kommunikationssituationen mit Klarheit und Empathie.",
      },
      {
        title: "Agile Kommunikationsformate einsetzen",
        body: "Empathy Map, Canvas-Modelle, Meeting-Moderation — du hast die Werkzeuge für agile Kommunikation in Organisationen.",
      },
    ],
  },

  forWhom: {
    eyebrow: "Für wen",
    title: "Diese Ausbildung ist für dich, wenn …",
    items: [
      {
        title: "… du als Trainer:in oder Coach wirken willst",
        body: "Du willst Trainings gestalten, die Menschen wirklich bewegen — in Unternehmen, Behörden, sozialen Einrichtungen oder Bildungsinstitutionen.",
      },
      {
        title: "… du Kommunikation in Organisationen verbessern willst",
        body: "Als HR-Profi, Führungskraft oder Change-Begleiter:in — du willst Kommunikationskultur nachhaltig stärken.",
      },
      {
        title: "… du schwierige Gespräche sicherer gestalten willst",
        body: "Feedback, Konflikt, Change-Kommunikation — du willst wissen, wie du diese Situationen mit Haltung und Kompetenz meisterst.",
      },
      {
        title: "… du Methoden wirklich erleben willst",
        body: "Du lernst durch Erleben — mit praktischen Übungen, Fallarbeit und direktem Feedback in kleinen Gruppen.",
      },
    ],
    note: "Keine tiefen Vorkenntnisse nötig. Wichtig ist Interesse an Kommunikation und Freude an der Arbeit mit Menschen.",
  },

  modules: {
    eyebrow: "Ausbildungsstruktur",
    title: "3 Module. 50+ Stunden. Echter Praxistransfer.",
    lead: "Alle Module sind live moderiert — online oder in Berlin. Kein PowerPoint, keine Theorie-Wüsten.",
    items: [
      {
        number: 1,
        title: "Kommunikationsgrundlagen & Rhetorik",
        description:
          "Du lernst die Grundlagen professioneller Kommunikation und entwickelst deine eigene Präsenz als Trainer:in.",
        topics: [
          "Grundlagen der Kommunikationspsychologie",
          "Rhetorische Grundlagen für Trainer:innen",
          "Achtsamkeit und Selbstwahrnehmung stärken",
          "Praktische Übungen und Feedback-Runden",
        ],
        trainers: ["Claudia Thonet", "Anja Höhne"],
        format: "Live Online",
      },
      {
        number: 2,
        title: "Agile Kommunikation & Meeting-Moderation",
        description:
          "Du lernst agile Kommunikationsformate und moderierst Meetings, die wirklich zu Entscheidungen führen.",
        topics: [
          "Agile Kommunikationsformate einsetzen",
          "Empathy Map und Canvas-Modelle nutzen",
          "Meetings wirksam moderieren",
          "Komplexe Kommunikationsszenarien meistern",
        ],
        trainers: ["Claudia Thonet", "Anja Höhne"],
        format: "Live Online",
      },
      {
        number: 3,
        title: "Konflikt, Abschluss & Trainer-Profil",
        description:
          "Du lernst professionellen Umgang mit Konflikten und entwickelst dein eigenes Trainingskonzept.",
        topics: [
          "Konfliktmanagement und schwierige Gespräche",
          "Herausfordernde Kommunikationssituationen meistern",
          "Eigenes Trainingskonzept entwickeln",
          "Abschlussprojekt und Zertifizierung",
        ],
        trainers: ["Claudia Thonet", "Anja Höhne"],
        format: "Berlin · Präsenz oder Live Online",
      },
    ] as CourseModuleItem[],
    addons: [
      {
        title: "Peer-Groups",
        body: "In Peer-Groups übst du das Gelernte an echten Kommunikationsfällen — gemeinsam, reflektiert, wirksam.",
      },
      {
        title: "Kommunikations-Toolbox",
        body: "Empathy Maps, Feedback-Formate, Canvas-Modelle und Moderationswerkzeuge — direkt einsetzbar in deiner Praxis.",
      },
      {
        title: "Eigenes Trainingskonzept",
        body: "Im dritten Modul entwickelst du dein eigenes Trainingskonzept — als konkretes Ergebnis der Ausbildung.",
      },
    ],
  },

  dates: {
    eyebrow: "Termine & Preise",
    title: "Herbst 2026. Online und Berlin.",
    lead: "Komplett online oder mit Präsenz in Berlin — wähle das Format, das zu dir passt.",
    cohorts: [
      {
        id: "herbst-2026",
        name: "Herbst 2026",
        badge: "Nächster Start",
        format: "Online oder Berlin · Präsenz",
        priceHybrid: "3.900 €",
        priceHybridLabel: "Präsenz & Online",
        priceOnline: "3.500 €",
        priceOnlineLabel: "Komplett Online",
        vatNote: "zzgl. MwSt.",
        modules: [
          { label: "Modul 1", date: "01.–02. Okt 2026", location: "Live Online" },
          { label: "Modul 2", date: "05.–06. Nov 2026", location: "Live Online" },
          {
            label: "Modul 3",
            date: "03.–04. Dez 2026",
            location: "Berlin · Präsenz oder Live Online",
          },
        ],
        venue: "Berlin Mitte (Adresse wird nach Anmeldung bekannt gegeben)",
        ctaLabel: "Jetzt anmelden",
        ctaHref:
          "mailto:info@claudiathonet.de?subject=Anmeldung%20Kommunikationstrainerin%20Herbst%202026",
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
    title: "2 Expert:innen. Echter Erfahrungsschatz.",
    lead: "Beide Trainerinnen kommen aus der Praxis — mit echten Erfahrungen in Kommunikation und Training.",
    members: [
      {
        name: "Claudia Thonet",
        initials: "CT",
        avatarColor: "bg-tuerkis",
        textColor: "text-white",
        role: "Gründerin & Lead-Trainerin",
        focusTopics: ["Agile Kommunikation", "Workshop-Design", "Kulturwandel"],
        bio: "Bestseller-Autorin und Gründerin der Akademie — mit über 15 Jahren Erfahrung in Transformation und Kommunikationstraining.",
      },
      {
        name: "Anja Höhne",
        initials: "AH",
        avatarColor: "bg-anthrazit",
        textColor: "text-white",
        role: "Trainerin & Kommunikationsexpertin",
        focusTopics: ["Kommunikationsdesign", "Konfliktmanagement", "Agile Führung"],
        bio: "20+ Jahre Erfahrung in HR und People Development. Spezialisiert auf Kommunikationsdesign und professionelle Moderation.",
      },
    ] as CourseTrainerData[],
  },

  testimonials: {
    eyebrow: "Stimmen",
    title: "Was Absolvent:innen sagen",
    lead: "Auszüge von Teilnehmenden unserer Kommunikationstrainer-Ausbildung.",
    items: [
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
          "Die Ausbildung hat mir endlich Klarheit gegeben, wie ich als Trainerin wirksam sein kann — ohne aufgesetzte Methoden, sondern mit echter Haltung.",
        name: "Anna Glück",
        rating: 5 as const,
      },
      {
        quote:
          "Ich bin immer wieder beeindruckt, wie viel Energie, Klarheit und Praxisnähe Claudia in ihre Weiterbildungen bringt. Absolut empfehlenswert.",
        name: "Jonny Kohlhaas",
        role: "OKR-Trainer",
        company: "Claudia Thonet & Team",
        rating: 5 as const,
      },
    ] as CourseTestimonialData[],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      {
        question: "Brauche ich Vorkenntnisse in Kommunikation?",
        answer:
          "Keine tiefen Vorkenntnisse sind erforderlich. Interesse an Kommunikation und Freude an der Arbeit mit Menschen sind wichtiger als Vorkenntnisse.",
      },
      {
        question: "Wann erhalte ich das BDVT-Zertifikat?",
        answer:
          "Nach erfolgreichem Abschluss aller 3 Module und deines Abschlussprojekts erhältst du das anerkannte BDVT-Zertifikat als Kommunikationstrainer:in.",
      },
      {
        question: "Kann ich das Online- oder Präsenz-Format wählen?",
        answer:
          "Ja — die ersten zwei Module sind online, das dritte Modul ist wahlweise in Berlin oder online buchbar. Wähle das Format, das zu dir passt.",
      },
      {
        question: "Gibt es die Ausbildung auch als Inhouse-Format?",
        answer:
          "Ja — für Unternehmen, die Kommunikationstraining intern etablieren wollen, bieten wir maßgeschneiderte Inhouse-Programme an.",
      },
      {
        question: "Für welche Branchen ist die Ausbildung geeignet?",
        answer:
          "Die Ausbildung passt in Unternehmen, Behörden, Bildungseinrichtungen und sozialen Organisationen — überall dort, wo Kommunikation entscheidend ist.",
      },
    ],
  },

  inhouse: {
    eyebrow: "Für Unternehmen",
    headline: "Die Ausbildung auch Inhouse?",
    body: "Maßgeschneidert für euer Unternehmen, eure Sprache, eure Kommunikationsherausforderungen — deutschlandweit, mit demselben Expert:innen-Team.",
    ctaLabel: "Inhouse-Format anfragen",
    ctaHref: "/beratung",
  },

  finalCta: {
    headline: "Bereit, als Trainer:in zu wirken?",
    subline:
      "Melde dich an oder sichere dir ein kostenfreies 30-Min-Gespräch — ohne Verpflichtung, mit echter Orientierung.",
    ctaPrimary: { label: "Jetzt anmelden", href: "#termine" },
    ctaSecondary: { label: "Gratis Gespräch vereinbaren", href: "/beratung" },
  },
};
