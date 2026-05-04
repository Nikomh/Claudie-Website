"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  subject: z.string().optional(),
  message: z.string().min(10, "Bitte schreib mindestens 10 Zeichen."),
  consent: z.literal("true", { error: "Bitte stimme der Datenschutzerklärung zu." }),
});

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; fields: Partial<Record<string, string>> };

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    consent: formData.get("consent"),
  });

  if (!parsed.success) {
    const fields: Partial<Record<string, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key) fields[key] = issue.message;
    }
    return { status: "error", fields };
  }

  // TODO: integrate with email provider (Resend / Brevo / SMTP)
  await new Promise((r) => setTimeout(r, 400));

  return { status: "ok" };
}
