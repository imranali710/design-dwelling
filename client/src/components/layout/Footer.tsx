import { Link } from "wouter";
import { FaInstagram, FaFacebookF, FaPinterest, FaHouzz, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">ModernHaus</h3>
            <p className="mb-4">
              Transforming spaces into homes that inspire living, one design at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-terracotta transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-terracotta transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-terracotta transition-all"
                aria-label="Pinterest"
              >
                <FaPinterest size={20} />
              </a>
              <a
                href="https://houzz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-terracotta transition-all"
                aria-label="Houzz"
              >
                <FaHouzz size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="hover:text-terracotta transition-all cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-terracotta transition-all cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-terracotta transition-all cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="hover:text-terracotta transition-all cursor-pointer">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-terracotta transition-all cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="hover:text-terracotta transition-all cursor-pointer">Architectural Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-terracotta transition-all cursor-pointer">Interior Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-terracotta transition-all cursor-pointer">3D Visualization</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-terracotta transition-all cursor-pointer">Landscape Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-terracotta transition-all cursor-pointer">Project Management</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-terracotta mt-1 mr-2 shrink-0" />
                <span>123 Design Avenue<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-terracotta mr-2 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-terracotta mr-2 shrink-0" />
                <span>info@modernhaus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} ModernHaus Design. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm mr-4 hover:text-terracotta transition-all">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-terracotta transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
