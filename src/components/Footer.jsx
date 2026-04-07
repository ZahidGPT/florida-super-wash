import { Link } from 'react-router-dom';
import { Droplets, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="w-7 h-7 text-primary-400" />
            <span className="font-heading font-bold text-xl text-white">Florida Super Wash</span>
          </div>
          <p className="text-sm leading-relaxed">Riverview's trusted car wash since 2015. Premium wash services at unbeatable prices. Your car deserves the best.</p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link>
            <Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Our Services</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>Exterior Wash</span>
            <span>Interior Detailing</span>
            <span>Full-Service Wash</span>
            <span>Wax & Shine</span>
            <span>Engine Cleaning</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
              <span>10070B Gibsonton Dr, Riverview, FL 33578</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-400" />
              <a href="tel:(813) 956-9274" className="hover:text-primary-400 transition-colors">(813) 956-9274</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Florida Super Wash S and S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
