import work1 from "@/assets/9c5aa0d0-310f-4331-b48d-b05de9dac663.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Project = {
  slug: string;
  name: string;
  sector: "Residential" | "Commercial" | "Institutional" | "Hospitality" | "Industrial" | "Workplace";
  location: string;
  year: string;
  area: string;
  scope: string;
  category: "Architecture" | "Interiors";
  description: string;
  cover: string;
};

export const projects: Project[] = [
  { slug: "courtyard-house", name: "Courtyard House", sector: "Residential", location: "Alibaug, MH", year: "2024", area: "18,400 sq ft", scope: "Architecture · Interiors", category: "Architecture", cover: work1, description: "A private residence arranged around shaded courts, deep verandahs and quiet thresholds — proportion, daylight and restraint set the rhythm of privacy and openness." },
  { slug: "monsoon-villa", name: "Monsoon Villa", sector: "Residential", location: "Karjat, MH", year: "2022", area: "12,200 sq ft", scope: "Architecture", category: "Architecture", cover: work3, description: "A weekend villa that opens to the rains — sloped roofs, breathing screens and a long verandah that becomes the most-used room of the house." },
  { slug: "hill-retreat", name: "Hill Retreat", sector: "Hospitality", location: "Lonavala, MH", year: "2023", area: "42 keys", scope: "Interior architecture", category: "Interiors", cover: work2, description: "A boutique retreat where arrival, pause and view are choreographed through warm stone, timber and filtered light — intimacy balanced with hospitality." },
  { slug: "coastal-resort", name: "Coastal Resort", sector: "Hospitality", location: "Gokarna, KA", year: "2024", area: "68 keys", scope: "Architecture · Master plan", category: "Architecture", cover: work5, description: "A low-slung resort that defers to the coast — the architecture disappears into the section, leaving only the horizon and the sea." },
  { slug: "brand-house", name: "Brand House", sector: "Commercial", location: "Mumbai, MH", year: "2024", area: "36,000 sq ft", scope: "Interior design", category: "Interiors", cover: work3, description: "A headquarters as a sequence of precise working rooms, client salons and collaborative tables — brand discipline translated into calm, daily performance." },
  { slug: "merchant-tower", name: "Merchant Tower", sector: "Commercial", location: "Ahmedabad, GJ", year: "2023", area: "1.2 lakh sq ft", scope: "Architecture", category: "Architecture", cover: work6, description: "A grade-A tower with a quiet façade — composed proportions, deep returns and a civic plinth that gives the street back to the city." },
  { slug: "learning-court", name: "Learning Court", sector: "Institutional", location: "Pune, MH", year: "2022", area: "2.4 acres", scope: "Architecture · Planning", category: "Architecture", cover: work4, description: "A civic campus shaped by durable edges, shaded movement and shared courtyards — planned for long life, ease of use and a clear institutional presence." },
  { slug: "civic-library", name: "Civic Library", sector: "Institutional", location: "Nashik, MH", year: "2021", area: "48,000 sq ft", scope: "Architecture", category: "Architecture", cover: work1, description: "A public library treated as a daylit reading hall — top-lit, generous in section, with a calm material discipline that ages well." },
  { slug: "assembly-works", name: "Assembly Works", sector: "Industrial", location: "Bhiwandi, MH", year: "2021", area: "86,000 sq ft", scope: "Architecture", category: "Architecture", cover: work5, description: "A functional facility treated with architectural rigour — efficient bays, controlled light and a robust material language that gives performance a measured presence." },
  { slug: "precision-shed", name: "Precision Shed", sector: "Industrial", location: "Pune, MH", year: "2024", area: "1.1 lakh sq ft", scope: "Architecture", category: "Architecture", cover: work2, description: "A clean-process facility with daylight reaching every workstation — the envelope and the section do the work the equipment can't." },
  { slug: "bkc-workplace", name: "BKC Workplace", sector: "Workplace", location: "BKC, Mumbai", year: "2023", area: "52,000 sq ft", scope: "Interior design", category: "Interiors", cover: work6, description: "A workplace organised for focus, exchange and hospitality — different modes of work supported within a coherent spatial identity." },
  { slug: "studio-loft", name: "Studio Loft", sector: "Workplace", location: "Lower Parel, MH", year: "2022", area: "18,500 sq ft", scope: "Interior design", category: "Interiors", cover: work4, description: "A loft for a creative agency — exposed structure, soft floor, and rooms that close when thought needs quiet and open when work needs the room." },
];

export const projectsBySector = (sectorSlug: string) =>
  projects.filter((p) => p.sector.toLowerCase() === sectorSlug.toLowerCase());

export const projectsByCategory = (cat: "architecture" | "interiors") =>
  projects.filter((p) => p.category.toLowerCase() === cat);
