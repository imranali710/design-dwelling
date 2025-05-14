export interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Sarah Johnson",
    title: "Principal Architect & Founder",
    description: "With over 15 years of experience, Sarah leads our design vision and oversees all major projects.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Michael Chen",
    title: "Interior Design Director",
    description: "Michael transforms architectural spaces into functional, beautiful interiors that reflect each client's personality.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Emma Rodriguez",
    title: "Project Manager",
    description: "Emma ensures all our projects run smoothly, from initial concept to final delivery.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "James Wilson",
    title: "3D Visualization Specialist",
    description: "James creates photorealistic renderings that help clients visualize their future homes before construction begins.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];
