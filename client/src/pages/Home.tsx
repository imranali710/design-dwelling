import { Helmet } from "react-helmet";
import Hero from "@/components/home/Hero";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { ArrowRight, Check, PencilRuler, Sofa, Building2, Palmtree, Network, Leaf } from "lucide-react";

const Home = () => {
  // Take only a subset of services and portfolio items for the home page
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = portfolioData.slice(0, 3);
  
  // Function to render the correct icon based on the iconName
  const renderIcon = (iconName: string) => {
    switch (iconName) {
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
    <>
      <Helmet>
        <title>ModernHaus Design | Premium House Design Services</title>
        <meta name="description" content="ModernHaus Design offers premium architectural and interior design services for modern homes. Schedule a consultation today." />
      </Helmet>

      <Hero />

      {/* About Section Preview */}
      <motion.section 
        className="py-20 bg-beige"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="font-playfair font-bold text-4xl mb-6">About ModernHaus</h2>
              <div className="w-20 h-1 bg-terracotta mb-6"></div>
              <p className="mb-6 text-lg">
                Founded in 2010, ModernHaus Design began with a simple vision: creating 
                spaces that transform how people live. What started as a small studio 
                has grown into a full-service design firm specializing in modern residential 
                architecture.
              </p>
              <div className="flex space-x-6 mb-8">
                <div className="text-center">
                  <p className="font-playfair font-bold text-4xl text-terracotta">12+</p>
                  <p className="text-slate">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-playfair font-bold text-4xl text-terracotta">200+</p>
                  <p className="text-slate">Projects Completed</p>
                </div>
              </div>
              <Link href="/about">
                <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              variants={fadeIn("left")} 
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern home designed by ModernHaus" 
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section Preview */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-playfair font-bold text-4xl mb-4">Our Services</motion.h2>
            <motion.div variants={fadeInUp} className="w-20 h-1 bg-terracotta mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="max-w-3xl mx-auto text-lg text-slate">
              We offer comprehensive design services tailored to bring your vision to life, 
              from initial concept to final implementation.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-10 mb-12"
            variants={staggerContainer}
          >
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-beige rounded-lg p-8 transition-all hover:shadow-lg"
              >
                <div className="text-terracotta mb-6 flex justify-center">
                  {renderIcon(service.iconName)}
                </div>
                <h3 className="font-playfair font-semibold text-2xl mb-4 text-center">{service.title}</h3>
                <p className="text-center text-slate">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check size={20} className="text-terracotta mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Preview */}
      <motion.section 
        className="py-20 bg-beige"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-playfair font-bold text-4xl mb-4">Featured Projects</motion.h2>
            <motion.div variants={fadeInUp} className="w-20 h-1 bg-terracotta mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="max-w-3xl mx-auto text-lg text-slate">
              Explore a selection of our recent works showcasing our design philosophy and 
              commitment to excellence.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
          >
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-all hover:scale-105 duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-playfair font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-slate">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate rounded-lg p-12 text-center">
            <h2 className="font-playfair font-bold text-3xl mb-6 text-white">Ready to Transform Your Space?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Get in touch with our team to schedule a consultation and discuss your project needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-6 text-lg h-auto">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
