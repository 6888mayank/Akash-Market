export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  buyerTypes: string[];
  channels: string[];
  image: string;
  keyProducts: string[];
  expansionApproach: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    tagline: "Industrial equipment, precision components & raw materials",
    description:
      "Connecting specialized equipment manufacturers and component suppliers with Tier-1 industrial buyers, procurement managers, and plant operations across major manufacturing corridors.",
    buyerTypes: ["OEM Manufacturers", "Industrial Distributors", "Plant Procurement", "Government Contractors"],
    channels: ["Direct Contract Sourcing", "Industrial Supply Hubs", "Distributor Consignment"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Machinery parts", "Electrical panels", "Industrial tooling", "Fasteners & hardware", "Valves & pumps"],
    expansionApproach: "Technical product audits paired with RFP and direct vendor listing into vetted factory supply chains.",
  },
  {
    id: "construction",
    name: "Construction & Building Materials",
    tagline: "Commercial infrastructure, architectural fittings & bulk supplies",
    description:
      "Building strategic distribution for cementitious products, architectural finishes, steel components, and high-performance building supplies with contractors, builders, and regional dealer networks.",
    buyerTypes: ["EPC Contractors", "Real Estate Developers", "Regional Material Stockists", "Project Architects"],
    channels: ["Project Bulk Supply", "Tier-2/3 Dealer Networks", "Authorized Depot Distribution"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Tiles & ceramics", "Modular wiring", "Sanitaryware", "Structural fixings", "Waterproofing chemicals"],
    expansionApproach: "Sampling pipelines to architectural specification desks and credit-vetted dealer appointment across emerging real estate clusters.",
  },
  {
    id: "fashion",
    name: "Fashion & Apparel",
    tagline: "Garments, textiles, footwear & contract stitching",
    description:
      "Bridging apparel mills, garment creators, and footwear manufacturers with multi-brand retail outlets, regional department store buyers, and large institutional uniform buyers.",
    buyerTypes: ["MBO Retail Chains", "Regional Wholesalers", "Corporate Uniform Buyers", "E-commerce Aggregators"],
    channels: ["Wholesale Textile Markets", "Consignment Showrooms", "Institutional Supply"],
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Menswear & knitwear", "Ethnic wear", "Safety & workwear uniforms", "Footwear & accessories"],
    expansionApproach: "Lookbook curation, seasonal sampling cycles, and onboarding into verified wholesale trading networks.",
  },
  {
    id: "electronics",
    name: "Electronics & Accessories",
    tagline: "Consumer tech, power solutions & mobile hardware",
    description:
      "Accelerating sales cycles for electronics manufacturers, power storage brands, and consumer tech accessories through certified regional IT distributors and electronic retail chains.",
    buyerTypes: ["Regional Tech Wholesalers", "Consumer Electronics Retailers", "Enterprise IT Buyers"],
    channels: ["Electronics Market Hubs", "Modern Retail Format", "Bulk Corporate Gifting"],
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Power banks & adapters", "Audio devices", "Smart home sensors", "Cables & harnesses", "LED illumination"],
    expansionApproach: "Distributor margin modeling, warranty service coordination, and shelf-placement in key commercial tech centers.",
  },
  {
    id: "home-lifestyle",
    name: "Home & Lifestyle",
    tagline: "Furnishings, decor, kitchenware & modular living",
    description:
      "Securing floor placement and distributor agreements for home improvement, cookware, and decorative lifestyle manufacturers across independent retail stores and hospitality buyers.",
    buyerTypes: ["Interior Decor Stores", "Hospitality Procurement", "Furniture Wholesalers", "Gift Distributors"],
    channels: ["Regional Home Showrooms", "Institutional Hotel Supplies", "Modern Lifestyle Outlets"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Stainless cookware", "Home textiles", "Storage organizers", "Modular fixtures", "Artisan crafts"],
    expansionApproach: "High-impact catalog presentations, merchant margin structures, and distributor clustering by city tiers.",
  },
  {
    id: "food",
    name: "Food & Consumer Goods",
    tagline: "Packaged foods, FMCG, staples & specialty beverages",
    description:
      "Driving market penetration for packaged food creators, snacks, condiments, and beverage manufacturers into regional super stockists, FMCG distributors, and modern retail chains.",
    buyerTypes: ["FMCG Super Stockists", "Modern Trade Chains", "HoReCa Wholesalers", "Caterers & Institutions"],
    channels: ["Direct Store Delivery (DSD)", "Regional FMCG Hubs", "Supermarket Placement"],
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Packaged snacks", "Cold-pressed oils", "Spice blends & sauces", "Specialty beverages", "Health supplements"],
    expansionApproach: "Shelf-life and packaging review, super-stockist margin alignment, and beat-planning for local trade reach.",
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    tagline: "Cosmetics, skincare, hygiene & wellness formulations",
    description:
      "Introducing personal care formulators and hygiene product makers to pharmacy distributors, cosmetic specialty stores, salon chains, and wholesale wellness networks.",
    buyerTypes: ["Cosmetic Stockists", "Pharmacy & Chemist Networks", "Salon & Spa Groups", "Modern Retail Buyers"],
    channels: ["Pharmacy Wholesale", "Beauty Counter Consignment", "Regional Wellness Distribution"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Ayurvedic skincare", "Hygiene essentials", "Professional salon supplies", "Fragrances & body care"],
    expansionApproach: "Regulatory compliance check, tester unit distribution programs, and exclusive regional territorial dealership allocations.",
  },
  {
    id: "agriculture",
    name: "Agriculture & Allied Products",
    tagline: "Agri inputs, irrigation equipment & post-harvest tools",
    description:
      "Developing grassroots and wholesale commercial channels for fertilizer makers, irrigation system manufacturers, agro-textiles, and post-harvest handling machinery.",
    buyerTypes: ["Agri-Input Dealers", "Farmer Producer Collectives (FPOs)", "Cooperative Societies", "Commercial Plantations"],
    channels: ["Rural Dealer Networks", "Agri Mandi Outlets", "State Level Distributors"],
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Micro-irrigation kits", "Organic soil conditioners", "Greenhouse netting", "Storage silos & harvesters"],
    expansionApproach: "Field demonstration programs, seasonal credit cycles, and tie-ups with district agricultural dealer associations.",
  },
  {
    id: "office-supplies",
    name: "Office & Commercial Supplies",
    tagline: "Corporate stationary, facility consumables & ergonomic furniture",
    description:
      "Connecting office equipment, stationary, and facility management suppliers with enterprise corporate admin teams, co-working operators, and institutional procurement desks.",
    buyerTypes: ["Corporate Facilities Heads", "Office Supply Dealers", "Educational Institutions", "Co-working Operators"],
    channels: ["Annual Maintenance & Rate Contracts", "Commercial Stationery Wholesalers", "Direct Corporate Accounts"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    keyProducts: ["Ergonomic seating", "Eco-friendly stationery", "Cleaning & sanitation consumables", "Document management gear"],
    expansionApproach: "Direct vendor portal registration, annual rate contract (ARC) pitches, and consolidated multi-location billing systems.",
  },
];
