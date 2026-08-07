export type PosterCategory = "All" | "Events" | "Church" | "Campaign" | "Brand";

export interface Poster {
  id: string;
  title: string;
  category: Exclude<PosterCategory, "All">;
  image: string;
  year: string;
}

function posterImage(filename: string) {
  return `/images/gallery/${encodeURIComponent(filename)}`;
}

export const POSTER_CATEGORIES: PosterCategory[] = [
  "All",
  "Events",
  "Church",
  "Campaign",
  "Brand",
];

export const POSTERS: Poster[] = [
  {
    id: "theme-expo",
    title: "Theme Expo — MOUT",
    category: "Events",
    image: posterImage("theme expo mout.jpg"),
    year: "2026",
  },
  {
    id: "giving-week",
    title: "Giving Week Campaign",
    category: "Campaign",
    image: posterImage("mout giving week.jpg"),
    year: "2026",
  },
  {
    id: "committee-meeting",
    title: "Committee Meeting",
    category: "Events",
    image: posterImage("committee meeting.png"),
    year: "2026",
  },
  {
    id: "kingdom-truth",
    title: "Kingdom Truth — Brand Identity",
    category: "Brand",
    image: posterImage("kingdom truth logo.jpg"),
    year: "2025",
  },
  {
    id: "kingdom-truth-logo-mark",
    title: "Kingdom Truth — Logo Mark",
    category: "Brand",
    image: posterImage("logo-Photoroom (1).png"),
    year: "2026",
  },
  {
    id: "paynasi-logo",
    title: "PayNasi — Logo Design",
    category: "Brand",
    image: posterImage("paynasi_logo.jpg"),
    year: "2026",
  },
  {
    id: "paynasi-app-banner",
    title: "PayNasi — App Banner",
    category: "Brand",
    image: posterImage("app banner.png"),
    year: "2026",
  },
  {
    id: "h2o-ambassador",
    title: "H2O Ambassador — Product Visual",
    category: "Brand",
    image: posterImage("WhatsApp Image 2026-08-06 at 4.56.54 PM.jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-1",
    title: "Kingdom Truth — Worship Experience",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.03.45 PM.jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-2",
    title: "Kingdom Truth — Worship Experience (Alt)",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.03.45 PM (1).jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-3",
    title: "Kingdom Truth — Worship Experience Flyer",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.03.46 PM.jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-4",
    title: "Kingdom Truth — Worship Experience Poster",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.03.47 PM.jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-5",
    title: "Kingdom Truth — Worship Experience Graphic",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.03.48 PM.jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-6",
    title: "Kingdom Truth — Worship Experience (Variant)",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.03.48 PM (1).jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-7",
    title: "Kingdom Truth — Worship Experience Announcement",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.06.19 PM.jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-8",
    title: "Kingdom Truth — Worship Experience Promo",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.06.19 PM (1).jpeg"),
    year: "2026",
  },
  {
    id: "worship-experience-9",
    title: "Kingdom Truth — Worship Experience Visual",
    category: "Church",
    image: posterImage("WhatsApp Image 2026-08-07 at 6.06.19 PM (2).jpeg"),
    year: "2026",
  },
  {
    id: "poster-design-1",
    title: "Visual Campaign Poster",
    category: "Campaign",
    image: posterImage("ChatGPT Image Jul 28, 2026, 05_24_50 PM.png"),
    year: "2026",
  },
  {
    id: "poster-design-2",
    title: "Event Announcement Graphic",
    category: "Events",
    image: posterImage("ChatGPT Image Jul 31, 2026, 10_45_35 PM.png"),
    year: "2026",
  },
  {
    id: "poster-design-3",
    title: "Ministry Series Poster",
    category: "Church",
    image: posterImage("ChatGPT Image Aug 1, 2026, 01_53_46 PM.png"),
    year: "2026",
  },
  {
    id: "poster-design-4",
    title: "Seasonal Campaign Visual",
    category: "Campaign",
    image: posterImage("ChatGPT Image Aug 1, 2026, 02_07_58 PM.png"),
    year: "2026",
  },
];
