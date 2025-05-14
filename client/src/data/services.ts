export interface Service {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    title: "Architectural Design",
    description: "Complete architectural services from concept development to construction documentation, creating spaces that are both beautiful and functional.",
    iconName: "PencilRuler",
    features: [
      "Custom Home Design",
      "Remodeling & Additions",
      "Construction Documents",
      "Permit Assistance"
    ]
  },
  {
    title: "Interior Design",
    description: "Transforming interiors into personalized spaces that reflect your lifestyle and aesthetic preferences.",
    iconName: "Sofa",
    features: [
      "Space Planning",
      "Material & Finish Selection",
      "Furniture & Decor",
      "Lighting Design"
    ]
  },
  {
    title: "3D Visualization",
    description: "Photorealistic renderings that bring your project to life before construction begins, allowing for informed decision-making.",
    iconName: "Building2",
    features: [
      "Exterior Renderings",
      "Interior Visualizations",
      "Virtual Walkthroughs",
      "Material Studies"
    ]
  },
  {
    title: "Landscape Design",
    description: "Creating outdoor spaces that complement your home's architecture and provide functional living areas.",
    iconName: "PalmTree",
    features: [
      "Garden Planning",
      "Outdoor Living Spaces",
      "Hardscape Design",
      "Planting Plans"
    ]
  },
  {
    title: "Project Management",
    description: "Comprehensive oversight of your project from start to finish, ensuring quality execution and timely delivery.",
    iconName: "Network",
    features: [
      "Contractor Selection",
      "Budget Management",
      "Timeline Coordination",
      "Quality Control"
    ]
  },
  {
    title: "Sustainable Design",
    description: "Environmentally conscious design solutions that reduce energy consumption and create healthier living spaces.",
    iconName: "Leaf",
    features: [
      "Energy Efficiency",
      "Sustainable Materials",
      "Passive Design Strategies",
      "Water Conservation"
    ]
  }
];
