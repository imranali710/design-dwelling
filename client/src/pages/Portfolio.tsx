import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import PortfolioItem from "@/components/portfolio/PortfolioItem";
import ImageLightbox from "@/components/portfolio/ImageLightbox";
import { portfolioData, PortfolioItem as PortfolioItemType } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (item: PortfolioItemType) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | ModernHaus Design</title>
        <meta name="description" content="Explore our portfolio of modern architectural and interior design projects, showcasing our design philosophy and commitment to excellence." />
      </Helmet>

      <section className="pt-32 pb-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4">Our Portfolio</h1>
            <div className="w-20 h-1 bg-terracotta mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-slate">
              Explore our collection of recent projects showcasing our design philosophy and 
              commitment to excellence.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {portfolioData.map((item, index) => (
              <PortfolioItem 
                key={index} 
                item={item} 
                onClick={() => openLightbox(item)} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ImageLightbox 
        isOpen={lightboxOpen} 
        item={selectedItem} 
        onClose={closeLightbox} 
      />
    </>
  );
};

export default Portfolio;
