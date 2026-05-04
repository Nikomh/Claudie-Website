"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail } from "lucide-react";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { subscribeToNewsletter } from "@/app/actions/newsletter";
import { cn } from "@/lib/cn";

const schema = z.object({
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
});
type FormValues = z.infer<typeof schema>;

interface NewsletterFormProps {
  variant?: "stripe" | "footer";
  placeholder?: string;
  cta?: string;
}

export function NewsletterForm({
  variant = "stripe",
  placeholder = "deine@email.de",
  cta = "Newsletter sichern",
}: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = handleSubmit((data) => {
    setServerError(null);
    startTransition(async () => {
      const fd = new FormData();
      fd.append("email", data.email);
      const res = await subscribeToNewsletter({ status: "idle" }, fd);
      if (res.status === "ok") {
        setSuccess(true);
        reset();
      } else if (res.status === "error") {
        setServerError(res.message);
      }
    });
  });

  if (success) {
    return (
      <p
        role="status"
        className={cn(
          "inline-flex items-center gap-2 rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium",
          variant === "stripe"
            ? "bg-white/10 text-white"
            : "bg-tuerkis/15 text-tuerkis-50",
        )}
      >
        <CheckCircle2 className="h-4 w-4" aria-hidden />
        Danke! Wir melden uns mit dem nächsten Versand.
      </p>
    );
  }

  const errorMessage = errors.email?.message ?? serverError;
  const accent = variant === "stripe";

  return (
    <form
      onSubmit={submit}
      noValidate
      aria-label="Newsletter-Anmeldung"
      className="flex w-full max-w-md flex-col gap-2"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`newsletter-${variant}`} className="sr-only">
          E-Mail-Adresse
        </label>
        <div className="relative flex-1">
          <Mail
            className={cn(
              "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
              accent ? "text-white/50" : "text-white/50",
            )}
            aria-hidden
          />
          <input
            id={`newsletter-${variant}`}
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={placeholder}
            aria-invalid={!!errorMessage || undefined}
            aria-describedby={
              errorMessage ? `newsletter-${variant}-error` : undefined
            }
            disabled={isPending}
            className={cn(
              "h-11 w-full rounded-[var(--radius-md)] border border-white/15 bg-white/5 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis disabled:opacity-60",
              errorMessage && "border-orange-rot",
            )}
            {...register("email")}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "inline-flex h-11 min-h-[44px] items-center justify-center rounded-[var(--radius-md)] px-5 text-sm font-semibold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2 focus-visible:ring-offset-anthrazit disabled:opacity-60",
            accent
              ? "bg-orange-rot hover:brightness-110"
              : "bg-tuerkis hover:bg-tuerkis-80",
          )}
        >
          {isPending ? "Sende…" : cta}
        </button>
      </div>
      {errorMessage ? (
        <p
          id={`newsletter-${variant}-error`}
          role="alert"
          className="text-xs text-orange-rot"
        >
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
