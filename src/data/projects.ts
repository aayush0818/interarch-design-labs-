export type Project = {
  slug: string;
  sector: string;
  location: string;
  year: string;
};

export const projects: Project[] = [
  { slug: "private-villa", sector: "Private Residence", location: "Alibaug, MH", year: "2024" },
  { slug: "boutique-retreat", sector: "Boutique Hospitality", location: "Lonavala, MH", year: "2023" },
  { slug: "brand-hq", sector: "Brand Headquarters", location: "Mumbai, MH", year: "2024" },
  { slug: "institutional-campus", sector: "Institutional Campus", location: "Pune, MH", year: "2022" },
  { slug: "industrial-park", sector: "Industrial Facility", location: "Bhiwandi, MH", year: "2021" },
  { slug: "workplace-tower", sector: "Workplace Interior", location: "BKC, Mumbai", year: "2023" },
];
