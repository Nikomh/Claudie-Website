import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/impressum/", "/datenschutz/", "/agb/", "/cookies/"],
      },
    ],
    sitemap: "https://www.claudiathonet.de/sitemap.xml",
  };
}
