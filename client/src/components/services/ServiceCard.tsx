import { motion } from "framer-motion";
import { Service } from "@/data/services";
import { fadeInUp } from "@/lib/framer-animations";
import { Check, PencilRuler, Sofa, Building2, Palmtree, Network, Leaf } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  // Function to render the correct icon based on the iconName
  const renderIcon = () => {
    switch (service.iconName) {
      case "PencilRuler":
        return <PencilRuler size={48} />;
      case "Sofa":
        return <Sofa size={48} />;
      case "Building2":
        return <Building2 size={48} />;
      case "PalmTree":
        return <Palmtree size={48} />;
      case "Network":
        return <Network size={48} />;
      case "Leaf":
        return <Leaf size={48} />;
      default:
        return <PencilRuler size={48} />;
    }
  };

  return (
    <motion.div 
      className="bg-beige rounded-lg p-8 transition-all hover:shadow-lg"
      variants={fadeInUp}
    >
      <div className="text-terracotta mb-6 flex justify-center">
        {renderIcon()}
      </div>
      <h3 className="font-playfair font-semibold text-2xl mb-4 text-center">
        {service.title}
      </h3>
      <p className="text-center text-slate">{service.description}</p>
      <ul className="mt-6 space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check size={20} className="text-terracotta mr-2 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
