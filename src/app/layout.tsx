import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.claudiathonet.de"),
  title: {
    default: "Claudia Thonet — Agile Ausbildungen & Beratung",
    template: "%s · Claudia Thonet",
  },
  description:
    "Agile Ausbildungen, Beratung und Trainings für nachhaltige Veränderung im DACH-Raum. Agile Master Class, Agile Führung, Agile Teams.",
  applicationName: "Claudia Thonet",
  authors: [{ name: "Claudia Thonet" }],
  keywords: [
    "Agile",
    "Ausbildung",
    "Coaching",
    "Beratung",
    "Scrum",
    "Agile Master Class",
    "Agile Führung",
    "Agile Teams",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Claudia Thonet",
    title: "Claudia Thonet — Agile Ausbildungen & Beratung",
    description:
      "Agile Ausbildungen, Beratung und Trainings für nachhaltige Veränderung im DACH-Raum.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudia Thonet — Agile Ausbildungen & Beratung",
    description:
      "Agile Ausbildungen, Beratung und Trainings für nachhaltige Veränderung im DACH-Raum.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#14b4be",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-md)] focus:bg-anthrazit focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Zum Hauptinhalt springen
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
