import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Clock, Users, BookOpen, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "KI-Newsletter – AI Sparring für Coaches | Claudia Thonet",
  description:
    "KI verändert Coaching grundlegend. Erfahre, wie du KI verantwortungsvoll in deine Coaching-Praxis integrierst – mit dem COACH-Framework, DSGVO-konform und AI-Act-ready.",
};

export default function KiNewsletterPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "KI-Newsletter" },
        ]}
      />

      {/* ── Hero / Newsletter-Header ─────────────────────────── */}
      <div className="bg-anthrazit py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-tuerkis/30 bg-tuerkis/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-tuerkis" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-widest text-tuerkis">Newsletter · Mai 2025</span>
              </div>
              <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
                „Darf ich KI im Coaching nutzen?"
                <span className="mt-2 block text-tuerkis">Ja – aber richtig.</span>
              </h1>
              <p className="max-w-[52ch] text-base leading-relaxed text-white/75 md:text-lg">
                Warum die Frage längst nicht mehr <em>ob</em> ist, sondern <em>wie</em> – und was das für deine Praxis als Coach, OE-Berater:in oder Facilitator:in bedeutet.
              </p>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* ── Einleitung ─────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <div className="prose prose-lg mx-auto">
              <p className="text-base leading-relaxed text-anthrazit-80">
                Hallo zusammen,
              </p>
              <p className="mt-4 text-base leading-relaxed text-anthrazit-80">
                KI verändert gerade alles – auch unsere Arbeit als Coaches und Berater:innen. Und seien wir ehrlich: Die meisten von uns stehen irgendwo zwischen Neugier und Unsicherheit. <strong className="text-anthrazit">„Darf ich das?"</strong>, <strong className="text-anthrazit">„Ist das noch vertraulich?"</strong>, <strong className="text-anthrazit">„Wie erkläre ich das meinen Auftraggeber:innen?"</strong>
              </p>
              <p className="mt-4 text-base leading-relaxed text-anthrazit-80">
                Genau diese Fragen haben wir in den letzten Monaten immer wieder gehört – in Ausbildungen, in Sparrings und auf Konferenzen. Deshalb haben wir ein Format entwickelt, das genau dort ansetzt, wo Coaches wirklich stehen:
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Vorstellung: AI Sparring ────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container className="max-w-3xl">
            <div className="rounded-[var(--radius-lg)] border border-tuerkis/20 bg-tuerkis/5 p-8 md:p-10">
              <Eyebrow className="text-tuerkis">Unser neues Format</Eyebrow>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
                AI Sparring für Coaches
              </h2>
              <p className="mt-2 text-sm font-medium text-tuerkis">Masterclass · 2 halbe Tage · online live · max. 14 Teilnehmende</p>
              <p className="mt-5 text-base leading-relaxed text-anthrazit-80">
                Zwei halbe Tage, in denen du KI verantwortungsvoll in deine Coaching- und OE-Praxis integrierst. Du entwickelst ein eigenes Prompting-Framework, arbeitest an deinen realen (anonymisierten) Fällen und gehst mit konkreten Workflows raus – nicht mit Folien.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Shield, text: "DSGVO-konform & AI-Act-ready" },
                  { icon: Sparkles, text: "Eigenes COACH-Prompting-Framework" },
                  { icon: Clock, text: "70 % Praxis, 30 % Input" },
                  { icon: Users, text: "Kleine Gruppen, echtes Sparring" },
                  { icon: BookOpen, text: "30-Tage-Transferplan inklusive" },
                  { icon: Zap, text: "Ab Tag 3 produktiv einsetzbar" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                    <span className="text-sm text-anthrazit-80">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Warum jetzt? ──────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
              Warum jetzt?
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {[
                {
                  title: "Der EU AI Act ist da.",
                  body: "Seit Februar 2025 gilt die AI-Literacy-Pflicht (Art. 4). Wer KI beruflich nutzt, muss nachweisen können, dass Mitarbeitende geschult sind. Das betrifft auch Coaches – besonders in Corporate-Kontexten.",
                },
                {
                  title: "Deine Auftraggeber:innen fragen schon.",
                  body: "Immer mehr Unternehmen erwarten, dass externe Coaches und Berater:innen eine klare Haltung zu KI haben. Nicht „ich mache das nicht“, sondern „ich weiß, wie ich es verantwortungsvoll nutze“.",
                },
                {
                  title: "Die Tools sind reif – die Kompetenz fehlt.",
                  body: "ChatGPT, Claude, Copilot – die Tools sind mächtig geworden. Was fehlt, ist ein Framework, das Coach-Logik, Datenschutz und Berufsethik zusammenbringt. Genau das liefern wir.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[var(--radius-md)] border border-border bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-anthrazit-80">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Das COACH-Framework ─────────────────────────────── */}
      <Reveal>
        <Section bg="anthrazit">
          <Container className="max-w-3xl">
            <Eyebrow className="text-tuerkis-50">Ein Blick ins Format</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Das COACH-Framework
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Kein Copy-Paste von Prompting-Kursen aus dem Marketing. Sondern ein Framework, das aus Coaching-Logik heraus entwickelt wurde – und das du in 5 Minuten verinnerlicht hast:
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                { letter: "C", word: "Context", desc: "Situation beschreiben – anonymisiert, ohne identifizierende Details." },
                { letter: "O", word: "Outcome", desc: "Was soll konkret herauskommen? In welchem Format?" },
                { letter: "A", word: "Assumptions", desc: "Welche Annahmen soll die KI sichtbar machen oder hinterfragen?" },
                { letter: "C", word: "Constraints", desc: "Ethik, Datenschutz, Coaching-Haltung: klare Grenzen setzen." },
                { letter: "H", word: "Human Review", desc: "Die KI ist Sparring, nicht Coach. Du prüfst den Output professionell." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-tuerkis text-lg font-bold text-white">
                      {item.letter}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.word}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Was du mitnimmst ──────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
              Was du nach zwei halben Tagen mitnimmst
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Ein eigenes Prompting-Framework (COACH), das aus Coaching-Logik abgeleitet ist",
                "Mindestens drei erprobte Coach-Prompts für deine reale Praxis",
                "Sichere Routinen: Ampel-Logik, Anonymisierungs-Checkliste, 10 Sicherheitsregeln",
                "Ein persönliches Use-Case-Canvas mit deinem ersten KI-Workflow",
                "30-Tage-Transferplan mit Follow-up-Session und Lernpartner-Match",
                "Teilnahmebescheinigung mit AI-Literacy-Bezug (Art. 4 EU AI Act)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-anthrazit-80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tuerkis" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </Reveal>

      {/* ── Für wen ───────────────────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
              Für wen ist das?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-anthrazit-80">
              Für alle, die Coaching, Beratung oder Facilitation professionell betreiben – und KI nicht ignorieren, sondern verantwortungsvoll nutzen wollen:
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Agile Coaches & Transformation Coaches",
                "Organisationsentwickler:innen",
                "Interne Coaches in Unternehmen",
                "Scrum Master & Agile Master",
                "Trainer:innen & Facilitator:innen",
                "L&D, People & Culture, HR",
              ].map((role) => (
                <div key={role} className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 shadow-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-tuerkis" aria-hidden />
                  <span className="text-sm font-medium text-anthrazit">{role}</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <Reveal>
        <Section>
          <Container className="max-w-3xl">
            <div className="rounded-[var(--radius-lg)] border border-tuerkis/20 bg-tuerkis/5 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-anthrazit sm:text-3xl">
                Neugierig geworden?
              </h2>
              <p className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-anthrazit-80">
                Sichere dir jetzt deinen Platz im nächsten Durchgang. Die Gruppen sind bewusst klein gehalten (max. 14 Personen), damit echtes Sparring möglich ist.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/beratung/ai-sparring-fuer-coaches"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-8 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80 sm:w-auto"
                >
                  Alle Details & Anmeldung <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-border px-8 text-sm font-semibold text-anthrazit transition-all hover:border-tuerkis hover:text-tuerkis sm:w-auto"
                >
                  Erstgespräch buchen
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </Reveal>

      {/* ── Abschluss / Signatur ──────────────────────────────── */}
      <Reveal>
        <Section bg="section">
          <Container className="max-w-3xl">
            <div className="text-center">
              <p className="text-base leading-relaxed text-anthrazit-80">
                Herzliche Grüße,
              </p>
              <p className="mt-2 text-base font-semibold text-anthrazit">
                Claudia Thonet & Team
              </p>
              <p className="mt-1 text-sm text-anthrazit-80">
                Agile Consulting GmbH
              </p>
              <div className="mx-auto mt-6 h-px w-16 bg-tuerkis/30" aria-hidden />
              <p className="mt-6 text-xs leading-relaxed text-anthrazit-80/60">
                Du erhältst diese E-Mail, weil du dich für unseren Newsletter angemeldet hast.{" "}
                <Link href="/datenschutz" className="underline hover:text-tuerkis">Datenschutzerklärung</Link>{" · "}
                <span className="underline">Abmelden</span>
              </p>
            </div>
          </Container>
        </Section>
      </Reveal>
    </>
  );
}
