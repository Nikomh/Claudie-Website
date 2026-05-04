import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy agile-ausbildungen → new ausbildungen structure (when migrated)
      // Currently keeping old URLs as canonical, adding aliases for new structure
      {
        source: "/ausbildungen/agile-coach",
        destination: "/agile-ausbildungen/agiler-coach",
        permanent: true,
      },
      {
        source: "/ausbildungen/agile-facilitator",
        destination: "/agile-ausbildungen/agiler-facilitator",
        permanent: true,
      },
      {
        source: "/ausbildungen/okr-coach",
        destination: "/agile-ausbildungen/okr-coach",
        permanent: true,
      },
      {
        source: "/ausbildungen/agile-fuehrung",
        destination: "/agile-ausbildungen/agile-fuehrung",
        permanent: true,
      },
      {
        source: "/ausbildungen/vertriebscoach",
        destination: "/agile-ausbildungen/vertriebscoach-ausbildung",
        permanent: true,
      },
      {
        source: "/ausbildungen/kommunikationstrainerin",
        destination: "/agile-ausbildungen/kommunikationstrainerin-ausbildung",
        permanent: true,
      },
      {
        source: "/ausbildungen/veraenderung-gestalten",
        destination: "/agile-ausbildungen/veraenderung-gestalten",
        permanent: true,
      },
      // consulting/* → beratung/* (new canonical URLs)
      {
        source: "/consulting/agile-organisationsentwicklung",
        destination: "/beratung/agile-organisationsentwicklung",
        permanent: true,
      },
      {
        source: "/consulting/agile-teams",
        destination: "/beratung/teamentwicklung",
        permanent: true,
      },
      {
        source: "/consulting/agile-fuehrung",
        destination: "/beratung/fuehrungskraefteentwicklung",
        permanent: true,
      },
      {
        source: "/consulting",
        destination: "/beratung",
        permanent: true,
      },
      {
        source: "/transformation-coach",
        destination: "/beratung/agile-transformation",
        permanent: true,
      },
      // Legacy consulting aliases
      {
        source: "/consulting/agile-transformation",
        destination: "/beratung/agile-transformation",
        permanent: true,
      },
      {
        source: "/consulting/agile-teamentwicklung",
        destination: "/beratung/teamentwicklung",
        permanent: true,
      },
      {
        source: "/consulting/agile-vertriebsfuehrung",
        destination: "/agile-ausbildungen/vertriebscoach-ausbildung",
        permanent: true,
      },
      // Wissen hub
      {
        source: "/wissen/agile-methoden",
        destination: "/agile-methoden",
        permanent: true,
      },
      {
        source: "/wissen/downloads",
        destination: "/downloadbereich",
        permanent: true,
      },
      {
        source: "/wissen/newsletter",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/wissen/buecher",
        destination: "/veroeffentlichungen",
        permanent: true,
      },
      {
        source: "/wissen/youtube",
        destination: "/youtube-videos",
        permanent: true,
      },
      {
        source: "/wissen/toolbox",
        destination: "/toolbox",
        permanent: true,
      },
      // Old footer links that were dead
      {
        source: "/downloads",
        destination: "/downloadbereich",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/agile-methoden",
        permanent: false,
      },
      {
        source: "/trainer",
        destination: "/ueber-uns",
        permanent: true,
      },
      {
        source: "/referenzen",
        destination: "/ueber-uns",
        permanent: true,
      },
      // Old course URLs from claudiathonet.de live site
      {
        source: "/ausbildungen/agile-master-class",
        destination: "/agile-ausbildungen/agiler-coach",
        permanent: true,
      },
      {
        source: "/ausbildungen/agile-teams",
        destination: "/consulting/agile-teams",
        permanent: true,
      },
      {
        source: "/ausbildungen/agile-methoden-kompakt",
        destination: "/agile-methoden",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
