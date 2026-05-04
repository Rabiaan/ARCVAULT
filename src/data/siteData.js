export const siteConfig = {
  company: "ARCVAULT",
  tagline: "Building the Future, Stone by Stone",
  subtagline: "Premier construction & engineering excellence since 2006",
  email: "contact@arcvault.com",
  phone: "+1 (800) 292-0044",
  address: "One Construction Plaza, New York, NY 10001",
  social: { instagram: "#", linkedin: "#", twitter: "#" },
};

export const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export const heroStats = [
  { value: "250+", label: "Projects Completed" },
  { value: "18",   label: "Years of Experience" },
  { value: "40+",  label: "Expert Engineers" },
  { value: "12",   label: "Countries Operated" },
];

export const services = [
  { id: 1, icon: "Pickaxe", title: "Structural Engineering",   description: "From foundations to superstructures, we engineer buildings that endure generations with precision and integrity." },
  { id: 2, icon: "Building2", title: "Commercial Development",  description: "Transforming urban landscapes with landmark commercial spaces that redefine skylines and serve communities." },
  { id: 3, icon: "Home", title: "Residential Construction", description: "Crafting bespoke homes and residential complexes where every detail reflects uncompromising quality." },
  { id: 4, icon: "Factory", title: "Industrial Infrastructure", description: "Heavy-duty industrial builds engineered for peak operational efficiency and long-term durability." },
  { id: 5, icon: "Leaf", title: "Sustainable Design",        description: "LEED-certified green building solutions that reduce environmental impact without sacrificing performance." },
  { id: 6, icon: "Wrench", title: "Renovation & Restoration",  description: "Breathing new life into existing structures with expert renovation, restoration, and adaptive reuse." },
];

export const projects = [
  { 
    id: 1, 
    title: "Meridian Tower", 
    category: "Commercial", 
    location: "New York, USA", 
    year: "2023", 
    image: "/images/Meridian Tower.png", 
    size: "large",
    description: "A glass-clad masterpiece redefining the New York skyline with its innovative structural core and sustainable energy systems."
  },
  { 
    id: 2, 
    title: "Harborview Residences", 
    category: "Residential", 
    location: "Dubai, UAE", 
    year: "2023", 
    image: "/images/Harborview Luxury residential.png", 
    size: "small",
    description: "Ultra-luxury waterfront living featuring cantilevered terraces and panoramic views of the Arabian Gulf."
  },
  { 
    id: 3, 
    title: "Nexus Industrial Park", 
    category: "Industrial", 
    location: "Frankfurt, Germany", 
    year: "2022", 
    image: "/images/Nexus Industrial Sleek.png", 
    size: "small",
    description: "Next-generation logistics hub integrating AI-driven automation and modular architectural components."
  },
  { 
    id: 4, 
    title: "The Crescent Bridge", 
    category: "Infrastructure", 
    location: "Singapore", 
    year: "2022", 
    image: "/images/Crescent Bridge.png", 
    size: "large",
    description: "An engineering marvel connecting key districts with a unique curved suspension system and integrated public spaces."
  },
  { 
    id: 5, 
    title: "Lumina Cultural Center", 
    category: "Public", 
    location: "London, UK", 
    year: "2021", 
    image: "/images/Lumina Center.png", 
    size: "small",
    description: "A vibrant hub for the arts featuring dynamic acoustic spaces and a translucent facade that glows at night."
  },
  { 
    id: 6, 
    title: "GreenAxis Campus", 
    category: "Sustainable", 
    location: "Amsterdam, NL", 
    year: "2021", 
    image: "/images/GreenAxis Campus.png", 
    size: "small",
    description: "The pinnacle of green building technology, achieving net-zero status through geothermal and solar integration."
  },
];

export const team = [
  { id: 1, name: "Marcus Ellison",  role: "Chief Executive Officer",  image: null },
  { id: 2, name: "Layla Hassan",    role: "Head of Engineering",      image: null },
  { id: 3, name: "James Whitfield", role: "Lead Architect",           image: null },
  { id: 4, name: "Sofia Reyes",     role: "Sustainability Director",  image: null },
];

export const testimonials = [
  { id: 1, quote: "ARCVAULT delivered our 40-story tower six weeks ahead of schedule. Their precision and professionalism are unmatched in the industry.", author: "Richard Crane",  company: "Crane Capital Group",   location: "New York" },
  { id: 2, quote: "From groundbreaking to handover, every phase was handled with exceptional care. The Harborview project exceeded every benchmark we set.", author: "Amira Al-Farsi", company: "Emaar Developments",    location: "Dubai" },
  { id: 3, quote: "Their sustainable design approach saved us 28% in energy costs year one. ARCVAULT is the future of responsible construction.", author: "Hans Müller",    company: "GreenAxis AG",           location: "Amsterdam" },
  { id: 4, quote: "We've worked with three major contractors globally. ARCVAULT's quality control and communication stood in a league of their own.", author: "Priya Nair",     company: "Nexus Infrastructure",   location: "Singapore" },
];

export const aboutContent = {
  heading: "Built on Integrity, Engineered for Eternity",
  body: [
    "Founded in 2006, ARCVAULT has grown from a regional contractor to a globally recognized construction powerhouse. We operate across four continents, delivering landmark projects that reshape skylines and serve communities for generations.",
    "Our approach combines rigorous engineering standards with a relentless focus on craftsmanship. Every structure we build carries our legacy — not just in concrete and steel, but in the trust placed in us by our clients, communities, and partners.",
  ],
  image: "/images/about_main.png",
  milestones: [
    { year: "2006", event: "Founded in New York" },
    { year: "2011", event: "First international project — Dubai" },
    { year: "2016", event: "LEED Platinum certification achieved" },
    { year: "2023", event: "250th project milestone" },
  ],
};

export const scrollFrames = {
  basePath:         "/frames/",
  prefix:           "ezgif-frame-",
  extension:        ".jpg",
  totalFrames:      182,
  scrollMultiplier: 5,
};
