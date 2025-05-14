import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { FaInstagram, FaFacebookF, FaPinterest, FaHouzz, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | ModernHaus Design</title>
        <meta name="description" content="Get in touch with ModernHaus Design to discuss your project or schedule a consultation with our design team." />
      </Helmet>

      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-terracotta mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-slate">
              Get in touch to discuss your project or schedule a consultation with our design team.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeInUp}>
              <ContactForm />
            </motion.div>
            
            <motion.div variants={fadeIn("left")}>
              <div className="bg-beige p-8 rounded-lg mb-8">
                <h3 className="font-playfair font-semibold text-2xl mb-6">Visit Our Studio</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-terracotta mt-1 mr-4 shrink-0" />
                  <p>123 Design Avenue<br />San Francisco, CA 94103</p>
                </div>
                <div className="flex items-start mb-4">
                  <Phone className="h-5 w-5 text-terracotta mt-1 mr-4 shrink-0" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-start mb-4">
                  <Mail className="h-5 w-5 text-terracotta mt-1 mr-4 shrink-0" />
                  <p>info@modernhaus.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-terracotta mt-1 mr-4 shrink-0" />
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: By appointment</p>
                </div>
              </div>
              
              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.01498696636!2d-122.43913217402648!3d37.76406387355857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1655994773974!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps showing ModernHaus Design location"
                ></iframe>
              </div>
              
              <div className="mt-6 flex justify-center space-x-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-slate hover:text-terracotta transition-all"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-slate hover:text-terracotta transition-all"
                >
                  <FaFacebookF size={24} />
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="text-slate hover:text-terracotta transition-all"
                >
                  <FaPinterest size={24} />
                </a>
                <a 
                  href="https://houzz.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Houzz"
                  className="text-slate hover:text-terracotta transition-all"
                >
                  <FaHouzz size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate hover:text-terracotta transition-all"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
