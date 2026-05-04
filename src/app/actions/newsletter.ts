"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
});

export type NewsletterState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const parsed = schema.safeParse({
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Eingabe ungültig.",
    };
  }

  // TODO: integrate with ESP (Brevo / Mailchimp / ConvertKit) — current stub.
  await new Promise((r) => setTimeout(r, 250));

  return { status: "ok" };
}
