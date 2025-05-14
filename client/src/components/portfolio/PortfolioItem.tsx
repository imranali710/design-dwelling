import { motion } from "framer-motion";
import { PortfolioItem as PortfolioItemType } from "@/data/portfolio";
import { fadeInUp } from "@/lib/framer-animations";

interface PortfolioItemProps {
  item: PortfolioItemType;
  onClick: () => void;
}

const PortfolioItem = ({ item, onClick }: PortfolioItemProps) => {
  return (
    <motion.div
      className="cursor-pointer rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
      onClick={onClick}
      variants={fadeInUp}
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover transition-all hover:scale-105 duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="font-playfair font-semibold text-xl mb-2">{item.title}</h3>
        <p className="text-slate">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
