import type { MetadataRoute } from "next";

const BASE_URL = "https://www.claudiathonet.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    // High priority — core pages
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/beratung/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/kontakt/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Ausbildungen — highest conversion value
    { url: `${BASE_URL}/agile-ausbildungen/agiler-coach/`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/agile-ausbildungen/agiler-facilitator/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/agile-ausbildungen/okr-coach/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/agile-ausbildungen/agile-fuehrung/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/agile-ausbildungen/vertriebscoach-ausbildung/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/agile-ausbildungen/kommunikationstrainerin-ausbildung/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/agile-ausbildungen/veraenderung-gestalten/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Beratung
    { url: `${BASE_URL}/beratung/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/beratung/agile-organisationsentwicklung/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/beratung/agile-transformation/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/beratung/teamentwicklung/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/beratung/fuehrungskraefteentwicklung/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/beratung/okr-einfuehrung/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/beratung/veraenderung-gestalten/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/beratung/hybrides-projektmanagement/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Masterclasses
    { url: `${BASE_URL}/masterclasses/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ausbildungen/ai-leadership-sprint/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/masterclasses/veraenderung-gestalten/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/masterclasses/hybrides-projektmanagement/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/masterclasses/agile-fuehrung/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/masterclasses/okr-in-der-praxis/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/masterclasses/moderation-facilitation/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Wissen Hub
    { url: `${BASE_URL}/wissen/`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Wissen — SEO-relevant
    { url: `${BASE_URL}/agile-methoden/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/toolbox/`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/webinare/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/veroeffentlichungen/`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/youtube-videos/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/downloadbereich/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/newsletter/`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },

    // Über uns
    { url: `${BASE_URL}/ueber-uns/`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
  ];

  return routes;
}
