import { realImages, realPool } from "@/data/realImages";

const { institutional: inst, residential: res, commercial: com, team } = realImages;

const studioHero = inst.aerial;
const teamHero = res.exterior;
const studioCulture = res.stair;

const partner1 = team.dipak;
const partner2 = team.murtaza;
const partner3 = team.hussain;
const partner4 = team.rohit;

export const pageImages = {
  studioHero,
  teamHero,
  studioCulture,
  works: realPool,
};


/* =================================================================
   ABOUT / STUDIO
   ================================================================= */
export const aboutCopy = {
  eyebrow: "— About",
  headline: "A contemporary legacy in architecture and interiors.",
  intro:
    "Interarch Design Labs — a contemporary legacy in architecture and interiors, where rigorous intent meets modern refinement. Our work is founded on a simple conviction: design must answer how life is lived. We translate that conviction into buildings and interiors that are purposeful, considered, and quietly luxurious.",
  body:
    "From civic campuses to private homes, hospitality to healthcare, we create environments with the kind of clarity and care that lasts. The union brings a deliberately broad skill set — grounded in context, enriched by material sensitivity, and driven by a pragmatic elegance.",
  signoff: "Simple. Considered. Enduring. This is Interarch Design Labs.",
  legacy:
    "IDL is the union of two legacy firms — Interarch (founded in 1989 by Ar. Dipak Thaker and Ar. Murtuza Rangwala) and Kala Design (led by Ar. Hussain Rangwala and Ar. Rohit Gojia). Together, we bring forward a shared philosophy: that design should not chase trends, but serve intent. Our practice spans architecture, interiors, planning, and engineering, but our foundation is singular — a deep respect for context, craft, and collaboration.",
};

export const mission = {
  eyebrow: "— Mission",
  text:
    "To create meaningful spaces that reflect the people who live, work, and move through them — shaped with clarity, care, and a deep sense of intent.",
};

export const vision = {
  eyebrow: "— Vision",
  text:
    "To define a contemporary architectural language for India and beyond — one where design feels personal, principles remain timeless, and form emerges from purpose rather than trend.",
};

export const values = [
  { n: "01", title: "Integrity of Intent", body: "Nothing is ornamental when everything has purpose." },
  { n: "02", title: "Clarity in Craft", body: "Simplicity, precision, and detail guide every decision." },
  { n: "03", title: "Responsibility to Context", body: "Every space respects its environment — physical, cultural, and human." },
  { n: "04", title: "Designed Around You", body: "Our work is led by the lives and stories of the people we design for." },
];

export const idlStudioNarrative = {
  eyebrow: "— IDL Studio",
  headline: "For us, design is a journey — not a checklist.",
  body: [
    "Interarch Design Labs brings together over four decades of architectural and interior design experience. Born from the merger of Interarch and Kala Design, the studio blends legacy thinking with contemporary innovation.",
    "It begins with listening: to people, to context, to the story the site already carries. Ideas evolve through sketches, conversations, and collaboration. Materials are chosen not only for utility but for character and longevity. Details are refined until the design feels inevitable.",
    "And once built, our spaces don't just function — they grow, adapt, and live alongside you.",
  ],
};

export const rangeOfExperience = {
  eyebrow: "— Range of Experience",
  intro:
    "IDL's portfolio spans large-scale developments to boutique interiors — unified by cultural sensitivity, material intelligence, and responsible design.",
  partners: [
    { y: "40+", note: "years of architectural experience — Ar. Dipak Thaker" },
    { y: "30+", note: "years of interior expertise — Ar. Murtuza Rangwala" },
    { y: "—", note: "Contemporary, detail-led design sensibilities — Ar. Hussain Rangwala & Ar. Rohit Gojia" },
  ],
  fields: [
    "Residential villas, retreats, and apartments",
    "Hospitality and leisure environments",
    "Corporate workplaces and retail",
    "Institutional and public spaces",
    "Master planning and integrated developments",
  ],
};

export const recognitionList = [
  { year: "—", award: "IGBC Gold Certification", note: "For pioneering sustainable development." },
  { year: "2001", award: "A+D Spectrum Architecture Awards", note: "Excellence in Architecture." },
  { year: "2008", award: "Association of Real Estate Agents Award", note: "Architectural contribution." },
  { year: "2010", award: "Chief Minister of Maharashtra Award", note: "Babasaheb Ambedkar Bhavan." },
  { year: "2014–15", award: "AICA Asia Fest", note: "Commendation for architectural design." },
  { year: "2015", award: "Rachana Sansad Diamond Jubilee Felicitation", note: "Recognition for service to architecture." },
  { year: "25 yrs", award: "Service to DRDO, Ministry of Defence", note: "A testament to trust and long-standing partnerships." },
];

export const cultureBlocks = [
  {
    eyebrow: "— Culture & Process",
    title: "Not a hierarchy. A dialogue.",
    body:
      "IDL is built on mentorship, openness, and collaboration. Young designers learn from practice; seasoned architects stay inspired by new perspectives. We value process as much as outcomes — the sketch before the line, the question before the answer, the conversation before the decision.",
  },
  {
    eyebrow: "— Internships",
    title: "The next generation shapes the future.",
    body:
      "Our internships offer hands-on exposure to architecture, interiors, material exploration, and project processes across scales. Every intern works on live projects, guided by our team, with the experience tailored to their strengths.",
  },
  {
    eyebrow: "— Design Mentorship",
    title: "Over 100 years of combined experience.",
    body:
      "Mentorship is central to IDL. Our leadership guides young designers through real-world complexity, design thinking, and craft refinement — teaching not just technique, but values: sustainability, cultural awareness, strategic clarity.",
  },
  {
    eyebrow: "— Working at IDL",
    title: "Curiosity leads. Craft shapes the outcome.",
    body:
      "Work at IDL is a dialogue — between disciplines, generations, and perspectives. Our teams collaborate across architecture, interiors, and strategy to solve complex challenges with rigour and creativity. We value what takes time, because thoughtful design demands it.",
  },
];

/* =================================================================
   TEAM
   ================================================================= */
export const teamCopy = {
  eyebrow: "— Our Team",
  headline: "Heritage and reinvention. Independent voices, one vision.",
  intro:
    "Interarch Design Labs was formed by the convergence of Interarch and Kala Design. Today it is led by four partners whose combined experience spans decades and disciplines. Together with a growing studio across Mumbai and Ahmedabad, we deliver architecture, interiors, master planning and spatial strategy to clients in India, the Middle East and Africa.",
  collective:
    "Supported by a multidisciplinary team of architects, interior designers, visualisers, project managers and delivery specialists.",
};

export const partners = [
  {
    name: "Dipak Thaker",
    role: "Director · IDL",
    image: partner1,
    years: "30+ years",
    line: "Structure, process, and buildability held together with long-view precision.",
    bio:
      "Dipak Thaker brings over three decades of experience in architecture and interior design, having led projects across residential, commercial, institutional, and industrial sectors. His work is defined by strong planning logic, technical depth, and execution precision, particularly on largescale and complex developments. Dipak has been instrumental in shaping projects from concept to completion, ensuring design intent is carried through every stage of construction. At IDL, he anchors the practice with structure, process, and a deep understanding of buildability.",
  },
  {
    name: "Murtaza Rangwala",
    role: "Director · IDL",
    image: partner2,
    years: "Decades of experience",
    line: "Calm leadership, operational rigour, and dependable delivery across every stage.",
    bio:
      "Murtaza Rangwala has spent decades building a practice rooted in consistency, discipline, and long-term client trust. His experience spans a wide range of architectural and interior projects, where he has played a critical role in project coordination, detailing, and on-site execution. Known for his calm leadership and hands-on involvement, Murtaza ensures that every project is delivered with clarity and control. At IDL, he strengthens the firms foundation through operational rigor and dependable project delivery.",
  },
  {
    name: "Hussain Rangwala",
    role: "Director · IDL",
    image: partner3,
    years: "Contemporary practice",
    line: "A modern design voice shaped by proportion, context, and spatial clarity.",
    bio:
      "Hussain Rangwala represents a contemporary design voice shaped by strong architectural fundamentals and evolving spatial sensibilities. His work focuses on residential and commercial projects where context, proportion, and detailing define the outcome. Hussain brings a refined approach to layouts, material selection, and spatial flow, ensuring each project feels both thoughtful and relevant. At IDL, he contributes design direction that bridges legacy expertise with modern architectural expression.",
  },
  {
    name: "Rohit Gojia",
    role: "Director · IDL",
    image: partner4,
    years: "Interior-focused leadership",
    line: "Modern living translated into clear, material-led interior narratives.",
    bio:
      "Rohit Gojia is driven by a strong understanding of modern living and interior environments. His work spans residential and interior-focused projects, with a sharp eye for materials, finishes, and user experience. Known for translating client aspirations into clear design narratives, Rohit brings creativity grounded in practicality. At IDL, he adds a contemporary interior perspective, shaping spaces that are functional, expressive, and deeply liveable.",
  },
];

/* =================================================================
   EXPERTISE / SECTORS
   ================================================================= */
export const sectors = [
  {
    slug: "residential",
    name: "Residential",
    image: res.exterior,
    gallery: [res.exterior, res.stair, res.doubleheight, res.atrium, res.pastel, res.gallery, res.warm],
    short: "Apartments, bungalows and villas — composed around light, view, and movement.",
    statement:
      "Homes that prioritise daylight, proportion and an intuitive flow. Every decision — from plan to finish — supports daily life with calm precision.",
    sub: [
      {
        title: "Apartments",
        image: res.pastel,
        body:
          "Homes that prioritise daylight, proportion and an intuitive flow. Every decision — from plan to finish — supports daily life with calm precision.",
      },
      {
        title: "Bungalows & Villas",
        image: res.exterior,
        body:
          "Independent houses conceived for privacy, openness and a seamless connection to the outdoors. The architecture is composed around light, view and movement.",
      },
    ],

  },
  {
    slug: "commercial",
    name: "Commercial Interiors",
    image: com.lounge,
    gallery: [com.lounge, com.boardroom, com.corridor, com.boutiquePanorama, com.salon, com.textile],
    short: "Workplaces and retail that translate brand identity into spatial performance.",
    statement:
      "Workplaces and retail environments that translate brand identity into spatial performance. Our interiors support productivity, culture and adaptability — designed for now and future growth.",
  },
  {
    slug: "institutional",
    name: "Institutional",
    image: inst.aerial,
    gallery: [inst.aerial, inst.pool, inst.tower, inst.palm],
    short: "Civic buildings designed for long life, accessibility and quiet presence.",
    statement:
      "Buildings that serve public life with clarity and durability. We design institutional projects for long-term performance, with efficiency, accessibility and civic presence as guiding principles.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    image: inst.palm,
    gallery: [inst.palm, inst.pool, com.reception, com.boutiqueInterior],
    short: "Hotels and retreats choreographed through warmth, sequence and view.",
    statement:
      "Bespoke hospitality interiors that elevate lifestyle — choreographed through warmth, sequence, tactility and view. Arrival, pause and aftertaste, shaped as a single architectural experience.",
  },
  {
    slug: "industrial",
    name: "Master Planning",
    image: inst.aerial,
    gallery: [inst.aerial, inst.tower, inst.palm],
    short: "Integrated planning that brings coherence to large-scale developments.",
    statement:
      "Integrated planning solutions that bring coherence and clarity to large-scale developments — campuses, mixed-use neighbourhoods and institutional grounds composed for long, useful life.",
  },
  {
    slug: "workplace",
    name: "Sustainability",
    image: inst.tower,
    gallery: [inst.tower, res.dining, inst.pool],
    short: "Passive, daylit, long-life buildings — IGBC Gold among our certifications.",
    statement:
      "For us, sustainability is a form of respect — for land, material and time. A building is truly sustainable when it adapts, ages well, and remains meaningful for decades. We combine traditional wisdom with modern engineering to create spaces that breathe with their surroundings rather than resist them.",
    bullets: [
      "Passive design strategies for climate responsiveness.",
      "Use of natural light and ventilation.",
      "Conscious material selection for longevity.",
      "Energy-efficient systems and green building practices.",
      "IGBC Gold Certification for one of our projects — proof of our commitment to responsible design.",
    ],
  },
];

/* =================================================================
   HISTORY / TIMELINE
   ================================================================= */
export const milestones = [
  {
    year: "1989",
    title: "Interarch is founded",
    image: inst.aerial,
    text:
      "Founded by architect Dipak Thaker, Interarch (with its twin firm DID Consultants) was established with the guiding principle of \"modern architecture drawn from traditional guidelines.\" The practice began with a vision to blend innovation, technology, and timeless design sensibilities.",
  },
  {
    year: "2001",
    title: "A+D Spectrum Architecture Awards",
    image: res.gallery,
    text:
      "Recognition came early when IDL participated in the A+D & Spectrum Paints Architecture Awards, with the jury praising the firm's creative approach and contribution to the contemporary design dialogue.",
  },
  {
    year: "2008",
    title: "AREA Acknowledgement",
    image: com.lounge,
    text:
      "IDL's growing reputation extended beyond architecture to its collaborative work with the real estate sector. The Association of Real Estate Agents (AREA) acknowledged the firm's support and commitment during their 3rd Real Estate Conference.",
  },
  {
    year: "2009",
    title: "DRDO Silver Jubilee Honour",
    image: inst.tower,
    text:
      "Marking a strong institutional partnership, IDL was honoured by the Defence Research & Development Organisation (DRDO) during its Silver Jubilee celebrations, recognising the firm's role in supporting key projects.",
  },
  {
    year: "2010",
    title: "Civic Recognition",
    image: inst.pool,
    text:
      "A proud cultural and civic recognition was received for contributions to architecture and the built environment, felicitated by government and civic leaders for design impact on Babasaheb Ambedkar Bhavan and other public works.",
  },
  {
    year: "2014–15",
    title: "AICA Asia Fest Commendation",
    image: res.warm,
    text:
      "At the Artists in Concrete Awards (AICA), Asia Fest, IDL's work on large-scale institutional projects — including the Educational Big and Medical Academy — received a Commendation Award, endorsed by an international panel of architects and designers.",
  },
  {
    year: "2015",
    title: "Rachana Sansad Diamond Jubilee",
    image: com.reception,
    text:
      "The Academy of Architecture, Rachana Sansad (Mumbai), felicitated Ar. Dipak Thaker during their Diamond Jubilee celebrations, recognising his significant contributions to the profession and his role as an inspiring alumnus.",
  },
  {
    year: "Today",
    title: "Interarch Design Labs",
    image: inst.palm,
    text:
      "With over three decades of practice, IDL has grown into a multidisciplinary studio delivering across architecture, interiors, engineering and master planning. From bungalows and corporate campuses to large institutional projects, the firm continues to uphold its founding philosophy — innovative design rooted in tradition, delivered with sensitivity to clients and context.",
  },
];

/* =================================================================
   PROCESS
   ================================================================= */
export const processPhases = [
  {
    n: "01",
    title: "Listening First",
    body:
      "Every project begins with listening — to people, to context, to the story the site already carries. We work to understand aspirations, constraints and the quiet habits drawings often miss.",
  },
  {
    n: "02",
    title: "Concept & Strategy",
    body:
      "Ideas are sketched and tested until the project finds its order. Climate, culture, craft and approval pathways inform a clear strategic direction rooted in clarity and intent.",
  },
  {
    n: "03",
    title: "Design Development",
    body:
      "Concepts come to life through proportion, materiality and detail. Drawings, schedules, mockups and consultant input bring rigour to every decision.",
  },
  {
    n: "04",
    title: "Execution",
    body:
      "We coordinate with engineers, consultants and craftspeople to deliver seamlessly. Site review protects intent as decisions become permanent.",
  },
  {
    n: "05",
    title: "Beyond Delivery",
    body:
      "A building is sustainable when it adapts and ages well. We stay involved so spaces continue to grow, adapt and live alongside you.",
  },
];

/* =================================================================
   DESIGN APPROACH
   ================================================================= */
export const designApproach = [
  { title: "Clarity", body: "Clarity is not minimalism — it is intention. Removing what doesn't matter so the essential can define the space. This is how we create environments that feel calm, intuitive, and timeless." },
  { title: "Intent", body: "Good design is deliberate. Every material, proportion, and gesture exists for a reason — shaped by how people will live, move, and experience the space." },
  { title: "People & Place", body: "We start with listening — to the site, the client, and the cultural pulse of a place. Architecture, for us, is not imposed but uncovered through conversation and context." },
  { title: "Sustainability", body: "We don't chase trends. We design for longevity — combining traditional wisdom with modern engineering to create spaces that breathe with their surroundings rather than resist them." },
  { title: "Craft & Collaboration", body: "Design at IDL is a collective act. Four partners, one team, many hands — united by curiosity and respect for material craft. We embrace authenticity — the grain of wood, the honesty of joinery, the human mark of craft." },
];

/* =================================================================
   CONTACT
   ================================================================= */
export const contactCopy = {
  eyebrow: "— Contact",
  headline: "Wherever you are, we design for you.",
  subline:
    "With projects across India and around the world, we'd love to shape your next space with care, clarity, and intent.",
  studios: [
    { city: "Mumbai", address: "Interarch Design Labs\nMumbai, Maharashtra, India" },
    { city: "Ahmedabad", address: "Interarch Design Labs\nAhmedabad, Gujarat, India" },
  ],
  email: "hello@interarchlabs.com",
  regions: "Projects across India, the Middle East & Africa.",
};

/* =================================================================
   JOURNAL
   ================================================================= */
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
