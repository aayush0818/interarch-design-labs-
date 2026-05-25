export type Project = {
  slug: string;
  name: string;
  sector: string;
  location: string;
  year: string;
  area: string;
  category: "Architecture" | "Interiors";
  description: string;
};

export const projects: Project[] = [
  { slug: "private-villa", name: "Courtyard House", sector: "Residential", location: "Alibaug, MH", year: "2024", area: "18,400 sq ft", category: "Architecture", description: "A private residence arranged around shaded courts, deep verandahs and quiet thresholds. The house uses proportion, daylight and material restraint to create a rhythm of privacy and openness." },
  { slug: "boutique-retreat", name: "Hill Retreat", sector: "Hospitality", location: "Lonavala, MH", year: "2023", area: "42 keys", category: "Interiors", description: "A boutique retreat where arrival, pause and view are choreographed through warm stone, timber and filtered light. The project balances intimacy with the practical demands of hospitality." },
  { slug: "brand-hq", name: "Brand House", sector: "Commercial", location: "Mumbai, MH", year: "2024", area: "36,000 sq ft", category: "Interiors", description: "A headquarters designed as a sequence of precise working rooms, client salons and collaborative tables. The interior translates brand discipline into calm, daily performance." },
  { slug: "institutional-campus", name: "Learning Court", sector: "Institutional", location: "Pune, MH", year: "2022", area: "2.4 acres", category: "Architecture", description: "A civic campus shaped by durable edges, shaded movement and shared courtyards. Each building is planned for long life, ease of use and a clear institutional presence." },
  { slug: "industrial-park", name: "Assembly Works", sector: "Industrial", location: "Bhiwandi, MH", year: "2021", area: "86,000 sq ft", category: "Architecture", description: "A functional facility treated with architectural rigour: efficient bays, carefully controlled light and a robust material language that gives performance a measured presence." },
  { slug: "workplace-tower", name: "BKC Workplace", sector: "Workplace", location: "BKC, Mumbai", year: "2023", area: "52,000 sq ft", category: "Interiors", description: "A workplace interior organised for focus, exchange and hospitality. The plan supports different modes of work while maintaining a coherent spatial identity." },
];
