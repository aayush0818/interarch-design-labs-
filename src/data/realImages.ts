// Central library of REAL project photography (the only imagery used site-wide).
// No AI-generated images may be imported anywhere else.

// Institutional
import institutionalAerial from "@/assets/institutional-aerial-campus.png";
import institutionalPool from "@/assets/institutional-pool-court.png";
import institutionalTower from "@/assets/institutional-green-tower.png";
import institutionalPalm from "@/assets/institutional-palm-court.png";

// Residential
import residentialGallery from "@/assets/residential-living-gallery.png";
import residentialWarm from "@/assets/residential-lounge-warm.png";
import residentialDining from "@/assets/residential-dining-light.png";
import residentialAquarium from "@/assets/residential-living-aquarium.png";
import residentialNoir from "@/assets/residential-lounge-noir.png";

// Commercial
import commercialLounge from "@/assets/commercial-monster-lounge.png";
import commercialBoardroom from "@/assets/commercial-monster-boardroom.png";
import commercialCorridor from "@/assets/commercial-monster-corridor.png";
import commercialBoardroomSuite from "@/assets/commercial-boardroom-suite.png";
import commercialReception from "@/assets/commercial-reception-lobby.png";
import commercialBoutiquePanorama from "@/assets/commercial-boutique-panorama.png";
import commercialBoutiqueFloor from "@/assets/commercial-boutique-floor.png";
import commercialBoutiqueInterior from "@/assets/commercial-boutique-interior.png";
import commercialSalon from "@/assets/commercial-salon-interior.png";
import commercialTextile from "@/assets/commercial-textile-studio.png";
import commercialPilates from "@/assets/commercial-pilates-studio.png";

// Team portraits
import teamDipak from "@/assets/team-dipak-thaker.jpg";
import teamRohit from "@/assets/team-rohit-gojia.jpg";
import teamMurtaza from "@/assets/team-murtaza-rangwala.jpg";
import teamHussain from "@/assets/team-hussain-rangwala.jpg";

export const realImages = {
  institutional: {
    aerial: institutionalAerial,
    pool: institutionalPool,
    tower: institutionalTower,
    palm: institutionalPalm,
  },
  residential: {
    gallery: residentialGallery,
    warm: residentialWarm,
    dining: residentialDining,
    aquarium: residentialAquarium,
    noir: residentialNoir,
  },
  commercial: {
    lounge: commercialLounge,
    boardroom: commercialBoardroom,
    corridor: commercialCorridor,
    boardroomSuite: commercialBoardroomSuite,
    reception: commercialReception,
    boutiquePanorama: commercialBoutiquePanorama,
    boutiqueFloor: commercialBoutiqueFloor,
    boutiqueInterior: commercialBoutiqueInterior,
    salon: commercialSalon,
    textile: commercialTextile,
    pilates: commercialPilates,
  },
  team: {
    dipak: teamDipak,
    rohit: teamRohit,
    murtaza: teamMurtaza,
    hussain: teamHussain,
  },
} as const;

const { institutional, residential, commercial } = realImages;

// A curated, mixed pool of real images for galleries / strips / journals.
export const realPool = [
  institutional.aerial,
  residential.gallery,
  commercial.lounge,
  institutional.pool,
  residential.warm,
  commercial.boutiquePanorama,
  institutional.tower,
  residential.dining,
  commercial.reception,
  institutional.palm,
  residential.aquarium,
  commercial.boardroomSuite,
  residential.noir,
  commercial.salon,
];
