import { z } from "zod";

export const trainerSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  focus: z.array(z.string()).default([]),
  bio: z.string().min(1),
  photo: z.string().min(1),
  socialLinks: z
    .object({
      website: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      xing: z.string().url().optional(),
      instagram: z.string().url().optional(),
      youtube: z.string().url().optional(),
    })
    .partial()
    .default({}),
});
export type Trainer = z.infer<typeof trainerSchema>;

export const moduleSchema = z.object({
  number: z.number().int().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  trainers: z.array(z.string().min(1)).default([]),
  topics: z.array(z.string().min(1)).default([]),
});
export type Module = z.infer<typeof moduleSchema>;

export const courseFormatSchema = z.enum(["online", "hybrid", "inhouse"]);
export type CourseFormat = z.infer<typeof courseFormatSchema>;

export const courseDateSchema = z
  .object({
    id: z.string().min(1),
    label: z.string().min(1),
    start: z.string().min(1),
    end: z.string().min(1),
    format: courseFormatSchema,
    location: z.string().optional(),
    priceNet: z.number().nonnegative(),
    earlyBirdUntil: z.string().optional(),
    earlyBirdPriceNet: z.number().nonnegative().optional(),
  })
  .refine(
    (d) =>
      (d.earlyBirdUntil === undefined && d.earlyBirdPriceNet === undefined) ||
      (d.earlyBirdUntil !== undefined && d.earlyBirdPriceNet !== undefined),
    {
      message: "earlyBirdUntil and earlyBirdPriceNet must both be set or both omitted",
    },
  );
export type CourseDate = z.infer<typeof courseDateSchema>;

export const testimonialSchema = z.object({
  quote: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  company: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  photo: z.string().optional(),
});
export type Testimonial = z.infer<typeof testimonialSchema>;

export const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});
export type FAQ = z.infer<typeof faqSchema>;

export const trainingSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  eyebrow: z.string().min(1),
  hero: z.object({
    headline: z.string().min(1),
    subline: z.string().min(1),
    badges: z.array(z.string()).default([]),
    image: z.string().min(1),
  }),
  promises: z.array(z.string().min(1)).default([]),
  useCases: z.array(z.string().min(1)).default([]),
  keyFacts: z.object({
    stundenAnzahl: z.number().int().nonnegative(),
    modulAnzahl: z.number().int().nonnegative(),
    peerGroupSize: z.number().int().nonnegative(),
    toolsCount: z.number().int().nonnegative(),
  }),
  modules: z.array(moduleSchema).default([]),
  methods: z.array(z.string().min(1)).default([]),
  dates: z.array(courseDateSchema).default([]),
  trainers: z.array(trainerSchema).default([]),
  certifications: z.array(z.string().min(1)).default([]),
  pdfUrl: z.string().optional(),
  faq: z.array(faqSchema).default([]),
  inhouseEnabled: z.boolean().default(true),
});
export type Training = z.infer<typeof trainingSchema>;

export const numberedFeatureSchema = z.object({
  number: z.number().int().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});
export type NumberedFeature = z.infer<typeof numberedFeatureSchema>;

export const consultingOfferSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  bullets: z.array(z.string().min(1)).default([]),
});
export type ConsultingOffer = z.infer<typeof consultingOfferSchema>;

export const consultingTopicSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  hero: z.object({
    headline: z.string().min(1),
    subline: z.string().min(1),
    image: z.string().min(1),
  }),
  usps: z.array(z.string().min(1)).default([]),
  numberedFeatures: z.array(numberedFeatureSchema).default([]),
  processGraphic: z.string().optional(),
  offers: z.array(consultingOfferSchema).default([]),
  testimonialIds: z.array(z.string().min(1)).default([]),
});
export type ConsultingTopic = z.infer<typeof consultingTopicSchema>;

export const webinarStatusSchema = z.enum(["upcoming", "replay"]);
export type WebinarStatus = z.infer<typeof webinarStatusSchema>;

export const webinarSchema = z
  .object({
    id: z.string().min(1),
    title: z.string().min(1),
    date: z.string().min(1),
    durationMin: z.number().int().positive(),
    host: z.string().min(1),
    status: webinarStatusSchema,
    zoomUrl: z.string().url().optional(),
    replayUrl: z.string().url().optional(),
    topic: z.array(z.string().min(1)).default([]),
  })
  .refine(
    (w) =>
      (w.status === "upcoming" && !!w.zoomUrl) ||
      (w.status === "replay" && !!w.replayUrl),
    { message: "upcoming requires zoomUrl, replay requires replayUrl" },
  );
export type Webinar = z.infer<typeof webinarSchema>;

export const blogFormatSchema = z.enum(["article", "video", "template", "ebook"]);
export type BlogFormat = z.infer<typeof blogFormatSchema>;

export const blogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  cluster: z.string().min(1),
  tags: z.array(z.string().min(1)).default([]),
  format: blogFormatSchema,
  readingMin: z.number().int().positive(),
  publishedAt: z.string().min(1),
  coverImage: z.string().min(1),
});
export type BlogPost = z.infer<typeof blogPostSchema>;

export const siteSettingsSchema = z.object({
  contact: z.object({
    email: z.string().email(),
    phone: z.string().min(1),
    address: z.string().min(1),
  }),
  socials: z
    .object({
      linkedin: z.string().url().optional(),
      xing: z.string().url().optional(),
      instagram: z.string().url().optional(),
      youtube: z.string().url().optional(),
      facebook: z.string().url().optional(),
    })
    .partial()
    .default({}),
});
export type SiteSettings = z.infer<typeof siteSettingsSchema>;
