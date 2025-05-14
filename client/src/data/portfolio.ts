export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  largeImage?: string;
  details?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    title: "Lakeside Retreat",
    description: "A modern waterfront home designed to maximize views while providing private spaces for family living.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This 4,500 sq ft residence features floor-to-ceiling windows, a cantilevered deck, and a minimalist interior palette that complements the natural surroundings."
  },
  {
    title: "Urban Loft Interior",
    description: "Interior renovation of a downtown loft featuring open spaces and custom built-ins.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This 1,800 sq ft loft transformation preserved original industrial elements while introducing contemporary finishes and multi-functional furniture solutions."
  },
  {
    title: "Minimalist Kitchen",
    description: "A clean, functional kitchen design incorporating natural materials and high-end appliances.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This kitchen remodel features custom walnut cabinetry, Carrara marble countertops, and a carefully planned workflow that makes cooking and entertaining a joy."
  },
  {
    title: "Eco-Friendly Residence",
    description: "Sustainable home featuring passive solar design, green roof, and energy-efficient systems.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This LEED Platinum certified home reduces energy consumption by 70% compared to conventional construction through thoughtful orientation, high-performance insulation, and renewable energy systems."
  },
  {
    title: "Luxury Master Bath",
    description: "Spa-inspired bathroom renovation featuring custom tilework and high-end fixtures.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This bathroom transformation features a freestanding soaking tub, zero-entry shower, heated floors, and a custom double vanity crafted from reclaimed wood."
  },
  {
    title: "Hillside Modern Concept",
    description: "Architectural visualization for a custom residence designed to integrate with a challenging sloped site.",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This conceptual design uses a multi-level approach that follows the natural contours of the site, with expansive glazing to capture panoramic valley views."
  },
  {
    title: "Contemporary Farmhouse",
    description: "A modern take on the traditional farmhouse, blending rustic elements with clean contemporary design.",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This family home combines traditional gabled forms with modern materials, featuring an open floor plan, double-height living spaces, and a seamless indoor-outdoor connection."
  },
  {
    title: "Midcentury Renovation",
    description: "Sensitive restoration and updating of a 1960s midcentury modern home, preserving its architectural integrity.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This careful renovation maintained the home's distinctive post and beam structure and characteristic large windows while updating systems, finishes, and the kitchen to meet contemporary needs."
  },
  {
    title: "Urban Courtyard",
    description: "A compact outdoor oasis designed for a city townhouse, maximizing a small footprint with thoughtful landscaping.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    largeImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    details: "This 300 sq ft courtyard incorporates vertical gardens, built-in seating, a water feature, and carefully selected plantings to create a sense of lush tranquility in the heart of the city."
  }
];
