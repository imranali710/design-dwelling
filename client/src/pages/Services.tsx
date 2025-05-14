import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ServiceCard from "@/components/services/ServiceCard";
import { servicesData } from "@/data/services";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | ModernHaus Design</title>
        <meta name="description" content="Explore our comprehensive design services including architectural design, interior design, 3D visualization, and more." />
      </Helmet>

      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4">Our Services</h1>
            <div className="w-20 h-1 bg-terracotta mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-slate">
              We offer comprehensive design services tailored to bring your vision to life, 
              from initial concept to final implementation.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-playfair font-semibold text-3xl mb-6">Our Process</h2>
              <p className="mb-6 text-lg">
                Our design process is collaborative and transparent. We work closely with you at every 
                step to ensure your vision is realized, while keeping you informed and involved throughout 
                the journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-1">Initial Consultation</h3>
                    <p className="text-slate">We begin with a comprehensive discussion about your project, understanding your needs, preferences, and budget.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-1">Concept Development</h3>
                    <p className="text-slate">Our team creates preliminary designs based on our consultation, presenting you with options and refining based on your feedback.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-1">Detailed Design</h3>
                    <p className="text-slate">Once the concept is approved, we develop detailed plans, including technical drawings, material selections, and 3D visualizations.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl mb-1">Implementation</h3>
                    <p className="text-slate">We coordinate with contractors and suppliers, overseeing the execution of the design to ensure quality and adherence to plans.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-playfair font-semibold text-2xl mb-6 text-center">Request a Consultation</h3>
              <p className="text-center mb-6">
                Ready to start your project? Contact us to schedule a consultation with our design team.
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button className="bg-terracotta hover:bg-terracotta/90 text-white px-6 py-2">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
