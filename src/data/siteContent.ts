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
    name: "Aarav Mehta",
    role: "Founder · Architecture",
    image: partner1,
    line: "A room should reveal its intelligence slowly, through light, proportion and use.",
    details: ["Twenty years in residential and civic architecture", "Leads early spatial strategy and concept review", "Works between Mumbai, Ahmedabad and site"],
  },
  {
    name: "Naina Shah",
    role: "Partner · Interiors",
    image: partner2,
    line: "The interior is not styling. It is the last act of architecture becoming daily life.",
    details: ["Directs material palettes and hospitality experience", "Known for restrained, tactile interiors", "Builds mockups before specification"],
  },
  {
    name: "Kabir Rao",
    role: "Partner · Delivery",
    image: partner3,
    line: "Precision is a courtesy to the client, the craftsperson and the building itself.",
    details: ["Oversees documentation, tendering and site coordination", "Keeps design intent intact through execution", "Leads quality audits across projects"],
  },
  {
    name: "Mira Desai",
    role: "Partner · Research",
    image: partner4,
    line: "Context is not a mood board. It is climate, memory, movement and constraint.",
    details: ["Leads precedent research and cultural mapping", "Develops sector playbooks and post-occupancy studies", "Guides writing and exhibition material"],
  },
];

export const sectors = [
  { slug: "residential", name: "Residential", image: residential, statement: "Homes arranged around quiet rituals: arrival, pause, gathering, retreat and light." },
  { slug: "commercial", name: "Commercial", image: commercial, statement: "Commercial spaces with clarity, brand discipline and a measurable sense of arrival." },
  { slug: "institutional", name: "Institutional", image: institutional, statement: "Long-life civic buildings shaped by durable edges, shaded movement and public dignity." },
  { slug: "hospitality", name: "Hospitality", image: hospitality, statement: "Hotels and retreats choreographed through warmth, sequence, tactility and view." },
  { slug: "industrial", name: "Industrial", image: industrial, statement: "Performance spaces treated with the same material rigour as the studio's finest interiors." },
  { slug: "workplace", name: "Workplace", image: workplace, statement: "Work environments that balance focus, exchange, culture and daily ease." },
];

export const milestones = [
  { year: "2009", title: "Studio founded", text: "IDL begins as a small architecture practice working from a single shared table." },
  { year: "2013", title: "First public commission", text: "The studio expands into institutional work and formalises its documentation standards." },
  { year: "2017", title: "Interior lab", text: "A dedicated interiors team is formed to carry architectural intent into detail and finish." },
  { year: "2021", title: "Research archive", text: "Post-occupancy studies become part of every major commission." },
  { year: "2025", title: "Design labs", text: "The practice becomes Interarch Design Labs, working across architecture, interiors and strategy." },
];

export const journalPosts = [
  {
    slug: "light-as-material",
    category: "Essay",
    date: "12.04.26",
    title: "Light as the first material",
    dek: "Why every IDL plan begins with the movement of sun before it becomes a drawing.",
  },
  {
    slug: "quiet-hospitality",
    category: "Notes",
    date: "28.03.26",
    title: "The discipline of quiet hospitality",
    dek: "Arrival, pause and privacy can do more for a guest than visual spectacle.",
  },
  {
    slug: "drawing-before-render",
    category: "Studio",
    date: "06.02.26",
    title: "Why we still draw before we render",
    dek: "The hand sketch remains a way to think, edit and test a building's first instinct.",
  },
];
