import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import TeamSection from "@/components/about/TeamSection";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/framer-animations";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | ModernHaus Design</title>
        <meta name="description" content="Learn about ModernHaus Design, our history, vision, and talented team of architects and designers." />
      </Helmet>

      <section className="pt-32 pb-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4">About Us</h1>
            <div className="w-20 h-1 bg-terracotta mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-playfair font-semibold text-3xl mb-6">Our Story</h2>
              <p className="mb-4 text-lg">
                Founded in 2010, ModernHaus Design began with a simple vision: creating spaces that transform 
                how people live. What started as a small studio has grown into a full-service design firm 
                specializing in modern residential architecture.
              </p>
              <p className="mb-4 text-lg">
                Our team combines innovative design thinking with practical solutions to create homes 
                that are both beautiful and functional. We believe that good design should be accessible 
                to everyone and that every space has the potential to inspire.
              </p>
              <p className="mb-6 text-lg">
                With over a decade of experience and countless successful projects, we've built a reputation 
                for excellence, attention to detail, and client satisfaction. Our collaborative approach 
                ensures that each project reflects the unique personality and needs of our clients.
              </p>
              <div className="flex flex-wrap gap-8 justify-between">
                <div className="text-center">
                  <p className="font-playfair font-bold text-4xl text-terracotta">12+</p>
                  <p className="text-slate">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-playfair font-bold text-4xl text-terracotta">200+</p>
                  <p className="text-slate">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="font-playfair font-bold text-4xl text-terracotta">15</p>
                  <p className="text-slate">Design Awards</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left")}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern interior designed by ModernHaus" 
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
          
          <TeamSection />
          
          <motion.div 
            className="mt-24 bg-white p-12 rounded-lg shadow-md"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2 
              className="font-playfair font-semibold text-3xl mb-6 text-center"
              variants={fadeInUp}
            >
              Our Approach
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-terracotta font-playfair font-bold text-2xl">01</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-2">Listen</h3>
                <p className="text-slate">We begin every project by understanding your vision, needs, and lifestyle to create spaces that truly reflect you.</p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-terracotta font-playfair font-bold text-2xl">02</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-2">Design</h3>
                <p className="text-slate">Our creative process combines aesthetic vision with practical solutions, creating spaces that are beautiful and functional.</p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-terracotta font-playfair font-bold text-2xl">03</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-2">Deliver</h3>
                <p className="text-slate">We manage every aspect of the process, ensuring that the final result exceeds expectations and is delivered on time.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
