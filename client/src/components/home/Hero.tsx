import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-16 relative h-screen max-h-[800px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-playfair font-bold text-4xl md:text-6xl mb-6 leading-tight">
                Designing Spaces <br className="hidden md:block" />
                That Inspire Living
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Creating custom architectural solutions where beauty meets functionality
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-6 text-lg h-auto">
                  Schedule a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
