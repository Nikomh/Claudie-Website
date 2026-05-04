export type CourseHeroData = {
  eyebrow: string;
  headlineLines: readonly string[];
  subline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: readonly { value: string; label: string }[];
};

export type CourseTrustBarItem = {
  value: string;
  label: string;
  icon: string;
};

export type CourseTrustBarData = readonly CourseTrustBarItem[];

export type CourseOutcomesData = {
  eyebrow: string;
  title: string;
  lead: string;
  items: readonly { title: string; body: string }[];
};

export type CourseForWhomData = {
  eyebrow: string;
  title: string;
  items: readonly { title: string; body: string }[];
  note: string;
};

export type CourseModuleItem = {
  number: number;
  title: string;
  description: string;
  topics: readonly string[];
  trainers: readonly string[];
  format: string;
};

export type CourseModulesData = {
  eyebrow: string;
  title: string;
  lead: string;
  items: readonly CourseModuleItem[];
  addons: readonly { title: string; body: string }[];
};

export type CourseCohortDate = {
  label: string;
  date: string;
  location: string;
};

export type CourseCohortData = {
  id: string;
  name: string;
  badge: string;
  format: string;
  priceHybrid: string;
  priceHybridLabel?: string;
  priceOnline?: string;
  priceOnlineLabel?: string;
  vatNote: string;
  modules: readonly CourseCohortDate[];
  venue: string;
  ctaLabel: string;
  ctaHref: string;
};

export type CourseDatesData = {
  eyebrow: string;
  title: string;
  lead: string;
  cohorts: readonly CourseCohortData[];
  discountNote: string;
  contact: { name: string; email: string; phone: string };
};

export type CourseTrainerData = {
  name: string;
  initials: string;
  avatarColor: string;
  textColor: string;
  role: string;
  focusTopics: readonly string[];
  bio: string;
};

export type CourseTeamData = {
  eyebrow: string;
  title: string;
  lead: string;
  members: readonly CourseTrainerData[];
};

export type CourseTestimonialData = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type CourseTestimonialsData = {
  eyebrow: string;
  title: string;
  lead: string;
  items: readonly CourseTestimonialData[];
};

export type CourseFAQData = {
  eyebrow: string;
  title: string;
  items: readonly { question: string; answer: string }[];
};

export type CourseInhouseData = {
  eyebrow: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type CourseFinalCtaData = {
  headline: string;
  subline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};
