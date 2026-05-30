import institutionalPool from "@/assets/institutional-pool-court.png";
import institutionalAerial from "@/assets/institutional-aerial-campus.png";
import institutionalTower from "@/assets/institutional-green-tower.png";
import institutionalPalm from "@/assets/institutional-palm-court.png";
import residentialAquarium from "@/assets/residential-living-aquarium.png";
import residentialNoir from "@/assets/residential-lounge-noir.png";
import residentialDining from "@/assets/residential-dining-light.png";
import residentialGallery from "@/assets/residential-living-gallery.png";
import residentialWarm from "@/assets/residential-lounge-warm.png";
import residentialPastel from "@/assets/residential-lounge-pastel.png";
import residentialExterior from "@/assets/residential-exterior-sunset-house.png";
import residentialStair from "@/assets/residential-stair-gallery.png";
import residentialDoubleheight from "@/assets/residential-doubleheight-lounge.png";
import residentialAtrium from "@/assets/residential-atrium-lounge.png";


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
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "residential-study-01",
    name: "Residential Study 01",
    sector: "Residential",
    location: "Mumbai, MH",
    year: "2024",
    area: "18,400 sq ft",
    scope: "Architecture · Interiors",
    category: "Architecture",
    cover: residentialGallery,
    gallery: [residentialGallery, residentialWarm, residentialDining, residentialAquarium],
    description:
      "A calm residential composition shaped through height, daylight, and a refined sequence of living, dining, and gathering spaces.",
  },
  {
    slug: "residential-study-02",
    name: "Residential Study 02",
    sector: "Residential",
    location: "Ahmedabad, GJ",
    year: "2023",
    area: "12,200 sq ft",
    scope: "Architecture",
    category: "Architecture",
    cover: residentialWarm,
    gallery: [residentialWarm, residentialGallery, residentialDining, residentialNoir],
    description:
      "A residential environment focused on warmth, material restraint, and generous shared rooms arranged for everyday life.",
  },
  {
    slug: "interior-study-01",
    name: "Interior Study 01",
    sector: "Residential",
    location: "Mumbai, MH",
    year: "2024",
    area: "9,800 sq ft",
    scope: "Interior architecture",
    category: "Interiors",
    cover: residentialAquarium,
    gallery: [residentialAquarium, residentialNoir, residentialDining, residentialGallery],
    description:
      "A layered interior language balancing sculpted ceilings, reflective surfaces, and intimate living zones with clarity.",
  },
  {
    slug: "institutional-study-01",
    name: "Institutional Study 01",
    sector: "Institutional",
    location: "Pune, MH",
    year: "2022",
    area: "2.4 acres",
    scope: "Architecture · Planning",
    category: "Architecture",
    cover: institutionalAerial,
    gallery: [institutionalAerial, institutionalPool, institutionalPalm, institutionalTower],
    description:
      "An institutional campus articulated through landscape, movement loops, and a composed relationship between built form and open ground.",
  },
  {
    slug: "institutional-study-02",
    name: "Institutional Study 02",
    sector: "Institutional",
    location: "Nashik, MH",
    year: "2024",
    area: "48,000 sq ft",
    scope: "Architecture",
    category: "Architecture",
    cover: institutionalTower,
    gallery: [institutionalTower, institutionalPalm, institutionalAerial, institutionalPool],
    description:
      "A larger institutional development where landscape, podium levels, and civic arrival create a memorable public presence.",
  },
  {
    slug: "interior-study-02",
    name: "Interior Study 02",
    sector: "Workplace",
    location: "BKC, Mumbai",
    year: "2023",
    area: "14,500 sq ft",
    scope: "Interior design",
    category: "Interiors",
    cover: residentialDining,
    gallery: [residentialDining, residentialGallery, residentialWarm, residentialNoir],
    description:
      "A lighter interior register shaped through soft neutrals, controlled daylight, and clear zones for reception, dining, and pause.",
  },
  {
    slug: "institutional-study-03",
    name: "Institutional Study 03",
    sector: "Hospitality",
    location: "Goa, IN",
    year: "2025",
    area: "62 keys",
    scope: "Architecture · Landscape",
    category: "Architecture",
    cover: institutionalPalm,
    gallery: [institutionalPalm, institutionalPool, institutionalTower, institutionalAerial],
    description:
      "A resort-like institutional environment designed around water courts, tropical planting, and a strong processional arrival.",
  },
  {
    slug: "interior-study-03",
    name: "Interior Study 03",
    sector: "Commercial",
    location: "Ahmedabad, GJ",
    year: "2024",
    area: "11,200 sq ft",
    scope: "Interior design",
    category: "Interiors",
    cover: residentialNoir,
    gallery: [residentialNoir, residentialAquarium, residentialWarm, residentialDining],
    description:
      "A mood-led interior with darker finishes, precise lighting, and a more immersive, hospitality-driven atmosphere.",
  },
];

export const projectsBySector = (sectorSlug: string) =>
  projects.filter((p) => p.sector.toLowerCase() === sectorSlug.toLowerCase());

export const projectsByCategory = (cat: "architecture" | "interiors") =>
  projects.filter((p) => p.category.toLowerCase() === cat);
