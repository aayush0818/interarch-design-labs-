import studioHero from "@/assets/studio-hero.jpg";
import teamHero from "@/assets/team-hero.jpg";
import studioCulture from "@/assets/studio-culture.jpg";
import partner1 from "@/assets/partner-1.jpg";
import partner2 from "@/assets/partner-2.jpg";
import partner3 from "@/assets/partner-3.jpg";
import partner4 from "@/assets/partner-4.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import residential from "@/assets/sector-residential.jpg";
import commercial from "@/assets/sector-commercial.jpg";
import institutional from "@/assets/sector-institutional.jpg";
import hospitality from "@/assets/sector-hospitality.jpg";
import industrial from "@/assets/sector-industrial.jpg";
import workplace from "@/assets/sector-workplace.jpg";
import skyline from "@/assets/skyline-sketch.png";

export const pageImages = {
  studioHero,
  teamHero,
  studioCulture,
  skyline,
  works: [work1, work2, work3, work4, work5, work6],
};

export const partners = [
  {
    name: "Ar. Dipak Thaker",
    role: "Founder · Architecture",
    image: partner1,
    line: "Modern architecture, drawn from traditional guidelines — that has been the practice since 1989.",
    details: [
      "40+ years of architectural experience",
      "Founded Interarch in 1989 with DID Consultants",
      "Felicitated by Rachana Sansad, Mumbai (2015)",
    ],
  },
  {
    name: "Ar. Murtuza Rangwala",
    role: "Partner · Interiors",
    image: partner2,
    line: "The interior is the last act of architecture becoming daily life.",
    details: [
      "30+ years of interior expertise",
      "Leads material palettes and hospitality interiors",
      "Co-founder of the Interarch legacy",
    ],
  },
  {
    name: "Ar. Hussain Rangwala",
    role: "Partner · Contemporary Design",
    image: partner3,
    line: "Detail is not decoration — it is the discipline that gives a space its calm.",
    details: [
      "Detail-driven, contextual design sensibility",
      "Brought the Kala Design legacy into IDL",
      "Leads design development and material craft",
    ],
  },
  {
    name: "Ar. Rohit Gojia",
    role: "Partner · Design Strategy",
    image: partner4,
    line: "Every design should feel inevitable, yet personal to the people it serves.",
    details: [
      "Contemporary, detail-led design lead",
      "Guides spatial strategy and project direction",
      "Works across architecture and interiors",
    ],
  },
];

export const sectors = [
  { slug: "residential", name: "Residential", image: residential, statement: "Villas, bungalows and apartments designed to reflect individuality, comfort and timelessness — composed around light, view and movement." },
  { slug: "commercial", name: "Commercial", image: commercial, statement: "Corporate offices, retail and work environments that translate brand identity into spatial performance, designed for now and future growth." },
  { slug: "institutional", name: "Institutional", image: institutional, statement: "Schools, civic centres and cultural landmarks designed for long-term relevance, with efficiency, accessibility and civic presence as guiding principles." },
  { slug: "hospitality", name: "Hospitality", image: hospitality, statement: "Bespoke hospitality interiors that elevate lifestyle — choreographed through warmth, sequence, tactility and view." },
  { slug: "industrial", name: "Industrial", image: industrial, statement: "Performance spaces treated with the same material rigour and intelligence as the studio's finest interiors." },
  { slug: "workplace", name: "Workplace", image: workplace, statement: "Work environments that balance focus, exchange and culture — supporting productivity, identity and daily ease." },
];

export const milestones = [
  { year: "1989", title: "Founded by Ar. Dipak Thaker", text: "Interarch is established with its twin firm DID Consultants under the guiding principle of modern architecture drawn from traditional guidelines." },
  { year: "2001", title: "A+D Spectrum Architecture Awards", text: "Early recognition for creative approach and contribution to the contemporary architecture dialogue." },
  { year: "2008", title: "AREA Acknowledgement", text: "The Association of Real Estate Agents acknowledges the firm's contribution during their 3rd Real Estate Conference." },
  { year: "2009", title: "DRDO Silver Jubilee Honour", text: "The Defence Research & Development Organisation recognises the firm's role in supporting key institutional projects." },
  { year: "2010", title: "Civic Recognition", text: "Felicitated by government and civic leaders for the design impact of Babasaheb Ambedkar Bhavan and other public works." },
  { year: "2014", title: "AICA Asia Fest Commendation", text: "Large-scale institutional work — including the Educational Big and Medical Academy — receives a commendation from an international panel." },
  { year: "2015", title: "Rachana Sansad Diamond Jubilee", text: "The Academy of Architecture, Mumbai felicitates Ar. Dipak Thaker for significant contributions to the profession." },
  { year: "Today", title: "Interarch Design Labs", text: "Three decades on, the practice is a multidisciplinary studio across architecture, interiors, engineering and master planning — formed by the union of Interarch and Kala Design." },
];

export const journalPosts = [
  {
    slug: "design-with-depth",
    category: "Essay",
    date: "12.04.26",
    title: "Design with depth, spaces with purpose",
    dek: "Why every IDL project begins with meaning before form — and how that discipline shapes a building.",
  },
  {
    slug: "clarity-is-not-minimalism",
    category: "Notes",
    date: "28.03.26",
    title: "Clarity is not minimalism — it is intention",
    dek: "Removing what doesn't matter so the essential can define the space.",
  },
  {
    slug: "drawing-before-render",
    category: "Studio",
    date: "06.02.26",
    title: "Why we still sketch before we render",
    dek: "The hand drawing remains the way the studio thinks, edits and tests a building's first instinct.",
  },
];
