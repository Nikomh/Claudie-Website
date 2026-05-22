"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

// ── Navigation data ──────────────────────────────────────────────

const beratungLinks = [
  { title: "AI Sparring für Coaches", description: "KI-Masterclass für Coaching, OE & Transformation. 2 halbe Tage, online live.", href: "/beratung/ai-sparring-fuer-coaches" },
  { title: "✦ Neue Positionierung (Konzept)", description: "KI-Ära Business Agility — neue Startseite im Preview.", href: "/beratung/neue-startseite" },
  { title: "Agile Organisationsentwicklung", description: "Strukturen und Kulturen iterativ weiterentwickeln.", href: "/beratung/agile-organisationsentwicklung" },
  { title: "Agile Transformation", description: "Agile Arbeitsweisen pragmatisch einführen und verankern.", href: "/beratung/agile-transformation" },
  { title: "Teamentwicklung", description: "Zusammenarbeit stärken, Rollen klären, Selbstorganisation fördern.", href: "/beratung/teamentwicklung" },
  { title: "Führungskräfteentwicklung", description: "Führung im Wandel stärken — Rahmen setzen, befähigen, loslassen.", href: "/beratung/fuehrungskraefteentwicklung" },
  { title: "OKR-Einführung & Begleitung", description: "OKRs strukturiert einführen und im Alltag verankern.", href: "/beratung/okr-einfuehrung" },
  { title: "Veränderung gestalten", description: "Veränderungsprozesse professionell begleiten.", href: "/beratung/veraenderung-gestalten" },
  { title: "Hybrides Projektmanagement", description: "Klassisch und agil sinnvoll verbinden.", href: "/beratung/hybrides-projektmanagement" },
];

const ausbildungenLinks = [
  { title: "Agile Coach Ausbildung", description: "BDVT-zertifiziert · 100+ Stunden · 5 Module", href: "/agile-ausbildungen/agiler-coach" },
  { title: "OKR Coach Ausbildung", description: "BDVT & ECA · 3 intensive Tage", href: "/agile-ausbildungen/okr-coach" },
  { title: "Agile Facilitator Ausbildung", description: "BDVT-zertifiziert · 50+ Stunden · 3 Module", href: "/agile-ausbildungen/agiler-facilitator" },
  { title: "Agile Führung Ausbildung", description: "BDVT & CAL · Führung im agilen Kontext", href: "/agile-ausbildungen/agile-fuehrung" },
  { title: "Vertriebscoach Ausbildung", description: "BDVT-zertifiziert · Agiler Vertrieb", href: "/agile-ausbildungen/vertriebscoach-ausbildung" },
  { title: "Kommunikationstrainer:in", description: "BDVT-zertifiziert · Kommunikation & Coaching", href: "/agile-ausbildungen/kommunikationstrainerin-ausbildung" },
];

const masterclassLinks = [
  { title: "AI Leadership Sprint", description: "9 Tage Online · KI-Entscheidungskompetenz + EU AI Act", href: "/ausbildungen/ai-leadership-sprint" },
  { title: "Veränderung gestalten", description: "2 Tage · Change & Transformation", href: "/masterclasses/veraenderung-gestalten" },
  { title: "Hybrides Projektmanagement", description: "2 Tage · Klassisch + Agil verbinden", href: "/masterclasses/hybrides-projektmanagement" },
  { title: "Agile Führung", description: "2–3 Tage · Rahmen setzen, befähigen", href: "/masterclasses/agile-fuehrung" },
  { title: "OKR in der Praxis", description: "1–2 Tage · Ziele fokussieren", href: "/masterclasses/okr-in-der-praxis" },
  { title: "Moderation & Facilitation", description: "2 Tage · Workshops wirksam gestalten", href: "/masterclasses/moderation-facilitation" },
];

const wissenLinks = [
  { title: "Wissen & Ressourcen", description: "Alle Ressourcen auf einen Blick.", href: "/wissen" },
  { title: "Agile Toolbox", description: "Methoden, Frameworks und Praxistipps.", href: "/toolbox" },
  { title: "Agile Methoden", description: "Übersicht nach TPDCA-Zyklus — interaktiv.", href: "/agile-methoden" },
  { title: "Veröffentlichungen", description: "4 Bücher von Claudia Thonet.", href: "/veroeffentlichungen" },
  { title: "YouTube-Videos", description: "Webinare und Erklärvideos.", href: "/youtube-videos" },
  { title: "Downloads", description: "Templates, Canvases, Leitfäden.", href: "/downloadbereich" },
  { title: "Newsletter", description: "Alle 4 Wochen — plus gratis E-Book.", href: "/newsletter" },
  { title: "KI-Newsletter", description: "Prompt & Praxis für Coaches.", href: "/wissen/ki-newsletter" },
];

// ── Shared dropdown link component ────────────────────────────────

function NavLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <NavigationMenu.Link asChild>
      <Link href={href} className="group block rounded-[var(--radius-md)] p-3 transition-colors hover:bg-bg-section">
        <div className="text-sm font-semibold text-anthrazit group-hover:text-tuerkis">{title}</div>
        <p className="mt-0.5 text-xs leading-snug text-anthrazit-80">{description}</p>
      </Link>
    </NavigationMenu.Link>
  );
}

function DropdownTrigger({ label }: { label: string }) {
  return (
    <NavigationMenu.Trigger className="group inline-flex h-10 items-center gap-1 rounded-[var(--radius-md)] px-3 text-sm font-semibold text-anthrazit transition-colors hover:bg-bg-section data-[state=open]:bg-bg-section">
      {label}
      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
    </NavigationMenu.Trigger>
  );
}

function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <NavigationMenu.Link asChild>
      <Link href={href} className="mt-3 flex w-full items-center justify-center rounded-[var(--radius-md)] bg-bg-section px-3 py-2 text-xs font-semibold text-anthrazit transition-colors hover:bg-tuerkis hover:text-white">
        {label} →
      </Link>
    </NavigationMenu.Link>
  );
}

const CONTENT_CLASS = "absolute left-0 top-full mt-2 motion-safe:data-[state=open]:animate-fade-in motion-safe:data-[state=closed]:animate-fade-in";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className={cn(
      "sticky top-0 z-50 h-[72px] w-full transition-all duration-200",
      scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white/70 backdrop-blur-sm",
    )}>
      <Container className="flex h-full items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" aria-label="Claudia Thonet — Startseite" className="relative inline-flex shrink-0 items-center">
          <Image
            src="/brand/logos/Logo_querformatig_fuer_hellen_Hintergrund_web_office.png"
            alt="Claudia Thonet"
            width={180} height={42} priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu.Root className="relative hidden lg:block">
          <NavigationMenu.List className="flex items-center gap-0.5">

            {/* Beratung */}
            <NavigationMenu.Item>
              <DropdownTrigger label="Beratung" />
              <NavigationMenu.Content className={cn(CONTENT_CLASS, "w-[640px]")}>
                <div className="rounded-[var(--radius-lg)] border border-border bg-white p-4 shadow-xl">
                  <div className="grid grid-cols-2 gap-1">
                    {beratungLinks.map((item) => <NavLink key={item.href} {...item} />)}
                  </div>
                  <ViewAllLink href="/beratung" label="Alle Beratungsfelder ansehen" />
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Ausbildungen */}
            <NavigationMenu.Item>
              <DropdownTrigger label="Ausbildungen" />
              <NavigationMenu.Content className={cn(CONTENT_CLASS, "w-[580px]")}>
                <div className="rounded-[var(--radius-lg)] border border-border bg-white p-4 shadow-xl">
                  <div className="grid grid-cols-2 gap-1">
                    {ausbildungenLinks.map((item) => <NavLink key={item.href} {...item} />)}
                  </div>
                  <ViewAllLink href="/ausbildungen" label="Alle Ausbildungen ansehen" />
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Masterclasses */}
            <NavigationMenu.Item>
              <DropdownTrigger label="Masterclasses" />
              <NavigationMenu.Content className={cn(CONTENT_CLASS, "w-[480px]")}>
                <div className="rounded-[var(--radius-lg)] border border-border bg-white p-2 shadow-xl">
                  {masterclassLinks.map((item) => <NavLink key={item.href} {...item} />)}
                  <ViewAllLink href="/masterclasses" label="Alle Masterclasses ansehen" />
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Webinare & Events — flat */}
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/webinare" className="inline-flex h-10 items-center rounded-[var(--radius-md)] px-3 text-sm font-semibold text-anthrazit transition-colors hover:bg-bg-section">
                  Webinare
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            {/* Wissen */}
            <NavigationMenu.Item>
              <DropdownTrigger label="Wissen" />
              <NavigationMenu.Content className={cn(CONTENT_CLASS, "w-[560px]")}>
                <div className="rounded-[var(--radius-lg)] border border-border bg-white p-4 shadow-xl">
                  <div className="grid grid-cols-2 gap-1">
                    {wissenLinks.map((item) => <NavLink key={item.href} {...item} />)}
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Über uns — flat */}
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/ueber-uns" className="inline-flex h-10 items-center rounded-[var(--radius-md)] px-3 text-sm font-semibold text-anthrazit transition-colors hover:bg-bg-section">
                  Über uns
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

          </NavigationMenu.List>
          <div className="absolute left-0 top-full flex w-full justify-start" aria-hidden>
            <NavigationMenu.Viewport className="origin-top-left" />
          </div>
        </NavigationMenu.Root>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/ausbildungen" className="inline-flex h-9 items-center gap-1.5 rounded-[var(--radius-md)] border border-border px-4 text-sm font-semibold text-anthrazit transition-all hover:border-tuerkis hover:text-tuerkis">
            Ausbildung finden
          </Link>
          <Link href="/kontakt" className={cn(buttonVariants({ variant: "primary", size: "sm" }))}>
            Erstgespräch buchen
          </Link>
        </div>

        {/* Mobile burger */}
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <Button variant="ghost" size="sm" aria-label="Menü öffnen" className="h-11 w-11 px-0 lg:hidden">
              <Menu className="h-5 w-5" aria-hidden />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-anthrazit/40 backdrop-blur-sm motion-safe:data-[state=open]:animate-fade-in" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl motion-safe:data-[state=open]:animate-fade-in">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <Dialog.Title className="text-base font-semibold text-anthrazit">Menü</Dialog.Title>
                <Dialog.Close asChild>
                  <Button variant="ghost" size="sm" aria-label="Menü schließen" className="h-9 w-9 px-0">
                    <X className="h-5 w-5" aria-hidden />
                  </Button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="sr-only">Hauptnavigation</Dialog.Description>
              <nav className="flex-1 overflow-y-auto px-4 pb-6 pt-2">
                {[
                  { label: "Beratung", overview: "/beratung", items: beratungLinks },
                  { label: "Ausbildungen", overview: "/ausbildungen", items: ausbildungenLinks },
                  { label: "Masterclasses", overview: "/masterclasses", items: masterclassLinks },
                ].map((section) => (
                  <div key={section.label} className="mt-5">
                    <Link href={section.overview} className="flex items-center justify-between rounded-[var(--radius-md)] px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-tuerkis hover:bg-bg-section">
                      {section.label}
                      <span className="text-xs normal-case font-normal text-anthrazit-80">Übersicht →</span>
                    </Link>
                    {section.items.map((i) => (
                      <Link key={i.href} href={i.href} className="block rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-anthrazit hover:bg-bg-section hover:text-tuerkis">
                        {i.title}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mt-5 border-t border-border pt-4">
                  {[
                    { label: "Webinare & Events", href: "/webinare" },
                    { label: "Wissen & Ressourcen", href: "/wissen" },
                    { label: "Über uns", href: "/ueber-uns" },
                    { label: "Kontakt", href: "/kontakt" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="block rounded-[var(--radius-md)] px-3 py-2 text-sm font-semibold text-anthrazit hover:bg-bg-section">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="flex flex-col gap-2 border-t border-border px-4 py-5">
                <Link href="/kontakt" className={buttonVariants({ variant: "primary", size: "md" })}>
                  Erstgespräch buchen
                </Link>
                <Link href="/ausbildungen" className={buttonVariants({ variant: "secondary", size: "md" })}>
                  Ausbildung finden
                </Link>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    </header>
  );
}
