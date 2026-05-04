"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { cn } from "@/lib/cn";

const initial: ContactState = { status: "idle" };

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-anthrazit">
        {label}
        {required && <span className="ml-0.5 text-orange-rot">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-orange-rot">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "h-11 w-full rounded-[var(--radius-md)] border border-border bg-white px-3 text-sm text-anthrazit placeholder:text-anthrazit-80/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis disabled:opacity-60";

const errorInputClass = "border-orange-rot focus-visible:ring-orange-rot";

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initial);
  const fields = state.status === "error" ? state.fields : {};

  if (state.status === "ok") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-white p-10 text-center shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tuerkis/10">
          <CheckCircle2 className="h-7 w-7 text-tuerkis" aria-hidden />
        </div>
        <h3 className="text-lg font-bold text-anthrazit">Nachricht erhalten!</h3>
        <p className="max-w-[40ch] text-sm leading-relaxed text-anthrazit-80">
          Wir melden uns persönlich — meist innerhalb von 1–2 Werktagen.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required error={fields.name}>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Dein Name"
            disabled={isPending}
            className={cn(inputClass, fields.name && errorInputClass)}
          />
        </Field>
        <Field label="E-Mail" required error={fields.email}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="deine@email.de"
            disabled={isPending}
            className={cn(inputClass, fields.email && errorInputClass)}
          />
        </Field>
      </div>

      <Field label="Betreff" error={fields.subject}>
        <input
          name="subject"
          type="text"
          placeholder="Worum geht es? (optional)"
          disabled={isPending}
          className={cn(inputClass, fields.subject && errorInputClass)}
        />
      </Field>

      <Field label="Nachricht" required error={fields.message}>
        <textarea
          name="message"
          rows={5}
          placeholder="Deine Anfrage, Fragen oder Anmerkungen…"
          disabled={isPending}
          className={cn(
            "w-full resize-none rounded-[var(--radius-md)] border border-border bg-white px-3 py-2.5 text-sm text-anthrazit placeholder:text-anthrazit-80/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis disabled:opacity-60",
            fields.message && errorInputClass,
          )}
        />
      </Field>

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-3 text-sm text-anthrazit-80">
          <input
            name="consent"
            type="checkbox"
            value="true"
            disabled={isPending}
            className="mt-0.5 h-4 w-4 shrink-0 accent-tuerkis"
          />
          <span>
            Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
            <a href="/datenschutz" className="font-semibold text-tuerkis hover:underline">
              Datenschutzerklärung
            </a>{" "}
            zu.*
          </span>
        </label>
        {fields.consent && (
          <p role="alert" className="text-xs text-orange-rot">
            {fields.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-tuerkis px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tuerkis-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2 disabled:opacity-60 self-start"
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        {isPending ? "Wird gesendet…" : "Nachricht senden"}
      </button>
    </form>
  );
}
